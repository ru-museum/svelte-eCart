
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
   .card-image,.card-image-ex{
      width:110px;
      height:110px;   
   }
   .card-image-ex{
      border-radius:50%;
      margin-top: 4px;
      margin-left: 4px;
   }
   
   .ui-control .my-card__primary-action {
      display:-ms-flexbox;
      display:flex;
      -ms-flex-direction:row;
      flex-direction:row
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
      <div class="mdc-card demo-card ui-control">

         <div class="mdc-card__primary-action my-card__primary-action" tabindex="0">
          <div class="mdc-card__media mdc-card__media--square demo-card__media card-image-ex" 
               style="background-image: url(&quot;./images/{footer.image}&quot;);"></div>
          <div class="mdc-card__primary" style="color:green;">
            <h2 class="mdc-card__title mdc-typography mdc-typography--headline6" >
               {@html user.shop}
            </h2>
            <div style="text-align:left;font-size:0.6em;padding:0px 4px;">
              {user.postage}<br>{@html user.address}
            </div>
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

      <div class="mdc-card demo-card ui-control">
        <div class="mdc-card__primary-action my-card__primary-action" tabindex="0">
          <div class="mdc-card__media mdc-card__media--square demo-card__media card-image" 
               style="background-image: url(&quot;./images/{image}&quot;);"></div>
          <div class="mdc-card__primary" style="color:green;">
            <h2 class="mdc-card__title mdc-typography mdc-typography--headline6" >
               {@html title}
            </h2>
            <h3 class="mdc-card__subtitle mdc-typography mdc-typography--subtitle2">
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
                   
                 <iframe src="https://maps.google.co.jp/maps?&output=embed&q=loc:{map.geocode}&q={map.name}&z={map.zoom}" 
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

