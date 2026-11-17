// MATERIAL DO CURSO · diálogos da área "Conversar" (um por cenário de cenarios.js).
// Formato de cada turno:  n = fala do personagem (inglês) · np = tradução · r = respostas aceitas (a 1ª é a resposta-modelo)
//                         rp = a resposta-modelo em português (aparece como dica quando você escreve em inglês) · x = respostas erradas (opções do modo "escolher")
// "npc" e "eu" dizem quem é quem (usado também no prompt para o ChatGPT). Salve em UTF-8. Inglês americano.
window.CURSO_DIALOGOS = [
  { id: 'restaurante', cen: 'restaurante', titulo: 'Pedindo uma refeição', icone: '🍽️', cor: 'coral', nivel: 'A1', npc: 'um garçom', eu: 'um cliente', turnos: [
    { n: 'Hi! Welcome. Table for one?', np: 'Oi! Bem-vindo. Mesa para um?', r: ['Yes, please.', 'Yes, a table for one, please.'], rp: 'Sim, por favor.', x: ['My name is Tom.', 'No, I like chicken.'] },
    { n: 'Here is the menu. What would you like to drink?', np: 'Aqui está o cardápio. O que você gostaria de beber?', r: ['Water, please.', 'I would like water, please.'], rp: 'Água, por favor.', x: ['I am from Brazil.', 'It is on the table.'] },
    { n: 'And to eat?', np: 'E para comer?', r: ['I would like the chicken, please.', 'I would like chicken, please.'], rp: 'Eu gostaria do frango, por favor.', x: ['I like Mondays.', 'Yes, I have a car.'] },
    { n: 'Anything else?', np: 'Mais alguma coisa?', r: ['No, thank you. The check, please.', 'No, thank you.'], rp: 'Não, obrigado. A conta, por favor.', x: ['Yes, I am twenty.', 'It is five o’clock.'] }
  ] },
  { id: 'cafe', cen: 'cafe', titulo: 'Pedindo um café', icone: '☕', cor: 'amber', nivel: 'A1', npc: 'um atendente de cafeteria', eu: 'um cliente', turnos: [
    { n: 'Good morning! What can I get you?', np: 'Bom dia! O que posso trazer para você?', r: ['A coffee, please.', 'I would like a coffee, please.'], rp: 'Um café, por favor.', x: ['I am fine, thanks.', 'It is Monday.'] },
    { n: 'Small, medium, or large?', np: 'Pequeno, médio ou grande?', r: ['Medium, please.', 'A medium, please.'], rp: 'Médio, por favor.', x: ['Two dollars.', 'Yes, please.'] },
    { n: 'For here or to go?', np: 'Para tomar aqui ou para levar?', r: ['To go, please.', 'For here, please.'], rp: 'Para levar, por favor.', x: ['I am a student.', 'Thank you, goodbye.'] },
    { n: 'That is three dollars and fifty cents.', np: 'São três dólares e cinquenta centavos.', r: ['Here you go.', 'Here you are.'], rp: 'Aqui está.', x: ['You are welcome.', 'I would like a tea.'] }
  ] },
  { id: 'aeroporto', cen: 'aeroporto', titulo: 'Na imigração', icone: '✈️', cor: 'blue', nivel: 'A1', npc: 'um agente de imigração', eu: 'um viajante', turnos: [
    { n: 'Hello. Passport, please.', np: 'Olá. Passaporte, por favor.', r: ['Here you go.', 'Here is my passport.'], rp: 'Aqui está.', x: ['I am hungry.', 'It is a nice day.'] },
    { n: 'Where are you going?', np: 'Para onde você vai?', r: ['I am going to New York.', 'I am going to Miami.'], rp: 'Eu vou para Nova York.', x: ['I am a doctor.', 'It is my bag.'] },
    { n: 'How long will you stay?', np: 'Quanto tempo você vai ficar?', r: ['I will stay for one week.', 'I am staying for one week.', 'One week.'], rp: 'Vou ficar uma semana.', x: ['I have two bags.', 'I am from Brazil.'] },
    { n: 'Do you have anything to declare?', np: 'Você tem algo a declarar?', r: ['No, nothing.', 'No, I do not.'], rp: 'Não, nada.', x: ['Yes, I like it.', 'It is on the left.'] }
  ] },
  { id: 'hotel', cen: 'hotel', titulo: 'Fazendo o check-in', icone: '🏨', cor: 'violet', nivel: 'A1', npc: 'uma recepcionista de hotel', eu: 'um hóspede', turnos: [
    { n: 'Good evening. Do you have a reservation?', np: 'Boa noite. Você tem uma reserva?', r: ['Yes, I do.', 'Yes, I have a reservation.'], rp: 'Sim, eu tenho.', x: ['I am fine, thanks.', 'No, I am a teacher.'] },
    { n: 'For how many nights?', np: 'Por quantas noites?', r: ['For three nights.', 'Three nights.'], rp: 'Por três noites.', x: ['It is three dollars.', 'I have a room.'] },
    { n: 'Here is your key. Your room is 305.', np: 'Aqui está a sua chave. Seu quarto é o 305.', r: ['Thank you. What time is breakfast?', 'Thank you.'], rp: 'Obrigado. A que horas é o café da manhã?', x: ['I like the menu.', 'Where is the airport?'] },
    { n: 'Breakfast is from seven to ten.', np: 'O café da manhã é das sete às dez.', r: ['Great, thank you.', 'Great. Thank you very much.'], rp: 'Ótimo, obrigado.', x: ['I am twenty years old.', 'The check, please.'] }
  ] },
  { id: 'saude', cen: 'saude', titulo: 'No médico', icone: '🏥', cor: 'rose', nivel: 'A2', npc: 'um médico', eu: 'um paciente', turnos: [
    { n: 'Hello. What is the problem?', np: 'Olá. Qual é o problema?', r: ['I have a headache.', 'I have a bad headache.'], rp: 'Estou com dor de cabeça.', x: ['I have a new car.', 'I am at the bank.'] },
    { n: 'When did it start?', np: 'Quando começou?', r: ['It started yesterday.', 'Yesterday.'], rp: 'Começou ontem.', x: ['It is Tuesday at five.', 'I like pizza.'] },
    { n: 'Do you have a fever?', np: 'Você está com febre?', r: ['No, I do not.', 'No, I do not have a fever.'], rp: 'Não, não tenho.', x: ['Yes, I am a doctor.', 'My hands are cold.'] },
    { n: 'Take this medicine twice a day, after meals.', np: 'Tome este remédio duas vezes por dia, depois das refeições.', r: ['Twice a day. Okay, thank you.', 'Okay, thank you, doctor.'], rp: 'Duas vezes por dia. Certo, obrigado.', x: ['I am twice a day.', 'Where is the menu?'] }
  ] },
  { id: 'mercado', cen: 'mercado', titulo: 'Fazendo compras', icone: '🛒', cor: 'green', nivel: 'A1', npc: 'um funcionário de supermercado', eu: 'um cliente', turnos: [
    { n: 'Hi! Can I help you find something?', np: 'Oi! Posso ajudar a encontrar alguma coisa?', r: ['Yes, where is the milk?', 'Yes, please. Where is the milk?'], rp: 'Sim, onde está o leite?', x: ['No, I am a cashier.', 'It is eight o’clock.'] },
    { n: 'The milk is in aisle five, on the right.', np: 'O leite está no corredor cinco, à direita.', r: ['Thank you. How much is the bread?', 'Thank you.'], rp: 'Obrigado. Quanto custa o pão?', x: ['It is on the right.', 'I am five years old.'] },
    { n: 'The bread is two dollars.', np: 'O pão custa dois dólares.', r: ['I will take it.', 'I will take two, please.'], rp: 'Eu vou levar.', x: ['I have a dollar.', 'Where is the bus?'] },
    { n: 'Cash or card?', np: 'Dinheiro ou cartão?', r: ['Card, please.', 'By card, please.'], rp: 'Cartão, por favor.', x: ['Two dollars.', 'Yes, I am hungry.'] }
  ] },
  { id: 'roupas', cen: 'roupas', titulo: 'Comprando roupa', icone: '👕', cor: 'teal', nivel: 'A1', npc: 'um vendedor de loja de roupas', eu: 'um cliente', turnos: [
    { n: 'Hello! Are you looking for something?', np: 'Olá! Você está procurando alguma coisa?', r: ['Yes, I am looking for a jacket.', 'I am looking for a jacket.'], rp: 'Sim, estou procurando uma jaqueta.', x: ['No, I am at home.', 'I am a jacket.'] },
    { n: 'What size are you?', np: 'Qual é o seu tamanho?', r: ['I am a medium.', 'Medium.'], rp: 'Eu uso M.', x: ['It is blue.', 'I am from Brazil.'] },
    { n: 'How about this one? It is on sale.', np: 'E esta? Está em promoção.', r: ['I like it. Can I try it on?', 'Can I try it on?'], rp: 'Gostei. Posso experimentar?', x: ['I can swim.', 'It is my brother.'] },
    { n: 'Sure! The fitting room is over there.', np: 'Claro! O provador fica ali.', r: ['Thank you very much.', 'Thanks!'], rp: 'Muito obrigado.', x: ['I am fine, and you?', 'Turn left.'] }
  ] },
  { id: 'transporte', cen: 'transporte', titulo: 'Pedindo direções', icone: '🚕', cor: 'blue', nivel: 'A2', npc: 'um morador local', eu: 'um turista perdido', turnos: [
    { n: 'Hi! You look lost. Can I help?', np: 'Oi! Você parece perdido. Posso ajudar?', r: ['Yes, please. Where is the subway station?', 'Yes, where is the subway station?'], rp: 'Sim, por favor. Onde fica a estação de metrô?', x: ['No, I do not like trains.', 'I am twenty minutes.'] },
    { n: 'Go straight and turn left at the bank.', np: 'Siga em frente e vire à esquerda no banco.', r: ['Is it far from here?', 'Is it far?'], rp: 'É longe daqui?', x: ['I turn the bank.', 'It is a red bus.'] },
    { n: 'No, it is five minutes on foot.', np: 'Não, são cinco minutos a pé.', r: ['Great, thank you!', 'Great, thanks!'], rp: 'Ótimo, obrigado!', x: ['It is a big city.', 'I live on foot.'] },
    { n: 'You are welcome. Have a nice day!', np: 'De nada. Tenha um bom dia!', r: ['You too! Goodbye.', 'You too!'], rp: 'Você também! Tchau.', x: ['No, thank you.', 'Where is the station?'] }
  ] },
  { id: 'turismo', cen: 'turismo', titulo: 'Passeio pela cidade', icone: '📸', cor: 'violet', nivel: 'A2', npc: 'um vendedor de ingressos de passeio turístico', eu: 'um turista', turnos: [
    { n: 'Hello! Do you want a ticket for the city tour?', np: 'Olá! Quer um ingresso para o passeio pela cidade?', r: ['Yes, how much is it?', 'Yes, please. How much is it?'], rp: 'Sim, quanto custa?', x: ['No, I am a tour.', 'It is a nice photo.'] },
    { n: 'It is twenty dollars for adults.', np: 'São vinte dólares para adultos.', r: ['One ticket, please.', 'One adult ticket, please.'], rp: 'Um ingresso, por favor.', x: ['It is on the left.', 'I am a student.'] },
    { n: 'The tour starts at ten. Do you have any questions?', np: 'O passeio começa às dez. Você tem alguma pergunta?', r: ['Where does it start?', 'Where does the tour start?'], rp: 'Onde começa?', x: ['I start at ten.', 'Yes, I am ten.'] },
    { n: 'It starts in front of the museum.', np: 'Começa em frente ao museu.', r: ['Can I take photos?', 'Can I take pictures?'], rp: 'Posso tirar fotos?', x: ['I am in front.', 'The museum is a ticket.'] }
  ] },
  { id: 'trabalho', cen: 'trabalho', titulo: 'No escritório', icone: '💼', cor: 'amber', nivel: 'A2', npc: 'um colega de trabalho', eu: 'um funcionário', turnos: [
    { n: 'Good morning! Are you ready for the meeting?', np: 'Bom dia! Você está pronto para a reunião?', r: ['Yes, I am ready.', 'Yes, I am.'], rp: 'Sim, estou pronto.', x: ['No, I am at the market.', 'I am a meeting.'] },
    { n: 'Can you send me the report today?', np: 'Você pode me enviar o relatório hoje?', r: ['Sure. I can send it this afternoon.', 'Sure, I can send it today.'], rp: 'Claro. Posso enviar esta tarde.', x: ['Yes, I am a report.', 'I like Mondays.'] },
    { n: 'Great. Do you have any questions about the project?', np: 'Ótimo. Você tem alguma pergunta sobre o projeto?', r: ['Yes, I have one question.', 'Yes, I have a question.'], rp: 'Sim, tenho uma pergunta.', x: ['No, the project is red.', 'I am a question.'] },
    { n: 'Of course. Go ahead.', np: 'Claro. Pode falar.', r: ['When is the deadline?', 'What is the deadline?'], rp: 'Qual é o prazo?', x: ['I am in the office.', 'The report is yellow.'] }
  ] },
  { id: 'casa', cen: 'casa', titulo: 'Recebendo em casa', icone: '🏠', cor: 'green', nivel: 'A1', npc: 'um amigo anfitrião', eu: 'um convidado', turnos: [
    { n: 'Welcome to my house! Please, come in.', np: 'Bem-vindo à minha casa! Entre, por favor.', r: ['Thank you! Your house is very nice.', 'Thank you! It is a nice house.'], rp: 'Obrigado! Sua casa é muito bonita.', x: ['I am a house.', 'No, I am hungry.'] },
    { n: 'Thanks! This is the living room. Do you want some water?', np: 'Obrigado! Esta é a sala de estar. Você quer um pouco de água?', r: ['Yes, please.', 'Yes, please. Water is great.'], rp: 'Sim, por favor.', x: ['It is a big room.', 'I live in a house.'] },
    { n: 'Here you go. Where do you live?', np: 'Aqui está. Onde você mora?', r: ['I live in an apartment in São Paulo.', 'I live in an apartment.'], rp: 'Moro em um apartamento em São Paulo.', x: ['I am from the kitchen.', 'I like the water.'] },
    { n: 'Nice! Is it big?', np: 'Legal! É grande?', r: ['No, it is small, but it is nice.', 'No, it is small.'], rp: 'Não, é pequeno, mas é legal.', x: ['Yes, I am big.', 'It is on the table.'] }
  ] },
  { id: 'dinheiro', cen: 'dinheiro', titulo: 'No banco', icone: '💳', cor: 'teal', nivel: 'A2', npc: 'um atendente de banco', eu: 'um cliente', turnos: [
    { n: 'Good afternoon. How can I help you?', np: 'Boa tarde. Como posso ajudar?', r: ['I would like to open an account.', 'I want to open an account.'], rp: 'Eu gostaria de abrir uma conta.', x: ['I am a bank.', 'I would like a coffee.'] },
    { n: 'Sure. Do you have an ID?', np: 'Claro. Você tem um documento de identidade?', r: ['Yes, here is my ID.', 'Yes, here you go.'], rp: 'Sim, aqui está o meu documento.', x: ['No, I am an ID.', 'It is five dollars.'] },
    { n: 'Thank you. How much money do you want to deposit?', np: 'Obrigado. Quanto dinheiro você quer depositar?', r: ['I want to deposit two hundred dollars.', 'Two hundred dollars, please.'], rp: 'Quero depositar duzentos dólares.', x: ['I deposit at ten.', 'I am two hundred.'] },
    { n: 'Okay. Please sign here.', np: 'Certo. Assine aqui, por favor.', r: ['Okay. Is that all?', 'Here you go.'], rp: 'Certo. É só isso?', x: ['I sign the bank.', 'Yes, I am hungry.'] }
  ] }
];
