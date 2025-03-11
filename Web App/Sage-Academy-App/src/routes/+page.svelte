<script>
    import { onMount } from 'svelte';
    import Card from '$lib/components/Card.svelte';

    onMount(() => {
        console.log("Home Page Loaded");
    });
</script>


<!-- Gallery Container -->
<div class="gallery">
    <button button="I'm a Student"  />
    <button button="I'm a Teacher"  />
</div>

<style>
    /* Flexbox for Dynamic Layout */
    .gallery {
        display: flex;
        flex-wrap: wrap;
        gap: 70px; /* Creates spacing between items */
        margin-left: 35rem;
        margin-top: 25rem;
    }




    /* Apply a hover effect: spotlight effect on the hovered card */
    :global(.gallery > .card:hover) {
        transform: scale(1.1); /* Scale up the hovered card */
        z-index: 2; /* Bring it to the front */
    }

    /* Reduce the size of adjacent siblings when a card is hovered */
    :global(.gallery > .card:hover ~ .card) {
        transform: scale(0.9); /* Reduce size of adjacent cards */
        opacity: 0.8; /* Slightly fade them */
    }

    /* Reduce the size of adjacent siblings when a card is hovered */
    :global(.gallery > .card:hover + .card) {
        transform: scale(0.95); /* Reduce size of adjacent cards */
        opacity: 0.9; /* Slightly fade them */
    }

</style>
