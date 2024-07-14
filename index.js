const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');

// Replace with your actual Telegram bot token
const token = '5784978869:AAFnW1shgcv_zygvCRci3HzSTNsCnLvshrU';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Log successful authorization
bot.getMe().then(me => {
    console.log(`Authorized on account ${me.username}`);
});

bot.setMyCommands([
    { command: "start", description: "Боз оғоз кардан" },
    { command: "help", description: "Кӯмак дархост кунед" },
    { command: "list", description: "Рӯйхат" },
]);
// Listen for incoming messages
bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

    console.log(`[${msg.from.username}] ${messageText}`);

    // Handle different commands
    switch (messageText) {
        case '/start':
            bot.sendMessage(chatId, 'Hi there! Welcome to your bot. what the fuck');
            break;
        case '/list':
            bot.sendMessage(chatId, `Here are the available commands:\n
                /start - Start the bot\n
                /help - Display this help message\n
                /list - The list of command\n
                You can also say 'hi' for a welcome message.`);
            break;
        case '/help':
            bot.sendMessage(chatId, `Here are the available commands:\n
                /start - Start the bot\n
                /help - Display this help message\n
                /list - The list of command\n
                You can also say 'hi' for a welcome message.`);
            break;
        case 'hi':
            bot.sendMessage(chatId, 'Hello! Welcome to the bot.');
            break;
        default:
            // Echo the received message
            bot.sendMessage(chatId, messageText);
            break;
    }
});
