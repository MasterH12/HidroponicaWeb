<script>
	import Login from "./components/Login.svelte";
</script>

<style>
	:global(body){
		background-color: #ffffff;
	}

	:global(:root){
		--color-a: #60B364;
		--color-b: #CCBDFF;
		--color-c: #A4FFA8;
		--color-d: #FFC08A;
		--color-e: #B38B69;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	.login-container{
		max-width: 40%;
		margin: auto;
		margin-top: 20%;
	}


	@media (min-width: 640px) {
		main {
			max-width: none;

		}
		
	}
	@media (min-height: 640px) {
		main {
			min-height: 100%;
			
		}
	}
	@media (max-width: 640px) {
	.login-container{
			max-width: none;

		}
	}
	
</style>

<main>
	<a href="/containers">Containers</a>
	<div class="login-container">
		<Login defaultUser="Alex" />
	</div>
</main>

