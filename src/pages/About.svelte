<script>

   import { marked } from 'marked';

   let text =`
Svelte-eCart について
===================

### 概要と特徴

- 当ソフトウェアは、IT 技術に不慣れな人でも導入と運営が容易に出来る様に外部依存を極力避ける方針で制作されています。

- データの変更追加は、お使いのエディタ(メモ帳など)で簡単に編集することが出来ます。

- サーバーに依存する技術(CGI 等)を用いていませんので、設置に特別な知識は必要としません。

- OS(Windows, iOS, Linux 等)や携帯端末機種に依存しませんので、現行のどのブラウザ(IE11 以降)でも閲覧可能です。

- ローカル環境でも動作し、サーバーへのアップロード前にテスト及び修正を十分行うことが出来ます(インターネット接続は不要)。

- 注文メイルの送信も購買者の PC・携帯端末に備わったメイル機能を利用しサーバーに依存しません。

### 制作の目的

- 新型コロナウイルス感染症 (COVID-19) の猖獗に依り国全体が経済的困窮に陥いる中、生産者及び消費者が互いに結び付くことで共同して困難な状況に対処していくことを目的としています。

- 大手IT企業の提供するプラットフォームを通すことは、初期費用やシステム利用料及び売上ロイヤルティ等は無料と謳っていても、売上に即して様々な名目の負担金を徴収される事例が大半です(約30%程度)。 

  そうした中間的に掛かる余分な費用を一切無くし、購買者との直接の決済手数料のみに限定することで、生産者の所得と生活の向上を保証していくことを重要と考えます。

### 運営上の経費

- 運営上の経費は、HPを設置するレンタルサーバーのホスティング料のみです。

- 現在のホスティング利用料の最安値は大手でも月額１００円からあります。

### 制作上の理念

- 特に農業分野での活用を想定し、通常の商品は勿論、今迄B級品として外されていた類のものも含め流通に乗せることで生産者の増収を計り、一方安価で消費者に提供可能とすることを期待しています。

- 地域性を平準化するIT技術の特性を生かしそれを駆使することで、地方と都市との格差を少しでも無くしていくことを理念として制作されています。

### 使用上の注意

- 当ソフトウェアは、オープンソースとして公開されています(MIT ライセンス)。

- 当システムでは、Google社の提供するデザインシステム [MDC]( https://material.io/components/) を用いています。 

  管理編集作業時にはリソースをローカルに設置して回線負荷の軽減する環境も用意しています(index-admin.html)。

### 免責事項

- 当ソフトウェアを使うことで生じた運営上の損害に対し、如何なる場合においてもその責任を負うことは出来ません。

- 使用者自らの責任においてのみ活用をお願いします。
  
<br>
<br>
<br>
<br>
   
   `
</script>
                 
<div class="container">

   {@html marked(text)}

</div>    
     
     
