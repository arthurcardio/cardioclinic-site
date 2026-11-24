# Pendências do site

## Lançamento (situação em 16/11/2026)
Feito no código: página "sobre", política de privacidade, banner de cookies, medição (GA4, Google Ads, pixel da Meta) e cabeçalhos de segurança.

Falta, nesta ordem:
- [x] Google Analytics 4 ligado (G-WKLSZV6GWJ, já no código).
- [ ] No GA4, marcar `whatsapp_click` como evento principal (só aparece depois do primeiro clique real).
- [ ] Google Ads: criar a conversão "Clique no WhatsApp" e cadastrar `NEXT_PUBLIC_ADS_ID` e `NEXT_PUBLIC_ADS_CONVERSAO`.
- [ ] Meta: a clínica ainda NÃO tem conta de anúncios. Criar o Gerenciador de Negócios e o pixel quando for anunciar no Instagram, e cadastrar `NEXT_PUBLIC_META_PIXEL_ID` na Vercel. Até lá o pixel não carrega.
- [ ] Revisão médica final dos textos.
- [ ] Apontar o domínio no Registro.br para a Vercel (principal com www).
- [ ] Cadastrar `SITE_LIBERADO=1` na Vercel e publicar de novo.
- [ ] Search Console: verificar o domínio, enviar o sitemap e pedir indexação.
- [ ] Testar no securityheaders.com e no PageSpeed (celular e computador).

Atualizado em 16/11/2026.

## Antes de construir (resolver com o Dr. Arthur)
- [x] Horário: segunda a sexta, das 8h às 18h.
- [ ] Itens [CONFIRMAR] em `documentos/02-conteudo/especialidades-e-exames.md` (preparo, duração e prazo de resultado de cada exame).
- [ ] Itens [CONFIRMAR] em `documentos/02-conteudo/faq.md` (pedido médico, formas de pagamento, estacionamento).
- [ ] RQE da Dra. Caroline: confirmar se há RQE separado de Ecocardiografia.
- [ ] Nome completo da Dra. Izadora.
- [ ] Autorização por escrito de cada médica para uso de nome e foto.
- [ ] Decidir se o site mostra preços.

## Antes de publicar
- [ ] Coordenadas do endereço conferidas no Google Maps.
- [ ] Perfil da Empresa no Google: confirmar se existe e igualar nome, endereço e telefone aos do site.
- [ ] Contas: Google Analytics 4, Search Console, Google Ads e pixel da Meta (ver `documentos/06-acessos/LEIA-ME.md`).
- [ ] Política de privacidade revisada.
- [ ] Registro da clínica no CREMESP, se houver, para o rodapé.

## Ideia em espera: WhatsApp por médica (decidido em 16/11/2026: ainda NÃO implementar)
Cada médica tem a sua secretária. Proposta de divisão, para quando o Dr. Arthur decidir:
- Página da médica e exames com médica fixa (eco, ENMG, espirometria, bioimpedância): número da secretária dela.
- Home, contato, botão flutuante geral, páginas de especialidade e exames da clínica (ECG, Holter, MAPA, Biologix): número da clínica.
- [ ] Confirmar a divisão acima.
- [ ] Receber o número de cada secretária (quem não tiver segue no da clínica).
- [ ] Definir para onde vão o teste ergométrico e as consultas do Dr. Arthur.
- [ ] Combinar com as secretárias: WhatsApp Business, prazo de resposta e mensagem automática fora do horário.
Como fazer: campo `whatsapp` opcional em cada médico em `lib/site.ts` e uso dele em `lib/whatsapp.ts`. A medição no Analytics não muda.

## Depois do lançamento (o site sai sem estes itens)
- [ ] Foto do aparelho de ecocardiograma.
- [ ] Foto da esteira do teste ergométrico.
- [ ] Foto do espirômetro.
- [ ] Foto do aparelho de eletroneuromiografia.
- [ ] Foto nova da sala de ECG, mais arrumada (opcional).
- [ ] Fotos dos médicos no mesmo padrão (opcional; por ora o site padroniza o recorte).
- [ ] Logo com o coração em vetor de verdade (pedir ao designer o arquivo original).
- [ ] Canal do YouTube da clínica e seção de vídeos.
- [ ] Blog (/conteudos).
- [ ] Trocar o FAQ de rascunho por perguntas reais do WhatsApp.
- [ ] E-mail @cardioclinicprudente.com.br (opcional).
- [ ] Imagem de compartilhamento (WhatsApp, Facebook) de cada exame usa a primeira foto da página. A do MAPA (365×250) e a da eletroneuromiografia (768×462) são pequenas: ao trocar pelas fotos reais, usar arquivos com pelo menos 1200 px de largura.

