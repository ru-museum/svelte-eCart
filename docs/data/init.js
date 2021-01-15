

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
	
      top_image : "logo-smp02.jpg", // メインページ・トップ画像　600x140
      title_back: "background-color:#6a0080;color:;" 
      
	};

   // 挿入テキスト
	let message = {
	
      msg1: "M1:販売カート",
      msg2: "M2:農業者向けテンプレート",
      msg3: "M3:",
      msg4: "M4:",
      msg5: "M5:",
      msg6: "M6:"

	};

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


  /**
   * 値が空白の場合は無視されます
   * 改行する場合は、<br> を挿入して下さい。
   * 　例： name: '返品・交換<br>・キャンセル等'
   */
  let profile = [

   // 【販売業者名】
   //  法人事業主と個人事業主により記載方法が異なります
   //   例 - 株式会社 Boilerplate
   // 　   - Boilerplate 野菜 華子
   { 
      name: '販売業者', 
      val : "Boilerplate"
   },

   // 【運営責任・販売管理者名】
   { 
      name: '販売管理責任者', 
      val : "野菜 華子"
   },

   // 【郵便番号】
   { 
      name: '郵便番号', 
      val : '〒000-0000'
   }, 

   // 【所在地】
   { 
      name: '所在地', 
      val : '北海道河西郡芽室町東十条1-638-3'
   }, 

   // 【メールアドレス】
   { 
      name: 'メールアドレス', 
      val : 'info@sample.com'
   },

   // 【電話番号】
   { 
      name: '電話番号', 
      val : '0000-1111-2222'
   },

   // 【送料】
   { 
      name: '送料', 
      val : '全国一律500円　代引き手数料：315円'
   },

   // 【引き渡し時期】
   { 
      name: '引き渡し時期', 
      val : 'ご注文から＊日以内に発送いたします'
   },

   // 【お支払い方法】
   { 
      name: 'お支払い方法', 
      val : '銀行振込、郵便振込、PayPay、クレジットカード'
   },   

   // 【返品期限】
   { 
      name: '返品期限', 
      val : '商品到着より＊日以内'
   },

   // 【返品・交換・キャンセル等】
   { 
      name: '返品・交換<br>・キャンセル等', 
      val : '返品時の送料負担：初期不良の場合は当店負担、お客様都合の場合はお客様にて送料をご負担ください。'
   },

  /**
   *【資格・免許】
   *  - 記述そのままで表示されます（ " の間に記述）
   * 　　記述例：
   *     古物商許可証　第••••号　東京都公安委員会
   *     酒販免許　渋法•••　渋谷税務署
   *     高度管理医療機器等　販売業許可証
   */
   {
       name: '資格・免許', 
       val : "古物商許可証　第123456号　東京都公安委員会"
   }

]

