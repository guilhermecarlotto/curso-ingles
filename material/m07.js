// MATERIAL DO CURSO — módulo 7: Comida, pedidos e compras
// Só conteúdo (sem código do site). Regras e formato em LEIA-ME.md. Salve em UTF-8.
(window.CURSO_MODULOS = window.CURSO_MODULOS || []).push({
  "id": "m7",
  "n": 7,
  "titulo": "Comida, pedidos e compras",
  "descricao": "Pedir comida, comprar roupas e falar de quantidade com contáveis e incontáveis.",
  "fase": "Fase 2 · Base (A2)",
  "faseId": "f2",
  "icone": "🛒",
  "cor": "rose",
  "objetivos": [
    "Distinguir contáveis e incontáveis e usar some, any, much, many",
    "Pedir comida e bebida com educação (would like, can I have)",
    "Comprar roupas: tamanho, provar, comentar e decidir",
    "Falar de lugares de compra e formas de pagamento"
  ],
  "anki": {
    "deck": "Inglês::Módulo 07"
  },
  "sessoes": [
    {
      "id": "m7-s1",
      "n": 1,
      "titulo": "Contáveis e incontáveis",
      "duracao": 40,
      "resumo": "a/an, some, any, much, many, a lot of; How much / How many; vocabulário de comida.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "m7-s1-rot",
          "titulo": "40 MIN",
          "rows": [
            [8,"1. Cartões","Palavras 1 a 10 e revisões do dia.","etapa-1"],
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
          "s": "Distinguir o que se **conta** do que **não se conta** e usar **some, any, much, many, a lot of**."
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
          "id": "m7-s1-voc",
          "items": [
            [1,"bread","BRÉD","pão"],
            [2,"rice","RÁIS","arroz"],
            [3,"milk","MÍLK","leite"],
            [4,"cheese","TCHÍZ","queijo"],
            [5,"an egg","an ÉG","um ovo"],
            [6,"an apple","an ÉP-pol","uma maçã"],
            [7,"chicken","TCHÍ-kin","frango"],
            [8,"meat","MÍT","carne"],
            [9,"vegetables","VÉDJ-ta-bolz","legumes / verduras"],
            [10,"a glass of water","a GLÉS óv UÓ-ter","um copo de água"]
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
        {"t":"h","n":"3.1","title":"CONTÁVEIS E INCONTÁVEIS"},
        {
          "t": "enpt",
          "id": "m7-s1-m7-1.1",
          "en": "{y:Countable} nouns can be counted: an apple, two apples. {y:Uncountable} nouns cannot be counted: water, rice, milk. They have {b:no plural} and use the verb in the singular: The milk is cold.",
          "pt": "Substantivos {y:contáveis} podem ser contados: an apple, two apples. Os {y:incontáveis} não: water, rice, milk. Eles {b:não têm plural} e usam o verbo no singular: The milk is cold."
        },
        {
          "t": "table",
          "head": ["Tipo","Exemplos","Como usar"],
          "rows": [
            ["Contável","an egg · two eggs · an apple","a / an · número · many"],
            ["Incontável","water · milk · rice · bread · cheese","some · any · much · a lot of"],
            ["Medida","a glass of water · a slice of bread · a bottle of milk","a + medida + of + incontável"]
          ],
          "firstCol": true
        },
        {
          "t": "tip",
          "s": "**Bread** (pão), **money**, **information** e **news** são incontáveis em inglês, mesmo que em português sejam contáveis. Diga “**a slice of** bread” ou “**some** bread”, nunca “a bread” ou “two breads”.",
          "title": "PULO DO GATO"
        },
        {
          "t": "image",
          "src": "material/imagens/contaveis.svg",
          "alt": "Maçãs e ovos são contáveis (many); água, arroz e leite são incontáveis (much).",
          "legenda": "Dá para contar? Então many. Não dá? Então much."
        },
        {"t":"h","n":"3.2","title":"SOME, ANY, MUCH, MANY, A LOT OF"},
        {
          "t": "table",
          "head": ["Palavra","Com…","Frase"],
          "rows": [
            ["a / an","contável, 1","I have an egg."],
            ["some","ambos (afirmativa)","I have some eggs. · I have some milk."],
            ["any","ambos (negativa e pergunta)","I don’t have any eggs. · Do you have any milk?"],
            ["many","contável (neg./perg.)","How many eggs do you have?"],
            ["much","incontável (neg./perg.)","How much milk do you have?"],
            ["a lot of","ambos (afirmativa)","I have a lot of eggs / a lot of milk."]
          ],
          "firstCol": true
        },
        {
          "t": "errors",
          "items": [
            ["I want a bread.","I want some bread. / a slice of bread"],
            ["How many milk do we have?","How much milk do we have?"],
            ["I don’t have many money.","I don’t have much money."],
            ["She gave me an information.","She gave me some information."],
            ["The rice are good.","The rice is good."]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        },
        {"t":"h","n":"3.3","title":"COMIDAS BÁSICAS"},
        {
          "t": "ex",
          "id": "m7-s1-ex1",
          "titulo": "3.4 Escolha a palavra certa",
          "items": [
            {"q":"I have ___ egg.","opts":["an","some"],"a":"an","why":"Contável no singular: **an** (vogal)."},
            {"q":"I want ___ water, please.","opts":["a","some"],"a":"some","why":"Incontável: **some**."},
            {"q":"We don’t have ___ milk.","opts":["some","any"],"a":"any","why":"Negativa: **any**."},
            {"q":"Is there ___ cheese?","opts":["any","a"],"a":"any","why":"Pergunta com incontável: **any**."}
          ],
          "ref": "3.2"
        },
        {
          "t": "ex",
          "id": "m7-s1-ex2",
          "titulo": "3.5 Complete com much ou many",
          "items": [
            {"q":"How ___ eggs do you want?","a":["many"],"why":"**Eggs** é contável: **many**."},
            {"q":"How ___ milk do you drink?","a":["much"],"why":"**Milk** é incontável: **much**."},
            {"q":"I don’t have ___ money.","a":["much"],"why":"**Money** é incontável: **much**."},
            {"q":"How ___ apples are there?","a":["many"],"why":"**Apples** é contável: **many**."},
            {"q":"She eats a lot ___ vegetables.","a":["of"],"why":"**A lot of** + substantivo."}
          ],
          "ref": "3.2"
        },
        {
          "t": "ex",
          "id": "m7-s1-ex3",
          "titulo": "3.6 Escreva em inglês e ouça",
          "items": [
            {"q":"Eu quero um pouco de pão.","a":["I want some bread."],"why":"Pão é incontável: **some bread**."},
            {"q":"Quanto arroz você come?","a":["How much rice do you eat?"],"why":"Incontável: **How much**."},
            {"q":"Nós não temos ovos.","a":["We don’t have any eggs.","We do not have any eggs."],"why":"Negativa: **don’t have any**."},
            {"q":"Escreva a frase que você ouviu:","say":"Do you have any milk?","a":["Do you have any milk?"],"why":"Pergunta: **any** + incontável."}
          ],
          "ref": "3.2"
        },
        {"t":"etapa","id":"etapa-4","n":4,"titulo":"Input","min":10,"desc":"Ouça, leia em voz alta e, se houver, assista ao vídeo indicado."},
        {"t":"h","n":"4.1","title":"OUVIR E LER"},
        {
          "t": "example",
          "titulo": "EXEMPLO · Na cozinha",
          "lines": [
            ["A","Do we have any milk?","Temos leite?"],
            ["B","Yes, there is some milk in the fridge.","Temos, há um pouco de leite na geladeira."],
            ["A","How many eggs do we have?","Quantos ovos temos?"],
            ["B","We have six eggs, but we don’t have any bread.","Temos seis ovos, mas não temos pão."],
            ["A","OK. I’ll buy some bread and a lot of vegetables.","Certo. Vou comprar pão e muitos legumes."]
          ]
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita",
          "frases": [
            ["I want some water.","Quero um pouco de água."],
            ["Do you have any milk?","Você tem leite?"],
            ["How many eggs do we have?","Quantos ovos temos?"],
            ["How much rice do you eat?","Quanto arroz você come?"]
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
        {"t":"prod","id":"m7-s1-prod","prompt":"Escreva 5 frases sobre o que tem (ou não tem) na sua geladeira usando a/an, some, any, much, many."}
      ],
      "revisao": [
        {
          "t": "table",
          "head": ["Palavra","Contável","Incontável"],
          "rows": [["a / an","sim","não"],["some","+","+"],["any","− e ?","− e ?"],["many","sim (− e ?)","não"],["much","não","sim (− e ?)"],["a lot of","+","+"]],
          "firstCol": true
        },
        {"t":"bullets","items":["Incontáveis: water, milk, rice, bread, cheese, money, information","Medida: **a slice of** bread · **a glass of** water"]},
        {"t":"errors","items":[["How many milk?","How much milk?"],["an information","some information"]],"title":"ERROS COMUNS DE BRASILEIROS"}
      ]
    },
    {
      "id": "m7-p1",
      "n": 1,
      "tipo": "pratica",
      "titulo": "Fixar contáveis e incontáveis",
      "duracao": 40,
      "resumo": "a/an, some, any, much, many, a lot of e medidas (a glass of, a slice of).",
      "blocos": [
        {
          "t": "roteiro",
          "id": "rot-m7-p1",
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
          "id": "m7-p1-ex1",
          "titulo": "2.1 Escolha a/an, some ou any",
          "ref": "m7-s1/3.2",
          "items": [
            {
              "q": "I have ___ egg.",
              "opts": [
                "a",
                "an",
                "some",
                "any"
              ],
              "a": "an",
              "why": "egg é contável e começa com som de vogal → **an**."
            },
            {
              "q": "I want ___ water, please.",
              "opts": [
                "a",
                "an",
                "some",
                "any"
              ],
              "a": "some",
              "why": "water é incontável, frase afirmativa → **some**."
            },
            {
              "q": "We don’t have ___ milk.",
              "opts": [
                "a",
                "an",
                "some",
                "any"
              ],
              "a": "any",
              "why": "Negativa → **any**."
            },
            {
              "q": "Do you have ___ cheese?",
              "opts": [
                "a",
                "an",
                "some",
                "any"
              ],
              "a": "any",
              "why": "Pergunta → **any**."
            },
            {
              "q": "She has ___ apple.",
              "opts": [
                "a",
                "an",
                "some",
                "any"
              ],
              "a": "an",
              "why": "apple começa com som de vogal → **an**."
            },
            {
              "q": "There is ___ bread on the table.",
              "opts": [
                "a",
                "an",
                "some",
                "any"
              ],
              "a": "some",
              "why": "bread é incontável, afirmativa → **some**."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m7-p1-ex2",
          "titulo": "2.2 Much ou many?",
          "ref": "m7-s1/3.2",
          "items": [
            {
              "q": "How (much / many) eggs do you want?",
              "opts": [
                "much",
                "many"
              ],
              "a": "many",
              "why": "eggs é contável → **many**."
            },
            {
              "q": "How (much / many) milk do you drink?",
              "opts": [
                "much",
                "many"
              ],
              "a": "much",
              "why": "milk é incontável → **much**."
            },
            {
              "q": "I don’t have (much / many) money.",
              "opts": [
                "much",
                "many"
              ],
              "a": "much",
              "why": "money é incontável → **much**."
            },
            {
              "q": "How (much / many) apples are there?",
              "opts": [
                "much",
                "many"
              ],
              "a": "many",
              "why": "apples é contável → **many**."
            },
            {
              "q": "How (much / many) rice do you eat?",
              "opts": [
                "much",
                "many"
              ],
              "a": "much",
              "why": "rice é incontável → **much**."
            },
            {
              "q": "I don’t eat (much / many) vegetables.",
              "opts": [
                "much",
                "many"
              ],
              "a": "many",
              "why": "vegetables é contável (plural) → **many**."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m7-p1-ex3",
          "titulo": "2.3 Medidas e frases",
          "ref": "m7-s1/3.1",
          "items": [
            {
              "q": "a ___ of bread (uma fatia)",
              "a": [
                "slice"
              ],
              "why": "a **slice** of bread."
            },
            {
              "q": "a ___ of milk (uma garrafa)",
              "a": [
                "bottle"
              ],
              "why": "a **bottle** of milk."
            },
            {
              "q": "two ___ of water (dois copos)",
              "a": [
                "glasses"
              ],
              "why": "two **glasses** of water."
            },
            {
              "q": "Quero um pouco de pão.",
              "a": [
                "I want some bread.",
                "I'd like some bread."
              ],
              "why": "bread é incontável: **some bread**."
            },
            {
              "q": "Não temos ovos.",
              "a": [
                "We don't have any eggs.",
                "We do not have any eggs."
              ],
              "why": "Negativa → **any**."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m7-p1-ex4",
          "titulo": "2.4 Corrija as frases",
          "ref": "m7-s1/3.2",
          "items": [
            {
              "q": "I want a bread.",
              "a": [
                "I want some bread.",
                "I want a slice of bread."
              ],
              "why": "bread é incontável."
            },
            {
              "q": "How many milk do we have?",
              "a": [
                "How much milk do we have?"
              ],
              "why": "milk é incontável → **much**."
            },
            {
              "q": "I don’t have many money.",
              "a": [
                "I don't have much money."
              ],
              "why": "money é incontável → **much**."
            },
            {
              "q": "She gave me an information.",
              "a": [
                "She gave me some information."
              ],
              "why": "information é incontável."
            },
            {
              "q": "The rice are good.",
              "a": [
                "The rice is good."
              ],
              "why": "Incontável → verbo no singular."
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
              "There is a lot of milk in my fridge.",
              "Há muito leite na minha geladeira."
            ],
            [
              "There are six eggs, but there isn’t any cheese.",
              "Há seis ovos, mas não há queijo."
            ],
            [
              "I have some chicken and a lot of vegetables.",
              "Tenho frango e muitos legumes."
            ],
            [
              "I don’t have any bread, so I need to buy some.",
              "Não tenho pão, então preciso comprar."
            ],
            [
              "How much rice do we have? Not much.",
              "Quanto arroz temos? Pouco."
            ]
          ],
          "titulo": "In my fridge"
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita: comida",
          "frases": [
            [
              "I want some bread.",
              "Quero um pouco de pão."
            ],
            [
              "Do you have any milk?",
              "Você tem leite?"
            ],
            [
              "How many eggs do we have?",
              "Quantos ovos temos?"
            ],
            [
              "How much rice do you eat?",
              "Quanto arroz você come?"
            ],
            [
              "We don’t have any eggs.",
              "Não temos ovos."
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
          "id": "m7-p1-ditado",
          "titulo": "4.1 Ouça e escreva (ditado)",
          "intro": "Clique em 🔊, ouça e escreva a frase. Use 🐢 para ouvir mais devagar. Contrações valem (I’m = I am).",
          "ref": "m7-s1/3.2",
          "items": [
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "I have an egg and some bread.",
              "a": [
                "I have an egg and some bread."
              ],
              "why": "an egg (contável) · some bread (incontável)."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "How much milk do you drink?",
              "a": [
                "How much milk do you drink?"
              ],
              "why": "milk é incontável → How much."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "We don’t have any cheese.",
              "a": [
                "We don't have any cheese.",
                "We do not have any cheese."
              ],
              "why": "Negativa → any."
            }
          ]
        },
        {
          "t": "prod",
          "id": "prod-m7-p1",
          "prompt": "Escreva uma lista de compras de 6 itens com medidas (a glass of, a slice of, a bottle of) e 3 frases com some, any e a lot of."
        }
      ],
      "revisao": [
        {
          "t": "bullets",
          "items": [
            "Contável: a/an · many · Incontável: some · much · medida (a glass of water)",
            "**some** (afirmativa) · **any** (negativa e pergunta) · **a lot of** (afirmativa)",
            "bread, money, information e news são incontáveis"
          ]
        },
        {
          "t": "errors",
          "items": [
            [
              "I want a bread.",
              "I want some bread."
            ],
            [
              "How many milk do we have?",
              "How much milk do we have?"
            ]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        }
      ]
    },
    {
      "id": "m7-s2",
      "n": 2,
      "titulo": "No restaurante: would like",
      "duracao": 40,
      "resumo": "Fazer pedidos educados: I’d like, Can I have, Would you like?; cardápio e conta.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "m7-s2-rot",
          "titulo": "40 MIN",
          "rows": [
            [8,"1. Cartões","Palavras 11 a 20 e revisões do dia.","etapa-1"],
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
          "s": "Pedir comida e bebida com educação: **I’d like…**, **Can I have…?**, **Would you like…?**"
        },
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
          "id": "m7-s2-voc",
          "items": [
            [11,"I’d like a salad, please.","áid LÁIK a SÉ-lad PLÍZ","Eu gostaria de uma salada, por favor."],
            [12,"Can I have the menu?","KÉN ái RÉV dhe MÉ-niu","Posso ver o cardápio?"],
            [13,"Would you like some coffee?","UÚD iu LÁIK sâm KÓ-fi","Você gostaria de café?"],
            [14,"Yes, please. · No, thanks.","IÉS PLÍZ · NÔU THÉNKS","Sim, por favor. · Não, obrigado."],
            [15,"Are you ready to order?","ár iu RÉ-di tu Ó-der","Já podem pedir?"],
            [16,"Anything else?","É-ni-thin ÉLS","Mais alguma coisa?"],
            [17,"That’s all, thanks.","DHÉTS ÓL THÉNKS","É só, obrigado."],
            [18,"The bill, please.","dhe BÍL PLÍZ","A conta, por favor."],
            [19,"a table for two","a TÊI-bol fór TÚ","uma mesa para dois"],
            [20,"delicious","di-LÍ-shes","delicioso"]
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
        {"t":"h","n":"3.1","title":"WOULD LIKE"},
        {
          "t": "enpt",
          "id": "m7-s2-m7-2.1",
          "en": "{y:I’d like} (= I would like) is a polite way to say {b:I want}. To offer something, ask {y:Would you like…?} We use {y:a noun} or {y:to + verb} after it: I’d like a coffee. Would you like to see the menu?",
          "pt": "{y:I’d like} (= I would like) é uma forma educada de dizer {b:eu quero}. Para oferecer algo, pergunte {y:Would you like…?}. Depois vem {y:um substantivo} ou {y:to + verbo}: I’d like a coffee. Would you like to see the menu?"
        },
        {
          "t": "table",
          "head": ["Situação","Frase"],
          "rows": [
            ["Pedir","I’d like a salad, please."],
            ["Pedir","Can I have a glass of water, please?"],
            ["Oferecer","Would you like some coffee?"],
            ["Aceitar","Yes, please. / Yes, I’d like that."],
            ["Recusar","No, thank you. / No, thanks."],
            ["Pedir a conta","The bill, please. / Can I have the check?"]
          ],
          "firstCol": true
        },
        {
          "t": "tip",
          "s": "**I want** soa seco ou mal-educado ao pedir algo a um desconhecido. Use **I’d like** ou **Can I have…?** + **please**. E **would** não muda com a pessoa e **não leva -s**: she would like (não “she woulds like”).",
          "title": "PULO DO GATO"
        },
        {"t":"h","n":"3.2","title":"NO RESTAURANTE"},
        {
          "t": "table",
          "head": ["Quem","Frase típica"],
          "rows": [
            ["Garçom","Are you ready to order? · What would you like?"],
            ["Cliente","I’d like the chicken and rice, please."],
            ["Garçom","Would you like something to drink?"],
            ["Cliente","Just water, please. · Orange juice, please."],
            ["Garçom","Anything else?"],
            ["Cliente","That’s all, thanks."]
          ],
          "firstCol": true
        },
        {
          "t": "errors",
          "items": [
            ["I want a coffee. (pedindo ao garçom)","I’d like a coffee, please."],
            ["She woulds like tea.","She would like tea."],
            ["I would like to a coffee.","I would like a coffee."],
            ["Do you would like some water?","Would you like some water?"],
            ["I like a salad, please. (pedindo)","I’d like a salad, please."]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        },
        {
          "t": "image",
          "src": "material/imagens/restaurante.svg",
          "alt": "Cliente pedindo com I’d like a pizza, please e garçom perguntando Anything to drink?",
          "legenda": "Pedindo com educação no restaurante."
        },
        {"t":"h","n":"3.3","title":"FRASES-CHAVE"},
        {
          "t": "ex",
          "id": "m7-s2-ex1",
          "titulo": "3.4 Complete com would ou like",
          "items": [
            {"q":"I ___ like a coffee, please. (would)","a":[["would","’d","d"]],"why":"**I would like** = **I’d like**."},
            {"q":"___ you like some water?","a":["Would"],"why":"Oferta: **Would you like…?**"},
            {"q":"She would ___ a salad.","a":["like"],"why":"**would like** (sem -s)."},
            {"q":"Can I ___ the menu, please?","a":["have"],"why":"Pedido: **Can I have…?**"},
            {"q":"No, ___ . (educado: obrigado)","a":[["thanks","thank you"]],"why":"Recusa: **No, thanks.**"}
          ],
          "ref": "3.1"
        },
        {
          "t": "ex",
          "id": "m7-s2-ex2",
          "titulo": "3.5 Escolha a frase mais educada",
          "items": [
            {"q":"Pedindo ao garçom:","opts":["I want a coffee.","I’d like a coffee, please."],"a":"I’d like a coffee, please.","why":"**I’d like… please** é a forma educada."},
            {"q":"Garçom pergunta: “Would you like some dessert?” Você aceita:","opts":["Yes, please.","Yes, I do."],"a":"Yes, please.","why":"Oferta com **Would you like** pede **Yes, please** (não “I do”)."},
            {"q":"Para pedir a conta:","opts":["The bill, please.","The bill, you."],"a":"The bill, please.","why":"**The bill, please.**"},
            {"q":"___ you like some tea?","opts":["Would","Do"],"a":"Would","why":"Oferta educada: **Would you like…?** (não “Do you would like”)."}
          ],
          "ref": "3.1"
        },
        {
          "t": "ex",
          "id": "m7-s2-ex3",
          "titulo": "3.6 Escreva em inglês e ouça",
          "items": [
            {"q":"Eu gostaria de uma água, por favor.","a":["I’d like a water, please.","I would like a water, please.","I’d like some water, please.","I would like some water, please.","I’d like a glass of water, please.","I would like a glass of water, please."],"why":"**I’d like** + bebida + **please**."},
            {"q":"Você gostaria de café?","a":["Would you like some coffee?","Would you like coffee?"],"why":"Oferta: **Would you like…?**"},
            {"q":"Posso ver o cardápio?","a":["Can I have the menu?","Can I see the menu?"],"why":"Pedido: **Can I have…?** ou **Can I see…?**"},
            {"q":"Escreva a frase que você ouviu:","say":"I’d like a salad, please.","a":["I’d like a salad, please.","I would like a salad, please."],"why":"**I’d like** = I would like."}
          ],
          "ref": "3.1"
        },
        {"t":"etapa","id":"etapa-4","n":4,"titulo":"Input","min":10,"desc":"Ouça, leia em voz alta e, se houver, assista ao vídeo indicado."},
        {"t":"h","n":"4.1","title":"OUVIR E LER"},
        {
          "t": "example",
          "titulo": "EXEMPLO · No restaurante",
          "lines": [
            ["A","Good evening. A table for two?","Boa noite. Uma mesa para dois?"],
            ["B","Yes, please. Can we have the menu?","Sim, por favor. Podemos ver o cardápio?"],
            ["A","Are you ready to order?","Já podem pedir?"],
            ["B","I’d like the chicken and rice, and my friend would like a salad.","Eu gostaria do frango com arroz, e meu amigo gostaria de uma salada."],
            ["A","Would you like something to drink?","Gostariam de algo para beber?"],
            ["B","Two waters, please. Everything was delicious. The bill, please.","Duas águas, por favor. Estava tudo delicioso. A conta, por favor."]
          ]
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita",
          "frases": [
            ["I’d like a salad, please.","Eu gostaria de uma salada, por favor."],
            ["Would you like some coffee?","Você gostaria de café?"],
            ["Can I have the menu?","Posso ver o cardápio?"],
            ["The bill, please.","A conta, por favor."]
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
        {"t":"prod","id":"m7-s2-prod","prompt":"Escreva um diálogo de 6 falas entre você e um garçom: pedir o prato, a bebida e a conta."}
      ],
      "revisao": [
        {
          "t": "table",
          "head": ["Função","Frase"],
          "rows": [
            ["pedir","I’d like… · Can I have…?"],
            ["oferecer","Would you like…?"],
            ["aceitar","Yes, please."],
            ["recusar","No, thanks."],
            ["conta","The bill, please."]
          ],
          "firstCol": true
        },
        {"t":"bullets","items":["**would like** não leva -s nem do: she would like · Would you like…?","Sempre **please**"]},
        {
          "t": "errors",
          "items": [["Do you would like?","Would you like?"],["I want a coffee. (ao garçom)","I’d like a coffee, please."]],
          "title": "ERROS COMUNS DE BRASILEIROS"
        }
      ]
    },
    {
      "id": "m7-p2",
      "n": 2,
      "tipo": "pratica",
      "titulo": "Fixar would like e pedidos educados",
      "duracao": 40,
      "resumo": "I’d like, Can I have…?, Would you like…? e respostas.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "rot-m7-p2",
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
          "id": "m7-p2-ex1",
          "titulo": "2.1 Complete a frase",
          "ref": "m7-s2/3.1",
          "items": [
            {
              "q": "I ___ like a salad, please. (would)",
              "a": [
                [
                  "would",
                  "'d"
                ]
              ],
              "why": "I would like = **I’d like**."
            },
            {
              "q": "___ you like some water?",
              "a": [
                "Would"
              ],
              "why": "Oferecer: **Would you like…?**"
            },
            {
              "q": "She would ___ a coffee.",
              "a": [
                "like"
              ],
              "why": "would + **like**."
            },
            {
              "q": "___ I have the menu, please?",
              "a": [
                "Can"
              ],
              "why": "Pedir: **Can I have…?**"
            },
            {
              "q": "Would you like some dessert? — Yes, ___.",
              "a": [
                "please"
              ],
              "why": "Aceitar com educação: **Yes, please.**"
            }
          ]
        },
        {
          "t": "ex",
          "id": "m7-p2-ex2",
          "titulo": "2.2 Escolha a frase mais educada",
          "ref": "m7-s2/3.1",
          "items": [
            {
              "q": "Pedindo ao garçom:",
              "opts": [
                "I want a coffee.",
                "I’d like a coffee, please."
              ],
              "a": "I’d like a coffee, please.",
              "why": "**I’d like… please** é educado."
            },
            {
              "q": "Oferecendo café:",
              "opts": [
                "Do you want coffee?",
                "Would you like some coffee?"
              ],
              "a": "Would you like some coffee?",
              "why": "**Would you like…?** oferece com educação."
            },
            {
              "q": "Aceitando:",
              "opts": [
                "Yes, please.",
                "Yes, give me."
              ],
              "a": "Yes, please.",
              "why": "**Yes, please.**"
            },
            {
              "q": "Recusando com educação:",
              "opts": [
                "No, thank you.",
                "No."
              ],
              "a": "No, thank you.",
              "why": "**No, thank you.**"
            },
            {
              "q": "Pedindo a conta:",
              "opts": [
                "The bill, please.",
                "Give me the bill."
              ],
              "a": "The bill, please.",
              "why": "**The bill, please.**"
            }
          ]
        },
        {
          "t": "ex",
          "id": "m7-p2-ex3",
          "titulo": "2.3 Escreva em inglês",
          "ref": "m7-s2/3.1",
          "items": [
            {
              "q": "Eu gostaria de uma salada, por favor.",
              "a": [
                "I'd like a salad, please.",
                "I would like a salad, please."
              ],
              "why": "I’d like + coisa + please."
            },
            {
              "q": "Você gostaria de um pouco de água?",
              "a": [
                "Would you like some water?"
              ],
              "why": "Would you like + some…?"
            },
            {
              "q": "Eu gostaria de frango e arroz.",
              "a": [
                "I'd like chicken and rice.",
                "I would like chicken and rice."
              ],
              "why": "I’d like + comida."
            },
            {
              "q": "Mais alguma coisa?",
              "a": [
                "Anything else?"
              ],
              "why": "Anything else?"
            },
            {
              "q": "É só, obrigado.",
              "a": [
                "That's all, thanks.",
                "That is all, thanks.",
                "That's all, thank you."
              ],
              "why": "That’s all, thanks."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m7-p2-ex4",
          "titulo": "2.4 Corrija as frases",
          "ref": "m7-s2/3.1",
          "items": [
            {
              "q": "I want a coffee. (pedindo ao garçom)",
              "a": [
                "I'd like a coffee, please.",
                "I would like a coffee, please."
              ],
              "why": "Para pedir, use **I’d like… please**."
            },
            {
              "q": "She woulds like tea.",
              "a": [
                "She would like tea."
              ],
              "why": "**would** não leva -s."
            },
            {
              "q": "I would like to a coffee.",
              "a": [
                "I would like a coffee."
              ],
              "why": "would like + substantivo, sem **to**."
            },
            {
              "q": "Do you would like some water?",
              "a": [
                "Would you like some water?"
              ],
              "why": "Pergunta com would: **Would you…?**"
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
              "Good morning! Are you ready to order?",
              "Bom dia! Já podem pedir?"
            ],
            [
              "B",
              "Yes, I’d like a coffee and a slice of bread, please.",
              "Sim, eu gostaria de um café e uma fatia de pão, por favor."
            ],
            [
              "A",
              "Would you like some cheese?",
              "Você gostaria de um pouco de queijo?"
            ],
            [
              "B",
              "No, thank you.",
              "Não, obrigado."
            ],
            [
              "A",
              "Anything else?",
              "Mais alguma coisa?"
            ],
            [
              "B",
              "That’s all, thanks. The bill, please.",
              "É só, obrigado. A conta, por favor."
            ]
          ],
          "titulo": "EXEMPLO · No café"
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita: pedidos",
          "frases": [
            [
              "I’d like a salad, please.",
              "Eu gostaria de uma salada, por favor."
            ],
            [
              "Can I have the menu?",
              "Posso ver o cardápio?"
            ],
            [
              "Would you like some coffee?",
              "Você gostaria de café?"
            ],
            [
              "Yes, please.",
              "Sim, por favor."
            ],
            [
              "That’s all, thanks.",
              "É só, obrigado."
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
          "id": "m7-p2-ditado",
          "titulo": "4.1 Ouça e escreva (ditado)",
          "intro": "Clique em 🔊, ouça e escreva a frase. Use 🐢 para ouvir mais devagar. Contrações valem (I’m = I am).",
          "ref": "m7-s2/3.1",
          "items": [
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "I’d like a coffee, please.",
              "a": [
                "I'd like a coffee, please.",
                "I would like a coffee, please."
              ],
              "why": "I’d like + coisa + please."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "Would you like some water?",
              "a": [
                "Would you like some water?"
              ],
              "why": "Would you like + some…?"
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "The bill, please.",
              "a": [
                "The bill, please."
              ],
              "why": "The bill, please."
            }
          ]
        },
        {
          "t": "prod",
          "id": "prod-m7-p2",
          "prompt": "Escreva um mini-diálogo de 4 falas pedindo uma bebida e uma comida num café (I’d like…, Can I have…?, Would you like…?)."
        }
      ],
      "revisao": [
        {
          "t": "bullets",
          "items": [
            "Pedir: **I’d like… please** · **Can I have… please?** · oferecer: **Would you like…?**",
            "**would** não muda e não leva -s · depois de would like, substantivo ou to + verbo",
            "Respostas: Yes, please. · No, thank you."
          ]
        },
        {
          "t": "errors",
          "items": [
            [
              "I want a coffee.",
              "I’d like a coffee, please."
            ],
            [
              "Do you would like some water?",
              "Would you like some water?"
            ]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        }
      ]
    },
    {
      "id": "m7-p3",
      "n": 3,
      "tipo": "pratica",
      "titulo": "Fixar o restaurante",
      "duracao": 40,
      "resumo": "Pedir mesa, prato, bebida e conta; conversar com o garçom.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "rot-m7-p3",
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
          "id": "m7-p3-ex1",
          "titulo": "2.1 Quem fala?",
          "ref": "m7-s2/3.2",
          "items": [
            {
              "q": "“Are you ready to order?”",
              "opts": [
                "garçom",
                "cliente"
              ],
              "a": "garçom",
              "why": "Quem atende pergunta se já pode pedir."
            },
            {
              "q": "“I’d like the chicken and rice, please.”",
              "opts": [
                "garçom",
                "cliente"
              ],
              "a": "cliente",
              "why": "Quem pede o prato é o cliente."
            },
            {
              "q": "“Would you like something to drink?”",
              "opts": [
                "garçom",
                "cliente"
              ],
              "a": "garçom",
              "why": "Quem oferece a bebida é o garçom."
            },
            {
              "q": "“Just water, please.”",
              "opts": [
                "garçom",
                "cliente"
              ],
              "a": "cliente",
              "why": "O cliente responde."
            },
            {
              "q": "“That’s all, thanks.”",
              "opts": [
                "garçom",
                "cliente"
              ],
              "a": "cliente",
              "why": "O cliente encerra o pedido."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m7-p3-ex2",
          "titulo": "2.2 Complete a conversa",
          "ref": "m7-s2/3.2",
          "items": [
            {
              "q": "A table ___ two, please.",
              "a": [
                "for"
              ],
              "why": "Mesa para dois: **a table for two**."
            },
            {
              "q": "Are you ___ to order?",
              "a": [
                "ready"
              ],
              "why": "**Are you ready to order?**"
            },
            {
              "q": "I’d like the chicken ___ rice.",
              "a": [
                "and"
              ],
              "why": "and = e."
            },
            {
              "q": "___ else? — That’s all, thanks.",
              "a": [
                "Anything"
              ],
              "why": "**Anything else?**"
            },
            {
              "q": "The ___, please. (a conta)",
              "a": [
                "bill"
              ],
              "why": "**The bill, please.**"
            }
          ]
        },
        {
          "t": "ex",
          "id": "m7-p3-ex3",
          "titulo": "2.3 Escolha a resposta",
          "ref": "m7-s2/3.1",
          "items": [
            {
              "q": "“Would you like some dessert?” (aceitar)",
              "opts": [
                "Yes, please.",
                "Yes, I do."
              ],
              "a": "Yes, please.",
              "why": "Aceitar com educação: **Yes, please.**"
            },
            {
              "q": "“Anything else?” (terminar o pedido)",
              "opts": [
                "That’s all, thanks.",
                "Yes, I am."
              ],
              "a": "That’s all, thanks.",
              "why": "**That’s all, thanks.**"
            },
            {
              "q": "“Can I have the menu?” (resposta do garçom)",
              "opts": [
                "Yes, of course.",
                "Yes, I would."
              ],
              "a": "Yes, of course.",
              "why": "**Yes, of course.**"
            },
            {
              "q": "“Would you like a coffee?” (recusar)",
              "opts": [
                "No, thank you.",
                "No, I do coffee."
              ],
              "a": "No, thank you.",
              "why": "**No, thank you.**"
            },
            {
              "q": "“What would you like?” (pedir salada)",
              "opts": [
                "I’d like a salad, please.",
                "I like a salad."
              ],
              "a": "I’d like a salad, please.",
              "why": "Pedido educado: **I’d like…**"
            }
          ]
        },
        {
          "t": "ex",
          "id": "m7-p3-ex4",
          "titulo": "2.4 Escreva em inglês",
          "ref": "m7-s2/3.2",
          "items": [
            {
              "q": "Uma mesa para dois, por favor.",
              "a": [
                "A table for two, please."
              ],
              "why": "a table for two."
            },
            {
              "q": "Vocês já podem pedir?",
              "a": [
                "Are you ready to order?"
              ],
              "why": "Are you ready to order?"
            },
            {
              "q": "Eu gostaria de frango com arroz.",
              "a": [
                "I'd like chicken and rice.",
                "I would like chicken and rice."
              ],
              "why": "I’d like + comida."
            },
            {
              "q": "Estava delicioso.",
              "a": [
                "It was delicious.",
                "Everything was delicious."
              ],
              "why": "delicious = delicioso."
            },
            {
              "q": "A conta, por favor.",
              "a": [
                "The bill, please."
              ],
              "why": "The bill, please."
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
              "Last night, my wife and I went to a restaurant.",
              "Ontem à noite, minha esposa e eu fomos a um restaurante."
            ],
            [
              "We wanted a table for two.",
              "Queríamos uma mesa para dois."
            ],
            [
              "I had the chicken and rice, and my wife had a salad.",
              "Eu comi frango com arroz e minha esposa comeu uma salada."
            ],
            [
              "We drank some water, and we ate a lot.",
              "Bebemos um pouco de água e comemos bastante."
            ],
            [
              "Everything was delicious.",
              "Tudo estava delicioso."
            ],
            [
              "Finally, we said: “The bill, please.” We left at ten o’clock.",
              "Por fim, dissemos: “A conta, por favor.” Saímos às dez horas."
            ]
          ],
          "titulo": "Dinner for two"
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita: no restaurante",
          "frases": [
            [
              "A table for two, please.",
              "Uma mesa para dois, por favor."
            ],
            [
              "Are you ready to order?",
              "Vocês já podem pedir?"
            ],
            [
              "I’d like the chicken and rice.",
              "Eu gostaria do frango com arroz."
            ],
            [
              "Everything was delicious.",
              "Tudo estava delicioso."
            ],
            [
              "The bill, please.",
              "A conta, por favor."
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
          "id": "m7-p3-ditado",
          "titulo": "4.1 Ouça e escreva (ditado)",
          "intro": "Clique em 🔊, ouça e escreva a frase. Use 🐢 para ouvir mais devagar. Contrações valem (I’m = I am).",
          "ref": "m7-s2/3.2",
          "items": [
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "Are you ready to order?",
              "a": [
                "Are you ready to order?"
              ],
              "why": "Are you ready to order?"
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "I’d like chicken and rice.",
              "a": [
                "I'd like chicken and rice.",
                "I would like chicken and rice."
              ],
              "why": "I’d like + comida."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "Anything else?",
              "a": [
                "Anything else?"
              ],
              "why": "Anything else?"
            }
          ]
        },
        {
          "t": "prod",
          "id": "prod-m7-p3",
          "prompt": "Escreva 5 frases sobre uma refeição em um restaurante ou café (no passado): o que você pediu, o que bebeu e se estava delicioso."
        }
      ],
      "revisao": [
        {
          "t": "bullets",
          "items": [
            "Mesa: **A table for two, please.** · Garçom: **Are you ready to order? · Anything else?**",
            "Cliente: **I’d like… · Can I have…? · That’s all, thanks. · The bill, please.**",
            "delicious = delicioso"
          ]
        },
        {
          "t": "errors",
          "items": [
            [
              "I want a coffee.",
              "I’d like a coffee, please."
            ]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        }
      ]
    },
    {
      "id": "m7-s3",
      "n": 3,
      "titulo": "Compras e roupas",
      "duracao": 40,
      "resumo": "Roupas, tamanhos, provar, this one / that one, too big / too small; falar com o vendedor.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "m7-s3-rot",
          "titulo": "40 MIN",
          "rows": [
            [8,"1. Cartões","Palavras 21 a 30 e revisões do dia.","etapa-1"],
            [7,"2. Revisão","Resumo das sessões agendadas e erros do Caderno.","etapa-2"],
            [12,"3. Conteúdo novo","Seções 3.1 a 3.6.","etapa-3"],
            [10,"4. Input","Ouvir e ler em voz alta.","etapa-4"],
            [3,"5. Produção","Escrever com as suas palavras (e pedir correção).","etapa-5"]
          ]
        },
        {"t":"callout","kind":"goal","titulo":"Objetivo da sessão","s":"Comprar roupas: pedir o **tamanho**, **provar**, comentar o preço e decidir."},
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
          "id": "m7-s3-voc",
          "items": [
            [21,"a T-shirt · a shirt","a TÍ-shért · a SHÉRT","uma camiseta · uma camisa"],
            [22,"jeans · pants","DJÍNZ · PÉNTS","jeans · calça"],
            [23,"a dress · a skirt","a DRÉS · a SKÉRT","um vestido · uma saia"],
            [24,"a jacket · a coat","a DJÉ-kit · a KÔUT","uma jaqueta · um casaco"],
            [25,"shoes · socks","SHÚZ · SÓKS","sapatos · meias"],
            [26,"What size?","UÓT SÁIZ","Qual tamanho?"],
            [27,"try on","TRÁI ÓN","provar (roupa)"],
            [28,"too big · too small","TÚ BÍG · TÚ SMÓL","grande demais · pequeno demais"],
            [29,"this one · that one","DHÍS uân · DHÉT uân","este · aquele"],
            [30,"I’ll take it.","áiu TÊIK it","Eu levo."]
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
        {"t":"h","n":"3.1","title":"ROUPAS E PLURAIS ESPECIAIS"},
        {
          "t": "p",
          "s": "Algumas roupas só existem no **plural** em inglês, porque têm duas partes: **jeans, pants, shorts, glasses**. Para falar de uma peça, use **a pair of**: **a pair of** jeans, **two pairs of** shoes."
        },
        {
          "t": "table",
          "head": ["Roupa","Inglês","Exemplo"],
          "rows": [
            ["camiseta · camisa","T-shirt · shirt","This T-shirt is blue."],
            ["calça jeans · calça","jeans · pants","These jeans are nice."],
            ["vestido · saia","dress · skirt","That dress is beautiful."],
            ["jaqueta · casaco","jacket · coat","I need a warm coat."],
            ["sapatos · meias","shoes · socks","These shoes are too small."]
          ],
          "firstCol": true
        },
        {
          "t": "tip",
          "s": "**Jeans** e **pants** pedem verbo no plural: “These jeans **are** nice” (não “is”). E o plural de “this” é “these”.",
          "title": "PULO DO GATO"
        },
        {
          "t": "image",
          "src": "material/imagens/roupas.svg",
          "alt": "Camiseta, calça jeans, vestido, sapatos e chapéu, com seis cores.",
          "legenda": "Roupas e cores."
        },
        {"t":"h","n":"3.2","title":"THIS ONE, THAT ONE; TOO BIG, TOO SMALL"},
        {
          "t": "enpt",
          "id": "m7-s3-m7-3.2",
          "en": "Use {y:one} to avoid repeating a noun: I like this {y:one}. For plural, use {y:ones}: I like these {y:ones}. {y:Too} means “more than needed”: too big, too small, too expensive.",
          "pt": "Use {y:one} para não repetir o substantivo: I like this {y:one}. No plural, {y:ones}: I like these {y:ones}. {y:Too} quer dizer “demais”: too big, too small, too expensive."
        },
        {
          "t": "table",
          "head": ["Situação","Frase"],
          "rows": [
            ["Pedir tamanho","What size do you wear? · Do you have a medium?"],
            ["Provar","Can I try it on? · Where can I try this on?"],
            ["Opinião","It’s too big. · They’re too small. · It looks good."],
            ["Preço","How much is this one? · It’s too expensive."],
            ["Decidir","I’ll take it. · I’ll take these. · I’ll think about it."]
          ],
          "firstCol": true
        },
        {
          "t": "errors",
          "items": [
            ["These jeans is nice.","These jeans are nice."],
            ["It is much big.","It is too big."],
            ["I like this blue.","I like this blue one."],
            ["I want to try it.","Can I try it on?"],
            ["The shoes is expensive.","The shoes are expensive."]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        },
        {"t":"h","n":"3.3","title":"FRASES-CHAVE"},
        {
          "t": "ex",
          "id": "m7-s3-ex1",
          "titulo": "3.4 Complete com is, are, one ou ones",
          "items": [
            {"q":"These jeans ___ nice.","a":["are"],"why":"**Jeans** é sempre plural: **are**."},
            {"q":"I like this ___ . (a camisa azul)","a":["one"],"why":"Singular: **one**."},
            {"q":"I like these ___ . (os sapatos azuis)","a":["ones"],"why":"Plural: **ones**."},
            {"q":"This shirt is ___ small. (pequena demais)","a":["too"],"why":"“Demais” = **too**."},
            {"q":"That coat ___ expensive.","a":["is"],"why":"**Coat** é singular: **is**."}
          ],
          "ref": "3.2"
        },
        {
          "t": "ex",
          "id": "m7-s3-ex2",
          "titulo": "3.5 Escolha a opção certa",
          "items": [
            {"q":"Para provar uma roupa você diz:","opts":["Can I try it on?","Can I try it?"],"a":"Can I try it on?","why":"Roupa: **try on** (provar)."},
            {"q":"A calça ficou apertada. Você diz:","opts":["They’re too small.","They’re much small."],"a":"They’re too small.","why":"“Demais” = **too**, não “much”."},
            {"q":"Você decide comprar:","opts":["I’ll take it.","I’ll think it."],"a":"I’ll take it.","why":"“Eu levo” = **I’ll take it**."},
            {"q":"A pair of ___ .","opts":["jeans","jean"],"a":"jeans","why":"**A pair of** + plural: **jeans**."}
          ],
          "ref": "3.2"
        },
        {
          "t": "ex",
          "id": "m7-s3-ex3",
          "titulo": "3.6 Escreva em inglês e ouça",
          "items": [
            {"q":"Posso provar isto?","a":["Can I try this on?","Can I try it on?"],"why":"Roupa: **try on**."},
            {"q":"Estes sapatos são grandes demais.","a":["These shoes are too big."],"why":"**Shoes** plural: **are** + too big."},
            {"q":"Eu levo estes.","a":["I’ll take these.","I will take these."],"why":"Eu levo = **I’ll take**."},
            {"q":"Escreva a frase que você ouviu:","say":"Do you have a smaller size?","a":["Do you have a smaller size?"],"why":"Pergunta com **Do you have…?**"}
          ],
          "ref": "3.2"
        },
        {"t":"etapa","id":"etapa-4","n":4,"titulo":"Input","min":10,"desc":"Ouça, leia em voz alta e, se houver, assista ao vídeo indicado."},
        {"t":"h","n":"4.1","title":"OUVIR E LER"},
        {
          "t": "example",
          "titulo": "EXEMPLO · Na loja de roupas",
          "lines": [
            ["A","Hi! Can I help you?","Oi! Posso ajudar?"],
            ["B","Yes, I like these jeans. Do you have a medium?","Sim, gostei destes jeans. Tem tamanho médio?"],
            ["A","Yes. The fitting room is over there.","Tem. O provador é ali."],
            ["B","They’re too big. Do you have a smaller size?","Ficaram grandes demais. Tem um tamanho menor?"],
            ["A","Yes, here you are. They’re forty dollars.","Tem. Aqui está. Custam quarenta dólares."],
            ["B","Perfect. I’ll take them.","Perfeito. Eu levo."]
          ]
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita",
          "frases": [
            ["These jeans are too big.","Estes jeans estão grandes demais."],
            ["Can I try this on?","Posso provar isto?"],
            ["I like this one.","Gostei deste."],
            ["I’ll take it.","Eu levo."]
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
        {"t":"prod","id":"m7-s3-prod","prompt":"Escreva um diálogo de 6 falas numa loja de roupas: escolher a peça, provar, comentar o tamanho e decidir."}
      ],
      "revisao": [
        {
          "t": "table",
          "head": ["Expressão","Uso"],
          "rows": [
            ["jeans · pants · shorts","sempre plural (are)"],
            ["a pair of","uma peça: a pair of jeans"],
            ["one / ones","evita repetir o nome"],
            ["too + adjetivo","demais"],
            ["try on · I’ll take it","provar · levar"]
          ],
          "firstCol": true
        },
        {"t":"errors","items":[["These jeans is nice.","These jeans are nice."],["It is much big.","It is too big."]],"title":"ERROS COMUNS DE BRASILEIROS"}
      ]
    },
    {
      "id": "m7-p4",
      "n": 4,
      "tipo": "pratica",
      "titulo": "Fixar as roupas",
      "duracao": 40,
      "resumo": "Vocabulário de roupas, plurais especiais e a pair of.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "rot-m7-p4",
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
          "id": "m7-p4-ex1",
          "titulo": "2.1 Escolha is ou are",
          "ref": "m7-s3/3.1",
          "items": [
            {
              "q": "These jeans (is / are) nice.",
              "opts": [
                "is",
                "are"
              ],
              "a": "are",
              "why": "jeans é plural → **are**."
            },
            {
              "q": "That dress (is / are) beautiful.",
              "opts": [
                "is",
                "are"
              ],
              "a": "is",
              "why": "dress é singular → **is**."
            },
            {
              "q": "My shoes (is / are) too small.",
              "opts": [
                "is",
                "are"
              ],
              "a": "are",
              "why": "shoes é plural → **are**."
            },
            {
              "q": "This T-shirt (is / are) blue.",
              "opts": [
                "is",
                "are"
              ],
              "a": "is",
              "why": "T-shirt é singular → **is**."
            },
            {
              "q": "Those pants (is / are) expensive.",
              "opts": [
                "is",
                "are"
              ],
              "a": "are",
              "why": "pants é plural → **are**."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m7-p4-ex2",
          "titulo": "2.2 Escreva em inglês",
          "ref": "m7-s3/3.1",
          "items": [
            {
              "q": "Uma calça jeans.",
              "a": [
                "A pair of jeans."
              ],
              "why": "Peça com duas partes: **a pair of**."
            },
            {
              "q": "Dois pares de sapatos.",
              "a": [
                "Two pairs of shoes."
              ],
              "why": "two **pairs of** shoes."
            },
            {
              "q": "Eu preciso de um casaco quente.",
              "a": [
                "I need a warm coat."
              ],
              "why": "need + a warm coat."
            },
            {
              "q": "Estas meias são novas.",
              "a": [
                "These socks are new."
              ],
              "why": "plural → are."
            },
            {
              "q": "Aquela saia é bonita.",
              "a": [
                "That skirt is nice.",
                "That skirt is beautiful."
              ],
              "why": "singular → is."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m7-p4-ex3",
          "titulo": "2.3 Escreva a palavra em inglês",
          "ref": "m7-s3/3.1",
          "items": [
            {
              "q": "camiseta → ___",
              "a": [
                "T-shirt"
              ],
              "why": "a T-shirt."
            },
            {
              "q": "camisa → ___",
              "a": [
                "shirt"
              ],
              "why": "a shirt."
            },
            {
              "q": "vestido → ___",
              "a": [
                "dress"
              ],
              "why": "a dress."
            },
            {
              "q": "saia → ___",
              "a": [
                "skirt"
              ],
              "why": "a skirt."
            },
            {
              "q": "jaqueta → ___",
              "a": [
                "jacket"
              ],
              "why": "a jacket."
            },
            {
              "q": "sapatos → ___",
              "a": [
                "shoes"
              ],
              "why": "shoes (plural)."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m7-p4-ex4",
          "titulo": "2.4 Corrija as frases",
          "ref": "m7-s3/3.1",
          "items": [
            {
              "q": "These jeans is nice.",
              "a": [
                "These jeans are nice."
              ],
              "why": "jeans é plural → **are**."
            },
            {
              "q": "The shoes is expensive.",
              "a": [
                "The shoes are expensive."
              ],
              "why": "shoes é plural → **are**."
            },
            {
              "q": "I need a jeans.",
              "a": [
                "I need a pair of jeans."
              ],
              "why": "Use **a pair of**."
            },
            {
              "q": "Those socks is new.",
              "a": [
                "Those socks are new."
              ],
              "why": "socks é plural → **are**."
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
              "I need a warm coat and a pair of jeans.",
              "Preciso de um casaco quente e de uma calça jeans."
            ],
            [
              "My old jacket is small, and my shoes are too old.",
              "Minha jaqueta velha é pequena e meus sapatos são velhos demais."
            ],
            [
              "These jeans are blue, and that T-shirt is white.",
              "Esta calça jeans é azul e aquela camiseta é branca."
            ],
            [
              "My wife likes dresses. She has two blue dresses and a pair of black shoes.",
              "Minha esposa gosta de vestidos. Ela tem dois vestidos azuis e um par de sapatos pretos."
            ],
            [
              "We bought two pairs of socks.",
              "Compramos dois pares de meias."
            ]
          ],
          "titulo": "Clothes for the cold"
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita: roupas",
          "frases": [
            [
              "These jeans are nice.",
              "Esta calça jeans é bonita."
            ],
            [
              "I need a warm coat.",
              "Preciso de um casaco quente."
            ],
            [
              "Two pairs of shoes.",
              "Dois pares de sapatos."
            ],
            [
              "That dress is beautiful.",
              "Aquele vestido é lindo."
            ],
            [
              "These socks are new.",
              "Estas meias são novas."
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
          "id": "m7-p4-ditado",
          "titulo": "4.1 Ouça e escreva (ditado)",
          "intro": "Clique em 🔊, ouça e escreva a frase. Use 🐢 para ouvir mais devagar. Contrações valem (I’m = I am).",
          "ref": "m7-s3/3.1",
          "items": [
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "These jeans are blue.",
              "a": [
                "These jeans are blue."
              ],
              "why": "jeans é plural → are."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "I need a pair of shoes.",
              "a": [
                "I need a pair of shoes."
              ],
              "why": "a pair of + plural."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "That skirt is nice.",
              "a": [
                "That skirt is nice."
              ],
              "why": "skirt é singular → is."
            }
          ]
        },
        {
          "t": "prod",
          "id": "prod-m7-p4",
          "prompt": "Escreva 5 frases sobre as suas roupas: o que você usa no trabalho, no fim de semana e no frio (use jeans, shoes, a pair of…)."
        }
      ],
      "revisao": [
        {
          "t": "bullets",
          "items": [
            "jeans, pants, shorts, glasses e shoes/socks pedem **verbo no plural** (are)",
            "Uma peça: **a pair of** jeans · duas: **two pairs of** shoes",
            "Roupas: T-shirt · shirt · dress · skirt · jacket · coat · shoes · socks"
          ]
        },
        {
          "t": "errors",
          "items": [
            [
              "These jeans is nice.",
              "These jeans are nice."
            ],
            [
              "I need a jeans.",
              "I need a pair of jeans."
            ]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        }
      ]
    },
    {
      "id": "m7-p5",
      "n": 5,
      "tipo": "pratica",
      "titulo": "Fixar a compra de roupas",
      "duracao": 40,
      "resumo": "one/ones, too, provar, perguntar o tamanho e decidir.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "rot-m7-p5",
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
          "id": "m7-p5-ex1",
          "titulo": "2.1 Complete com one ou ones",
          "ref": "m7-s3/3.2",
          "items": [
            {
              "q": "I like this ___. (a camisa azul)",
              "a": [
                "one"
              ],
              "why": "Uma coisa → **one**."
            },
            {
              "q": "I like these ___. (os sapatos azuis)",
              "a": [
                "ones"
              ],
              "why": "Várias coisas → **ones**."
            },
            {
              "q": "Do you have a bigger ___?",
              "a": [
                "one"
              ],
              "why": "Uma coisa → **one**."
            },
            {
              "q": "Those ___ are expensive. (os vermelhos)",
              "a": [
                "ones"
              ],
              "why": "Várias coisas → **ones**."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m7-p5-ex2",
          "titulo": "2.2 Too ou very?",
          "ref": "m7-s3/3.2",
          "items": [
            {
              "q": "It is (too / very) big for me. (grande demais)",
              "opts": [
                "too",
                "very"
              ],
              "a": "too",
              "why": "**too** = mais do que o necessário."
            },
            {
              "q": "These shoes are (too / very) nice. (muito bonitos)",
              "opts": [
                "too",
                "very"
              ],
              "a": "very",
              "why": "Elogio → **very**."
            },
            {
              "q": "They’re (too / very) small. I can’t wear them.",
              "opts": [
                "too",
                "very"
              ],
              "a": "too",
              "why": "Não servem → **too small**."
            },
            {
              "q": "This jacket is (too / very) expensive. (caro demais)",
              "opts": [
                "too",
                "very"
              ],
              "a": "too",
              "why": "Não posso pagar → **too expensive**."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m7-p5-ex3",
          "titulo": "2.3 O que você diz?",
          "ref": "m7-s3/3.2",
          "items": [
            {
              "q": "Para provar uma roupa:",
              "opts": [
                "Can I try it on?",
                "Can I take it?"
              ],
              "a": "Can I try it on?",
              "why": "Provar = **try on**."
            },
            {
              "q": "A camisa ficou grande demais:",
              "opts": [
                "It’s too big.",
                "I’ll take it."
              ],
              "a": "It’s too big.",
              "why": "**It’s too big.**"
            },
            {
              "q": "Você decide comprar:",
              "opts": [
                "I’ll take it.",
                "It’s too small."
              ],
              "a": "I’ll take it.",
              "why": "**I’ll take it.**"
            },
            {
              "q": "Para saber o tamanho:",
              "opts": [
                "What size do you wear?",
                "What is the date?"
              ],
              "a": "What size do you wear?",
              "why": "**What size…?**"
            },
            {
              "q": "Para saber o preço de uma calça:",
              "opts": [
                "How much are these?",
                "How many are these?"
              ],
              "a": "How much are these?",
              "why": "Preço → **How much**."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m7-p5-ex4",
          "titulo": "2.4 Escreva em inglês",
          "ref": "m7-s3/3.2",
          "items": [
            {
              "q": "Posso provar estes sapatos?",
              "a": [
                "Can I try these shoes on?",
                "Can I try these on?"
              ],
              "why": "try on = provar."
            },
            {
              "q": "Estes são grandes demais.",
              "a": [
                "These are too big."
              ],
              "why": "too big."
            },
            {
              "q": "Você tem um tamanho menor?",
              "a": [
                "Do you have a smaller size?"
              ],
              "why": "Do you have a smaller size?"
            },
            {
              "q": "Eu levo esta.",
              "a": [
                "I'll take this one.",
                "I will take this one.",
                "I'll take it."
              ],
              "why": "I’ll take it."
            },
            {
              "q": "Eu gosto daqueles azuis.",
              "a": [
                "I like those blue ones."
              ],
              "why": "those blue ones."
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
              "Hello! Can I help you?",
              "Olá! Posso ajudar?"
            ],
            [
              "B",
              "Yes, I like this jacket. Do you have a medium?",
              "Sim, gosto desta jaqueta. Vocês têm tamanho M?"
            ],
            [
              "A",
              "Yes. The fitting room is over there.",
              "Sim. O provador é logo ali."
            ],
            [
              "B",
              "It’s too big. Do you have a smaller size?",
              "Ficou grande demais. Vocês têm um tamanho menor?"
            ],
            [
              "A",
              "Yes, here you are.",
              "Sim, aqui está."
            ],
            [
              "B",
              "How much is it?",
              "Quanto custa?"
            ],
            [
              "A",
              "It’s fifty dollars.",
              "Custa cinquenta dólares."
            ],
            [
              "B",
              "Perfect. I’ll take it.",
              "Perfeito. Eu levo."
            ]
          ],
          "titulo": "EXEMPLO · Na loja de roupas"
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita: na loja",
          "frases": [
            [
              "Can I try it on?",
              "Posso provar?"
            ],
            [
              "It’s too big.",
              "Ficou grande demais."
            ],
            [
              "Do you have a medium?",
              "Vocês têm tamanho M?"
            ],
            [
              "How much are these?",
              "Quanto custam estes?"
            ],
            [
              "I’ll take it.",
              "Eu levo."
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
          "id": "m7-p5-ditado",
          "titulo": "4.1 Ouça e escreva (ditado)",
          "intro": "Clique em 🔊, ouça e escreva a frase. Use 🐢 para ouvir mais devagar. Contrações valem (I’m = I am).",
          "ref": "m7-s3/3.2",
          "items": [
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "Can I try these on?",
              "a": [
                "Can I try these on?"
              ],
              "why": "try on = provar."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "They’re too small.",
              "a": [
                "They're too small.",
                "They are too small."
              ],
              "why": "too small = pequeno demais."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "I’ll take these.",
              "a": [
                "I'll take these.",
                "I will take these."
              ],
              "why": "I’ll take = eu levo."
            }
          ]
        },
        {
          "t": "prod",
          "id": "prod-m7-p5",
          "prompt": "Escreva 5 frases sobre uma compra de roupa que você fez (no passado): o que comprou, o preço, se era grande ou pequeno demais e se levou."
        }
      ],
      "revisao": [
        {
          "t": "bullets",
          "items": [
            "**this one / that one** · **these ones / those ones** evitam repetir o nome",
            "**too** = demais (too big, too small, too expensive) · **very** = muito",
            "Na loja: Can I try it on? · What size do you wear? · It’s too big. · I’ll take it."
          ]
        },
        {
          "t": "errors",
          "items": [
            [
              "I like this blue.",
              "I like this blue one."
            ],
            [
              "It is much big.",
              "It is too big."
            ]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        }
      ]
    },
    {
      "id": "m7-p6",
      "n": 6,
      "tipo": "pratica",
      "titulo": "Revisão do módulo",
      "duracao": 40,
      "resumo": "Contáveis, pedidos educados e roupas: aquecimento para o mini-teste.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "rot-m7-p6",
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
          "id": "m7-p6-ex1",
          "titulo": "2.1 Escolha a forma correta",
          "ref": "m7-s1/3.2",
          "items": [
            {
              "q": "Do you have (some / any) milk?",
              "opts": [
                "some",
                "any"
              ],
              "a": "any",
              "why": "Pergunta → **any**."
            },
            {
              "q": "How (much / many) eggs do you want?",
              "opts": [
                "much",
                "many"
              ],
              "a": "many",
              "why": "eggs é contável → **many**."
            },
            {
              "q": "I’d (like / want) a salad, please.",
              "opts": [
                "like",
                "want"
              ],
              "a": "like",
              "why": "Pedido educado: **I’d like**."
            },
            {
              "q": "These jeans (is / are) too big.",
              "opts": [
                "is",
                "are"
              ],
              "a": "are",
              "why": "jeans é plural → **are**."
            },
            {
              "q": "I like this (one / ones).",
              "opts": [
                "one",
                "ones"
              ],
              "a": "one",
              "why": "Uma coisa → **one**."
            },
            {
              "q": "(Would / Do) you like some coffee?",
              "opts": [
                "Would",
                "Do"
              ],
              "a": "Would",
              "why": "Oferecer: **Would you like…?**"
            }
          ]
        },
        {
          "t": "ex",
          "id": "m7-p6-ex2",
          "titulo": "2.2 Escreva em inglês",
          "ref": "m7-s1/3.2",
          "items": [
            {
              "q": "Quanto leite temos?",
              "a": [
                "How much milk do we have?"
              ],
              "why": "milk é incontável → How much."
            },
            {
              "q": "Não temos pão.",
              "a": [
                "We don't have any bread.",
                "We do not have any bread."
              ],
              "why": "Negativa → any."
            },
            {
              "q": "Posso provar estas calças?",
              "a": [
                "Can I try these pants on?",
                "Can I try these on?",
                "Can I try these jeans on?"
              ],
              "why": "try on = provar."
            },
            {
              "q": "Eu gostaria de um café, por favor.",
              "a": [
                "I'd like a coffee, please.",
                "I would like a coffee, please."
              ],
              "why": "I’d like + coisa + please."
            },
            {
              "q": "Estes sapatos são caros demais.",
              "a": [
                "These shoes are too expensive."
              ],
              "why": "plural → are · too expensive."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m7-p6-ex3",
          "titulo": "2.3 Corrija as frases",
          "ref": "m7-s1/3.2",
          "items": [
            {
              "q": "How many money do you have?",
              "a": [
                "How much money do you have?"
              ],
              "why": "money é incontável → much."
            },
            {
              "q": "I don’t have some eggs.",
              "a": [
                "I don't have any eggs.",
                "I do not have any eggs."
              ],
              "why": "Negativa → any."
            },
            {
              "q": "These shoes is too small.",
              "a": [
                "These shoes are too small."
              ],
              "why": "shoes é plural → are."
            },
            {
              "q": "I like this blue.",
              "a": [
                "I like this blue one."
              ],
              "why": "Use **one** para não repetir o nome."
            },
            {
              "q": "The milk are cold.",
              "a": [
                "The milk is cold."
              ],
              "why": "Incontável → is."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m7-p6-ex4",
          "titulo": "2.4 Complete a frase",
          "ref": "m7-s1/3.2",
          "items": [
            {
              "q": "There isn’t ___ cheese.",
              "a": [
                "any"
              ],
              "why": "Negativa → any."
            },
            {
              "q": "I’d like ___ glass of water.",
              "a": [
                "a"
              ],
              "why": "glass começa com som de consoante → a."
            },
            {
              "q": "We have a lot ___ vegetables.",
              "a": [
                "of"
              ],
              "why": "a lot **of**."
            },
            {
              "q": "A ___ of jeans. (um par)",
              "a": [
                "pair"
              ],
              "why": "a **pair** of jeans."
            },
            {
              "q": "How ___ rice do you eat?",
              "a": [
                "much"
              ],
              "why": "rice é incontável → much."
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
              "On Saturday, my wife and I went shopping.",
              "No sábado, minha esposa e eu fizemos compras."
            ],
            [
              "We bought some rice, a lot of vegetables and two bottles of milk.",
              "Compramos arroz, muitos legumes e duas garrafas de leite."
            ],
            [
              "We didn’t buy any meat because we have chicken.",
              "Não compramos carne porque temos frango."
            ],
            [
              "Then, my wife tried on a dress, but it was too small.",
              "Depois, minha esposa provou um vestido, mas era pequeno demais."
            ],
            [
              "She liked that one, and she took it.",
              "Ela gostou daquele e levou."
            ],
            [
              "We were tired, so we had lunch at a restaurant.",
              "Estávamos cansados, então almoçamos em um restaurante."
            ]
          ],
          "titulo": "Saturday shopping"
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita: revisão",
          "frases": [
            [
              "Do you have any milk?",
              "Você tem leite?"
            ],
            [
              "I’d like a coffee, please.",
              "Eu gostaria de um café, por favor."
            ],
            [
              "These jeans are too big.",
              "Esta calça é grande demais."
            ],
            [
              "How much milk do we have?",
              "Quanto leite temos?"
            ],
            [
              "I’ll take this one.",
              "Eu levo este."
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
          "id": "m7-p6-ditado",
          "titulo": "4.1 Ouça e escreva (ditado)",
          "intro": "Clique em 🔊, ouça e escreva a frase. Use 🐢 para ouvir mais devagar. Contrações valem (I’m = I am).",
          "ref": "m7-s1/3.2",
          "items": [
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "We don’t have any bread.",
              "a": [
                "We don't have any bread.",
                "We do not have any bread."
              ],
              "why": "Negativa → any."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "Would you like some coffee?",
              "a": [
                "Would you like some coffee?"
              ],
              "why": "Would you like + some…?"
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "These shoes are too small.",
              "a": [
                "These shoes are too small."
              ],
              "why": "shoes é plural → are."
            }
          ]
        },
        {
          "t": "prod",
          "id": "prod-m7-p6",
          "prompt": "Escreva uma lista de compras de 6 itens e 4 frases: duas pedindo algo (I’d like…) e duas numa loja de roupas (Can I try…? It’s too…)."
        }
      ],
      "revisao": [
        {
          "t": "bullets",
          "items": [
            "a/an · some · any · much · many · a lot of · medidas (a glass of)",
            "I’d like… · Can I have…? · Would you like…?",
            "jeans/pants/shoes no plural · a pair of · this one / ones · too"
          ]
        },
        {
          "t": "tip",
          "s": "Esta é a última prática antes do mini-teste da Sessão 4. Refaça o Caderno de erros e releia as revisões das sessões 1, 2 e 3. Lugares de compra e formas de pagamento aparecem só na Sessão 4.",
          "title": "PULO DO GATO"
        }
      ]
    },
    {
      "id": "m7-s4",
      "n": 4,
      "titulo": "Consolidação e mini-teste",
      "duracao": 40,
      "resumo": "Revisão de comida, pedidos e compras; lugares de compra e pagamento; mini-teste.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "m7-s4-rot",
          "titulo": "40 MIN",
          "rows": [
            [8,"1. Cartões","Palavras 31 a 40 e revisões do dia.","etapa-1"],
            [7,"2. Revisão","Resumo das sessões agendadas e erros do Caderno.","etapa-2"],
            [12,"3. Conteúdo novo","Seções 3.1 a 3.2.","etapa-3"],
            [10,"4. Input","Ouvir e ler em voz alta; vídeo “Vídeo: Let’s Learn English – Nível 2, lições 9 a 12”.","etapa-4"],
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
          "id": "m7-s4-voc",
          "items": [
            [31,"a supermarket","a SU-per-már-ket","um supermercado"],
            [32,"a bakery","a BÊI-ke-ri","uma padaria"],
            [33,"a pharmacy","a FÁR-ma-si","uma farmácia"],
            [34,"a menu","a MÉ-niu","um cardápio"],
            [35,"a receipt","a ri-SÍT","um recibo / nota"],
            [36,"cash · credit card","KÉSH · KRÉ-dit KÁRD","dinheiro · cartão de crédito"],
            [37,"Can I pay by card?","KÉN ái PÊI bái KÁRD","Posso pagar com cartão?"],
            [38,"a shopping list","a SHÓ-ping LÍST","uma lista de compras"],
            [39,"a basket · a cart","a BÉS-kit · a KÁRT","uma cesta · um carrinho"],
            [40,"on sale","ón SÊIL","em promoção"]
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
            ["Contável / incontável","a/an · some/any · much/many","How much milk? How many eggs?"],
            ["Pedidos","I’d like… · Can I have…? · Would you like…?","I’d like a salad, please."],
            ["Roupas","jeans/pants plural · a pair of · too","These jeans are too big."],
            ["this one / ones","evita repetir o nome","I like these ones."]
          ],
          "firstCol": true
        },
        {"t":"h","n":"3.2","title":"LUGARES E PAGAMENTO"},
        {
          "t": "image",
          "src": "material/imagens/pagamento.svg",
          "alt": "Nota de compra e as duas formas de pagar: cash e card.",
          "legenda": "Perguntando o preço e como pagar."
        },
        {"t":"etapa","id":"etapa-4","n":4,"titulo":"Input","min":10,"desc":"Ouça, leia em voz alta e, se houver, assista ao vídeo indicado."},
        {"t":"h","n":"4.1","title":"OUVIR E LER"},
        {
          "t": "reading",
          "titulo": "LEITURA · At the supermarket",
          "boxed": true,
          "sents": [
            ["On Saturday I went to the supermarket with my shopping list.","No sábado fui ao supermercado com a minha lista de compras."],
            ["I bought some bread, a lot of vegetables and a bottle of milk.","Comprei pão, muitos legumes e uma garrafa de leite."],
            ["I didn’t buy any meat because it wasn’t on sale.","Não comprei carne porque não estava em promoção."],
            ["At the cashier, I paid by card and took the receipt.","No caixa, paguei com cartão e peguei o recibo."],
            ["“Would you like a bag?” asked the cashier. “Yes, please,” I said.","“Você gostaria de uma sacola?”, perguntou o caixa. “Sim, por favor”, eu disse."]
          ],
          "glossario": [["cashier","caixa"],["paid","pagou"],["asked","perguntou"]]
        },
        {"t":"h","n":"4.2","title":"VÍDEO"},
        {
          "t": "video",
          "id": "m7-s4-vid",
          "licoes": [
            {"titulo":"Level 2 · Lição 9: Pets Are Family, Too!","url":"https://learningenglish.voanews.com/a/4074883.html","embed":"https://learningenglish.voanews.com/embed/player/article/4074883.html"},
            {"titulo":"Level 2 · Lição 10: Visit to Peru","url":"https://learningenglish.voanews.com/a/4079037.html","embed":"https://learningenglish.voanews.com/embed/player/article/4079037.html"},
            {"titulo":"Level 2 · Lição 11: The Big Snow","url":"https://learningenglish.voanews.com/a/4102755.html","embed":"https://learningenglish.voanews.com/embed/player/article/4102755.html"},
            {"titulo":"Level 2 · Lição 12: Run! Bees!","url":"https://learningenglish.voanews.com/a/4139015.html","embed":"https://learningenglish.voanews.com/embed/player/article/4139015.html"}
          ],
          "titulo": "Vídeo: Let’s Learn English – Nível 2, lições 9 a 12",
          "passos": [
            "Escolha uma das lições abaixo (toque no título para assistir aqui mesmo) e assista sem legenda. Dê uma nota de 0 a 10 para o quanto entendeu.",
            "Assista de novo com legenda em inglês.",
            "Anote 3 frases de pedido ou compra e repita em voz alta."
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
          "id": "m7-s4-t1",
          "titulo": "A. Complete",
          "teste": true,
          "items": [
            {"q":"How ___ milk do you drink? (much/many)"},
            {"q":"How ___ eggs do we have? (much/many)"},
            {"q":"I don’t have ___ bread. (some/any)"},
            {"q":"I ___ like a coffee, please. (would)"},
            {"q":"These jeans ___ too big. (is/are)"},
            {"q":"I like this ___ . (a camisa) (one/ones)"}
          ]
        },
        {
          "t": "ex",
          "id": "m7-s4-t2",
          "titulo": "B. Traduza para o inglês",
          "teste": true,
          "items": [{"q":"Eu gostaria de uma salada, por favor."},{"q":"Você gostaria de um pouco de café?"},{"q":"Posso provar este casaco?"},{"q":"Não temos pão."}]
        },
        {
          "t": "ex",
          "id": "m7-s4-t3",
          "titulo": "C. Vocabulário: escreva em inglês",
          "teste": true,
          "items": [{"q":"arroz"},{"q":"frango"},{"q":"a conta"},{"q":"em promoção"},{"q":"padaria"}]
        },
        {"t":"h","n":"5.2","title":"PRODUÇÃO DO MÓDULO"},
        {"t":"prod","id":"m7-s4-prod","prompt":"Escreva uma lista de compras de 8 itens e 4 frases pedindo algo num restaurante ou numa loja."},
        {"t":"h","n":"5.3","title":"RELATÓRIO PARA A IA"},
        {"t":"report","titulo":"Enviar para a IA"}
      ],
      "revisao": [
        {
          "t": "table",
          "head": ["Tópico","Lembrete"],
          "rows": [
            ["much / many","much = incontável · many = contável"],
            ["some / any","some (+) · any (− ?)"],
            ["pedir","I’d like… please · Can I have…?"],
            ["loja","try on · too big · I’ll take it"]
          ],
          "firstCol": true
        },
        {"t":"bullets","items":["Pagamento: cash · credit card · Can I pay by card?"]}
      ]
    }
  ],
  "gloss": "bread=pão;rice=arroz;milk=leite;cheese=queijo;egg=ovo;apple=maçã;chicken=frango;meat=carne;vegetables=legumes;salad=salada;menu=cardápio;bill=conta;delicious=delicioso;ready=pronto;order=pedido;dessert=sobremesa;jeans=jeans;pants=calça;dress=vestido;skirt=saia;jacket=jaqueta;coat=casaco;shoes=sapatos;socks=meias;size=tamanho;medium=médio;smaller=menor;supermarket=supermercado;bakery=padaria;pharmacy=farmácia;receipt=recibo;cash=dinheiro;card=cartão;basket=cesta;cashier=caixa;bottle=garrafa;bag=sacola;anything=algo;else=mais;warm=quente;fitting=provador"
});
