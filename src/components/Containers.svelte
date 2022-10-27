<script>

    let containers = [
        {
            id: 1,
            name:"container 1"
        },
        {
            id: 2,
            name:"container 2"
        },
        {
            id: 3,
            name:"container 3"
        },
        {
            id: 4,
            name:"container 4"
        },

    ];
    function handleClick(){
        
    }
</script>

<style>
 
</style>

<div class="Containers">
    <ul>
        {#each containers as container}
            <li>{container.id} {container.name}</li>
        {/each}
    </ul>
</div>