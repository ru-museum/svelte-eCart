
<!-- TOP-NAV -->
<header class="mdc-top-app-bar mdc-top-app-bar--fixed dark" id="app-bar">
  <div class="mdc-top-app-bar__row">

    <section class="mdc-top-app-bar__section 
                    mdc-top-app-bar__section--align-start">
    
      <button class="material-icons 
                     mdc-top-app-bar__navigation-icon 
                     mdc-icon-button" 
              aria-label="Open navigation menu"
              on:click="{() => asideClose()}">
            <Menu />
      </button>
      <span class="mdc-top-app-bar__title title">
         <a href="#/home">{user.shop}</a>
      </span>
    </section>

    
    <section class="mdc-top-app-bar__section 
                    mdc-top-app-bar__section--align-end"
             role="toolbar">
      <div class="toolbar mdc-menu-surface--anchor menu-ex">
      
         <button class="material-icons 
                        mdc-top-app-bar__action-item 
                        mdc-icon-button"
                 aria-label="Search"
                 style="background-color:#005005;border-color:#005005;"
                 on:click="{()=>openMenu(0)}" 
                 title="categoryヘルプ">
             <Help />
         </button>

         <SideHelp />
        
         <button class="material-icons 
                        mdc-top-app-bar__action-item 
                        mdc-icon-button"
                 style="background-color:#005005;border-color:#005005;" 
                 aria-label="Options" 
                 on:click="{()=>openMenu(1)}" 
                 title="インフォメーション">
            <MoreVert />
         </button>

         <div class="mdc-menu mdc-menu-surface menu-info">

            <div class="info-content">
               <h2>
                  <span class="material-icons v-align">                  
                     <ShoppingBasket />                  
                  </span>
                  {user.shop}
                  
                  <button class="mdc-icon-button 
                                 material-icons 
                                 btn-close"                
                           on:click="{()=>openMenu(1)}">
                      <Cancel />
                  </button>
               </h2>

               <p>管理責任者： {user.admin}</p>
               <p>住所： {user.address}</p>
               <p>電話： {user.tell}</p>
               <p>e-mail：{user.email}</p>
               
               
               <hr class="divider">
               <ul class="detail">
                  <li>・スマホ、タブレットに対応しています。</li>
                  <li>・IE11に対応しています。</li>
                  <li>・推奨環境： Firefox、Android 4.4-</li>
               </ul>
               
               <hr class="divider">
               <p>制作：<a href="{creator.url}" target="_blank">
                           {creator.name}
                       </a>    
               </p>
               <p>e-mail：{creator.mail}</p>

            </div>
        </div>
        
      </div>
    </section>

  </div>
