# Material do curso: guia para editar só o conteúdo

O curso tem **duas partes separadas**:

| Parte | Onde | O que é |
|---|---|---|
| **Site** (código) | `index.html`, `css/`, `js/`, `sw.js`, `manifest…` | Telas, exercícios, cartões, XP. **Não mexa nisto para editar o conteúdo.** |
| **Material** (conteúdo) | esta pasta, `material/` | Textos, exercícios, vocabulário, plano e imagens. É o que se edita. |

O site lê o material direto, sem etapa de montagem (“build”): salvou o arquivo, recarregou a página, está valendo.

```
material/
  LEIA-ME.md     este guia
  indice.js      lista dos arquivos que o site carrega (e das imagens, para o uso offline)
  curso.js       título do curso e plano de estudos:  window.CURSO = { curso: {…}, plano: {…} };
  m01.js … m09.js  um arquivo por módulo:  (window.CURSO_MODULOS = window.CURSO_MODULOS || []).push({ …módulo… });
  imagens/       ilustrações (.svg, .png, .jpg, .webp) usadas nos blocos "image"
```

O site junta tudo, ordena os módulos por `n` e valida ao abrir (problemas aparecem no console do navegador, tecla F12). **Módulo novo:** crie `m10.js` com o mesmo formato e acrescente `'m10.js'` em `MATERIAL_ARQUIVOS`, no `indice.js`.

> Os arquivos `.js` do material são dados (objetos JSON dentro de uma chamada), não programas: mantenha aspas duplas nas chaves, vírgulas entre itens e o fecho `});` no fim. Uma vírgula esquecida impede o módulo de carregar.

## Como pedir a outra IA para editar só o conteúdo

Anexe a pasta `material/` (ou só o arquivo do módulo, mais este guia) e use algo como:

> Edite **apenas** os arquivos da pasta `material/`, seguindo `LEIA-ME.md`. Não altere `index.html`, `css/`, `js/` nem `sw.js`. Mantenha os `id` existentes, o formato dos blocos e o estilo (explicar o porquê de cada correção). Pedido: *[o que você quer mudar]*. Devolva o arquivo inteiro alterado.

Qualquer coisa de conteúdo cabe aqui: reescrever explicações, trocar exemplos, criar exercícios, ajustar o plano, trocar ou acrescentar imagens, criar módulos.

## Regras do conteúdo

1. **JSON/objeto válido**, em UTF-8, sem comentários dentro do objeto (as duas linhas `//` do início do arquivo podem ficar).
2. **`id` estáveis e únicos.** Módulos, sessões e blocos `ex`, `video`, `prod`, `roteiro` precisam de `id`. O progresso do aluno é guardado por esses ids: **ao ajustar um material já existente, mantenha os ids**; só crie ids novos para conteúdo novo. Um mesmo id nunca pode se repetir em outro bloco/sessão/módulo.
3. **Sem tradutor automático.** Toda tradução precisa estar embutida: caixas EN/PT, `lex` (frases inteiras), `gloss` (palavras) e os pares de tabelas, leituras, diálogos e `listen`. A plataforma mostra dicas palavra a palavra e só depois a tradução completa.
4. **Mini-teste sem gabarito.** Em exercícios com `"teste": true` **não inclua `a`** (resposta). O gabarito fica com a IA, que corrige pelo relatório do aluno.
5. **Toda correção explica o porquê**: preencha `why` em todo item de exercício normal e, quando fizer sentido, `ref` apontando para a regra.
6. Não crie planilhas de acompanhamento: o app só exporta o relatório em texto e o progresso em JSON (🔄).
6b. **Toda sessão tem `revisao`**: lista de blocos (tabela, `bullets`, `errors`…) com o resumo sintético da sessão, mostrado no Caderno de erros e na Revisão programada.
6c. **Nada de dado pessoal** no conteúdo: o repositório é público (nomes, idade e cidades de exemplo são fictícios).
7. Português do Brasil nos textos de apoio; inglês americano nos exemplos.
8. **Pergunte ao aluno** antes de decidir o que é dele: formato, mudar de fase, gastos.

## Estrutura geral

