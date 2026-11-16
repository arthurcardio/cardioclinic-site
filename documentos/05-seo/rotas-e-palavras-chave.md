# Rotas e palavras-chave

## Rotas do lançamento

| Rota | Página | Busca principal |
|---|---|---|
| / | Home | clínica de cardiologia em Presidente Prudente |
| /cardiologista-presidente-prudente | Cardiologia | cardiologista em Presidente Prudente |
| /neurologista-presidente-prudente | Neurologia | neurologista em Presidente Prudente |
| /pneumologista-presidente-prudente | Pneumologia | pneumologista em Presidente Prudente |
| /geriatria-presidente-prudente | Geriatria | geriatria em Presidente Prudente |
| /exames | Lista de exames | exames cardiológicos em Presidente Prudente |
| /exames/eletrocardiograma-presidente-prudente | ECG | eletrocardiograma em Presidente Prudente |
| /exames/ecocardiograma-presidente-prudente | Ecocardiograma | ecocardiograma em Presidente Prudente |
| /exames/holter-24h-presidente-prudente | Holter | holter 24h em Presidente Prudente |
| /exames/mapa-24h-presidente-prudente | MAPA | mapa 24h em Presidente Prudente |
| /exames/teste-ergometrico-presidente-prudente | Teste ergométrico | teste ergométrico em Presidente Prudente |
| /exames/espirometria-presidente-prudente | Espirometria | espirometria em Presidente Prudente |
| /exames/eletroneuromiografia-presidente-prudente | ENMG | eletroneuromiografia em Presidente Prudente |
| /corpo-clinico | Lista de médicos | médicos Cardio Clinic |
| /corpo-clinico/[slug] | Uma página por médico (6) | nome do médico |
| /sobre | A clínica | Cardio Clinic Presidente Prudente |
| /contato | Contato e como chegar | endereço e telefone |
| /politica-de-privacidade | Política de privacidade | — |

Slugs dos médicos: arthur-zogheib-pinatto, caroline-molina, mariana-gea-del-trejo, izadora-lopes-lima, barbara-goncales-olivo, bruna-beloni-fantini.

A rota de geriatria usa "geriatria" (a área), não "geriatra" (o título).

## Depois do lançamento
- /conteudos (blog), com post assinado e revisado por médico. Deixar a estrutura preparada, sem link no menu e fora do sitemap até existir o primeiro post.
- Seção de vídeos (YouTube com carregamento só no clique), quando a clínica tiver canal.

## Palavras-chave
Lista inicial, montada por raciocínio e pela concorrência local. AINDA NÃO VALIDADA com volume de busca: validar no Planejador de Palavras-chave do Google Ads e, depois de publicar, no Search Console.
- Com cidade: cardiologista, neurologista, pneumologista, geriatria, ecocardiograma, teste ergométrico, holter, mapa, espirometria, eletroneuromiografia, eletrocardiograma + "Presidente Prudente".
- Região (testar em anúncio, não criar página por cidade): Álvares Machado, Regente Feijó, Pirapozinho, Presidente Bernardes, Martinópolis.
- Intenção de preço: "consulta cardiologista particular Presidente Prudente", "quanto custa ecocardiograma". Só atender essa busca se o Dr. Arthur decidir publicar valores.

## Regras de SEO técnico (do e-book)
- Título e descrição únicos por página; URL canônica em todas.
- sitemap.xml e robots.txt gerados automaticamente.
- Open Graph com a foto da fachada.
- Schema JSON-LD: `MedicalClinic` na home (endereço, telefone, horário, redes, especialidades); `Physician` nas páginas de médico; `MedicalProcedure` ou `Service` nas de exame; `BreadcrumbList` nas internas; `FAQPage` onde houver perguntas.
- Imagens otimizadas, com `sizes`; prioridade na foto do topo, carregamento preguiçoso nas demais.
- PageSpeed testado no celular e no computador, em todas as páginas.
