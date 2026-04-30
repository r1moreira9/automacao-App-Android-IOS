# automacao-App-Android 🚀

## Descrição

Automação de testes end‑to‑end para aplicativos Android utilizando **JavaScript**, **WebdriverIO** e **Appium**. O objetivo principal é garantir a qualidade das funcionalidades críticas do app na plataforma Android, possibilitando execuções de testes consistentes e escaláveis.

## Funcionalidades ✨

- Execução de testes em dispositivos Android reais ou emuladores.
- Integração com **Appium** para controle de gestos, navegação e interações nativas.
- Suporte a múltiplos ambientes (White‑Label) através de configuração centralizada.
- Captura automática de screenshots e relatórios HTML ao final de cada execução.
- Integração CI/CD para execução em pipelines automatizadas.

## Tecnologias 🛠️

- **JavaScript (ES2022)**
- **WebdriverIO** – framework de teste automatizado
- **Appium** – driver para automação mobile
- **Mocha** – runner de testes
- **Chai** – assertions
- **Node.js** (v18 ou superior)
- **Git** – versionamento de código

## Instalação ⚙️

```bash
# 1️⃣ Clonar o repositório
git clone https://github.com/seu-usuario/automacao-App-Android-IOS.git

# 2️⃣ Entrar na pasta do projeto
cd automacao-App-Android-IOS

# 3️⃣ Instalar dependências (npm ou yarn)
npm install   # ou `yarn install`
```

> ⚠️ Certifique‑se de que o **Node.js** está instalado na sua máquina (versão 18+).

## Uso ▶️

```bash
# Executar todos os testes end‑to‑end
npm test   # ou `yarn test`
```

Para rodar os testes, utilize o script padrão do npm:

```bash
# Executar todos os testes Android
npm test
```
-- Para o Projeto peimeiro no temianl em modo admin
appium

-- Após tenha o Android Studio Aberto e com emulador iniciado

-- no vscode abre um terminal e rode o comando
npm run test:(projeto desejado)

---

> 📄 **Boa prática:** mantenha o `ANDROID_HOME` e `JAVA_HOME` configurados no seu ambiente e atualize as capabilities no `wdio.conf.js` conforme a versão do emulador/dispositivo.