```js
window.CURSO = {
  curso: {
    id: "ingles-do-zero", titulo: "Inglês do zero", subtitulo: "do A1 ao A2", versao: "v2",
    descricao: "Texto curto que aparece no painel.",
    anki: { deck: "Inglês", tag: "curso", selecionadas: "Inglês::Selecionadas" },
    videoUrl: "https://..."
  },
  plano: { /* veja "Plano de estudos" */ }
};
```

- `curso.anki.tag` vai na coluna de tags do arquivo exportado; `selecionadas` é o baralho das palavras que o aluno seleciona. Não coloque o nome do aluno: ele digita o próprio nome em ⚙ (só para a saudação).
- `lex` (frases inteiras `[["Good morning.", "Bom dia."]]`) e `gloss` (`"good=bom;morning=manhã"`, `palavra=tradução` separados por `;`) ficam **dentro de cada módulo**. Plurais e flexões simples (`-s`, `-es`, `-ing`, `-ed`) são reconhecidos.

### Plano de estudos (`plano`)

```js
plano: {
  objetivo: "texto (aceita marcação)",
  perfil: [["Ponto de partida", "Iniciante absoluto (A1)."]],           // tabela Item / Definição
  metodo: [["Título", "explicação"]],                                  // lista “Título: explicação”
  sessao: [[8, "Anki", "o que fazer"], [7, "…", "…"]],                 // [minutos, bloco, instrução]
  pilulas: ["**Pulo do gato:** …"],                                    // lista de textos
  pratica: { intro: "…", blocos: [["Cartões e revisão", 10, "o que fazer"]] }, // sessão de prática (opcional)
  ciclo: { intro: "…", passos: ["…"] },
  fases: [{ id: "f1", n: 1, nome: "Fundação", nivel: "A1", cor: "teal", descricao: "…",
            criterio: "texto do critério para avançar", modulos: ["m1","m2"], marco: "m4-s4" }],
  recursos: [["Nome", "https://…", "Fases", "Uso no plano"]],
  nota: "aviso final"
}
```

Fases sem `modulos` aparecem como "conteúdo futuro". `marco` é o id da sessão-marco (link no plano). O aluno marca o critério de cada fase (+100 XP, uma vez).

### Módulo

```json
{
  "id": "m1", "n": 1,
  "titulo": "TO BE e Present Simple",
  "descricao": "Uma ou duas frases.",
  "fase": "Fase 1 · Fundação (A1)", "faseId": "f1",
  "icone": "🧱", "cor": "teal",
  "objetivos": ["Dizer quem você é", "..."],
  "anki": { "deck": "Inglês::Módulo 01" },
  "blocos": [],
  "sessoes": [ { "...": "..." } ],
  "lex": [], "gloss": ""
}
```

`cor`: `coral`, `teal`, `blue`, `violet`, `amber`, `green` ou `rose`. `blocos` (opcional) aparece na página do módulo, acima da lista de sessões. `anki.deck` serve para avisar quando uma palavra selecionada **já é um cartão** do baralho do módulo (veja `vocab`).

### Sessão

```json
{ "id": "m1-s2", "n": 2, "titulo": "Pronomes e TO BE", "duracao": 40,
  "resumo": "Uma linha.", "blocos": [ ], "revisao": [ ] }
```

`n` pode ser `""` para uma sessão introdutória. **Sessão de prática:** acrescente `"tipo": "pratica"` (e `n` = 1, 2, 3… dentro do módulo). Ela aparece como “Prática N”, não traz conteúdo novo, não gera lembretes D+1/D+7/D+30 e, se não tiver bloco `vocab`, não traz cartões novos (o bloco `srs` mostra só as revisões do dia). Estrutura usada: `roteiro` (10 + 15 + 10 + 5 min), `etapa-1` Cartões e revisão (`srs` + `revref`), `etapa-2` Exercícios, `etapa-3` Ouvir e ler (`reading`, `example`, `listen`), `etapa-4` Escrever (ditado e `prod`). A ordem das sessões no arquivo do módulo é a ordem de estudo (guiada, guiada, prática…). Cada módulo tem 10 sessões: 4 guiadas e 6 de prática (2 semanas). `plano.pratica` descreve os 4 blocos na página do plano. `revisao` é a lista de blocos do **material sintético de revisão** (use `table`, `bullets`, `errors`, `tip`): é o que o aluno abre pelo botão "📖 Material de revisão" no Caderno de erros, na "Revisão rápida" da sessão e na Revisão programada (D+1, D+7, D+30).

