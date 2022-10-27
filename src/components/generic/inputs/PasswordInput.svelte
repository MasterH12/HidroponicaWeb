<script>
    export let inputId="";
    export let inputTitle="Contraseña";
    export let inputPassword="";
    export let labelClass="";
    export let inputClass="";

    let validated = false;
    let correct = true;
</script>

<style>

</style>

<div class="PasswordInput mt-2 text-start">
    <label for="inputPassword" class="form-label {labelClass}">{inputTitle}</label>
    <input type="password" class="form-control {inputClass} {validated ? correct ? "is-valid" : "is-invalid" : "" }" id="{inputId}" bind:value="{inputPassword}">
    <div class="invalid-feedback">
        Contraseña incorrecta
    </div>
</div>