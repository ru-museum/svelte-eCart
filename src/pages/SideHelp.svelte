
   <div class="mdc-menu mdc-menu-surface menu-info">
      <div class="info-content">

         <h1>注文の仕方</h1>

         <h1><span class="mark">●</span> 商品の選択</h1>

         <img src="./images/help-image01d.png" 
              alt="商品選択画像" 
              title="商品選択画像" 
              width="250">
         <ul class="image-info">
         
         {#each msgItems1 as item, i} <!-- 1=&#9312 -->
            <li><span class="red">{@html `&#931${i+2};`}</span> {item}</li>
         {/each}
 
         </ul>   

         <div class="div-msg"> 
          商品画像上には「商品名」「管理番号」及び該当する場合「Sale」「送料無料」「完売」が表示されます。
         </div>   

         <br>

         <h1><span class="mark">●</span> 注文フォームを開く</h1>
         
         <div class="div-msg"> 
           <span class="material-icons green">
               shopping_cart
           </span>
           をクリックするとリストが表示されます。
         </div>   
        
         <img src="./images/help-image02e.png" 
              alt="注文表モーダル画面" 
              title="注文表モーダル画面" 
              width="250">

         <div class="div-msg">
            商品名をクリックすると「取消」、又は「購入」リストの間を移動出来ます。
         </div>   

         <br>

         <h1><span class="mark">●</span> 注文メイルの送信</h1>
         
         <img src="./images/help-image02a.png" 
              alt="注文表モーダル画面" 
              title="注文表モーダル画面" 
              width="250">

         <ol class="image-info2">
            {#each msgItems2 as item, i} <!-- 1=&#9312 -->
               <li><span class="green">{@html `&#931${i+2};`}</span> {@html item}</li>
            {/each}
         </ol>   

         
         <img src="./images/help-image03a.png" 
              alt="注文表モーダル画面" 
              title="注文表モーダル画面" 
              width="250">

         <ol class="image-info2">
            {#each msgItems3 as item, i} <!-- 1=&#9312 -->
               <li><span class="green">{@html `&#931${i+2};`}</span> {@html item}</li>
            {/each}
         </ol>   

         <div class="btn-close-ex"> 
            <button class="mdc-icon-button material-icons red"
                    title="閉じる"
                    on:click="{()=>closeHelp()}">
               close
            </button>
         </div>   

         <br>
         <br>
      </div>

   </div>
         

<script>

   // ヘルプを閉じる 
   function closeHelp(){
      const menu = new mdc.menu.MDCMenu(document.querySelector('.mdc-menu'));
      menu.open = !menu.open;
   } 

   // ヘルプ説明：箇条書きリスト
   let msgItems1 = [
      "注文個数を選択します。",
      "選択個数に応じた小計が表示されます。",
      "すべての選択商品の総額が表示されます。",
      "購入する商品の注文リストが開かれます。",
      "この商品の選択した値をリセットします。",
      "この商品の商品説明が表示されます。",
      "この商品のアピールポイントです。",
      "この商品の特徴ポイントが表示されます。" 
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

.menu-info{
   margin-top: 66px;
   padding:0px 10px;
   width:280px;
}


.mark{ color: #a30000;}

.btn-close-ex{
   margin-left: 40px;
}

.image-info,.image-info2{
   width:260px;
   list-style-type:none;
   margin: 0 0 10px 0;
   padding:0;
   font-size:0.8em;
}
.image-info2{
   width:250px;
}


.div-msg{
   width:240px;
   font-size:0.8em;
}

</style>         
         
         
