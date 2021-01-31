
<div class="container margin-auto">

<h1 class="mdc-typography--headline4">基本設定</h1>
<ul>
   <li>以下の手順に従い借りているサーバーに設置して下さい。</li>
   <li>初期値では利用出来るものは全て表示されています。</li>
   <li>先ず運営者情報を変更後テストをし、必要の無いものを非表示として下さい。</li>
</ul>

   
<h2 class="mdc-typography--headline5">(1) システム内容</h2>
   <ul>
      <li>解凍したフォルダの構成内容は以下となっています。</li>
      <li>サーバーへこの構成のまま<strong>太字のフォルダとファイル</strong>をアップします。</li>
      <li>設定ファイルの編集後にローカルで随時確認出来ます。</li>
      <li>使用画像はサンプルですので、全てを置き換えて下さい。</li>
   </ul>

　<div class="pre-ex">    

&nbsp;<FolderOpen color="#000" size="2em" /><br>
　├&nbsp;<Folder color="#000" size="1em" />&nbsp;css&nbsp;&nbsp;&nbsp;&nbsp;// CSSフォルダ<br>
　│&nbsp;└material-components-web.min.css <Settings color="red" size="0.6em" />&nbsp;&nbsp;<br>
　├&nbsp;<Folder color="#000" size="1em" />&nbsp;<strong>data</strong>&nbsp;&nbsp;&nbsp;&nbsp;// 設定データフォルダ<br>
　│&nbsp;├init.js<br>
　│&nbsp;├products.js<br>
　│&nbsp;└user-pages.js<br>
　├&nbsp;<Folder color="#000" size="1em" />&nbsp;<strong>images</strong>&nbsp;&nbsp;&nbsp;&nbsp;// 画像フォルダ<br>
　│&nbsp;├logo.jpg<br>
　│&nbsp;├sample01.jpg<br>
　│&nbsp;├　　:<br>
　│&nbsp;└sample08.jpg<br>
　├&nbsp;<Folder color="#000" size="1em" />&nbsp;js&nbsp;&nbsp;&nbsp;&nbsp;// JAVASCRIPTフォルダ<br>
　│&nbsp;└material-components-web.min.js <Settings color="red" size="0.6em" />&nbsp;&nbsp;<br>
　├<strong>bundle.css</strong><br>
　├<strong>bundle.js</strong><br>
　├bundle-admin.css <Settings color="red" size="0.6em" /><br>
　├bundle-admin.js <Settings color="red" size="0.6em" /><br>
　├<strong>grobal.css</strong><br>
　├<strong>index.html</strong><br>
　└index-admin.html <Settings color="red" size="0.6em" />
　
　<br>
　
　</div>    
<ul>
   <li><Settings color="red" size="0.6em" /> は、管理・ローカルテスト用です。サーバーへのアップロードは必要ありません。</li>
   <li>material-components-web の css 及び js ファイルは、サーバ実行時 WEB 上からダウンロードされますのでローカルテストのみに必要です。<br>
  バージョンは 9.0.0 です。最新のものを必要な場合はダウンロードすることも可能です（(4) ローカルテスト参照）。</li>
</ul>


<h2 class="mdc-typography--headline5">(2) 設定ファイルの編集</h2>
<h3 class="mdc-typography--headline6">&nbsp;【ユーザー情報の入力】</h3>
   <ul>
      <li>管理用設定ファイルは以下の3つとなります。</li>
   </ul>
　<div class="pre-ex">
─<Folder color="#000" size="1em" /> data<br>
&nbsp;   ├─ <strong>init.js</strong>　　　&nbsp;&nbsp;&nbsp;&nbsp;設定ファイル<br>
&nbsp;   ├─ <strong>products.js</strong>　&nbsp;&nbsp;販売物データファイル<br>
&nbsp;   └─ <strong>user-pages.js</strong>&nbsp;&nbsp;ページ追加用データファイル<br>
　</div>    

<br>

・ <strong>init.js</strong><br>      
<div class="pre-ex">    

<strong>// 運営者情報</strong><br>
// 販売者の基本情報を記述します。<br>
const user = &#123;<br>
　page_title: "ホームページタイトル", // ブラウザトップやタブに表示<br>
　shop    : "ショップ名",　// トップバーに表示<br>
　admin   : "運営者氏名",<br>
　postage : '郵便番号', <br>
　address : '所在地住所', <br>
　email   : 'メイルアドレス',<br>
　tell    : '電話番号'<br>
&#125;;<br>

<br>

