

   // 運営者情報
	let user = {
	
      page_title: "■ テスト版 : Svelte-eCart",
      shop    : "Svelte-eCart",
      admin   : "野菜 華子",
      postage : '〒000-0000', 
      address : '○○県○○市○○町○○000-0', 
      email   : 'info@aaaaa.aa',
      tell    : '00-1111-2222'

	};

   // 商品タイトル背景色変更例： background-color:#6a0080;color:#ffffff;
	let setting = {
	
      top_image : "logo-smp02.jpg", // メインページ・トップ画像　600x140程度
      title_back: "background-color:#6a0080;color:;" 
      
	};

   /**
    *  MAIN ページ・トップ挿入テキスト 
    *  ● 必要の無い場合は、空（""）として下さい 
    *  ● 行を追加出来ます 
    */
	let message = [
	
      { msg: "農業者向け販売カート: v.0.0.2"},
      { msg: "・これはデモ版テンプレートです。"},
      { msg: "・オープンソースとして <a href='https://github.com/ru-museum/svelte-eCart' target='_blank'>GitHub</a> にて公開しています。"},
      { msg: "・IT に詳しくない方でも簡単に設置出来ます。"},
      { msg: "・画像は全てフリー画像を使用しています。"}

	];

   // 注文メール設定
	let order_mail = {
      subject : "【商品注文】● テスト",                   // メール件名
      title   : "【商品注文】",                          // 本文タイトル
      email   : '****@****.***',                       // 返信宛先メールアドレス
      message : "【伝言・意見・要望欄】＊自由にお書き下さい。", // 追加項目

      /**
       * 挿入テキスト 
       *  ● 挿入テキストは「注文メイルの編集」で作成すると改行は自動に変換されます 
       *  ● 直接編集する場合、改行は「%0D%0A」です 
       *  ● 必要の無い場合は、空（""）として下さい 
       */
      template1: "　[挿入テキスト１]%0D%0Aご注文を頂きありがとうございます。%0D%0A・折り返し注文及び送料の確認メールを送信致します。%0D%0Aここに文字列を自由に挿入出来ます。%0D%0A編集は init.js ファイルで行えます。%0D%0A注文品内訳は以下のとおりです。",

      template2: "　[挿入テキスト２]%0D%0Aご注文を頂きありがとうございます。%0D%0A・折り返し注文及び送料の確認メールを送信致します。%0D%0Aここに文字列を自由に挿入出来ます。%0D%0A編集は init.js ファイルで行えます。",

      template3: "　[挿入テキスト３]%0D%0Aご注文を頂きありがとうございます。%0D%0A・折り返し注文及び送料の確認メールを送信致します。%0D%0Aここに文字列を自由に挿入出来ます。%0D%0A編集は init.js ファイルで行えます。"

	};

   // SNS リンク
	let sns = [
	
		{
		   name :"twitter",
		   url  :"",
		   image:"twitter_icon.png"
		},
		{
		   name :"youtube",
		   url  :"",
		   image:"youtube_icon.png"
		},
		{
		   name :"facebook",
		   url  :"",
		   image:"facebook_icon.png"
		},
		{
		   name :"line",
		   url  :"",
		   image:"icon-line.png"
		},		
		{
		   name :"twitcast",
		   url  :"",
		   image:"twitcast_icon.png"
		}
	
	];

   // 決済方法：自由に追加出来ます
	let transfers = [
      '銀行振込',
      '郵便振込',
      'その他'
	];

   // 購入者情報：自由に追加出来ます
	let orderer = [
      {
         item:'注文者氏名',
         width:'200',
         holder:'野菜華子(宛名)',
         required:1, // 必要なし：0　必須： 1
         helper:'実際に商品を受取る方の氏名を記入して下さい',
         color:'red'
      },
      {
         item:'届け先住所',
         width:'300',
         holder:'送付先住所を入力して下さい',
         required:1, // 必要なし：0　必須： 1
         helper:'実際に商品を受取る方の住所を記入して下さい',
         color:'red'
      },
      {
         item:'郵便番号',
         width:'150',
         holder:'000-0000',
         required:0, // 必要なし：0　必須： 1
         helper:'正しく配送するためなるべく記入を願います',
         color:'gray'
      },
      {
         item:'連絡先電話番号',
         width:'180',
         holder:'000-0000-0000',
         required:0, // 必要なし：0　必須： 1
         helper:'注文者と受取人が異なる場合は<strong>受取人連絡先</strong>を記入して下さい(必須ではありません)',
         color:'gray'
      }
	];

   /**
    * QRコード決済-振込方法の表示:フッタ部
    * QRコード決済表示の場合。 // QRコード画像を用意します。
    * 自由に追加出来ます。
    */
	let payment = [

		{
		   name  :"銀行振込",
		   number:"1234-5678",
		   url   :"",
		   image:""
		},
		{
		   name  :"郵便振込",
		   number:"5678-1234",
		   url   :"",
		   image :""
		},
		{
		   name :"paypay",
		   number:"",
		   url  :"",
		   image:"paypay_icon.png"
		}
	
	];



   // ショップ情報表示https://twitcasting.tv/aisaika_daihyou
	let footer = {

      info  : 1,  // メインページに表示しない： 0(デフォルト)　表示する： 1
      image : 'sample-admin.png' // ショップ画像（imgフォルダ内に保存）

	};

   // 決済方法は追加出来ます
   // QR コード
	let qr = [
	   {
         code  : 1,                 // 表示しない： 0(デフォルト)　表示する： 1
         title : 'QRコード決済', 
         name  : 'PayPay',          // 決済名
         image : 'qr-code.png',     // QR コード画像（images フォルダ内に保存）
         icon  : 'paypay_icon.png', // ICON 画像（images フォルダ内に保存）
         url   : ''
   	},
	   {
         code  : 1,            
         title : 'QRコード決済', 
         name  : 'LINE Pay',   
         image : 'qr-code.png', 
         icon  : 'line-icon.jpg',
         url   : ''
   	},
	   {
         code  : 0,            
         title : 'クレジットカード決済', 
         name  : '',     
         image : 'qr-code.png', 
         icon  : 'qr-code.png', 
         url   : ''
   	}
	
	];

   // 
   
  /**
   * マップの表示
   * geocode は Googleマップで調べられます
   *    https://www.google.co.jp/maps/
   */
	let map = {

      map     : 1,  // 表示しない： 0(デフォルト)　表示する： 1
      zoom    : 13, // レベル 1-20 : [13] = 1：20000
      geocode : '35.716487,139.520120', 
      name    : '小金井公園', 
      width   : 100, 
      height  : 278   

	};


