
<script>

   import { Home } from '../material-icons/_index.js';

</script>

<style>

.main{
   text-align:center;
   padding-top:100px;
   margin:auto;
   height:500px;
}

.main h1{
   color:red;
   font-weight:300;
}

</style>

<div class="container">

   <div class="main">

		<h1>ERROR: 404 not found</h1>
			<p>ページは見つかりませんでした。</p>
			<p>準備中の可能性があります。	</p>
      <a href="#/home">
         
        <button class="mdc-fab"
           aria-label="Favorite"
           style="background-color:rgba(37,93,0,0.8);"
           title="More options">
          <div class="mdc-fab__ripple"></div>
          <span class="material-icons">
              <Home size="1.6em" color="#fff"/>
          </span>
        </button>
      
      </a>
      
   </div>

</div>


