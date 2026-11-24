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