## Marcação de texto (vale em todos os textos)

| Escreva | Resultado |
|---|---|
| `{y:termo}` | marca-texto amarelo: termo-chave |
| `{b:estrutura}` | marca-texto azul: fórmula ou estrutura |
| `{g:expressão}` | marca-texto verde: expressão pronta |
| `{t:regra}` | texto azul: regra importante |
| `{r:erro}` | texto vermelho: exceção ou erro a evitar |
| `**negrito**` | negrito |
| `\n` | quebra de linha |

Use com parcimônia: poucos destaques por parágrafo.

## Blocos de conteúdo

Todo bloco tem `"t"` (tipo). Campos com `?` são opcionais.

| `t` | Campos | Observações |
|---|---|---|
| `h` | `n?`, `title` | Título de seção. Se tiver `n` (ex.: `"2.3"`), ele serve de âncora para `ref`. |
| `p` | `s` | Parágrafo. |
| `bullets` | `items: [texto]` | Lista. |
| `enpt` | `id?`, `en`, `pt` | Caixa EN com o PT escondido atrás de "mostrar em português". |
| `table` | `head?`, `rows`, `title?`, `firstCol?`, `pairs?` | `pairs: [[0,1]]` indica colunas inglês→português e alimenta a tradução por seleção. |
| `tip` | `s`, `title?` | "Pulo do gato". |
| `q` | `q`, `a` | Pergunta e resposta (dúvidas frequentes). |
| `errors` | `items: [["errado","certo"]]`, `title?` | Erros comuns. |
| `decision` | `q`, `yes: {k, ex: [[en, nota]]}`, `no: {...}` | Quadro de decisão (ex.: a / an). |
| `callout` | `kind`, `titulo?`, `s`, `icone?` | `kind`: `info`, `ok`, `warn`, `goal`, `err`. |
| `cards` | `items: [{icone, titulo, texto, cor}]` | Cartões coloridos. |
| `compare` | `cols: [{titulo, cor, itens: []}]` | Colunas comparativas. |
| `timeline` | `passos: [{titulo, texto}]` | Linha do tempo / passo a passo. |
| `image` | `src` **ou** `svg`, `alt`, `legenda?` | Figura. `src`: caminho da imagem a partir do `index.html`, p. ex. `"material/imagens/plural.svg"` (também aceita `https://…`). `svg` é código SVG inline. `alt` descreve a imagem em português (acessibilidade); `legenda` é a frase curta embaixo. Veja “Imagens”. |
| `legend` | — | Guia das cores de marca-texto. |
| `roteiro` | `id`, `titulo?`, `rows: [[minutos, "1. Etapa", "instrução", "seção?"]]` | Roteiro da sessão com caixinhas marcáveis (+5 XP). O 4º item (opcional) é o número da seção para onde o título da etapa leva (ex.: `"2.1"`). |
| `srs` | `id`, `range: [primeiro, último]` | Painel "Cartões da sessão": mostra novos/pendentes e abre a janela de cartões. A janela só abre quando o aluno clica no botão. |
| `revref` | `id` | Seção **2.1 Revisão** dentro da sessão: mostra as revisões agendadas (D+1, D+7, D+30) — ou o resumo das últimas sessões — e os erros do Caderno para refazer ali mesmo. Gerado pelo build. |
| `vocab` | `id`, `items: [[n, "inglês", "pronúncia", "português"]]` | Tabela com 🔊 e modo treino. `n` é o número do cartão do Anki: palavras daqui são reconhecidas como "já no baralho". |
| `example` | `titulo`, `lines: [["A","en","pt"]]` | Diálogo com 🔊 por linha e "ouvir tudo". |
| `reading` | `titulo`, `sents: [["en","pt"]]`, `boxed?`, `glossario?: [["word","tradução"]]` | Texto de leitura com áudio. |
| `listen` | `titulo`, `frases: [["en","pt"]]` | **Ouça e repita**: 🔊 normal, 🐢 lento e 👁 tradução. |
| `ex` | veja "Exercícios" | |
| `video` | `id`, `titulo`, `passos?: []`, `url?`, `embed?` | Ficha de vídeo: nota 0–10 e frases ouvidas. `url` opcional (cai em `curso.videoUrl`, a página geral da série): use o link da lição específica. `embed` opcional: endereço de player incorporável (VOA: `https://learningenglish.voanews.com/embed/player/article/<número do artigo>.html`); com ele o vídeo roda dentro da página, ao clicar em “Assistir aqui”. |
| `prod` | `id`, `prompt` | Caixa de texto de produção do aluno (vai no relatório). |
| `testintro` | — | Aviso "sem consultar" + marcação. Coloque antes do mini-teste. |
| `report` | `titulo?`, `s?` | Chamada para gerar o relatório. |