<strong>// 各種基本設定</strong><br>
const setting = &#123;<br>
　top_image : "logo.jpg", // メインページ・トップ画像　600x140<br>
　// 商品画像下のタイトル背景色<br>
　// 変更例： background-color:[背景色];color:[文字色];<br>
　title_back: "background-color:#6a0080;color:#ffffff;"<br>
&#125;;<br>

<br>

<strong>// MAIN ページ・トップ挿入テキスト</strong><br>
// 編集可(表示場所は M数字 で確認出来ます)<br>
// 必要の無い場合は空白として下さい<br>
const message = &#123;<br>
　msg1: "M1:ショッピング・カート",<br>
　msg2: "M2:",<br>
　msg3: "M3:",<br>
　msg4: "M4:",<br>
　msg5: "M5:",<br>
　msg6: "M6:"<br>
&#125;;<br>

<br>

<strong>// 注文メール設定</strong><br>
const order_mail = &#123;<br>
　subject : "【商品注文】● テスト",                // メール件名<br>
　title   : "【商品注文】",                       // 本文タイトル<br>
　email   : '****@****.***',                   // 返信宛先メールアドレス<br>
　message : `【伝言・意見・要望欄】＊自由にお書き下さい。`, // 追加項目<br>
<br>
　// 挿入テキスト <br>
　//  「注文メイルの編集」を使用すると改行は自動に挿入されます。<br>
　//  必要の無い場合は、行を削除か空（``）として下さい<br> 
　//  直接編集の場合、改行には '%0D%0A' を挿入します。<br>
　template1: "[挿入テキスト１]",<br>
　template2: "[挿入テキスト２]",<br>
　template3: "[挿入テキスト３]"<br>
&#125;;<br>

<br>

<strong>// SNS リンク</strong><br>
// 活用している SNS サービスを公表する場合に記述します。<br>
// ここに無いものについては各自アイコン画像を用意して下さい。<br>
// メインページのフッタ部分に表示されます。<br>
const sns = [<br>
　&#123;<br>
　　name :"twitter",<br>
　　url  :"https://twitter.com/＊＊＊＊",<br>
　　image:"twitter_icon.png"<br>
　&#125;;,<br>
　[　略　]<br>
　&#123;<br>
　　name :"twitcast",<br>
　　url  :"https://twitcasting.tv/＊＊＊＊",<br>
　　image:"twitcast_icon.png"<br>
　&#125;;<br>
];<br>

<br>

<strong>// 決済方法</strong><br>
// 注文メイルへの表示を設定します。<br>
// 自由に追加出来ます。<br>
let transfers = [<br>
　'銀行振込',<br>
　'郵便振込',<br>
　'その他'<br>
];<br>

<br>

<strong>// 注文フォーム</strong><br>
// 自由に追加出来ます<br>
// 購入者情報入力項目の設定内容をカスタマイズ出来ます。<br>
// width:入力欄の幅<br>
// required:必須項目に設定する場合 - 任意：0　必須： 1<br>
// helper：入力時下部に表示されます。<br> 
let orderer = [<br>
　&#123;<br>
　　item:'注文者氏名',<br>
　　width:'200',<br>
　　holder:'野菜華子(宛名)',<br>
　　required:1,<br>
　　helper:'注文者と受取人が異なる場合は<strong>受取人名</strong>を記入して下さい',<br>
　　color:'red' // helper で表示される文字色<br>
　&#125;,<br>
　&#123;<br>
　　item:'届け先住所',<br>
　　width:'300',<br>
　　holder:'送付先住所を入力して下さい',<br>
　　required:1,<br>
　　helper:'注文者と受取人が異なる場合は<strong>受取人住所</strong>を記入して下さい',<br>
　　color:'red'<br>
　&#125;,<br>
　&#123;<br>
　　item:'郵便番号',<br>
　　width:'150',<br>
　　holder:'000-0000',<br>
　　required:0,<br>
　　helper:'正しく配送するためなるべく記入を願います',<br>
　　color:'gray'<br>
　&#125;,<br>
　&#123;<br>
　　item:'連絡先電話番号',<br>
　　width:'180',<br>
　　holder:'000-0000-0000',<br>
　　required:0,<br>
　　helper:'注文者と受取人が異なる場合は<strong>受取人連絡先</strong>を記入して下さい(必須ではありません)',<br>
　　color:'gray'<br>
　&#125;<br>
];<br>

<br>

<strong>// ショップ情報表示</strong>:フッタ部<br>
	const footer = &#123;<br>

      info  : 1,  // メインページに表示しない： 0(デフォルト)　表示する： 1<br>
      image : 'footer_image.jpg' // ショップ画像（imgフォルダ内に保存）<br>

	&#125;;<br>

