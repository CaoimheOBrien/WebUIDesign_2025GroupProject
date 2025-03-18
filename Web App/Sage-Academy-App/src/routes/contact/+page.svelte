<script>
	import ContactCard from '$lib/components/ContactCard.svelte';
    import { onMount } from 'svelte';
    onMount(() => {
        console.log("Contact Page Loaded");
    });
</script>

<h1>Contact Us</h1>
<p>Get in touch with any of us via our student email: </p>

<!-- Gallery Container -->
<div class="gallery2">
    <ContactCard title="Caoimhe O'Brien" description="C00297178@setu.ie"/>
    <ContactCard title="Natalia Ryl" description="C00294480@setu.ie" />
    <ContactCard title = "Aoife Leahy" description="C00296873@setu.ie"/>
    <ContactCard title = "Lee Lindsay" description="C00300670@setu.ie"/>
</div>

<style>
    /* Flexbox for Dynamic Layout */
    .gallery2 {
        display: flex;
        flex-wrap: wrap;
        gap: 5rem; /* Creates spacing between items */
        margin: 5rem;
    }

    /* Apply a hover effect: spotlight effect on the hovered card */
    :global(.gallery2 > .ContactCard:hover) {
        transform: scale(1.1); /* Scale up the hovered card */
        z-index: 2; /* Bring it to the front */
    }

    /* Reduce the size of adjacent siblings when a card is hovered */
    :global(.gallery2 > .ContactCard:hover ~ .ContactCard) {
        transform: scale(0.9); /* Reduce size of adjacent cards */
        opacity: 0.8; /* Slightly fade them */
    }

    /* Reduce the size of adjacent siblings when a card is hovered */
    :global(.gallery > .ContactCard:hover + .ContactCard) {
        transform: scale(0.95); /* Reduce size of adjacent cards */
        opacity: 0.9; /* Slightly fade them */
    }

    h1 { color: #28a745; }
    p { font-size: 18px; margin: 20px;}
    
</style>