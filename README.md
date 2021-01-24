# svelte-eCart
農業者向け販売カート

## ==TEST 準備中です==

## 特徴
- この Svelte apps は [https://github.com/sveltejs/template](https://github.com/sveltejs/template) に基づいています。
- OSへの依存の無いクロスプラットフォーム（Linux, Android, Web, Windows, iOS, Mac 等）で動作します。
- IE11 に対応しています。
- UI には [Material Components for the web](https://github.com/material-components/material-components-web/) を使用しています。

### 【注意】
- この バージョンは、IE11 への対応と不慣れな方でもローカル環境で容易に扱える様に作られています。　
- 最新技術を重視した開発版を別途用意する予定です。

## Demo 

> [GitHub Pages: svelte-eCart](https://ru-museum.github.io/svelte-eCart/)  
https://ru-museum.github.io/svelte-eCart/
  - 内容は **/docs** フォルダ内を参照しています（管理用）


# インストール

- 新規の project として構築するには [degit](https://github.com/Rich-Harris/degit) を使用します。

```
npx degit ru-museum/svelte-eCart svelte-app
cd svelte-app
```
- 構築するには [Node.js](https://nodejs.org/) のインストールが必要です。

### 【注意】
**! could not find commit hash for master** のエラーが表示された場合は、branch 名を指定して下さい(**#main**)。

```
npx degit ru-museum/svelte-eCart#main svelte-app
```

- デフォルト branch 名は、**master** から **main** へ変更されています。  
  ※ degit 側が未対応の理由に依ると思われます。

　　参照 ⇒ [github / renaming: Renaming the default branch from master](https://github.com/github/renaming)



# 構築手順

1. 依存ライブラリーのインストール。

```
cd svelte-app
npm install
```

2. [Rollup](https://rollupjs.org/) をスタートします。

```
npm run dev
```

- ブラウザで [localhost:5000](http://localhost:5000/) にアクセスしますと初期デモ画面が表示されます。


3. 公開用にビルドします。

```
npm run build
```
 - ビルド時に、**公開用**と**管理用**とに分けて開発します。  
  ※ **公開・管理**用の区分けには、App ファイルへの編集が必要です。
 
4. WEB 上へ公開するには、**public** フォルダ内の必要なファイル(.map を除く)を サーバーへアップします。


#  利用方法

- **/docs** フォルダ内には実行環境が用意されていますので、開発者でない方でもデータの編集のみで即使用可能です。
  
- ダウンロード用ZIPファイルを解凍し、**公開用 bundle.js** を含んだ **/docs** の内容をサーバーへアップします。  
- **管理用 bundle-admin.js** はローカルに置き **index.-admin.html** を用い管理カスタマイズを行います。

- **管理用**では、サイドメニューに**管理用メニュー**が表示されます。
 
- データの編集はヘルプを参照して下さい 。



