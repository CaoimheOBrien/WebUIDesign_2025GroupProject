<script>
    import { onMount } from 'svelte';
    import Button from '$lib/components/Button.svelte';

    onMount(() => {
        console.log("Student Quiz Home Page Loaded");
    });

</script>


<!-- Gallery Container -->
<div class="gallery">
    <Button title="Enter Email" />
    <Button title="Password"/>
</div>


<style>
    .gallery {
        display: flex;
        flex-direction: row;
        gap: 20rem;
        justify-content: center;
    }

</style>