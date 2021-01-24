
<script>

  import { Info, DoubleArrow } from '../material-icons/_index';

  // PAGE 番号データ
	import { pageNum } from '../components/stores.js';

	// 追加ページコンポーネント
	import Pages from './Pages.svelte';

</script>

<div class="container">

   <div class="breadcrumb-title">
      <DoubleArrow color="#7da453" size="0.8em" /> {user_pages[$pageNum-1].subject}
   </div>

   <!-- ページコンポーネント -->
   <svelte:component this={Pages} page={$pageNum} />

</div>

<style type="scss">

   .breadcrumb-title{
      color: #7da453;
      font-size:1em;
		margin-top: 16px;
		padding-left: 10px;
		font-weight: 300;
   }

</style>
