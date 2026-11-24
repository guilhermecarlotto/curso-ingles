// MATERIAL DO CURSO — dados gerais e plano de estudos
// Só conteúdo (sem código do site). Regras e formato em LEIA-ME.md. Salve em UTF-8.
window.CURSO = {
  "curso": {
    "id": "ingles-do-zero",
    "titulo": "My English School",
    "subtitulo": "do A1 ao A2",
    "versao": "v2 · Módulos 1–9",
    "descricao": "Do zero ao A2 em 9 módulos de 2 semanas (≈ 18 semanas, 5 sessões de 40 minutos por semana), com sessões guiadas, sessões de prática e revisão espaçada com cartões próprios (sem precisar do Anki).",
    "anki": {
      "deck": "Inglês",
      "tag": "curso",
      "selecionadas": "Inglês::Selecionadas"
    },
    "videoUrl": "https://learningenglish.voanews.com/p/6064.html"
  },
  "plano": {
    "objetivo": "Chegar ao nível **A2** (QECR): entender e usar frases do cotidiano sobre você, a família, a rotina, o trabalho, compras e lugares, e manter conversas simples e diretas.",
    "perfil": [
      ["Ponto de partida","Iniciante absoluto (A1)."],
      ["Meta","Nível A2 do QECR, em 9 módulos de 2 semanas (Fase 1 · A1: módulos 1–4; Fase 2 · A2: módulos 5–9). Concluir o curso leva cerca de 18 semanas (4 a 5 meses)."],
      ["Rotina","40 minutos por dia, 5 dias por semana: 10 sessões por módulo (4 guiadas e 6 de prática)."],
      [
        "Vocabulário ativo",
        "360 palavras e expressões trabalhadas com os cartões do curso (40 por módulo), além de centenas de palavras de apoio em frases e leituras."
      ],
      ["Gramática","No máximo 2 tópicos novos por semana."]
    ],
    "metodo": [
      ["Explicação em 2 passos","primeiro a caixa em inglês simples, depois a explicação em português."],
      ["Sem tradutor automático","a tradução vem embutida, em camadas: dica → frase inteira."],
      ["Todo erro tem um porquê","cada correção explica a regra e o erro entra no Caderno de erros até você corrigi-lo."],
      ["“Não sei” vale","é melhor dizer “não sei” do que chutar: ela mostra o que precisa ser revisto."],
      ["Revisão espaçada","o que você viu volta em 1, 7 e 30 dias (Revisão programada)."]
    ],
    "sessao": [
      [8,"Cartões","Abra a janela de cartões pelo botão desta etapa: novos (10 por sessão) e vencidos."],
      [7,"Revisão programada","Feita dentro da própria sessão: resumo das sessões agendadas (D+1, D+7, D+30) e Caderno de erros."],
      [12,"Conteúdo novo","Seções 3.x: explicação, exemplos e exercícios."],
      [10,"Input","Seções 4.x: ouvir e ler em voz alta e vídeo indicado."],
      [3,"Produção","Escrever frases suas com o que aprendeu."]
    ],
    "pratica": {
      "intro": "As sessões de prática (rótulo “Prática”) não trazem conteúdo novo: servem para fixar o que você acabou de ver. Duram 40 minutos e têm 4 blocos.",
      "blocos": [
        ["Cartões e revisão",10,"Revisão dos cartões vencidos (sem cartões novos) e um resumo do que você viu nas sessões anteriores."],
        ["Exercícios",15,"Exercícios sobre os assuntos já estudados, com correção e explicação do erro."],
        ["Ouvir e ler",10,"Ouvir e ler textos e frases curtas em voz alta, com palavras já conhecidas."],
        ["Escrever",5,"Escrever frases suas e fazer um ditado curto."]
      ]
    },
    "pilulas": [
      "**Pulo do gato:** dicas de um minuto para destravar erros típicos de brasileiros.",
      "**Erros comuns:** frases erradas ao lado da forma certa.",
      "**Ouça e repita:** frases com áudio e destaque da palavra que está sendo falada."
    ],
    "ciclo": {
      "intro": "Cada módulo dura 2 semanas: 10 sessões de 40 minutos, sendo 4 guiadas (conteúdo novo) e 6 de prática (sem conteúdo novo: cartões, revisão, exercícios, leitura, áudio e escrita sobre o que você já viu).",
      "passos": [
        "Sessões guiadas: conteúdo novo (gramática, vocabulário e exercícios).",
        "Sessões de prática: aparecem entre as guiadas, fixam o que acabou de ser visto e não trazem assunto novo.",
        "Última sessão guiada: consolidação, mini-teste (sem gabarito no app) e relatório.",
        "Ao terminar, envie o relatório para a IA corrigir o mini-teste e ajustar o próximo módulo."
      ]
    },
    "fases": [
      {
        "id": "f1",
        "n": 1,
        "nome": "Fundação",
        "nivel": "A1",
        "cor": "teal",
        "descricao": "Apresentar-se, falar da rotina e da família, descrever coisas, lugares e quantidades. Base do verbo to be, Present Simple, plural, possessivos, there is/are, can e imperativo.",
        "criterio": "Faço frases completas com to be, Present Simple e can sem consultar; entendo diálogos curtos e lentos de apresentação e rotina; acerto pelo menos 80% do mini-teste de cada módulo; escrevo (ditado) frases simples com poucos erros.",
        "modulos": ["m1","m2","m3","m4"],
        "marco": "m4-s4"
      },
      {
        "id": "f2",
        "n": 2,
        "nome": "Base",
        "nivel": "A2",
        "cor": "coral",
        "descricao": "Falar do passado e do futuro próximo, comparar, pedir coisas, dar direções, fazer compras e planos. Passado simples, going to, contáveis e comparativos.",
        "criterio": "Conto o que fiz ontem e o que vou fazer; peço, compro e pergunto direções em situações do dia a dia; leio textos curtos (80–120 palavras) com ajuda mínima; escrevo um parágrafo de 8 a 10 frases sobre mim.",
        "modulos": ["m5","m6","m7","m8","m9"],
        "marco": "m9-s4"
      },
      {
        "id": "f3",
        "n": 3,
        "nome": "Ponte",
        "nivel": "B1",
        "cor": "blue",
        "descricao": "Tempos compostos, experiências, opiniões e conversação mais livre. Conteúdo futuro.",
        "criterio": "A definir quando o conteúdo da fase existir.",
        "modulos": [],
        "marco": null
      },
      {
        "id": "f4",
        "n": 4,
        "nome": "Autonomia",
        "nivel": "B2",
        "cor": "violet",
        "descricao": "Argumentar, ler e ouvir conteúdo real com autonomia. Conteúdo futuro.",
        "criterio": "A definir quando o conteúdo da fase existir.",
        "modulos": [],
        "marco": null
      }
    ],
    "recursos": [
      [
        "Let’s Learn English (VOA)",
        "https://learningenglish.voanews.com/p/6064.html",
        "Fase 1–2",
        "Vídeos de aula lentos, com legenda; usados na etapa de Input."
      ],
      ["VOA Learning English","https://learningenglish.voanews.com/","Fase 2–3","Notícias em inglês simplificado, com áudio."],
      ["BBC Learning English","https://www.bbc.co.uk/learningenglish","Fase 2–3","Lições curtas de vocabulário e conversação."],
      [
        "Anki (opcional)",
        "https://apps.ankiweb.net/",
        "Todas",
        "Não é necessário: o curso tem cartões próprios. Se preferir o Anki, exporte o arquivo de cada módulo."
      ]
    ],
    "nota": "Tempo realista: o curso completo soma cerca de 60 horas de estudo guiado (90 sessões de 40 minutos, em 18 semanas). Isso leva a um A2 inicial. Um A2 sólido costuma pedir de 100 a 200 horas de contato com o idioma, então use o tempo livre para ouvir, ler e assistir em inglês (vídeos da VOA, séries com legenda em inglês). As Fases 3 e 4 ainda não têm conteúdo neste material. O vocabulário trabalhado ativamente é de 360 itens (muitos são frases-chave); chegar a 1.200 palavras ativas exige a próxima fase."
  }
};
