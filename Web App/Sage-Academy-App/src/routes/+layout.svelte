<script>
    import { Header, Footer } from "$lib";    
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