## Google Ads: o que o Claude deve orientar o Dr. Arthur (definido em 24/11/2026)
Tudo abaixo parte do site como está no ar. Cada vez que o site mudar (URL, título, exame, médica, número de WhatsApp), revisar o anúncio correspondente. Regras que valem sempre: `documentos/05-seo/regras-saude-obrigatorias.md`, seções 1 e 3.

**Antes de criar a conta**
- [ ] Liberar o site (`SITE_LIBERADO=1`) e confirmar que as páginas abrem sem erro. Anúncio apontando para página com problema é reprovado e gasta verba.
- [ ] Revisão médica final dos textos: a página de destino precisa dizer o mesmo que o anúncio.
- [ ] Decidir com ele: orçamento diário, se publica preços, quem acompanha a conta e se haverá anúncio fora do horário (segunda a sexta, 8h às 18h).

**Montar a conta**
- [ ] Criar a conta em modo especialista, pulando a campanha "inteligente" sugerida (ela escolhe palavras e textos sozinha e foge das regras de saúde).
- [ ] Vincular a conta ao GA4 (G-WKLSZV6GWJ), ao Search Console e ao Perfil da Empresa no Google (para o endereço e o telefone aparecerem no anúncio).
- [ ] Criar a conversão "Clique no WhatsApp" (tipo site). Copiar o ID `AW-XXXX` e o rótulo, cadastrar na Vercel `NEXT_PUBLIC_ADS_ID` e `NEXT_PUBLIC_ADS_CONVERSAO` (formato `AW-XXXX/rotulo`) e publicar de novo (Redeploy).
- [ ] Testar a conversão com o Tag Assistant: aceitar o banner de cookies, clicar em um botão de WhatsApp e ver o disparo. Explicar a ele que só conta quem aceita os cookies, então o número de conversões será menor que o de cliques reais.
- [ ] Ligação (`telefone_click`) e rota (`rota_click`) ficam como conversões secundárias, só para observar, sem otimizar por elas.

**Estrutura inicial das campanhas**
- [ ] Só rede de Pesquisa. Desligar Rede de Display e parceiros de pesquisa.
- [ ] Validar as palavras-chave no Planejador de Palavras-chave (etapa 2 do guia) antes de escolher: lista inicial em `documentos/05-seo/rotas-e-palavras-chave.md`.
- [ ] Um grupo de anúncios por página, com a URL final da própria página: Cardiologista, Neurologista, Pneumologista, Geriatria e cada exame (eletrocardiograma, ecocardiograma, Holter, MAPA, teste ergométrico, espirometria, eletroneuromiografia, bioimpedância, exame do sono).
- [ ] Palavras-chave com a cidade, em correspondência de frase ou exata. Negativar desde o início: grátis, SUS, concurso, vaga, curso, residência, plantão e nomes de outras clínicas. "Quanto custa" só entra se ele decidir publicar valores.
- [ ] Local: Presidente Prudente, opção "pessoas na localização". Testar depois Álvares Machado, Regente Feijó, Pirapozinho, Presidente Bernardes e Martinópolis.
- [ ] Lances: começar em "Maximizar cliques" com CPC máximo. Só migrar para "Maximizar conversões" depois de umas 30 conversões no mês.
- [ ] Anúncios de texto responsivos, no estilo "Agende seu Holter em Presidente Prudente". Proibido: promessa de resultado, "o melhor", "referência", preço sem autorização por escrito, afirmar que a pessoa tem uma doença, nome de remédio de prescrição.
- [ ] Extensões: local, ligação e sitelinks para os exames.

**O que o site já faz e o que NÃO usar no Google Ads**
- Sem remarketing, sem lista de clientes, sem públicos semelhantes, sem conversões otimizadas com dados do usuário. Personalização de anúncios já está desligada no código.
- Nada de terceiros carrega antes do aceite do banner de cookies.
- Se a CSP bloquear alguma ferramenta nova, liberar em `next.config.ts`.

**Acompanhamento**
- [ ] Nas duas primeiras semanas, ver o relatório de termos de pesquisa a cada poucos dias e negativar o que não serve.
- [ ] No GA4, criar as dimensões personalizadas do evento `whatsapp_click` (`tipo`, `item`, `acao`, `origem`, `pagina`) para ver cliques por médica e por exame.
- [ ] Comparar cliques do anúncio, cliques no WhatsApp e agendamentos reais. Pedir às secretárias que perguntem "como conheceu a clínica".
- [ ] Revisão mensal junto com o Dr. Arthur: custo por clique no WhatsApp, páginas que mais convertem, palavras a pausar.
- [ ] Meta Ads (Instagram) é outra frente: a clínica ainda não tem conta de anúncios (ver a seção de lançamento).