## Exercícios (`t: "ex"`)

```json
{ "t": "ex", "id": "ex-m1-s2-1", "titulo": "2.1 Complete com am, is ou are",
  "intro": "texto opcional", "ref": "m1-s2/2.2", "teste": false,
  "items": [ ... ] }
```

O tipo de cada item é deduzido pelos campos:

| Tipo | Item | Correção |
|---|---|---|
| **Lacuna** | `{"q": "I ___ a student.", "a": ["am"], "why": "..."}` | Uma entrada em `a` por `___`. Cada entrada pode ser texto ou lista de respostas aceitas: `"a": [["is","'s"]]`. |
| **Escolha** | `{"q": "I am ___ engineer.", "opts": ["a","an"], "a": "an", "why": "..."}` | `a` é **texto** e precisa estar em `opts`. |
| **Várias linhas** | `{"q": "She is a teacher.", "sub": ["Negativa","Pergunta"], "a": [[...],[...]], "why": "..."}` | Um campo por rótulo de `sub`; cada `a[i]` é a lista de respostas aceitas. |
| **Linha livre** | `{"q": "Traduza: Eu tenho 40 anos.", "a": ["I am 40 years old.", "I'm 40."], "why": "..."}` | Lista de respostas aceitas. |
| **Ditado** | qualquer tipo acima + `"say": "frase a ser falada"` | Mostra 🔊 e 🐢; o aluno escreve o que ouviu. |

- Maiúsculas, pontuação final e contrações são normalizadas (`I'm` = `I am`, `isn't` = `is not`). Use `"strict": true` no item quando a forma exata importar.
- Fluxo do aluno: **2 tentativas** → na 2ª errada mostra a resposta e o `why`; há o botão honesto **"Não sei"** e, em linha livre, **"Minha resposta também está certa"**.
- `why` explica a regra em 1 ou 2 frases; `ref` (no item ou no exercício) é `"id-da-sessão/n-da-seção"` ou só `"n-da-seção"` (na mesma sessão) e vira o link "Rever a regra".
- `id` opcional no item (para manter o progresso se a ordem mudar). Sem ele, vale a posição.
- **Mini-teste**: `"teste": true` e itens **sem `a`**: `{"q": "I ___ 32 years old."}`. O app só guarda as respostas para o relatório e **não corrige**.

### XP (informação)

+10 acerto de primeira · +5 segunda tentativa · +2 "não sei" honesto · +50 sessão concluída · +15 produção (≥ 3 linhas) · +5 vídeo avaliado / etapa do roteiro · +1 por cartão respondido (+10 ao concluir o dia de cartões) · +3 palavra salva nos cartões · +5 devolutiva do Claude colada. Um dia conta como estudado ao bater a meta diária de XP, concluir uma sessão ou ser marcado manualmente.

## Estrutura da sessão por etapa do roteiro

Cada sessão segue as 5 etapas do roteiro e **os números das seções repetem o número da etapa**: `1.1` cartões, `2.1` revisão, `3.1…` conteúdo e exercícios, `4.1…` input (ouvir/ler, vídeo), `5.1…` produção (ou mini-teste, produção e relatório nas sessões de fim de módulo).

