
   <div class="mdc-menu mdc-menu-surface menu-info">
      <div class="info-content">

         <h1 class="center">注文方法</h1>

         <h3><span class="mark">●</span> 商品の選択</h3>

         <img src="./images/help-image01e.png" 
              alt="商品選択画像" 
              title="商品選択画像" 
              width="250">
         <ul class="image-info">
         
         {#each msgItems1 as item, i} <!-- 白抜き番号　1=&#9312 -->
            <li><span class="red">{@html `&#93${i+12};`}</span> {item}</li>
         {/each}
 
         </ul>   

         <div class="div-msg" style="font-size:0.7em;"> 
          商品画像右上に「管理番号」及び該当する場合には「Sale」「送料無料」「完売」のメッセージが表示されます。
         </div>   

         <br>

         <h3><span class="mark">●</span> 注文フォームを開く</h3>
         
         <div class="div-msg"> 
           <span class="material-icons green">
               <ShoppingCart size="1.4em"/>
           </span>
           をクリックするとリストが表示されます。
         </div>   
        
         <img src="./images/help-image02e.png" 
              alt="注文フォーム・リスト画面" 
              title="注文フォーム・リスト画面" 
              width="250">

         <div class="div-msg">
            リストの商品名をクリックし「取消」或いは「購入」を選択します。
         </div>   

         <br>

         <h3><span class="mark">●</span> 注文メイルの送信</h3>
         
         <img src="./images/help-image03c.png" 
              alt="注文フォーム・払込方法画面" 
              title="注文フォーム・払込方法画面" 
              width="250">

         <ol class="image-info2">
            {#each msgItems2 as item, i} <!-- 1=&#9312 -->
               <li>
                  <span class="green">{@html `&#931${i+2};`}</span>
                   {@html item}
               </li>
            {/each}
         </ol>   

         
         <img src="./images/help-image03a.png" 
              alt="注文フォーム・お客様情報入力画面" 
              title="注文フォーム・お客様情報入力画面" 
              width="250">

         <ol class="image-info2">
            {#each msgItems3 as item, i} <!-- 1=&#9312 -->
               <li><span class="green">{@html `&#931${i+2};`}</span> {@html item}</li>
            {/each}
         </ol>   
 
         <br>
 
         <div class="btn-close-ex"> 
            <span title="ヘルプを閉じる" on:click="{()=>closeHelp()}">
               <XCircleFill color="red" size="4em" />
            </span>
         </div>   

         <br>
         
      </div>

   </div>
         

<script>

	import { Close, HighlightOff, ShoppingCart, XCircleFill } from '../material-icons/_index';

   // ヘルプを閉じる 
   function closeHelp(){
      const menu = new mdc.menu.MDCMenu(document.querySelector('.mdc-menu'));
      menu.open = !menu.open;
   } 

   // ヘルプ説明：箇条書きリスト
   let msgItems1 = [
      "商品名が表示されます。",
      "この商品のアピールポイントです。",
      "この商品の特徴ポイントが表示されます。", 
      "この商品の量目と単価が表示されます。",
      "現在の注文個数を表示します。",
      "注文個数の増減を行います。",
      "個数に応じた小計が表示されます。",
      "選択した全ての商品総額が表示されます。",
      "購入商品の注文リストが開かれます。",
      "この商品の個数と小計をリセットします。",
      "この商品の商品説明が表示されます。",
   ]

   let msgItems2 = [
      "払込方法の何れかを選択します。",
      "「その他」を選択した場合はメイル送信時にその内容を記して下さい。",
      "この項目は<span class='red'>必須</span>です。" 
   ]
   
   let msgItems3 = [
      "注文者氏名、届け先住所は<span class='red'>必須</span>です。",
      "注文者と商品の受取人とが異なる場合は、特に誤りのないようご注意下さい。",
      "郵便番号、連絡先電話番号は必須ではありませんが、正確に配送を行うためなるべくご記入を願います。",
      "「注文する」をクリックしますとお客様常備のメイラーが開かれます。",
      "送信メイルには、伝言、要望、意見などを追加編集出来ます。",
      "開かれたメイル画面で注文内容を再度確認し間違いがなければ送信して下さい。",
      "メイルの受領次第注文確認メイルを送信致します。"
   ]

</script>

         
<style>

h1{ color: #99aa00;}

.menu-info{
   margin-top: 56px;
   right:0px;
   padding:0px 10px 10px 10px;
   width:330px;
}

.info-content{
   width:270px;
   padding-left: 20px;
}

.mark{ color: #a30000;}

.btn-close-ex{
   cursor:pointer;
   margin-left: 40px;
}

.image-info,.image-info2{
   list-style-type:none;
   margin: 0 0 10px 0;
   padding:0;
   font-size:0.8em;
}

.div-msg{
   font-size:0.8em;
}

</style>         
         
         
