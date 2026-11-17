# Sincronizar o progresso na nuvem (Firebase)

Com isto, o **programa** e o **material** continuam nos computadores (pasta do OneDrive) e só o **seu progresso** (respostas, XP, sequência, cartões, onde você parou) fica numa conta sua no Firebase. Ao abrir o curso em qualquer computador, ele traz o progresso da nuvem e junta com o que já existe ali; enquanto você estuda, ele envia as mudanças sozinho.

Custa **R$ 0**: o plano gratuito (Spark) é muito maior do que este uso. Não precisa de cartão de crédito.

Você faz os passos 1 a 5 **uma única vez** (cerca de 10 minutos). O login do curso é por **e-mail e senha** (a conta do curso, criada dentro do próprio app). Prefira um e-mail pessoal e uma senha que você não use em outro lugar.

## 1. Criar o projeto

1. Abra <https://console.firebase.google.com> e entre com a sua conta Google.
2. **Criar um projeto** (ou *Adicionar projeto*). Nome sugerido: `ingles-curso`.
3. Quando perguntar sobre o Google Analytics, **desative** (não é necessário). Clique em **Criar projeto**.

## 2. Ativar o login por e-mail e senha

1. No menu da esquerda: **Atalhos do projeto → Authentication** (em versões antigas do console: *Build → Authentication*) → **Vamos começar**.
2. Aba **Sign-in method** (*Método de login*) → **E-mail/senha** → **Ativar** a primeira chave (*E-mail/senha*). Deixe **desligado** o *Link por e-mail (login sem senha)* → **Salvar**.
(Os *Domínios autorizados* em Authentication → Configurações não importam para este curso: o login por e-mail e senha não os usa.)

Você não precisa criar o usuário no console: a conta é criada no próprio curso, no passo 6 (**Criar conta**).

## 3. Criar o banco de dados (Firestore)

1. Menu da esquerda: **Atalhos do projeto → Firestore** (ou **Bancos de dados e armazenamento → Firestore**; em versões antigas do console: *Build → Firestore Database*) → **Criar banco de dados**.
2. Local: escolha `southamerica-east1` (São Paulo) ou o mais próximo. Modo: **Produção**. **Ativar**.

## 4. Colar as regras de segurança

Estas regras garantem que **só você**, logado, lê e escreve o seu progresso.