Cada sessão, nesta pasta, **já está na ordem das etapas**. Cada etapa abre com um bloco `etapa` (`{"t":"etapa","id":"etapa-3","n":3,"titulo":"Conteúdo novo","min":12,"desc":"…"}`), e o `roteiro` do início aponta para ele (4º item de cada linha: `"etapa-3"`). A ordem dos blocos de uma sessão é: `roteiro` → `callout` goal → etapa 1 (`etapa`, `srs`, `vocab`) → etapa 2 (`etapa`, `revref`) → etapa 3 (`etapa` e as seções `3.x`, com a imagem da sessão) → etapa 4 (`etapa`, `4.1 OUVIR E LER`, `4.2 VÍDEO`) → etapa 5 (`etapa`, `5.x`).

Ao acrescentar uma seção ou um exercício na etapa 3, numere-o em sequência (`3.7`…) e, se ele for citado por algum `ref`, atualize o `ref`. Os blocos `srs` (`range` = primeiro e último cartão da sessão) e `revref` devem ser mantidos como estão.

> Os programas que geraram este material originalmente (pasta `_obsoleto/fonte-geradores`, só no computador do aluno) são um arquivo morto: **não são mais necessários** e o material não depende deles. Não os use: eles reescreveriam estes arquivos e apagariam as edições feitas à mão.

## Imagens

- Ficam em `material/imagens/` e entram na sessão com um bloco `image`:
  `{"t":"image","src":"material/imagens/plural.svg","alt":"Descrição em português","legenda":"Frase curta."}`. O `src` é sempre relativo ao `index.html` (a página), não a esta pasta.
- Formatos: `.svg` (ilustrações, nítidas em qualquer tela; proporção 16:9 funciona bem), `.png`, `.jpg`, `.webp`. Prefira arquivos pequenos (até uns 300 KB).
- Cada sessão tem uma ilustração na etapa 3, logo depois da primeira ou segunda seção. Para trocar, mude o `src`; para tirar, apague o bloco.
- Para o uso **offline**, liste a imagem nova em `MATERIAL_IMAGENS` no `indice.js` (opcional: sem isso a imagem aparece com internet).
- Fotos da internet: só se a licença permitir (domínio público ou Creative Commons), e cite a fonte na `legenda`.

## Jogar (menu 🎮): o que alimenta as rodadas

O jogo **não tem conteúdo próprio**: ele monta as perguntas a partir do que já está no material, então tudo o que você acrescentar no curso passa a aparecer nas rodadas.

- **Vocabulário (`vocab`)** → escolher a tradução, parear, ouvir, ditado, escrever a tradução, falar. Entradas com ` · ` ou ` / ` (ex.: `a key / keys`, `red · blue`) só entram em "escolher a tradução" e "parear".
- **Frases** (`listen`, `reading`, `example` e as frases `say` dos exercícios) → montar a frase, completar lacunas (palavra escondida), ditado e falar. Precisam da tradução para entrar em "montar a frase".
- **Exercícios `ex` com `___`** (1 lacuna) ou com `opts` e lacuna → "completar lacunas", já com o `why` na correção.
- **Glossário `gloss` do módulo + `imagens-jogo.js`** → "imagem e palavra". Para uma palavra ganhar figurinha, acrescente uma linha em `material/imagens-jogo.js`: `"palavra": "😀",` (minúsculas, sem artigo; só figurinhas que não deixem dúvida).
- "Repertório novo" usa as **2 próximas sessões** ainda não concluídas; "O que já estudei" usa as sessões concluídas, a atual e as que já têm cartões.
- **Lugares e situações** (restaurante, aeroporto, hospital…) vêm de `material/cenarios.js` (`window.CURSO_CENARIOS`), registrado em `indice.js`. Cada cenário: `{ id, icone, cor, titulo, desc, itens: [[inglês, pronúncia, português, figurinha opcional], …] }`. Itens com até 3 palavras viram "palavra"; maiores viram "frase". Têm cartinha de apresentação na primeira vez, 🔊 e 🐢, e entram em todos os tipos de exercício. **Não** aparecem em "Tudo do curso", "Um módulo" nem "O que já estudei" (só em "Lugares e situações" e "Meus erros"). Para criar um novo, copie um bloco, troque o `id` (único, sem espaços) e use inglês americano, sem contrações com apóstrofo e sem dados pessoais. A pronúncia segue o padrão do curso (sílaba tônica em MAIÚSCULAS).

