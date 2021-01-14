
<script>

   export let year;
	import { MoreVert, ShoppingBasket } from '../material-icons/_index';


</script>

<style>

.p-10{
   padding:10px;
}

   .footer { 
      background-color: #6abf69;/*#4caf50#4673a0*/
      width: 100%;
      height: 100%;/*560px*/
      color: #ECF0F1;
      text-align:center;
      padding:20px 0px 40px 0px;
      margin-bottom: 0;
   }


   .footer a{ 
      color: #fff;
      	text-decoration: none;
   }
   .card-media{

      width: 100%;
      height: 260px;

   }

   .card-media-sm{
      width: 160px;
      height: 160px;
   }

   .card-media-qr{
      width: 220px;
      height: 220px;
   }
   
   .sns{
      margin-left: 20px;
   }
   
.my-card__primary{padding:1rem;text-align:left;}
.my-card__title{margin:0;color:#2e7d32;}
.my-card__subtitle{margin:0}
.my-card__secondary,.my-card__subtitle{color:rgba(0,0,0,.54);color:var(--mdc-theme-text-secondary-on-background,rgba(0,0,0,.54))}
.my-card__media.mdc-card__media--square{width:110px}
.my-ui-control .my-card__primary-action{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}


</style>


<div class="footer">

<div class="mdc-layout-grid">
  <div class="mdc-layout-grid__inner">



   {#if footer.info === 1}

    <div class="mdc-layout-grid__cell">

      <div class="mdc-card my-ui-control">
        <div class="mdc-card__primary-action my-card__primary-action" tabindex="0">

          <div class="mdc-card__media mdc-card__media--square my-card__media"
               style="background-image:url(&quot;./images/{footer.image}&quot;);">
          </div>
          <div class="my-card__primary">
          
            <h2 class="my-card__title mdc-typography mdc-typography--headline6">
               {@html user.shop}
            </h2>
            <h3 class="my-card__subtitle mdc-typography mdc-typography--subtitle2">
               {user.postage}
            </h3>
            <h3 class="my-card__subtitle mdc-typography mdc-typography--subtitle2">
               {@html user.address}
            </h3>
          
          </div>
        </div>
        
        <div class="mdc-card__actions">
          <div class="mdc-card__action-buttons">

           <!-- SNS リンク  -->
           {#each sns as {name, url, image} }
              <a href="{url}" target="_blank" class="sns">
                 <img src="./images/{image}" alt="{name}" title="{name}" width="32">
              </a>
           {/each}
          </div>

        </div>

      </div>
   
   </div>

{/if}

{#each qr as {code, title, name, image} }

   {#if code === 1}

      <div class="mdc-layout-grid__cell">

         <div class="mdc-card my-ui-control">
           <div class="mdc-card__primary-action my-card__primary-action" tabindex="0">
             <div class="mdc-card__media mdc-card__media--square my-card__media"
                  style="background-image: url(&quot;./images/{image}&quot;);">
             </div>
             <div class="my-card__primary">
               <h2 class="my-card__title mdc-typography mdc-typography--headline6">
                  {@html title}
               </h2>
               <h3 class="my-card__subtitle mdc-typography mdc-typography--subtitle2">
                  {@html name}
               </h3>
             </div>
           </div>
           <div class="mdc-card__actions">
             <div class="mdc-card__action-buttons">
             
            <!-- SNS リンク -- >
               {#each payment as {name, url, image} }
                  <a href="{url}" target="_blank" class="sns">
                     <img src="./images/{image}" alt="{name}" title="{name}" width="32">
                  </a>
               {/each}

             </div>
             
           </div>
         </div>

      </div>

   {/if}

{/each}

      {#if map.map === 1}

         <div class="mdc-layout-grid__cell">
             
      <div class="mdc-card my-ui-control">
        <div class="mdc-card__primary-action my-card__primary-action" tabindex="0">
             
           <iframe src="http://maps.google.co.jp/maps?&output=embed&q=loc:{map.geocode}&q={map.name}&z={map.zoom}" 
                   frameborder="0" 
                   style="border:0;width:{map.width}%;height:{map.height}px;"
                   allowfullscreen="" 
                   aria-hidden="false" 
                   tabindex="0">
           </iframe>

         </div>

         </div>
      </div>

      {/if}
  </div>
</div>

   <h2>
	   <a href="index.html">
         <ShoppingBasket />&nbsp;{user.shop}
	   </a>
   </h2>
	<p>
		{user.email}<br>
		&copy; 2020 - {year}
	</p>

</div>

