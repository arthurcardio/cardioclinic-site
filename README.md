# Site da Cardio Clinic & Multiespecialidades

Site em Next.js, publicado na Vercel. Domínio: www.cardioclinicprudente.com.br

- `lib/site.ts`: todos os dados (clínica, médicos, especialidades, exames, FAQ). Para mudar um texto, é aqui.
- `lib/whatsapp.ts`: mensagens do WhatsApp por página.
- `documentos/`: material de origem (identidade, conteúdo, fotos, referências, regras de saúde).
- `scripts/preparar-imagens.py`: gera as fotos otimizadas em `public/img`.
- `PENDENCIAS.md`: o que falta.

Enquanto a variável `SITE_LIBERADO=1` não existir na Vercel, o `robots.txt` bloqueia a indexação.
