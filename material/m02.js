// MATERIAL DO CURSO — módulo 2: Coisas e pessoas
// Só conteúdo (sem código do site). Regras e formato em LEIA-ME.md. Salve em UTF-8.
(window.CURSO_MODULOS = window.CURSO_MODULOS || []).push({
  "id": "m2",
  "n": 2,
  "titulo": "Coisas e pessoas",
  "descricao": "Falar de mais de uma coisa, apontar objetos e dizer de quem são as coisas.",
  "fase": "Fase 1 · Fundação (A1)",
  "faseId": "f1",
  "icone": "🧩",
  "cor": "coral",
  "objetivos": [
    "Formar o plural dos substantivos (regulares e irregulares)",
    "Usar this, that, these e those",
    "Usar os possessivos e o ’s para falar de posse e família",
    "Reconhecer cores e números até 20"
  ],
  "anki": {
    "deck": "Inglês::Módulo 02"
  },
  "sessoes": [
    {
      "id": "m2-s1",
      "n": 1,
      "titulo": "Plural dos substantivos",
      "duracao": 40,
      "resumo": "Como formar o plural (-s, -es, -ies) e os plurais irregulares; pronúncia do -s.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "m2-s1-rot",
          "titulo": "40 MIN",
          "rows": [
            [8,"1. Cartões","Palavras 1 a 10 e revisões do dia.","etapa-1"],
            [7,"2. Revisão","Resumo das sessões agendadas e erros do Caderno.","etapa-2"],
            [12,"3. Conteúdo novo","Seções 3.1 a 3.6.","etapa-3"],
            [10,"4. Input","Ouvir e ler em voz alta; vídeo “Vídeo (opcional): pronúncia do -s final”.","etapa-4"],
            [3,"5. Produção","Escrever com as suas palavras (e pedir correção).","etapa-5"]
          ]
        },
        {
          "t": "callout",
          "kind": "goal",
          "titulo": "Objetivo da sessão",
          "s": "Falar de **mais de uma coisa ou pessoa**: formar o plural certo e pronunciar o -s final."
        },
        {
          "t": "etapa",
          "id": "etapa-1",
          "n": 1,
          "titulo": "Cartões",
          "min": 8,
          "desc": "Aqueça a memória: palavras novas e as revisões do dia. Clique em “Abrir cartões” quando quiser estudar."
        },
        {"t":"srs","id":"srs","range":[1,10]},
        {
          "t": "vocab",
          "id": "m2-s1-voc",
          "items": [
            [1,"two books","tú BÚKS","dois livros"],
            [2,"a key / keys","a KÍ / KÍZ","uma chave / chaves"],
            [3,"three children","THRÍ TCHÍL-dren","três crianças"],
            [4,"people","PÍ-pol","pessoas"],
            [5,"a man / men","a MÉN / MÉN","um homem / homens"],
            [6,"a woman / women","a UÚ-man / UÍ-min","uma mulher / mulheres"],
            [7,"a city / cities","a SÍ-ri / SÍ-riz","uma cidade / cidades"],
            [8,"a box / boxes","a BÓKS / BÓK-siz","uma caixa / caixas"],
            [9,"a watch / watches","a UÓTCH / UÓ-tchiz","um relógio / relógios"],
            [10,"How many?","ráu MÉ-ni","Quantos?"]
          ]
        },
        {
          "t": "etapa",
          "id": "etapa-2",
          "n": 2,
          "titulo": "Revisão programada",
          "min": 7,
          "desc": "Releia o essencial das sessões anteriores e refaça os erros do Caderno, sem sair desta página."
        },
        {"t":"revref","id":"revref"},
        {
          "t": "etapa",
          "id": "etapa-3",
          "n": 3,
          "titulo": "Conteúdo novo",
          "min": 12,
          "desc": "Uma ideia de cada vez: leia o inglês primeiro, abra o português só se precisar."
        },
        {"t":"h","n":"3.1","title":"PLURAL: A REGRA GERAL"},
        {
          "t": "enpt",
          "id": "m2-s1-m2-1.1",
          "en": "Most nouns add {y:-s} for the plural: one book, two books. Nouns that end in -s, -sh, -ch, -x or -z add {y:-es}: one bus, two buses.",
          "pt": "A maioria dos substantivos ganha {y:-s} no plural: one book, two books. Os que terminam em -s, -sh, -ch, -x ou -z ganham {y:-es}: one bus, two buses."
        },
        {
          "t": "table",
          "head": ["Regra","Singular","Plural"],
          "rows": [
            ["maioria: + s","book · day · key","books · days · keys"],
            ["-s, -sh, -ch, -x, -z: + es","bus · watch · box","buses · watches · boxes"],
            ["consoante + y: y → ies","city · baby","cities · babies"],
            ["vogal + y: só + s","day · boy","days · boys"],
            ["-f / -fe: f → ves","knife · wife","knives · wives"]
          ],
          "firstCol": true,
          "title": "Formação do plural"
        },
        {
          "t": "tip",
          "s": "Depois do plural, o **verbo** e o **artigo** mudam: **a** book → two books; **is** → **are**. Em inglês não existe “a books”: o artigo a/an só vai com um item.",
          "title": "PULO DO GATO"
        },
        {
          "t": "image",
          "src": "material/imagens/plural.svg",
          "alt": "Regras do plural: acrescentar -s, -es ou trocar y por ies.",
          "legenda": "Quase todo plural é só juntar -s."
        },
        {"t":"h","n":"3.2","title":"PLURAIS IRREGULARES"},
        {"t":"p","s":"Poucas palavras, mas **muito frequentes**: vale decorar como blocos."},
        {
          "t": "table",
          "head": ["Singular","Plural","Português"],
          "rows": [
            ["man","{y:men}","homem / homens"],
            ["woman","{y:women}","mulher / mulheres"],
            ["child","{y:children}","criança / crianças"],
            ["person","{y:people}","pessoa / pessoas"],
            ["foot","{y:feet}","pé / pés"],
            ["fish · sheep","{y:fish · sheep}","igual no plural"]
          ],
          "firstCol": true,
          "pairs": [[0,2]]
        },
        {
          "t": "tip",
          "s": "**People** já é o plural de person: “five people”, nunca “peoples”. **Police** também é plural: “The police are here.”",
          "title": "ATENÇÃO"
        },
        {
          "t": "errors",
          "items": [
            ["two childs","two children"],
            ["three persons / peoples","three people"],
            ["a dogs","a dog / two dogs"],
            ["two boy","two boys"],
            ["The police is here.","The police are here."]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        },
        {"t":"h","n":"3.3","title":"COMO SE PRONUNCIA O -S FINAL"},
        {
          "t": "table",
          "head": ["Som","Quando","Exemplo"],
          "rows": [
            ["/s/","depois de p, t, k, f","books · cats · cups"],
            ["/z/","depois de vogal ou b, d, g, l, m, n, v","dogs · days · keys"],
            ["/ɪz/ (“iz”)","depois de s, sh, ch, x, z","buses · watches · boxes"]
          ],
          "firstCol": true
        },
        {
          "t": "ex",
          "id": "m2-s1-ex1",
          "titulo": "3.4 Escreva o plural",
          "items": [
            {"q":"one book → two ___","a":["books"],"why":"Maioria dos nomes: + **s**."},
            {"q":"one city → two ___","a":["cities"],"why":"Consoante + y: **y → ies**."},
            {"q":"one bus → two ___","a":["buses"],"why":"Termina em -s: + **es**."},
            {"q":"one child → two ___","a":["children"],"why":"Plural irregular: **children**."},
            {"q":"one day → two ___","a":["days"],"why":"Vogal + y: só + **s**."},
            {"q":"one person → two ___","a":["people"],"why":"O plural de person é **people**."}
          ],
          "ref": "3.1"
        },
        {
          "t": "ex",
          "id": "m2-s1-ex2",
          "titulo": "3.5 Escolha a forma certa",
          "items": [
            {"q":"There are three ___ in the room.","opts":["man","men"],"a":"men","why":"Três → plural. O plural de man é **men**."},
            {"q":"I have two ___.","opts":["watch","watches"],"a":"watches","why":"Termina em -ch: + **es**."},
            {"q":"Those ___ are tired.","opts":["woman","women"],"a":"women","why":"Verbo **are** → plural: **women**."},
            {"q":"Five ___ are at the door.","opts":["person","people"],"a":"people","why":"Com número maior que 1 usamos **people**."}
          ],
          "ref": "3.2"
        },
        {
          "t": "ex",
          "id": "m2-s1-ex3",
          "titulo": "3.6 Corrija e ouça",
          "items": [
            {"q":"I have two childs.","a":["I have two children."],"why":"Plural irregular: child → **children**."},
            {"q":"She has three dog.","a":["She has three dogs."],"why":"Depois de 3, o nome vai para o plural: **dogs**."},
            {"q":"The babies is sleeping.","a":["The babies are sleeping."],"why":"Plural → verbo **are**."},
            {"q":"Escreva a frase que você ouviu:","say":"I have two keys and three pens.","a":["I have two keys and three pens."],"why":"Plural regular com **-s**."}
          ],
          "ref": "3.1"
        },
        {"t":"etapa","id":"etapa-4","n":4,"titulo":"Input","min":10,"desc":"Ouça, leia em voz alta e, se houver, assista ao vídeo indicado."},
        {"t":"h","n":"4.1","title":"OUVIR E LER"},
        {
          "t": "example",
          "titulo": "EXEMPLO · Na bolsa",
          "lines": [
            ["A","What do you have in your bag?","O que você tem na sua bolsa?"],
            ["B","I have two books, a phone and three pens.","Tenho dois livros, um celular e três canetas."],
            ["A","Do you have keys?","Você tem chaves?"],
            ["B","Yes, I have two keys and a watch.","Tenho, duas chaves e um relógio."]
          ]
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita",
          "frases": [
            ["two books and three pens","dois livros e três canetas"],
            ["There are five people.","Há cinco pessoas."],
            ["I have two children.","Tenho dois filhos."],
            ["The watches are on the box.","Os relógios estão na caixa."]
          ]
        },
        {"t":"h","n":"4.2","title":"VÍDEO"},
        {
          "t": "video",
          "id": "m2-s1-vid",
          "titulo": "Vídeo (opcional): pronúncia do -s final",
          "url": "https://www.youtube.com/watch?v=UaFIejjqCoI",
          "passos": [
            "Abra o vídeo “How to Pronounce Plural Nouns” (Rachel’s English, cerca de 6 minutos, em inglês americano; ligue a legenda se precisar).",
            "Repita as palavras: books, dogs, buses.",
            "Anote 3 palavras e o som do -s de cada uma (/s/, /z/ ou /ɪz/)."
          ]
        },
        {
          "t": "etapa",
          "id": "etapa-5",
          "n": 5,
          "titulo": "Produção",
          "min": 3,
          "desc": "Use o que aprendeu: escreva com as suas palavras e, se quiser, peça a correção ao Claude."
        },
        {"t":"h","n":"5.1","title":"PRODUÇÃO"},
        {
          "t": "prod",
          "id": "m2-s1-prod",
          "prompt": "Escreva 3 frases com plurais: o que há na sua bolsa, quantos filhos/primos/amigos você tem e o que há na sua mesa."
        }
      ],
      "revisao": [
        {
          "t": "table",
          "head": ["Regra","Exemplo"],
          "rows": [["maioria: + s","books"],["-s, -sh, -ch, -x, -z: + es","buses · watches"],["consoante + y → ies","cities"],["vogal + y: + s","days"]],
          "firstCol": true
        },
        {
          "t": "bullets",
          "items": [
            "Irregulares: **man → men · woman → women · child → children · person → people · foot → feet**",
            "Som do -s: /s/ (books) · /z/ (dogs) · /ɪz/ (buses)",
            "Com plural, o artigo a/an some e **is → are**"
          ]
        },
        {"t":"errors","items":[["two childs","two children"],["three peoples","three people"]],"title":"ERROS COMUNS DE BRASILEIROS"}
      ]
    },
    {
      "id": "m2-s2",
      "n": 2,
      "titulo": "This, that, these, those",
      "duracao": 40,
      "resumo": "Apontar coisas perto e longe, no singular e no plural; perguntar “What is this?”.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "m2-s2-rot",
          "titulo": "40 MIN",
          "rows": [
            [8,"1. Cartões","Palavras 11 a 20 e revisões do dia.","etapa-1"],
            [7,"2. Revisão","Resumo das sessões agendadas e erros do Caderno.","etapa-2"],
            [12,"3. Conteúdo novo","Seções 3.1 a 3.5.","etapa-3"],
            [10,"4. Input","Ouvir e ler em voz alta.","etapa-4"],
            [3,"5. Produção","Escrever com as suas palavras (e pedir correção).","etapa-5"]
          ]
        },
        {"t":"callout","kind":"goal","titulo":"Objetivo da sessão","s":"Apontar e perguntar sobre coisas: **this / that / these / those** e “What is this?”."},
        {
          "t": "etapa",
          "id": "etapa-1",
          "n": 1,
          "titulo": "Cartões",
          "min": 8,
          "desc": "Aqueça a memória: palavras novas e as revisões do dia. Clique em “Abrir cartões” quando quiser estudar."
        },
        {"t":"srs","id":"srs","range":[11,20]},
        {
          "t": "vocab",
          "id": "m2-s2-voc",
          "items": [
            [11,"a pen","a PÉN","uma caneta"],
            [12,"a notebook","a NÔUT-buk","um caderno"],
            [13,"a desk","a DÉSK","uma mesa de trabalho"],
            [14,"a bottle","a BÓ-rol","uma garrafa"],
            [15,"a cup","a KÂP","uma xícara"],
            [16,"a window","a UÍN-dou","uma janela"],
            [17,"a door","a DÓR","uma porta"],
            [18,"a clock","a KLÓK","um relógio de parede"],
            [19,"a picture","a PÍK-tcher","uma foto / quadro"],
            [20,"Excuse me.","iks-KIÚZ mi","Com licença."]
          ]
        },
        {
          "t": "etapa",
          "id": "etapa-2",
          "n": 2,
          "titulo": "Revisão programada",
          "min": 7,
          "desc": "Releia o essencial das sessões anteriores e refaça os erros do Caderno, sem sair desta página."
        },
        {"t":"revref","id":"revref"},
        {
          "t": "etapa",
          "id": "etapa-3",
          "n": 3,
          "titulo": "Conteúdo novo",
          "min": 12,
          "desc": "Uma ideia de cada vez: leia o inglês primeiro, abra o português só se precisar."
        },
        {"t":"h","n":"3.1","title":"THIS, THAT, THESE, THOSE"},
        {
          "t": "enpt",
          "id": "m2-s2-m2-2.1",
          "en": "Use {y:this} and {y:these} for things {b:near} you. Use {y:that} and {y:those} for things {b:far} from you. This and that are for one thing. These and those are for two or more things.",
          "pt": "Use {y:this} e {y:these} para coisas {b:perto} de você; {y:that} e {y:those} para coisas {b:longe}. This e that são para uma coisa; these e those, para duas ou mais."
        },
        {
          "t": "table",
          "head": ["","Perto","Longe"],
          "rows": [
            ["1 coisa","{y:this} — This is my phone.","{y:that} — That is a bus."],
            ["2 ou mais","{y:these} — These are my keys.","{y:those} — Those are mountains."]
          ],
          "firstCol": true
        },
        {
          "t": "tip",
          "s": "O verbo concorda: **this/that + is**, **these/those + are**. “These is” e “That are” estão errados. Na fala, **that is** vira **that’s**.",
          "title": "PULO DO GATO"
        },
        {
          "t": "image",
          "src": "material/imagens/this-that.svg",
          "alt": "This e these para o que está perto; that e those para o que está longe.",
          "legenda": "Perto: this/these. Longe: that/those."
        },
        {"t":"h","n":"3.2","title":"PERGUNTAS COM THIS / THAT / THESE / THOSE"},
        {
          "t": "table",
          "head": ["Pergunta","Resposta"],
          "rows": [
            ["What is this? / What’s that?","It is a pen. / It’s a bus."],
            ["What are these? / What are those?","They are keys. / They’re books."],
            ["Is this your bag?","Yes, it is. / No, it isn’t."],
            ["Are these your keys?","Yes, they are. / No, they aren’t."]
          ],
          "firstCol": true
        },
        {"t":"p","s":"Repare: a pergunta usa **this/these**, mas a resposta usa **it** (1 coisa) ou **they** (2 ou mais)."},
        {
          "t": "errors",
          "items": [
            ["This are my books.","These are my books."],
            ["That books are old.","Those books are old."],
            ["What is these?","What are these?"],
            ["Yes, this is.","Yes, it is."]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        },
        {
          "t": "ex",
          "id": "m2-s2-ex1",
          "titulo": "3.3 Complete com this, that, these ou those",
          "items": [
            {"q":"(perto, 1 coisa) ___ is my phone.","a":["This"],"why":"Perto + uma coisa: **this**."},
            {"q":"(longe, 1 coisa) ___ is a bus.","a":["That"],"why":"Longe + uma coisa: **that**."},
            {"q":"(perto, 2 coisas) ___ are my keys.","a":["These"],"why":"Perto + plural: **these**."},
            {"q":"(longe, 2 coisas) ___ are mountains.","a":["Those"],"why":"Longe + plural: **those**."},
            {"q":"___ pen is blue. (você segura a caneta)","a":["This"],"why":"Está na sua mão: **this**."}
          ],
          "ref": "3.1"
        },
        {
          "t": "ex",
          "id": "m2-s2-ex2",
          "titulo": "3.4 Escolha a forma certa",
          "items": [
            {"q":"What ___ these? — They are keys.","opts":["is","are"],"a":"are","why":"**These** é plural → **are**."},
            {"q":"Is ___ your bag? — Yes, it is.","opts":["this","these"],"a":"this","why":"Uma bolsa → **this**."},
            {"q":"Are those your books? — Yes, ___ are.","opts":["it","they"],"a":"they","why":"Plural → resposta com **they**."},
            {"q":"What is that? — ___ is a clock.","opts":["It","They"],"a":"It","why":"Uma coisa → **it**."}
          ],
          "ref": "3.2"
        },
        {
          "t": "ex",
          "id": "m2-s2-ex3",
          "titulo": "3.5 Pergunte e responda",
          "items": [
            {"q":"Faça a pergunta “O que é isto?” (this, 1 coisa).","a":["What is this?","What’s this?"],"why":"What + is + this?"},
            {"q":"Responda: Are these your keys? (sim)","a":["Yes, they are."],"why":"Resposta curta afirmativa: **Yes, they are.** (sem contração)."},
            {"q":"Responda: Is that your cup? (não)","a":["No, it isn’t.","No, it is not.","No, it’s not."],"why":"Negativa: **No, it isn’t.**"},
            {"q":"Escreva a frase que você ouviu:","say":"What are those?","a":["What are those?"],"why":"Pergunta com **are** porque those é plural."}
          ],
          "ref": "3.2"
        },
        {"t":"etapa","id":"etapa-4","n":4,"titulo":"Input","min":10,"desc":"Ouça, leia em voz alta e, se houver, assista ao vídeo indicado."},
        {"t":"h","n":"4.1","title":"OUVIR E LER"},
        {
          "t": "example",
          "titulo": "EXEMPLO · Na loja",
          "lines": [
            ["A","Excuse me, what is that?","Com licença, o que é aquilo?"],
            ["B","That is a clock.","Aquilo é um relógio de parede."],
            ["A","And what are those?","E o que são aquelas?"],
            ["B","Those are bottles.","Aquelas são garrafas."],
            ["A","Is this your pen?","Esta caneta é sua?"],
            ["B","No, it isn’t. It is her pen.","Não, não é. É a caneta dela."]
          ]
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita",
          "frases": [
            ["This is my notebook.","Este é o meu caderno."],
            ["That is a big window.","Aquela é uma janela grande."],
            ["These are my cups.","Estas são minhas xícaras."],
            ["What are those?","O que são aquelas?"]
          ]
        },
        {
          "t": "etapa",
          "id": "etapa-5",
          "n": 5,
          "titulo": "Produção",
          "min": 3,
          "desc": "Use o que aprendeu: escreva com as suas palavras e, se quiser, peça a correção ao Claude."
        },
        {"t":"h","n":"5.1","title":"PRODUÇÃO"},
        {"t":"prod","id":"m2-s2-prod","prompt":"Escreva 4 frases sobre objetos à sua volta: 2 com this/these (perto) e 2 com that/those (longe)."}
      ],
      "revisao": [
        {"t":"table","head":["","Perto","Longe"],"rows":[["1 coisa","this","that"],["2+ coisas","these","those"]],"firstCol":true},
        {
          "t": "bullets",
          "items": [
            "Verbo: **this/that + is** · **these/those + are**",
            "Pergunta: What is this? / What are those?",
            "Resposta: **It** (1 coisa) · **They** (2+). “Yes, it is.” sem contração"
          ]
        },
        {"t":"errors","items":[["This are my books.","These are my books."],["Yes, this is.","Yes, it is."]],"title":"ERROS COMUNS DE BRASILEIROS"}
      ]
    },
    {
      "id": "m2-s3",
      "n": 3,
      "titulo": "Possessivos: my, your, his, her… e ’s",
      "duracao": 40,
      "resumo": "De quem é? Adjetivos possessivos, o possessivo ’s e o vocabulário da família.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "m2-s3-rot",
          "titulo": "40 MIN",
          "rows": [
            [8,"1. Cartões","Palavras 21 a 30 e revisões do dia.","etapa-1"],
            [7,"2. Revisão","Resumo das sessões agendadas e erros do Caderno.","etapa-2"],
            [12,"3. Conteúdo novo","Seções 3.1 a 3.6.","etapa-3"],
            [10,"4. Input","Ouvir e ler em voz alta.","etapa-4"],
            [3,"5. Produção","Escrever com as suas palavras (e pedir correção).","etapa-5"]
          ]
        },
        {
          "t": "callout",
          "kind": "goal",
          "titulo": "Objetivo da sessão",
          "s": "Dizer **de quem** é uma coisa e falar da família: my, your, his, her, our, their e o ’s."
        },
        {
          "t": "etapa",
          "id": "etapa-1",
          "n": 1,
          "titulo": "Cartões",
          "min": 8,
          "desc": "Aqueça a memória: palavras novas e as revisões do dia. Clique em “Abrir cartões” quando quiser estudar."
        },
        {"t":"srs","id":"srs","range":[21,30]},
        {
          "t": "vocab",
          "id": "m2-s3-voc",
          "items": [
            [21,"my mother / my father","mái MÂ-ther / mái FÁ-ther","minha mãe / meu pai"],
            [22,"my parents","mái PÉ-rents","meus pais"],
            [23,"my brother","mái BRÂ-ther","meu irmão"],
            [24,"my sister","mái SÍS-ter","minha irmã"],
            [25,"my husband / my wife","mái RÂS-bend / mái UÁIF","meu marido / minha esposa"],
            [26,"my son / my daughter","mái SÂN / mái DÓ-rer","meu filho / minha filha"],
            [27,"my grandfather","mái GRÉN-fa-ther","meu avô"],
            [28,"his name","riz NÊIM","o nome dele"],
            [29,"her phone","rer FÔUN","o celular dela"],
            [30,"Whose bag is this?","RÚZ BÉG iz DHÍS","De quem é esta bolsa?"]
          ]
        },
        {
          "t": "etapa",
          "id": "etapa-2",
          "n": 2,
          "titulo": "Revisão programada",
          "min": 7,
          "desc": "Releia o essencial das sessões anteriores e refaça os erros do Caderno, sem sair desta página."
        },
        {"t":"revref","id":"revref"},
        {
          "t": "etapa",
          "id": "etapa-3",
          "n": 3,
          "titulo": "Conteúdo novo",
          "min": 12,
          "desc": "Uma ideia de cada vez: leia o inglês primeiro, abra o português só se precisar."
        },
        {"t":"h","n":"3.1","title":"ADJETIVOS POSSESSIVOS"},
        {
          "t": "enpt",
          "id": "m2-s3-m2-3.1",
          "en": "A possessive adjective goes {y:before a noun} and shows who owns it: my phone, your bag, his car. It depends on the {b:owner}, not on the thing.",
          "pt": "O adjetivo possessivo vem {y:antes de um substantivo} e mostra de quem é: my phone, your bag, his car. Ele depende do {b:dono}, não da coisa."
        },
        {
          "t": "table",
          "head": ["Pronome","Possessivo","Exemplo"],
          "rows": [
            ["I","{y:my}","my name"],
            ["you","{y:your}","your phone"],
            ["he","{y:his}","his car"],
            ["she","{y:her}","her bag"],
            ["it","{y:its}","its door"],
            ["we","{y:our}","our house"],
            ["they","{y:their}","their children"]
          ],
          "firstCol": true
        },
        {
          "t": "tip",
          "s": "**His** = dele, **her** = dela: o que decide é **quem possui**, não o objeto. “Maria has a dog. **Her** dog is big.” Já **its** (sem apóstrofo) é “dele/dela” para coisas e animais; **it’s** = it is.",
          "title": "PULO DO GATO"
        },
        {"t":"h","n":"3.2","title":"O POSSESSIVO ’S"},
        {
          "t": "enpt",
          "id": "m2-s3-m2-3.2",
          "en": "For a person’s things, add {y:’s} to the name: Maria’s phone, my brother’s car. For a plural noun that ends in -s, add only the apostrophe: my parents’ house.",
          "pt": "Para algo que pertence a uma pessoa, acrescente {y:’s} ao nome: Maria’s phone, my brother’s car. Se o plural termina em -s, só o apóstrofo: my parents’ house."
        },
        {
          "t": "tip",
          "s": "**’s** pode ser **is** (“Maria’s a nurse” = Maria is a nurse) ou **posse** (“Maria’s bag”). Pelo contexto: depois de ’s vem **substantivo** (posse) ou **adjetivo/artigo** (is).",
          "title": "ATENÇÃO"
        },
        {
          "t": "errors",
          "items": [
            ["The car of my brother","My brother’s car"],
            ["Her is my sister.","She is my sister."],
            ["This is you bag.","This is your bag."],
            ["Maria phone","Maria’s phone"],
            ["It’s door is open.","Its door is open."]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        },
        {
          "t": "image",
          "src": "material/imagens/familia.svg",
          "alt": "Árvore genealógica com mãe, pai, irmãos, avós e as palavras em inglês.",
          "legenda": "A família em inglês."
        },
        {"t":"h","n":"3.3","title":"A FAMÍLIA"},
        {
          "t": "ex",
          "id": "m2-s3-ex1",
          "titulo": "3.4 Complete com o possessivo",
          "items": [
            {"q":"I have a dog. ___ dog is big.","a":["My"],"why":"Dono: **I** → **my**."},
            {"q":"She has a phone. ___ phone is new.","a":["Her"],"why":"Dona: **she** → **her**."},
            {"q":"They have a house. ___ house is small.","a":["Their"],"why":"Donos: **they** → **their**."},
            {"q":"We have two cars. ___ cars are old.","a":["Our"],"why":"Donos: **we** → **our**."},
            {"q":"John has a sister. ___ sister is a nurse.","a":["His"],"why":"Dono: **John (he)** → **his**."}
          ],
          "ref": "3.1"
        },
        {
          "t": "ex",
          "id": "m2-s3-ex2",
          "titulo": "3.5 Escolha a opção correta",
          "items": [
            {"q":"This is ___ bag. (a bolsa da Maria)","opts":["Maria’s","Maria"],"a":"Maria’s","why":"Posse: nome + **’s**."},
            {"q":"The dog is ___ . (do cachorro: a porta dele)","opts":["it’s door","its door"],"a":"its door","why":"**Its** (sem apóstrofo) mostra posse; **it’s** = it is."},
            {"q":"Those are my ___ keys. (as chaves dos meus pais)","opts":["parents’","parent’s"],"a":"parents’","why":"Plural terminado em -s: só o **apóstrofo**."}
          ],
          "ref": "3.2"
        },
        {
          "t": "ex",
          "id": "m2-s3-ex3",
          "titulo": "3.6 Escreva em inglês",
          "items": [
            {"q":"O carro do meu irmão.","a":["My brother’s car."],"why":"Dono + **’s** + coisa: **my brother’s car**."},
            {"q":"Ela é minha irmã. O nome dela é Ana.","a":["She is my sister. Her name is Ana.","She’s my sister. Her name is Ana."],"why":"Sujeito: **she**; posse: **her**."},
            {"q":"Estes são os livros deles.","a":["These are their books."],"why":"Plural perto: **these**; deles: **their**."},
            {"q":"Escreva a frase que você ouviu:","say":"Her name is Julia.","a":["Her name is Julia."],"why":"Posse de mulher: **her**."}
          ],
          "ref": "3.2"
        },
        {"t":"etapa","id":"etapa-4","n":4,"titulo":"Input","min":10,"desc":"Ouça, leia em voz alta e, se houver, assista ao vídeo indicado."},
        {"t":"h","n":"4.1","title":"OUVIR E LER"},
        {
          "t": "reading",
          "titulo": "LEITURA · My family",
          "boxed": true,
          "sents": [
            ["My name is Anna and I have a small family.","Meu nome é Anna e tenho uma família pequena."],
            ["My father is a teacher and my mother is a nurse.","Meu pai é professor e minha mãe é enfermeira."],
            ["I have one brother. His name is Tom.","Tenho um irmão. O nome dele é Tom."],
            ["Tom’s wife is Julia. Their son is Sam.","A esposa do Tom é a Julia. O filho deles é o Sam."],
            ["Our house is big, and my parents’ garden is beautiful.","Nossa casa é grande, e o jardim dos meus pais é lindo."]
          ],
          "glossario": [["small","pequeno"],["garden","jardim"],["beautiful","lindo"]]
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita",
          "frases": [
            ["This is my brother’s car.","Este é o carro do meu irmão."],
            ["Her name is Julia.","O nome dela é Julia."],
            ["Our parents are at home.","Nossos pais estão em casa."],
            ["Whose bag is this?","De quem é esta bolsa?"]
          ]
        },
        {
          "t": "etapa",
          "id": "etapa-5",
          "n": 5,
          "titulo": "Produção",
          "min": 3,
          "desc": "Use o que aprendeu: escreva com as suas palavras e, se quiser, peça a correção ao Claude."
        },
        {"t":"h","n":"5.1","title":"PRODUÇÃO"},
        {"t":"prod","id":"m2-s3-prod","prompt":"Escreva 4 frases sobre a sua família usando my, his/her e ’s (ex.: My sister’s name is…)."}
      ],
      "revisao": [
        {
          "t": "table",
          "head": ["Pronome","Possessivo"],
          "rows": [["I","my"],["you","your"],["he","his"],["she","her"],["it","its"],["we","our"],["they","their"]],
          "firstCol": true
        },
        {
          "t": "bullets",
          "items": [
            "Possessivo vem **antes do substantivo**: my phone · her bag",
            "**’s** = posse (Maria’s bag) · plural em -s: só ’ (my parents’ house)",
            "**its** (posse) ≠ **it’s** (it is)"
          ]
        },
        {"t":"errors","items":[["Her is my sister.","She is my sister."],["Maria phone","Maria’s phone"]],"title":"ERROS COMUNS DE BRASILEIROS"}
      ]
    },
    {
      "id": "m2-s4",
      "n": 4,
      "titulo": "Consolidação e mini-teste",
      "duracao": 40,
      "resumo": "Revisão do módulo (plural, this/that, possessivos), cores e números, leitura e mini-teste.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "m2-s4-rot",
          "titulo": "40 MIN",
          "rows": [
            [8,"1. Cartões","Palavras 31 a 40 e revisões do dia.","etapa-1"],
            [7,"2. Revisão","Resumo das sessões agendadas e erros do Caderno.","etapa-2"],
            [12,"3. Conteúdo novo","Seções 3.1 a 3.2.","etapa-3"],
            [10,"4. Input","Ouvir e ler em voz alta; vídeo “Vídeo: Let’s Learn English – Nível 1, lições 6 a 9”.","etapa-4"],
            ["15*","5. Mini-teste","Sem consultar, mais o relatório. *Passa um pouco dos 40 min.","etapa-5"]
          ]
        },
        {
          "t": "etapa",
          "id": "etapa-1",
          "n": 1,
          "titulo": "Cartões",
          "min": 8,
          "desc": "Aqueça a memória: palavras novas e as revisões do dia. Clique em “Abrir cartões” quando quiser estudar."
        },
        {"t":"srs","id":"srs","range":[31,40]},
        {
          "t": "vocab",
          "id": "m2-s4-voc",
          "items": [
            [31,"red · blue · green","RÉD · BLÚ · GRÍN","vermelho · azul · verde"],
            [32,"yellow · black · white","IÉ-lou · BLÉK · UÁIT","amarelo · preto · branco"],
            [33,"eleven · twelve","i-LÉ-ven · TUÉLV","onze · doze"],
            [34,"thirteen · fourteen","THER-TÍN · FOR-TÍN","treze · catorze"],
            [35,"fifteen · sixteen","fif-TÍN · six-TÍN","quinze · dezesseis"],
            [36,"seventeen · eighteen","se-ven-TÍN · êi-TÍN","dezessete · dezoito"],
            [37,"nineteen · twenty","nain-TÍN · TUÉN-ti","dezenove · vinte"],
            [38,"a red car","a RÉD KÁR","um carro vermelho"],
            [39,"my blue bag","mái BLÚ BÉG","minha bolsa azul"],
            [40,"two black pens","tú BLÉK PÉNS","duas canetas pretas"]
          ]
        },
        {
          "t": "etapa",
          "id": "etapa-2",
          "n": 2,
          "titulo": "Revisão programada",
          "min": 7,
          "desc": "Releia o essencial das sessões anteriores e refaça os erros do Caderno, sem sair desta página."
        },
        {"t":"revref","id":"revref"},
        {
          "t": "etapa",
          "id": "etapa-3",
          "n": 3,
          "titulo": "Conteúdo novo",
          "min": 12,
          "desc": "Uma ideia de cada vez: leia o inglês primeiro, abra o português só se precisar."
        },
        {"t":"h","n":"3.1","title":"RESUMO DO MÓDULO"},
        {
          "t": "table",
          "head": ["Tópico","Regra-chave","Exemplo"],
          "rows": [
            ["Plural","+ s · + es · y → ies · irregulares","books · buses · cities · children"],
            ["This / that","perto / longe, 1 coisa","This is my pen. That is a bus."],
            ["These / those","perto / longe, 2+ coisas","These are keys. Those are bottles."],
            ["Possessivos","my · your · his · her · its · our · their","Her phone is new."],
            ["’s","dono + ’s","Maria’s bag · my parents’ house"]
          ],
          "firstCol": true
        },
        {"t":"h","n":"3.2","title":"CORES E NÚMEROS 11–20"},
        {
          "t": "tip",
          "s": "Em inglês a **cor vem antes do substantivo** e não muda no plural: **a red car → two red cars** (e não “reds”).",
          "title": "PULO DO GATO"
        },
        {"t":"image","src":"material/imagens/cores-numeros.svg","alt":"Cores e números de 11 a 20.","legenda":"Cores e números de 11 a 20."},
        {"t":"etapa","id":"etapa-4","n":4,"titulo":"Input","min":10,"desc":"Ouça, leia em voz alta e, se houver, assista ao vídeo indicado."},
        {"t":"h","n":"4.1","title":"OUVIR E LER"},
        {
          "t": "reading",
          "titulo": "LEITURA · At the office",
          "boxed": true,
          "sents": [
            ["This is my desk. It is small, but it is nice.","Esta é a minha mesa. É pequena, mas é bonita."],
            ["My computer is black and my notebooks are blue.","Meu computador é preto e meus cadernos são azuis."],
            ["That is Paula’s desk. Her pens are red.","Aquela é a mesa da Paula. As canetas dela são vermelhas."],
            ["These are our chairs, and those are the boss’s chairs.","Estas são as nossas cadeiras, e aquelas são as cadeiras do chefe."],
            ["There are twelve people in the office.","Há doze pessoas no escritório."]
          ],
          "glossario": [["desk","mesa"],["boss","chefe"],["chair","cadeira"]]
        },
        {"t":"h","n":"4.2","title":"VÍDEO"},
        {
          "t": "video",
          "id": "m2-s4-vid",
          "licoes": [
            {"titulo":"Level 1 · Lição 6: Where Is the Gym?","url":"https://learningenglish.voanews.com/a/5781378.html","embed":"https://learningenglish.voanews.com/embed/player/article/5781378.html"},
            {"titulo":"Level 1 · Lição 7: What Are You Doing?","url":"https://learningenglish.voanews.com/a/5781372.html","embed":"https://learningenglish.voanews.com/embed/player/article/5781372.html"},
            {"titulo":"Level 1 · Lição 8: Are You Busy?","url":"https://learningenglish.voanews.com/a/5781370.html","embed":"https://learningenglish.voanews.com/embed/player/article/5781370.html"},
            {"titulo":"Level 1 · Lição 9: Is It Cold?","url":"https://learningenglish.voanews.com/a/5781346.html","embed":"https://learningenglish.voanews.com/embed/player/article/5781346.html"}
          ],
          "titulo": "Vídeo: Let’s Learn English – Nível 1, lições 6 a 9",
          "passos": [
            "Escolha uma das lições abaixo (toque no título para assistir aqui mesmo) e assista sem legenda. Dê uma nota de 0 a 10 para o quanto entendeu.",
            "Assista de novo com legenda em inglês.",
            "Anote 3 frases com plural, this/that ou possessivos e repita em voz alta."
          ]
        },
        {
          "t": "etapa",
          "id": "etapa-5",
          "n": 5,
          "titulo": "Mini-teste",
          "min": "15*",
          "desc": "Responda sem consultar. “Não sei” é uma resposta honesta. Depois envie o relatório."
        },
        {"t":"h","n":"5.1","title":"MINI-TESTE (SEM CONSULTAR)"},
        {"t":"testintro"},
        {
          "t": "ex",
          "id": "m2-s4-t1",
          "titulo": "A. Complete",
          "teste": true,
          "items": [
            {"q":"I have two ___ . (child)"},
            {"q":"___ are my keys. (perto)"},
            {"q":"That is ___ car. (do meu pai)"},
            {"q":"She has a phone. ___ phone is red."},
            {"q":"One city, two ___ ."},
            {"q":"Is ___ your bag? (longe)"}
          ]
        },
        {
          "t": "ex",
          "id": "m2-s4-t2",
          "titulo": "B. Traduza para o inglês",
          "teste": true,
          "items": [{"q":"Estes são os meus livros."},{"q":"Aquelas são as chaves da Maria."},{"q":"O nome dele é Tom."},{"q":"Há cinco pessoas aqui."}]
        },
        {
          "t": "ex",
          "id": "m2-s4-t3",
          "titulo": "C. Vocabulário: escreva em inglês",
          "teste": true,
          "items": [{"q":"meus pais"},{"q":"uma garrafa"},{"q":"verde"},{"q":"quinze"},{"q":"janela"}]
        },
        {"t":"h","n":"5.2","title":"PRODUÇÃO DO MÓDULO"},
        {
          "t": "prod",
          "id": "m2-s4-prod",
          "prompt": "Escreva 5 frases sobre a sua casa ou o seu trabalho usando plural, this/that e possessivos. Guarde-as para o relatório."
        },
        {"t":"h","n":"5.3","title":"RELATÓRIO PARA A IA"},
        {"t":"report","titulo":"Enviar para a IA"}
      ],
      "revisao": [
        {
          "t": "table",
          "head": ["Tópico","Lembrete"],
          "rows": [
            ["Plural","+s · +es · y→ies · men/women/children/people"],
            ["This/that","this/these perto · that/those longe"],
            ["Possessivo","my your his her its our their · ’s"],
            ["Cor","antes do nome, não muda no plural: red cars"]
          ],
          "firstCol": true
        },
        {"t":"bullets","items":["Números 11–20: eleven, twelve, thirteen… twenty (-teen: acento no final)"]}
      ]
    }
  ],
  "gloss": "bag=bolsa;pen=caneta;key=chave;door=porta;desk=mesa;watch=relógio;house=casa;family=família;mother=mãe;father=pai;brother=irmão;sister=irmã;parents=pais;wife=esposa;husband=marido;son=filho;daughter=filha;big=grande;small=pequeno;old=velho;new=novo;nice=agradável;beautiful=lindo;near=perto;far=longe;whose=de quem;people=pessoas;children=crianças;boss=chefe;office=escritório;car=carro;phone=celular"
});
