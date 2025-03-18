<script>
    import { onMount } from 'svelte';
    import Button from '$lib/components/Button.svelte';

    onMount(() => {
        console.log("Student Quiz Home Page Loaded");
    });

</script>


<!-- Gallery Container -->
<div class="gallery">
    <Button title="Quizzes" />
    <Button title="Learning Resources"  />
</div>


<style>
  .gallery {
    display: flex;
        flex-direction: column;
        justify-content: center; 
        align-items: center;     
        margin-top: auto;
        justify-content: center;
        gap: 2rem; /* Creates spacing between items */
        margin: 5rem;
        justify-content: center;
    }

    /* Apply a hover effect: spotlight effect on the hovered card */
    :global(.gallery > .ContactCard:hover) {
        transform: scale(1.1); /* Scale up the hovered card */
        z-index: 2; /* Bring it to the front */
    }

    /* Reduce the size of adjacent siblings when a card is hovered */
    :global(.gallery > .Buttom:hover ~ .Button) {
        transform: scale(0.9); /* Reduce size of adjacent cards */
        opacity: 0.8; /* Slightly fade them */
    }

    /* Reduce the size of adjacent siblings when a card is hovered */
    :global(.gallery > .Button:hover + .Button) {
        transform: scale(0.95); /* Reduce size of adjacent cards */
        opacity: 0.9; /* Slightly fade them */
    }

</style>