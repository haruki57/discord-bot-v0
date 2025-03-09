# Discord Bot

TypeScriptで書かれたDiscord Botのプロジェクトです。

## 環境構築

### 前提条件

- Docker
- Docker Compose

### セットアップ手順

1. `.env`ファイルを作成し、Discordボットのトークンを設定します：

```
DISCORD_TOKEN=あなたのDiscordボットトークンをここに入力してください
```

2. Dockerコンテナをビルドして起動します：

```bash
docker-compose up -d --build
```

3. ログを確認します：

```bash
docker-compose logs -f
```

### コンテナの停止

```bash
docker-compose down
```

## 開発方法

### ローカル環境での開発

1. 依存関係をインストールします：

```bash
npm install
```

2. 開発モードで実行します：

```bash
npm run dev
```

### コマンド

- `!ping`: Botが「Pong!」と応答します。

## Dockerコンテナの再ビルド

コードを変更した後、Dockerコンテナを再ビルドするには：

```bash
docker-compose up -d --build
``` 