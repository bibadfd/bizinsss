const { Telegraf } = require('telegraf');

const botToken = '6788095013:AAGGA7ckQLqp-D_cZKKdsY3QcpM-FKyOsls'; // Замените на свой токен

const userId = 1275110787;
const bot = new Telegraf(botToken);

bot.start((ctx) => ctx.reply('Добро пожаловать в бота, где вы сможете отправлять анонимные вопросы, идеи или предложения. Пишите сюда ваш вопрос:'));
// Обработчик события text
bot.on('text', async (ctx) => {
  const messageText = ctx.message.text;
  
  try {
    // Отправляем текст в целевую группу
    await bot.telegram.sendMessage(userId, messageText);
    ctx.reply('Ваш вопрос был отправлен администраторам.');
  } catch (error) {
    console.error('Ошибка при отправке сообщения:', error);
    ctx.reply('Произошла ошибка при отправке сообщения.');
  }

  // После отправки сообщения всегда отвечаем пользователю
  ctx.reply('Пишите сюда ваш вопрос');
});

bot.launch();
