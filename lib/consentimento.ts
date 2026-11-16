// Escolha de cookies do visitante. Guardada so no navegador dele.

export type Consentimento = "aceito" | "recusado" | null;

const CHAVE = "cc-consentimento";
const EVENTO = "cc-consentimento-mudou";

export function lerConsentimento(): Consentimento {
  try {
    const v = window.localStorage.getItem(CHAVE);
    return v === "aceito" || v === "recusado" ? v : null;
  } catch {
    return null;
  }
}

export function gravarConsentimento(valor: Consentimento) {
  try {
    if (valor) window.localStorage.setItem(CHAVE, valor);
    else window.localStorage.removeItem(CHAVE);
  } catch {
    // navegador sem armazenamento: a escolha vale so para esta visita
  }
  window.dispatchEvent(new Event(EVENTO));
}

export function assinarConsentimento(aoMudar: () => void) {
  window.addEventListener(EVENTO, aoMudar);
  window.addEventListener("storage", aoMudar);
  return () => {
    window.removeEventListener(EVENTO, aoMudar);
    window.removeEventListener("storage", aoMudar);
  };
}
