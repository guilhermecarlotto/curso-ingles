// MATERIAL DO CURSO — módulo 3: Lugares e existência
// Só conteúdo (sem código do site). Regras e formato em LEIA-ME.md. Salve em UTF-8.
(window.CURSO_MODULOS = window.CURSO_MODULOS || []).push({
  "id": "m3",
  "n": 3,
  "titulo": "Lugares e existência",
  "descricao": "Dizer o que existe e onde as coisas estão, falar da casa e entender números e preços.",
  "fase": "Fase 1 · Fundação (A1)",
  "faseId": "f1",
  "icone": "🏠",
  "cor": "blue",
  "objetivos": [
    "Usar there is / there are, some e any",
    "Dizer onde as coisas estão (in, on, under, next to…)",
    "Nomear cômodos e móveis",
    "Contar até 1000 e entender preços"
  ],
  "anki": {
    "deck": "Inglês::Módulo 03"
  },
  "sessoes": [
    {
      "id": "m3-s1",
      "n": 1,
      "titulo": "There is / There are",
      "duracao": 40,
      "resumo": "Dizer o que existe em um lugar: há, não há e perguntas; some e any; os cômodos da casa.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "m3-s1-rot",
          "titulo": "40 MIN",
          "rows": [
            [8,"1. Cartões","Palavras 1 a 10 e revisões do dia.","etapa-1"],
            [7,"2. Revisão","Resumo das sessões agendadas e erros do Caderno.","etapa-2"],
            [12,"3. Conteúdo novo","Seções 3.1 a 3.6.","etapa-3"],
            [10,"4. Input","Ouvir e ler em voz alta; vídeo “Vídeo (opcional)”.","etapa-4"],
            [3,"5. Produção","Escrever com as suas palavras (e pedir correção).","etapa-5"]
          ]
        },
        {
          "t": "callout",
          "kind": "goal",
          "titulo": "Objetivo da sessão",
          "s": "Dizer **o que há** em um lugar: casa, quarto, cidade. Usar **there is / there are**, some e any."
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
          "id": "m3-s1-voc",
          "items": [
            [1,"a house","a RÁUS","uma casa"],
            [2,"an apartment","an a-PÁRT-ment","um apartamento"],
            [3,"a kitchen","a KÍ-tchen","uma cozinha"],
            [4,"a bedroom","a BÉD-rum","um quarto"],
            [5,"a bathroom","a BÉTH-rum","um banheiro"],
            [6,"a living room","a LÍ-ving rum","uma sala de estar"],
            [7,"a garden","a GÁR-den","um jardim"],
            [8,"a garage","a ga-RÁJ","uma garagem"],
            [9,"a room","a RÚM","um cômodo / uma sala"],
            [10,"There is / There are","dér IZ / dér ÁR","Há (existe/existem)"]
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
        {"t":"h","n":"3.1","title":"THERE IS / THERE ARE"},
        {
          "t": "enpt",
          "id": "m3-s1-m3-1.1",
          "en": "We use {y:there is} for one thing and {y:there are} for two or more things. We use it to say that something {b:exists} in a place: There is a bed in the room. There are two chairs.",
          "pt": "Usamos {y:there is} para uma coisa e {y:there are} para duas ou mais. Serve para dizer que algo {b:existe} em um lugar: There is a bed in the room. There are two chairs."
        },
        {
          "t": "table",
          "head": ["Singular","Plural"],
          "rows": [
            ["There is a sofa.","There are two sofas."],
            ["There’s a lamp on the table.","There are three lamps on the table."],
            ["There is one bathroom.","There are two bathrooms."]
          ],
          "firstCol": true
        },
        {
          "t": "tip",
          "s": "Em português dizemos “**tem** um sofá na sala”. Em inglês **nunca** use “have” para isso: **There is** a sofa in the living room. “There’s” é a forma curta de “there is”.",
          "title": "PULO DO GATO"
        },
        {"t":"h","n":"3.2","title":"NEGATIVA E PERGUNTA"},
        {
          "t": "table",
          "head": ["Tipo","Singular","Plural"],
          "rows": [
            ["Afirmativa","There is a TV.","There are some books."],
            ["Negativa","There isn’t a TV.","There aren’t any books."],
            ["Pergunta","Is there a TV?","Are there any books?"],
            ["Resposta curta","Yes, there is. / No, there isn’t.","Yes, there are. / No, there aren’t."]
          ],
          "firstCol": true
        },
        {
          "t": "enpt",
          "id": "m3-s1-m3-1.2",
          "en": "Use {y:some} in positive sentences and {y:any} in negatives and questions: There are some chairs. There aren’t any chairs. Are there any chairs?",
          "pt": "Use {y:some} nas frases afirmativas e {y:any} nas negativas e perguntas: There are some chairs. There aren’t any chairs. Are there any chairs?"
        },
        {
          "t": "errors",
          "items": [
            ["Has a sofa in the room.","There is a sofa in the room."],
            ["There is two chairs.","There are two chairs."],
            ["There have a TV.","There is a TV."],
            ["Is there some books?","Are there any books?"],
            ["In my house have three rooms.","There are three rooms in my house."]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        },
        {"t":"h","n":"3.3","title":"OS CÔMODOS DA CASA"},
        {
          "t": "image",
          "src": "material/imagens/casa-comodos.svg",
          "alt": "Casa vista por dentro com sala, cozinha, quarto e banheiro.",
          "legenda": "Os cômodos da casa."
        },
        {
          "t": "ex",
          "id": "m3-s1-ex1",
          "titulo": "3.4 Complete com is ou are",
          "items": [
            {"q":"There ___ a bed in my room.","a":["is"],"why":"**a bed** é uma coisa: **there is**."},
            {"q":"There ___ two windows.","a":["are"],"why":"Duas janelas: **there are**."},
            {"q":"There ___ some books on the shelf.","a":["are"],"why":"**Some books** é plural: **there are**."},
            {"q":"___ there a garage? — Yes, there is.","a":["Is"],"why":"Pergunta com uma coisa: **Is there…?**"},
            {"q":"___ there any chairs? — No, there aren’t.","a":["Are"],"why":"Plural: **Are there…?**"}
          ],
          "ref": "3.1"
        },
        {
          "t": "ex",
          "id": "m3-s1-ex2",
          "titulo": "3.5 Escolha some ou any",
          "items": [
            {"q":"There are ___ chairs in the kitchen.","opts":["some","any"],"a":"some","why":"Afirmativa: **some**."},
            {"q":"There aren’t ___ windows.","opts":["some","any"],"a":"any","why":"Negativa: **any**."},
            {"q":"Are there ___ bedrooms?","opts":["some","any"],"a":"any","why":"Pergunta: **any**."},
            {"q":"There is ___ lamp in the room.","opts":["a","any"],"a":"a","why":"Uma coisa no singular: **a** (any não vai com singular nas afirmativas)."}
          ],
          "ref": "3.2"
        },
        {
          "t": "ex",
          "id": "m3-s1-ex3",
          "titulo": "3.6 Escreva em inglês e ouça",
          "items": [
            {"q":"Tem uma cozinha na casa.","a":["There is a kitchen in the house.","There’s a kitchen in the house."],"why":"Português “tem” = **there is**."},
            {"q":"Não há jardim.","a":["There isn’t a garden.","There is not a garden.","There’s no garden.","There is no garden."],"why":"Negativa: **there isn’t** + a garden."},
            {"q":"Há banheiros aqui?","a":["Are there any bathrooms here?"],"why":"Plural em pergunta: **Are there any…?**"},
            {"q":"Escreva a frase que você ouviu:","say":"Is there a garage in the apartment?","a":["Is there a garage in the apartment?"],"why":"Pergunta com **Is there**."}
          ],
          "ref": "3.2"
        },
        {"t":"etapa","id":"etapa-4","n":4,"titulo":"Input","min":10,"desc":"Ouça, leia em voz alta e, se houver, assista ao vídeo indicado."},
        {"t":"h","n":"4.1","title":"OUVIR E LER"},
        {
          "t": "example",
          "titulo": "EXEMPLO · Procurando apartamento",
          "lines": [
            ["A","Is there a garage in the apartment?","Tem garagem no apartamento?"],
            ["B","Yes, there is. And there are two bedrooms.","Tem, sim. E há dois quartos."],
            ["A","Are there any windows in the kitchen?","Há janelas na cozinha?"],
            ["B","Yes, there are two big windows.","Sim, há duas janelas grandes."],
            ["A","Is there a garden?","Tem jardim?"],
            ["B","No, there isn’t, but there is a park near here.","Não tem, mas há um parque aqui perto."]
          ]
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita",
          "frases": [
            ["There is a kitchen and a bathroom.","Há uma cozinha e um banheiro."],
            ["There are two bedrooms.","Há dois quartos."],
            ["Is there a garage?","Tem garagem?"],
            ["There aren’t any chairs.","Não há cadeiras."]
          ]
        },
        {"t":"h","n":"4.2","title":"VÍDEO"},
        {
          "t": "video",
          "id": "m3-s1-vid",
          "titulo": "Vídeo (opcional)",
          "passos": [
            "Procure no YouTube: “There is There are English lesson for beginners”.",
            "Assista a um vídeo curto e anote 3 frases com there is / there are.",
            "Repita as frases em voz alta, 3 vezes."
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
        {"t":"prod","id":"m3-s1-prod","prompt":"Escreva 4 frases sobre o seu quarto ou casa: 2 com there is/are e 2 negativas (there isn’t / aren’t)."}
      ],
      "revisao": [
        {
          "t": "table",
          "head": ["","Singular","Plural"],
          "rows": [["+","There is a…","There are some…"],["−","There isn’t a…","There aren’t any…"],["?","Is there a…?","Are there any…?"]],
          "firstCol": true
        },
        {
          "t": "bullets",
          "items": ["“Tem/há” = **there is/are**, nunca “have”","some (afirmativa) · any (negativa e pergunta)","Cômodos: kitchen, bedroom, bathroom, living room"]
        },
        {
          "t": "errors",
          "items": [["Has a sofa in the room.","There is a sofa in the room."],["There is two chairs.","There are two chairs."]],
          "title": "ERROS COMUNS DE BRASILEIROS"
        }
      ]
    },
    {
      "id": "m3-s2",
      "n": 2,
      "titulo": "Preposições de lugar e móveis",
      "duracao": 40,
      "resumo": "in, on, under, next to, between, in front of, behind; at home / at work; os móveis.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "m3-s2-rot",
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
          "s": "Dizer **onde** as coisas estão: in, on, under, next to, between, in front of, behind."
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
          "id": "m3-s2-voc",
          "items": [
            [11,"a sofa","a SÔU-fa","um sofá"],
            [12,"a bed","a BÉD","uma cama"],
            [13,"a table","a TÊI-bol","uma mesa"],
            [14,"a chair","a TCHÉR","uma cadeira"],
            [15,"a shelf / shelves","a SHÉLF / SHÉLVZ","uma estante / estantes"],
            [16,"a lamp","a LÉMP","uma lâmpada / abajur"],
            [17,"a fridge","a FRÍDJ","uma geladeira"],
            [18,"a TV","a tí-VÍ","uma TV"],
            [19,"a mirror","a MÍ-rer","um espelho"],
            [20,"a carpet","a KÁR-pet","um tapete"]
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
        {"t":"h","n":"3.1","title":"PREPOSIÇÕES DE LUGAR"},
        {
          "t": "enpt",
          "id": "m3-s2-m3-2.1",
          "en": "Prepositions of place tell us {y:where} something is. We use {y:in} for inside, {y:on} for a surface, and {y:under} for below.",
          "pt": "As preposições de lugar dizem {y:onde} algo está: {y:in} = dentro, {y:on} = em cima de (numa superfície), {y:under} = embaixo."
        },
        {
          "t": "table",
          "head": ["Preposição","Português","Exemplo"],
          "rows": [
            ["in","dentro de / em","The keys are in the bag."],
            ["on","em cima de / sobre","The book is on the table."],
            ["under","embaixo de","The cat is under the chair."],
            ["next to","ao lado de","The lamp is next to the bed."],
            ["between","entre (dois)","The sofa is between the doors."],
            ["in front of","na frente de","The TV is in front of the sofa."],
            ["behind","atrás de","The garden is behind the house."],
            ["near","perto de","The school is near my house."]
          ],
          "firstCol": true
        },
        {
          "t": "tip",
          "s": "Em português usamos “em” para tudo: “o livro **em** cima da mesa”, “as chaves **na** bolsa”. Em inglês escolha: **on** (superfície) ou **in** (dentro).",
          "title": "PULO DO GATO"
        },
        {
          "t": "image",
          "src": "material/imagens/preposicoes-lugar.svg",
          "alt": "Uma caixa e uma bola mostram in, on, under, next to, behind e in front of.",
          "legenda": "Onde está a bola? Cada preposição responde."
        },
        {"t":"h","n":"3.2","title":"AT HOME, AT WORK, AT SCHOOL"},
        {
          "t": "table",
          "head": ["Expressão","Exemplo"],
          "rows": [
            ["at home","I am at home."],
            ["at work","She is at work."],
            ["at school","The kids are at school."],
            ["in bed","He is in bed."],
            ["on the sofa","I am on the sofa."]
          ],
          "firstCol": true
        },
        {"t":"p","s":"Repare: **at home / at work / at school** não levam “the”. Com “in bed” também não."},
        {
          "t": "errors",
          "items": [
            ["The book is in the table.","The book is on the table."],
            ["I am in home.","I am at home."],
            ["The cat is on the chair. (dentro de uma caixa)","The cat is in the box."],
            ["I am at the work.","I am at work."]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        },
        {"t":"h","n":"3.3","title":"OS MÓVEIS"},
        {
          "t": "ex",
          "id": "m3-s2-ex1",
          "titulo": "3.4 Complete com a preposição",
          "items": [
            {"q":"The book is ___ the table. (em cima)","a":["on"],"why":"Superfície: **on**."},
            {"q":"The keys are ___ my bag. (dentro)","a":["in"],"why":"Dentro de algo: **in**."},
            {"q":"The cat is ___ the chair. (embaixo)","a":["under"],"why":"Embaixo: **under**."},
            {"q":"The lamp is ___ ___ the bed. (ao lado)","a":["next","to"],"why":"Ao lado de: **next to**."},
            {"q":"The TV is ___ ___ the sofa. (na frente)","a":["in","front of"],"why":"Na frente de: **in front of**."}
          ],
          "ref": "3.1"
        },
        {
          "t": "ex",
          "id": "m3-s2-ex2",
          "titulo": "3.5 Escolha a resposta certa",
          "items": [
            {"q":"Look at “My room”. Where is the TV?","opts":["in front of the bed","behind the door"],"a":"in front of the bed","why":"Texto: “The TV is in front of the bed.”"},
            {"q":"Where is the cat?","opts":["under the chair","on the shelf"],"a":"under the chair","why":"Texto: “My cat is under the chair.”"},
            {"q":"I am ___ work now.","opts":["at","in"],"a":"at","why":"“At work” é uma expressão fixa."},
            {"q":"The picture is ___ the wall. (na parede)","opts":["on","in"],"a":"on","why":"Parede é superfície: **on the wall**."}
          ],
          "ref": "3.1"
        },
        {
          "t": "ex",
          "id": "m3-s2-ex3",
          "titulo": "3.6 Escreva em inglês e ouça",
          "items": [
            {"q":"O gato está embaixo da cama.","a":["The cat is under the bed."],"why":"Embaixo = **under**."},
            {"q":"A geladeira fica ao lado da mesa.","a":["The fridge is next to the table."],"why":"Ao lado de = **next to**."},
            {"q":"Estou em casa.","a":["I am at home.","I’m at home."],"why":"Casa como lugar: **at home** (sem “the”)."},
            {"q":"Escreva a frase que você ouviu:","say":"The lamp is on the table.","a":["The lamp is on the table."],"why":"Sobre a mesa = **on**."}
          ],
          "ref": "3.1"
        },
        {"t":"etapa","id":"etapa-4","n":4,"titulo":"Input","min":10,"desc":"Ouça, leia em voz alta e, se houver, assista ao vídeo indicado."},
        {"t":"h","n":"4.1","title":"OUVIR E LER"},
        {
          "t": "reading",
          "titulo": "LEITURA · My room",
          "boxed": true,
          "sents": [
            ["My room is small, but I like it.","Meu quarto é pequeno, mas eu gosto dele."],
            ["There is a bed next to the window.","Há uma cama ao lado da janela."],
            ["There is a lamp on the table, and there are books on the shelf.","Há um abajur sobre a mesa e livros na estante."],
            ["The TV is in front of the bed.","A TV fica na frente da cama."],
            ["My cat is under the chair, and my bag is behind the door.","Meu gato está embaixo da cadeira e minha bolsa está atrás da porta."]
          ],
          "glossario": [["small","pequeno"],["like","gostar"],["cat","gato"]]
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita",
          "frases": [
            ["The book is on the table.","O livro está sobre a mesa."],
            ["The keys are in the bag.","As chaves estão na bolsa."],
            ["The lamp is next to the bed.","O abajur está ao lado da cama."],
            ["I am at home.","Estou em casa."]
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
        {"t":"prod","id":"m3-s2-prod","prompt":"Descreva o seu quarto ou sala com 5 frases: use there is/are e pelo menos 3 preposições diferentes."}
      ],
      "revisao": [
        {
          "t": "table",
          "head": ["Prep.","Uso"],
          "rows": [
            ["in","dentro"],
            ["on","em cima (superfície)"],
            ["under","embaixo"],
            ["next to","ao lado"],
            ["between","entre dois"],
            ["in front of / behind","na frente / atrás"]
          ],
          "firstCol": true
        },
        {"t":"bullets","items":["at home · at work · at school (sem the)","Móveis: sofa, bed, table, chair, shelf, lamp"]},
        {
          "t": "errors",
          "items": [["The book is in the table.","The book is on the table."],["I am in home.","I am at home."]],
          "title": "ERROS COMUNS DE BRASILEIROS"
        }
      ]
    },
    {
      "id": "m3-s3",
      "n": 3,
      "titulo": "Números até 1000 e preços",
      "duracao": 40,
      "resumo": "Números 20–1000, How much is it? e dinheiro; pronúncia -teen e -ty.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "m3-s3-rot",
          "titulo": "40 MIN",
          "rows": [
            [8,"1. Cartões","Palavras 21 a 30 e revisões do dia.","etapa-1"],
            [7,"2. Revisão","Resumo das sessões agendadas e erros do Caderno.","etapa-2"],
            [12,"3. Conteúdo novo","Seções 3.1 a 3.5.","etapa-3"],
            [10,"4. Input","Ouvir e ler em voz alta.","etapa-4"],
            [3,"5. Produção","Escrever com as suas palavras (e pedir correção).","etapa-5"]
          ]
        },
        {"t":"callout","kind":"goal","titulo":"Objetivo da sessão","s":"Contar até **1000**, entender preços e perguntar **How much is it?**."},
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
          "id": "m3-s3-voc",
          "items": [
            [21,"thirty · forty","THÂR-ri · FÓR-ri","trinta · quarenta"],
            [22,"fifty · sixty","FÍF-ti · SÍK-sti","cinquenta · sessenta"],
            [23,"seventy · eighty","SÉ-ven-ti · ÊI-ti","setenta · oitenta"],
            [24,"ninety · a hundred","NÁIN-ti · a RÂN-dred","noventa · cem"],
            [25,"a thousand","a THÁU-zend","mil"],
            [26,"twenty-five","tuén-ti FÁIV","vinte e cinco"],
            [27,"How much is it?","ráu MÂTCH iz it","Quanto custa?"],
            [28,"It is ten dollars.","it iz TÉN DÓ-lerz","Custa dez dólares."],
            [29,"cheap · expensive","TCHÍP · iks-PÉN-siv","barato · caro"],
            [30,"the price","dhe PRÁIS","o preço"]
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
        {"t":"h","n":"3.1","title":"NÚMEROS 20 A 1000"},
        {
          "t": "table",
          "head": ["Número","Inglês","Número","Inglês"],
          "rows": [
            ["20","twenty","60","sixty"],
            ["30","thirty","70","seventy"],
            ["40","forty","80","eighty"],
            ["50","fifty","90","ninety"],
            ["21","twenty-one","100","one hundred"],
            ["35","thirty-five","1,000","one thousand"],
            ["99","ninety-nine","250","two hundred (and) fifty"]
          ],
          "firstCol": true
        },
        {
          "t": "p",
          "s": "Do 21 ao 99, os dois números se ligam com hífen: **twenty-one**, **forty-five**. Em inglês americano, falamos “one hundred twenty-five” (às vezes com “and”)."
        },
        {
          "t": "tip",
          "s": "**-teen** (13–19) tem o acento no **final**: thir-**TEEN**, four-**TEEN**. **-ty** (30–90) tem o acento no **começo**: **THIR**-ty, **FOR**-ty. Ouça a diferença: 13 ≠ 30, 15 ≠ 50.",
          "title": "PULO DO GATO"
        },
        {"t":"h","n":"3.2","title":"PREÇOS E HOW MUCH"},
        {
          "t": "enpt",
          "id": "m3-s3-m3-3.2",
          "en": "To ask the price, we say {y:How much is it?} (one thing) or {y:How much are they?} (two or more). The answer is: It’s ten dollars. / They’re twenty dollars.",
          "pt": "Para perguntar o preço dizemos {y:How much is it?} (uma coisa) ou {y:How much are they?} (várias). Resposta: It’s ten dollars. / They’re twenty dollars."
        },
        {
          "t": "table",
          "head": ["Valor","Como se fala"],
          "rows": [["$5","five dollars"],["$12.50","twelve dollars and fifty cents / twelve fifty"],["R$ 30","thirty reais"],["75¢","seventy-five cents"]],
          "firstCol": true
        },
        {
          "t": "errors",
          "items": [
            ["It is ten dollar.","It is ten dollars."],
            ["How many is it?","How much is it?"],
            ["I am thirty years. (30)","I am thirty years old."],
            ["Fifteen = fifty (confusão)","fifteen (15) ≠ fifty (50)"]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        },
        {"t":"image","src":"material/imagens/precos.svg","alt":"Etiquetas de preço e a pergunta How much is it?","legenda":"Preços: How much is it?"},
        {
          "t": "ex",
          "id": "m3-s3-ex1",
          "titulo": "3.3 Escreva o número por extenso",
          "items": [
            {"q":"45 → ___","a":["forty-five"],"why":"40 = forty (sem u!) + hífen + 5 = **forty-five**."},
            {"q":"80 → ___","a":["eighty"],"why":"**eighty** (um só t)."},
            {"q":"13 → ___","a":["thirteen"],"why":"13 = **thirteen** (acento no final)."},
            {"q":"90 → ___","a":["ninety"],"why":"**ninety** = 90 · **nineteen** = 19."},
            {"q":"100 → ___","a":[["one hundred","a hundred"]],"why":"**one hundred** ou **a hundred**."}
          ],
          "ref": "3.1"
        },
        {
          "t": "ex",
          "id": "m3-s3-ex2",
          "titulo": "3.4 Escolha",
          "items": [
            {"q":"___ is this bag? — It is twenty dollars.","opts":["How much","How many"],"a":"How much","why":"Pergunta de preço: **How much**."},
            {"q":"How much ___ these shoes? — They are sixty dollars.","opts":["is","are"],"a":"are","why":"Shoes é plural: **are**."},
            {"q":"It is ten ___ .","opts":["dollar","dollars"],"a":"dollars","why":"Mais de 1 → plural: **dollars**."},
            {"q":"Which is bigger: 15 or 50?","opts":["fifty","fifteen"],"a":"fifty","why":"**fifty** = 50; **fifteen** = 15."}
          ],
          "ref": "3.2"
        },
        {
          "t": "ex",
          "id": "m3-s3-ex3",
          "titulo": "3.5 Escreva em inglês e ouça",
          "items": [
            {"q":"Quanto custa isto?","a":["How much is this?","How much is it?"],"why":"Preço: **How much is…?**"},
            {"q":"Custa trinta dólares.","a":["It is thirty dollars.","It’s thirty dollars."],"why":"Resposta: **It is** + valor + **dollars**."},
            {"q":"É caro.","a":["It is expensive.","It’s expensive."],"why":"**expensive** = caro."},
            {"q":"Escreva a frase que você ouviu:","say":"How much are those shoes?","a":["How much are those shoes?"],"why":"Plural: **How much are…?**"}
          ],
          "ref": "3.2"
        },
        {"t":"etapa","id":"etapa-4","n":4,"titulo":"Input","min":10,"desc":"Ouça, leia em voz alta e, se houver, assista ao vídeo indicado."},
        {"t":"h","n":"4.1","title":"OUVIR E LER"},
        {
          "t": "example",
          "titulo": "EXEMPLO · Quanto custa?",
          "lines": [
            ["A","Excuse me. How much is this bag?","Com licença. Quanto custa esta bolsa?"],
            ["B","It is forty dollars.","Custa quarenta dólares."],
            ["A","And how much are those shoes?","E quanto custam aqueles sapatos?"],
            ["B","They are sixty-five dollars.","Custam sessenta e cinco dólares."],
            ["A","That is expensive! Do you have a cheap bag?","Que caro! Você tem uma bolsa barata?"],
            ["B","Yes, this one is twenty dollars.","Tenho, esta custa vinte dólares."]
          ]
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita",
          "frases": [
            ["thirteen and thirty","treze e trinta"],
            ["fifteen and fifty","quinze e cinquenta"],
            ["How much is it?","Quanto custa?"],
            ["It is ninety-nine dollars.","Custa noventa e nove dólares."]
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
          "id": "m3-s3-prod",
          "prompt": "Escreva 4 frases com números e preços: a sua idade, o preço de um café, de um celular e de uma pizza (invente, se quiser)."
        }
      ],
      "revisao": [
        {
          "t": "table",
          "head": ["",""],
          "rows": [
            ["20 30 40 50","twenty thirty forty fifty"],
            ["60 70 80 90","sixty seventy eighty ninety"],
            ["100 · 1000","one hundred · one thousand"],
            ["21–99","twenty-one … ninety-nine (hífen)"]
          ],
          "firstCol": true
        },
        {
          "t": "bullets",
          "items": ["-teen = acento no final (13) · -ty = acento no começo (30)","Preço: **How much is it? / How much are they?**","It is ten **dollars** (plural)"]
        },
        {"t":"errors","items":[["How many is it?","How much is it?"],["ten dollar","ten dollars"]],"title":"ERROS COMUNS DE BRASILEIROS"}
      ]
    },
    {
      "id": "m3-s4",
      "n": 4,
      "titulo": "Consolidação e mini-teste",
      "duracao": 40,
      "resumo": "Revisão de there is/are, preposições e números; onde você mora; leitura e mini-teste.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "m3-s4-rot",
          "titulo": "40 MIN",
          "rows": [
            [8,"1. Cartões","Palavras 31 a 40 e revisões do dia.","etapa-1"],
            [7,"2. Revisão","Resumo das sessões agendadas e erros do Caderno.","etapa-2"],
            [12,"3. Conteúdo novo","Seções 3.1 a 3.2.","etapa-3"],
            [10,"4. Input","Ouvir e ler em voz alta; vídeo “Vídeo: Let’s Learn English – Nível 1, lições 10 a 13”.","etapa-4"],
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
          "id": "m3-s4-voc",
          "items": [
            [31,"at home","ét RÔUM","em casa"],
            [32,"at work","ét UÉRK","no trabalho"],
            [33,"at school","ét SKÚL","na escola"],
            [34,"upstairs · downstairs","âp-STÉRZ · dáun-STÉRZ","em cima · embaixo (andar)"],
            [35,"a neighbor","a NÊI-ber","um vizinho"],
            [36,"a neighborhood","a NÊI-ber-rud","um bairro"],
            [37,"a town","a TÁUN","uma cidade pequena"],
            [38,"far from · close to","FÁR frâm · KLÔUS tu","longe de · perto de"],
            [39,"a floor","a FLÓR","um andar / chão"],
            [40,"I live in…","ái LÍV in","Eu moro em…"]
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
            ["There is / are","existência: singular / plural","There is a bed. There are two chairs."],
            ["some / any","some (+) · any (− e ?)","There aren’t any windows."],
            ["Preposições","in · on · under · next to · between · in front of · behind","The lamp is on the table."],
            ["At","at home · at work · at school","I am at home."],
            ["Números","twenty-one … one thousand","How much is it? It’s forty dollars."]
          ],
          "firstCol": true
        },
        {"t":"h","n":"3.2","title":"ONDE VOCÊ MORA"},
        {
          "t": "image",
          "src": "material/imagens/onde-moro.svg",
          "alt": "Cartão com endereço, cidade e país para dizer onde você mora.",
          "legenda": "Dizendo onde você mora."
        },
        {"t":"etapa","id":"etapa-4","n":4,"titulo":"Input","min":10,"desc":"Ouça, leia em voz alta e, se houver, assista ao vídeo indicado."},
        {"t":"h","n":"4.1","title":"OUVIR E LER"},
        {
          "t": "reading",
          "titulo": "LEITURA · My new apartment",
          "boxed": true,
          "sents": [
            ["I live in a new apartment in a quiet neighborhood.","Moro em um apartamento novo em um bairro tranquilo."],
            ["It is on the third floor, and there is a small garage downstairs.","Fica no terceiro andar, e há uma garagem pequena embaixo."],
            ["There are two bedrooms and one bathroom.","Há dois quartos e um banheiro."],
            ["In the living room, there is a sofa in front of the TV.","Na sala, há um sofá na frente da TV."],
            ["My neighbors are nice. The rent is nine hundred dollars.","Meus vizinhos são simpáticos. O aluguel é novecentos dólares."]
          ],
          "glossario": [["quiet","tranquilo"],["rent","aluguel"],["third","terceiro"]]
        },
        {"t":"h","n":"4.2","title":"VÍDEO"},
        {
          "t": "video",
          "id": "m3-s4-vid",
          "titulo": "Vídeo: Let’s Learn English – Nível 1, lições 10 a 13",
          "passos": [
            "Escolha uma lição da sequência (se a lição indicada não existir, siga para a próxima da lista) e assista sem legenda. Dê uma nota de 0 a 10 para o quanto entendeu.",
            "Assista de novo com legenda em inglês.",
            "Anote 3 frases com there is/are, lugares ou preços e repita em voz alta."
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
          "id": "m3-s4-t1",
          "titulo": "A. Complete",
          "teste": true,
          "items": [
            {"q":"There ___ two beds in the room."},
            {"q":"___ there a garage? (pergunta)"},
            {"q":"There aren’t ___ chairs. (some/any)"},
            {"q":"The cat is ___ the table. (embaixo)"},
            {"q":"I am ___ home. (em casa)"},
            {"q":"How ___ is this bag? (preço)"}
          ]
        },
        {
          "t": "ex",
          "id": "m3-s4-t2",
          "titulo": "B. Traduza para o inglês",
          "teste": true,
          "items": [{"q":"Há um sofá na sala."},{"q":"O livro está sobre a mesa."},{"q":"Não há jardim."},{"q":"Quanto custam estes sapatos?"}]
        },
        {
          "t": "ex",
          "id": "m3-s4-t3",
          "titulo": "C. Vocabulário: escreva em inglês",
          "teste": true,
          "items": [{"q":"cozinha"},{"q":"geladeira"},{"q":"sessenta"},{"q":"barato"},{"q":"vizinho"}]
        },
        {"t":"h","n":"5.2","title":"PRODUÇÃO DO MÓDULO"},
        {"t":"prod","id":"m3-s4-prod","prompt":"Descreva a sua casa em 6 frases (there is/are, preposições e um preço). Guarde o texto para o relatório."},
        {"t":"h","n":"5.3","title":"RELATÓRIO PARA A IA"},
        {"t":"report","titulo":"Enviar para a IA"}
      ],
      "revisao": [
        {
          "t": "table",
          "head": ["Tópico","Lembrete"],
          "rows": [
            ["There is / are","singular / plural · some / any"],
            ["Lugar","in on under next to between in front of behind"],
            ["At","at home / work / school"],
            ["Preço","How much is it? · It’s … dollars"]
          ],
          "firstCol": true
        },
        {"t":"bullets","items":["Vocabulário final: neighbor, neighborhood, floor, upstairs, downstairs"]}
      ]
    }
  ],
  "gloss": "kitchen=cozinha;bedroom=quarto;bathroom=banheiro;garden=jardim;garage=garagem;room=cômodo;sofa=sofá;bed=cama;table=mesa;chair=cadeira;shelf=estante;lamp=abajur;fridge=geladeira;mirror=espelho;carpet=tapete;window=janela;door=porta;wall=parede;under=embaixo;behind=atrás;between=entre;near=perto;cat=gato;quiet=tranquilo;rent=aluguel;third=terceiro;cheap=barato;expensive=caro;price=preço;dollars=dólares;neighbor=vizinho;neighborhood=bairro;floor=andar;upstairs=em cima;downstairs=embaixo;shoes=sapatos;small=pequeno;like=gostar;look=olhar;twenty-five=vinte e cinco"
});
