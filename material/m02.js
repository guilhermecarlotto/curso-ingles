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
      "id": "m2-p1",
      "n": 1,
      "tipo": "pratica",
      "titulo": "Fixar o plural dos substantivos",
      "duracao": 40,
      "resumo": "Plural regular e irregular, pronúncia do -s e concordância com is/are.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "rot-m2-p1",
          "rows": [
            [
              10,
              "1. Cartões e revisão",
              "Revisões do dia e resumo das sessões anteriores.",
              "etapa-1"
            ],
            [
              15,
              "2. Exercícios",
              "Exercícios sobre o que você já estudou.",
              "etapa-2"
            ],
            [
              10,
              "3. Ouvir e ler",
              "Ouvir, repetir e ler em voz alta.",
              "etapa-3"
            ],
            [
              5,
              "4. Escrever",
              "Ditado e frases suas.",
              "etapa-4"
            ]
          ],
          "titulo": "40 MIN"
        },
        {
          "t": "callout",
          "kind": "info",
          "icone": "🔁",
          "titulo": "Sessão de prática",
          "s": "Esta sessão não traz conteúdo novo: ela serve para fixar o que você acabou de estudar. Se errar, leia o “porquê” de cada correção e refaça."
        },
        {
          "t": "etapa",
          "id": "etapa-1",
          "n": 1,
          "titulo": "Cartões e revisão",
          "min": 10,
          "desc": "Aqueça a memória: revisões do dia e o resumo do que você já viu. Nesta sessão não há cartões novos."
        },
        {
          "t": "srs",
          "id": "srs"
        },
        {
          "t": "revref",
          "id": "revref"
        },
        {
          "t": "etapa",
          "id": "etapa-2",
          "n": 2,
          "titulo": "Exercícios",
          "min": 15,
          "desc": "Exercícios sobre o que você já estudou. Tente sem consultar; o erro explicado vale mais que o acerto."
        },
        {
          "t": "ex",
          "id": "m2-p1-ex1",
          "titulo": "2.1 Escreva o plural",
          "ref": "m2-s1/3.1",
          "items": [
            {
              "q": "one dog → two ___",
              "a": [
                "dogs"
              ],
              "why": "Maioria: + s."
            },
            {
              "q": "one box → two ___",
              "a": [
                "boxes"
              ],
              "why": "Termina em x: + es."
            },
            {
              "q": "one baby → two ___",
              "a": [
                "babies"
              ],
              "why": "Consoante + y: y → ies."
            },
            {
              "q": "one boy → two ___",
              "a": [
                "boys"
              ],
              "why": "Vogal + y: só + s."
            },
            {
              "q": "one knife → two ___",
              "a": [
                "knives"
              ],
              "why": "-fe: f → ves."
            },
            {
              "q": "one watch → two ___",
              "a": [
                "watches"
              ],
              "why": "Termina em ch: + es."
            },
            {
              "q": "one day → two ___",
              "a": [
                "days"
              ],
              "why": "Vogal + y: só + s."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m2-p1-ex2",
          "titulo": "2.2 Plurais irregulares: escolha",
          "ref": "m2-s1/3.2",
          "items": [
            {
              "q": "There are three (man / men) in the car.",
              "opts": [
                "man",
                "men"
              ],
              "a": "men",
              "why": "Plural irregular: man → **men**."
            },
            {
              "q": "Two (child / children) are at school.",
              "opts": [
                "child",
                "children"
              ],
              "a": "children",
              "why": "Plural irregular: child → **children**."
            },
            {
              "q": "These (woman / women) are nurses.",
              "opts": [
                "woman",
                "women"
              ],
              "a": "women",
              "why": "Plural irregular: woman → **women**."
            },
            {
              "q": "Five (people / peoples) are here.",
              "opts": [
                "people",
                "peoples"
              ],
              "a": "people",
              "why": "**People** já é o plural de person: nunca “peoples”."
            },
            {
              "q": "Look at the two (fish / fishs).",
              "opts": [
                "fish",
                "fishs"
              ],
              "a": "fish",
              "why": "**Fish** é igual no singular e no plural."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m2-p1-ex3",
          "titulo": "2.3 Corrija as frases",
          "ref": "m2-s1/3.1",
          "items": [
            {
              "q": "I have three childs.",
              "a": [
                "I have three children."
              ],
              "why": "Child é irregular: children."
            },
            {
              "q": "Two man are in the office.",
              "a": [
                "Two men are in the office."
              ],
              "why": "Man é irregular: men."
            },
            {
              "q": "The babys are small.",
              "a": [
                "The babies are small."
              ],
              "why": "Consoante + y: y → ies."
            },
            {
              "q": "She has two watchs.",
              "a": [
                "She has two watches."
              ],
              "why": "Termina em ch: + es."
            },
            {
              "q": "The people is tired.",
              "a": [
                "The people are tired."
              ],
              "why": "**People** é plural: o verbo é **are**."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m2-p1-ex4",
          "titulo": "2.4 Qual é o som do -s?",
          "ref": "m2-s1/3.3",
          "items": [
            {
              "q": "Som do -s em books:",
              "opts": [
                "/s/",
                "/z/",
                "/ɪz/"
              ],
              "a": "/s/",
              "why": "Depois de **k** → **/s/**."
            },
            {
              "q": "Som do -s em days:",
              "opts": [
                "/s/",
                "/z/",
                "/ɪz/"
              ],
              "a": "/z/",
              "why": "Depois de vogal → **/z/**."
            },
            {
              "q": "Som do -s em buses:",
              "opts": [
                "/s/",
                "/z/",
                "/ɪz/"
              ],
              "a": "/ɪz/",
              "why": "Depois de **s** → sílaba a mais: **/ɪz/**."
            },
            {
              "q": "Som do -s em cats:",
              "opts": [
                "/s/",
                "/z/",
                "/ɪz/"
              ],
              "a": "/s/",
              "why": "Depois de **t** → **/s/**."
            },
            {
              "q": "Som do -s em boxes:",
              "opts": [
                "/s/",
                "/z/",
                "/ɪz/"
              ],
              "a": "/ɪz/",
              "why": "Depois de **x** → sílaba a mais: **/ɪz/**."
            }
          ]
        },
        {
          "t": "etapa",
          "id": "etapa-3",
          "n": 3,
          "titulo": "Ouvir e ler",
          "min": 10,
          "desc": "Ouça, repita e leia em voz alta. Só aparecem palavras e estruturas que você já conhece."
        },
        {
          "t": "h",
          "n": "3.1",
          "title": "OUVIR E LER"
        },
        {
          "t": "reading",
          "boxed": true,
          "sents": [
            [
              "In my bag, I have two books and three pens.",
              "Na minha bolsa, tenho dois livros e três canetas."
            ],
            [
              "I have two keys and a watch.",
              "Tenho duas chaves e um relógio."
            ],
            [
              "My friends have boxes in their cars.",
              "Meus amigos têm caixas nos carros."
            ],
            [
              "The women in my office are nice.",
              "As mulheres do meu escritório são legais."
            ],
            [
              "The men are tired, and the babies are happy.",
              "Os homens estão cansados e os bebês estão felizes."
            ],
            [
              "Many people are at the park today.",
              "Muitas pessoas estão no parque hoje."
            ]
          ],
          "titulo": "My bag"
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita: plurais",
          "frases": [
            [
              "Two books and three pens.",
              "Dois livros e três canetas."
            ],
            [
              "How many children do you have?",
              "Quantos filhos você tem?"
            ],
            [
              "I have two keys and a watch.",
              "Tenho duas chaves e um relógio."
            ],
            [
              "The women are nurses.",
              "As mulheres são enfermeiras."
            ],
            [
              "The people are tired.",
              "As pessoas estão cansadas."
            ]
          ]
        },
        {
          "t": "etapa",
          "id": "etapa-4",
          "n": 4,
          "titulo": "Escrever",
          "min": 5,
          "desc": "Escreva com as suas palavras e, se quiser, peça a correção ao Claude."
        },
        {
          "t": "h",
          "n": "4.1",
          "title": "DITADO E PRODUÇÃO"
        },
        {
          "t": "ex",
          "id": "m2-p1-ditado",
          "titulo": "4.1 Ouça e escreva (ditado)",
          "intro": "Clique em 🔊, ouça e escreva a frase. Use 🐢 para ouvir mais devagar. Contrações valem (I’m = I am).",
          "ref": "m2-s1/3.1",
          "items": [
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "I have three children.",
              "a": [
                "I have three children."
              ],
              "why": "Child → children (plural irregular)."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "The babies are happy.",
              "a": [
                "The babies are happy."
              ],
              "why": "baby → babies; plural pede **are**."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "Two boxes and two watches.",
              "a": [
                "Two boxes and two watches."
              ],
              "why": "-x e -ch: + es."
            }
          ]
        },
        {
          "t": "prod",
          "id": "prod-m2-p1",
          "prompt": "Escreva 5 frases com plurais: 2 sobre o que há na sua bolsa ou mesa, 2 sobre pessoas (men, women, children, people) e 1 pergunta com How many…?"
        }
      ],
      "revisao": [
        {
          "t": "bullets",
          "items": [
            "Plural: **+ s** · **+ es** (-s, -sh, -ch, -x, -z) · consoante + **y → ies** · **-f/-fe → ves**",
            "Irregulares: man → men · woman → women · child → children · person → people · fish = fish",
            "Com plural, o verbo muda: **is → are**. O artigo **a/an** só vai com um item."
          ]
        },
        {
          "t": "errors",
          "items": [
            [
              "two childs",
              "two children"
            ],
            [
              "The people is here.",
              "The people are here."
            ]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        }
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
      "id": "m2-p2",
      "n": 2,
      "tipo": "pratica",
      "titulo": "Fixar this, that, these e those",
      "duracao": 40,
      "resumo": "Perto e longe, singular e plural, com is e are.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "rot-m2-p2",
          "rows": [
            [
              10,
              "1. Cartões e revisão",
              "Revisões do dia e resumo das sessões anteriores.",
              "etapa-1"
            ],
            [
              15,
              "2. Exercícios",
              "Exercícios sobre o que você já estudou.",
              "etapa-2"
            ],
            [
              10,
              "3. Ouvir e ler",
              "Ouvir, repetir e ler em voz alta.",
              "etapa-3"
            ],
            [
              5,
              "4. Escrever",
              "Ditado e frases suas.",
              "etapa-4"
            ]
          ],
          "titulo": "40 MIN"
        },
        {
          "t": "callout",
          "kind": "info",
          "icone": "🔁",
          "titulo": "Sessão de prática",
          "s": "Esta sessão não traz conteúdo novo: ela serve para fixar o que você acabou de estudar. Se errar, leia o “porquê” de cada correção e refaça."
        },
        {
          "t": "etapa",
          "id": "etapa-1",
          "n": 1,
          "titulo": "Cartões e revisão",
          "min": 10,
          "desc": "Aqueça a memória: revisões do dia e o resumo do que você já viu. Nesta sessão não há cartões novos."
        },
        {
          "t": "srs",
          "id": "srs"
        },
        {
          "t": "revref",
          "id": "revref"
        },
        {
          "t": "etapa",
          "id": "etapa-2",
          "n": 2,
          "titulo": "Exercícios",
          "min": 15,
          "desc": "Exercícios sobre o que você já estudou. Tente sem consultar; o erro explicado vale mais que o acerto."
        },
        {
          "t": "ex",
          "id": "m2-p2-ex1",
          "titulo": "2.1 Complete com this, that, these ou those",
          "ref": "m2-s2/3.1",
          "items": [
            {
              "q": "(perto, 1 coisa) ___ is my bag.",
              "a": [
                "This"
              ],
              "why": "Perto + uma coisa → **this**."
            },
            {
              "q": "(longe, 1 coisa) ___ is a big house.",
              "a": [
                "That"
              ],
              "why": "Longe + uma coisa → **that**."
            },
            {
              "q": "(perto, 2 coisas) ___ are my books.",
              "a": [
                "These"
              ],
              "why": "Perto + duas ou mais → **these**."
            },
            {
              "q": "(longe, 2 coisas) ___ are your keys.",
              "a": [
                "Those"
              ],
              "why": "Longe + duas ou mais → **those**."
            },
            {
              "q": "(longe, 2 pessoas) ___ men are my brothers.",
              "a": [
                "Those"
              ],
              "why": "Longe + plural (men) → **those**."
            },
            {
              "q": "(perto, 1 coisa) ___ clock is new.",
              "a": [
                "This"
              ],
              "why": "Perto + uma coisa → **this**."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m2-p2-ex2",
          "titulo": "2.2 Escolha is ou are",
          "ref": "m2-s2/3.1",
          "items": [
            {
              "q": "This (is / are) a pen.",
              "opts": [
                "is",
                "are"
              ],
              "a": "is",
              "why": "this + **is**."
            },
            {
              "q": "Those (is / are) bottles.",
              "opts": [
                "is",
                "are"
              ],
              "a": "are",
              "why": "those + **are**."
            },
            {
              "q": "These (is / are) my windows.",
              "opts": [
                "is",
                "are"
              ],
              "a": "are",
              "why": "these + **are**."
            },
            {
              "q": "That (is / are) my door.",
              "opts": [
                "is",
                "are"
              ],
              "a": "is",
              "why": "that + **is**."
            },
            {
              "q": "Those books (is / are) old.",
              "opts": [
                "is",
                "are"
              ],
              "a": "are",
              "why": "Those books = plural → **are**."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m2-p2-ex3",
          "titulo": "2.3 Passe para o plural",
          "ref": "m2-s2/3.1",
          "items": [
            {
              "q": "This is a pen.",
              "a": [
                "These are pens."
              ],
              "why": "this → these · is → are · pen → pens."
            },
            {
              "q": "That is a window.",
              "a": [
                "Those are windows."
              ],
              "why": "that → those · is → are · window → windows."
            },
            {
              "q": "This is my key.",
              "a": [
                "These are my keys."
              ],
              "why": "this → these · is → are · key → keys."
            },
            {
              "q": "That is a bus.",
              "a": [
                "Those are buses."
              ],
              "why": "that → those · is → are · bus → buses."
            },
            {
              "q": "This is a watch.",
              "a": [
                "These are watches."
              ],
              "why": "this → these · is → are · watch → watches."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m2-p2-ex4",
          "titulo": "2.4 Corrija as frases",
          "ref": "m2-s2/3.1",
          "items": [
            {
              "q": "This are my books.",
              "a": [
                "These are my books."
              ],
              "why": "Plural → **these are**."
            },
            {
              "q": "That books are old.",
              "a": [
                "Those books are old."
              ],
              "why": "Plural → **those**."
            },
            {
              "q": "These is my phone.",
              "a": [
                "This is my phone."
              ],
              "why": "Uma coisa → **this is**."
            },
            {
              "q": "Those is a bus.",
              "a": [
                "That is a bus.",
                "That's a bus."
              ],
              "why": "Uma coisa → **that is**."
            },
            {
              "q": "This watch are new.",
              "a": [
                "This watch is new."
              ],
              "why": "Uma coisa → **is**."
            }
          ]
        },
        {
          "t": "etapa",
          "id": "etapa-3",
          "n": 3,
          "titulo": "Ouvir e ler",
          "min": 10,
          "desc": "Ouça, repita e leia em voz alta. Só aparecem palavras e estruturas que você já conhece."
        },
        {
          "t": "h",
          "n": "3.1",
          "title": "OUVIR E LER"
        },
        {
          "t": "example",
          "lines": [
            [
              "A",
              "What is this?",
              "O que é isto?"
            ],
            [
              "B",
              "It is a notebook.",
              "É um caderno."
            ],
            [
              "A",
              "And what are those?",
              "E o que são aquelas coisas?"
            ],
            [
              "B",
              "Those are pictures.",
              "Aquelas são fotos."
            ],
            [
              "A",
              "Is that your bottle?",
              "Aquela é a sua garrafa?"
            ],
            [
              "B",
              "Yes, it is. And these are my cups.",
              "Sim, é. E estas são as minhas xícaras."
            ],
            [
              "A",
              "Excuse me, is this your pen?",
              "Com licença, esta é a sua caneta?"
            ],
            [
              "B",
              "No, it isn’t.",
              "Não, não é."
            ]
          ],
          "titulo": "EXEMPLO · Na sala de aula"
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita: this e that",
          "frases": [
            [
              "What is this?",
              "O que é isto?"
            ],
            [
              "These are my keys.",
              "Estas são as minhas chaves."
            ],
            [
              "That is a clock.",
              "Aquilo é um relógio."
            ],
            [
              "Those are windows.",
              "Aquelas são janelas."
            ],
            [
              "Is this your pen?",
              "Esta é a sua caneta?"
            ]
          ]
        },
        {
          "t": "etapa",
          "id": "etapa-4",
          "n": 4,
          "titulo": "Escrever",
          "min": 5,
          "desc": "Escreva com as suas palavras e, se quiser, peça a correção ao Claude."
        },
        {
          "t": "h",
          "n": "4.1",
          "title": "DITADO E PRODUÇÃO"
        },
        {
          "t": "ex",
          "id": "m2-p2-ditado",
          "titulo": "4.1 Ouça e escreva (ditado)",
          "intro": "Clique em 🔊, ouça e escreva a frase. Use 🐢 para ouvir mais devagar. Contrações valem (I’m = I am).",
          "ref": "m2-s2/3.1",
          "items": [
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "This is my notebook.",
              "a": [
                "This is my notebook."
              ],
              "why": "this + **is**."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "Those are my keys.",
              "a": [
                "Those are my keys."
              ],
              "why": "those + **are**."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "That is not my bottle.",
              "a": [
                "That is not my bottle.",
                "That isn't my bottle.",
                "That's not my bottle."
              ],
              "why": "Negativa: **not** depois do verbo."
            }
          ]
        },
        {
          "t": "prod",
          "id": "prod-m2-p2",
          "prompt": "Escreva 5 frases sobre objetos perto e longe de você: 3 com this/these e 2 com that/those. Use pelo menos um plural."
        }
      ],
      "revisao": [
        {
          "t": "table",
          "head": [
            "Perto",
            "Longe"
          ],
          "rows": [
            [
              "this (1 coisa)",
              "that (1 coisa)"
            ],
            [
              "these (2 ou mais)",
              "those (2 ou mais)"
            ]
          ],
          "firstCol": true
        },
        {
          "t": "bullets",
          "items": [
            "**this / these**: perto · **that / those**: longe",
            "**this / that + is** · **these / those + are**",
            "Em inglês, o plural muda tudo: this is a pen → these are pens."
          ]
        },
        {
          "t": "errors",
          "items": [
            [
              "This are my books.",
              "These are my books."
            ],
            [
              "That books are old.",
              "Those books are old."
            ]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        }
      ]
    },
    {
      "id": "m2-p3",
      "n": 3,
      "tipo": "pratica",
      "titulo": "Perguntas e respostas com this e these",
      "duracao": 40,
      "resumo": "What is this? Is that…? Are these…? e as respostas curtas.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "rot-m2-p3",
          "rows": [
            [
              10,
              "1. Cartões e revisão",
              "Revisões do dia e resumo das sessões anteriores.",
              "etapa-1"
            ],
            [
              15,
              "2. Exercícios",
              "Exercícios sobre o que você já estudou.",
              "etapa-2"
            ],
            [
              10,
              "3. Ouvir e ler",
              "Ouvir, repetir e ler em voz alta.",
              "etapa-3"
            ],
            [
              5,
              "4. Escrever",
              "Ditado e frases suas.",
              "etapa-4"
            ]
          ],
          "titulo": "40 MIN"
        },
        {
          "t": "callout",
          "kind": "info",
          "icone": "🔁",
          "titulo": "Sessão de prática",
          "s": "Esta sessão não traz conteúdo novo: ela serve para fixar o que você acabou de estudar. Se errar, leia o “porquê” de cada correção e refaça."
        },
        {
          "t": "etapa",
          "id": "etapa-1",
          "n": 1,
          "titulo": "Cartões e revisão",
          "min": 10,
          "desc": "Aqueça a memória: revisões do dia e o resumo do que você já viu. Nesta sessão não há cartões novos."
        },
        {
          "t": "srs",
          "id": "srs"
        },
        {
          "t": "revref",
          "id": "revref"
        },
        {
          "t": "etapa",
          "id": "etapa-2",
          "n": 2,
          "titulo": "Exercícios",
          "min": 15,
          "desc": "Exercícios sobre o que você já estudou. Tente sem consultar; o erro explicado vale mais que o acerto."
        },
        {
          "t": "ex",
          "id": "m2-p3-ex1",
          "titulo": "2.1 Complete a pergunta com is ou are",
          "ref": "m2-s2/3.2",
          "items": [
            {
              "q": "What ___ this? — It is a pen.",
              "a": [
                "is"
              ],
              "why": "this + **is**."
            },
            {
              "q": "What ___ those? — They are keys.",
              "a": [
                "are"
              ],
              "why": "those + **are**."
            },
            {
              "q": "___ that your bag? — Yes, it is.",
              "a": [
                "Is"
              ],
              "why": "that + **Is**."
            },
            {
              "q": "___ these your books? — Yes, they are.",
              "a": [
                "Are"
              ],
              "why": "these + **Are**."
            },
            {
              "q": "What ___ that? — It is a bus.",
              "a": [
                "is"
              ],
              "why": "that + **is**."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m2-p3-ex2",
          "titulo": "2.2 Respostas curtas",
          "ref": "m2-s2/3.2",
          "items": [
            {
              "q": "Is this your cup? Yes, it ___.",
              "a": [
                "is"
              ],
              "why": "Resposta curta afirmativa: **Yes, it is.**"
            },
            {
              "q": "Are these your keys? No, they ___.",
              "a": [
                [
                  "aren't",
                  "are not"
                ]
              ],
              "why": "Resposta curta negativa: **No, they aren’t.**"
            },
            {
              "q": "Is that your door? No, it ___.",
              "a": [
                [
                  "isn't",
                  "is not"
                ]
              ],
              "why": "Resposta curta negativa: **No, it isn’t.**"
            },
            {
              "q": "Are those your children? Yes, they ___.",
              "a": [
                "are"
              ],
              "why": "Resposta curta afirmativa: **Yes, they are.**"
            },
            {
              "q": "Is this a bus? No, it ___ not.",
              "a": [
                "is"
              ],
              "why": "Sem contração: **No, it is not.**"
            }
          ]
        },
        {
          "t": "ex",
          "id": "m2-p3-ex3",
          "titulo": "2.3 Faça a pergunta ou responda",
          "ref": "m2-s2/3.2",
          "items": [
            {
              "q": "Pergunte o que é aquilo (that).",
              "a": [
                "What is that?",
                "What's that?"
              ],
              "why": "What + is + that?"
            },
            {
              "q": "Pergunte o que são aquelas coisas (those).",
              "a": [
                "What are those?"
              ],
              "why": "What + are + those?"
            },
            {
              "q": "Pergunte se isto (this) é a caneta dele.",
              "a": [
                "Is this his pen?"
              ],
              "why": "Is + this + …?"
            },
            {
              "q": "Pergunte se estas coisas (these) são as suas chaves.",
              "a": [
                "Are these your keys?"
              ],
              "why": "Are + these + …?"
            },
            {
              "q": "Responda: What are these? (são chaves)",
              "a": [
                "They are keys.",
                "They're keys."
              ],
              "why": "A pergunta usa **these**, mas a resposta usa **they**."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m2-p3-ex4",
          "titulo": "2.4 Corrija as frases",
          "ref": "m2-s2/3.2",
          "items": [
            {
              "q": "What is these?",
              "a": [
                "What are these?"
              ],
              "why": "these + **are**."
            },
            {
              "q": "Is this your bag? Yes, this is.",
              "a": [
                "Yes, it is."
              ],
              "why": "Na resposta, use **it** (uma coisa)."
            },
            {
              "q": "Are this your keys?",
              "a": [
                "Are these your keys?"
              ],
              "why": "Plural → **these**."
            },
            {
              "q": "Is those your books?",
              "a": [
                "Are those your books?"
              ],
              "why": "Plural → **are those**."
            },
            {
              "q": "Are those your bags? No, they isn’t.",
              "a": [
                "No, they aren't.",
                "No, they are not."
              ],
              "why": "they + **aren’t**."
            }
          ]
        },
        {
          "t": "etapa",
          "id": "etapa-3",
          "n": 3,
          "titulo": "Ouvir e ler",
          "min": 10,
          "desc": "Ouça, repita e leia em voz alta. Só aparecem palavras e estruturas que você já conhece."
        },
        {
          "t": "h",
          "n": "3.1",
          "title": "OUVIR E LER"
        },
        {
          "t": "reading",
          "boxed": true,
          "sents": [
            [
              "This is my desk. It is small.",
              "Esta é a minha mesa. Ela é pequena."
            ],
            [
              "These are my notebooks, and this is my pen.",
              "Estes são os meus cadernos e esta é a minha caneta."
            ],
            [
              "That is a window, and those are doors.",
              "Aquela é uma janela e aquelas são portas."
            ],
            [
              "Is that a clock? Yes, it is.",
              "Aquilo é um relógio? Sim, é."
            ],
            [
              "Are those pictures? Yes, they are.",
              "Aquelas são fotos? Sim, são."
            ],
            [
              "Is this your bottle? No, it isn’t. It is a cup.",
              "Esta é a sua garrafa? Não. É uma xícara."
            ]
          ],
          "titulo": "My desk"
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita: perguntas",
          "frases": [
            [
              "What are those?",
              "O que são aquelas coisas?"
            ],
            [
              "They are bottles.",
              "São garrafas."
            ],
            [
              "Is that a clock?",
              "Aquilo é um relógio?"
            ],
            [
              "Yes, it is.",
              "Sim, é."
            ],
            [
              "Are these your keys?",
              "Estas são as suas chaves?"
            ]
          ]
        },
        {
          "t": "etapa",
          "id": "etapa-4",
          "n": 4,
          "titulo": "Escrever",
          "min": 5,
          "desc": "Escreva com as suas palavras e, se quiser, peça a correção ao Claude."
        },
        {
          "t": "h",
          "n": "4.1",
          "title": "DITADO E PRODUÇÃO"
        },
        {
          "t": "ex",
          "id": "m2-p3-ditado",
          "titulo": "4.1 Ouça e escreva (ditado)",
          "intro": "Clique em 🔊, ouça e escreva a frase. Use 🐢 para ouvir mais devagar. Contrações valem (I’m = I am).",
          "ref": "m2-s2/3.2",
          "items": [
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "What is that?",
              "a": [
                "What is that?",
                "What's that?"
              ],
              "why": "What + is + that?"
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "Are these your books?",
              "a": [
                "Are these your books?"
              ],
              "why": "Plural → **Are these…?**"
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "No, it isn’t.",
              "a": [
                "No, it isn't.",
                "No, it is not.",
                "No, it's not."
              ],
              "why": "Resposta curta negativa."
            }
          ]
        },
        {
          "t": "prod",
          "id": "prod-m2-p3",
          "prompt": "Escreva 3 perguntas com this/that/these/those (What is…? Is/Are…?) e 2 respostas curtas (Yes, it is. / No, they aren’t.)."
        }
      ],
      "revisao": [
        {
          "t": "bullets",
          "items": [
            "Pergunta: **What is this? · What are these?** · **Is this…? · Are these…?**",
            "Resposta: **it** (uma coisa) · **they** (duas ou mais)",
            "Resposta curta: Yes, it is. · No, they aren’t."
          ]
        },
        {
          "t": "errors",
          "items": [
            [
              "What is these?",
              "What are these?"
            ],
            [
              "Yes, this is.",
              "Yes, it is."
            ]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        }
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
      "id": "m2-p4",
      "n": 4,
      "tipo": "pratica",
      "titulo": "Fixar os possessivos",
      "duracao": 40,
      "resumo": "my, your, his, her, its, our, their: quem possui decide a palavra.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "rot-m2-p4",
          "rows": [
            [
              10,
              "1. Cartões e revisão",
              "Revisões do dia e resumo das sessões anteriores.",
              "etapa-1"
            ],
            [
              15,
              "2. Exercícios",
              "Exercícios sobre o que você já estudou.",
              "etapa-2"
            ],
            [
              10,
              "3. Ouvir e ler",
              "Ouvir, repetir e ler em voz alta.",
              "etapa-3"
            ],
            [
              5,
              "4. Escrever",
              "Ditado e frases suas.",
              "etapa-4"
            ]
          ],
          "titulo": "40 MIN"
        },
        {
          "t": "callout",
          "kind": "info",
          "icone": "🔁",
          "titulo": "Sessão de prática",
          "s": "Esta sessão não traz conteúdo novo: ela serve para fixar o que você acabou de estudar. Se errar, leia o “porquê” de cada correção e refaça."
        },
        {
          "t": "etapa",
          "id": "etapa-1",
          "n": 1,
          "titulo": "Cartões e revisão",
          "min": 10,
          "desc": "Aqueça a memória: revisões do dia e o resumo do que você já viu. Nesta sessão não há cartões novos."
        },
        {
          "t": "srs",
          "id": "srs"
        },
        {
          "t": "revref",
          "id": "revref"
        },
        {
          "t": "etapa",
          "id": "etapa-2",
          "n": 2,
          "titulo": "Exercícios",
          "min": 15,
          "desc": "Exercícios sobre o que você já estudou. Tente sem consultar; o erro explicado vale mais que o acerto."
        },
        {
          "t": "ex",
          "id": "m2-p4-ex1",
          "titulo": "2.1 Complete com o possessivo",
          "ref": "m2-s3/3.1",
          "items": [
            {
              "q": "I have a car. ___ car is big.",
              "a": [
                "My"
              ],
              "why": "I → **my**."
            },
            {
              "q": "You have a bag. ___ bag is new.",
              "a": [
                "Your"
              ],
              "why": "you → **your**."
            },
            {
              "q": "He has a dog. ___ dog is small.",
              "a": [
                "His"
              ],
              "why": "he → **his**."
            },
            {
              "q": "We have a house. ___ house is old.",
              "a": [
                "Our"
              ],
              "why": "we → **our**."
            },
            {
              "q": "They have two children. ___ children are nice.",
              "a": [
                "Their"
              ],
              "why": "they → **their**."
            },
            {
              "q": "It has a door. ___ door is open.",
              "a": [
                "Its"
              ],
              "why": "it → **its** (sem apóstrofo)."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m2-p4-ex2",
          "titulo": "2.2 Escolha his, her, our ou their",
          "ref": "m2-s3/3.1",
          "items": [
            {
              "q": "Tom has a sister. (His / Her) sister is Anna.",
              "opts": [
                "His",
                "Her"
              ],
              "a": "His",
              "why": "O dono é o Tom (ele) → **his**."
            },
            {
              "q": "Anna has a brother. (His / Her) brother is Tom.",
              "opts": [
                "His",
                "Her"
              ],
              "a": "Her",
              "why": "O dona é a Anna (ela) → **her**."
            },
            {
              "q": "Maria has a phone. (His / Her) phone is new.",
              "opts": [
                "His",
                "Her"
              ],
              "a": "Her",
              "why": "Dona: Maria (ela) → **her**."
            },
            {
              "q": "Carlos has a car. (His / Her) car is old.",
              "opts": [
                "His",
                "Her"
              ],
              "a": "His",
              "why": "Dono: Carlos (ele) → **his**."
            },
            {
              "q": "My wife and I have a dog. (Our / Their) dog is big.",
              "opts": [
                "Our",
                "Their"
              ],
              "a": "Our",
              "why": "Nós → **our**."
            },
            {
              "q": "The children have bags. (Our / Their) bags are new.",
              "opts": [
                "Our",
                "Their"
              ],
              "a": "Their",
              "why": "Eles → **their**."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m2-p4-ex3",
          "titulo": "2.3 Its ou it’s?",
          "ref": "m2-s3/3.1",
          "items": [
            {
              "q": "(Its / It’s) a big house.",
              "opts": [
                "Its",
                "It’s"
              ],
              "a": "It’s",
              "why": "**It’s** = it is."
            },
            {
              "q": "The bus has (its / it’s) door open.",
              "opts": [
                "its",
                "it’s"
              ],
              "a": "its",
              "why": "**its** = dele/dela (posse)."
            },
            {
              "q": "(Its / It’s) my phone.",
              "opts": [
                "Its",
                "It’s"
              ],
              "a": "It’s",
              "why": "**It’s** = it is."
            },
            {
              "q": "The dog is in (its / it’s) house.",
              "opts": [
                "its",
                "it’s"
              ],
              "a": "its",
              "why": "**its** = posse."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m2-p4-ex4",
          "titulo": "2.4 Escreva em inglês",
          "ref": "m2-s3/3.1",
          "items": [
            {
              "q": "Meu pai é professor.",
              "a": [
                "My father is a teacher.",
                "My father's a teacher."
              ],
              "why": "my + father · profissão com **a**."
            },
            {
              "q": "Minha mãe é enfermeira.",
              "a": [
                "My mother is a nurse.",
                "My mother's a nurse."
              ],
              "why": "my + mother."
            },
            {
              "q": "O nome dela é Ana.",
              "a": [
                "Her name is Ana."
              ],
              "why": "ela → **her**."
            },
            {
              "q": "Os pais dela moram aqui.",
              "a": [
                "Her parents live here."
              ],
              "why": "ela → **her** · parents (plural) → live."
            },
            {
              "q": "Nossa casa é grande.",
              "a": [
                "Our house is big."
              ],
              "why": "nós → **our**."
            },
            {
              "q": "Esta é a minha esposa.",
              "a": [
                "This is my wife."
              ],
              "why": "this is + my + wife."
            }
          ]
        },
        {
          "t": "etapa",
          "id": "etapa-3",
          "n": 3,
          "titulo": "Ouvir e ler",
          "min": 10,
          "desc": "Ouça, repita e leia em voz alta. Só aparecem palavras e estruturas que você já conhece."
        },
        {
          "t": "h",
          "n": "3.1",
          "title": "OUVIR E LER"
        },
        {
          "t": "reading",
          "boxed": true,
          "sents": [
            [
              "My name is Carlos.",
              "Meu nome é Carlos."
            ],
            [
              "I live with my wife and my son.",
              "Moro com minha esposa e meu filho."
            ],
            [
              "My wife’s name is Paula. She works at a hospital.",
              "O nome da minha esposa é Paula. Ela trabalha em um hospital."
            ],
            [
              "Our son is five years old. His name is Sam.",
              "Nosso filho tem cinco anos. O nome dele é Sam."
            ],
            [
              "My parents live in Campinas. Their house is big.",
              "Meus pais moram em Campinas. A casa deles é grande."
            ],
            [
              "Their garden is beautiful.",
              "O jardim deles é lindo."
            ]
          ],
          "titulo": "My family"
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita: possessivos",
          "frases": [
            [
              "This is my mother.",
              "Esta é a minha mãe."
            ],
            [
              "His name is Tom.",
              "O nome dele é Tom."
            ],
            [
              "Her phone is new.",
              "O celular dela é novo."
            ],
            [
              "Our house is big.",
              "Nossa casa é grande."
            ],
            [
              "Their children are at school.",
              "Os filhos deles estão na escola."
            ]
          ]
        },
        {
          "t": "etapa",
          "id": "etapa-4",
          "n": 4,
          "titulo": "Escrever",
          "min": 5,
          "desc": "Escreva com as suas palavras e, se quiser, peça a correção ao Claude."
        },
        {
          "t": "h",
          "n": "4.1",
          "title": "DITADO E PRODUÇÃO"
        },
        {
          "t": "ex",
          "id": "m2-p4-ditado",
          "titulo": "4.1 Ouça e escreva (ditado)",
          "intro": "Clique em 🔊, ouça e escreva a frase. Use 🐢 para ouvir mais devagar. Contrações valem (I’m = I am).",
          "ref": "m2-s3/3.1",
          "items": [
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "My brother has a dog.",
              "a": [
                "My brother has a dog."
              ],
              "why": "my + brother · he + has."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "Her name is Julia.",
              "a": [
                "Her name is Julia."
              ],
              "why": "Dona = ela → **her**."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "Their house is big.",
              "a": [
                "Their house is big."
              ],
              "why": "Donos = eles → **their**."
            }
          ]
        },
        {
          "t": "prod",
          "id": "prod-m2-p4",
          "prompt": "Escreva 5 frases sobre três pessoas da sua família (my, his, her, our, their): quem é, o nome e uma coisa que a pessoa tem."
        }
      ],
      "revisao": [
        {
          "t": "bullets",
          "items": [
            "O possessivo vem **antes do substantivo** e depende do **dono**: my · your · his · her · its · our · their",
            "**its** (posse, sem apóstrofo) ≠ **it’s** (= it is)",
            "Maria has a dog. **Her** dog is big. (o dono é Maria, ela)"
          ]
        },
        {
          "t": "errors",
          "items": [
            [
              "This is you bag.",
              "This is your bag."
            ],
            [
              "Her is my sister.",
              "She is my sister."
            ],
            [
              "It’s door is open.",
              "Its door is open."
            ]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        }
      ]
    },
    {
      "id": "m2-p5",
      "n": 5,
      "tipo": "pratica",
      "titulo": "Fixar o ’s e a família",
      "duracao": 40,
      "resumo": "Possessivo ’s, de quem é e vocabulário da família.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "rot-m2-p5",
          "rows": [
            [
              10,
              "1. Cartões e revisão",
              "Revisões do dia e resumo das sessões anteriores.",
              "etapa-1"
            ],
            [
              15,
              "2. Exercícios",
              "Exercícios sobre o que você já estudou.",
              "etapa-2"
            ],
            [
              10,
              "3. Ouvir e ler",
              "Ouvir, repetir e ler em voz alta.",
              "etapa-3"
            ],
            [
              5,
              "4. Escrever",
              "Ditado e frases suas.",
              "etapa-4"
            ]
          ],
          "titulo": "40 MIN"
        },
        {
          "t": "callout",
          "kind": "info",
          "icone": "🔁",
          "titulo": "Sessão de prática",
          "s": "Esta sessão não traz conteúdo novo: ela serve para fixar o que você acabou de estudar. Se errar, leia o “porquê” de cada correção e refaça."
        },
        {
          "t": "etapa",
          "id": "etapa-1",
          "n": 1,
          "titulo": "Cartões e revisão",
          "min": 10,
          "desc": "Aqueça a memória: revisões do dia e o resumo do que você já viu. Nesta sessão não há cartões novos."
        },
        {
          "t": "srs",
          "id": "srs"
        },
        {
          "t": "revref",
          "id": "revref"
        },
        {
          "t": "etapa",
          "id": "etapa-2",
          "n": 2,
          "titulo": "Exercícios",
          "min": 15,
          "desc": "Exercícios sobre o que você já estudou. Tente sem consultar; o erro explicado vale mais que o acerto."
        },
        {
          "t": "ex",
          "id": "m2-p5-ex1",
          "titulo": "2.1 Escolha a forma correta",
          "ref": "m2-s3/3.2",
          "items": [
            {
              "q": "This is (Maria’s bag / Maria bag).",
              "opts": [
                "Maria’s bag",
                "Maria bag"
              ],
              "a": "Maria’s bag",
              "why": "Dono + **’s** + coisa: Maria’s bag."
            },
            {
              "q": "That is my (brother’s / brothers’) car. (um irmão)",
              "opts": [
                "brother’s",
                "brothers’"
              ],
              "a": "brother’s",
              "why": "Um dono: **’s**."
            },
            {
              "q": "Those are my (parents’ / parent’s) keys. (os dois pais)",
              "opts": [
                "parents’",
                "parent’s"
              ],
              "a": "parents’",
              "why": "Plural com -s: só o apóstrofo."
            },
            {
              "q": "Whose bag is this? — It is (Anna’s / Annas).",
              "opts": [
                "Anna’s",
                "Annas"
              ],
              "a": "Anna’s",
              "why": "Posse: Anna**’s**."
            },
            {
              "q": "My (sister’s / sisters’) name is Julia. (uma irmã)",
              "opts": [
                "sister’s",
                "sisters’"
              ],
              "a": "sister’s",
              "why": "Uma irmã: **’s**."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m2-p5-ex2",
          "titulo": "2.2 Escreva com ’s",
          "ref": "m2-s3/3.2",
          "items": [
            {
              "q": "O telefone do Tom.",
              "a": [
                "Tom’s phone.",
                "Tom's phone."
              ],
              "why": "Dono + ’s + coisa."
            },
            {
              "q": "A casa da minha irmã.",
              "a": [
                "My sister’s house.",
                "My sister's house."
              ],
              "why": "my sister + ’s + house."
            },
            {
              "q": "O carro do meu pai.",
              "a": [
                "My father’s car.",
                "My father's car."
              ],
              "why": "my father + ’s + car."
            },
            {
              "q": "As chaves dos meus pais.",
              "a": [
                "My parents’ keys.",
                "My parents' keys."
              ],
              "why": "Plural em -s: só o apóstrofo."
            },
            {
              "q": "O nome do cachorro.",
              "a": [
                "The dog’s name.",
                "The dog's name."
              ],
              "why": "the dog + ’s + name."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m2-p5-ex3",
          "titulo": "2.3 ’s: posse ou is?",
          "ref": "m2-s3/3.2",
          "items": [
            {
              "q": "Maria’s a nurse. (’s = ?)",
              "opts": [
                "is",
                "posse"
              ],
              "a": "is",
              "why": "Depois de ’s vem **artigo/adjetivo**: é **is**."
            },
            {
              "q": "Maria’s bag is new. (’s = ?)",
              "opts": [
                "is",
                "posse"
              ],
              "a": "posse",
              "why": "Depois de ’s vem **substantivo**: é **posse**."
            },
            {
              "q": "Tom’s my brother. (’s = ?)",
              "opts": [
                "is",
                "posse"
              ],
              "a": "is",
              "why": "“Tom is my brother.”"
            },
            {
              "q": "Tom’s brother is a teacher. (’s = ?)",
              "opts": [
                "is",
                "posse"
              ],
              "a": "posse",
              "why": "O irmão **do Tom**: posse."
            },
            {
              "q": "She’s at home. (’s = ?)",
              "opts": [
                "is",
                "posse"
              ],
              "a": "is",
              "why": "She’s = **she is**."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m2-p5-ex4",
          "titulo": "2.4 Corrija as frases",
          "ref": "m2-s3/3.2",
          "items": [
            {
              "q": "The car of my brother is old.",
              "a": [
                "My brother’s car is old.",
                "My brother's car is old."
              ],
              "why": "Em inglês: dono + ’s + coisa."
            },
            {
              "q": "Maria phone is new.",
              "a": [
                "Maria’s phone is new.",
                "Maria's phone is new."
              ],
              "why": "Falta o **’s**."
            },
            {
              "q": "This is you bag.",
              "a": [
                "This is your bag."
              ],
              "why": "Possessivo de you: **your**."
            },
            {
              "q": "Her is my sister.",
              "a": [
                "She is my sister.",
                "She's my sister."
              ],
              "why": "Sujeito: **she**."
            },
            {
              "q": "It’s door is open.",
              "a": [
                "Its door is open."
              ],
              "why": "Posse: **its** (sem apóstrofo)."
            }
          ]
        },
        {
          "t": "etapa",
          "id": "etapa-3",
          "n": 3,
          "titulo": "Ouvir e ler",
          "min": 10,
          "desc": "Ouça, repita e leia em voz alta. Só aparecem palavras e estruturas que você já conhece."
        },
        {
          "t": "h",
          "n": "3.1",
          "title": "OUVIR E LER"
        },
        {
          "t": "reading",
          "boxed": true,
          "sents": [
            [
              "Tom is Anna’s brother.",
              "Tom é irmão da Anna."
            ],
            [
              "Tom’s wife is Julia.",
              "A esposa do Tom é a Julia."
            ],
            [
              "Julia’s mother is a teacher, and her father is a police officer.",
              "A mãe da Julia é professora e o pai dela é policial."
            ],
            [
              "Tom and Julia’s son is Sam.",
              "O filho do Tom e da Julia é o Sam."
            ],
            [
              "Sam’s grandfather is Anna’s father.",
              "O avô do Sam é o pai da Anna."
            ],
            [
              "Anna’s parents’ house is big.",
              "A casa dos pais da Anna é grande."
            ]
          ],
          "titulo": "Anna’s family"
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita: de quem é?",
          "frases": [
            [
              "Whose bag is this?",
              "De quem é esta bolsa?"
            ],
            [
              "It is Maria’s bag.",
              "É a bolsa da Maria."
            ],
            [
              "My brother’s car is new.",
              "O carro do meu irmão é novo."
            ],
            [
              "These are my parents’ keys.",
              "Estas são as chaves dos meus pais."
            ],
            [
              "She is my sister.",
              "Ela é minha irmã."
            ]
          ]
        },
        {
          "t": "etapa",
          "id": "etapa-4",
          "n": 4,
          "titulo": "Escrever",
          "min": 5,
          "desc": "Escreva com as suas palavras e, se quiser, peça a correção ao Claude."
        },
        {
          "t": "h",
          "n": "4.1",
          "title": "DITADO E PRODUÇÃO"
        },
        {
          "t": "ex",
          "id": "m2-p5-ditado",
          "titulo": "4.1 Ouça e escreva (ditado)",
          "intro": "Clique em 🔊, ouça e escreva a frase. Use 🐢 para ouvir mais devagar. Contrações valem (I’m = I am).",
          "ref": "m2-s3/3.2",
          "items": [
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "Whose phone is this?",
              "a": [
                "Whose phone is this?"
              ],
              "why": "Whose = de quem."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "It is Tom’s phone.",
              "a": [
                "It is Tom's phone.",
                "It's Tom's phone."
              ],
              "why": "Dono + ’s + coisa."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "My parents’ house is big.",
              "a": [
                "My parents' house is big."
              ],
              "why": "Plural em -s: só o apóstrofo."
            }
          ]
        },
        {
          "t": "prod",
          "id": "prod-m2-p5",
          "prompt": "Escreva 5 frases sobre a família de um amigo ou de uma personagem de série (use ’s e his/her): quem é quem e o que cada um faz."
        }
      ],
      "revisao": [
        {
          "t": "bullets",
          "items": [
            "Um dono: **dono + ’s** (Maria’s bag) · plural em -s: só **’** (my parents’ house)",
            "**’s** pode ser posse ou **is**: depois de substantivo é posse; depois de adjetivo ou artigo é **is**",
            "**Whose bag is this?** = De quem é esta bolsa?"
          ]
        },
        {
          "t": "errors",
          "items": [
            [
              "The car of my brother",
              "My brother’s car"
            ],
            [
              "Maria phone",
              "Maria’s phone"
            ]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        }
      ]
    },
    {
      "id": "m2-p6",
      "n": 6,
      "tipo": "pratica",
      "titulo": "Revisão do módulo",
      "duracao": 40,
      "resumo": "Plural, this/that, possessivos e ’s: aquecimento para o mini-teste.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "rot-m2-p6",
          "rows": [
            [
              10,
              "1. Cartões e revisão",
              "Revisões do dia e resumo das sessões anteriores.",
              "etapa-1"
            ],
            [
              15,
              "2. Exercícios",
              "Exercícios sobre o que você já estudou.",
              "etapa-2"
            ],
            [
              10,
              "3. Ouvir e ler",
              "Ouvir, repetir e ler em voz alta.",
              "etapa-3"
            ],
            [
              5,
              "4. Escrever",
              "Ditado e frases suas.",
              "etapa-4"
            ]
          ],
          "titulo": "40 MIN"
        },
        {
          "t": "callout",
          "kind": "info",
          "icone": "🔁",
          "titulo": "Sessão de prática",
          "s": "Esta sessão não traz conteúdo novo: ela serve para fixar o que você acabou de estudar. Se errar, leia o “porquê” de cada correção e refaça."
        },
        {
          "t": "etapa",
          "id": "etapa-1",
          "n": 1,
          "titulo": "Cartões e revisão",
          "min": 10,
          "desc": "Aqueça a memória: revisões do dia e o resumo do que você já viu. Nesta sessão não há cartões novos."
        },
        {
          "t": "srs",
          "id": "srs"
        },
        {
          "t": "revref",
          "id": "revref"
        },
        {
          "t": "etapa",
          "id": "etapa-2",
          "n": 2,
          "titulo": "Exercícios",
          "min": 15,
          "desc": "Exercícios sobre o que você já estudou. Tente sem consultar; o erro explicado vale mais que o acerto."
        },
        {
          "t": "ex",
          "id": "m2-p6-ex1",
          "titulo": "2.1 Passe para o plural",
          "ref": "m2-s2/3.1",
          "items": [
            {
              "q": "This is my key.",
              "a": [
                "These are my keys."
              ],
              "why": "this → these · is → are · key → keys."
            },
            {
              "q": "That is my brother’s watch.",
              "a": [
                "Those are my brother’s watches.",
                "Those are my brother's watches."
              ],
              "why": "that → those · is → are · watch → watches."
            },
            {
              "q": "This is her baby.",
              "a": [
                "These are her babies."
              ],
              "why": "this → these · baby → babies."
            },
            {
              "q": "That is a woman.",
              "a": [
                "Those are women."
              ],
              "why": "that → those · woman → women (irregular)."
            },
            {
              "q": "This is our child.",
              "a": [
                "These are our children."
              ],
              "why": "this → these · child → children (irregular)."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m2-p6-ex2",
          "titulo": "2.2 Escolha a forma correta",
          "ref": "m2-s3/3.2",
          "items": [
            {
              "q": "These are (my parents’ / my parent’s) keys. (os dois pais)",
              "opts": [
                "my parents’",
                "my parent’s"
              ],
              "a": "my parents’",
              "why": "Plural em -s: só o apóstrofo."
            },
            {
              "q": "(Its / It’s) door is open.",
              "opts": [
                "Its",
                "It’s"
              ],
              "a": "Its",
              "why": "Posse: **its** (sem apóstrofo)."
            },
            {
              "q": "Tom has a sister. (His / Her) sister is a nurse.",
              "opts": [
                "His",
                "Her"
              ],
              "a": "His",
              "why": "O dono é o Tom → **his**."
            },
            {
              "q": "Those (is / are) my children.",
              "opts": [
                "is",
                "are"
              ],
              "a": "are",
              "why": "those + **are**."
            },
            {
              "q": "(This / These) are my keys.",
              "opts": [
                "This",
                "These"
              ],
              "a": "These",
              "why": "Plural → **these**."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m2-p6-ex3",
          "titulo": "2.3 Corrija as frases",
          "ref": "m2-s3/3.2",
          "items": [
            {
              "q": "This are my childs.",
              "a": [
                "These are my children."
              ],
              "why": "these + are · child → children."
            },
            {
              "q": "That is you phone.",
              "a": [
                "That is your phone.",
                "That's your phone."
              ],
              "why": "Possessivo de you: **your**."
            },
            {
              "q": "The car of my sister is new.",
              "a": [
                "My sister’s car is new.",
                "My sister's car is new."
              ],
              "why": "Dono + ’s + coisa."
            },
            {
              "q": "Her are my parents.",
              "a": [
                "They are my parents.",
                "They're my parents."
              ],
              "why": "Sujeito: **they** (plural)."
            },
            {
              "q": "Tom’s sister are a nurse.",
              "a": [
                "Tom’s sister is a nurse.",
                "Tom's sister is a nurse."
              ],
              "why": "sister = uma pessoa → **is**."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m2-p6-ex4",
          "titulo": "2.4 Aquecimento: escreva em inglês",
          "ref": "m2-s2/3.2",
          "items": [
            {
              "q": "Estes são os meus filhos.",
              "a": [
                "These are my children."
              ],
              "why": "these are + my + children."
            },
            {
              "q": "De quem é aquela bolsa?",
              "a": [
                "Whose bag is that?"
              ],
              "why": "Whose + bag + is + that?"
            },
            {
              "q": "Aquelas são as chaves dos meus pais.",
              "a": [
                "Those are my parents’ keys.",
                "Those are my parents' keys."
              ],
              "why": "those are + dono (plural em -s) + ’ + coisa."
            },
            {
              "q": "A casa deles é pequena.",
              "a": [
                "Their house is small."
              ],
              "why": "eles → **their**."
            },
            {
              "q": "O que são estas coisas?",
              "a": [
                "What are these?"
              ],
              "why": "What + are + these?"
            }
          ]
        },
        {
          "t": "etapa",
          "id": "etapa-3",
          "n": 3,
          "titulo": "Ouvir e ler",
          "min": 10,
          "desc": "Ouça, repita e leia em voz alta. Só aparecem palavras e estruturas que você já conhece."
        },
        {
          "t": "h",
          "n": "3.1",
          "title": "OUVIR E LER"
        },
        {
          "t": "reading",
          "boxed": true,
          "sents": [
            [
              "This is my family’s picture.",
              "Esta é a foto da minha família."
            ],
            [
              "These are my parents, and those are my brother’s children.",
              "Estes são os meus pais e aquelas são as crianças do meu irmão."
            ],
            [
              "My father’s watch is old, but my mother’s bag is new.",
              "O relógio do meu pai é velho, mas a bolsa da minha mãe é nova."
            ],
            [
              "That man is Tom, my brother. His wife is Julia.",
              "Aquele homem é o Tom, meu irmão. A esposa dele é a Julia."
            ],
            [
              "Their babies are happy.",
              "Os bebês deles estão felizes."
            ],
            [
              "Whose picture is this? It is our picture.",
              "De quem é esta foto? É a nossa foto."
            ]
          ],
          "titulo": "Family picture"
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita: revisão",
          "frases": [
            [
              "These are my children.",
              "Estes são os meus filhos."
            ],
            [
              "Whose bag is that?",
              "De quem é aquela bolsa?"
            ],
            [
              "Those are my parents’ keys.",
              "Aquelas são as chaves dos meus pais."
            ],
            [
              "Their house is small.",
              "A casa deles é pequena."
            ],
            [
              "What are these?",
              "O que são estas coisas?"
            ]
          ]
        },
        {
          "t": "etapa",
          "id": "etapa-4",
          "n": 4,
          "titulo": "Escrever",
          "min": 5,
          "desc": "Escreva com as suas palavras e, se quiser, peça a correção ao Claude."
        },
        {
          "t": "h",
          "n": "4.1",
          "title": "DITADO E PRODUÇÃO"
        },
        {
          "t": "ex",
          "id": "m2-p6-ditado",
          "titulo": "4.1 Ouça e escreva (ditado)",
          "intro": "Clique em 🔊, ouça e escreva a frase. Use 🐢 para ouvir mais devagar. Contrações valem (I’m = I am).",
          "ref": "m2-s2/3.1",
          "items": [
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "Those men are my brothers.",
              "a": [
                "Those men are my brothers."
              ],
              "why": "those + plural (men) · are."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "Her parents’ house is small.",
              "a": [
                "Her parents' house is small."
              ],
              "why": "Plural em -s: só o apóstrofo."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "Whose keys are these?",
              "a": [
                "Whose keys are these?"
              ],
              "why": "Whose + plural + are + these?"
            }
          ]
        },
        {
          "t": "prod",
          "id": "prod-m2-p6",
          "prompt": "Escreva 5 frases sobre uma foto de família ou de amigos: quem são, de quem são as coisas (’s, my, his, her) e uma pergunta com Whose…?"
        }
      ],
      "revisao": [
        {
          "t": "bullets",
          "items": [
            "Plural: + s · + es · y → ies · irregulares (man → men, child → children, person → people)",
            "**this / that + is** · **these / those + are**",
            "Posse: my · your · his · her · its · our · their · dono + **’s**"
          ]
        },
        {
          "t": "tip",
          "s": "Esta é a última prática antes do mini-teste da Sessão 4. Refaça o Caderno de erros e releia as revisões das sessões 1, 2 e 3. Cores e números 11–20 aparecem só na Sessão 4.",
          "title": "PULO DO GATO"
        }
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
