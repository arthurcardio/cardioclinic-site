"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useSyncExternalStore } from "react";
import {
  assinarConsentimento,
  gravarConsentimento,
  lerConsentimento,
  type Consentimento,
} from "@/lib/consentimento";

// IDs cadastrados na Vercel (Settings > Environment Variables). Sem ID, nada carrega.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const ADS_ID = process.env.NEXT_PUBLIC_ADS_ID;
const ADS_CONVERSAO = process.env.NEXT_PUBLIC_ADS_CONVERSAO; // formato AW-XXXX/rotulo
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

type Janela = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  fbq?: ((...args: unknown[]) => void) & { queue?: unknown[]; loaded?: boolean; version?: string; callMethod?: (...a: unknown[]) => void; push?: unknown };
  _fbq?: unknown;
  __ccMedicao?: boolean;
};

function script(src: string) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

/** Carrega Analytics, Google Ads e pixel. So roda depois do aceite. */
function carregarMedicao() {
  const w = window as Janela;
  if (w.__ccMedicao) return;
  w.__ccMedicao = true;

  const idGoogle = GA_ID ?? ADS_ID;
  if (idGoogle) {
    w.dataLayer = w.dataLayer ?? [];
    w.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments);
    };
    // Saude: mede, mas nunca personaliza anuncio nem monta publico de remarketing.
    w.gtag("consent", "default", {
      analytics_storage: "granted",
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "denied",
    });
    w.gtag("set", "allow_ad_personalization_signals", false);
    w.gtag("js", new Date());
    if (GA_ID) w.gtag("config", GA_ID, { allow_google_signals: false });
    if (ADS_ID) w.gtag("config", ADS_ID, { allow_enhanced_conversions: false });
    script(`https://www.googletagmanager.com/gtag/js?id=${idGoogle}`);
  }

  if (PIXEL_ID) {
    const fbq = function (...args: unknown[]) {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue.push(args);
    } as NonNullable<Janela["fbq"]> & { queue: unknown[] };
    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.push = fbq;
    w.fbq = fbq;
    w._fbq = fbq;
    script("https://connect.facebook.net/en_US/fbevents.js");
    // Pixel minimo: sem dados avancados e sem detalhes de exame ou medico.
    fbq("init", PIXEL_ID);
    fbq("track", "PageView");
  }
}

function registrarClique(alvo: HTMLElement) {
  const w = window as Janela;
  const pagina = window.location.pathname;

  if (alvo.matches("[data-whatsapp]")) {
    w.gtag?.("event", "whatsapp_click", {
      tipo: alvo.dataset.tipo,
      item: alvo.dataset.item,
      acao: alvo.dataset.acao,
      origem: alvo.dataset.origem ?? "pagina",
      pagina,
    });
    if (ADS_CONVERSAO) w.gtag?.("event", "conversion", { send_to: ADS_CONVERSAO });
    // Para a Meta vai so o evento generico, sem parametros.
    w.fbq?.("track", "Contact");
  } else if (alvo.matches("[data-rota]")) {
    w.gtag?.("event", "rota_click", { pagina });
  } else if (alvo.matches("[data-telefone]")) {
    w.gtag?.("event", "telefone_click", { pagina });
  }
}

export function Medicao() {
  const consentimento = useSyncExternalStore<Consentimento | "servidor">(
    assinarConsentimento,
    lerConsentimento,
    () => "servidor",
  );
  const pathname = usePathname();
  const primeiraPagina = useRef(true);

  useEffect(() => {
    if (consentimento === "aceito") carregarMedicao();
  }, [consentimento]);

  // O pixel nao percebe troca de pagina sozinho.
  useEffect(() => {
    if (primeiraPagina.current) {
      primeiraPagina.current = false;
      return;
    }
    (window as Janela).fbq?.("track", "PageView");
  }, [pathname]);

  useEffect(() => {
    const aoClicar = (e: MouseEvent) => {
      const alvo = (e.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-whatsapp], [data-rota], [data-telefone]",
      );
      if (alvo) registrarClique(alvo);
    };
    document.addEventListener("click", aoClicar);
    return () => document.removeEventListener("click", aoClicar);
  }, []);

  if (consentimento !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Uso de cookies"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-2xl rounded-2xl border border-areia-forte bg-white p-5 shadow-xl shadow-marinho/15 sm:bottom-5"
    >
      <p className="text-[0.95rem]">
        Usamos cookies para medir as visitas e o resultado dos nossos anúncios. Você pode aceitar
        ou recusar; o site funciona do mesmo jeito.{" "}
        <Link href="/politica-de-privacidade" className="font-semibold underline underline-offset-4">
          Política de privacidade
        </Link>
      </p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => gravarConsentimento("aceito")}
          className="min-h-11 flex-1 rounded-full bg-marinho px-5 font-semibold text-white hover:bg-marinho-claro"
        >
          Aceitar
        </button>
        <button
          type="button"
          onClick={() => gravarConsentimento("recusado")}
          className="min-h-11 flex-1 rounded-full border-2 border-marinho px-5 font-semibold hover:bg-areia"
        >
          Recusar
        </button>
      </div>
    </div>
  );
}

/** Link do rodape para rever a escolha de cookies. */
export function PreferenciasDeCookies() {
  return (
    <button
      type="button"
      onClick={() => {
        const jaCarregou = (window as Janela).__ccMedicao;
        gravarConsentimento(null);
        // Se a medicao ja estava ligada, recarrega para desligar de verdade.
        if (jaCarregou) window.location.reload();
      }}
      className="underline underline-offset-4 hover:text-white"
    >
      Preferências de cookies
    </button>
  );
}
