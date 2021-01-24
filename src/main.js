import App from './App.svelte';
import 'es6-shim'; // IE11対応

// GLOBAL
import { onMount } from 'svelte';	
	window.onMount = onMount;

// import {fetch as fetchPolyfill} from 'whatwg-fetch'; // IE11対応fetch
// 	window.fetchPolyfill = fetchPolyfill;

const app = new App({
	target: document.body,
	props: {
		presets: {
			year: new Date().getFullYear()
		},
		creator: {
			name:'藍土工房',
			mail : 'land_koubou\@yahoo.co.jp',
			url:'https://github.com/ru-museum/'
		}
	}
});

export default app;


