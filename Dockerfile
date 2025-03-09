FROM node:18-alpine

WORKDIR /app

# パッケージ依存関係をコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# ソースコードをコピー
COPY . .

# TypeScriptをビルド
RUN npm run build

# 不要なdevDependenciesを削除
RUN npm prune --production

# アプリケーションを実行
CMD ["node", "dist/index.js"] 