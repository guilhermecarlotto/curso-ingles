// MATERIAL DO CURSO — módulo 6: Contando histórias
// Só conteúdo (sem código do site). Regras e formato em LEIA-ME.md. Salve em UTF-8.
(window.CURSO_MODULOS = window.CURSO_MODULOS || []).push({
  "id": "m6",
  "n": 6,
  "titulo": "Contando histórias",
  "descricao": "Verbos irregulares, conectores e datas para contar o que aconteceu, em ordem.",
  "fase": "Fase 2 · Base (A2)",
  "faseId": "f2",
  "icone": "📖",
  "cor": "green",
  "objetivos": [
    "Usar 20 verbos irregulares no passado",
    "Contar uma história em ordem (first, then, finally)",
    "Ligar ideias com and, but, because, so, or",
    "Dizer meses, ordinais e datas"
  ],
  "anki": {
    "deck": "Inglês::Módulo 06"
  },
  "sessoes": [
    {
      "id": "m6-s1",
      "n": 1,
      "titulo": "Verbos irregulares I",
      "duracao": 40,
      "resumo": "Os 10 irregulares mais usados: go, have, do, see, eat, buy, make, take, get, come.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "m6-s1-rot",
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
          "s": "Usar os **verbos irregulares** mais comuns no passado: **go → went**, **have → had**…"
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
          "id": "m6-s1-voc",
          "items": [
            [1,"I went to the beach.","ái UÉNT tu dhe BÍTCH","Eu fui à praia."],
            [2,"We had lunch together.","uí RÉD LÂNTCH tu-GUÉ-dher","Almoçamos juntos."],
            [3,"She did her homework.","shi DÍD rer RÔUM-uérk","Ela fez o dever de casa."],
            [4,"They saw a good movie.","dhêi SÓ a GÚD MÚ-vi","Eles viram um bom filme."],
            [5,"He ate pizza last night.","rí ÊIT PÍT-sa LÉST NÁIT","Ele comeu pizza ontem à noite."],
            [6,"I bought a new phone.","ái BÓT a NIÚ FÔUN","Comprei um celular novo."],
            [7,"We made a cake.","uí MÊID a KÊIK","Fizemos um bolo."],
            [8,"She took a taxi.","shi TÚK a TÉK-si","Ela pegou um táxi."],
            [9,"I got home at six.","ái GÓT RÔUM ét SÍKS","Cheguei em casa às seis."],
            [10,"They came by bus.","dhêi KÊIM bái BÂS","Eles vieram de ônibus."]
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
        {"t":"h","n":"3.1","title":"O QUE SÃO OS IRREGULARES"},
        {
          "t": "enpt",
          "id": "m6-s1-m6-1.1",
          "en": "Some verbs do not take {y:-ed} in the past. They have a {b:special form} that you must learn. The form is the same for all people: I went, she went, they went.",
          "pt": "Alguns verbos não ganham {y:-ed} no passado. Eles têm uma {b:forma especial} que é preciso aprender. A forma é a mesma para todas as pessoas: I went, she went, they went."
        },
        {
          "t": "table",
          "head": ["Presente","Passado","Exemplo"],
          "rows": [
            ["go","{y:went}","I went to the beach."],
            ["have","{y:had}","We had lunch at noon."],
            ["do","{y:did}","She did her homework."],
            ["see","{y:saw}","They saw a movie."],
            ["eat","{y:ate}","He ate pizza."],
            ["buy","{y:bought}","I bought a new phone."],
            ["make","{y:made}","We made a cake."],
            ["take","{y:took}","She took a taxi."],
            ["get","{y:got}","I got home at six."],
            ["come","{y:came}","They came by bus."]
          ],
          "firstCol": true,
          "pairs": [[0,1]]
        },
        {
          "t": "tip",
          "s": "Só a **afirmativa** usa a forma irregular. Na negativa e na pergunta, **did/didn’t + verbo base**: “I **went** to the park” → “I didn’t **go**” → “Did you **go**?”. Nunca “I didn’t went”.",
          "title": "PULO DO GATO"
        },
        {
          "t": "errors",
          "items": [
            ["I goed to the beach.","I went to the beach."],
            ["She eated pizza.","She ate pizza."],
            ["I didn’t went there.","I didn’t go there."],
            ["Did you bought it?","Did you buy it?"],
            ["We maked a cake.","We made a cake."]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        },
        {
          "t": "image",
          "src": "material/imagens/irregulares-1.svg",
          "alt": "Dez pares de verbos: go–went, have–had, do–did, see–saw, eat–ate, buy–bought, make–made, take–took, get–got, come–came.",
          "legenda": "Os dez primeiros irregulares."
        },
        {"t":"h","n":"3.2","title":"PERGUNTAS COM IRREGULARES"},
        {
          "t": "table",
          "head": ["Pergunta","Resposta"],
          "rows": [
            ["What did you do last weekend?","I went to the beach."],
            ["Where did you go?","I went to Rio."],
            ["What did you buy?","I bought a jacket."],
            ["Did you see John?","Yes, I did. / No, I didn’t."]
          ],
          "firstCol": true
        },
        {"t":"h","n":"3.3","title":"FRASES-CHAVE"},
        {
          "t": "ex",
          "id": "m6-s1-ex1",
          "titulo": "3.4 Escreva o passado",
          "items": [
            {"q":"go → ___","a":["went"],"why":"**go → went**."},
            {"q":"have → ___","a":["had"],"why":"**have → had**."},
            {"q":"see → ___","a":["saw"],"why":"**see → saw**."},
            {"q":"buy → ___","a":["bought"],"why":"**buy → bought**."},
            {"q":"take → ___","a":["took"],"why":"**take → took**."},
            {"q":"come → ___","a":["came"],"why":"**come → came**."}
          ],
          "ref": "3.1"
        },
        {
          "t": "ex",
          "id": "m6-s1-ex2",
          "titulo": "3.5 Escolha a forma certa",
          "items": [
            {"q":"I ___ to the beach yesterday.","opts":["go","went","goed"],"a":"went","why":"Afirmativa no passado: **went**."},
            {"q":"Did you ___ lunch?","opts":["have","had"],"a":"have","why":"Depois de **Did**: verbo base."},
            {"q":"She didn’t ___ the movie.","opts":["saw","see"],"a":"see","why":"Depois de **didn’t**: verbo base."},
            {"q":"We ___ a cake last night.","opts":["maked","made"],"a":"made","why":"**make → made**."}
          ],
          "ref": "3.1"
        },
        {
          "t": "ex",
          "id": "m6-s1-ex3",
          "titulo": "3.6 Escreva em inglês e ouça",
          "items": [
            {"q":"Eu comprei um carro.","a":["I bought a car."],"why":"**buy → bought**."},
            {"q":"Ela foi ao parque.","a":["She went to the park."],"why":"**go → went**."},
            {"q":"Você comeu pizza?","a":["Did you eat pizza?"],"why":"Pergunta: **Did** + you + **eat** (base)."},
            {"q":"Escreva a frase que você ouviu:","say":"We had lunch together.","a":["We had lunch together."],"why":"**have → had**."}
          ],
          "ref": "3.1"
        },
        {"t":"etapa","id":"etapa-4","n":4,"titulo":"Input","min":10,"desc":"Ouça, leia em voz alta e, se houver, assista ao vídeo indicado."},
        {"t":"h","n":"4.1","title":"OUVIR E LER"},
        {
          "t": "example",
          "titulo": "EXEMPLO · O que você fez?",
          "lines": [
            ["A","What did you do last weekend?","O que você fez no fim de semana passado?"],
            ["B","I went to the beach with my family.","Fui à praia com minha família."],
            ["A","Did you have a good time?","Vocês se divertiram?"],
            ["B","Yes, we did. We ate fish and I bought a hat.","Sim. Comemos peixe e eu comprei um chapéu."],
            ["A","How did you get there?","Como vocês chegaram lá?"],
            ["B","We took a bus.","Pegamos um ônibus."]
          ]
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita",
          "frases": [
            ["I went to the beach.","Eu fui à praia."],
            ["She bought a jacket.","Ela comprou uma jaqueta."],
            ["We ate pizza.","Comemos pizza."],
            ["Did you see him?","Você o viu?"]
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
        {"t":"prod","id":"m6-s1-prod","prompt":"Escreva 5 frases sobre o que você fez ontem usando go, have, eat, buy, take ou get no passado."}
      ],
      "revisao": [
        {
          "t": "table",
          "head": ["Base","Passado"],
          "rows": [["go","went"],["have","had"],["do","did"],["see","saw"],["eat","ate"],["buy","bought"],["make","made"],["take","took"],["get","got"],["come","came"]],
          "firstCol": true
        },
        {"t":"bullets","items":["Irregular só na **afirmativa**; negativa e pergunta usam o **verbo base**"]},
        {
          "t": "errors",
          "items": [["I goed to the beach.","I went to the beach."],["I didn’t went there.","I didn’t go there."]],
          "title": "ERROS COMUNS DE BRASILEIROS"
        }
      ]
    },
    {
      "id": "m6-p1",
      "n": 1,
      "tipo": "pratica",
      "titulo": "Fixar os irregulares I",
      "duracao": 40,
      "resumo": "go, have, do, see, eat, buy, make, take, get e come no passado.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "rot-m6-p1",
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
          "id": "m6-p1-ex1",
          "titulo": "2.1 Escreva o passado",
          "ref": "m6-s1/3.1",
          "items": [
            {
              "q": "go → ___",
              "a": [
                "went"
              ],
              "why": "go → **went**."
            },
            {
              "q": "have → ___",
              "a": [
                "had"
              ],
              "why": "have → **had**."
            },
            {
              "q": "see → ___",
              "a": [
                "saw"
              ],
              "why": "see → **saw**."
            },
            {
              "q": "eat → ___",
              "a": [
                "ate"
              ],
              "why": "eat → **ate**."
            },
            {
              "q": "buy → ___",
              "a": [
                "bought"
              ],
              "why": "buy → **bought**."
            },
            {
              "q": "make → ___",
              "a": [
                "made"
              ],
              "why": "make → **made**."
            },
            {
              "q": "take → ___",
              "a": [
                "took"
              ],
              "why": "take → **took**."
            },
            {
              "q": "come → ___",
              "a": [
                "came"
              ],
              "why": "come → **came**."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m6-p1-ex2",
          "titulo": "2.2 Complete no passado",
          "ref": "m6-s1/3.1",
          "items": [
            {
              "q": "Yesterday I ___ (go) to the beach.",
              "a": [
                "went"
              ],
              "why": "go → went."
            },
            {
              "q": "We ___ (have) lunch together.",
              "a": [
                "had"
              ],
              "why": "have → had."
            },
            {
              "q": "She ___ (buy) a new phone.",
              "a": [
                "bought"
              ],
              "why": "buy → bought."
            },
            {
              "q": "They ___ (see) a good movie.",
              "a": [
                "saw"
              ],
              "why": "see → saw."
            },
            {
              "q": "He ___ (eat) pizza last night.",
              "a": [
                "ate"
              ],
              "why": "eat → ate."
            },
            {
              "q": "I ___ (get) home at six.",
              "a": [
                "got"
              ],
              "why": "get → got."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m6-p1-ex3",
          "titulo": "2.3 Negativa e pergunta",
          "ref": "m6-s1/3.1",
          "items": [
            {
              "q": "I went to the beach.",
              "sub": [
                "Negativa",
                "Pergunta"
              ],
              "a": [
                [
                  "I didn't go to the beach.",
                  "I did not go to the beach."
                ],
                [
                  "Did you go to the beach?"
                ]
              ],
              "why": "Com didn’t/did, verbo básico: **go**."
            },
            {
              "q": "She bought a phone.",
              "sub": [
                "Negativa",
                "Pergunta"
              ],
              "a": [
                [
                  "She didn't buy a phone.",
                  "She did not buy a phone."
                ],
                [
                  "Did she buy a phone?"
                ]
              ],
              "why": "Com didn’t/did, verbo básico: **buy**."
            },
            {
              "q": "They saw a movie.",
              "sub": [
                "Negativa",
                "Pergunta"
              ],
              "a": [
                [
                  "They didn't see a movie.",
                  "They did not see a movie."
                ],
                [
                  "Did they see a movie?"
                ]
              ],
              "why": "Com didn’t/did, verbo básico: **see**."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m6-p1-ex4",
          "titulo": "2.4 Corrija as frases",
          "ref": "m6-s1/3.1",
          "items": [
            {
              "q": "I goed to the beach.",
              "a": [
                "I went to the beach."
              ],
              "why": "go é irregular: **went**."
            },
            {
              "q": "She eated pizza.",
              "a": [
                "She ate pizza."
              ],
              "why": "eat é irregular: **ate**."
            },
            {
              "q": "I didn’t went there.",
              "a": [
                "I didn't go there.",
                "I did not go there."
              ],
              "why": "Com didn’t, verbo básico: **go**."
            },
            {
              "q": "Did you bought it?",
              "a": [
                "Did you buy it?"
              ],
              "why": "Com did, verbo básico: **buy**."
            },
            {
              "q": "We maked a cake.",
              "a": [
                "We made a cake."
              ],
              "why": "make é irregular: **made**."
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
              "Last Saturday, my family and I went to the beach.",
              "No sábado passado, minha família e eu fomos à praia."
            ],
            [
              "We took a bus.",
              "Pegamos um ônibus."
            ],
            [
              "We had lunch together, and we ate fish.",
              "Almoçamos juntos e comemos peixe."
            ],
            [
              "I bought a hat for my son.",
              "Comprei um chapéu para meu filho."
            ],
            [
              "My wife made a cake, and we saw many people at the beach.",
              "Minha esposa fez um bolo e vimos muita gente na praia."
            ],
            [
              "We got home at night.",
              "Chegamos em casa à noite."
            ]
          ],
          "titulo": "A day at the beach"
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita: irregulares I",
          "frases": [
            [
              "I went to the beach.",
              "Eu fui à praia."
            ],
            [
              "We had lunch together.",
              "Almoçamos juntos."
            ],
            [
              "She bought a new phone.",
              "Ela comprou um celular novo."
            ],
            [
              "They saw a good movie.",
              "Eles viram um bom filme."
            ],
            [
              "Did you eat pizza?",
              "Você comeu pizza?"
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
          "id": "m6-p1-ditado",
          "titulo": "4.1 Ouça e escreva (ditado)",
          "intro": "Clique em 🔊, ouça e escreva a frase. Use 🐢 para ouvir mais devagar. Contrações valem (I’m = I am).",
          "ref": "m6-s1/3.1",
          "items": [
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "I went to the beach.",
              "a": [
                "I went to the beach."
              ],
              "why": "go → went."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "Did you buy a car?",
              "a": [
                "Did you buy a car?"
              ],
              "why": "Did + you + verbo básico (buy)."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "She didn’t go to work.",
              "a": [
                "She didn't go to work.",
                "She did not go to work."
              ],
              "why": "didn’t + verbo básico (go)."
            }
          ]
        },
        {
          "t": "prod",
          "id": "prod-m6-p1",
          "prompt": "Escreva 5 frases sobre o que você fez ontem usando go, have, eat, buy, take ou get no passado."
        }
      ],
      "revisao": [
        {
          "t": "bullets",
          "items": [
            "Irregulares I: go → went · have → had · do → did · see → saw · eat → ate · buy → bought · make → made · take → took · get → got · come → came",
            "Só a afirmativa usa a forma irregular; na negativa e na pergunta: **did/didn’t + verbo básico**"
          ]
        },
        {
          "t": "errors",
          "items": [
            [
              "I goed to the beach.",
              "I went to the beach."
            ],
            [
              "I didn’t went there.",
              "I didn’t go there."
            ]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        }
      ]
    },
    {
      "id": "m6-s2",
      "n": 2,
      "titulo": "Verbos irregulares II",
      "duracao": 40,
      "resumo": "Mais 10 irregulares: give, say, write, read, meet, sleep, drink, leave, speak, know.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "m6-s2-rot",
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
          "s": "Aprender mais **10 verbos irregulares** e usá-los em perguntas e respostas sobre o passado."
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
          "id": "m6-s2-voc",
          "items": [
            [11,"He gave me a book.","rí GÊIV mi a BÚK","Ele me deu um livro."],
            [12,"She said hello.","shi SÉD rê-LÔU","Ela disse olá."],
            [13,"I wrote an email.","ái RÔUT an Í-mêil","Eu escrevi um e-mail."],
            [14,"We read the news.","uí RÉD dhe NIÚZ","Nós lemos as notícias."],
            [15,"I met Ana yesterday.","ái MÉT Á-na IÉS-ter-dêi","Conheci/encontrei a Ana ontem."],
            [16,"They slept well.","dhêi SLÉPT UÉL","Eles dormiram bem."],
            [17,"He drank water.","rí DRÊNK UÓ-ter","Ele bebeu água."],
            [18,"She left at five.","shi LÉFT ét FÁIV","Ela saiu às cinco."],
            [19,"I spoke to Tom.","ái SPÔUK tu TÓM","Falei com o Tom."],
            [20,"We knew the answer.","uí NIÚ dhi ÉN-ser","Nós sabíamos a resposta."]
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
        {"t":"h","n":"3.1","title":"MAIS DEZ IRREGULARES"},
        {
          "t": "table",
          "head": ["Presente","Passado","Exemplo"],
          "rows": [
            ["give","{y:gave}","He gave me a book."],
            ["say","{y:said}","She said hello."],
            ["write","{y:wrote}","I wrote an email."],
            ["read","{y:read}","We read the news."],
            ["meet","{y:met}","I met Ana yesterday."],
            ["sleep","{y:slept}","They slept well."],
            ["drink","{y:drank}","He drank water."],
            ["leave","{y:left}","She left at five."],
            ["speak","{y:spoke}","I spoke to Tom."],
            ["know","{y:knew}","We knew the answer."]
          ],
          "firstCol": true,
          "pairs": [[0,1]]
        },
        {
          "t": "tip",
          "s": "**read** se escreve igual no passado, mas se **fala** diferente: presente = **RÍD** (“rid”), passado = **RÉD** (“red”). E **said** = SÉD, não “sêid”.",
          "title": "PULO DO GATO"
        },
        {
          "t": "image",
          "src": "material/imagens/irregulares-2.svg",
          "alt": "Dez pares de verbos: give–gave, say–said, write–wrote, read–read, meet–met, sleep–slept, drink–drank, leave–left, speak–spoke, know–knew.",
          "legenda": "Mais dez irregulares."
        },
        {"t":"h","n":"3.2","title":"AFIRMATIVA, NEGATIVA E PERGUNTA"},
        {
          "t": "table",
          "head": ["Tipo","Exemplo"],
          "rows": [
            ["+","I slept well. · She wrote an email."],
            ["−","I didn’t sleep well. · She didn’t write an email."],
            ["?","Did you sleep well? · What did she write?"],
            ["Resposta","Yes, I did. / No, I didn’t. · She wrote a report."]
          ],
          "firstCol": true
        },
        {
          "t": "errors",
          "items": [
            ["I writed an email.","I wrote an email."],
            ["She drinked coffee.","She drank coffee."],
            ["Did you spoke to him?","Did you speak to him?"],
            ["He didn’t knew.","He didn’t know."],
            ["She say hello yesterday.","She said hello yesterday."]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        },
        {"t":"h","n":"3.3","title":"FRASES-CHAVE"},
        {
          "t": "ex",
          "id": "m6-s2-ex1",
          "titulo": "3.4 Escreva o passado",
          "items": [
            {"q":"write → ___","a":["wrote"],"why":"**write → wrote**."},
            {"q":"drink → ___","a":["drank"],"why":"**drink → drank**."},
            {"q":"meet → ___","a":["met"],"why":"**meet → met**."},
            {"q":"sleep → ___","a":["slept"],"why":"**sleep → slept**."},
            {"q":"leave → ___","a":["left"],"why":"**leave → left**."},
            {"q":"speak → ___","a":["spoke"],"why":"**speak → spoke**."}
          ],
          "ref": "3.1"
        },
        {
          "t": "ex",
          "id": "m6-s2-ex2",
          "titulo": "3.5 Escolha a forma certa",
          "items": [
            {"q":"She ___ me a gift.","opts":["gave","gived"],"a":"gave","why":"**give → gave**."},
            {"q":"I didn’t ___ well.","opts":["slept","sleep"],"a":"sleep","why":"Depois de **didn’t**: verbo base."},
            {"q":"Did you ___ to him?","opts":["spoke","speak"],"a":"speak","why":"Depois de **Did**: verbo base."},
            {"q":"Em “I read it yesterday”, “read” se pronuncia…","opts":["RÍD","RÉD"],"a":"RÉD","why":"No passado, **read** soa como “red” (RÉD)."}
          ],
          "ref": "3.2"
        },
        {
          "t": "ex",
          "id": "m6-s2-ex3",
          "titulo": "3.6 Escreva em inglês e ouça",
          "items": [
            {"q":"Eu escrevi um e-mail.","a":["I wrote an email.","I wrote an e-mail."],"why":"**write → wrote**."},
            {"q":"Ela não dormiu bem.","a":["She didn’t sleep well.","She did not sleep well."],"why":"Negativa: **didn’t** + **sleep** (base)."},
            {"q":"O que você bebeu?","a":["What did you drink?"],"why":"Wh- + did + you + **drink** (base)."},
            {"q":"Escreva a frase que você ouviu:","say":"I met Ana yesterday.","a":["I met Ana yesterday."],"why":"**meet → met**."}
          ],
          "ref": "3.2"
        },
        {"t":"etapa","id":"etapa-4","n":4,"titulo":"Input","min":10,"desc":"Ouça, leia em voz alta e, se houver, assista ao vídeo indicado."},
        {"t":"h","n":"4.1","title":"OUVIR E LER"},
        {
          "t": "reading",
          "titulo": "LEITURA · A great trip",
          "boxed": true,
          "sents": [
            ["Last summer I went to Florianópolis with two friends.","No verão passado fui a Florianópolis com dois amigos."],
            ["We left on Friday and got there at night.","Saímos na sexta e chegamos à noite."],
            ["We slept in a small hotel near the beach.","Dormimos em um hotelzinho perto da praia."],
            ["I met a nice woman at the restaurant. She spoke English with me.","Conheci uma mulher simpática no restaurante. Ela falou inglês comigo."],
            ["I bought a gift for my mother and took many photos.","Comprei um presente para minha mãe e tirei muitas fotos."]
          ],
          "glossario": [["summer","verão"],["hotel","hotel"],["gift","presente"],["photo","foto"]]
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita",
          "frases": [
            ["I wrote an email.","Escrevi um e-mail."],
            ["She drank water.","Ela bebeu água."],
            ["We met at six.","Nos encontramos às seis."],
            ["They left early.","Eles saíram cedo."]
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
        {"t":"prod","id":"m6-s2-prod","prompt":"Escreva 5 frases sobre o que você leu, bebeu, escreveu e disse ontem ou na semana passada."}
      ],
      "revisao": [
        {
          "t": "table",
          "head": ["Base","Passado"],
          "rows": [
            ["give","gave"],
            ["say","said"],
            ["write","wrote"],
            ["read","read (RÉD)"],
            ["meet","met"],
            ["sleep","slept"],
            ["drink","drank"],
            ["leave","left"],
            ["speak","spoke"],
            ["know","knew"]
          ],
          "firstCol": true
        },
        {"t":"bullets","items":["Afirmativa: forma irregular · negativa/pergunta: **did + base**"]},
        {"t":"errors","items":[["I writed an email.","I wrote an email."],["Did you spoke?","Did you speak?"]],"title":"ERROS COMUNS DE BRASILEIROS"}
      ]
    },
    {
      "id": "m6-p2",
      "n": 2,
      "tipo": "pratica",
      "titulo": "Fixar os irregulares II",
      "duracao": 40,
      "resumo": "give, say, write, read, meet, sleep, drink, leave, speak e know no passado.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "rot-m6-p2",
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
          "id": "m6-p2-ex1",
          "titulo": "2.1 Escreva o passado",
          "ref": "m6-s2/3.1",
          "items": [
            {
              "q": "give → ___",
              "a": [
                "gave"
              ],
              "why": "give → **gave**."
            },
            {
              "q": "write → ___",
              "a": [
                "wrote"
              ],
              "why": "write → **wrote**."
            },
            {
              "q": "meet → ___",
              "a": [
                "met"
              ],
              "why": "meet → **met**."
            },
            {
              "q": "sleep → ___",
              "a": [
                "slept"
              ],
              "why": "sleep → **slept**."
            },
            {
              "q": "drink → ___",
              "a": [
                "drank"
              ],
              "why": "drink → **drank**."
            },
            {
              "q": "leave → ___",
              "a": [
                "left"
              ],
              "why": "leave → **left**."
            },
            {
              "q": "speak → ___",
              "a": [
                "spoke"
              ],
              "why": "speak → **spoke**."
            },
            {
              "q": "know → ___",
              "a": [
                "knew"
              ],
              "why": "know → **knew**."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m6-p2-ex2",
          "titulo": "2.2 Complete no passado",
          "ref": "m6-s2/3.1",
          "items": [
            {
              "q": "He ___ (give) me a book.",
              "a": [
                "gave"
              ],
              "why": "give → gave."
            },
            {
              "q": "I ___ (write) an email yesterday.",
              "a": [
                "wrote"
              ],
              "why": "write → wrote."
            },
            {
              "q": "She ___ (meet) Ana at the restaurant.",
              "a": [
                "met"
              ],
              "why": "meet → met."
            },
            {
              "q": "They ___ (sleep) well.",
              "a": [
                "slept"
              ],
              "why": "sleep → slept."
            },
            {
              "q": "We ___ (leave) at five.",
              "a": [
                "left"
              ],
              "why": "leave → left."
            },
            {
              "q": "I ___ (speak) to Tom.",
              "a": [
                "spoke"
              ],
              "why": "speak → spoke."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m6-p2-ex3",
          "titulo": "2.3 Escolha a forma certa",
          "ref": "m6-s2/3.1",
          "items": [
            {
              "q": "She (drinked / drank) coffee.",
              "opts": [
                "drinked",
                "drank"
              ],
              "a": "drank",
              "why": "drink → **drank**."
            },
            {
              "q": "I (writed / wrote) an email.",
              "opts": [
                "writed",
                "wrote"
              ],
              "a": "wrote",
              "why": "write → **wrote**."
            },
            {
              "q": "We (knowed / knew) the answer.",
              "opts": [
                "knowed",
                "knew"
              ],
              "a": "knew",
              "why": "know → **knew**."
            },
            {
              "q": "He (gave / gived) me a gift.",
              "opts": [
                "gave",
                "gived"
              ],
              "a": "gave",
              "why": "give → **gave**."
            },
            {
              "q": "They (sleeped / slept) well.",
              "opts": [
                "sleeped",
                "slept"
              ],
              "a": "slept",
              "why": "sleep → **slept**."
            },
            {
              "q": "O passado de read se fala:",
              "opts": [
                "RÍD",
                "RÉD"
              ],
              "a": "RÉD",
              "why": "Escreve igual, mas no passado se fala **RÉD**."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m6-p2-ex4",
          "titulo": "2.4 Corrija as frases",
          "ref": "m6-s2/3.2",
          "items": [
            {
              "q": "Did you spoke to him?",
              "a": [
                "Did you speak to him?"
              ],
              "why": "Com did, verbo básico."
            },
            {
              "q": "He didn’t knew.",
              "a": [
                "He didn't know.",
                "He did not know."
              ],
              "why": "Com didn’t, verbo básico."
            },
            {
              "q": "She say hello yesterday.",
              "a": [
                "She said hello yesterday."
              ],
              "why": "Ontem → passado: **said**."
            },
            {
              "q": "I didn’t wrote the email.",
              "a": [
                "I didn't write the email.",
                "I didn't write the e-mail.",
                "I did not write the email."
              ],
              "why": "Com didn’t, verbo básico."
            },
            {
              "q": "What did she wrote?",
              "a": [
                "What did she write?"
              ],
              "why": "Com did, verbo básico."
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
              "Last Friday, I met my friend Pete at the restaurant.",
              "Na sexta passada, encontrei meu amigo Pete no restaurante."
            ],
            [
              "We drank coffee and spoke for an hour.",
              "Tomamos café e conversamos por uma hora."
            ],
            [
              "He gave me a book, and I read it at night.",
              "Ele me deu um livro e eu o li à noite."
            ],
            [
              "I wrote an email to my sister.",
              "Escrevi um e-mail para minha irmã."
            ],
            [
              "I slept well, and I left home late on Saturday.",
              "Dormi bem e saí de casa tarde no sábado."
            ],
            [
              "She said hello, and I said hello too.",
              "Ela disse olá, e eu também disse olá."
            ]
          ],
          "titulo": "Coffee with Pete"
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita: irregulares II",
          "frases": [
            [
              "He gave me a book.",
              "Ele me deu um livro."
            ],
            [
              "I wrote an email.",
              "Eu escrevi um e-mail."
            ],
            [
              "She met Ana yesterday.",
              "Ela encontrou a Ana ontem."
            ],
            [
              "They slept well.",
              "Eles dormiram bem."
            ],
            [
              "I spoke to Tom.",
              "Falei com o Tom."
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
          "id": "m6-p2-ditado",
          "titulo": "4.1 Ouça e escreva (ditado)",
          "intro": "Clique em 🔊, ouça e escreva a frase. Use 🐢 para ouvir mais devagar. Contrações valem (I’m = I am).",
          "ref": "m6-s2/3.1",
          "items": [
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "He gave me a gift.",
              "a": [
                "He gave me a gift."
              ],
              "why": "give → gave."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "I wrote an email.",
              "a": [
                "I wrote an email.",
                "I wrote an e-mail."
              ],
              "why": "write → wrote."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "We didn’t sleep well.",
              "a": [
                "We didn't sleep well.",
                "We did not sleep well."
              ],
              "why": "didn’t + verbo básico (sleep)."
            }
          ]
        },
        {
          "t": "prod",
          "id": "prod-m6-p2",
          "prompt": "Escreva 5 frases sobre um encontro com um amigo: onde vocês se encontraram (met), o que beberam (drank), o que disseram (said/spoke) e quando saíram (left)."
        }
      ],
      "revisao": [
        {
          "t": "bullets",
          "items": [
            "Irregulares II: give → gave · say → said · write → wrote · read → read (fala RÉD) · meet → met · sleep → slept · drink → drank · leave → left · speak → spoke · know → knew",
            "Negativa e pergunta: **did/didn’t + verbo básico** (I didn’t write · Did you speak?)"
          ]
        },
        {
          "t": "errors",
          "items": [
            [
              "I writed an email.",
              "I wrote an email."
            ],
            [
              "He didn’t knew.",
              "He didn’t know."
            ]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        }
      ]
    },
    {
      "id": "m6-p3",
      "n": 3,
      "tipo": "pratica",
      "titulo": "Fixar os irregulares em frases",
      "duracao": 40,
      "resumo": "Afirmativa, negativa, pergunta e perguntas com Wh- usando irregulares.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "rot-m6-p3",
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
          "id": "m6-p3-ex1",
          "titulo": "2.1 Escolha a forma certa",
          "ref": "m6-s1/3.1",
          "items": [
            {
              "q": "I (went / go) to the beach yesterday.",
              "opts": [
                "went",
                "go"
              ],
              "a": "went",
              "why": "Ontem → passado: **went**."
            },
            {
              "q": "Did you (have / had) lunch?",
              "opts": [
                "have",
                "had"
              ],
              "a": "have",
              "why": "Com did, verbo básico."
            },
            {
              "q": "She didn’t (see / saw) the movie.",
              "opts": [
                "see",
                "saw"
              ],
              "a": "see",
              "why": "Com didn’t, verbo básico."
            },
            {
              "q": "We (ate / eat) pizza last night.",
              "opts": [
                "ate",
                "eat"
              ],
              "a": "ate",
              "why": "Ontem à noite → passado: **ate**."
            },
            {
              "q": "Did he (give / gave) you a book?",
              "opts": [
                "give",
                "gave"
              ],
              "a": "give",
              "why": "Com did, verbo básico."
            },
            {
              "q": "They didn’t (leave / left) early.",
              "opts": [
                "leave",
                "left"
              ],
              "a": "leave",
              "why": "Com didn’t, verbo básico."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m6-p3-ex2",
          "titulo": "2.2 Faça a pergunta",
          "ref": "m6-s1/3.2",
          "items": [
            {
              "q": "I went to Rio. (Where…?)",
              "a": [
                "Where did you go?"
              ],
              "why": "Where + did + you + go?"
            },
            {
              "q": "I bought a jacket. (What…?)",
              "a": [
                "What did you buy?"
              ],
              "why": "What + did + you + buy?"
            },
            {
              "q": "She met Ana. (Who…?)",
              "a": [
                "Who did she meet?"
              ],
              "why": "Who + did + she + meet?"
            },
            {
              "q": "They left at five. (When…?)",
              "a": [
                "When did they leave?"
              ],
              "why": "When + did + they + leave?"
            },
            {
              "q": "He wrote an email. (What…?)",
              "a": [
                "What did he write?"
              ],
              "why": "What + did + he + write?"
            }
          ]
        },
        {
          "t": "ex",
          "id": "m6-p3-ex3",
          "titulo": "2.3 Escreva em inglês",
          "ref": "m6-s1/3.1",
          "items": [
            {
              "q": "Nós fizemos um bolo.",
              "a": [
                "We made a cake."
              ],
              "why": "make → made."
            },
            {
              "q": "Ele não bebeu água.",
              "a": [
                "He didn't drink water.",
                "He did not drink water."
              ],
              "why": "didn’t + drink."
            },
            {
              "q": "Você falou com o Tom?",
              "a": [
                "Did you speak to Tom?"
              ],
              "why": "Did + you + speak?"
            },
            {
              "q": "Eles viram um filme bom.",
              "a": [
                "They saw a good movie."
              ],
              "why": "see → saw."
            },
            {
              "q": "Eu não escrevi o e-mail.",
              "a": [
                "I didn't write the email.",
                "I didn't write the e-mail.",
                "I did not write the email."
              ],
              "why": "didn’t + write."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m6-p3-ex4",
          "titulo": "2.4 Passe para o passado",
          "ref": "m6-s2/3.1",
          "items": [
            {
              "q": "I go to work by bus.",
              "a": [
                "I went to work by bus."
              ],
              "why": "go → went."
            },
            {
              "q": "She eats pizza.",
              "a": [
                "She ate pizza."
              ],
              "why": "eat → ate."
            },
            {
              "q": "We make dinner.",
              "a": [
                "We made dinner."
              ],
              "why": "make → made."
            },
            {
              "q": "They drink coffee.",
              "a": [
                "They drank coffee."
              ],
              "why": "drink → drank."
            },
            {
              "q": "He writes an email.",
              "a": [
                "He wrote an email."
              ],
              "why": "write → wrote."
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
              "Where did you go on Sunday?",
              "Aonde você foi no domingo?"
            ],
            [
              "B",
              "I went to my parents’ house.",
              "Fui à casa dos meus pais."
            ],
            [
              "A",
              "What did you eat?",
              "O que você comeu?"
            ],
            [
              "B",
              "We ate pizza, and my mother made a cake.",
              "Comemos pizza e minha mãe fez um bolo."
            ],
            [
              "A",
              "Did you see your brother?",
              "Você viu seu irmão?"
            ],
            [
              "B",
              "Yes, I did. He gave me a book.",
              "Sim. Ele me deu um livro."
            ],
            [
              "A",
              "How did you get home?",
              "Como você chegou em casa?"
            ],
            [
              "B",
              "I took a taxi.",
              "Peguei um táxi."
            ]
          ],
          "titulo": "EXEMPLO · No domingo"
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita: perguntas no passado",
          "frases": [
            [
              "Where did you go?",
              "Aonde você foi?"
            ],
            [
              "I went to Rio.",
              "Fui ao Rio."
            ],
            [
              "What did you buy?",
              "O que você comprou?"
            ],
            [
              "I bought a jacket.",
              "Comprei uma jaqueta."
            ],
            [
              "Did you see John?",
              "Você viu o John?"
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
          "id": "m6-p3-ditado",
          "titulo": "4.1 Ouça e escreva (ditado)",
          "intro": "Clique em 🔊, ouça e escreva a frase. Use 🐢 para ouvir mais devagar. Contrações valem (I’m = I am).",
          "ref": "m6-s1/3.1",
          "items": [
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "Where did you go?",
              "a": [
                "Where did you go?"
              ],
              "why": "Where + did + you + verbo básico."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "She didn’t eat pizza.",
              "a": [
                "She didn't eat pizza.",
                "She did not eat pizza."
              ],
              "why": "didn’t + verbo básico (eat)."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "They made a cake.",
              "a": [
                "They made a cake."
              ],
              "why": "make → made."
            }
          ]
        },
        {
          "t": "prod",
          "id": "prod-m6-p3",
          "prompt": "Escreva 6 frases sobre o seu último fim de semana usando 4 verbos irregulares, 1 negativa e 1 pergunta para um amigo."
        }
      ],
      "revisao": [
        {
          "t": "bullets",
          "items": [
            "Afirmativa: forma irregular (I went) · negativa: didn’t + básico (I didn’t go) · pergunta: Did + sujeito + básico? (Did you go?)",
            "Wh-: Where did you go? · What did you buy? · Who did she meet? · When did they leave?"
          ]
        },
        {
          "t": "errors",
          "items": [
            [
              "Did you bought it?",
              "Did you buy it?"
            ],
            [
              "What did she wrote?",
              "What did she write?"
            ]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        }
      ]
    },
    {
      "id": "m6-s3",
      "n": 3,
      "titulo": "Contar uma história: conectores",
      "duracao": 40,
      "resumo": "first, then, after that, finally; and, but, because, so, or.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "m6-s3-rot",
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
          "s": "Contar uma **história em ordem**, ligando frases com **first, then, after that, finally** e **and, but, because, so**."
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
          "id": "m6-s3-voc",
          "items": [
            [21,"First, I woke up.","FÉRST ái UÔUK ÂP","Primeiro, eu acordei."],
            [22,"Then, I had breakfast.","DHÉN ái RÉD BRÉK-fest","Depois, tomei café da manhã."],
            [23,"After that, I went to work.","ÉF-ter DHÉT ái UÉNT tu UÉRK","Depois disso, fui trabalhar."],
            [24,"Later, I called my mother.","LÊI-ter ái KÓLD mái MÂ-dher","Mais tarde, liguei para minha mãe."],
            [25,"Finally, I went to bed.","FÁI-na-li ái UÉNT tu BÉD","Por fim, fui dormir."],
            [26,"I was tired, but I studied.","ái uóz TÁI-erd bât ái STÂ-did","Eu estava cansado, mas estudei."],
            [27,"I stayed home because it rained.","ái STÊID RÔUM bi-KÓZ it RÊIND","Fiquei em casa porque choveu."],
            [28,"It rained, so I stayed home.","it RÊIND sôu ái STÊID RÔUM","Choveu, então fiquei em casa."],
            [29,"tea or coffee","TÍ ór KÓ-fi","chá ou café"],
            [30,"a long day","a LÓNG DÊI","um dia longo"]
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
        {"t":"h","n":"3.1","title":"ORDEM DOS FATOS"},
        {
          "t": "enpt",
          "id": "m6-s3-m6-3.1",
          "en": "To tell a story, use words that show the {y:order}: {y:first}, {y:then}, {y:after that}, {y:finally}. Put a comma after them: First, I woke up. Then, I had breakfast.",
          "pt": "Para contar uma história, use palavras que mostram a {y:ordem}: {y:first}, {y:then}, {y:after that}, {y:finally}. Coloque vírgula depois: First, I woke up. Then, I had breakfast."
        },
        {
          "t": "table",
          "head": ["Palavra","Quer dizer","Exemplo"],
          "rows": [
            ["first","primeiro","First, I took a shower."],
            ["then","depois / em seguida","Then, I had breakfast."],
            ["after that","depois disso","After that, I went to work."],
            ["later","mais tarde","Later, I called my mother."],
            ["finally","finalmente / por fim","Finally, I went to bed."]
          ],
          "firstCol": true
        },
        {"t":"h","n":"3.2","title":"AND, BUT, BECAUSE, SO, OR"},
        {
          "t": "table",
          "head": ["Conector","Função","Exemplo"],
          "rows": [
            ["and","acrescenta","I cooked and I cleaned."],
            ["but","contraste","I was tired, but I studied."],
            ["because","causa (por quê)","I stayed home because I was sick."],
            ["so","consequência (então)","I was sick, so I stayed home."],
            ["or","alternativa","Tea or coffee?"]
          ],
          "firstCol": true
        },
        {
          "t": "tip",
          "s": "**Because** responde “por quê?” e vem **antes da causa**; **so** vem **antes do resultado**. “I was tired **so** I slept” = “I slept **because** I was tired”. Cuidado: **so** e **because** não se usam juntos.",
          "title": "PULO DO GATO"
        },
        {
          "t": "errors",
          "items": [
            ["I was tired because so I slept.","I was tired, so I slept."],
            ["I stayed home, because I was sick, so.","I stayed home because I was sick."],
            ["First I wake up, then I ate.","First, I woke up. Then, I ate."],
            ["I like coffee, and but I don’t like tea.","I like coffee, but I don’t like tea."]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        },
        {
          "t": "image",
          "src": "material/imagens/conectores.svg",
          "alt": "Cinco conectores: and soma, but contrasta, because explica, so dá o resultado, or oferece escolha.",
          "legenda": "Cinco conectores para contar uma história."
        },
        {"t":"h","n":"3.3","title":"FRASES-CHAVE"},
        {
          "t": "ex",
          "id": "m6-s3-ex1",
          "titulo": "3.4 Complete com because, so, but ou and",
          "items": [
            {"q":"I was tired, ___ I went to bed.","a":["so"],"why":"Resultado: **so**."},
            {"q":"I stayed home ___ it rained.","a":["because"],"why":"Causa: **because**."},
            {"q":"I like tea, ___ I don’t like coffee.","a":["but"],"why":"Contraste: **but**."},
            {"q":"I cooked ___ I cleaned the house.","a":["and"],"why":"Soma: **and**."},
            {"q":"Do you want tea ___ coffee?","a":["or"],"why":"Alternativa: **or**."}
          ],
          "ref": "3.2"
        },
        {
          "t": "ex",
          "id": "m6-s3-ex2",
          "titulo": "3.5 Ponha na ordem (escolha o certo)",
          "items": [
            {"q":"___, I woke up. Then, I had breakfast.","opts":["Finally","First"],"a":"First","why":"O primeiro passo é **First**."},
            {"q":"I had breakfast. ___, I went to work.","opts":["After that","First"],"a":"After that","why":"Segundo passo: **After that**."},
            {"q":"I was tired. ___, I went to bed. (resultado)","opts":["Because","So"],"a":"So","why":"Resultado = **so**."},
            {"q":"I went to bed ___ I was tired. (causa)","opts":["because","so"],"a":"because","why":"Causa = **because**."}
          ],
          "ref": "3.1"
        },
        {
          "t": "ex",
          "id": "m6-s3-ex3",
          "titulo": "3.6 Escreva em inglês e ouça",
          "items": [
            {"q":"Primeiro, eu acordei.","a":["First, I woke up.","First I woke up."],"why":"Sequência: **First,** + passado (wake → woke)."},
            {"q":"Eu estava cansado, mas estudei.","a":["I was tired, but I studied.","I was tired but I studied."],"why":"Contraste: **but**."},
            {"q":"Choveu, então fiquei em casa.","a":["It rained, so I stayed home.","It rained so I stayed home.","It rained, so I stayed at home."],"why":"Resultado: **so**."},
            {"q":"Escreva a frase que você ouviu:","say":"Finally, I went to bed.","a":["Finally, I went to bed.","Finally I went to bed."],"why":"**Finally** fecha a história."}
          ],
          "ref": "3.2"
        },
        {"t":"etapa","id":"etapa-4","n":4,"titulo":"Input","min":10,"desc":"Ouça, leia em voz alta e, se houver, assista ao vídeo indicado."},
        {"t":"h","n":"4.1","title":"OUVIR E LER"},
        {
          "t": "reading",
          "titulo": "LEITURA · My day in the city",
          "boxed": true,
          "sents": [
            ["Yesterday was a long day.","Ontem foi um dia longo."],
            ["First, I took a bus to the city because my car was at the mechanic.","Primeiro, peguei um ônibus para o centro porque meu carro estava no mecânico."],
            ["Then, I bought a gift for my sister, but I didn’t buy a card.","Depois, comprei um presente para minha irmã, mas não comprei um cartão."],
            ["After that, I met a friend and we drank coffee.","Depois disso, encontrei um amigo e tomamos café."],
            ["Finally, I got home late, so I went to bed early.","Por fim, cheguei em casa tarde, então fui dormir cedo."]
          ],
          "glossario": [["city","cidade / centro"],["mechanic","mecânico"],["card","cartão"]]
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita",
          "frases": [
            ["First, I woke up.","Primeiro, eu acordei."],
            ["Then, I had breakfast.","Depois, tomei café da manhã."],
            ["I was tired, so I went to bed.","Eu estava cansado, então fui dormir."],
            ["I stayed home because it rained.","Fiquei em casa porque choveu."]
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
        {"t":"prod","id":"m6-s3-prod","prompt":"Conte o seu dia de ontem em 6 frases, usando first, then, after that, finally e pelo menos um because ou so."}
      ],
      "revisao": [
        {
          "t": "table",
          "head": ["Ordem","Conectores"],
          "rows": [
            ["sequência","first · then · after that · later · finally"],
            ["soma / contraste","and · but"],
            ["causa / resultado","because · so"],
            ["alternativa","or"]
          ],
          "firstCol": true
        },
        {"t":"bullets","items":["**because** + causa · **so** + resultado","Vírgula depois de First, Then, After that, Finally"]},
        {"t":"errors","items":[["I was tired because so I slept.","I was tired, so I slept."]],"title":"ERROS COMUNS DE BRASILEIROS"}
      ]
    },
    {
      "id": "m6-p4",
      "n": 4,
      "tipo": "pratica",
      "titulo": "Fixar as palavras de sequência",
      "duracao": 40,
      "resumo": "first, then, after that, later e finally para contar uma história em ordem.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "rot-m6-p4",
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
          "id": "m6-p4-ex1",
          "titulo": "2.1 Escolha a palavra",
          "ref": "m6-s3/3.1",
          "items": [
            {
              "q": "___, I woke up. Then, I had breakfast.",
              "opts": [
                "First",
                "Finally"
              ],
              "a": "First",
              "why": "O primeiro fato começa com **First**."
            },
            {
              "q": "I had breakfast. ___, I went to work.",
              "opts": [
                "After that",
                "First"
              ],
              "a": "After that",
              "why": "Depois de um fato → **After that**."
            },
            {
              "q": "I called my mother. ___, I went to bed.",
              "opts": [
                "Finally",
                "First"
              ],
              "a": "Finally",
              "why": "O último fato → **Finally**."
            },
            {
              "q": "I woke up at six. ___, I took a shower.",
              "opts": [
                "Then",
                "Finally"
              ],
              "a": "Then",
              "why": "Em seguida → **Then**."
            },
            {
              "q": "___, I called my friend. (mais tarde)",
              "opts": [
                "Later",
                "First"
              ],
              "a": "Later",
              "why": "Mais tarde → **Later**."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m6-p4-ex2",
          "titulo": "2.2 Escreva em inglês",
          "ref": "m6-s3/3.1",
          "items": [
            {
              "q": "Primeiro, eu acordei.",
              "a": [
                "First, I woke up.",
                "First I woke up."
              ],
              "why": "First + vírgula + frase."
            },
            {
              "q": "Depois, tomei café da manhã.",
              "a": [
                "Then, I had breakfast.",
                "Then I had breakfast."
              ],
              "why": "Then + vírgula + frase."
            },
            {
              "q": "Depois disso, fui trabalhar.",
              "a": [
                "After that, I went to work.",
                "After that I went to work."
              ],
              "why": "After that + vírgula + frase."
            },
            {
              "q": "Mais tarde, liguei para minha mãe.",
              "a": [
                "Later, I called my mother.",
                "Later I called my mother."
              ],
              "why": "Later + vírgula + frase."
            },
            {
              "q": "Por fim, fui dormir.",
              "a": [
                "Finally, I went to bed.",
                "Finally I went to bed."
              ],
              "why": "Finally + vírgula + frase."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m6-p4-ex3",
          "titulo": "2.3 Complete a história",
          "ref": "m6-s3/3.1",
          "items": [
            {
              "q": "First, I ___ (wake up) at six.",
              "a": [
                "woke up"
              ],
              "why": "wake up → woke up."
            },
            {
              "q": "Then, I ___ (have) breakfast.",
              "a": [
                "had"
              ],
              "why": "have → had."
            },
            {
              "q": "After that, I ___ (go) to work.",
              "a": [
                "went"
              ],
              "why": "go → went."
            },
            {
              "q": "Later, I ___ (call) my mother.",
              "a": [
                "called"
              ],
              "why": "call + ed."
            },
            {
              "q": "Finally, I ___ (go) to bed.",
              "a": [
                "went"
              ],
              "why": "go → went."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m6-p4-ex4",
          "titulo": "2.4 Corrija as frases",
          "ref": "m6-s3/3.1",
          "items": [
            {
              "q": "First, I wake up.",
              "a": [
                "First, I woke up.",
                "First I woke up."
              ],
              "why": "Contando o passado: **woke up**."
            },
            {
              "q": "Then I eated breakfast.",
              "a": [
                "Then, I ate breakfast.",
                "Then I ate breakfast."
              ],
              "why": "eat → **ate**."
            },
            {
              "q": "Finally, I go to bed late yesterday.",
              "a": [
                "Finally, I went to bed late yesterday.",
                "Finally I went to bed late yesterday."
              ],
              "why": "Ontem → passado: **went**."
            },
            {
              "q": "Later, I called to my mother.",
              "a": [
                "Later, I called my mother.",
                "Later I called my mother."
              ],
              "why": "call + pessoa, sem **to**."
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
              "Yesterday was a long day.",
              "Ontem foi um dia longo."
            ],
            [
              "First, I woke up at six and took a shower.",
              "Primeiro, acordei às seis e tomei banho."
            ],
            [
              "Then, I had breakfast and went to work.",
              "Depois, tomei café da manhã e fui trabalhar."
            ],
            [
              "After that, I worked all day.",
              "Depois disso, trabalhei o dia todo."
            ],
            [
              "Later, I called my mother, and we talked for an hour.",
              "Mais tarde, liguei para minha mãe e conversamos por uma hora."
            ],
            [
              "Finally, I went to bed.",
              "Por fim, fui dormir."
            ]
          ],
          "titulo": "A long day"
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita: em ordem",
          "frases": [
            [
              "First, I woke up.",
              "Primeiro, eu acordei."
            ],
            [
              "Then, I had breakfast.",
              "Depois, tomei café da manhã."
            ],
            [
              "After that, I went to work.",
              "Depois disso, fui trabalhar."
            ],
            [
              "Later, I called my mother.",
              "Mais tarde, liguei para minha mãe."
            ],
            [
              "Finally, I went to bed.",
              "Por fim, fui dormir."
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
          "id": "m6-p4-ditado",
          "titulo": "4.1 Ouça e escreva (ditado)",
          "intro": "Clique em 🔊, ouça e escreva a frase. Use 🐢 para ouvir mais devagar. Contrações valem (I’m = I am).",
          "ref": "m6-s3/3.1",
          "items": [
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "First, I took a shower.",
              "a": [
                "First, I took a shower.",
                "First I took a shower."
              ],
              "why": "First + vírgula."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "Then, I went to work.",
              "a": [
                "Then, I went to work.",
                "Then I went to work."
              ],
              "why": "Then + vírgula."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "Finally, I went to bed.",
              "a": [
                "Finally, I went to bed.",
                "Finally I went to bed."
              ],
              "why": "Finally + vírgula."
            }
          ]
        },
        {
          "t": "prod",
          "id": "prod-m6-p4",
          "prompt": "Conte o seu dia de ontem em 6 frases com first, then, after that, later e finally."
        }
      ],
      "revisao": [
        {
          "t": "bullets",
          "items": [
            "**First** (primeiro) · **then** (depois) · **after that** (depois disso) · **later** (mais tarde) · **finally** (por fim)",
            "Vírgula depois da palavra de sequência: First, I woke up.",
            "Conte no passado: I woke up · I had breakfast · I went to work"
          ]
        },
        {
          "t": "errors",
          "items": [
            [
              "First I wake up, then I ate.",
              "First, I woke up. Then, I ate."
            ]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        }
      ]
    },
    {
      "id": "m6-p5",
      "n": 5,
      "tipo": "pratica",
      "titulo": "Fixar and, but, because, so e or",
      "duracao": 40,
      "resumo": "Ligar ideias: acrescentar, contrastar, dar a causa, o resultado e escolher.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "rot-m6-p5",
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
          "id": "m6-p5-ex1",
          "titulo": "2.1 Complete com and, but, because, so ou or",
          "ref": "m6-s3/3.2",
          "items": [
            {
              "q": "I was tired, ___ I went to bed.",
              "a": [
                "so"
              ],
              "why": "Resultado → **so**."
            },
            {
              "q": "I stayed home ___ it rained.",
              "a": [
                "because"
              ],
              "why": "Causa → **because**."
            },
            {
              "q": "I like tea, ___ I don’t like coffee.",
              "a": [
                "but"
              ],
              "why": "Contraste → **but**."
            },
            {
              "q": "I cooked ___ I cleaned the house.",
              "a": [
                "and"
              ],
              "why": "Acrescenta → **and**."
            },
            {
              "q": "Do you want tea ___ coffee?",
              "a": [
                "or"
              ],
              "why": "Alternativa → **or**."
            },
            {
              "q": "It rained, ___ I stayed home.",
              "a": [
                "so"
              ],
              "why": "Resultado → **so**."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m6-p5-ex2",
          "titulo": "2.2 Because ou so?",
          "ref": "m6-s3/3.2",
          "items": [
            {
              "q": "I was sick, (because / so) I stayed home.",
              "opts": [
                "because",
                "so"
              ],
              "a": "so",
              "why": "“Fiquei em casa” é o resultado → **so**."
            },
            {
              "q": "I stayed home (because / so) I was sick.",
              "opts": [
                "because",
                "so"
              ],
              "a": "because",
              "why": "“Estava doente” é a causa → **because**."
            },
            {
              "q": "She was happy (because / so) she got a gift.",
              "opts": [
                "because",
                "so"
              ],
              "a": "because",
              "why": "Causa da alegria → **because**."
            },
            {
              "q": "He was tired, (because / so) he slept.",
              "opts": [
                "because",
                "so"
              ],
              "a": "so",
              "why": "Resultado → **so**."
            },
            {
              "q": "They didn’t go (because / so) it rained.",
              "opts": [
                "because",
                "so"
              ],
              "a": "because",
              "why": "Causa → **because**."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m6-p5-ex3",
          "titulo": "2.3 Junte as frases",
          "ref": "m6-s3/3.2",
          "items": [
            {
              "q": "Junte com but: I was tired. I studied.",
              "a": [
                "I was tired, but I studied.",
                "I was tired but I studied."
              ],
              "why": "but = contraste."
            },
            {
              "q": "Junte com because: I stayed home. It rained.",
              "a": [
                "I stayed home because it rained."
              ],
              "why": "because + causa."
            },
            {
              "q": "Junte com so: It rained. I stayed home.",
              "a": [
                "It rained, so I stayed home.",
                "It rained so I stayed home."
              ],
              "why": "so + resultado."
            },
            {
              "q": "Junte com and: I cooked. I cleaned the house.",
              "a": [
                "I cooked and I cleaned the house.",
                "I cooked and cleaned the house."
              ],
              "why": "and = acrescenta."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m6-p5-ex4",
          "titulo": "2.4 Corrija as frases",
          "ref": "m6-s3/3.2",
          "items": [
            {
              "q": "I was tired because so I slept.",
              "a": [
                "I was tired, so I slept.",
                "I was tired so I slept."
              ],
              "why": "Use só **so**."
            },
            {
              "q": "I like coffee, and but I don’t like tea.",
              "a": [
                "I like coffee, but I don't like tea.",
                "I like coffee but I don't like tea."
              ],
              "why": "Use só **but**."
            },
            {
              "q": "I stayed home, because I was sick, so.",
              "a": [
                "I stayed home because I was sick."
              ],
              "why": "Use só **because**, no meio da frase."
            },
            {
              "q": "Tea and coffee? (um ou outro)",
              "a": [
                "Tea or coffee?"
              ],
              "why": "Alternativa → **or**."
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
              "It rained on Sunday, so we stayed home.",
              "Choveu no domingo, então ficamos em casa."
            ],
            [
              "I cooked lunch, and my wife made a cake.",
              "Eu preparei o almoço e minha esposa fez um bolo."
            ],
            [
              "My son wanted to play soccer, but it was wet.",
              "Meu filho queria jogar futebol, mas estava molhado."
            ],
            [
              "He was sad because he didn’t play.",
              "Ele ficou triste porque não jogou."
            ],
            [
              "We watched a movie, and we ate cake.",
              "Assistimos a um filme e comemos bolo."
            ],
            [
              "Tea or coffee? I drank tea because I was tired.",
              "Chá ou café? Tomei chá porque estava cansado."
            ]
          ],
          "titulo": "A rainy Sunday"
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita: conectores",
          "frases": [
            [
              "I was tired, so I went to bed.",
              "Eu estava cansado, então fui dormir."
            ],
            [
              "I stayed home because it rained.",
              "Fiquei em casa porque choveu."
            ],
            [
              "I like tea, but I don’t like coffee.",
              "Gosto de chá, mas não gosto de café."
            ],
            [
              "Tea or coffee?",
              "Chá ou café?"
            ],
            [
              "It rained, so I stayed home.",
              "Choveu, então fiquei em casa."
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
          "id": "m6-p5-ditado",
          "titulo": "4.1 Ouça e escreva (ditado)",
          "intro": "Clique em 🔊, ouça e escreva a frase. Use 🐢 para ouvir mais devagar. Contrações valem (I’m = I am).",
          "ref": "m6-s3/3.2",
          "items": [
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "I stayed home because I was sick.",
              "a": [
                "I stayed home because I was sick."
              ],
              "why": "because + causa."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "It rained, so we stayed home.",
              "a": [
                "It rained, so we stayed home.",
                "It rained so we stayed home."
              ],
              "why": "so + resultado."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "I like tea, but I don’t like coffee.",
              "a": [
                "I like tea, but I don't like coffee.",
                "I like tea but I don't like coffee."
              ],
              "why": "but = contraste."
            }
          ]
        },
        {
          "t": "prod",
          "id": "prod-m6-p5",
          "prompt": "Escreva 5 frases sobre ontem usando and, but, because, so e or (uma de cada)."
        }
      ],
      "revisao": [
        {
          "t": "bullets",
          "items": [
            "**and** acrescenta · **but** contraste · **because** causa · **so** resultado · **or** alternativa",
            "“I was tired, **so** I slept” = “I slept **because** I was tired”",
            "Não use **so** e **because** juntos"
          ]
        },
        {
          "t": "errors",
          "items": [
            [
              "I was tired because so I slept.",
              "I was tired, so I slept."
            ],
            [
              "I like coffee, and but I don’t like tea.",
              "I like coffee, but I don’t like tea."
            ]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        }
      ]
    },
    {
      "id": "m6-p6",
      "n": 6,
      "tipo": "pratica",
      "titulo": "Revisão do módulo",
      "duracao": 40,
      "resumo": "Irregulares, perguntas no passado e conectores: aquecimento para o mini-teste.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "rot-m6-p6",
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
          "id": "m6-p6-ex1",
          "titulo": "2.1 Escolha a forma correta",
          "ref": "m6-s1/3.1",
          "items": [
            {
              "q": "She (wrote / writed) an email.",
              "opts": [
                "wrote",
                "writed"
              ],
              "a": "wrote",
              "why": "write → **wrote**."
            },
            {
              "q": "Did you (see / saw) the movie?",
              "opts": [
                "see",
                "saw"
              ],
              "a": "see",
              "why": "Com did, verbo básico."
            },
            {
              "q": "First, I woke up. (Then / Because), I had breakfast.",
              "opts": [
                "Then",
                "Because"
              ],
              "a": "Then",
              "why": "Sequência → **Then**."
            },
            {
              "q": "I was tired, (so / because) I slept.",
              "opts": [
                "so",
                "because"
              ],
              "a": "so",
              "why": "Resultado → **so**."
            },
            {
              "q": "He didn’t (eat / ate) pizza.",
              "opts": [
                "eat",
                "ate"
              ],
              "a": "eat",
              "why": "Com didn’t, verbo básico."
            },
            {
              "q": "I like tea, (but / and) I don’t like coffee.",
              "opts": [
                "but",
                "and"
              ],
              "a": "but",
              "why": "Contraste → **but**."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m6-p6-ex2",
          "titulo": "2.2 Escreva em inglês",
          "ref": "m6-s2/3.2",
          "items": [
            {
              "q": "Você viu o filme?",
              "a": [
                "Did you see the movie?"
              ],
              "why": "Did + you + verbo básico?"
            },
            {
              "q": "Eu li o e-mail, mas não escrevi para ela.",
              "a": [
                "I read the email, but I didn't write to her.",
                "I read the e-mail, but I didn't write to her.",
                "I read the email but I didn't write to her."
              ],
              "why": "read (passado) · but · didn’t + write."
            },
            {
              "q": "Mais tarde, nós comemos pizza.",
              "a": [
                "Later, we ate pizza.",
                "Later we ate pizza."
              ],
              "why": "Later + ate."
            },
            {
              "q": "Eles saíram às cinco, então chegaram tarde.",
              "a": [
                "They left at five, so they got there late.",
                "They left at five so they got there late."
              ],
              "why": "left · so · got."
            },
            {
              "q": "Ela não bebeu café porque estava cansada.",
              "a": [
                "She didn't drink coffee because she was tired.",
                "She did not drink coffee because she was tired."
              ],
              "why": "didn’t + drink · because + was."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m6-p6-ex3",
          "titulo": "2.3 Corrija as frases",
          "ref": "m6-s1/3.1",
          "items": [
            {
              "q": "She goed to the park.",
              "a": [
                "She went to the park."
              ],
              "why": "go → **went**."
            },
            {
              "q": "Did he gave you a book?",
              "a": [
                "Did he give you a book?"
              ],
              "why": "Com did, verbo básico."
            },
            {
              "q": "We eated lunch at noon.",
              "a": [
                "We ate lunch at noon."
              ],
              "why": "eat → **ate**."
            },
            {
              "q": "I didn’t knew the answer.",
              "a": [
                "I didn't know the answer.",
                "I did not know the answer."
              ],
              "why": "Com didn’t, verbo básico."
            },
            {
              "q": "Finally, I go to bed.",
              "a": [
                "Finally, I went to bed.",
                "Finally I went to bed."
              ],
              "why": "Contando o passado: **went**."
            }
          ]
        },
        {
          "t": "ex",
          "id": "m6-p6-ex4",
          "titulo": "2.4 Complete no passado",
          "ref": "m6-s1/3.1",
          "items": [
            {
              "q": "Last night I ___ (see) a good movie.",
              "a": [
                "saw"
              ],
              "why": "see → saw."
            },
            {
              "q": "We ___ (not / eat) pizza.",
              "a": [
                [
                  "didn't eat",
                  "did not eat"
                ]
              ],
              "why": "didn’t + verbo básico."
            },
            {
              "q": "___ you ___ (buy) a gift?",
              "a": [
                "Did",
                "buy"
              ],
              "why": "Did + you + verbo básico?"
            },
            {
              "q": "She ___ (give) me a book.",
              "a": [
                "gave"
              ],
              "why": "give → gave."
            },
            {
              "q": "They ___ (leave) at five.",
              "a": [
                "left"
              ],
              "why": "leave → left."
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
              "Last month, my wife and I took a trip to Rio.",
              "No mês passado, minha esposa e eu fizemos uma viagem ao Rio."
            ],
            [
              "First, we took a bus because the flight was expensive.",
              "Primeiro, pegamos um ônibus porque o voo era caro."
            ],
            [
              "We slept in a small hotel and ate fish at the restaurant.",
              "Dormimos em um hotel pequeno e comemos peixe no restaurante."
            ],
            [
              "Then, we went to the beach, but it rained.",
              "Depois, fomos à praia, mas choveu."
            ],
            [
              "We saw a good movie, so we were happy.",
              "Vimos um bom filme, então ficamos felizes."
            ],
            [
              "Finally, we came back home and slept all day.",
              "Por fim, voltamos para casa e dormimos o dia todo."
            ]
          ],
          "titulo": "My trip"
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita: revisão",
          "frases": [
            [
              "She wrote an email.",
              "Ela escreveu um e-mail."
            ],
            [
              "Did you see the movie?",
              "Você viu o filme?"
            ],
            [
              "Later, we ate pizza.",
              "Mais tarde, comemos pizza."
            ],
            [
              "I was tired, so I slept.",
              "Eu estava cansado, então dormi."
            ],
            [
              "He didn’t drink coffee.",
              "Ele não bebeu café."
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
          "id": "m6-p6-ditado",
          "titulo": "4.1 Ouça e escreva (ditado)",
          "intro": "Clique em 🔊, ouça e escreva a frase. Use 🐢 para ouvir mais devagar. Contrações valem (I’m = I am).",
          "ref": "m6-s1/3.1",
          "items": [
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "She gave me a book.",
              "a": [
                "She gave me a book."
              ],
              "why": "give → gave."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "I didn’t know the answer.",
              "a": [
                "I didn't know the answer.",
                "I did not know the answer."
              ],
              "why": "didn’t + verbo básico."
            },
            {
              "q": "Escreva a frase que você ouviu:",
              "say": "First, I woke up, then I had breakfast.",
              "a": [
                "First, I woke up, then I had breakfast.",
                "First I woke up, then I had breakfast.",
                "First, I woke up. Then, I had breakfast."
              ],
              "why": "Palavras de sequência + passado."
            }
          ]
        },
        {
          "t": "prod",
          "id": "prod-m6-p6",
          "prompt": "Conte um dia especial ou uma viagem em 6 frases: first/then/finally, 3 verbos irregulares e um because ou so."
        }
      ],
      "revisao": [
        {
          "t": "bullets",
          "items": [
            "Irregulares: went · had · did · saw · ate · bought · made · took · got · came · gave · said · wrote · read · met · slept · drank · left · spoke · knew",
            "Negativa e pergunta: did/didn’t + verbo básico",
            "Sequência: first · then · after that · later · finally · conectores: and · but · because · so · or"
          ]
        },
        {
          "t": "tip",
          "s": "Esta é a última prática antes do mini-teste da Sessão 4. Refaça o Caderno de erros e releia as revisões das sessões 1, 2 e 3. Meses e datas aparecem só na Sessão 4.",
          "title": "PULO DO GATO"
        }
      ]
    },
    {
      "id": "m6-s4",
      "n": 4,
      "titulo": "Meses, datas e mini-teste",
      "duracao": 40,
      "resumo": "Meses do ano, números ordinais, como dizer datas; revisão do módulo e mini-teste.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "m6-s4-rot",
          "titulo": "40 MIN",
          "rows": [
            [8,"1. Cartões","Palavras 31 a 40 e revisões do dia.","etapa-1"],
            [7,"2. Revisão","Resumo das sessões agendadas e erros do Caderno.","etapa-2"],
            [12,"3. Conteúdo novo","Seções 3.1 a 3.2.","etapa-3"],
            [10,"4. Input","Ouvir e ler em voz alta; vídeo “Vídeo: Let’s Learn English – Nível 2, lições 5 a 8”.","etapa-4"],
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
          "id": "m6-s4-voc",
          "items": [
            [31,"What’s the date today?","UÓTS dhe DÊIT tu-DÊI","Qual é a data de hoje?"],
            [32,"It’s May fifth.","its MÊI FÍFTH","É 5 de maio."],
            [33,"My birthday is in June.","mái BÉRTH-dêi iz in DJÚN","Meu aniversário é em junho."],
            [34,"on March twelfth","ón MÁRTCH TUÉLFTH","em 12 de março"],
            [35,"the first of the month","dhe FÉRST óv dhe MÂNTH","o primeiro do mês"],
            [36,"a month","a MÂNTH","um mês"],
            [37,"a holiday","a RÓ-li-dêi","um feriado"],
            [38,"next week · next year","NÉKST UÍK · NÉKST IÍR","semana que vem · ano que vem"],
            [39,"Happy birthday!","RÉ-pi BÉRTH-dêi","Feliz aniversário!"],
            [40,"a party","a PÁR-ri","uma festa"]
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
        {"t":"h","n":"3.1","title":"OS MESES E OS ORDINAIS"},
        {
          "t": "table",
          "head": ["Mês","Pronúncia","Mês","Pronúncia"],
          "rows": [
            ["January","JÉ-niu-é-ri","July","dju-LÁI"],
            ["February","FÉ-bru-é-ri","August","Ó-gast"],
            ["March","MÁRTCH","September","sep-TÉM-ber"],
            ["April","ÊI-pril","October","ok-TÔU-ber"],
            ["May","MÊI","November","nou-VÉM-ber"],
            ["June","DJÚN","December","di-SÉM-ber"]
          ],
          "firstCol": true
        },
        {
          "t": "table",
          "head": ["Número","Ordinal","Número","Ordinal"],
          "rows": [
            ["1","first (1st)","11","eleventh"],
            ["2","second (2nd)","12","twelfth"],
            ["3","third (3rd)","20","twentieth"],
            ["4","fourth (4th)","21","twenty-first"],
            ["5","fifth (5th)","30","thirtieth"]
          ],
          "firstCol": true
        },
        {
          "t": "tip",
          "s": "Meses e dias da semana sempre começam com **letra maiúscula**: January, Monday. A data fala-se com o ordinal: “May 5th” = “May **fifth**”. Para meses usamos **in** (in May), para dias do mês **on** (on May 5th).",
          "title": "PULO DO GATO"
        },
        {"t":"image","src":"material/imagens/meses.svg","alt":"Os doze meses do ano e os ordinais de 1st a 5th.","legenda":"Meses e ordinais."},
        {"t":"h","n":"3.2","title":"DATAS E ANIVERSÁRIO"},
        {"t":"etapa","id":"etapa-4","n":4,"titulo":"Input","min":10,"desc":"Ouça, leia em voz alta e, se houver, assista ao vídeo indicado."},
        {"t":"h","n":"4.1","title":"OUVIR E LER"},
        {
          "t": "reading",
          "titulo": "LEITURA · My birthday",
          "boxed": true,
          "sents": [
            ["My birthday is on October twelfth.","Meu aniversário é em 12 de outubro."],
            ["Last year I had a party at home, and my friends came.","No ano passado fiz uma festa em casa e meus amigos vieram."],
            ["We ate cake, drank juice and talked all night.","Comemos bolo, bebemos suco e conversamos a noite toda."],
            ["My sister gave me a book, and my parents bought me a bike.","Minha irmã me deu um livro e meus pais me compraram uma bicicleta."],
            ["It was a great day!","Foi um ótimo dia!"]
          ],
          "glossario": [["cake","bolo"],["juice","suco"],["bike","bicicleta"]]
        },
        {"t":"h","n":"4.2","title":"VÍDEO"},
        {
          "t": "video",
          "id": "m6-s4-vid",
          "licoes": [
            {"titulo":"Level 2 · Lição 5: Greatest Vacation of All Time","url":"https://learningenglish.voanews.com/a/4035571.html","embed":"https://learningenglish.voanews.com/embed/player/article/4035571.html"},
            {"titulo":"Level 2 · Lição 6: Will It Float?","url":"https://learningenglish.voanews.com/a/4064553.html","embed":"https://learningenglish.voanews.com/embed/player/article/4064553.html"},
            {"titulo":"Level 2 · Lição 7: Tip Your Tour Guide","url":"https://learningenglish.voanews.com/a/4064769.html","embed":"https://learningenglish.voanews.com/embed/player/article/4064769.html"},
            {"titulo":"Level 2 · Lição 8: The Best Barbecue","url":"https://learningenglish.voanews.com/a/4073994.html","embed":"https://learningenglish.voanews.com/embed/player/article/4073994.html"}
          ],
          "titulo": "Vídeo: Let’s Learn English – Nível 2, lições 5 a 8",
          "passos": [
            "Escolha uma das lições abaixo (toque no título para assistir aqui mesmo) e assista sem legenda. Dê uma nota de 0 a 10 para o quanto entendeu.",
            "Assista de novo com legenda em inglês.",
            "Anote 3 frases com verbos irregulares e repita em voz alta."
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
          "id": "m6-s4-t1",
          "titulo": "A. Complete",
          "teste": true,
          "items": [
            {"q":"I ___ (go) to the beach yesterday."},
            {"q":"She ___ (buy) a new bag last week."},
            {"q":"We ___ (not / see) the movie."},
            {"q":"___ you ___ (eat) lunch? (pergunta)"},
            {"q":"He ___ (write) an email last night."},
            {"q":"I was tired, ___ I went to bed. (resultado)"}
          ]
        },
        {
          "t": "ex",
          "id": "m6-s4-t2",
          "titulo": "B. Traduza para o inglês",
          "teste": true,
          "items": [
            {"q":"Primeiro, eu acordei. Depois, tomei café."},
            {"q":"Ela me deu um livro."},
            {"q":"Fiquei em casa porque estava doente."},
            {"q":"Meu aniversário é em maio."}
          ]
        },
        {
          "t": "ex",
          "id": "m6-s4-t3",
          "titulo": "C. Escreva em inglês",
          "teste": true,
          "items": [{"q":"fazer (passado de make)"},{"q":"saiu (passado de leave)"},{"q":"terceiro"},{"q":"feriado"},{"q":"5 de maio (por extenso)"}]
        },
        {"t":"h","n":"5.2","title":"PRODUÇÃO DO MÓDULO"},
        {"t":"prod","id":"m6-s4-prod","prompt":"Conte uma viagem ou um dia especial em 8 frases: use first/then/finally, 3 irregulares e um because ou so."},
        {"t":"h","n":"5.3","title":"RELATÓRIO PARA A IA"},
        {"t":"report","titulo":"Enviar para a IA"}
      ],
      "revisao": [
        {
          "t": "table",
          "head": ["Tópico","Lembrete"],
          "rows": [
            ["Irregulares","20 verbos: forma especial só na afirmativa"],
            ["did","didn’t / Did + verbo base"],
            ["Conectores","first, then, after that, finally · because / so"],
            ["Datas","in May · on May 5th (fifth)"]
          ],
          "firstCol": true
        },
        {"t":"bullets","items":["Meses e dias com **maiúscula**"]}
      ]
    }
  ],
  "gloss": "beach=praia;lunch=almoço;homework=lição de casa;pizza=pizza;cake=bolo;taxi=táxi;bus=ônibus;gift=presente;photo=foto;summer=verão;hotel=hotel;woman=mulher;news=notícias;answer=resposta;water=água;breakfast=café da manhã;later=mais tarde;finally=finalmente;rained=choveu;tea=chá;coffee=café;city=cidade;mechanic=mecânico;card=cartão;juice=suco;bike=bicicleta;birthday=aniversário;holiday=feriado;month=mês;date=data;sick=doente;woke=acordou;shower=banho;jacket=jaqueta;hat=chapéu;fish=peixe;together=juntos"
});
