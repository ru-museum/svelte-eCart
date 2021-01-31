
<script>

   /**
    * 管理用フラグ：メニューの表示
    *   デフォルトは　管理用: 1 公開用： 0 
    */  
   let administration = 0;

   export let creator;
   export let presets;

   import { KeyboardArrowUp } from './material-icons/_index.js';

   import Navbar from './components/Navbar.svelte';
   import Footer from './components/Footer.svelte';

   import Home     from './pages/Home.svelte';
   import NotFound from './pages/NotFound.svelte';

   // PAGES
   import Settings from './pages/Settings.svelte';
   import About    from './pages/About.svelte';
   import DataEditor from './pages/DataEditor.svelte';
   import Infomations from './pages/Infomations.svelte';

   // ROUTER 
   var routes = {};
   var page = Home; // 初期ページ

   function route (path, controller) {
      routes[path] = {controller: controller};
   }
   var el = null;
   function router () {
     // Lazy load view element:
     // Current route url (getting rid of '#' in hash as well):
     var url = location.hash.slice(1) || '/';
     // Get route by url:
     var route = routes[url];

     // エラーページの表示
     if (route === undefined) {
			      page = NotFound;
			      return;
     }

     // Do we have both a view and a route?
     if (route.controller) {
        route.controller();
     }
   }
   // Listen on hash change:
   window.addEventListener('hashchange', router);
   // Listen on page load:
   window.addEventListener('load', router);

   // PAGE 設定
   route('/',           () => { page = Home;     });
   route('/home',       () => { page = Home;     });
   route('/settings',   () => { page = Settings;  });
   route('/about',      () => { page = About;    });
   route('/data-editor',() => { page = DataEditor;});
   route('/infomations', () => { page = Infomations; });

   let y = 0; // スクロール位置：Y座標初期値 
   // Top に戻る 	
   function toTop() {
	     document.body.scrollTop = 0;
	     document.documentElement.scrollTop = 0;
   }

</script>



<style type="scss">

   /* 戻るボタン */	
   #btn-to-top {
	   position: fixed;
      vertical-align:bottom;
	   right: 10px;
	   bottom: 10px;
	   z-index: 9000;
   }

   :global(.icon-btn){
      font-size:3em;
      color:#008ba3;/*#4bcbcc #00e5ff  01579b*/
   }

</style>


<svelte:window bind:scrollY={y}/>
<!-- 「TOPへ戻る」ボタンの表示 -->
{#if y > 200}

   <div id="btn-to-top">
      <button class="mdc-fab btn-color"
         aria-label="Favorite"
         style="background-color:rgba(37,93,0,0.8);"
         title="More options"
         on:click="{() => toTop()}">
        <div class="mdc-fab__ripple"></div>
            <KeyboardArrowUp size="4em" color="#fff"/>
      </button>
   </div>

{/if}


<!-- MAIN 表示  {...user}-->
<Navbar {creator} {administration} />
   <!-- HOME -->
	<svelte:component this={page} date={presets.date} />

<Footer year={presets.year} {creator}/>


