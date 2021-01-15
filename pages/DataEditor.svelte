
<script>

   import { Edit, ContentCopy } from "../material-icons/_index";
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
			if (n == 1)	element = document.getElementById('output1');
			if (n == 2)	element = document.getElementById('output2');
			// 新規にダミーを作成
			var copyFrom = document.createElement("textarea");
			// データをコピー
	      // alert(element.innerText);
			copyFrom.textContent = element.innerText; // element.value;
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
	

</script>

<!-- (スマホ: 560px | タブレット: 960px | PC) -->
<svelte:window bind:outerWidth={oW} />

<div class="container">

<h1 class="mdc-typography--headline3">データ編集方法</h1>

      <h1 style="padding-left:24px;color:green;">
         <Edit color="green" /> 商品データの編集手順
      </h1>

      <ol>
         <li>「新規作成データ」に入力すると「追加データ」に自動で反映されます。「追加データ」は直接編集も出来ます。</li>
         <li>入力後コピーアイコンをクリックしますとクリップボードへコピーされます。</li>
         <li>使用のエディタ(メモ帳など)で商品データファイル(products.js)を開きます。</li>
         <li>コピーしたテキストを、挿入位置へ貼り付け保存します。</li>
         <li>ブラウザ画面を再読み込みし変更が反映されていることを確認します。</li>
      </ol>

<div class="mdc-layout-grid" style="margin: auto;">
  <div class="mdc-layout-grid__inner">

    <div class="mdc-layout-grid__cell">

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

    <div class="mdc-layout-grid__cell">
    
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

<ol>
   <li>「注文用定形メイル」各部に入力すると「変更データ」に自動で反映されます。「変更データ」は直接編集も出来ます。</li>
   <li>必要事項を入力後「変更データ」をマウスで選択してテキストをコピーします。</li>
   <li>使用のエディタ(メモ帳など)で設定ファイル(init.js)を開きます。</li>
   <li>コピーしたテキストを、「// 注文メール設定」の既存部分と入れ替え保存します。</li>
   <li>ブラウザ画面で実際にテストし開かれた注文メイルに反映されていることを確認します。</li>
   <li>設定ファイル(init.js)を直接編集も出来ます。その場合[挿入テキスト]はこの作成フォームを使用すると自動で改行が変換付加されます</li>
</ol>

<!-- 注文メイルの編集 -->
<div class="mdc-layout-grid" style="margin: auto;">
  <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell">

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

    <div class="mdc-layout-grid__cell">
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

</div>


<style>
	table td{
   	 padding-top:6px;
	}

	ol{
   	 padding-right:12px;
	}

	.edit-table{
   	width: 600px;
		border:solid 1px #ccc;
	   margin:0 auto;
   }

	.edit-table {
		border:solid 1px #ccc;
   }

   .td-border{
      padding:20px;
	   border:solid 1px green;
   }

	textarea { width: 100%; height: 200px; }
	
	.content{
      background-color:green;
      padding:8px;
      padding-left:14px;
	}
	
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

   .middle{
      vertical-align:middle;
	   padding-top:0px;
   }

</style>

