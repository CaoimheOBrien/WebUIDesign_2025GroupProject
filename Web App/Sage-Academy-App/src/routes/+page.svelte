<script>
    import { onMount } from 'svelte';
    import { Card } from '$lib';

    onMount(() => {
        console.log("Home Page Loaded");
    });
</script>

<h1>Welcome to Sage Acedemy</h1>
<p>This is our homepage .</p>

<!-- Gallery Container -->
<div class="gallery">
    <Card title="Im a Student" description="" />
    <Card title="Im a Teacher" description="." />
</div>

<style>
    /* Flexbox for Dynamic Layout */
    .gallery {
        display: flex;
        flex-wrap: wrap;
        gap: 20px; /* Creates spacing between items */
        margin-left: 40rem;
        margin-top: 25rem;
    }



    /* Highlight the first and last child in the gallery */
    :global(.gallery > .card:first-child) {
        border: 3px solid blue; /* Emphasize the first card */
    }

    :global(.gallery > .card:last-child) {
        border: 3px solid green; /* Emphasize the last card */
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
