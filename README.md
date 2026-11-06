<img width="636" height="383" alt="CapturartaletAi" src="https://github.com/user-attachments/assets/ebf672f6-d816-4fb4-a25b-f5f51ee950c2" />
🐝 TalentAI — Portal Inteligente e Seguro de Recrutamento & Seleção

⚠️ PROTÓTIPO EM FASE DE CONSTRUÇÃO / PROVA DE CONCEITO (PoC)

Este repositório contém uma versão preliminar e demonstrativa do TalentAI. O sistema está em desenvolvimento ativo, focado no teste de usabilidade (UX/UI), validação da arquitetura de navegação e demonstração dos fluxos de recrutamento.

📌 Sobre o Projetos e Objetivo

O TalentAI é uma plataforma inovadora criada para conectar Candidatos, Recrutadores e Administradores. O objetivo do projeto é demonstrar como uma interface inspirada em inteligência artificial pode simplificar e acelerar etapas do processo seletivo, oferecendo visualização interativa de currículos, agendamento simplificado e canais diretos de comunicação.

🚧 Status do Desenvolvimento (Em Construção)

A versão atual é um protótipo frontend funcional em memória. As seguintes características marcam o estado do projeto neste momento:

🔄 Persistência Temporária: As edições e novos cadastros ficam mantidos durante a sessão do navegador (dados simulados via mockData.js).

🔑 Autenticação Simulada: A validação em duas etapas (SMS Token) gera o código diretamente na tela para testes de fluxo.

💬 Comunicação Interativa: O chat e a agenda operam com respostas e eventos locais.

🛠️ Tecnologias e Ferramentas Utilizadas

💻 Frontend & Interface

React 18: Biblioteca principal para renderização de componentes e gerenciamento de estado.

Babel Standalone (@babel/standalone): Compilação dinâmica de JSX direto no navegador (ambiente de testes rápido).

Tailwind CSS: Framework utilitário para design escuro moderno (dark mode), responsividade e efeitos visuais (backdrop-blur, glassmorphism).

🤖 Inteligências Artificiais Envolvidas no Desenvolvimento

O desenvolvimento deste protótipo contou com o suporte avançado de Inteligências Artificiais Generativas:

Google Gemini:

Auxílio na concepção visual da marca e mascote (Abelha Robótica Operária / Cyber-Bee).

Estruturação modular da arquitetura do projeto (separação de componentes em pastas js/components/, js/data/, etc.).

Apoio na escrita do código JSX/CSS e geração da documentação técnica.

Algoritmos de Match Tecnológico (Lógica do Protótipo):

Lógica interna simulada para cálculo de compatibilidade percentual entre o perfil do candidato e a vaga.

📁 Estrutura de Arquivos do Projeto



<img width="636" height="383" alt="CapturartaletAi" src="https://github.com/user-attachments/assets/596601cf-195f-44ff-bd9c-077b12bda580" />



🚀 Como Executar o Protótipo Localmente

Por se tratar de um protótipo frontend sem dependência de build ou Node.js complexo, a execução é imediata:

Clone este repositório ou baixe os arquivos da aplicação.

Navegue até a pasta do projeto.

Abra o arquivo index.html diretamente em qualquer navegador web atualizado.
1. Clone o repositório ou baixe os arquivos compactados (`.zip`):
   ```bash
   git clone [https://github.com/seu-usuario/talentai-project.git](https://github.com/seu-usuario/talentai-project.git)

🔮 Próximos Passos (Roadmap de Evolução)

[ ] Integração com banco de dados real (PostgreSQL ou MongoDB).

[ ] Envio real de SMS (Twilio) e disparo de e-mails transacionais.

[ ] Implementação de API de IA generativa para triagem e análise preditiva real de currículos.

