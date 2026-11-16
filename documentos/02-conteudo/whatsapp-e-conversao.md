# WhatsApp e conversão

Número único: +55 18 98827-5450
Link base: https://wa.me/5518988275450?text=MENSAGEM (mensagem codificada para URL)

## Regra
Todo botão de WhatsApp abre a conversa com uma mensagem já escrita, diferente conforme a página em que a pessoa está. Assim a recepção já sabe o que ela quer, e o Analytics registra a origem.

## Mensagens por tipo de página

| Onde está o botão | Mensagem |
|---|---|
| Botão flutuante e home | Olá! Vim pelo site da Cardio Clinic e gostaria de agendar um atendimento. |
| Página de especialidade | Olá! Vim pelo site e gostaria de agendar uma consulta de [cardiologia / neurologia / pneumologia / geriatria]. |
| Página de médico(a) | Olá! Vim pelo site e gostaria de agendar uma consulta com [o Dr. / a Dra. NOME]. |
| Página de exame da clínica (ECG, Holter, MAPA, teste ergométrico, espirometria) | Olá! Vim pelo site e gostaria de agendar um exame: [NOME DO EXAME]. |
| Página do ecocardiograma | Olá! Vim pelo site e gostaria de agendar um ecocardiograma. |
| Página da eletroneuromiografia | Olá! Vim pelo site e gostaria de agendar uma eletroneuromiografia. |
| Contato | Olá! Vim pelo site da Cardio Clinic e gostaria de tirar uma dúvida. |

Em página interna, o botão flutuante usa a mensagem da própria página (não a genérica).

## Caso especial: Dra. Caroline Molina
Ela faz consulta E ecocardiograma. Na página dela, DOIS botões, lado a lado:
1. "Agendar consulta" → Olá! Vim pelo site e gostaria de agendar uma consulta de cardiologia com a Dra. Caroline Molina.
2. "Agendar ecocardiograma" → Olá! Vim pelo site e gostaria de agendar um ecocardiograma com a Dra. Caroline Molina.

O mesmo padrão vale para a Dra. Izadora (consulta de neurologia / eletroneuromiografia).

## Medição

### Google Analytics 4 (fonte principal)
Evento `whatsapp_click` em todo clique, com parâmetros:
- `tipo`: geral | especialidade | medico | exame | contato
- `item`: ex. "cardiologia", "caroline-molina", "ecocardiograma"
- `acao`: consulta | exame | duvida
- `pagina`: caminho da URL
Marcar `whatsapp_click` como evento principal (conversão) no GA4.
Também medir: clique em "como chegar" (`rota_click`) e clique no telefone (`telefone_click`).

### Google Ads
Uma conversão "Clique no WhatsApp" disparada no mesmo clique. ID a cadastrar em variável de ambiente (ainda não criado).
NÃO usar conversões otimizadas com dados do usuário, listas de remarketing nem lista de clientes: o segmento é saúde.

### Meta (Instagram/Facebook)
- Pixel só com PageView e um evento genérico de contato, SEM parâmetros de médico, exame ou especialidade e sem enviar a URL com parâmetros.
- Contas de saúde podem ter eventos de conversão restringidos pela Meta. Não depender do pixel: usar UTM nos anúncios e ler o resultado no GA4.

### Consentimento (LGPD)
Banner de cookies: Analytics e pixels só carregam depois do aceite. Usar o Consent Mode do Google.
Nenhum dado de saúde é coletado pelo site: não há formulário com sintomas ou diagnóstico. O contato acontece dentro do WhatsApp.
