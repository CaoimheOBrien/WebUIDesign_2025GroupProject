<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';  
</script>

<Header />

<!-- Page Content -->
<main>
    <slot />

</main>

<Footer />

<style>
    main {
        padding: 2rem;
        text-align: center;
        min-height: 80vh;
    }
    
</style>
