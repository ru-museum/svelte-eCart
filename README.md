
# svelte-eCart
農業生産者向け販売カート
 
# 特徴
- この Svelte apps は [https://github.com/sveltejs/template](https://github.com/sveltejs/template) に基づいています。
    - **sveltejs/template** 最新版(Rollup 2.x, rollup-plugin-svelte 7.x)に対応しました(2021-01-31)。
    - 非推奨となったパッケージ等を削除・修正しました（@babel/polyfill, node-sass 等）(2021-02-14)。
    
- 特に農業者による農作物の販売向けに制作されています。
- クロスプラットフォームとして Linux, Windows, iOS, Android(4.4-) 等何れの環境においても動作します。 
- UI として Google社の [Material Components](https://github.com/material-components/material-components-web) を使用しています。 

- IE11 への対応とWEB技術に疎遠な方にも容易に導入出来るよう最適化されています(バージョン 11.1087.16299.0 で確認)。  
　※ 最新技術を採り入れたものは別バージョンとして予定しています。

- 開発環境：Linux(Debian), Node.js 15.8.0。  

#### 　　ビルド版のみを利用したい方は「ビルド版を利用するには」をご覧下さい。

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

### 【注意: 1】
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

### 【注意: 2】（2021-06-24）
- v. 3.38.3 において下記のエラーが表示される場合は以下を参照して下さい。  
**複数の同時記述は不可**となっています。 

- Throw compiler error when <code>:global()</code> contains multiple selectors (<a href="https://github.com/sveltejs/svelte/issues/5907">#5907</a>)
- Fix <code>:global(...):some-pseudoclass</code> selectors not being seen as global (<a href="https://github.com/sveltejs/svelte/issues/6306">#6306</a>)
- disallow multiple selectors inside :global() (<a href="https://github.com/sveltejs/svelte/issues/6428">#6428</a>)

```
[!] (plugin svelte) ValidationError: :global(...) must contain a single selector
  ...
   :global(app, body, html) {
   ^
```
- 回避するには以下の様に分割して記述して下さい。
```
:global(app),:global(body),:global(html){ 
```

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
- ビルド後のバンドルファイルの生成場所は **public/build** フォルダに変更されています。  

###  　管理用と公開用のビルド方法

- **src / App.svelte** の設定値を変更しビルド（**npm run build**）します。  
  　　**let administration  = 1 ;**  // デフォルト値  
　　管理用：**1**、公開用：**0** となっています。  

- **public/build** フォルダ内のバンドルファイル名を公開用は **bundle.js**、管理用は  **bundle-admin.js** とします。  
 ※ 管理用と公開用との違いは、**メニューの表示・非表示**のみです。

#### 【注意】
- **build** 時に下記の **warning** が表示されるのは、**svelte** の **plugin** としてではなく外部からの読込となっている為で問題はありません。
```
(!) Plugin svelte: '*変数名*' is not defined
```

# 公開

-  WEB 上へ公開するには、**public** フォルダ内の必要なファイル(.map を除く)を アップします。


##  ビルド版を利用するには

1. 画面右上にある緑色の **[Code]** ボタンをクリックして **Download ZIP** ファイルをダウンロードし、お使いのパソコンの適当な場所へ解凍します。

1. フォルダ **/docs** 内の **index-admin.html** (管理用)或いは **index.html** (公開用)ファイルをクリックするとローカルでデモサイトが開きます。  
※ 公開用の **index.html** を開くには、**インターネットへの接続**が必要です。

1. カスタマイズ編集後、**/docs** 内のファイルをそのままの構成でサーバーにアップロードして下さい。  
※ カスタマイズ編集は「管理者用設定」のヘルプに従って下さい。
