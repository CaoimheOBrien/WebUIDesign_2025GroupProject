<script>
    import { onMount } from 'svelte';
    import Card from '$lib/components/Card.svelte';

    onMount(() => {
        console.log("Student Learning Resources Home Page Loaded");
    });

</script>


<!-- Gallery Container -->
<div class="gallery">
    <Card title="Design Psych" description="" />
    <Card title="Web User UI" description="" />
    <Card title="3D Digital Art" description="" />
    <Card title="UI Prototyping" description="" />
    
</div>

<style>
    /* Flexbox for Dynamic Layout */
    .gallery {
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-top: 2rem;
    }

    
    /* Apply a different background color to even-numbered cards */
    :global(.gallery > .card:nth-child(even)) {
        background-color:rgb(169, 235, 166);
        border: 3px solid rgb(69, 153, 77);
       
    }

    /* Apply a different background color to even-numbered cards */
    :global(.gallery > .card:nth-child(odd)) {
        background-color:rgb(169, 235, 166);
        border: 3px solid rgb(69, 153, 77);
    }

    /* Apply a hover effect: spotlight effect on the hovered card */
    :global(.gallery > .card:hover) {
        transform: scale(0.9); /* Scale up the hovered card */
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
