const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});

client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); //  Função que usamos para criar o delay entre uma ação e outra

client.on('message', async msg => {

    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá! '+ name.split(" ")[0] + '\n Sou o assistente virtual do Salão Elshaday. Como posso ajudá-la hoje? Por favor, digite uma das opções abaixo:\n\n1 - Horário de funcionamento\n2 - Procedimentos\n3 - Promoções\n4 - Endereço\n5 - Outras perguntas'); //Primeira mensagem de texto
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(5000); //Delay de 5 segundos
        
    }

    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Nosso serviço oferece procedimentos estéticos, com agendamento marcado, diretamente pelo Telefone ou WhatsApp.\n\nTemos produtos linha cliente, o que significa que você pode seguir seu tratamento em casa também usando nossos produtos feitos para necessidade do seu cabelo.\n\nOferecemos em casos específicos, atendimento domiciliar.\n\nAlém disso, temos um benefício para clientes, indicando alguém você ganha um procedimento de brinde!');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'HORÁRIOS DE FUNCIONAMENTO?\nEstamos funcionando\n\nSalão Elshaday\nCampos dos Goytacazes.\n\nDias:\nQuarta-feira, Quinta-feira, Sexta-feira e Sábado \n\nAgenda Aberta!');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '\n\nEstamos funcionando\n\nSalão Elshaday\nMorro do côco.\n\nDias:\nSegunda-feira, Terça-feira, Quarta-feira \n\nAgenda Aberta!');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Aceitamos pagamentos em dinheiro, pix, cartão de crédito e débito.\n\nPara agendar, basta chamar aqui no WhatsApp ou ligar para o número: (22) 99908-7070');
    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*PROCEDIMENTOS:*\n\n*Cabelos*\n\n*Depilação*\n\n*Desing de Sobrancelhas*\n\n*Extensão de Cílios*\n\n*Manicure e Pedicure*');

        // await delay(3000); //delay de 3 segundos
        // await chat.sendStateTyping(); // Simulando Digitação
        // await delay(3000);
        // await client.sendMessage(msg.from, 'Link para cadastro: https://site.com');
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*PROMOÇÃO*\n\n*MÊS DA MULHER* Tratamento + Escova.\n\n á partir de R$ 50,00');
        
        // await delay(3000); //delay de 3 segundos
        // await chat.sendStateTyping(); // Simulando Digitação
        // await delay(3000);
        // await client.sendMessage(msg.from, 'Link para cadastro: https://site.com');
    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*ENDEREÇO CAMPOS:*\n\n Rua Waldemar Prata N°45, Parque Corrientes, Nova Brasília.');
       
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*ENDEREÇO MORRO DO CÔCO*\n\n Rua Nilo Peçanha, antiga pista de laço, Morro do Côco.');

        // await delay(3000); //delay de 3 segundos
        // await chat.sendStateTyping(); // Simulando Digitação
        // await delay(3000);
        // await client.sendMessage(msg.from, 'Link para cadastro: https://site.com');
    }

    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Se você tiver outras dúvidas ou precisar de mais informações, por favor, fale aqui nesse whatsapp ou ligue para o número: (22) 99908-7070');
    }

});