1. Em Firestore Database, abra a aba **Regras**.
2. Apague o que estiver lá, cole o texto abaixo e clique em **Publicar**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /progresso/{uid} {
      allow read, delete: if request.auth != null && request.auth.uid == uid;
      allow create, update: if request.auth != null && request.auth.uid == uid
                            && request.resource.data.json is string
                            && request.resource.data.json.size() < 950000;
    }
  }
}
```

## 5. Registrar o app e copiar a configuração

1. No menu da esquerda, clique em **Configurações** (ícone de engrenagem, logo abaixo de *Visão geral do projeto*) → **Configurações do projeto**.
2. Role até **Seus apps** → ícone **`</>`** (Web) → apelido `curso` → **Registrar app** (não marque o Firebase Hosting).
3. Vai aparecer um trecho com `const firebaseConfig = { apiKey: "...", authDomain: "...", projectId: "...", ... }`. **Copie só o que está entre as chaves.**
4. Abra o arquivo `firebase-config.js` (nesta pasta) e troque `window.FIREBASE_CONFIG = null;` por:

```js
window.FIREBASE_CONFIG = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  appId: "..."
};
```

Como esse arquivo está na pasta do OneDrive, **o outro computador recebe a configuração sozinho**.

> A `apiKey` não é uma senha: ela só identifica o projeto. Quem protege os dados são o login e as regras do passo 4.

## 6. Entrar e usar

1. Abra o curso: dê duplo clique no **`index.html`** (pasta `app-curso`). Funciona abrindo direto do arquivo, sem servidor e sem Python. O `Abrir curso.bat` continua valendo se você preferir. (Use sempre a mesma forma em cada computador: o navegador guarda o progresso local separado por endereço. Com a nuvem ligada isso não faz mal, porque ao entrar tudo volta da nuvem.)
2. Clique em **🔄** (topo). **Na primeira vez**, escreva o e-mail e uma senha (mínimo 6 caracteres) e clique em **Criar conta**. Nas próximas, use **Entrar**. Se esquecer a senha, **Esqueci a senha** envia um e-mail para redefinir.
3. Pronto: o ponto ao lado do 🔄 fica **verde** quando está sincronizado, **amarelo** enquanto envia e **vermelho** se houver erro ou falta de internet.
4. No **outro computador**, repita o passo 6, mas clicando em **Entrar** (com o mesmo e-mail e senha), e **não** em Criar conta. O progresso vem da nuvem.

## Como funciona no dia a dia

- Ao abrir o curso e ao voltar para a aba depois de alguns minutos, ele confere a nuvem.
- Alguns segundos depois de cada mudança (resposta, cartão…), ele envia.
- Os dois computadores podem ser usados em dias diferentes sem cuidado nenhum. Se forem usados perto um do outro, a **mesclagem** junta tudo: resposta mais recente vence, XP e contadores ficam com o maior valor, conquistas e datas mais antigas são mantidas.
- Excluir ou editar um cartão ou baralho num computador vale também no outro. Se você recriar um item depois de excluí-lo, o novo é mantido.
- **"Continuar de onde parei"** segue a sessão mais recente, de qualquer computador.
- Sem internet o curso funciona normalmente; as mudanças vão para a nuvem na próxima conexão.
- A sessão fica guardada **neste navegador** (um código de renovação, nunca a senha), então você não precisa entrar toda vez. **Sair da conta** ou limpar os dados do navegador apaga isso.
- A conexão com o Firebase é feita pelo próprio curso (sem o programa oficial do Firebase), por isso funciona abrindo o `index.html` direto do arquivo.
- **As configurações (tema, meta diária, nome, velocidade da voz…) ficam por computador** e não são sincronizadas.
- O **perfil de teste** 🧪 nunca vai para a nuvem.
- **Apagar todo o progresso** (⚙) apaga também a cópia na nuvem. Sem isso, o progresso voltaria da nuvem ao reabrir.
- Continue exportando um backup em arquivo de vez em quando (🔄 → Exportar): é a sua cópia independente.

## Se algo der errado

| Mensagem no 🔄 | O que fazer |
|---|---|
| "Sem permissão no Firestore" | Refaça o passo 4 (regras publicadas) e confira se entrou com a mesma conta. |
| "O login por e-mail e senha não está ativado" | Passo 2.2. |
| "A sessão expirou" | Entre de novo com o e-mail e a senha. Acontece se você mudar a senha, sair da conta ou limpar os dados do navegador. |
| "A chave (apiKey) … não é aceita" | Confira se o `apiKey` em `firebase-config.js` foi copiado inteiro. |
| "O banco do Firestore não foi encontrado" | Passo 3 (criar o banco) ou o `projectId` em `firebase-config.js` está errado. |
| "E-mail ou senha incorretos" | Confira os dados. Se ainda não criou a conta, use **Criar conta**; se esqueceu a senha, **Esqueci a senha**. |
| "Já existe uma conta com esse e-mail" | Use **Entrar** em vez de Criar conta. |
| "Sem conexão com a internet" | O curso segue local; sincroniza quando a internet voltar. |
| "nuvem não configurada" | `firebase-config.js` ainda está com `null`. |
| "O progresso ficou grande demais" | Limite do Firestore (1 MB por documento; o curso usa 900 KB como teto). Em 🔄 há uma barra com o espaço usado. Exporte um backup e me avise para dividir os dados. |

## Privacidade e custo

- O que vai para a nuvem: apenas o seu progresso (respostas, anotações, cartões, datas de estudo). O texto das aulas e o gabarito dos mini-testes **não** vão.
- Fica no seu projeto do Firebase; só quem entra com o seu e-mail e senha lê (regras do passo 4). A senha fica com o Firebase; o curso nunca a guarda.
- Para parar de usar: 🔄 → **Sair da conta**, e (se quiser) exclua o projeto no console do Firebase.
- O consumo (algumas leituras e gravações por dia, um documento de poucas dezenas de KB) fica muito abaixo do limite gratuito.
