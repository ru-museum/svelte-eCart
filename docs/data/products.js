
   // 消費税の設定
   let tax = "8";    // 消費税　％
   let tax_frac = 0; // 税額端数処理設定(業者により指定自由)：　四捨五入-[0] 切り上げ-[1] 切り捨て-[2]

   /**
    * CLIPS のカスタマイズ
    *
    *  ・CLIPS の数は最大３個まで。空白は無視されます。
    *  ・「背景」と「文字」の色は自由にカスタマイズ出来ます（８色）
    *  　各々の *** 部分を変更して下さい background-color:***; color:***;
    *  　カラー選択ツール：https://material.io/resources/color/
    */
   let primary    = "background-color:#0091ea; color:#fff;";
   let secondary  = "background-color:#546e7a; color:#fff;";
   let success    = "background-color:#32cb00; color:#fff;";
   let danger     = "background-color:#dd2c00; color:#fff;";
   let warning    = "background-color:#ffab00; color:#fff;";
   let info       = "background-color:#00b8d4; color:#fff;";
   let light      = "background-color:#f5f5f5; color:#000;";
   let dark       = "background-color:#616161; color:#fff;";
  
   /**
    * 商品リスト
    * 
    *  ・商品数は自由に増減出来ます。
    *  ・作成には「データ編集方法」のエディタを使用して下さい（直接コピーでも可）。
    *  ・個々のデータ間｛　と　｝　は , で区切られます。但し、末尾には付加されません。
    *  　　例：｛　A　｝,｛　B　｝,｛　C　｝ ← 末尾には無し
    *  ・id, code は、「未入力」可。
    */
   let products = [
  	{
		id: '1',                      // ID 番号　  
		code     : 'A-1A',            // 管理番号:必要の無い場合は空欄
		name     : 'ミカン',           // 商品名
		subtitle : '糖度１０度を越えました', // サブ-タイトル
		price    : 3800,              // 商品価格:円
		gram     : "3kg",             // 量目表示
		max      : 10,                // 数量表示
		sale     : 0,                 // SALE 表示
		shipping : 0,                 // 送料 [非表示]-0　[無料]-1
		sold     : 0,                 // 完売表示　[非表示]-0　[完売]-1 
		img      : 'sample01.jpg',    // 商品画像
      clips:[ // msg 部分が空欄の場合は表示されません
         {msg:"本日限り", color:primary},
         {msg:"残り20k", color:secondary},
         {msg:"送料無料", color:success},
         {msg:"送料無料", color:danger},
         {msg:"残り些少", color:warning},
         {msg:"残り些少", color:info},
         {msg:"残り些少", color:light},
         {msg:"残り些少", color:dark}
      ],
      text:"- ここに商品の内容解説が表示されます。\n- データファイルに直接記述します。\n- 詳しくは解説をお読み下さい。" 
	},
   
	{
		id: '2',
		code: 'A-2B',
		name: 'サクランボ',
		subtitle: '毎日収穫直送しています',
		price: 2000,
		gram: "1kg",
		max: 4,
		sale: 1,
		shipping: 1,
		sold: 1,
		img: 'sample02.jpg',
      clips:[
         {msg:"本日限り", color:primary},
         {msg:"残り些少", color:danger},
         {msg:"送料無料", color:success},
         {msg:"", color:danger},
         {msg:"", color:warning},
         {msg:"", color:info},
         {msg:"残り些少", color:light},
         {msg:"残り些少", color:dark}
      ],
      text:"- ここに商品の内容解説が表示されます。\n- データファイルに直接記述します。\n- 詳しくは解説をお読み下さい。" 
	},

	{
		id: '3',
		code: 'B-2A',
		name: '旬野菜詰合せセット:A',
		subtitle : '今年初収穫です',
		price: 340,
		gram: "300g",
		max: 6,
		sale: 1,
		shipping: 1,
		sold:0,
		img: 'sample03.jpg',
      clips:[
         {msg:"本日限り", color:primary},
         {msg:"送料無料", color:success},
         {msg:"残り些少", color:danger},
         {msg:"残り些少", color:warning},
         {msg:"残り些少", color:info},
         {msg:"", color:light},
         {msg:"", color:dark}
      ],
      text:"- ここに商品の内容解説が表示されます。\n- データファイルに直接記述します。\n- 詳しくは解説をお読み下さい。" 
	},
	
	{
		id: '4',
		code: 'V-2A',
		name: '旬野菜詰合せセット:B',
		subtitle : '今が糖度最高です。',
		price: 300,
		gram: "300g",
		max: 10,
		sale: 0,
		shipping: 0,
		sold:0,
		img: 'sample04.jpg',
      clips:[
         {msg:"本日限り", color:primary},
         {msg:"残り些少", color:danger},
         {msg:"", color:success},
         {msg:"送料無料", color:danger},
         {msg:"", color:warning},
         {msg:"", color:info},
         {msg:"", color:light},
         {msg:"", color:dark}
      ],
      text:"- ここに商品の内容解説が表示されます。\n- データファイルに直接記述します。\n- 詳しくは解説をお読み下さい。" 
	},
	
	{
		id: '5',
		code: 'V-2B',
		name: '旬野菜詰合せセット:C',
		subtitle : '今が糖度最高です。',
		price: 350,
		gram: "300g",
		max: 10,
		sale: 0,
		shipping: 1,
		sold:1,
		img: 'sample05.jpg',
      clips:[
         {msg:"本日限り", color:primary},
         {msg:"残り些少", color:danger},
         {msg:"", color:success},
         {msg:"", color:danger},
         {msg:"", color:warning},
         {msg:"", color:info},
         {msg:"", color:light},
         {msg:"", color:dark}
      ],
      text:"- ここに商品の内容解説が表示されます。\n- データファイルに直接記述します。\n- 詳しくは解説をお読み下さい。" 
	},
	
	{
		id: '6',
		code: 'V-2C',
		name: '旬野菜詰合せセット:D',
		subtitle : '今が糖度最高です。',
		price: 300,
		gram: "300g",
		max: 10,
		sale: 0,
		shipping: 0,
		sold:0,
		img: 'sample06.jpg',
      clips:[
         {msg:"本日限り", color:primary},
         {msg:"残り些少", color:danger},
         {msg:"", color:success},
         {msg:"", color:danger},
         {msg:"", color:warning},
         {msg:"", color:info},
         {msg:"", color:light},
         {msg:"", color:dark}
      ],
      text:"- ここに商品の内容解説が表示されます。\n- データファイルに直接記述します。\n- 詳しくは解説をお読み下さい。" 
	},
	
	{
		id: '7',
		code: 'V-2D',
		name: '旬野菜詰合せセット:E',
		subtitle : '今が糖度最高です。',
		price: 320,
		gram: "300g",
		max: 10,
		sale: 1,
		shipping: 0,
		sold:0,
		img: 'sample07.jpg',
      clips:[
         {msg:"本日限り", color:primary},
         {msg:"残り些少", color:danger},
         {msg:"", color:success},
         {msg:"", color:danger},
         {msg:"", color:warning},
         {msg:"", color:info},
         {msg:"", color:light},
         {msg:"", color:dark}
      ],
      text:"- ここに商品の内容解説が表示されます。\n- データファイルに直接記述します。\n- 詳しくは解説をお読み下さい。" 
	},
	
	{
		id: '8',
		code: 'V-2E',
		name: '旬野菜詰合せセット:F',
		subtitle : '今が糖度最高です。',
		price: 360,
		gram: "300g",
		max: 10,
		sale: 0,
		shipping: 0,
		sold:0,
		img: 'sample08.jpg',
      clips:[
         {msg:"本日限り", color:primary},
         {msg:"残り些少", color:danger},
         {msg:"", color:success},
         {msg:"", color:danger},
         {msg:"", color:warning},
         {msg:"", color:info},
         {msg:"", color:light},
         {msg:"", color:dark}
      ],
      text:"- ここに商品の内容解説が表示されます。\n- データファイルに直接記述します。\n- 詳しくは解説をお読み下さい。" 
	},
	
	{
		id: '9',
		code: 'V-2E',
		name: '旬野菜詰合せセット:G',
		subtitle : '今が糖度最高です。',
		price: 360,
		gram: "300g",
		max: 10,
		sale: 0,
		shipping: 0,
		sold:0,
		img: 'sample600x400.png',
      clips:[
         {msg:"本日限り", color:primary},
         {msg:"残り些少", color:danger},
         {msg:"", color:success},
         {msg:"", color:danger},
         {msg:"", color:warning},
         {msg:"", color:info},
         {msg:"", color:light},
         {msg:"", color:dark}
      ],
      text:"- ここに商品の内容解説が表示されます。\n- データファイルに直接記述します。\n- 詳しくは解説をお読み下さい。" 
	},
	
	{
		id: '10',
		code: 'V-2E',
		name: '旬野菜詰合せセット:H',
		subtitle : '今が糖度最高です。',
		price: 360,
		gram: "300g",
		max: 10,
		sale: 0,
		shipping: 0,
		sold:0,
		img: 'sample10.png',
      clips:[
         {msg:"本日限り", color:primary},
         {msg:"残り些少", color:danger},
         {msg:"", color:success},
         {msg:"", color:danger},
         {msg:"", color:warning},
         {msg:"", color:info},
         {msg:"", color:light},
         {msg:"", color:dark}
      ],
      text:"- ここに商品の内容解説が表示されます。\n- データファイルに直接記述します。\n- 詳しくは解説をお読み下さい。" 
	},
	
	{
		id: '11',
		code: 'V-2E',
		name: '旬野菜詰合せセット:I',
		subtitle : '今が糖度最高です。',
		price: 360,
		gram: "300g",
		max: 10,
		sale: 0,
		shipping: 0,
		sold:0,
		img: 'sample360x240.png',
      clips:[
         {msg:"本日限り", color:primary},
         {msg:"残り些少", color:danger},
         {msg:"", color:success},
         {msg:"", color:danger},
         {msg:"", color:warning},
         {msg:"", color:info},
         {msg:"", color:light},
         {msg:"", color:dark}
      ],
      text:"- ここに商品の内容解説が表示されます。\n- データファイルに直接記述します。\n- 詳しくは解説をお読み下さい。" 
	},
	
	{
		id: '12',
		code: 'V-2E',
		name: '旬野菜詰合せセット:J',
		subtitle : '今が糖度最高です。',
		price: 360,
		gram: "300g",
		max: 10,
		sale: 0,
		shipping: 0,
		sold:0,
		img: 'sample300x200.png',
      clips:[
         {msg:"本日限り", color:primary},
         {msg:"残り些少", color:danger},
         {msg:"", color:success},
         {msg:"", color:danger},
         {msg:"", color:warning},
         {msg:"", color:info},
         {msg:"", color:light},
         {msg:"", color:dark}
      ],
      text:"- ここに商品の内容解説が表示されます。\n- データファイルに直接記述します。\n- 詳しくは解説をお読み下さい。" 
	},
	
   {
      id:"13",
      code:"H-GH",
      name:"さくらんぼトマト",
      subtitle:"寒さで糖度が増しています",
      price:2400,
      gram:"300g",
      max:10,
      sale:0,
      shipping:0,
      sold:0,
      img:"sample-tamato.png",
      clips:[
         { msg:'糖度抜群', color: primary} ,
         { msg:'', color: secondary} ,
         { msg:'', color: success} ,
         { msg:'', color: danger} ,
         { msg:'', color: warning} ,
         { msg:'', color: info} ,
         { msg:'', color: light} ,
         { msg:'', color: dark}
      ],
      text:"- ここに商品の内容解説が表示されます。\n- データファイルに直接記述します。\n- 詳しくは解説をお読み下さい。" 
   },
 ]

