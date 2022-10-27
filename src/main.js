import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		welcome: 'Welcome to my'
	}
});

export default app;