<br>

<strong>// QRコード決済-振込方法の表示</strong>:フッタ部<br>
// QRコード決済表示の場合。
// QRコード画像を用意します。<br>
// 自由に追加出来ます。<br>
const payment = [<br>
　&#123;<br>
　　name  :"銀行振込",<br>
　　number:"1234-5678",<br>
　　url   :"",<br>
　　image:""<br>
　&#125;,<br>
　&#123;<br>
　　name  :"郵便振込",<br>
　　number:"5678-1234",<br>
　　url   :"",<br>
　　image :""<br>
　&#125;,<br>
　&#123;<br>
　　name :"paypay",<br>
　　number:"",<br>
　　url  :"https://twitter.com/aisaika_daihyou",<br>
　　image:"paypay_icon.png"<br>
　&#125;<br>
];<br>

<br>

<strong>// QR コード表示</strong><br>
// 表示は、QRコード決済に連動します。<br>
// QR コード画像は images フォルダ内に保存します。
// 設定値：表示しない： 0(デフォルト)　表示する： 1<br>
// 決済方法は追加出来ます<br>
const qr = [<br>
   &#123;<br>
      code  : 1,<br>
      title : 'QRコード決済', <br>
      name  : 'PayPay',     // 決済名<br>
      image : 'qr-code.png'<br>
	&#125;;,<br>
	<br>
   &#123;<br>
      code  : 1,<br>
      title : '電子マネー決済', <br>
      name  : 'PayPay',     // 決済名<br>
      image : 'qr-code.png' // QR コード画像（imgフォルダ内に保存）<br>
	&#125;;,<br>
   &#123;<br>
      code  : 1,            // 表示しない： 0(デフォルト)　表示する： 1<br>
      title : 'クレジットカード決済', <br>
      name  : '',     // 決済名<br>
      image : 'qr-code.png' // QR コード画像（imgフォルダ内に保存）<br>
	&#125;;<br>
<br>
];<br>

<br>

<strong>// Googleマップ表示</strong>:フッタ部<br>
// geocode(地点情報) は Googleマップからも取得出来ます。<br>
	const map = &#123;<br>

      map     : 1,  // 表示しない： 0(デフォルト)　表示する： 1<br>
      zoom    : 13, // 設定レベル 1-20 - [13] は 1：20000 です<br>
      geocode : '34.932443,133.280715', <br>
      name    : '愛菜香', <br>
      width   : 100,// 幅長さ <br>
      height  : 278 // 縦長さ  <br>

	&#125;;<br>


　</div>    


<br>

・ <strong>products.js</strong><br>      

<br>

　// <strong>消費税の設定</strong><br>
<ul>
   <li>消費税は変動します(単位％)。</li>
   <li>税額端数処理は業者により指定自由です。<br>
　設定値：四捨五入-[0] 切り上げ-[1] 切り捨て-[2]　　
   </li>
</ul>
<div class="pre-ex">    
   let tax = "8";    // 消費税：％<br>
   let tax_frac = 0; // 税額端数処理<br>
　</div>    

<br>
　// <strong>CLIPS のカスタマイズ</strong><br>
<ul>
   <li>CLIPS の数は自由に増やせます。</li>
   <li>「背景」と「文字」の色は自由にカスタマイズ出来ます（設定値８色）。</li>
   <li>各々の *** 部分を変更して下さい background-color:***; color:***;<br>
   　　　色選択ツール
      <a href="https://material.io/resources/color/" target="_blank">
            <OpenInNew color="green" size="1.2em"/>
      </a>
   </li>
</ul>

<div class="pre-ex">
<table>
   <tr>
      <td>let&nbsp;primary</td>
      <td>=&nbsp;"background-color:#0091ea;&nbsp; color:#fff;";</td>
   </tr>
   <tr>
      <td>let&nbsp;secondary</td>
      <td>=&nbsp;"background-color:#546e7a;&nbsp; color:#fff;";</td>
   </tr>
   <tr>
      <td>let&nbsp;success</td>
      <td>=&nbsp;"background-color:#32cb00;&nbsp; color:#fff;";</td>
   </tr>
   <tr>
      <td>let&nbsp;danger</td>
      <td>=&nbsp;"background-color:#dd2c00;&nbsp; color:#fff;";</td>
   </tr>
   <tr>
      <td>let&nbsp;warning</td>
      <td>=&nbsp;"background-color:#ffab00;&nbsp; color:#fff;";</td>
   </tr>
   <tr>
      <td>let&nbsp;info</td>
      <td>=&nbsp;"background-color:#00b8d4;&nbsp; color:#fff;";</td>
   </tr>
   <tr>
      <td>let&nbsp;light</td>
      <td>=&nbsp;"background-color:#f5f5f5;&nbsp; color:#000;";</td>
   </tr>
   <tr>
      <td>let&nbsp;dark</td>
      <td>=&nbsp;"background-color:#616161;&nbsp; color:#fff;";</td>
   </tr>
