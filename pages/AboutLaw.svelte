
<div class="container">

<h3 class="title">特定商取引に基づく表記</h3>

<p>以下の表記は、特定商取引法第11条による <a href="https://www.no-trouble.caa.go.jp/what/mailorder/" target="_blank">特定商取引法ガイド</a> （通信販売：消費者庁）に基づいています。</p>

    <table class="table">
      <thead>
        <tr>
          <th class="head">
            表示事項
          </th>
          <th class="head">
            表記
          </th>
        </tr>
      </thead>
      <tbody>

         {#each profile as {name, val}, i}

            {#if val != ''}
              <tr>
                <th align="left" valign="top" nowrap>
                  {@html name}
                </th>
                <td>{@html val}</td>
              </tr>
            {/if}

         {/each}
         
      </tbody>
    </table>
  
</div>    


<style>

   .table td, th{
      padding: 10px;
      border:solid 1px #fff; 
      border-bottom-color:#e8f5e9; 
   }

   .head{
      background-color:#e8f5e9;
      border-bottom-color:#00600f; 
   }

   .title{
      font-size:2.1em;
   }

   .list{
      font-size:2em;
   }

   .tbl-data td{
      height:24px;
   }

   th{
      font-weight:bold;
   }

   .header-row{
      background-color:#f8ffd7;  
   }

   .header-row th{
      color:#255d00; 
   }

</style>     
