<script>

	import { quintOut }  from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import { flip }      from 'svelte/animate';

  // MATERIAL ICONS - SVG
	import { CheckCircle, MailOutline, Reply } from '../material-icons/_index';

	export let cartlist; // カートリストデータ
	export let mail;     // init.js user.email ->  より
	export let order;

  let alltotal = 0;

  // 振込方法
	let transfer = "";
	export let newopen;      // 注文ダイアログフラグ: 払込方法の選択用
  let orderer_inputs = []; // 注文ダイアログ内の入力初期化
  let ordererInfo = [];

	const [send, receive] = crossfade({
		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});

   let totalTax = 0;

   let items = []; // 購入商品リスト
   $:{

      // フィルタ => 購入商品リスト
      items = cartlist.filter(t => t.done);

      // 総計金額の集計
	   alltotal = 0;
      [].forEach.call(items,(obj,i)=>{
          alltotal += parseInt(obj.subtotal);
      });

      totalTax = caluclateTax(alltotal);

      // 払込方法の選択 => 再度開く時に入力を戻す
      if( newopen === 1 ){ 
         resetData(); 
      }

   }

   onMount(() => {

     // 注文ダイアログ内の入力初期化用
	   ordererInfo = document.querySelectorAll('.odr-info');

   });

   // 入力値のクリア     
   function resetData(){
      [].forEach.call(ordererInfo, (obj, i)=>{
          ordererInfo[i].value = "";
      });
    	transfer = ""; // 払込方法の選択をリセット
   }

  // 日時生成
	function getDate() {
      const youbi = ["日","月","火","水","木","金","土"];
	   const d = new Date();
	   const date = d.getFullYear() + "年" + (d.getMonth() + 1)  + "月" + 
				       d.getDate() + "日" + "(" + youbi[d.getDay()] + "曜日) " + 
				       d.getHours() + "時" + d.getMinutes() + "分" + d.getSeconds() + "秒";  
      return date;				
	}

   // 注文メール作成
	function sendOrderMail(){
      
      let br = '%0D%0A'; // BODY 改行コード変換

      // 購入リスト
      let isOrder = items.length;
		let mail_text = "";
		let all_total = 0;
      
      if(isOrder === 0){
         alert("注文する商品が選択されていません。");
         return;    
      }
    
      // 未入力項目のチェック
      for (let i = 0; i < ordererInfo.length; i++) {
         if(ordererInfo[i].value === "" && orderer[i].required === 1){
            alert("「" + orderer[i].item + "」の入力がされていません");
            return;    
         }
      }

      // 払込方法の選択確認
      if(transfer === ""){
         alert("払込方法の選択がされていません");
         return;    
      }
      // その他へ[]の付加
      if(transfer === "その他"){ transfer += "[　　　　　　　　　　　]"}

      // 未入力項目の表記
      let post = ordererInfo[2].value;
      let tell = ordererInfo[3].value;
      if(ordererInfo[2].value === ""){ post = "[未入力]"}
      if(ordererInfo[3].value === ""){ tell = "[未入力]"}

      // 届け先情報
      let orderer_address = `【お客様情報：お届け先】(＊は必須。空欄は必要あれば記入して下さい)${br}`
                           +`　名前 ＊：${ordererInfo[0].value}${br}`
                           +`　郵便番号 ：${post}${br}`
                           +`　届け先住所 ＊：${ordererInfo[1].value}${br}`
                           +`　連絡先電話番号：${tell}${br}`
                           +`　振込方法：${transfer}${br}`;
                           
      // 購入商品内訳：金額の計算
		  for(var i=0;i<items.length;i++){
         let sp = "";
         if(items[i].shipping === "1"){ sp = "(送料無料)";}

			mail_text += "[" 
			           + items[i].id    + "][" 
			           + items[i].code  + "]"　
			           + items[i].title + " - " 
			           + items[i].price + "(円)x" 
			           + items[i].pack  + "(個)=" 
			           + items[i].subtotal + `円` + sp + br;
			all_total += parseInt(items[i].subtotal);           
		}

		// 消費税計算
		let isTax = "-";
		// 端数処理
      if( tax > 0){
        isTax = ` + 消費税(外税:${tax}％)${caluclateTax(all_total)}円`
      }

		// 改行コード変換処理
      let tmp1 = order.template1.replace( /\[r\]/gi, `${br}`);
      let tmp2 = order.template2.replace( /\[r\]/gi, `${br}`);
      let tmp3 = order.template3.replace( /\[r\]/gi, `${br}`);

		let border = `---------------------------------------------------${br}`;

      if(isOrder === 0){
         alert("注文する商品が選択されていません。");
      } else {

         mail_text  = `注文品目数：【` + items.length + `】${br}` + mail_text;
         // let mailto = `mailto:${user.email}?`
         let mailto = `mailto:${mail}?`
                    + `subject=${order.subject}`
                    + `&body=${br}${order.title}${br}` 
                    + `　注文日時：${getDate()}${br}${br}` 
                    + `${orderer_address}`
                    + `${border}${br}` 
                    + `${tmp1}` 
                    + `${border}` 
                    + `【注文品内訳】${br}`
                    + `${mail_text}` 
                    + `${border}` 
                    + `総計金額：${all_total}円${isTax} + 送料(送料無料を除く)${br}`
                    + `${tmp2}`
                    + `${border}` 
                    + `${order.message}${br}${br}${br}${br}${br}${br}`
                    + `${border}` 
                    + `${tmp3}`

           
         location.href = mailto; // メイルを開く
      }

   }
   
	// 消費税計算
   function caluclateTax(total){
      let t = total*(tax/100)
   	// 端数処理
      if( tax_frac === 0){t = Math.round(t);} // 四捨五入: default 
      if( tax_frac === 1){t = Math.ceil(t) ;} // 切り上げ
      if( tax_frac === 2){t = Math.floor(t);} // 切り捨て
      return t;   
   }