</table>


　</div>    

  <br>

　// <strong>商品リスト</strong><br>
<ul>
   <li>商品数は自由に増減出来ます。</li>
   <li>クリック毎の商品表示数は６です。</li>
   <li>データの追加は、<code>&#123;</code>と<code>&#125;</code>に囲まれたもの１セットとして追加します。</li>　
   <li>途中にデータを挿入する場合は、前後の<code>,</code>(コンマ)の存在に注意して下さい。<br>
   但し、最後のデータには<code>&#125;</code>の後に<code>,</code>を付加はしません。</li>　
   <li>数値(*)での設定は<code>”</code>で囲まずそのまま入力します。</li>
   <li>表示・非表示の項目は、<code>0</code>: 非表示 (デフォルト)　<code>1</code>: 表示 で指示します。</li>
   <li>新規データは<a href="#/data-editor">データ編集方法</a>で簡易に作成出来ます。</li>
</ul>

<div class="pre-ex">    

<table class="tbl-data">
   
<tr><td>&#123;</td><td></td></tr>
<tr><td>　id: 1,</td><td>　ID番号 *</td></tr>
              
<tr><td>　code: 'A-1A',</td><td>　管理番号</td></tr>
<tr><td>　name: 'ミカン',</td><td>　商品名</td></tr>
<tr><td>　subtitle : '糖度１０度を越えました',</td><td>　サブ-タイトル</td></tr>

<tr><td>　price: 3800,</td><td>　商品価格 *</td></tr>
<tr><td>　gram: "3kg",</td><td>　商品量目(単位を記載)</td></tr>
<tr><td>　number: 10,</td><td>　数量 *</td></tr>
<tr><td>　sale: 0,</td><td>　SALE [非表示：0　表示：1]　*</td></tr>
<tr><td>　shipping: 1,</td><td>　送料 [非表示：0　無料：1] *</td></tr>
<tr><td>　sold: 0,</td><td>　完売 [非表示：0　完売：1] *</td></tr>
<tr><td>　img: 'sample01.jpg',</td><td>　商品画像(jpg, png 等)</td></tr>
<tr><td>　
clips:[<br>

<table>
 <tr>
   <td>
　　&#123;msg:"本日限り", color:primary&#125;,<br>
　　&#123;msg:"残り20k", color:secondary&#125;,<br>
　　&#123;msg:"送料無料", color:success&#125;,<br>
　　&#123;msg:"送料無料", color:danger&#125;,<br>
　　&#123;msg:"残り些少", color:warning&#125;,<br>
　　&#123;msg:"残り些少", color:info&#125;,<br>
　　&#123;msg:"残り些少", color:light&#125;,<br>
　　&#123;msg:"残り些少", color:dark&#125;<br>
   </td>
   <td>

<span style="background-color:#0091ea; color:#fff;padding:0px 6px;margin-bottom:2px;">A</span><br>
<span style="background-color:#546e7a; color:#fff;padding:0px 6px;margin-bottom:2px;">A</span><br>
<span style="background-color:#32cb00; color:#fff;padding:0px 6px;margin-bottom:2px;">A</span><br>
<span style="background-color:#dd2c00; color:#fff;padding:0px 6px;margin-bottom:2px;">A</span><br>
<span style="background-color:#ffab00; color:#fff;padding:0px 6px;margin-bottom:2px;">A</span><br>
<span style="background-color:#00b8d4; color:#fff;padding:0px 6px;margin-bottom:2px;">A</span><br>
<span style="background-color:#f5f5f5; color:#000;padding:0px 6px;margin-bottom:2px;">A</span><br>
<span style="background-color:#616161; color:#fff;padding:0px 6px;margin-bottom:2px;">A</span>

</td>
</tr>
   
</table>
　],<br>

