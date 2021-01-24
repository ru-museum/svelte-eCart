
<script>
   
  export let page;
 	import md from 'marked';

</script>

<div class="main">

   {@html md(user_pages[page-1].content)}
    
</div>

<style>

   .main{ 
      padding:0 6px; 
      height: 100%; 
   }

</style>
    
      
