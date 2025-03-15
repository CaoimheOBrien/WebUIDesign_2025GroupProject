<script>
    import { onMount } from 'svelte';
    import Button from '$lib/components/Button.svelte';

    onMount(() => {
        console.log("Student Quiz Home Page Loaded");
    });

</script>


<!-- Gallery Container -->
<div class="gallery">
    <Button title="I'm Staff" />
    <Button title="I'm a Student"  />
</div>


<style>
  .gallery {
        display: flex; 
        flex-direction: row;
        gap: 20rem;
        margin-top: 50rem;
        margin-left: 45rem;
    }

</style>