</script>


   <div class='bought'>
	   <fieldset>
	      <legend>購入リスト</legend>
		      
		      {#each cartlist.filter(t => t.done) as p (p.id)}
			      <label in:receive="{{key: p.id}}"
				          out:send="{{key: p.id}}"
				          animate:flip>
				      <div class="list-item">
   				      <input type=checkbox bind:checked={p.done}>
                     {p.id}:{p.title}
                  </div>
				      <div class="clips">
                      {#if p.shipping === 1}
                         <span class="chip-shipping">
                           <span role="button" tabindex="0" class="mdc-chip__primary-action">
                             <span class="mdc-chip__text">送</span>
                           </span>
                         </span>
                      {/if}

                     <span class="chip-left">
                        <span role="button" tabindex="0" class="mdc-chip__primary-action">
                          <span class="mdc-chip__text">単価：{p.price}円</span>
                        </span>
                      </span><span class="chip-right">
                        <span role="button" tabindex="0" class="mdc-chip__primary-action">
                          <span class="mdc-chip__text">個数：{p.pack}</span>
                        </span>
                      </span>
          
                       <div class="mdc-chip chip-subtotal" role="row">
                         <div class="mdc-chip__ripple"></div>
                         <span role="gridcell">
                           <span role="button"
                                 tabindex="-1" 
                                 class="mdc-chip__primary-action">
                             <span class="mdc-chip__text">
                                 小計:<strong>{p.subtotal}</strong>円
                             </span>
                           </span>
                         </span>
                       </div>

				      </div>
			      </label>
		      {/each}
		   

        <div class="mdc-card__actions">
          <div class="mdc-card__action-buttons margin-auto">

            <button class="mdc-button 
                           mdc-button--outline 
                           mdc-card__action 
                           mdc-card__action--button 
                           btn-alltotal">
              <div class="mdc-button__ripple"></div>
              <span class="mdc-button__label">
                総計:<strong>{alltotal}</strong>円
              </span>
            </button>
            ＋
            <span class="btn-tax">
                消費税:<strong>{totalTax}</strong>円
            </span>

          </div>
        </div>

       <div class='list-msg center'>総計金額 + 消費税の他に送料がかかります。</div>
                <div class='list-msg r-t'>
             <span class="chip-shipping">
               <span role="button" tabindex="0" class="mdc-chip__primary-action">
                 <span class="mdc-chip__text">送</span>
               </span>
             </span> は送料無料です
         </div>


	   </fieldset>
   </div>


   <div class='cancel'>
	   <fieldset>
	      <legend>取消しリスト</legend>

		   {#each cartlist.filter(t => !t.done) as p (p.id)}
			   <label
				   in:receive="{{key: p.id}}"
				   out:send="{{key: p.id}}"
				   animate:flip>
				   <div class="list-item list-item-cancel">
   				   <input type=checkbox bind:checked={p.done}>
                  {p.id}:{p.title}
               </div>

			      <div class="clips">

                {#if p.shipping === 1}

                   <span class="chip-shipping-ex">
                     <span role="button" tabindex="0" class="mdc-chip__primary-action">
                       <span class="mdc-chip__text">送</span>
                     </span>
                   </span>

                {/if}

               <span class="chip-left-ex">
                  <span role="button" tabindex="0" class="mdc-chip__primary-action">
                    <span class="mdc-chip__text">単価：{p.price}円</span>
                  </span>
                </span><span class="chip-right-ex">
                  <span role="button" tabindex="0" class="mdc-chip__primary-action">
                    <span class="mdc-chip__text">個数：{p.pack}</span>
                  </span>
                </span>
          

                 <div class="mdc-chip chip-subtotal-ex">
                   <div class="mdc-chip__ripple"></div>
                   <span role="gridcell">
                     <span role="button" tabindex="-1" class="mdc-chip__primary-action">
                       <span class="mdc-chip__text">
                           小計:<strong>{p.subtotal}</strong>円
                       </span>
                     </span>
                   </span>
                 </div>

			      </div>
		   </label>
	    {/each}

	   </fieldset>

</div>


<div class='board'>

   <fieldset>
    <legend>払込方法の選択</legend>

         {#each transfers as tr, i }
            <div class="mdc-form-field">

                 <div class="mdc-radio">
                   <input class="mdc-radio__native-control" 
                          type="radio" 
                          bind:group={transfer} 
                          value="{tr}">
                   <div class="mdc-radio__background">
                     <div class="mdc-radio__outer-circle"></div>
                     <div class="mdc-radio__inner-circle"></div>
                   </div>
                   <div class="mdc-radio__ripple"></div>
                 </div>
                 <label class="tr-title">{tr}</label>
	               
            </div>
         {/each}

    <div class="list-msg center">その他を選択した場合はメイル送信時に記して下さい。</div>

   </fieldset>


</div>


<div class='board'>

   <fieldset>
      <legend class="legend">お客様情報の入力</legend>

      <div class="list-msg">入力情報は注文メイル送信時に修正可能です。</div>
      <div class="list-msg">
         注文者と受取人が異なる場合は<strong class=" red">受取人の住所氏名</strong>を記入して下さい
         （注文者氏名はメイルに記入して下さい）。
      </div>
      
      
      <div class="list-msg center">
        （<CheckCircle color="red" size="1.2em" /> 印は必須項目です）
      </div>

      <br>

      {#each orderer as {item, width,holder,required,helper,color},k}

         <div class="mdc-text-field 
                     text-field 
                     mdc-text-field--outlined 
                     mdc-text-field--with-trailing-icon" 
              style="width:{width}px;">
            <input type="text" 
                   id="text-field-outlined-trailing{k}"
                   placeholder="{holder}" 
                   class="mdc-text-field__input odr-info" 
                   aria-describedby="text-field-outlined-trailing-helper-text">

                   {#if required === 1}
                     <i class="material-icons mdc-text-field__icon" 
                        style="color:red;font-size:1em;padding-right:10px;">
                        <CheckCircle color="red" size="1em" />
                     </i>
                   {/if}

            <div class="mdc-notched-outline mdc-notched-outline--upgraded">
               <div class="mdc-notched-outline__leading"></div>
               <div class="mdc-notched-outline__notch">
                  <label class="mdc-floating-label"
                         for="text-field-outlined-trailing">
                         {item}
                  </label>
               </div>
               <div class="mdc-notched-outline__trailing"></div>
            </div>
         </div>
         <div class="mdc-text-field-helper-line" style="margin-bottom:8px;">
            <div class="mdc-text-field-helper-text" 
                id="my-helper-{k}" 
                aria-hidden="true">
               <span style="color:{color};">{@html helper}</span>
            </div>
         </div>

      {/each}

      <button class="mdc-icon-button material-icons" 
              title="入力情報をリセットする"
              on:click="{()=>resetData()}">
         <Reply color="red" />
      </button>

   </fieldset>

 </div>

 
  <div class="board">

     <div class="mdc-card__actions">

         <div class="mdc-card__action-buttons" style="margin:auto;">

            <button class="mdc-button mdc-button--raised order-btn"
                    on:click="{()=>sendOrderMail()}"
                    title="注文する">
              <div class="mdc-button__ripple"></div>
              <i class="material-icons mdc-button__icon" aria-hidden="true">
                  <MailOutline />
              </i>
              <span class="mdc-button__label">注文する</span>
            </button>

         </div>

     </div>

     <div class='list-msg center'>送信には使用端末でのメイル設定がなされている必要があります。</div>

  </div>

<br>
<br>
<br>
<br>

<style>

   .r-t{
    text-align:center;
   }

   .order-btn{
 		width: 200px;
 		height: 60px;
      font-size:1.8em;
   	color: #fff;
   }

   .order-btn i{
      vertical-align:middle;
      font-size:1em;
      padding: 0px 10px 10px 0px;
   }

   .list-item{
		padding: 6px 0px;
      font-size:1.2em;
      font-weight:300;
   }

   .list-item-cancel{
	   color: #fff;
	   background-color: #ccc;
   }

   .tr-title{
		padding-top: 4px;
      font-size:1.2em;
   	color: green;
   }

   .fieldset{
  		border: solid 1px green;
		padding: 0;
		border-radius: 2px;
   }

	legend, .legend-ex{
      font-size:1.2em;
      font-weight:bold;
   	color: green;
   }
	.legend-ex{
   	color: #800000;
   }

   .margin-auto{
	   margin: auto;		
   }

   .btn-alltotal{
		color: #fff;
		background-color: #d50000;
	}

   .btn-tax{
		color: gray;
  		border: solid 1px #b2ebf2;
  		border-radius: 6px;
		background-color: #fff;
		padding: 2px 6px 4px 6px;
	   margin-left: 6px;		
      font-size:0.8em;
	}

   .clips{
	   background-color: #fff;
  		border: solid 1px #eee;
      text-align:right;
   }

	.board, .cancel, .bought {
		width: 100%;
		padding:0px;
		box-sizing: border-box;
	   margin-bottom: 12px;		
	}

	input { margin: 0 0 0 8px}

	.bought label {
		background-color: rgb(180,240,100);
	}

	label:hover button {
		opacity: 1;
	}
	
   .chip-left,.chip-right,.chip-left-ex,.chip-right-ex { 
      height:36px;
      color: #fff; 
      font-size:0.7em;
      padding:1px;
    }
   .chip-left, .chip-left-ex { 
      background-color: #ff9100; 
      border-radius: 100px 0 0 100px;
      padding-right:4px;
      padding-left:8px;
  		margin-left: 2px;
  }
   .chip-right,.chip-right-ex { 
      padding-right:8px;
      padding-left:4px;
      background-color: #7ecb20; 
      border-radius: 0 100px 100px 0;
   }

   .chip-left-ex,.chip-right-ex { 
      background-color: #cfd8dc; 
   }

   .chip-subtotal, .chip-subtotal-ex{
 		color: #fff;
   	border-radius: 2px 2px;
		padding-top: 2px;
   }
   .chip-subtotal{
 		color: #000;
 		background-color: #84ffff;
   }

   :global(.chip-shipping,.chip-shipping-ex){
      padding:2px 6px;
      height:36px;
      color: #fff; 
      font-size:0.6em;
      border-radius: 100px 100px;
   }
   :global(.chip-shipping){ background-color: red;}
   .chip-shipping-ex{ background-color: #ccc;}
	
</style>
