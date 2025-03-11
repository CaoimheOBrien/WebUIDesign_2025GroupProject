<script>
    import { onMount } from 'svelte';
    import Card from '$lib/components/Card.svelte';

    onMount(() => {
        console.log("Home Page Loaded");
    });
</script>


<!-- Gallery Container -->
<div class="gallery">
    <Card title="I'm a Student" description="" />
    <Card title="I'm a Teacher" description="" />
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



    /* Highlight the first and last child in the gallery */
    :global(.gallery > .card:first-child) {
      /* Emphasize the first card */
    }

    :global(.gallery > .card:last-child) {
       /* Emphasize the last card */
    }

    /* Apply a different background color to even-numbered cards */
    :global(.gallery > .card:nth-child(even)) {
       
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