</td>
<td>
　商品の特徴ポイント<br>
　・ msg 部分が空欄の場合は表示されません<br> 
　・ color 部分の変更で色を自由に設定可能です<br>
　　　　例： primary => "#800000"(<code>"</code> で囲む)<br>
　　　　Color Tool(色選択ツール)
   <a href="https://material.io/resources/color/" target="_blank">
　　  <OpenInNew color="green" size="1.2em"/>
   </a>
   </td>
</tr>


<tr>
   <td>　
      text :""
   </td>
   <td>
      商品内容の解説<br>
      　・ 作成には<a href="#/data-editor">データ編集方法</a>をお使い下さい。
   </td>
</tr>

<tr>
   <td>&#125;;,</td>
   <td></td>
</tr>

</table>           

　</div>    



<br>

<h2 class="mdc-typography--headline4">(3) 画像について</h2>
   <ul>
      <li>商品画像(名前は任意)は<code>images</code>フォルダ内に置き、商品データファイル<code>products.js</code>の <code>products - img</code> 項目に各々記述します。</li>
      <li>画像表示サイズは自動調整されますが、<code>横300 x 縦200</code>(ピクセル)から<code>600 x 400</code>程度の範囲で修正・トリミングを行って下さい(スマートフォンでも編集可能)。</li>
      <li>独自画像設定後は、サンプル画像は全て破棄して下さい(使用のものは全てフリー画像です)。</li>
   </ul>

<h3 class="mdc-typography--headline4">(4) ローカルテスト</h3>
   <ul>
      <li>テストを行うには、<code>index.html</code>（サーバー用：インターネット接続が必要）或いは<code>index-admin.html</code>（管理者用）かの何れかを開くとローカル PC 上でホームページが立ち上がります。</li>
      <li>管理者用ではメニューに管理のためのメニューが表示され、管理編集を行うことが出来ます。</li>
      <li>データ編集後「ページを再読み込み」を行うことで変更を確認出来ます。</li>
      <li>最後に<code>index.html</code>をメモ帳等のエディタで開きタイトルタグ(&lt;title&gt;)内を「ホームページ名」に変更します。<br>      
      ※ その他、検索用のメタタグ（meta）を追加することも可能です。
      <div class="meta">
         例：&lt;meta name="description" content="野菜販売サイトです。"&gt;<br>
         　　&lt;meta name="keywords" content="野菜,トマト,りんご"&gt;
      </div>

      </li>
      
      <li>最終確認後、サーバーへアップロードをします。</li>
   </ul>
      
<h4>　 ローカル用ファイルのダウンロード</h4>
　 * 最新版への更新をすることが出来ます。
<div class="pre-ex">
   css/material-components-web.min.css
   <a href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" target="_blank">
         <OpenInNew color="green" size="1.2em"/>
   </a>
   <br>

   js/material-components-web.min.js
   <a href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js" target="_blank">
         <OpenInNew color="green" size="1.2em"/>
   </a>
　<br>
　 * ブラウザで開かれたファイルを「名前を付けて保存」で各々のフォルダ内に保存します。
</div>    



<h3 class="mdc-typography--headline4">(5) サーバーへアップロード</h3>
   <ul>
      <li>初心者にも手軽に設置可能でサーバーへの依存はありません(CGI、データベース等)。</li>
      <li>プロバイダーやホスティングに用意されたサーバーへ上記 (1) の構成のまま必要なファイルをアップロードします。</li>
      <li>アップロード後指定された URL にアクセスすると HP が閲覧出来ます。</li>
      <li>サーバーに依っては、独自ドメインも設定可能です。</li>
   </ul>
   
<h3 class="mdc-typography--headline4">(6) 公開後の管理運営</h3>
   <ul>
      <li>公開後のデータ更新は、変更したファイル（<code>init.js</code>、<code>products.js</code>、<code>user-pages.js</code>）或いは追加の新規画像ファイルをサーバーへアップロードします。</li>
   </ul>

<h3 class="mdc-typography--headline4">(7) 運営経費について</h3>
   <ul>
      <li>現在のレンタルサーバーで提供されている最も安いコースは月額１００円位からあり、各社共に上流の回線速度自体は十分に確保されていますので速度的には十分と思われます。</li>
      <li>独自ドメインの設定をする場合、年間１０００円前後掛かります。</li>
      <li>経費の節減については、「ヘルプ」→「<a href="#/about">Svelte-eCart について</a>」→「制作の目的」をご覧下さい。</li>
   </ul>
   
<br>
<br>
</div>    
      
     
<style>

   .tbl-data td{
   height:24px;

   }

   .pre-ex{
      margin: 10px;
      padding:10px;
      background-color: #e3f2fd;
   }

   .meta{
      margin-left: 20px;
      font-size:1em;
   }

</style>



<script>

   // MATERIAL ICONS - SVG
	import { Folder, FolderOpen, OpenInNew, Settings } from '../material-icons/_index';

</script>



     
