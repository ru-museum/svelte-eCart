<div class="loading">

   <h5>データを読込んでいます</h5>
   <div class="spinner">
      <Spinner color="#9ccc65" size="3em" />
   </div>

</div>
  
<script>

   import { Spinner } from '../material-icons/_index';

</script>

<style>

div.loading{
   text-align:center;
   color:#7cb342;
   margin: 0 auto;
   background: #fff;
   padding: 80px 0px 440px 0px;
}

/** 
 * SPINNER-ICONS
 * SVG-ICONS と同サイズにする 
 */
.spinner {
   width: 3em;
   height: 3em;
   margin: 0 auto;
   background: #fff;
   /* animation */
   animation-name: spin;
   animation-duration: 1600ms;
   animation-iteration-count: infinite;
   animation-timing-function: linear;
}
@keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}

</style> 

