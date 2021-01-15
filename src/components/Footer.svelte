<script>
   export let year;
	 import { ShoppingBasket } from '../material-icons/_index';
</script>

<style>
   .footer { 
      background-color: #6abf69;
      width: 100%;
      height: 100%;
      color: #ECF0F1;
      text-align:center;
      padding:20px 0px 40px 0px;
      margin-bottom: 0;
   }
   .footer a{ 
      color: #fff;
     	text-decoration: none;
   }
   .card{
      height:164px;
      width:420px;
   }
   .card-content{
      text-align:left;
      color:#000;
      margin-left:120px;
      padding:12px;
   } 
   
   .sns{
      margin-left: 20px;
   }
 
</style>

<div class="footer">

<div class="mdc-layout-grid">
  <div class="mdc-layout-grid__inner">

   {#if footer.info === 1}
   
    <div class="mdc-layout-grid__cell">

      <div class="mdc-card card">
         <div class="mdc-card__primary-action">
            <div class="mdc-card__media mdc-card__media--square"
                 style="background-image:url(&quot;./images/{footer.image}&quot;);
                        width:110px;">
            </div>
            <div class="mdc-card__media-content card-content">
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
          <div class="mdc-card__action-icons">
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

{#each qr as {code, title, name, image, icon, url} }

   {#if code === 1}

      <div class="mdc-layout-grid__cell">

         <div class="mdc-card card">
            <div class="mdc-card__primary-action">
               <div class="mdc-card__media mdc-card__media--square"
                    style="background-image:url(&quot;./images/{image}&quot;);
                           width:110px;">
               </div>
               <div class="mdc-card__media-content card-content">
                  <h2 class="my-card__title mdc-typography mdc-typography--headline6">
                     {@html title}
                  </h2>
                  <h3 class="my-card__subtitle mdc-typography mdc-typography--subtitle2">
                     {@html name}
                  </h3>
               </div>
            </div>

            <div class="mdc-card__actions">
             <div class="mdc-card__action-icons">
                 <a href="{url}" target="_blank" class="sns">
                     <img src="./images/{icon}" alt="{name}" title="{name}" width="32">
                 </a>
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