</header>

 <!-- SIDE-MENU -->
 <aside class="mdc-drawer mdc-drawer--modal drawer-ex">
 
   <div class="mdc-drawer__header">
      <a href="#/home" on:click="{asideClose}" class="nofocus">
         <h3 class="mdc-drawer__title">
           <ShoppingBasket color="#255d00" size="1.2em"/> {user.shop}
         </h3>
      </a>
      <h6 class="mdc-drawer__subtitle">{@html user.email}</h6>
   </div>

   <div class="mdc-drawer__content">
   
      <nav class="mdc-list">
         <a href="#/home" class="mdc-list-item" on:click="{asideClose}">
               <Home color="#558b2f" size="2em"/>&nbsp;&nbsp;HOME
         </a>

         <div class="mdc-list-item" on:click="{()=>{openMenu(0);asideClose()}}">
               <Help color="red" size="2em"/>
              &nbsp;&nbsp;注文の仕方
         </div>

         {#each user_pages as { subject }, i}
            <a class="mdc-list-item" href="#/infomations"
               on:click="{()=> {visible[i]=false;$pageNum=(i+1);asideClose()}}">
               <PlayCircleFilled color="#85bb5c" size="2em"/>
               <span class="mdc-list-item__text">
                  &nbsp;{subject}
               </span>
            </a>
         {/each}

      <!-- // 管理用フラグ-->
      {#if administration === 1 }

         {#each nav_menus as { category, items, icon }, i}
         
               <div class="mdc-list-item" on:click="{()=> visible_panel(i)}">
                    {@html icon}&nbsp;&nbsp;{category}
               </div>
                   
            <!-- SIDEBAR MENU-LIST -->
            {#if visible[i]}

               <ul class="mdc-list" transition:fade>

                  {#each items as { name, ref }}
                     
                     <li class="mdc-list-item list-item" on:click="{asideClose}">
                       {#if ref === "how-to-order"}
                           <span class="mdc-list-item"
                              on:click="{()=>openMenu(0)}">
                              <PlayCircleFilled color="#85bb5c" size="1.4em"/>
                              <span class="mdc-list-item__text">
                                 &nbsp;&nbsp;{name}
                              </span>
                           </span>
                        {:else}
                           <a class="mdc-list-item" href="#/{ref}"
                              on:click="{()=> visible[i]=false}">
                              <PlayCircleFilled color="#85bb5c" size="1.4em"/>
                              <span class="mdc-list-item__text">
                                 &nbsp;&nbsp;{name}
                              </span>
                           </a>
                        {/if}
                     </li>
                     
                  {/each}

               </ul>
               
            {/if}
            
        {/each}

            {/if}


      </nav>
      
    </div>
  </aside>
  
<!-- MODAL-BACKGROUND -->
<div class="mdc-drawer-scrim"></div>

<style>

   .detail{
      list-style:none;
      padding-left: 6px; 
   }

   .btn-close{ float:right; }
    
   a {text-decoration: none;}
   
   
   .title a{color: #fff;}
   .menu-ex{ margin-left:20px;}

   .menu-info{
      margin-top:56px;
   }

   .dark{
     background-color: #005005;
   }

   .info-content{
      font-size:0.8em;
      width:260px;
      padding:0px 18px;
      background-color: #fff;
   }

   div.info-content button{
      color: #800000;
      background-color: #fff;
      border:solid 1px #fff;
      margin-left:60px;
   }

   .divider{
     color: red;
      border:solid 1px #e3f2fd;
   }

</style>

<script>

	import { pageNum } from './stores.js';

   // main.js -> creator
   export let creator;
   export let administration; // 管理用フラグ

   // MATERIAL-ICONS
	import { Cancel, Help, Home, Menu, MoreVert, 
	         PlayCircleFilled, ShoppingBasket } from '../material-icons/_index';

   import { fade } from 'svelte/transition';
   import SideHelp from './SideHelp.svelte';

   var topAppBar;
   var drawer;        // SIDE-MENU
   var menus   = [];  // MENU 表示
   let visible = [];  // SIDE-MENU 表示
   let menuItems = 0; // BUTTON 表示

   onMount( () => {

      window.mdc.autoInit(); // MDC コンポーネント設定
    
      menuItems = nav_menus.length; // MENU 設定

      drawer = new mdc.drawer.MDCDrawer(document.querySelector('.mdc-drawer'));
      const list = new mdc.list.MDCList.attachTo(document.querySelector('.mdc-list'));
      list.wrapFocus = true;

      topAppBar = new mdc.topAppBar.MDCTopAppBar.attachTo(document.getElementById('app-bar'));
         topAppBar.listen('MDCTopAppBar:nav', (e) => {
         drawer.open = !drawer.open;
      });

      getElements(); // Elements (BUTTON) 初期設定

      [].forEach.call(nav_menus, (value, i)=>{
      	visible[i] = false;
      });

   });

   // Elements (BUTTON) 初期設定
   function getElements() {
      menus = [].map.call(document.getElementsByClassName('mdc-menu'), (el) => {
        return new mdc.menu.MDCMenu(el);
      });
   }

   // ASIDE MENU を閉じる
   function asideClose() {
     // alert("asideClose");
     drawer.open = !drawer.open;
      for(var i=0;i<nav_menus.length;i++){
         visible[i] = false;
      }
   }

   // MENU 表示 
   function openMenu(n){
      getElements(); // Elements (BUTTON) 初期化
      menus[n].open = !menus[n].open;
   } 
   
   // SIDE-MENU 表示 
  	function visible_panel(n) {
	   visible[n] = !visible[n];
	}

   // MENU データ
	let nav_menus = [

     {   category: "管理者用設定", 
         icon    : '<svg fill="blue" width="2em" height="2em" viewBox="0 0 24 24"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></g></svg>', 
         items: [
		      { name: 'Svelte-Cart について', ref: 'about' },
  		      { name: '基本設定', ref: 'settings' },
		      { name: 'データエディター', ref: 'data-editor' }
	      ]
	  }

	];

</script>


