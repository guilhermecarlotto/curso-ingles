// MATERIAL DO CURSO — módulo 4: Habilidades, ordens e gostos
// Só conteúdo (sem código do site). Regras e formato em LEIA-ME.md. Salve em UTF-8.
(window.CURSO_MODULOS = window.CURSO_MODULOS || []).push({
  "id": "m4",
  "n": 4,
  "titulo": "Habilidades, ordens e gostos",
  "descricao": "Dizer o que você sabe fazer, dar instruções, falar de gostos e das horas. Fecha a Fase 1 (A1).",
  "fase": "Fase 1 · Fundação (A1)",
  "faseId": "f1",
  "icone": "🎯",
  "cor": "violet",
  "objetivos": [
    "Usar can / can’t para habilidades, pedidos e permissão",
    "Dar instruções com o imperativo e sugerir com let’s",
    "Usar pronomes objeto e dizer o que gosta de fazer",
    "Dizer e perguntar as horas"
  ],
  "anki": {
    "deck": "Inglês::Módulo 04"
  },
  "sessoes": [
    {
      "id": "m4-s1",
      "n": 1,
      "titulo": "Can / can’t",
      "duracao": 40,
      "resumo": "Dizer o que você consegue (ou não) fazer; pedir permissão e favores; verbos de habilidade.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "m4-s1-rot",
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
          "s": "Falar do que você **pode / sabe fazer** com **can** e **can’t**, e fazer pedidos simples."
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
          "id": "m4-s1-voc",
          "items": [
            [1,"swim","SUÍM","nadar"],
            [2,"drive a car","DRÁIV a KÁR","dirigir um carro"],
            [3,"cook","KÚK","cozinhar"],
            [4,"sing","SÍNG","cantar"],
            [5,"dance","DÉNS","dançar"],
            [6,"play the guitar","PLÊI dhe gui-TÁR","tocar violão"],
            [7,"ride a bike","RÁID a BÁIK","andar de bicicleta"],
            [8,"speak English","SPÍK ÍN-glish","falar inglês"],
            [9,"write an email","RÁIT an Í-mêil","escrever um e-mail"],
            [10,"help","RÉLP","ajudar"]
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
        {"t":"h","n":"3.1","title":"CAN E CAN’T"},
        {
          "t": "enpt",
          "id": "m4-s1-m4-1.1",
          "en": "{y:Can} shows ability: I can swim. It is the same for all people: I can, you can, he can, she can. After can, we use the {b:base verb}: she can swim (not “she cans swims”).",
          "pt": "{y:Can} mostra habilidade: I can swim. É igual para todas as pessoas: I can, you can, he can, she can. Depois de can usamos o {b:verbo base}: she can swim (nunca “she cans swims”)."
        },
        {
          "t": "table",
          "head": ["Tipo","Estrutura","Exemplo"],
          "rows": [
            ["Afirmativa","sujeito + can + verbo","I can cook."],
            ["Negativa","sujeito + can’t + verbo","She can’t drive."],
            ["Pergunta","Can + sujeito + verbo?","Can you swim?"],
            ["Resposta curta","Yes, I can. / No, I can’t.","Yes, he can. / No, they can’t."]
          ],
          "firstCol": true
        },
        {
          "t": "tip",
          "s": "**Can** não leva -s (she **can**), não usa **do/does** na pergunta (**Can** you…?) e não leva **to** depois (I can **swim**, não “I can to swim”). A forma negativa é **can’t** ou **cannot** (uma palavra só).",
          "title": "PULO DO GATO"
        },
        {
          "t": "image",
          "src": "material/imagens/can-cant.svg",
          "alt": "Uma pessoa nadando (I can swim) e outra tentando voar (I can’t fly).",
          "legenda": "Can: consigo. Can’t: não consigo."
        },
        {"t":"h","n":"3.2","title":"PEDIDOS E PERMISSÃO"},
        {
          "t": "table",
          "head": ["Para…","Pergunta","Resposta"],
          "rows": [
            ["pedir ajuda","Can you help me?","Sure! / Sorry, I can’t."],
            ["pedir permissão","Can I open the window?","Yes, you can. / No, you can’t."],
            ["pedir algo","Can I have some water?","Of course."],
            ["pedir para repetir","Can you repeat, please?","Yes, of course."]
          ],
          "firstCol": true
        },
        {
          "t": "errors",
          "items": [
            ["She cans swim.","She can swim."],
            ["I can to cook.","I can cook."],
            ["Do you can drive?","Can you drive?"],
            ["He can swimming.","He can swim."],
            ["I can’t not speak French.","I can’t speak French."]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        },
        {"t":"h","n":"3.3","title":"VERBOS DE HABILIDADE"},
        {
          "t": "ex",
          "id": "m4-s1-ex1",
          "titulo": "3.4 Complete com can ou can’t",
          "items": [
            {"q":"I ___ swim. (consigo)","a":["can"],"why":"Habilidade positiva: **can**."},
            {"q":"She ___ drive. (não sabe)","a":[["can’t","cannot","can not"]],"why":"Negativa: **can’t** ou **cannot**."},
            {"q":"___ you cook? — Yes, I can.","a":["Can"],"why":"Pergunta: **Can** + sujeito + verbo."},
            {"q":"He ___ sing. (consegue)","a":["can"],"why":"He **can**: sem -s."},
            {"q":"They ___ speak French. (não falam)","a":[["can’t","cannot","can not"]],"why":"Negativa: **can’t**."}
          ],
          "ref": "3.1"
        },
        {
          "t": "ex",
          "id": "m4-s1-ex2",
          "titulo": "3.5 Escolha a forma certa",
          "items": [
            {"q":"She ___ play the guitar.","opts":["can","cans"],"a":"can","why":"**Can** nunca leva -s."},
            {"q":"___ you help me?","opts":["Do","Can"],"a":"Can","why":"Pedido com **Can you…?** (sem do)."},
            {"q":"I can ___ English.","opts":["speak","to speak"],"a":"speak","why":"Depois de can: verbo base, sem **to**."},
            {"q":"Can he swim? — No, he ___ .","opts":["can’t","doesn’t"],"a":"can’t","why":"Resposta curta repete o **can**: No, he **can’t**."}
          ],
          "ref": "3.1"
        },
        {
          "t": "ex",
          "id": "m4-s1-ex3",
          "titulo": "3.6 Escreva em inglês e ouça",
          "items": [
            {"q":"Eu sei cozinhar.","a":["I can cook."],"why":"**I can** + verbo base."},
            {"q":"Ela não sabe nadar.","a":["She can’t swim.","She cannot swim."],"why":"Negativa: **can’t** + verbo."},
            {"q":"Você pode me ajudar?","a":["Can you help me?"],"why":"Pedido: **Can you…?**"},
            {"q":"Escreva a frase que você ouviu:","say":"Can I open the window?","a":["Can I open the window?"],"why":"Permissão: **Can I…?**"}
          ],
          "ref": "3.1"
        },
        {"t":"etapa","id":"etapa-4","n":4,"titulo":"Input","min":10,"desc":"Ouça, leia em voz alta e, se houver, assista ao vídeo indicado."},
        {"t":"h","n":"4.1","title":"OUVIR E LER"},
        {
          "t": "example",
          "titulo": "EXEMPLO · Entrevista",
          "lines": [
            ["A","Can you speak English?","Você fala inglês?"],
            ["B","Yes, I can, but only a little.","Falo, mas só um pouco."],
            ["A","Can you drive a car?","Você dirige?"],
            ["B","Yes, I can. And I can ride a bike too.","Sim. E também sei andar de bicicleta."],
            ["A","Can you cook?","Você cozinha?"],
            ["B","No, I can’t. But I can help in the kitchen.","Não. Mas posso ajudar na cozinha."]
          ]
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita",
          "frases": [
            ["I can swim.","Eu sei nadar."],
            ["She can’t drive.","Ela não sabe dirigir."],
            ["Can you help me?","Você pode me ajudar?"],
            ["Can I open the window?","Posso abrir a janela?"]
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
        {"t":"prod","id":"m4-s1-prod","prompt":"Escreva 5 frases: 3 coisas que você sabe fazer (I can…) e 2 que não sabe (I can’t…)."}
      ],
      "revisao": [
        {
          "t": "table",
          "head": ["","Estrutura"],
          "rows": [["+","I can swim."],["−","She can’t swim."],["?","Can you swim? — Yes, I can. / No, I can’t."]],
          "firstCol": true
        },
        {"t":"bullets","items":["**Can** é igual para todos: sem -s, sem do/does, sem to","Pedidos: **Can you help me? · Can I open the window?**"]},
        {"t":"errors","items":[["She cans swim.","She can swim."],["Do you can drive?","Can you drive?"]],"title":"ERROS COMUNS DE BRASILEIROS"}
      ]
    },
    {
      "id": "m4-s2",
      "n": 2,
      "titulo": "Imperativo e Let’s",
      "duracao": 40,
      "resumo": "Dar ordens, instruções e sugestões: open, don’t…, please, let’s; placas e avisos.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "m4-s2-rot",
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
          "s": "Dar **instruções e sugestões**: imperativo, **don’t**, **please** e **let’s**; ler placas."
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
          "id": "m4-s2-voc",
          "items": [
            [11,"open · close","ÔU-pen · KLÔUZ","abrir · fechar"],
            [12,"listen","LÍ-sen","ouvir"],
            [13,"look at","LÚK ét","olhar para"],
            [14,"wait","UÊIT","esperar"],
            [15,"sit down","SÍT DÁUN","sentar"],
            [16,"stand up","STÉND ÂP","levantar"],
            [17,"come in","KÂM ÍN","entrar"],
            [18,"turn on · turn off","TÉRN ÓN · TÉRN ÓF","ligar · desligar"],
            [19,"be careful","BI KÉR-fol","ter cuidado"],
            [20,"please","PLÍZ","por favor"]
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
        {"t":"h","n":"3.1","title":"O IMPERATIVO"},
        {
          "t": "enpt",
          "id": "m4-s2-m4-2.1",
          "en": "To give an order or an instruction, use the {y:base verb} without a subject: Open the door. For a negative order, use {y:Don’t} + verb: Don’t run. Add {y:please} to be polite.",
          "pt": "Para dar ordens ou instruções, use o {y:verbo base} sem sujeito: Open the door. Na negativa, use {y:Don’t} + verbo: Don’t run. Acrescente {y:please} para ser educado."
        },
        {
          "t": "table",
          "head": ["Tipo","Estrutura","Exemplo"],
          "rows": [
            ["Afirmativo","verbo","Sit down. · Open your book."],
            ["Negativo","Don’t + verbo","Don’t talk. · Don’t be late."],
            ["Educado","Please + verbo / verbo + please","Please wait. · Wait, please."],
            ["Sugestão","Let’s + verbo","Let’s go! · Let’s eat."]
          ],
          "firstCol": true
        },
        {
          "t": "tip",
          "s": "No imperativo **não há sujeito**: “Open the door” (e não “You open the door”). E o **Let’s** (= let us) quer dizer “vamos”: **Let’s** + verbo base. Negativa: **Let’s not** go.",
          "title": "PULO DO GATO"
        },
        {"t":"h","n":"3.2","title":"PLACAS E AVISOS"},
        {
          "t": "table",
          "head": ["Placa","Português"],
          "rows": [
            ["Exit","Saída"],
            ["Push · Pull","Empurre · Puxe"],
            ["No parking","Proibido estacionar"],
            ["Don’t touch","Não toque"],
            ["Keep quiet","Mantenha silêncio"],
            ["Wet floor","Piso molhado"],
            ["Be careful","Tenha cuidado"]
          ],
          "firstCol": true
        },
        {
          "t": "errors",
          "items": [
            ["Not open the door.","Don’t open the door."],
            ["You open the window, please. (ordem)","Open the window, please."],
            ["Don’t to run.","Don’t run."],
            ["Let’s to go.","Let’s go."],
            ["No talk, please.","Don’t talk, please."]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        },
        {
          "t": "image",
          "src": "material/imagens/placas.svg",
          "alt": "Quatro placas: Stop, Don’t park here, Keep right e Turn off your phone.",
          "legenda": "O imperativo nas placas do dia a dia."
        },
        {"t":"h","n":"3.3","title":"VERBOS DE COMANDO"},
        {
          "t": "ex",
          "id": "m4-s2-ex1",
          "titulo": "3.4 Complete o imperativo",
          "items": [
            {"q":"___ the door, please. (abra)","a":["Open"],"why":"Imperativo: verbo base, sem sujeito."},
            {"q":"___ run in the hall! (não corra)","a":[["Don’t","Do not"]],"why":"Negativa: **Don’t** + verbo."},
            {"q":"___ go to the park! (vamos)","a":[["Let’s","Let us"]],"why":"Sugestão: **Let’s** + verbo."},
            {"q":"___ careful! (cuidado)","a":["Be"],"why":"Com adjetivo: **Be** careful."},
            {"q":"Please ___ here. (espere)","a":["wait"],"why":"**Please** + verbo base."}
          ],
          "ref": "3.1"
        },
        {
          "t": "ex",
          "id": "m4-s2-ex2",
          "titulo": "3.5 Escolha a forma certa",
          "items": [
            {"q":"___ talk in the library.","opts":["Not","Don’t"],"a":"Don’t","why":"Ordem negativa: **Don’t**."},
            {"q":"Let’s ___ to the park.","opts":["go","to go"],"a":"go","why":"Depois de let’s: verbo base."},
            {"q":"What does “Push” mean?","opts":["puxe","empurre"],"a":"empurre","why":"**Push** = empurre; **pull** = puxe."},
            {"q":"The sign says “No parking”. You can…","opts":["park here","not park here"],"a":"not park here","why":"**No parking** = proibido estacionar."}
          ],
          "ref": "3.1"
        },
        {
          "t": "ex",
          "id": "m4-s2-ex3",
          "titulo": "3.6 Escreva em inglês e ouça",
          "items": [
            {"q":"Sente-se, por favor.","a":["Sit down, please.","Please sit down."],"why":"Imperativo + **please**."},
            {"q":"Não toque.","a":["Don’t touch.","Do not touch."],"why":"Negativa: **Don’t** + verbo."},
            {"q":"Vamos comer!","a":["Let’s eat!","Let’s eat."],"why":"**Let’s** + verbo base."},
            {"q":"Escreva a frase que você ouviu:","say":"Turn off your phone, please.","a":["Turn off your phone, please.","Please turn off your phone."],"why":"Ordem educada: verbo + **please**."}
          ],
          "ref": "3.1"
        },
        {"t":"etapa","id":"etapa-4","n":4,"titulo":"Input","min":10,"desc":"Ouça, leia em voz alta e, se houver, assista ao vídeo indicado."},
        {"t":"h","n":"4.1","title":"OUVIR E LER"},
        {
          "t": "example",
          "titulo": "EXEMPLO · Na sala de aula",
          "lines": [
            ["A","Good morning! Come in and sit down, please.","Bom dia! Entrem e sentem-se, por favor."],
            ["B","Can I open the window?","Posso abrir a janela?"],
            ["A","Yes, you can. But don’t open the door.","Pode. Mas não abra a porta."],
            ["A","Now, open your books and listen.","Agora abram seus livros e ouçam."],
            ["B","Let’s start!","Vamos começar!"]
          ]
        },
        {
          "t": "reading",
          "titulo": "LEITURA · Na entrada do prédio",
          "boxed": true,
          "sents": [
            ["Welcome! Please wait here.","Bem-vindo! Aguarde aqui, por favor."],
            ["Don’t park in front of the door.","Não estacione na frente da porta."],
            ["Turn off your phone in the library.","Desligue o celular na biblioteca."],
            ["Be careful: the floor is wet.","Cuidado: o piso está molhado."],
            ["Push the door to go out.","Empurre a porta para sair."]
          ],
          "glossario": [["welcome","bem-vindo"],["library","biblioteca"],["floor","piso / chão"]]
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita",
          "frases": [["Open the door, please.","Abra a porta, por favor."],["Don’t talk.","Não converse."],["Let’s go!","Vamos!"],["Be careful!","Tenha cuidado!"]]
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
        {"t":"prod","id":"m4-s2-prod","prompt":"Escreva 5 regras da sua casa ou do seu trabalho usando imperativo e Don’t (ex.: Don’t be late)."}
      ],
      "revisao": [
        {
          "t": "table",
          "head": ["Tipo","Exemplo"],
          "rows": [["+","Open the door."],["−","Don’t run."],["educado","Please wait. / Wait, please."],["sugestão","Let’s go!"]],
          "firstCol": true
        },
        {"t":"bullets","items":["Sem sujeito: **Open**, não “You open”","Placas: Exit · Push · Pull · No parking · Wet floor"]},
        {"t":"errors","items":[["Not open the door.","Don’t open the door."],["Let’s to go.","Let’s go."]],"title":"ERROS COMUNS DE BRASILEIROS"}
      ]
    },
    {
      "id": "m4-s3",
      "n": 3,
      "titulo": "Pronomes objeto e gostos",
      "duracao": 40,
      "resumo": "me, you, him, her, it, us, them; like / love / hate + substantivo ou -ing; hobbies.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "m4-s3-rot",
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
          "s": "Falar de **gostos** (like, love, hate) e usar os **pronomes objeto**: me, you, him, her, it, us, them."
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
          "id": "m4-s3-voc",
          "items": [
            [21,"listen to music","LÍ-sen tu MIÚ-zik","ouvir música"],
            [22,"watch movies","UÓTCH MÚ-viz","assistir a filmes"],
            [23,"play soccer","PLÊI SÓ-ker","jogar futebol"],
            [24,"go shopping","GÔU SHÓ-ping","fazer compras"],
            [25,"travel","TRÉ-vol","viajar"],
            [26,"read books","RÍD BÚKS","ler livros"],
            [27,"a hobby","a RÓ-bi","um hobby"],
            [28,"free time","FRÍ TÁIM","tempo livre"],
            [29,"I love it!","ái LÂV it","Eu adoro!"],
            [30,"I hate it.","ái RÊIT it","Eu odeio."]
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
        {"t":"h","n":"3.1","title":"PRONOMES OBJETO"},
        {
          "t": "enpt",
          "id": "m4-s3-m4-3.1",
          "en": "After a verb or a preposition, we use {y:object pronouns}: Call {y:me}. I like {y:her}. Look at {y:them}.",
          "pt": "Depois de um verbo ou de uma preposição, usamos os {y:pronomes objeto}: Call {y:me}. I like {y:her}. Look at {y:them}."
        },
        {
          "t": "table",
          "head": ["Sujeito","Objeto","Exemplo"],
          "rows": [
            ["I","{y:me}","Help me, please."],
            ["you","{y:you}","I love you."],
            ["he","{y:him}","I know him."],
            ["she","{y:her}","Call her now."],
            ["it","{y:it}","I like it."],
            ["we","{y:us}","She helps us."],
            ["they","{y:them}","Look at them."]
          ],
          "firstCol": true
        },
        {
          "t": "tip",
          "s": "**You** e **it** não mudam. E atenção a **her**: pode ser **objeto** (“I know her” = conheço ela) ou **possessivo** (“her bag” = bolsa dela).",
          "title": "PULO DO GATO"
        },
        {"t":"h","n":"3.2","title":"LIKE, LOVE, HATE"},
        {
          "t": "enpt",
          "id": "m4-s3-m4-3.2",
          "en": "To talk about what we like, use {y:like / love / hate} + a noun or the {y:-ing} form: I like music. I love cooking. She doesn’t like running. Remember: he/she/it → likes.",
          "pt": "Para falar do que gostamos, use {y:like / love / hate} + substantivo ou verbo com {y:-ing}: I like music. I love cooking. She doesn’t like running. Lembre: he/she/it → likes."
        },
        {
          "t": "table",
          "head": ["Gosto","Frase"],
          "rows": [
            ["love (adoro)","I love coffee."],
            ["like (gosto)","He likes playing soccer."],
            ["don’t like (não gosto)","We don’t like cold weather."],
            ["hate (odeio)","She hates waiting."]
          ],
          "firstCol": true
        },
        {
          "t": "errors",
          "items": [
            ["I like she.","I like her."],
            ["Help I, please.","Help me, please."],
            ["She like music.","She likes music."],
            ["I no like coffee.","I don’t like coffee."],
            ["I like play soccer.","I like playing soccer."]
          ],
          "title": "ERROS COMUNS DE BRASILEIROS"
        },
        {
          "t": "image",
          "src": "material/imagens/gostos.svg",
          "alt": "Quatro carinhas: hate, don’t like, like e love.",
          "legenda": "De hate a love: quatro níveis de gosto."
        },
        {"t":"h","n":"3.3","title":"TEMPO LIVRE"},
        {
          "t": "ex",
          "id": "m4-s3-ex1",
          "titulo": "3.4 Troque pelo pronome objeto",
          "items": [
            {"q":"I know Paul. I like ___ . (him/her)","a":["him"],"why":"Paul = he → objeto **him**."},
            {"q":"Maria is my friend. I call ___ every day.","a":["her"],"why":"Maria = she → objeto **her**."},
            {"q":"My parents are nice. I love ___ .","a":["them"],"why":"Parents = they → objeto **them**."},
            {"q":"Please help ___ . (eu)","a":["me"],"why":"I → objeto **me**."},
            {"q":"John and I are late. Wait for ___ .","a":["us"],"why":"We → objeto **us**."}
          ],
          "ref": "3.1"
        },
        {
          "t": "ex",
          "id": "m4-s3-ex2",
          "titulo": "3.5 Escolha a forma certa",
          "items": [
            {"q":"She ___ music.","opts":["like","likes"],"a":"likes","why":"She → **likes** (com -s)."},
            {"q":"I love ___ .","opts":["cook","cooking"],"a":"cooking","why":"Depois de love: **-ing** ou substantivo."},
            {"q":"He ___ like coffee.","opts":["don’t","doesn’t"],"a":"doesn’t","why":"He → **doesn’t**."},
            {"q":"Look at ___ . (os livros)","opts":["they","them"],"a":"them","why":"Depois de preposição: **them**."}
          ],
          "ref": "3.2"
        },
        {
          "t": "ex",
          "id": "m4-s3-ex3",
          "titulo": "3.6 Escreva em inglês e ouça",
          "items": [
            {"q":"Eu gosto dela.","a":["I like her."],"why":"Objeto de she: **her**."},
            {"q":"Ele adora cozinhar.","a":["He loves cooking.","He loves to cook."],"why":"He → **loves** + -ing."},
            {"q":"Nós não gostamos de esperar.","a":["We don’t like waiting.","We do not like waiting.","We don’t like to wait."],"why":"Negativa: **don’t like** + -ing."},
            {"q":"Escreva a frase que você ouviu:","say":"I love listening to music.","a":["I love listening to music."],"why":"**love** + verbo com **-ing**."}
          ],
          "ref": "3.2"
        },
        {"t":"etapa","id":"etapa-4","n":4,"titulo":"Input","min":10,"desc":"Ouça, leia em voz alta e, se houver, assista ao vídeo indicado."},
        {"t":"h","n":"4.1","title":"OUVIR E LER"},
        {
          "t": "reading",
          "titulo": "LEITURA · Meu tempo livre",
          "boxed": true,
          "sents": [
            ["I have a lot of free time on weekends.","Tenho muito tempo livre nos fins de semana."],
            ["I love listening to music and I like watching movies.","Adoro ouvir música e gosto de assistir a filmes."],
            ["My brother plays soccer. I don’t play, but I like watching him.","Meu irmão joga futebol. Eu não jogo, mas gosto de assisti-lo."],
            ["My parents love traveling. I call them every Sunday.","Meus pais adoram viajar. Ligo para eles todo domingo."],
            ["I hate cleaning the house, but I do it.","Eu odeio limpar a casa, mas faço isso."]
          ],
          "glossario": [["weekend","fim de semana"],["clean","limpar"],["call","ligar"]]
        },
        {
          "t": "listen",
          "titulo": "Ouça e repita",
          "frases": [
            ["I like her.","Eu gosto dela."],
            ["She helps us.","Ela nos ajuda."],
            ["I love listening to music.","Eu adoro ouvir música."],
            ["He doesn’t like cooking.","Ele não gosta de cozinhar."]
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
        {"t":"prod","id":"m4-s3-prod","prompt":"Escreva 5 frases sobre o que você ama, gosta e odeia fazer no tempo livre."}
      ],
      "revisao": [
        {
          "t": "table",
          "head": ["Sujeito","Objeto"],
          "rows": [["I","me"],["you","you"],["he","him"],["she","her"],["it","it"],["we","us"],["they","them"]],
          "firstCol": true
        },
        {"t":"bullets","items":["like / love / hate + substantivo ou **-ing**","he/she/it → **likes** · negativa: **doesn’t like**"]},
        {"t":"errors","items":[["I like she.","I like her."],["I no like coffee.","I don’t like coffee."]],"title":"ERROS COMUNS DE BRASILEIROS"}
      ]
    },
    {
      "id": "m4-s4",
      "n": 4,
      "titulo": "Horas, consolidação e Marco A1",
      "duracao": 40,
      "resumo": "Dizer as horas; revisão do módulo e de toda a Fase 1; mini-teste.",
      "blocos": [
        {
          "t": "roteiro",
          "id": "m4-s4-rot",
          "titulo": "40 MIN",
          "rows": [
            [8,"1. Cartões","Palavras 31 a 40 e revisões do dia.","etapa-1"],
            [7,"2. Revisão","Resumo das sessões agendadas e erros do Caderno.","etapa-2"],
            [12,"3. Conteúdo novo","Seções 3.1 a 3.2.","etapa-3"],
            [10,"4. Input","Ouvir e ler em voz alta; vídeo “Vídeo: Let’s Learn English – Nível 1, lições 14 a 17”.","etapa-4"],
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
          "id": "m4-s4-voc",
          "items": [
            [31,"What time is it?","UÓT TÁIM iz it","Que horas são?"],
            [32,"o’clock","a-KLÓK","em ponto"],
            [33,"half past","RÉF PÉST","e meia"],
            [34,"a quarter to / past","a KUÓR-ter tu / PÉST","quinze para / depois"],
            [35,"noon · midnight","NÚN · MÍD-náit","meio-dia · meia-noite"],
            [36,"early · late","ÉR-li · LÊIT","cedo · tarde"],
            [37,"on time","ón TÁIM","na hora / pontual"],
            [38,"a.m. · p.m.","êi ÉM · pi ÉM","da manhã · da tarde"],
            [39,"a minute","a MÍ-nit","um minuto"],
            [40,"an hour","an Á-uer","uma hora"]
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
        {"t":"h","n":"3.1","title":"AS HORAS"},
        {
          "t": "enpt",
          "id": "m4-s4-m4-4.1",
          "en": "To ask the time, say {y:What time is it?} To answer, say {y:It’s} + the time: It’s half past six. We say {y:at} + time for events: The class is at eight.",
          "pt": "Para perguntar as horas diga {y:What time is it?}. Para responder, {y:It’s} + a hora: It’s half past six. Para eventos usamos {y:at} + hora: The class is at eight."
        },
        {
          "t": "table",
          "head": ["Hora","Como se fala"],
          "rows": [
            ["7:00","It’s seven o’clock."],
            ["7:15","It’s a quarter past seven. (seven fifteen)"],
            ["7:30","It’s half past seven. (seven thirty)"],
            ["7:45","It’s a quarter to eight. (seven forty-five)"],
            ["7:10","It’s ten past seven."],
            ["7:50","It’s ten to eight."],
            ["12:00","It’s noon. · It’s midnight."]
          ],
          "firstCol": true
        },
        {
          "t": "tip",
          "s": "**a.m.** = da manhã (de meia-noite ao meio-dia) · **p.m.** = da tarde/noite. “Seven p.m.” = 19h. No dia a dia as pessoas dizem simplesmente “seven thirty”.",
          "title": "PULO DO GATO"
        },
        {
          "t": "image",
          "src": "material/imagens/horas.svg",
          "alt": "Quatro relógios: 3:00, 3:15, 3:30 e 3:45 com a frase de cada um.",
          "legenda": "As horas em inglês."
        },
        {"t":"h","n":"3.2","title":"RESUMO DA FASE 1"},
        {
          "t": "table",
          "head": ["Módulo","Você já sabe…"],
          "rows": [
            ["1","to be · Present Simple · a/an · frequência · at/on/in"],
            ["2","plural · this/that/these/those · possessivos · ’s · cores · 1–20"],
            ["3","there is/are · preposições de lugar · casa · 20–1000 · preços"],
            ["4","can/can’t · imperativo · pronomes objeto · like/love · horas"]
          ],
          "firstCol": true
        },
        {
          "t": "callout",
          "kind": "ok",
          "titulo": "Marco da Fase 1 (A1)",
          "s": "Ao terminar este módulo você completa a **Fase 1 · Fundação (A1)**: já fala de você, rotina, família, casa, preços, habilidades e gostos. Marque os critérios da fase na página **Plano de estudos**.",
          "icone": "🏁"
        },
        {"t":"etapa","id":"etapa-4","n":4,"titulo":"Input","min":10,"desc":"Ouça, leia em voz alta e, se houver, assista ao vídeo indicado."},
        {"t":"h","n":"4.1","title":"OUVIR E LER"},
        {
          "t": "reading",
          "titulo": "LEITURA · A day at the park",
          "boxed": true,
          "sents": [
            ["It is half past eight on Saturday.","São oito e meia de sábado."],
            ["Ana and her brother are at the park. There are many people here.","Ana e o irmão estão no parque. Há muitas pessoas aqui."],
            ["Ana can ride a bike, but her brother can’t.","Ana sabe andar de bicicleta, mas o irmão não."],
            ["“Let’s help him!” says Ana. “Don’t be afraid. I can help you.”","“Vamos ajudá-lo!”, diz Ana. “Não tenha medo. Eu posso ajudar você.”"],
            ["At noon they eat sandwiches. They love it!","Ao meio-dia eles comem sanduíches. Eles adoram!"]
          ],
          "glossario": [["many","muitos"],["afraid","com medo"],["sandwich","sanduíche"]]
        },
        {"t":"h","n":"4.2","title":"VÍDEO"},
        {
          "t": "video",
          "id": "m4-s4-vid",
          "licoes": [
            {"titulo":"Level 1 · Lição 14: How About This?","url":"https://learningenglish.voanews.com/a/5780974.html","embed":"https://learningenglish.voanews.com/embed/player/article/5780974.html"},
            {"titulo":"Level 1 · Lição 15: I Love People Watching!","url":"https://learningenglish.voanews.com/a/5780968.html","embed":"https://learningenglish.voanews.com/embed/player/article/5780968.html"},
            {"titulo":"Level 1 · Lição 16: Where Are You From?","url":"https://learningenglish.voanews.com/a/5780964.html","embed":"https://learningenglish.voanews.com/embed/player/article/5780964.html"},
            {"titulo":"Level 1 · Lição 17: Are You Free on Friday?","url":"https://learningenglish.voanews.com/a/5780966.html","embed":"https://learningenglish.voanews.com/embed/player/article/5780966.html"}
          ],
          "titulo": "Vídeo: Let’s Learn English – Nível 1, lições 14 a 17",
          "passos": [
            "Escolha uma das lições abaixo (toque no título para assistir aqui mesmo) e assista sem legenda. Dê uma nota de 0 a 10 para o quanto entendeu.",
            "Assista de novo com legenda em inglês.",
            "Anote 3 frases com can, imperativo ou horas e repita em voz alta."
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
          "id": "m4-s4-t1",
          "titulo": "A. Complete",
          "teste": true,
          "items": [
            {"q":"She ___ swim. (não sabe)"},
            {"q":"___ you help me? (pedido)"},
            {"q":"___ run in the hall! (não corra)"},
            {"q":"I love Maria. I call ___ every day."},
            {"q":"He ___ soccer. (gostar: he)"},
            {"q":"It is half ___ six. (6:30)"}
          ]
        },
        {
          "t": "ex",
          "id": "m4-s4-t2",
          "titulo": "B. Traduza para o inglês",
          "teste": true,
          "items": [{"q":"Ela sabe cozinhar."},{"q":"Vamos para o parque!"},{"q":"Eu gosto de ouvir música."},{"q":"São sete e quinze."}]
        },
        {
          "t": "ex",
          "id": "m4-s4-t3",
          "titulo": "C. Vocabulário: escreva em inglês",
          "teste": true,
          "items": [{"q":"nadar"},{"q":"ligar (aparelho)"},{"q":"tempo livre"},{"q":"cedo"},{"q":"meia-noite"}]
        },
        {"t":"h","n":"5.2","title":"PRODUÇÃO DO MÓDULO"},
        {
          "t": "prod",
          "id": "m4-s4-prod",
          "prompt": "Escreva um parágrafo de 6 frases sobre você: quem é, onde mora, o que sabe fazer, o que gosta de fazer e a que horas acorda. É o seu fechamento da Fase 1."
        },
        {"t":"h","n":"5.3","title":"RELATÓRIO PARA A IA"},
        {"t":"report","titulo":"Enviar para a IA"}
      ],
      "revisao": [
        {
          "t": "table",
          "head": ["Hora","Fala"],
          "rows": [["7:00","seven o’clock"],["7:15","a quarter past seven"],["7:30","half past seven"],["7:45","a quarter to eight"]],
          "firstCol": true
        },
        {
          "t": "bullets",
          "items": ["What time is it? → It’s … · evento: **at** + hora","Fase 1 completa: to be, Present Simple, plural, there is/are, can, imperativo, pronomes objeto"]
        }
      ]
    }
  ],
  "gloss": "swim=nadar;cook=cozinhar;sing=cantar;dance=dançar;help=ajudar;open=abrir;close=fechar;listen=ouvir;wait=esperar;careful=cuidadoso;welcome=bem-vindo;library=biblioteca;floor=piso;park=parque;soccer=futebol;travel=viajar;hobby=hobby;movies=filmes;music=música;clean=limpar;call=ligar;weekend=fim de semana;sandwich=sanduíche;many=muitos;afraid=com medo;early=cedo;late=tarde;noon=meio-dia;midnight=meia-noite;minute=minuto;hour=hora;quiet=quieto;door=porta;window=janela;touch=tocar;parents=pais;please=por favor;o’clock=em ponto"
});
