<script>
    import EmailInput from "./generic/inputs/EmailInput.svelte";
    import PasswordInput from "./generic/inputs/PasswordInput.svelte";
    import {Authentication} from "../js/auth.js";

	

    let emailValue ="";
    let passwordValue ="";
    let count = 0;

    function login(){
        const auth =  new Authentication();
        auth.loginWithEmailAndPassword(emailValue, passwordValue);
    }

    
</script>

<style>
</style>

<div class="login">
    <EmailInput inputId="email" bind:inputValue={emailValue} />
    <PasswordInput inputId="password" bind:inputPassword = {passwordValue}/>
    
    <div class="mt-4">
        <button on:click={login} class="btn btn-primary mb-3">Entrar</button>
    </div>
</div>
