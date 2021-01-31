
<script>

   import { ContentCopy, Edit, Help, FileText } from "../material-icons/_index";
   import { onMount } from "svelte";

   // 端末表示振分用  
	let oW = 0;
	let wInput1 = 0;
	let wInput2 = 0;
	let imgW    = 0;


   // 商品用配列データ
	let items = [
      { var:'id',       bd:(products.length+1), ph: 'ID 番号'},   　  
      { var:'code',     bd:'',   ph: '管理番号'},
      { var:'name',     bd:'',   ph: '商品名'}, 
      { var:'subtitle', bd:'',   ph: 'サブタイトル'}, 
      { var:'price',    bd:'',   ph: '商品価格(円)'}, 
      { var:'gram',     bd:'',   ph: '量目(g,kg)'},             
      { var:'max',      bd:'10', ph: '数量'}, 
      { var:'sale',     bd:'0',  ph: 'SALE 表示'}, 
      { var:'shipping', bd:'0',  ph: '送料無料'}, 
      { var:'sold',     bd:'0',  ph: '完売表示'},  
      { var:'img',      bd:'',   ph: '画像ファイル名'} 
	];
   
   // CHIPS用配列データ
	let clips = [
      { var:'primary',   ph:'メッセージ', bd:'', color: primary}, 
      { var:'secondary', ph:'メッセージ', bd:'', color: secondary}, 
      { var:'success',   ph:'メッセージ', bd:'', color: success}, 
      { var:'danger',    ph:'メッセージ', bd:'', color: danger}, 
      { var:'warning',   ph:'メッセージ', bd:'', color: warning}, 
      { var:'info',      ph:'メッセージ', bd:'', color: info}, 
      { var:'light',     ph:'メッセージ', bd:'', color: light}, 
      { var:'dark',      ph:'メッセージ', bd:'', color: dark}, 
	]

	
	let _text = "";	
	let text  = "";	
	let template1 = "";	
	let template2 = "";	
	let template3 = "";	
	let br = '%0D%0A'; // メイルBODY 改行コード変換

   onMount(()=>{ 

      const textFields = [].map.call(document.querySelectorAll('.mdc-text-field'),
          function(el) {
             return new mdc.textField.MDCTextField(el);
      });
      
      const tabBar = new mdc.tabBar.MDCTabBar(document.querySelector('.mdc-tab-bar'));

    	mdtext = help_text; // 初期テキスト 	

   })

	$:{
   
   	// 商品説明テキスト
		if(text !== ""){
			_text = "- " + text.replaceAll('\n','\\n- ');
		}else if(text === ""){
		   _text = "";  // 補正
		}
		
   	// 定形メイル　挿入テキスト
		if(mail_items[4].bd !== ""){
			template1 = mail_items[4].bd.replaceAll('\n',br)
		}else if(mail_items[4].bd === ""){
		   template1 = ""; // 補正
		}
		if(mail_items[5].bd !== ""){
			template2 = mail_items[5].bd.replaceAll('\n',br)
		}else if(mail_items[5].bd === ""){
		   template2 = ""; 
		}
		if(mail_items[6].bd !== ""){
			template3 = mail_items[6].bd.replaceAll('\n',br)
		}else if(mail_items[6].bd === ""){
		   template3 = ""; 
		}


      // 端末表示の振り分け  
	   if( oW  > 620 ){ 
	      wInput1 = 220; 
	      wInput2 = 220; 
	      imgW    = 400; 
	      }

	   if( oW <= 620 ){ 
	      wInput1 = 200; 
	      wInput2 = 180; 
	      imgW    = 260; 
	   }

	   if( oW <= 400 ){ 
	      wInput1 = 260; 
	      wInput2 = 200; 
	      imgW    = 300; 
	   }

	}
	
	
	// 定形メイル
	let mail_items = [
      { var:'email',     bd:'', ph: '注文宛先メールアドレス'}, 
      { var:'subject',   bd:'', ph: 'メール件名'},   　  
      { var:'title',     bd:'', ph: '本文タイトル(【商品注文】)'},
      { var:'message',   bd:'', ph: '【伝言・意見・要望欄】'},
      { var:'template1', bd:'', ph: '挿入テキスト１'},
      { var:'template2', bd:'', ph: '※ 送料は確認メイルにてお伝え致します。'},
      { var:'template3', bd:'', ph: '挿入テキスト３'}
	];
	
	// クリップボードにコピー
	function copyToCBoard(n) {
	
			let element;
			if (n){ element = document.getElementById('output' + n);	}

			// 新規にコピー用ダミー要素を作成
			var copyFrom = document.createElement("textarea");

			// データをコピー 
			if (n === 3){
   			// TEXTAREA: 改行処理
   			copyFrom.textContent = element.value.replaceAll('\n','\\n'); // TEXTAREA
			}else{
   			copyFrom.textContent = element.innerText; 
			}

			// 一時的にbodyタグの要素を取得
			var bodyElm = document.getElementsByTagName("body")[0];
			// 子要素にテキストエリアを配置
			bodyElm.appendChild(copyFrom);
			// テキストエリアの値を選択
			copyFrom.select();
			// コピーコマンド発行
			var retVal = document.execCommand('copy');
			// 追加テキストエリアを削除
			bodyElm.removeChild(copyFrom);
			return retVal;

	}
	
	
	import marked from 'marked';
   // 挿入 Markdonw テキスト
	let mdtext = "";
   // ヘルプ表示テキスト
	let help_text = `
Markdown 記法
==========

### 基本
-  HTML と共存していますので、全てのタグが使用可能です。  
-  各々の要素は __CSS__ で装飾補完が可能です。  
- 改行は **&lt;br&gt;** か **ﾛﾛ** (半角スペース２つ)を末尾に置きます。
- 元テキストでの  **ENTER** による改行は 無視されます。

### リンク

記法については以下のサイトを参照して下さい:

[Markdown記法](https://www.markdown.jp/syntax/)  
[markdown 記法 書き方一覧](https://hapicode.com/markdown.html)


### 見出し
- 先頭の # の数で大きさを指定します。
-  次行に = を付加するは **#** １つと同等です(見易い様に数を)

見出し(=)
=
# 見出し(#)
## 見出し(##)
### 見出し(###)
#### 見出し(####)
##### 見出し(#####)
###### 見出し(######)

### 段落
段落は空行を挿入すること行います。段落は空行を挿入すること行います。
段落は空行を挿入すること行います。  
  
段落は空行を挿入すること行います。  

### 折り畳み
<details><summary>詳細を見る</summary>親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。（青空文庫より）
</details>

### 引用
- 引用は文字列の先頭に **＞**(半角) 記号を置きます。  
- 罫線は __CSS__ で補完します。  

> 引用は文字列の先頭に 記号を置きます。  
> 引用は文字列の先頭に記号を置きます。  

<style>
/*  引用補完 CSS */
blockquote {
  position: relative;
  display: table;
  margin: 1rem;
  width: calc(100% - 2rem);
  border-radius: 4px;
  border-left: solid 4px #f0f0f0; 
padding-left: 14px;
}

</style>

### 強調

我輩は*CAT*である  
我輩は _CAT_ である  
我輩は**猫**である  
我輩は__猫__である  


### リスト

- りんご  
- みかん  
 1. **入れ子**は半角スペースでインデントさせます。  
 1. **番号付き**は先頭を全て **1.** ( 数字 1 とピリオド) にします。  
 1. 自動で番号が振られます。
- バナナ


### テーブル  

- テーブルの装飾は CSS で行います。

<style>

/* テーブル サンプル */
.sample table {
width: auto;
border-spacing: 0;
border-collapse: collapse;
border:  solid 1px #ccc;
}

.sample th {
color: #4b636e;
padding: 5px;
border: solid 1px #ccc;
background: #e6ffff;
font-weight: bold;
line-height: 120%;
}

.sample td {
padding: 5px 30px;
border: solid 1px #ccc;
border-collapse: separate;
}

}

</style>

<div class="sample">

| 品名  | 量目  | 価格  |
|:-----:|:-----:|:-----:|
| りんご | 2kg | 000円| 
| みかん | 2kg | 000円| 
| バナナ | 2kg | 000円| 

</div>

# 画像の挿入

- 画像の大小、位置の指定は CSS で行います。

**元画像**

![サンプル画像](./images/product002.jpg　"サンプル画像")


**調整後画像**

<div class="image1">

![サンプル画像](./images/product002.jpg　"サンプル画像")

</div>

<div class="image2">

![サンプル画像](./images/product002.jpg　"サンプル画像")

</div>

<style>

.image1 img,.image2 img{
   border-radius:10px;
}

.image1 img{
   float:left;
   width:160px;
   margin-left:40px;
}
.image2 img{
   width:200px;
   margin-left:10px;
}

</style>

<br>
<br>
<br>
<br>
	
	`;

   // ページを指定して内容の表示
   function openText(n){

      if(n === -1){
         mdtext = help_text;            
         // alert(n);
      }else{
         mdtext = user_pages[n].content;
      }
   }
	

