import type { MetadataRoute } from "next";
import { clinica } from "@/lib/site";

// Enquanto o site esta em aprovacao, o Google nao indexa.
// No lancamento: criar a variavel SITE_LIBERADO=1 na Vercel.
export default function robots(): MetadataRoute.Robots {
  const liberado = process.env.SITE_LIBERADO === "1";
  return {
    rules: liberado ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    sitemap: liberado ? `${clinica.url}/sitemap.xml` : undefined,
  };
}
