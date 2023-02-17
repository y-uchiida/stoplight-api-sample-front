# stoplight-api-sample-front

Stoplight Studio を用いて API 仕様書を共有する手順を確認しました。  
このリポジトリではフロントエンド（ブラウザ上で実行するコード）の内容を管理します。  
別リポジトリで作成された API 仕様書をインポートして、このリポジトリから利用します。

# ローカルでの動作確認

1. Docker コンテナを起動する
   ```
    docker compose up -d
   ```
2. 依存パッケージを取得
   ```
    npm install
   ```
3. API 仕様書から、型定義ファイルを生成する
   ```
    npx openapi-typescript api-reference/reference/sample.yaml --output src/@types/ApiSchema.d.ts
   ```
4. Vite でローカルクライアントを起動
   ```
     npm run dev
   ```

# 参考資料

- 【OpenAPI】API スキーマから勝手に型がつく axios を作って幸せになる【openapi-typescript】
  https://zenn.dev/sum0/articles/8e903ed05ba681
