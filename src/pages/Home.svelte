<!-- (スマホ: 560px | タブレット: 960px | PC) -->
<svelte:window bind:outerWidth={oW} />

{#await promise}

  <div class="container">
     <Loading />
  </div>

{:then _products_ }

<div class="container">

<!--MAIN TITLE IMAGE -->
<img src="./images/{setting.top_image}" 
     alt="{user.shop}" 
     title="{user.shop}" 
     class="logo-img">
<!--MESSAGE -->
<div class="mdc-typography--headline4 shop-title">
   {#if message[0].msg === "農業者向け販売カート" }
      {@html message[0].msg} v.{$version}
   {:else}
      {@html message[0].msg}
   {/if}
</div>
   {#each message as {msg}, i}
      {#if i > 0 }
         <div class="mdc-typography--subtitle2 shop-title">{@html msg}</div>
      {/if}
   {/each}

<div class="mdc-layout-grid">
  <div class="mdc-layout-grid__inner">

   {#each _products_ as {code, name, subtitle, img, price, sale, 
                         max, gram, shipping, sold, clips, text}, i}

      {#if i < count}

         <div class="mdc-layout-grid__cell">
         
            <div class="mdc-card">
               <div class="mdc-card__primary-action">
                  <!--画像表示 -->
                  <div class="mdc-card__media 
                              mdc-card__media--square 
                              mdc-card__media--16-9" 
                       style="background-image: url('./images/{img}');" 
                       alt="{name} 商品画像" 
                       title="{name} 商品画像">

                     <div class="mdc-card__media-content">
                    
                        <!-- 商品画像内情報表示 -->
                        {#if sale === 1}
                           <div class="sale">Sale</div>
                        {/if}
                        {#if shipping === 1 }
                           <span class="shipping">送料無料</span>
                        {/if}
                        {#if sold === 1 }
                           <span class="chip-sold">完売しました</span>
                        {/if}
                        <!-- 商品コード表示 -->
                        <span class="code">{code}</span>

                      </div>

                  </div><!-- /media -->

                  <!-- 商品名表示 -->
                  <div class="mdc-card__primary card-title"
                       style="{setting.title_back}">
                     <div class="mdc-card__title card-title-ex">
                         {name}
                     </div>
                  </div>
                  <!-- 商品説明表示 -->
                  <div class="subtitle">
                    <div class="mdc-card__subtitle
                              　mdc-typography 
                              　mdc-typography--subtitle1">
                        {subtitle}     
                    </div>
                  </div>

                  <!-- 商品ポイント表示：CLIPS -->
                  <div class="mdc-chip-set" 
                       style="margin:0 auto;" 
                       role="grid">
                     {#each clips as {msg, color}, i}
                        {#if i < 3  }
                           {#if msg != "" }
                                <div class="mdc-chip" role="row" style="{color}">
                                  <div class="mdc-chip__ripple"></div>
                                  <span role="gridcell">
                                    <span role="button" 
                                          tabindex="0" 
                                          class="mdc-chip__primary-action">
                                      <span class="mdc-chip__text">{msg}</span>
                                    </span>
                                  </span>
                                </div>
                           {/if}
                        {/if}
                        
                     {/each}
                  </div>
                  
               </div>

                <!-- 商品細目表示 => 計算 -->
                <table border="0" class="price-table">
                  <tbody>
                    <tr>
                      <td align="center" colspan="2">

                          <!-- 量目表示 -->
                          <div class="mdc-chip gchip-l">
                              <span role="gridcell">
                                 <span role="button" 
                                       tabindex="0" 
                                       class="mdc-chip__primary-action">
                                   <span class="mdc-chip__text">
                                       <strong>&nbsp;&nbsp;量目</strong>
                                   </span>
                                 </span>
                              </span>
                              <span class="mdc-chip gchip-r">
                                 <span role="gridcell">
                                    <span role="button" 
                                          tabindex="0" 
                                          class="mdc-chip__primary-action">
                                      <span class="mdc-chip__text">
                                          <strong><span class="gram">{gram}</span></strong>
                                      </span>
                                    </span>
                                 </span>
                              </span>
                           </div>

                           <div class="mdc-chip pchip-l">
                              <span role="gridcell">
                                 <span role="button" 
                                       tabindex="0" 
                                       class="mdc-chip__primary-action">
                                   <span class="mdc-chip__text">
                                       <strong>&nbsp;&nbsp;単価
                                   </span>
                                 </span>
                              </span>
                              <span class="mdc-chip pchip-r">
                                 <span role="gridcell">
                                    <span role="button" 
                                          tabindex="0" 
                                          class="mdc-chip__primary-action">
                                      <span class="mdc-chip__text">
                                          <strong><span class="gram">{price}円</span></strong>
                                      </span>
                                    </span>
                                 </span>
                              </span>
                           </div>

                     </td>
                  </tr>

               <tr>
                  <td align="center" rowspan="2" valign="top">
                       
                  {#if sold === 1 }                   
                      <fieldset class="fs-pack" style="border:solid 1px #ccc;">
                           <legend style="color:#ccc;font-size:0.8em;">個数</legend>
                          <div class="fs-pack-val" style="color:#ccc;">{pack[i]}</div>
                      </fieldset>
                        {:else}
                      <fieldset class="fs-pack">
                           <legend class="ld-pack">個数</legend>
                          <div class="fs-pack-val">{pack[i]}</div>
                      </fieldset>
                        {/if}                              

                  {#if sold === 1 }                   
                     <span class="material-icons">
                       <AddCircle size="2.8em" color="#ccc"/>
                     </span><span class="material-icons">
                        <RemoveCircle size="2.8em" color="#ccc"/>
                     </span>
                  {:else}
                     <span class="material-icons add-btn"
                           on:click="{() => {setSubtotal(1,i,max)}}">
                       <AddCircle size="2.8em" color="#1faa00"/>
                     </span><span class="material-icons add-btn"
                             on:click="{() => {setSubtotal(-1,i,max)}}">
                        <RemoveCircle size="2.8em" color="red"/>
                     </span>
                  {/if}
              
                </td>
                <td align="right">

                   {#if sold === 1 }                   
                      <!-- 完売時無効化 -->
                      <fieldset class="fs-subtotal" style="border:solid 1px #ccc;">
                        <legend  class="ld-subtotal" style="color:#ccc;">小計（円）</legend>
                          <div class="fs-subtotal-val" style="color:#ccc;">{subtotal[i]}</div>
                      </fieldset>

                   {:else}

                      <fieldset class="fs-subtotal">
                        <legend  class="ld-subtotal">小計（円）</legend>
                          <div class="fs-subtotal-val">{subtotal[i]}</div>
                      </fieldset>

                   {/if}                              

                     </td>
                  </tr>

                  <tr>
                   <td align="right">

                      <fieldset class="fs-total">
                        <legend  class="ld-total">総計（円）</legend>
                        <!-- 完売時無効化 -->
                          <div class="fs-total-val">{total}</div>
                      </fieldset>
                        
                   </td>
                 </tr>
               </tbody>
              </table>

  <div class="mdc-card__actions">

    <div class="mdc-card__action-icons">
    
         <!-- カート確認ボタン -->
         <button class="mdc-icon-button
                        material-icons
                        mdc-card__action
                        mdc-card__action--icon--unbounded"
                 title="カートを確認して注文する"
                 disabled="{btn_cart}"
                 style="color:{cartColor}"
                 on:click="{()=>openCart()}"
                 data-mdc-ripple-is-unbounded="true">
                 <ShoppingCart />
         </button>
         
         <!-- リセットボタン -->
         <button class="mdc-icon-button
                        material-icons
                        mdc-card__action 
                        mdc-card__action--icon--unbounded btn-reset" 
                 title="この商品をリセットする" 
                 disabled="{btn_reset[i]}"
                 style="color:{resetColor[i]}"
                 on:click="{()=>resetSelectValue(i)}"
                 data-mdc-ripple-is-unbounded="true">
                 <CancelPresentation />
         </button>

         <!-- 商品説明ボタン -->
         <button class="mdc-icon-button 
                        material-icons
                        mdc-card__action 
                        mdc-card__action--icon--unbounded"
                 title="商品説明を見る"
                 on:click="{()=>dspDescription(i)}">
                 <MoreVert />
         </button>

    </div>
  
   <!-- 商品説明description -->
   {#if visibleDescription[i]}
      <div class=" product-info" 
           transition:fly="{{ y: 200, duration: 2000 }}"
           on:click="{()=>dspDescription(i)}">

           <h1 class="mdc-typography--headline6">
              ・商品説明・
           </h1>
           <h1 class="mdc-typography--headline5">
                  【 {name} 】
           </h1>

           <p>{@html marked(text)}</p>  

          <div class="desc-close">※ 閉じるには画面をクリックして下さい。</div>  
     	</div>
   {/if}
    
  </div>
 </div>
</div>

{/if}
{/each}

  </div>

     <!-- ボタン：もっと見る  -->
     <div class="btn-more">
      <button class="mdc-button mdc-button--raised"
              on:click="{() => count += times}"
              disabled={disable} style="">
        <div class="mdc-button__ripple"></div>
        {count}/{dataLength}&nbsp;&nbsp;
        <ArrowDownward color="{moreColor}" size="1.4em" />&nbsp;
        <span class="mdc-button__label"> { more }</span>
      </button>
     </div>

   </div>
</div>


{:catch error}

   <!-- 読み込みエラー -->
	<p style="color: red">{error.message}</p>

{/await}


  <!--  注文表 : 購入リスト ：モーダル -->
   <div class="mdc-dialog">
     <div class="mdc-dialog__container">
       <div class="mdc-dialog__surface"
         role="alertdialog"
         aria-modal="true"
         aria-labelledby="my-dialog-title"
         aria-describedby="" style="width:{dialog_width}px;">

         <h2 class="mdc-dialog__title dialog-title">
            注文フォーム   
         </h2>
         
         <div class='list-msg center'>クリックでリスト間を移動出来ます</div>

         <!-- 注文フォーム  -->            
         <OrderLists cartlist={_products} 
                     mail={user.email} 
                     order={order} 
                     newopen={newopen} />
         
         <div class="mdc-dialog__actions btn-cancel">
           <button type="button"
                   class="mdc-button mdc-button--outlined mdc-dialog__button" 
                   data-mdc-dialog-action="cancel"
                   on:click="{ ()=> orderCancel()}"
                   title="注文フォームを閉じる">
             <div class="mdc-button__ripple"></div>
             <span class="mdc-button__label">閉じる</span>
           </button>
         </div>

       </div>

      <br>
      <br>
      <br>

     </div>
     <div class="mdc-dialog__scrim"></div>
   </div>

   <!-- SNACKBAR 表示 -->
   <div class="mdc-snackbar">
     <div class="mdc-snackbar__surface snackbar" role="status" aria-relevant="additions" >
       <div class="mdc-snackbar__label snackbar-ex" aria-atomic="false">
         この商品の限定数に達しています。
       </div>
       <div class="mdc-snackbar__actions" aria-atomic="true">
         <button class="mdc-button mdc-snackbar__action">
           <div class="mdc-button__ripple"></div>
           <Cancel color="green" size="2em"/>
         </button>
       </div>
     </div>
   </div>


<script>

   let oW = 0; // 画面サイズ
   import { version } from '../components/stores.js';

   // MATERIAL ICONS - SVG
	 import { AddCircle, ArrowDownward, Cancel, CancelPresentation, MoreVert,
	         RemoveCircle, ShoppingCart } from '../material-icons/_index';

   import { fade, fly } from 'svelte/transition';
   import marked        from 'marked';
	import Loading       from '../components/Loading.svelte';
   import OrderLists    from './OrderLists.svelte';

   //　データ読込 
   // SHOP: データ初期化  
   var promise = getProductsData(products);
   let dataLength = products.length; // データ数 

	//　データ読込 
	async function getProductsData(p) {
		if (p !== undefined) {
			   return await p;
			} else {
   			//　データ読込エラー 
 			 	alert(new Error("データの読込に失敗しました"));
			 	throw new Error("Error: データの読込に失敗しました");
			}
	}
	
	let times   = 6; 　　　　　 // 表字数  
	let count   = times;　　　 // カウント初期値
	let disable = "";   　　　 // ボタンの無効化
	let more    = 'もっと見る'; // ボタン表示テキスト
   let moreColor = '#fff';
	
	// 「もっと見る」ボタン
   const counter = () => { count += times }

   $:{
   	// ボタン表示の変更
      if (count > dataLength){
          disable   = "disabled"
          more      = 'これ以上ありません';
          moreColor = '#9ea7aa';
          count     = dataLength;
      }

      total = 0;       // 購入額の計算

      for (let j = 0; j < len; j++) {
           subtotal[j] = +(price[j] * pack[j]);
           total += subtotal[j];

         // RESET BUTTON TOGGLE
         if(pack[j] !== 0){
            btn_reset[j]  = false;
            resetColor[j] = "red";
         } else {
            btn_reset[j]  = true;
            resetColor[j] = "gray";
         }
         
         // CART BUTTON   
         if( total > 0){
             btn_cart  = false;
             cartColor = "green";
         } else {
            btn_cart  = true;
            cartColor = "gray";
         }
         
      }
      
      // ページ TITLE 表示  
  	   document.title = user.page_title;

      // DIALOG 表示の幅調整  
		  if( oW <= 420 ){ dialog_width = 650; }
		  if( oW >  420 ){ dialog_width = 416; }

   }

   // 注文フォーム
   let newopen = 0;        // フラグ：注文フォームを開く
   let dialog;             // 注文表モーダル
   let dialog_width = 416; // MODAL 初期値

   // from init.js
   let mail  = user.email;
   let order = order_mail;

   let visibleDescription = []; // 商品説明表示
   let total = 0;     // 商品合計金額
	 let len   = 0;     // 商品合計件数

	// 商品内容各要素 
	let id       = []; // 商品番号
	let code     = []; // 商品コード
	let name     = []; // 商品名
	let price    = []; // 商品価格
	let subtotal = []; // 小計金額
	let pack     = []; // 商品個数
	let max      = []; // 最大個数
	let shipping = []; // 送料無料
   let _products = []; // 注文用一時配列　

   // フラグ：ボタンの有効無効
   let btn_reset  = [];     // リセットボタン 
   let resetColor = [];     // リセットボタン色
   let btn_cart   = true;   // カートボタン
   let cartColor  = "gray"; // カートボタン色
   let snackbar; // 商品限定数アラート表示

   onMount(async () => {
      window.mdc.autoInit(); // MDC コンポーネント設定
 
	   len = products.length; // 商品件数 

      // 商品データの配列生成：初期化  
      [].forEach.call(products, (obj, i)=>{
            id[i]         = obj.id;
            code[i]       = obj.code;
            name[i]       = obj.name;
            price[i]      = obj.price;
            shipping[i]   = obj.shipping;
            max[i]        = obj.max;
            pack[i]       = 0;
            subtotal[i]   = 0; 
            btn_reset[i]  = true;
            resetColor[i] = "gray";
            // subTotal[i]   = "";     // 小計金額の完売時：disabled
            visibleDescription[i] = false; // 商品説明表示
      });  

      total = 0; // 商品購入総計初期化

      // ボタン表示の初期無効化
      btn_cart  = true;
      cartColor = "gray";

      // 注文表モーダル
      dialog   = new mdc.dialog.MDCDialog(document.querySelector('.mdc-dialog'));
      snackbar = new mdc.snackbar.MDCSnackbar(document.querySelector('.mdc-snackbar'));
 		snackbar.timeoutMs = 4000;

	});

   // --------------------------------------------------------------------
   // RESET
   function resetSelectValue(i){
         
        subtotal[i] = 0;
        pack[i] = 0;
   
   }

   // --------------------------------------------------------------------
   // 個数の増減
	function setSubtotal(flag,i,n) {
	
		let m = pack[i];
	   subtotal[i] = 0; // 小計を初期化
		if(flag ===  1) {
          // 商品の限定数
		    if(m < n) {pack[i] += 1;
      		 } else { 
      		 snackbar.open();
      		 snackbar.labelText = "この商品の限定数に達しています";
		    }
		}
      if(flag === -1) { if(m > 0) pack[i] -= 1;}
		
	}

  // --------------------------------------------------------------------
   // カートを確認する
   let data_buff = [];
   function openCart(n){

      data_buff = [];

       let num = 1;
       for(let i=0;i<len;i++){
   
         let buff = {};

         if(pack[i] > 0){
            buff['id']       = num;
            buff['done']     = true;
            buff['code']     = code[i];
            buff['title']    = name[i];
            buff['price']    = price[i];
            buff['pack']     = pack[i];
            buff['subtotal'] = subtotal[i];
            buff['shipping'] = shipping[i];
            num += 1;
     
         }

         // if( buff['pack'] > 0 ){   
         if( pack[i] > 0 ){   
            data_buff.push(buff)
         }

	    }

      _products = data_buff; // 注文データを渡す配列へ格納

      if( data_buff.length === 0  ){

         alert("何れの商品にも未だ入力がなされていません");
         return;

      }else{

         newopen = 1;
         dialog.open(); // 注文フォームを開く

      }
  
   }

   // --------------------------------------------------------------------
   // 消費税演算　％
   // 税額端数処理設定(業者により指定自由)：　四捨五入-[0] 切り上げ-[1] 切り捨て-[2]
   function calc_tax(price,pack,t,f){
      // let isTax = "";
      let m = price * pack * (t/100) 
      if( t > 0){
        if( f = 0){m = Math.round(m);} // 四捨五入
        if( f = 1){m = Math.ceil(m); } // 切り上げ
        if( f = 2){m = Math.floor(m);} // 切り捨て
        
      }   
      return m;
   } 

   // --------------------------------------------------------------------
   // 注文を取り止める => データを消去
   function orderCancel(){
      
      newopen = 0;
      _products = [];

   }

   // --------------------------------------------------------------------
   // 商品説明の表示
   function dspDescription(n){
      // 一度他の要素を閉じる
      [].forEach.call(products, (obj, i)=>{
         if( i != n ){
            visibleDescription[i] = false;
         }
      });
      visibleDescription[n] = !visibleDescription[n];
   }


</script>



<style type="scss">

.fs-pack{
  width: 56px;
  border:solid 1px #5a9216;
  padding:0px 16px 4px 16px;
}
.ld-pack{
   color:#5a9216;
   font-size:0.8em;
}
.fs-pack-val{
   color:green;
   text-align:center;
   font-size:2em;
}

.fs-subtotal{
  width: 118px;
  border:solid 1px #5a9216;
  padding:0px 16px 4px 16px;
}
.ld-subtotal{
   color:#5a9216;
   font-size:0.8em;
}
.fs-subtotal-val{
   color:green;
   text-align:right;
   font-size:2em;
}

.fs-total{
  width: 118px;
  border:solid 1px #f06292;
  padding:0px 16px 4px 16px;
}
.ld-total{
   color:#f06292;
   font-size:0.8em;
}
.fs-total-val{
   color:#f06292;
   text-align:right;
   font-size:2em;
}


.btn-more{
   text-align:center;
   margin:20px auto;
}
.btn-more button{
   padding:30px;
   font-size:1.4em;
}

.snackbar{
   background-color:#f50057;
   text-align:center;
 }
.snackbar-ex{
  	font-size: 1.2em;
}

.add-btn{ cursor:pointer; }

:global(.container){
   padding-top:56px;
}

/* CHIPS 2色 */
.gchip-l, .pchip-l{
  	font-size: 0.8em;
   margin-left:0px;
   padding-right:0px;
   padding-left:0px;
}
.gchip-l{
   color: green;
   background-color:#90cc00;
}
.pchip-l{
   color: #ffab91;
   background-color:#bf360c;
   margin-top:4px;
}

.gchip-r, .pchip-r{
   border-radius: 0px 50px 50px 0px;
   margin-right:0px;
  	font-size: 1em;
   margin-left:4px;
   width:68px;
}
.gchip-r{
   color: #4b830d;   
   background-color:#aee571;/*#fdff58*/
}
.pchip-r{
   color: #fbe9e7;
   background-color:#f9683a;
}

.price-table{
   margin:auto;
}
.price-table td{
   padding:0px;
}

:global(.btn-order-ex){
   padding: 24px 10px;
   font-size:0.9em;
   margin-bottom: 20px;		
}

.btn-reset{
   color: red;
}

.btn-cancel{
   text-align:center;
   margin: 4px auto 80px auto;
}

.logo-img {
   width:100%;
   max-width: 100%;
   height: auto;
   margin-top:0px;
}

.product-info {
	position: absolute;
	top: 0;
	left: 0;
	width: 81%;
	height: 96%;
   background-color: #fff;
   padding:0px 36px 16px 36px;
   border-radius: 6px;
   border: solid 1px #ccc;
   z-index:1000;
}
.product-info h1{
   color: green;
   text-align: center;
}

.dialog-title {
   color: #dce775;
   font-size: 2rem;
   font-weight: bold;
   text-align: center;
   padding: 20px 30px;
}

.desc-close{
   color: gray;
	position: absolute;
	top: 410px;
}


/* SELECT */
.shop-title{
   color:#b0003a;
   padding-left: 24px;
}

.card-title{
   background-color:#2e7d32;
   border-radius: 0px 0px 6px 6px;
   height: 3em;
}

.card-title-ex{
   padding-top: 10px;
   color:#fff;
   text-align: center;
   font-size: 1.2em;
   font-weight: 300;
}

.subtitle{
   margin: auto;
   color:#2e7d32;
}

:global(.list-msg){
	font-size: 0.8em;
}

.chip-sold {
   width: 180px;
   height: 60px;
   color: #ffffff;
   background-color: #ff1744;/*#ab000d*/
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1.5rem;
   border-radius: 40px 0px 0px 40px;
   cursor: pointer;
   position: absolute;
   top:60%;
   right:0px;
}

.code {
   position: absolute;
   top:8px;
   right:16px;
   color: #ffffff;
   display: flex;
   font-size: 1rem;
}

.sale {
   width: 60px;
   height: 60px;
   color: #ffffff;
   background-color: red;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1.5rem;
   border-radius: 50%;
   cursor: pointer;
   position: absolute;
   margin-top:10px;
   margin-left:10px;
}


.shipping{
   position: absolute;
   top:40px;
   right:12px;
   width: 120px;
   height: 40px;
   color: #fff;
   background-color: #32cb00;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1.2rem;
   font-weight: bold;
   border-radius: 5px;
   cursor: pointer;
   margin-left:6px;
   padding-top:2px;
}

</style>     


