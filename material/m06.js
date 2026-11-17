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
          "titulo": "Vídeo: Let’s Learn English – Nível 2, lições 5 a 8",
          "passos": [
            "Escolha uma lição da sequência (se a lição indicada não existir, siga para a próxima da lista) e assista sem legenda. Dê uma nota de 0 a 10 para o quanto entendeu.",
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
