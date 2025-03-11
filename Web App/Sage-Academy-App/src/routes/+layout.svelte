<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';  
</script>

<!-- Link to global styles -->
<link rel="stylesheet" href="/styles/global.css" />

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
    }
</style>