</script>

<!-- (スマホ: 560px | タブレット: 960px | PC) -->
<svelte:window bind:outerWidth={oW} />

<div class="container">

<h1 class="mdc-typography--headline3">データ編集方法</h1>

   <h1 style="padding-left:24px;color:green;">
      <Edit color="green" /> 商品データの編集手順
   </h1>
   <h2 style="padding-left:24px;">編集方法</h2>
   <h4 style="padding-left:24px;">設定ファイル：data/products.js</h4>

   <ul>
      <li>「新規作成データ」に入力すると「追加データ」に自動で反映されます。「追加データ」は直接編集も出来ます。</li>
      <li>入力後コピーアイコンをクリックしますとクリップボードへコピーされます。</li>
      <li>使用のエディタ(メモ帳など)で商品データファイル(products.js)を開きます。</li>
      <li>コピーしたテキストを、挿入位置へ貼り付け保存します。</li>
      <li>ブラウザ画面を再読み込みし変更が反映されていることを確認します。</li>
   </ul>

<div class="mdc-layout-grid" style="margin: auto;">
  <div class="mdc-layout-grid__inner">

    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6">

      <div class="mdc-card card-ex">

         <h3>新規作成データ</h3>

         <ul class="size-08">
           <li><code>ID番号</code>は自動で挿入されます。</li>
           <li><code>管理番号</code> は未入力可です。</li>
           <li>量目は単位を明記します(例：300g, 3kg)。</li>
           <li>数量は販売可能数を設定します(初期値:10)。</li>
           <li>表示ラベルは、非表示(初期値)<code>0</code>表示<code>1</code>です。</li>
           <li>商品画像形式は jpg, png 等自由です。</li>
         </ul>

         <div class="mdc-card__primary-action">
 
             <table>

               {#each items as item,i}
                  <tr>	
                     <td>
	            
                        <label class="mdc-text-field mdc-text-field--outlined">
                          <span class="mdc-notched-outline">
                            <span class="mdc-notched-outline__leading"></span>
                            <span class="mdc-notched-outline__notch">
                              <span class="mdc-floating-label" id="label-{i}">
                              {item.ph}
                              </span>
                            </span>
                            <span class="mdc-notched-outline__trailing"></span>
                          </span>

                          <input type="text" 
                                 class="mdc-text-field__input" 
                                 aria-labelledby="label-{i}"
                                 bind:value="{item.bd}" 
                                 placeholder="{item.ph}" 
                                 style="width:{wInput1}px">
                        </label>
            
	                  </td>
                  </tr>
               {/each}
            </table>

      <ul class="size-08">
        <li>空欄の場合は無視されます。</li>
        <li>文字と背景の色は変更可能です。</li>
      </ul>
 
      <table>
      {#each clips as clip, i}
        <tr>
          <td>
            <label class="mdc-text-field mdc-text-field--outlined">
              <span class="mdc-notched-outline">
                <span class="mdc-notched-outline__leading"></span>
                <span class="mdc-notched-outline__notch">
                  <span class="mdc-floating-label" id="clip-{i}">
                  {clip.ph}{i+1}
                  </span>
                </span>
                <span class="mdc-notched-outline__trailing"></span>
              </span>

              <input type="text" 
                     class="mdc-text-field__input" 
                     aria-labelledby="clip-{i}"
                     bind:value="{clip.bd}" 
                     style="width:{wInput2}px">
                     <!-- placeholder="{clip.ph}" -->
            </label>
 
         </td>
         <td>
            <input value="あ" style="{clip.color}width:38px;" class="center" disabled>
	      </td>
        </tr>
      {/each}
      
        <tr>
	      <td colspan="2">
            <ul class="size-08">
              <li>改行すると箇条書きとなります。</li>
            </ul>
	      </td>
		  </tr>
			
        <tr>
	      <td colspan="2">
            <fieldset>
            <legend>商品説明</legend>
               <textarea bind:value={text} style="width:100%;height:200px;"></textarea>
            </fieldset>
	      </td>
        </tr>
      </table>

         </div>
       </div>

    </div>

    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
    
      <br>
      <br>
      <br>
      <br>
      <div class="mdc-card" style="background-color:#fff;padding:8px;padding-left:14px;">
         <h3>追加データ</h3>
         
         <ul class="size-08">
            <li>表示のデータテキストは直接編集出来ます。</li>
            <li>テキストをコピーして products.js ファイルへ貼り付けて下さい。</li>
            <li>中間に挿入するデータは末尾に、最後に追加する場合は前データの末尾に<code>,</code>を付加して下さい。
                最後データ末尾に付加する必要はありません。<br>
               例:<code>&#123; A &#125;, &#123; 挿入データ &#125;, &#123; 最後データ &#125;</code>
            </li>
            <li>データは全てファイルにて直接編集可能です。</li>
         </ul>
                 

         <div class="right">
            <button class="mdc-icon-button 
                     material-icons
                     mdc-card__action 
                     mdc-card__action--icon--unbounded"
              title="クリップボードにコピー"
              on:click="{() => copyToCBoard(1)}">
              <ContentCopy color="green" size="2em"/>
            </button>
            
         </div>										 

      <div class="mdc-card__primary-action editor-text" contenteditable="true" id="output1">
 
         &#123;
	      {#each items as item, i}
               <div class="item">
                  {item.var}:"{item.bd}",
               </div>										 
         {/each}

      <div class="item">clips:[</div>
      {#each clips as clip, i}

         <div class="item2">
            &#123; msg:'{clip.bd}', color: {clip.var}&#125;
            {#if i < clips.length-1}
            ,										 
            {/if}
         </div>

      {/each}
         <div class="item">],
         <br>
         text:"{_text}"
		   </div>
         &#125;
       
      </div>
    </div>
   
   </div>
 </div>
</div>

<h1 style="padding-left:24px;color:green;">
   <Edit color="green" /> 注文メイルの編集手順
</h1>
<h2 style="padding-left:24px;">編集方法</h2>
<h4 style="padding-left:24px;">設定ファイル：data/init.js</h4>
<ul>
   <li>「注文用定形メイル」各部に入力すると「変更データ」に自動で反映されます。「変更データ」は直接編集も出来ます。</li>
   <li>必要事項を入力後「変更データ」をマウスで選択してテキストをコピーします。</li>
   <li>使用のエディタ(メモ帳など)で設定ファイル(init.js)を開きます。</li>
   <li>コピーしたテキストを、「// 注文メール設定」の既存部分と入れ替え保存します。</li>
   <li>ブラウザ画面で実際にテストし開かれた注文メイルに反映されていることを確認します。</li>
   <li>設定ファイル(init.js)を直接編集も出来ます。その場合[挿入テキスト]はこの作成フォームを使用すると自動で改行が変換付加されます</li>
</ul>

<!-- 注文メイルの編集 -->
<div class="mdc-layout-grid" style="margin: auto;">
  <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6">

    <h1 style="padding-left:24px;">データ作成</h1>
    <div class="mdc-card card-ex">

         <h3>注文用定形メイル</h3>
         <ul class="size-08">
           <li>[挿入テキスト] 各部に定形文を挿入出来ます。</li>
         </ul>

         <div class="mdc-card__primary-action">
 
            <table>
               {#each mail_items as item, i}
                  {#if i < 3 }
                     <tr>
                        <td>
                              <label class="mdc-text-field mdc-text-field--outlined">
                                <span class="mdc-notched-outline">
                                  <span class="mdc-notched-outline__leading"></span>
                                  <span class="mdc-notched-outline__notch">
                                    <span class="mdc-floating-label" id="label-{i}">
                                    {mail_items[i].ph}
                                    </span>
                                  </span>
                                  <span class="mdc-notched-outline__trailing"></span>
                                </span>
                                <input type="text"
                                       class="mdc-text-field__input"
                                       aria-labelledby="m-label-{i}"
                                       bind:value="{mail_items[i].bd}"
                                       placeholder="{mail_items[i].ph}"
                                       style="width:{wInput1}px">
                              </label>
                        </td>
                     </tr>
                  {/if}
               {/each}
            </table>

            <br>

            -------------------------------------------------
            <div class="item size-06">注文日時：2020年11月2日(月曜日) 9時15分37秒</div>
            <br>
            <br>
            <div class="item size-06">
                 【お客様情報：お届け先】(＊は必須。空欄は必要あれば記入して下さい)<br>
            　名前 ＊：<br>
            　郵便番号 ：<br>
            　届け先住所 ＊：<br>
            　連絡先電話番号：<br>
            　振込方法：郵便振込<br>
            ---------------------------------------------------
            </div>

            [挿入テキスト１]
            <textarea bind:value="{mail_items[4].bd}" style="width:100%;height:120px;"></textarea>

            <br>
            <br>

            <div class="item size-06">
            　注文品内訳は以下のとおりです。<br>
            ---------------------------------------------------<br>
               【注文品内訳】<br>
            注文品目数：【1】<br>
            [1][V-2C]旬野菜詰合せセット:D - 300(円)x1(個)=300円<br>
            ---------------------------------------------------<br>
            総計金額：300円 + 消費税(外税:8％)24円 + 送料(送料無料を除く)<br>
            </div>

            [挿入テキスト2]
            <textarea bind:value="{mail_items[5].bd}" style="width:100%;height:120px;"></textarea>

            <div class="item size-06">
            ---------------------------------------------------<br>
            </div>
            
            <!--【伝言・意見・要望欄】-->
            伝言欄等<input type="text" 
                         bind:value="{mail_items[3].bd}"
                         placeholder="{mail_items[3].ph}">

            <div class="item size-06">
            ---------------------------------------------------<br>
            </div>
            [挿入テキスト3]
            <textarea bind:value="{mail_items[6].bd}" style="width:100%;height:120px;"></textarea>

         </div>
       </div>

    </div>

    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
      <br>
      <br>
      <br>
      <br>
      <div class="mdc-card" style="background-color:#fff;padding:8px;padding-left:14px;">
         <h3>変更データ</h3>
         
         <ul class="size-08">
            <li>表示のデータテキストは直接編集出来ます。</li>
            <li><code>init.js</code>ファイルの当該データを変更して下さい(緑字部分)。</li>
            <li>「お客様情報」「商品内訳」は自動で挿入されます。</li>
         </ul>

         <div class="right">
            <button class="mdc-icon-button 
                     material-icons
                     mdc-card__action 
                     mdc-card__action--icon--unbounded"
              title="クリップボードにコピー"
              on:click="{() => copyToCBoard(2)}">
              <ContentCopy color="green" size="2em"/>
            </button>
         </div>										 
              
   <div class="mdc-card__primary-action editor-text" contenteditable="true" id="output2">
 
	const order_mail = &#123;

       <div style="color:green;">

	         {#each mail_items as item, i}
	         
               {#if i < 4}	      
                  <div class="item">
                     {item.var}:"{item.bd}",
                  </div>										 
               {/if}	      

            {/each}

            <div class="item">
               template1: "{template1}"
            </div>
            <div class="item">
               template2: "{template2}"
            </div>
            <div class="item">
               template3: "{template3}"
            </div>
         </div>

      	&#125;;

      </div>

      <h3>サンプル画像</h3>
      <img src="./images/mail-image2.png" alt="メイルサンプル画像" title="メイルサンプル画像" width="{imgW}">

    </div>
  
   </div>
   
 </div>
</div>



<h1 style="padding-left:24px;color:green;">
   <Edit color="green" /> 拡張メニュー編集
</h1>
<h2 style="padding-left:24px;">編集方法</h2>
<h4 style="padding-left:24px;">設定ファイル：data/user-pages.js</h4>

<ul>
   <li>設定ファイルでページを自由に追加出来ます。</li>
   <li>タブをクリックすると設定されている各ページのテキストが読込まれます。</li>
   <li>編集後はコピーボタンをクリックしデータファイルの当該部に張付け入替えます。</li>
   <li>参照サイト： <br>      
      <a href="https://www.markdown.jp/syntax/" target="_blank">Markdown記法</a><br>  
      <a href="https://qiita.com/kamorits/items/6f342da395ad57468ae3" target="_blank">
         マークダウン記法 一覧表・チートシート / Qiita
      </a> 
   </li>  
</ul>

<h2 style="padding-left:24px;">独自拡張方法</h2>
<ul>
   <li>表示は、CSS を用いることでカスタマイズ可能です。</li>
   <li>コピーされた表示テキストは、改行処理がされています。</li>
</ul>


<div class="mdc-layout-grid">
  <div class="mdc-layout-grid__inner">

    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6">

      <h4 class="title-md">ページテキスト(Markdown)</h4>
      
      <div class="btn-groupe">
      
         <button class="mdc-button mdc-button--outlined">
            <span class="mdc-button__ripple"></span>
            <span class="mdc-button__label">
               ページ数：<span class="fs16">{user_pages.length}</span>
            </span>
         </button>

         <button class="mdc-icon-button" title="ヘルプ"
                 on:click="{()=>openText(-1)}">  
            <Help color="#79b700" size="2em"/>
         </button>
         <button class="mdc-icon-button 
                  material-icons
                  mdc-card__action 
                  mdc-card__action--icon--unbounded"
           title="クリップボードにコピー"
           on:click="{() => copyToCBoard(3)}">
           <ContentCopy color="#79b700" size="2em"/>
         </button>
      </div>										 

      <br clear="all">

      <div class="mdc-tab-bar" role="tablist">
        <div class="mdc-tab-scroller">
          <div class="mdc-tab-scroller__scroll-area">
            <div class="mdc-tab-scroller__scroll-content">

         {#each user_pages as {subject}, i}
              <button class="mdc-tab mdc-tab--active" 
                      role="tab" 
                      aria-selected="true" 
                      tabindex="0"
                       on:click="{()=>openText(i)}">
                <span class="mdc-tab__content">
                  <span class="mdc-tab__icon" aria-hidden="true">
                     <FileText color="gray" size="1em"/>
                  </span><span class="mdc-tab__text-label">
                     {subject}
                  </span>
                </span>
                <span class="mdc-tab-indicator mdc-tab-indicator--active">
                  <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
              </button>
         {/each}

            </div>
          </div>
        </div>
      </div>
      <textarea class="md-textarea" bind:value={mdtext} style="height: 700px;" id="output3"></textarea>
    </div>

    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
       <h4>ブラウザ実際表示(Html)</h4>
       <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6 md-html">
          {@html marked(mdtext)}    
       </div>
    </div>

  </div>
</div>


</div>


<style>

   /* 追加メニュー */   
   .title-md{
      float:left;
      margin: 0px;
   }
	.md-textarea { width: 100%; height: 700px; }
   .md-html{
		border:solid 1px #ccc;
   	margin-top:48px;
   	padding: 4px 12px;
   	width: 100%;
   	height: 700px;
      overflow-y: scroll; 
    }
   .fs16{ font-size:1.4em; }

   .btn-groupe{
      float: right;
	   margin: 0px;
   }
   .btn-groupe button{
	   margin-right:4px;
   }

	table td{
   	 padding-top:6px;
	}

	textarea { width: 100%; height: 200px; }

	.card-ex{
	   background-color:#fff;
	   padding:8px;
	   padding-left:14px;
   }

   .editor-text{
	   padding:8px;
	   padding-left:14px;
   }
   
	.item{
	   padding-left:14px;
	}
	.item2{
	   padding-left:28px;
	}

</style>


