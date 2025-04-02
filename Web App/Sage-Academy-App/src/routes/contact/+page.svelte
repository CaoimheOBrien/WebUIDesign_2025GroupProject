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
    /* Grid for Responsive Layout */
    .gallery2 {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        max-width: 1400px;
        margin: 3rem auto;
        padding: 0 1rem;
        justify-content: center;
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
    h1 { 
        color: #016618; 
        font-size: clamp(1.8rem, 4vw, 2.5rem);
        margin-bottom: 1rem;
    }
    
    p { 
        font-size: clamp(16px, 2vw, 18px); 
        margin: 20px;
    }
    
    /* Responsive breakpoints */
    @media (max-width: 1024px) {
        .gallery2 {
            grid-template-columns: repeat(2, 1fr);
            max-width: 800px;
            gap: 2rem;
            margin: 2rem auto;
        }
    }
    
    @media (max-width: 600px) {
        .gallery2 {
            grid-template-columns: 1fr;
            max-width: 400px;
            gap: 1.5rem;
            margin: 1.5rem auto;
        }
    }
</style>
