const { Telegraf } = require('telegraf');

const botToken = '6788095013:AAGGA7ckQLqp-D_cZKKdsY3QcpM-FKyOsls'; // Замените на свой токен

const userId = -1002120118788;
const bot = new Telegraf(botToken);

let questionCounter = 71; // Инициализируем счетчик вопросов

bot.start((ctx) => ctx.reply('Добро пожаловать в бота, где вы сможете отправлять анонимные вопросы, идеи или предложения. Пишите сюда ваш вопрос:'));
// Обработчик события text
bot.on('text', async (ctx) => {
  const messageText = ctx.message.text;
  try {
    // Формируем текст сообщения с номером вопроса, отступом и тегом "#вопросы"
    const questionMessage = `Вопрос ${questionCounter}:\n\n${messageText}\n\n#вопросы`;

    // Отправляем текст в целевую группу
    await bot.telegram.sendMessage(userId, questionMessage);
    
    // Отвечаем пользователю
    ctx.reply(`Ваш вопрос был отправлен администраторам.`);

    // Увеличиваем счетчик вопросов
    questionCounter++;
  } catch (error) {
    console.error('Ошибка при отправке сообщения:', error);
    ctx.reply('Произошла ошибка при отправке сообщения.');
  }

  // После отправки сообщения всегда отвечаем пользователю
  ctx.reply('Пишите сюда ваш вопрос');
});

bot.launch();
