// CENÁRIOS DO JOGO 🎮 — "Lugares e situações" (restaurante, aeroporto, hospital...)
// Vocabulário e frases de sobrevivência, em inglês americano, para começar a ter repertório simples.
// Cada item: [inglês, pronúncia aproximada (sílaba tônica em MAIÚSCULAS), português, figurinha opcional]
//   - Use " · " ou " / " no inglês só se for um item "composto" (ele vira só pergunta de tradução/parear).
//   - Sem contrações com apóstrofo (escreva "I am", não "I'm") e sem dados pessoais.
// Para criar um cenário novo, copie um bloco e troque o "id" (sem espaços, único). Formato completo em LEIA-ME.md.
window.CURSO_CENARIOS = [
  {
    id: 'restaurante', icone: '🍽️', cor: 'coral', titulo: 'No restaurante',
    desc: 'Pedir uma mesa, o cardápio, a comida e a conta',
    itens: [
      ['a table', 'a TÊI-bol', 'uma mesa', '🍽️'],
      ['the menu', 'da MÉ-niu', 'o cardápio', '📋'],
      ['a waiter', 'a UÊI-ter', 'um garçom', '🤵'],
      ['water', 'UÓ-ter', 'água', '💧'],
      ['a drink', 'a DRÍNK', 'uma bebida', '🥤'],
      ['chicken', 'TCHÍ-kin', 'frango', '🍗'],
      ['rice', 'RÁIS', 'arroz', '🍚'],
      ['the bill', 'da BÍL', 'a conta', '🧾'],
      ['A table for two, please.', 'a TÊI-bol for TÚ, plíz', 'Uma mesa para dois, por favor.'],
      ['Can I see the menu?', 'kén ái SÍ da MÉ-niu', 'Posso ver o cardápio?'],
      ['I would like water.', 'ái uud LÁIK UÓ-ter', 'Eu gostaria de água.'],
      ['What do you recommend?', 'uát du iu rê-ko-MÉND', 'O que você recomenda?'],
      ['Is this vegetarian?', 'iz DHÍS vé-dji-TÉ-ri-an', 'Isto é vegetariano?'],
      ['It is delicious!', 'it iz di-LÍ-shes', 'Está delicioso!'],
      ['The bill, please.', 'da BÍL, plíz', 'A conta, por favor.']
    ]
  },
  {
    id: 'cafe', icone: '☕', cor: 'amber', titulo: 'Café e lanchonete',
    desc: 'Pedir um café, um lanche e pagar',
    itens: [
      ['coffee', 'KÓ-fi', 'café', '☕'],
      ['tea', 'TÍ', 'chá', '🍵'],
      ['milk', 'MÍLK', 'leite', '🥛'],
      ['sugar', 'SHÚ-gar', 'açúcar', '🍬'],
      ['a sandwich', 'a SÉN-uitch', 'um sanduíche', '🥪'],
      ['a cookie', 'a KÚ-ki', 'um biscoito', '🍪'],
      ['juice', 'DJÚS', 'suco', '🧃'],
      ['A large coffee, please.', 'a LÁRDJ KÓ-fi, plíz', 'Um café grande, por favor.'],
      ['With milk, please.', 'uídh MÍLK, plíz', 'Com leite, por favor.'],
      ['No sugar, thanks.', 'NÔU SHÚ-gar, thénks', 'Sem açúcar, obrigado.'],
      ['For here or to go?', 'for RÍR or tu GÔU', 'Para comer aqui ou para levar?'],
      ['To go, please.', 'tu GÔU, plíz', 'Para levar, por favor.'],
      ['How much is it?', 'ráu mâtch iz IT', 'Quanto custa?'],
      ['Can I pay by card?', 'kén ái PÊI bai KÁRD', 'Posso pagar com cartão?']
    ]
  },
  {
    id: 'aeroporto', icone: '✈️', cor: 'blue', titulo: 'No aeroporto',
    desc: 'Passaporte, embarque, malas e voos',
    itens: [
      ['a passport', 'a PÉS-port', 'um passaporte', '🛂'],
      ['a ticket', 'a TÍ-kit', 'uma passagem / um bilhete', '🎫'],
      ['a suitcase', 'a SÚT-kêis', 'uma mala', '🧳'],
      ['a flight', 'a FLÁIT', 'um voo', '✈️'],
      ['the gate', 'da GÊIT', 'o portão de embarque', '🚪'],
      ['boarding pass', 'BÓR-din PÉS', 'cartão de embarque'],
      ['security', 'si-KIÚ-ri-ti', 'controle de segurança', '🛃'],
      ['delayed', 'di-LÊID', 'atrasado', '⏰'],
      ['Here is my passport.', 'RÍR iz mái PÉS-port', 'Aqui está o meu passaporte.'],
      ['I have one bag.', 'ái HÉV uân BÉG', 'Eu tenho uma mala.'],
      ['Where is the gate?', 'uér iz da GÊIT', 'Onde fica o portão de embarque?'],
      ['What time is boarding?', 'uát TÁIM iz BÓR-din', 'Que horas é o embarque?'],
      ['My flight is delayed.', 'mái FLÁIT iz di-LÊID', 'O meu voo está atrasado.'],
      ['Where is the bathroom?', 'uér iz da BÉTH-rum', 'Onde fica o banheiro?']
    ]
  },
  {
    id: 'hotel', icone: '🏨', cor: 'violet', titulo: 'No hotel',
    desc: 'Reserva, quarto, café da manhã e pequenos problemas',
    itens: [
      ['a room', 'a RÚM', 'um quarto', '🛏️'],
      ['a key', 'a KÍ', 'uma chave', '🔑'],
      ['a towel', 'a TÁU-el', 'uma toalha'],
      ['breakfast', 'BRÉK-fast', 'café da manhã', '🥐'],
      ['a reservation', 'a rê-zer-VÊI-shan', 'uma reserva'],
      ['a shower', 'a SHÁU-er', 'um chuveiro', '🚿'],
      ['I have a reservation.', 'ái HÉV a rê-zer-VÊI-shan', 'Eu tenho uma reserva.'],
      ['Do you have a room?', 'du iu HÉV a RÚM', 'Vocês têm um quarto?'],
      ['What time is breakfast?', 'uát TÁIM iz BRÉK-fast', 'Que horas é o café da manhã?'],
      ['What is the Wi-Fi password?', 'uát iz da UÁI-fái PÉS-uérd', 'Qual é a senha do Wi-Fi?'],
      ['I need more towels.', 'ái NÍD mór TÁU-els', 'Eu preciso de mais toalhas.'],
      ['The shower does not work.', 'da SHÁU-er dâz nót UÉRK', 'O chuveiro não funciona.'],
      ['Can I have the key, please?', 'kén ái HÉV da KÍ, plíz', 'Pode me dar a chave, por favor?']
    ]
  },
  {
    id: 'saude', icone: '🏥', cor: 'rose', titulo: 'Hospital e farmácia',
    desc: 'Pedir ajuda, dizer onde dói e comprar remédio',
    itens: [
      ['a doctor', 'a DÓK-ter', 'um médico', '🧑‍⚕️'],
      ['a nurse', 'a NÉRS', 'uma enfermeira / um enfermeiro'],
      ['medicine', 'MÉ-di-sin', 'remédio', '💊'],
      ['a headache', 'a HÉD-êik', 'uma dor de cabeça'],
      ['a fever', 'a FÍ-ver', 'uma febre', '🤒'],
      ['pain', 'PÊIN', 'dor'],
      ['an ambulance', 'an ÉM-biu-lans', 'uma ambulância', '🚑'],
      ['allergic', 'a-LÉR-djik', 'alérgico'],
      ['I need a doctor.', 'ái NÍD a DÓK-ter', 'Eu preciso de um médico.'],
      ['It hurts here.', 'it HÉRTS RÍR', 'Dói aqui.'],
      ['I have a headache.', 'ái HÉV a HÉD-êik', 'Estou com dor de cabeça.'],
      ['I do not feel well.', 'ái DU nót FÍL UÉL', 'Não estou me sentindo bem.'],
      ['Call an ambulance!', 'KÓL an ÉM-biu-lans', 'Chame uma ambulância!'],
      ['Where is the pharmacy?', 'uér iz da FÁR-ma-si', 'Onde fica a farmácia?'],
      ['I am allergic to penicillin.', 'ái ém a-LÉR-djik tu pê-ni-SÍ-lin', 'Sou alérgico a penicilina.']
    ]
  },
  {
    id: 'mercado', icone: '🛒', cor: 'green', titulo: 'No supermercado',
    desc: 'Encontrar produtos, perguntar preços e passar no caixa',
    itens: [
      ['a cart', 'a KÁRT', 'um carrinho', '🛒'],
      ['bread', 'BRÉD', 'pão', '🍞'],
      ['eggs', 'ÉGZ', 'ovos', '🥚'],
      ['cheese', 'TCHÍZ', 'queijo', '🧀'],
      ['fruit', 'FRÚT', 'frutas', '🍎'],
      ['vegetables', 'VÉDJ-ta-bols', 'legumes e verduras', '🥦'],
      ['meat', 'MÍT', 'carne', '🥩'],
      ['a bag', 'a BÉG', 'uma sacola', '🛍️'],
      ['the cashier', 'da ké-SHÍR', 'o caixa (a pessoa)'],
      ['Where is the milk?', 'uér iz da MÍLK', 'Onde está o leite?'],
      ['How much is this?', 'ráu mâtch iz DHÍS', 'Quanto custa isto?'],
      ['Do you have bread?', 'du iu HÉV BRÉD', 'Vocês têm pão?'],
      ['I need a bag, please.', 'ái NÍD a BÉG, plíz', 'Preciso de uma sacola, por favor.'],
      ['Cash or card?', 'KÉSH or KÁRD', 'Dinheiro ou cartão?']
    ]
  },
  {
    id: 'roupas', icone: '👕', cor: 'teal', titulo: 'Loja de roupas',
    desc: 'Tamanhos, provador, desconto e compra',
    itens: [
      ['a shirt', 'a SHÉRT', 'uma camisa', '👕'],
      ['pants', 'PÉNTS', 'calça', '👖'],
      ['shoes', 'SHÚZ', 'sapatos', '👟'],
      ['a dress', 'a DRÉS', 'um vestido', '👗'],
      ['a jacket', 'a DJÉ-kit', 'uma jaqueta', '🧥'],
      ['size', 'SÁIZ', 'tamanho'],
      ['the fitting room', 'da FÍ-tin RÚM', 'o provador'],
      ['a discount', 'a DÍS-kaunt', 'um desconto'],
      ['Can I try it on?', 'kén ái TRÁI it ÓN', 'Posso experimentar?'],
      ['What size is this?', 'uát SÁIZ iz DHÍS', 'Que tamanho é este?'],
      ['Do you have a bigger size?', 'du iu HÉV a BÍ-ger SÁIZ', 'Vocês têm um tamanho maior?'],
      ['It is too small.', 'it iz TÚ SMÓL', 'Está pequeno demais.'],
      ['I will take it.', 'ái uíl TÊIK it', 'Eu vou levar.'],
      ['Is there a discount?', 'iz DHÉR a DÍS-kaunt', 'Tem desconto?']
    ]
  },
  {
    id: 'transporte', icone: '🚕', cor: 'blue', titulo: 'Rua e transporte',
    desc: 'Perguntar o caminho, pegar ônibus, metrô e táxi',
    itens: [
      ['a bus', 'a BÂS', 'um ônibus', '🚌'],
      ['a taxi', 'a TÉK-si', 'um táxi', '🚕'],
      ['a subway', 'a SÂB-uêi', 'um metrô', '🚇'],
      ['a map', 'a MÉP', 'um mapa', '🗺️'],
      ['a street', 'a STRÍT', 'uma rua', '🛣️'],
      ['left', 'LÉFT', 'esquerda'],
      ['right', 'RÁIT', 'direita'],
      ['Turn left.', 'TÉRN LÉFT', 'Vire à esquerda.'],
      ['Turn right.', 'TÉRN RÁIT', 'Vire à direita.'],
      ['Go straight.', 'GÔU STRÊIT', 'Siga em frente.'],
      ['Where is the bus stop?', 'uér iz da BÂS STÓP', 'Onde fica o ponto de ônibus?'],
      ['How do I get to the station?', 'ráu du ái GÉT tu da STÊI-shan', 'Como eu chego à estação?'],
      ['Is it far?', 'iz it FÁR', 'É longe?'],
      ['Stop here, please.', 'STÓP RÍR, plíz', 'Pare aqui, por favor.'],
      ['How much is the ticket?', 'ráu mâtch iz da TÍ-kit', 'Quanto custa a passagem?']
    ]
  },
  {
    id: 'turismo', icone: '📸', cor: 'violet', titulo: 'Passeio e turismo',
    desc: 'Museus, praia, fotos, passeios e lembrancinhas',
    itens: [
      ['a museum', 'a miu-ZÍ-am', 'um museu', '🏛️'],
      ['a beach', 'a BÍTCH', 'uma praia', '🏖️'],
      ['a photo', 'a FÔU-tou', 'uma foto', '📷'],
      ['a tour', 'a TÚR', 'um passeio guiado'],
      ['a guide', 'a GÁID', 'um guia'],
      ['a souvenir', 'a su-ve-NÍR', 'uma lembrancinha', '🎁'],
      ['open', 'ÔU-pen', 'aberto'],
      ['closed', 'KLÔUZD', 'fechado'],
      ['Can you take a photo?', 'kén iu TÊIK a FÔU-tou', 'Você pode tirar uma foto?'],
      ['What time does it open?', 'uát TÁIM dâz it ÔU-pen', 'A que horas abre?'],
      ['How much is the tour?', 'ráu mâtch iz da TÚR', 'Quanto custa o passeio?'],
      ['Is it open today?', 'iz it ÔU-pen tu-DÊI', 'Está aberto hoje?'],
      ['It is beautiful!', 'it iz BIÚ-ti-ful', 'É lindo!'],
      ['Where can I buy a souvenir?', 'uér kén ái BÁI a su-ve-NÍR', 'Onde posso comprar uma lembrancinha?'],
      ['I am lost.', 'ái ém LÓST', 'Estou perdido.']
    ]
  },
  {
    id: 'trabalho', icone: '💼', cor: 'amber', titulo: 'No trabalho',
    desc: 'Reunião, e-mail, colegas e prazos',
    itens: [
      ['an office', 'an Ó-fis', 'um escritório', '🏢'],
      ['a meeting', 'a MÍ-tin', 'uma reunião'],
      ['a computer', 'a kam-PIÚ-ter', 'um computador', '💻'],
      ['an email', 'an Í-mêil', 'um e-mail', '📧'],
      ['a boss', 'a BÓS', 'um chefe'],
      ['a colleague', 'a KÓ-lig', 'um colega de trabalho'],
      ['a deadline', 'a DÉD-láin', 'um prazo', '📅'],
      ['I have a meeting at ten.', 'ái HÉV a MÍ-tin ét TÉN', 'Tenho uma reunião às dez.'],
      ['Can you send me an email?', 'kén iu SÉND mi an Í-mêil', 'Você pode me enviar um e-mail?'],
      ['I am busy right now.', 'ái ém BÍ-zi RÁIT NÁU', 'Estou ocupado agora.'],
      ['Let us start.', 'LÉT âs STÁRT', 'Vamos começar.'],
      ['I work from home.', 'ái UÉRK from HÔUM', 'Eu trabalho de casa.'],
      ['Thank you for your help.', 'THÉNK iu for iór HÉLP', 'Obrigado pela sua ajuda.'],
      ['See you tomorrow.', 'SÍ iu tu-MÁ-rou', 'Até amanhã.']
    ]
  },
  {
    id: 'casa', icone: '🏠', cor: 'green', titulo: 'Em casa',
    desc: 'Cômodos, objetos e o dia a dia com visitas',
    itens: [
      ['a kitchen', 'a KÍ-tchen', 'uma cozinha', '🍳'],
      ['a bedroom', 'a BÉD-rum', 'um quarto', '🛏️'],
      ['a bathroom', 'a BÉTH-rum', 'um banheiro', '🚽'],
      ['a living room', 'a LÍ-vin RÚM', 'uma sala de estar', '🛋️'],
      ['a door', 'a DÓR', 'uma porta', '🚪'],
      ['a window', 'a UÍN-dou', 'uma janela', '🪟'],
      ['dinner', 'DÍ-ner', 'jantar', '🍽️'],
      ['Please come in.', 'plíz KÂM ÍN', 'Entre, por favor.'],
      ['Make yourself at home.', 'MÊIK ior-SÉLF ét HÔUM', 'Fique à vontade.'],
      ['Open the window, please.', 'ÔU-pen da UÍN-dou, plíz', 'Abra a janela, por favor.'],
      ['Turn off the light.', 'TÉRN ÓF da LÁIT', 'Apague a luz.'],
      ['Dinner is ready.', 'DÍ-ner iz RÉ-di', 'O jantar está pronto.'],
      ['I am at home.', 'ái ém ét HÔUM', 'Estou em casa.'],
      ['I am tired.', 'ái ém TÁI-erd', 'Estou cansado.']
    ]
  },
  {
    id: 'dinheiro', icone: '💳', cor: 'teal', titulo: 'Banco e dinheiro',
    desc: 'Preços, cartão, troco e caixa eletrônico',
    itens: [
      ['money', 'MÂ-ni', 'dinheiro', '💵'],
      ['cash', 'KÉSH', 'dinheiro em espécie'],
      ['a card', 'a KÁRD', 'um cartão', '💳'],
      ['an ATM', 'an êi-tí-ÉM', 'um caixa eletrônico', '🏧'],
      ['change', 'TCHÊINDJ', 'troco'],
      ['a receipt', 'a ri-SÍT', 'um recibo / uma nota', '🧾'],
      ['a price', 'a PRÁIS', 'um preço', '🏷️'],
      ['expensive', 'ik-SPÉN-siv', 'caro'],
      ['cheap', 'TCHÍP', 'barato'],
      ['How much does it cost?', 'ráu mâtch dâz it KÓST', 'Quanto custa?'],
      ['It is too expensive.', 'it iz TÚ ik-SPÉN-siv', 'É caro demais.'],
      ['Do you take credit cards?', 'du iu TÊIK KRÉ-dit KÁRDZ', 'Vocês aceitam cartão de crédito?'],
      ['Can I have a receipt?', 'kén ái HÉV a ri-SÍT', 'Posso ter o recibo?'],
      ['Keep the change.', 'KÍP da TCHÊINDJ', 'Pode ficar com o troco.'],
      ['Where is the ATM?', 'uér iz di êi-tí-ÉM', 'Onde fica o caixa eletrônico?']
    ]
  }
];
