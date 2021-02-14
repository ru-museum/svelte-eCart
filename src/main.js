import App from './App.svelte';

// GLOBAL
import { onMount } from 'svelte';	
	window.onMount = onMount;

const app = new App({
	target: document.body,
	props: {
		presets: {
			year: new Date().getFullYear()
		},
		creator: {
			app_name:'svelte-eCart',
			name:'藍土工房',
			mail : 'land_koubou\@yahoo.co.jp',
			url:'https://github.com/ru-museum/'
		}
	}
});

export default app;


