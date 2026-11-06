# # 🐝 TalentAI — Portal Inteligente e Seguro de Recrutamento & Seleção

O **TalentAI** é uma plataforma inovadora de recrutamento e seleção projetada para otimizar e conectar **Candidatos**, **Recrutadores** e **Administradores**. O sistema combina uma interface moderna baseada em dark mode com autenticação em etapas (Token SMS) e uma arquitetura modularizada de alta performance.

---

## 🚀 Tecnologias Utilizadas

### 💻 Frontend & Interface
* **React 18:** Biblioteca principal para renderização de componentes reativos e gerenciamento de estado global.
* **Babel Standalone (`@babel/standalone`):** Compilação dinâmica de JSX diretamente no navegador.
* **Tailwind CSS:** Framework utilitário de estilização para um design imersivo, responsivo e com efeitos de transparência (*backdrop-blur*).

### 🛠️ Estrutura & Organização do Projeto
O projeto foi modularizado em componentes independentes para facilitar a manutenção e escalabilidade:
* `index.html`: Ponto de entrada da aplicação via CDN.
* `css/styles.css`: Estilização global e imagens de fundo imersivas.
* `js/data/mockData.js`: Banco de dados simulado contendo perfis iniciais de candidatos, vagas e mensagens.
* `js/components/Header.js`: Barra de navegação superior responsiva baseada em perfis.
* `js/components/ModalAuth.js`: Sistema seguro de autenticação e validação por token SMS.
* `js/components/CandidateProfile.js`: Módulo interativo de currículo, portfólio e gestão de habilidades.
* `js/components/RecruiterView.js`: Listagem avançada de talentos com ferramentas de busca e match.
* `js/components/CompanyProfile.js`: Gestão de cultura corporativa, benefícios e vagas abertas.
* `js/components/ScheduleView.js`: Agendamento, remarcação e integração direta com salas de vídeo.
* `js/components/ChatView.js`: Canal de comunicação em tempo real entre recrutadores e candidatos.
* `js/App.js`: Componente raiz e controlador de rotas de estados do sistema.

---

## 🤖 Inteligência Artificial (IA) e IAs Utilizadas no Projeto

O ecossistema do **TalentAI** foi codesenvolvido, estruturado e refinado com o auxílio avançado de ferramentas de Inteligência Artificial:

1. **Google Gemini (Assistente de IA Pessoal / Colaborador de Código):** 
   * Utilizado para idealizar a identidade visual e o conceito da **abelha robótica operária** (*Cyber-Bee* / Operária de Precisão).
   * Responsável pela engenharia de prompt para a geração dos elementos visuais e de design do sistema.
   * Atuou ativamente na refatoração, organização modular dos arquivos em pastas e estruturação completa deste código.
2. **Sistemas de Match e Triagem (Simulados na Lógica de Estado):**
   * Algoritmos baseados em pontuação de compatibilidade percentual entre as competências técnicas exigidas pelas empresas e os portfólios dos candidatos.

---

## 📋 Como Executar o Projeto Localmente

1. Clone o repositório ou baixe os arquivos compactados (`.zip`):
   ```bash
   git clone [https://github.com/seu-usuario/talentai-project.git](https://github.com/seu-usuario/talentai-project.git)
