# Runnenergy
Projeto da matéria "Web Mobile" sobre um site para procurar profissionais de corrida próximo de você

# Integrantes 
    - Leonardo C. Magalhães: 10395913
    - Murillo Vassoler: 10438656
    
# Processo de Ideação
O Runnenergy foi idealizado como uma plataforma digital voltada para a comunidade de corredores, com o objetivo de facilitar a conexão entre atletas e profissionais especializados em áreas relacionadas à performance e saúde, como nutrição, fisioterapia e treinamento esportivo. A proposta busca centralizar esses serviços em um único ambiente, permitindo que corredores encontrem profissionais próximos, comparem avaliações e tenham acesso a suporte qualificado para sua evolução no esporte. Dessa forma, o projeto integra tecnologia e esporte para fortalecer o ecossistema da corrida e promover uma prática mais orientada e segura.

# Caráter Extensionista
O projeto Runnenergy possui caráter extensionista por buscar aplicar uma solução tecnológica desenvolvida no meio acadêmico para atender necessidades reais da comunidade esportiva. A ideia é aproximar corredores de profissionais especializados, facilitando o acesso a serviços de saúde e performance. Como exemplo de aplicação prática, uma loja especializada em corrida na cidade da proponente demonstrou interesse em utilizar o sistema para conectar seus clientes a profissionais da área, fortalecendo o ecossistema local da corrida e ampliando o impacto social da iniciativa

# Wireframe
- Desktop
<img width="1366" height="1536" alt="Email ou login" src="https://github.com/user-attachments/assets/3b9c1f7f-da5a-4338-862e-760338d3b872" />

- Mobile
<img width="331" height="668" alt="Captura de Tela 2026-03-05 às 08 58 55" src="https://github.com/user-attachments/assets/fb8f2c03-57ef-4c41-a00d-731b3092b630" />

# Estrutura HTML
O projeto foi desenvolvido com HTML5, utilizando uma estrutura semântica para organizar os elementos das páginas de forma clara e acessível. Na página inicial, foram utilizados elementos como `header`, `nav`, `main`, `section` e `footer`, permitindo separar visual e logicamente as áreas do site, como o cabeçalho com logo e navegação, a seção principal de apresentação, os botões de download e o rodapé com links institucionais e redes sociais. Além disso, o HTML faz uso de atributos de acessibilidade, como `aria-label`, para melhorar a navegação e a interpretação dos elementos por tecnologias assistivas. :contentReference[oaicite:3]{index=3}

Na página de login, a estrutura também segue uma organização semântica, com foco em usabilidade. Foram utilizados elementos como `form`, `input`, `button` e `section`, separando a área visual da imagem de capa da área funcional de autenticação. O formulário foi planejado para oferecer uma experiência simples e intuitiva, incluindo campos para e-mail e senha, botão principal de login e opções de autenticação social. :contentReference[oaicite:4]{index=4}

# Estrutura CSS
A estilização do projeto foi centralizada em um único arquivo CSS, responsável por definir tanto a aparência da página inicial quanto da página de login. Inicialmente, foram aplicadas configurações globais para padronizar margens, espaçamentos, tipografia e comportamento de imagens e links. Também foram utilizadas variáveis CSS no seletor `:root`, permitindo organizar melhor a identidade visual do projeto por meio da definição de cores principais, tons de fundo, textos e elementos específicos de cada tela. :contentReference[oaicite:5]{index=5}

Na página inicial, o CSS foi utilizado para estruturar o layout com `grid` e `flexbox`, garantindo melhor distribuição dos elementos no cabeçalho, na seção principal e no rodapé. O campo de busca, os botões de login e os botões das lojas de aplicativos receberam estilizações específicas para reforçar a identidade visual do projeto e tornar a interface mais moderna. Já o rodapé foi organizado em colunas, com espaçamento adequado e ícones sociais estilizados para complementar a navegação do usuário. :contentReference[oaicite:6]{index=6}

Na página de login, o CSS foi responsável por criar uma divisão em duas áreas principais: uma seção visual com imagem de fundo e uma seção funcional com o formulário. Foram aplicados gradientes, botões arredondados, campos de entrada estilizados e efeitos visuais em interações, como hover e clique, proporcionando uma interface mais agradável e profissional. Além disso, o projeto conta com regras de responsividade por meio de `@media`, permitindo adaptar a disposição dos elementos em diferentes tamanhos de tela, tanto no desktop quanto no mobile. :contentReference[oaicite:7]{index=7}
