# 🐆 FURIA Chat Bot 2.0

> App mobile para **fãs da FURIA Esports**: acompanhamento de partidas, assistente de IA especializado no time e autenticação de usuários. Projeto construído com React Native + Expo e integrado à OpenAI.

<p>
  <img src="https://img.shields.io/badge/React_Native-61DAFB?logo=react&logoColor=000" />
  <img src="https://img.shields.io/badge/Expo-000020?logo=expo&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/OpenAI-412991?logo=openai&logoColor=white" />
  <img src="https://img.shields.io/badge/status-em%20desenvolvimento-yellow" />
</p>

## 📸 Preview

<!-- Substitua pelos screenshots do app -->
<p align="center">
  <em>Screenshots em breve.</em>
</p>

## ✨ Funcionalidades

- 🔔 **Acompanhamento de partidas** — calendário de jogos da FURIA
- 🤖 **Assistente de IA FURIA**
  - Informações sobre jogadores, histórico e próximos jogos
  - Respostas sobre o time e campeonatos
- 👤 **Autenticação**
  - Cadastro e login com e-mail e senha
  - Validação de sessão

## 🛠 Stack

- [React Native](https://reactnative.dev/) + [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [OpenAI API (GPT)](https://platform.openai.com/) — motor do assistente

## 🧩 Decisões de projeto

- **Expo** para acelerar o setup e permitir testar rapidamente em dispositivos reais via Expo Go.
- **OpenAI com contexto fixo** sobre a FURIA para manter o assistente especializado no time.

## 🚀 Como rodar

```bash
# 1. Clone o repositório
git clone https://github.com/AkiraGitDev/furia-chat-bot-2.0.git
cd furia-chat-bot-2.0

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
# Crie um arquivo .env com sua chave da OpenAI
EXPO_PUBLIC_OPENAI_API_KEY=sk-...

# 4. Inicie o bundler
npx expo start
```

Depois escaneie o QR Code com o **Expo Go** ou abra em um emulador.

## 📁 Estrutura

```text
/app         # Rotas (Expo Router)
/components  # Componentes reutilizáveis
/constants   # Constantes e cores
/assets      # Imagens e ícones
```

## 🗺 Próximos passos

- [ ] Notificações push para jogos e eventos
- [ ] Modo escuro / claro
- [ ] Integração com redes sociais
- [ ] Loja oficial e sistema de recompensas para fãs

## 🧠 O que aprendi

- Integrar APIs de LLM em um app mobile
- Fluxo básico de autenticação em React Native
- Organização de estado para chat em tempo real

---

**Feito com 💜 por um fã, para fãs da FURIA.**
