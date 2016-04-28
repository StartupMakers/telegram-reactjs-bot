import TelegramBot from 'node-telegram-bot-api'

const TOKEN = process.env['TELEGRAM_BOT__TOKEN']
const bot = new TelegramBot(TOKEN, { polling: true })

bot.on('message', message => {
  bot.sendMessage(message.from.id, JSON.stringify(message))
});

