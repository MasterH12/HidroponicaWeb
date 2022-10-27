<script>
    export let inputId="";
    export let inputTitle="Email";
    export let inputValue="";
    export let labelClass="";
    export let InputClass="";

    let regularExpression = /.*@.*\..*/;
    let validated = false;
    let correct = true;

    function validateInput(){
        console.log(inputValue);
        correct = regularExpression.test(inputValue);
        validated = true;
        console.log("correct: ", correct);
        console.log("validated: ", validated);
    }
</script>

<style>

</style>

<div class="EmailInput text-start">
    <label for="{inputId}" class="form-label {labelClass}">{inputTitle}</label>
    <input type="email" class="form-control {InputClass} {validated ? correct ? "is-valid" : "is-invalid" : "" }" on:blur={validateInput} id={inputId} bind:value={inputValue}>
    <div class="invalid-feedback">
        Correo electrónico incorrecto
    </div>
</div>