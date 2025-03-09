import { Client, GatewayIntentBits } from 'discord.js';
// @ts-ignore
import dotenv from 'dotenv';

// 環境変数を読み込む
dotenv.config();

// 環境変数からトークンを取得
const token = process.env.DISCORD_TOKEN;

// トークンが設定されていない場合はエラーを表示して終了
if (!token) {
  console.error('DISCORD_TOKENが設定されていません。.envファイルを確認してください。');
  process.exit(1);
}

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
  
  // !helloコマンドに応答
  if (message.content === '!hello') {
    await message.reply('こんにちは！');
  }
});

// ログイン
client.login(token); 