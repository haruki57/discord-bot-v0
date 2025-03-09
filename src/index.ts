import { Client, GatewayIntentBits } from 'discord.js';
// @ts-ignore
import dotenv from 'dotenv';

// 環境変数を読み込む
dotenv.config();

// 環境変数からトークンを取得
const token = process.env.DISCORD_TOKEN;
// 環境変数から許可されたチャンネルIDを取得
const allowedChannelIdsString = process.env.ALLOWED_CHANNEL_IDS;

// トークンが設定されていない場合はエラーを表示して終了
if (!token) {
  console.error('DISCORD_TOKENが設定されていません。.envファイルを確認してください。');
  process.exit(1);
}

// 許可されたチャンネルIDを配列に変換
const allowedChannelIds = allowedChannelIdsString ? allowedChannelIdsString.split(',') : [];

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
  
  if (allowedChannelIds.length > 0) {
    console.log(`ボットは以下のチャンネルでのみ反応します: ${allowedChannelIds.join(', ')}`);
  } else {
    console.log('警告: ALLOWED_CHANNEL_IDSが設定されていないため、すべてのチャンネルで反応します。');
  }
});

// メッセージ受信時のイベント
client.on('messageCreate', async (message) => {
  // ボット自身のメッセージは無視
  if (message.author.bot) return;
  
  // チャンネルIDが許可リストにない場合は無視（許可リストが空の場合はすべてのチャンネルで反応）
  if (allowedChannelIds.length > 0 && !allowedChannelIds.includes(message.channelId)) {
    return;
  }

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