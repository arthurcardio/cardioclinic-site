import type { MetadataRoute } from "next";
import { clinica, especialidades, exames, medicos, rotaMedico } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const rotas = [
    "/",
    ...especialidades.map((e) => e.rota),
    "/exames",
    ...exames.map((e) => e.rota),
    "/corpo-clinico",
    ...medicos.map(rotaMedico),
    "/contato",
  ];
  return rotas.map((r) => ({ url: clinica.url + r, lastModified: new Date() }));
}