## Cartões embutidos (sem Anki) e perfis

- O vocabulário (`vocab`) de cada sessão vira 10 cartões; palavras salvas com ➕ (e com significado escrito) também. O app agenda sozinho (De novo / Difícil / Bom / Fácil). O estado fica em `S.srs` e entra na mesclagem do `.json` de sincronização. O Anki continua possível, mas é opcional (exportação por módulo e no 🏦).
- **Perfil de teste** (⚙ Configurações → Perfil): guarda tudo em outra chave do navegador (`ingles.v2.teste`); o perfil principal não é tocado. **Apagar todo o progresso** zera o perfil atual por completo (XP, conquistas, cartões, respostas, configurações), como no primeiro acesso.
- **Correção com o Claude**: botões "🤖 Pedir correção" nos blocos `video` e `prod` e no fim da sessão montam um pedido pronto (contexto da sessão, o que o aluno escreveu, regras de correção com o *porquê*) e a caixa "Devolutiva do Claude" guarda a resposta em `S.notes['ai:<id>']`, que entra no relatório. O gabarito dos mini-testes continua fora do app.

## Boas práticas de apresentação

- Comece a sessão com `roteiro` e um `callout` `goal`; termine com exercícios, `video`, `prod` e (no fim do módulo) `testintro` + mini-teste + `report`.
- Alterne explicação curta (`enpt`, `table`, `tip`) com prática (`ex`, `listen`); evite blocos de texto longos.
- Inclua pelo menos um `listen` ou ditado por sessão.
- Cores: use as mesmas de sempre para dar identidade (módulos com `cor` diferente).

## O que o app valida ao abrir

Os problemas são listados no console do navegador, com o caminho (`modulos[0].sessoes[1].blocos[4]...`), quando: falta `modulos`; módulo/sessão sem `id` ou `titulo`; ids de módulo, sessão ou bloco repetidos; bloco sem `t`; exercício sem `items`; item sem `q` ou sem `a` (exceto mini-teste); nº de respostas diferente do nº de lacunas; `a` fora de `opts`; `vocab` sem os 4 campos; `table` sem `rows`. Tipos de bloco desconhecidos e ids ausentes geram apenas **avisos**.

## Pedido-modelo para a IA (novos módulos)

> Gere o **módulo N** do curso no formato de `material/LEIA-ME.md`, como `material/m0N.js` (e acrescente o arquivo em `material/indice.js`). Não mexa em `index.html`, `css/` nem `js/`. Mantenha os ids estáveis (`m{N}`, `m{N}-s{k}`…). Considere o relatório que enviei: reforce os pontos fracos. Inclua roteiro, explicações curtas com caixas EN/PT, vocabulário com pronúncia, exemplos, `listen`, ditado, exercícios com `why`, `revisao` em toda sessão, vídeo, produção e, na última sessão, mini-teste **sem gabarito** (o gabarito fica só com a IA).

## Diálogos da área "Conversar" (`dialogos.js`)

`window.CURSO_DIALOGOS` é uma lista de diálogos guiados (um por cenário de `cenarios.js`, com o mesmo `id`). Cada turno:

```js
{ n: 'Hi! Welcome. Table for one?',        // fala do personagem (inglês)
  np: 'Oi! Bem-vindo. Mesa para um?',      // tradução
  r: ['Yes, please.', 'Yes, a table for one, please.'], // respostas aceitas (a 1ª é o modelo)
  rp: 'Sim, por favor.',                   // o modelo em português (dica no modo "escrever")
  x: ['My name is Tom.', 'No, I like chicken.'] }       // respostas erradas (opções do modo "escolher")
```

`npc` e `eu` (em português, ex.: "um garçom" / "um cliente") dizem quem é quem e também entram no prompt que o botão **💬 Conversar sobre isto com o ChatGPT** copia. O prompt de cada **sessão** é montado sozinho a partir do título, do resumo, dos tópicos "3.x" e das frases de vocabulário dela; não precisa escrever nada no material.
