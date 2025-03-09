import { Client, GatewayIntentBits } from 'discord.js';

// 環境変数からトークンを取得
const token = process.env.DISCORD_TOKEN;

// クライアントの作成
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// 準備完了時のイベント
client.once('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

// メッセージ受信時のイベント
client.on('messageCreate', async (message) => {
  // ボット自身のメッセージは無視
  if (message.author.bot) return;

  // !pingコマンドに応答
  if (message.content === '!ping') {
    await message.reply('Pong!');
  }
});

// ログイン
client.login(token); 