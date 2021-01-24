<script>

	export let data;
	let products = data;

	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import { flip } from 'svelte/animate';

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

</script>


<div class='board'>

   <div class='right'>
	   <fieldset>
	      <legend>購入リスト</legend>
		      
		      {#each products.filter(t => t.done) as p (p.id)}
			      <label in:receive="{{key: p.id}}"
				          out:send="{{key: p.id}}"
				          animate:flip>
				      <input type=checkbox bind:checked={p.done}>
      				   {p.id}:{p.title}
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
		   
	   </fieldset>
   </div>


   <div class='left'>
	   <fieldset>
	      <legend>取消しリスト</legend>

		   {#each products.filter(t => !t.done) as p (p.id)}
			   <label
				   in:receive="{{key: p.id}}"
				   out:send="{{key: p.id}}"
				   animate:flip>
				   <input type=checkbox bind:checked={p.done}>
				   {p.id}:{p.title}
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

</div>


<br>
<br>
<br>
<br>

<style>

   .clips{
	   background-color: #fff;
  		border: solid 1px #eee;
      text-align:right;
   }

   .fieldset{
  		border: solid 1px green;
		padding: 0;
		border-radius: 2px;
   }
	.board {
		max-width: 40em;
		margin: 0 auto;
	}

	.left, .right {
		width: 100%;
		padding: 0 1em 0 0;
		box-sizing: border-box;
	}

	h2 {
		font-size: 2em;
		font-weight: 200;
		user-select: none;
	}

	label {
		top: 0;
		left: 0;
		display: block;
		font-size: 1.4em;
		font-weight: 260;
		line-height: 1.6em;
		/*padding: 2px;*/
		margin: 0 auto 0.5em auto;
		border-radius: 2px;
		background-color: #eee;
		user-select: none;
	}

	input { margin: 0 0 0 8px}

	.right label {
		background-color: rgb(180,240,100);
	}

	button {
		float: right;
		height: 1em;
		box-sizing: border-box;
		padding: 0 0.5em;
		line-height: 1;
		background-color: transparent;
		border: none;
		color: rgb(170,30,30);
		opacity: 0;
		transition: opacity 0.2s;
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
