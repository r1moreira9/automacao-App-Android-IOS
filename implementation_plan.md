# Arquitetura para Aplicativos White Label (Múltiplos Clientes)

O problema atual é que as capacidades do Appium (como \`appPackage\` e \`appActivity\`) e os seletores (como \`~layout_email_field\`) estão fixos (hardcoded) para um único aplicativo. Como se trata de um projeto White Label, onde o mesmo app tem versões para clientes diferentes (gerando diferentes APKs, pacotes e possivelmente IDs de UI diferentes), precisamos de uma abordagem dinâmica.

A solução proposta é externalizar essas variações em arquivos de configuração específicos para cada cliente e injetá-las dinamicamente, tanto no WebdriverIO quanto nos Page Objects.

## User Review Required

> [!IMPORTANT]
> Precisamos confirmar se a estruturação proposta atende às suas necessidades. Este plano prevê o uso de **variáveis de ambiente** para definir o cliente em execução no momento do teste.

## Proposed Changes

### 1. Central de Configurações de Cliente (`/config/clients`)
Vamos criar uma nova pasta para abrigar a parametrização de cada cliente. 

#### [NEW] `config/clients/chapeco.js`
Este arquivo atuará como a "fonte da verdade" do cliente Chapeco. Ele terá este formato (em JavaScript, para poder suportar lógica se necessário):
```javascript
module.exports = {
    appPackage: 'br.com.pmb.abtchapeco',
    appActivity: 'br.com.pmb.abt.MainActivity',
    selectors: {
        login: {
            username: '~layout_email_field',
            password: '~layout_password_field',
            submitBtn: '~btnLogin'
        }
    }
}
```

#### [NEW] `config/clientManager.js`
Um simples gerenciador que lê a variável de ambiente (ex: `process.env.CLIENT`) e retorna a configuração apropriada. Se nenhuma for passada, pode usar uma configuração *default* ou abortar a execução.

---

### 2. Configurações do WebdriverIO
Precisamos fazer o arquivo principal de configuração ler a nova estrutura.

#### [MODIFY] `wdio.conf.js`
- Importar o `clientManager.js`.
- Alimentar as `capabilities` do Android lendo de `clientConfig.appPackage` e `clientConfig.appActivity` no lugar das strings fixas atuais.

---

### 3. Adaptação dos Page Objects (Testes inalterados!)
A ideia de não mexer em `test.e2e.js` (os testes em si) é alcançada usando os PageObjects como ponte.

#### [MODIFY] `test/pageobjects/login.page.js`
- Importar o `clientManager.js`.
- Alterar os *getters* dos elementos para consultar o seletor correspondente no objeto do cliente.
Exemplo:
```javascript
    get inputUsername() {
        return $(clientConfig.selectors.login.username);
    }
```

---

### 4. Scripts de Execução

#### [MODIFY] `package.json`
- Adicionar scripts para executar clientes específicos com facilidade e, para o Windows, adicionar `cross-env` para setar variáveis do ambiente corretamente em múltiplos SOs.
Ex: `"test:chapeco": "cross-env CLIENT=chapeco wdio run ./wdio.conf.js"`

## Open Questions

> [!QUESTION]
> 1. **Deseja incluir alguma chave no arquivo de configuração do cliente para iOS agora?** Como \`bundleId\` e \`app\`?
> 2. **O uso do pacote npm \`cross-env\`, que facilita passar variáveis de ambiente no Windows, está ok para você?** Precisaremos instalá-lo (\`npm i -D cross-env\`).
> 3. **Os seletores tendem a variar muito ou são a maioria iguais entre os APKs White Label?** Se a maioria for igual, podemos gerar uma configuração "base" (default) que os clientes apenas sobrescrevem quando houver algo diferente.

## Verification Plan

### Teste Manual
- Executaremos o comando \`npm run test:chapeco\`. O CLI não deve falhar em validar o Appium e o framework precisará enxergar as configs definidas no arquivo \`chapeco.js\`.
- Verificaremos se o `test.e2e.js` passa normalmente como passava antes (já que ele não deve ser modificado).
