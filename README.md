
# svelte-eCart
農業者向け販売カート
 
# 特徴
- この Svelte apps は [https://github.com/sveltejs/template](https://github.com/sveltejs/template) に基づいています。
- 特に農業者による農作物の販売向けに制作されています。
- クロスプラットフォームとして Linux, Windows, iOS 等何れの環境においても動作します。
- UI として Google社の [Material Components](https://github.com/material-components/material-components-web) を使用しています。 
- IE11 への対応とWEB技術に疎遠な方にも容易に導入出来るよう最適化されています。  
　※ 最新技術を採り入れたものは別バージョンとして予定しています。
 
# Demo
- 以下で公開用テンプレートをご覧頂けます（**/docs** を参照しています) 
 
　　[GitHub Pages: svelte-eCart](https://ru-museum.github.io/svelte-eCart/)  
　　https://ru-museum.github.io/svelte-eCart/ 

# インストール

- 新規 **project** を構築するには [degit](https://github.com/Rich-Harris/degit) を使用します。

```
npx degit ru-museum/svelte-eCart svelte-app
cd svelte-app
```

### 【注意】
```
! could not find commit hash for master
```

- 上記のエラーが表示される場合は、**branch** 名を指定して下さい(**#main**)。

```
npx degit ru-museum/svelte-eCart#main svelte-app
```

- デフォルト **branch** 名は、**master** から **main** へ変更されています。  
 ※ **degit** 側が未対応の理由に依ると思われます。

　　参照 ⇒ [github / renaming: Renaming the default branch from master](https://github.com/github/renaming)

- 構築するには [Node.js](https://nodejs.org/) のインストールが必要です。

# 構築

1. 依存ライブラリーのインストール。

```
cd svelte-app
npm install
```

2. [Rollup](https://rollupjs.org/) をスタートします。

```
npm run dev
```

- ブラウザで [localhost:5000](http://localhost:5000/) にアクセスしますと初期画面が表示されます。

3. 公開用にビルドします。

```
npm run build
```

4. WEB 上へ公開するには、**public** フォルダ内の必要なファイル(.map を除く)を アップします。


# 公開

- フォルダ **/docs** には管理と公開用に使い分けビルドされたバンドルファイルが同梱されています（ **bundle.js**, **bundle-admin.js** ）。

- ダウンロードしたZIPファイルを解凍し **/docs** 内のファイルをそのままの構成でサーバーにアップロードすれば動作します。


###  　管理用と公開用とのビルド方法

- **src / App.svelte** の設定値を変更しビルド（**npm run build**）します。  
  　　**let administration  = 1 ;**  // デフォルト値  
　　管理用：**1**、公開用：**0** となっています。  

- ビルド後バンドルファイル名を各々公開用は **bundle.js**、管理用は  **bundle-admin.js** とします。  
 ※ 管理用と公開用との違いは、メニューの表示・非表示のみです。














	
