<script>
    // import Navigation.svelte from lib folder
    import Navigation from '$lib/components/Navigation.svelte';
</script>


<header>
    <!-- Logo -->
    <div class="logo">
        <img src="/logo.jpg" alt="Website Logo">
        <h1>Sage Academy</h1>
    </div>

    <!-- Navigation -->
    <Navigation />
</header>


<style>
    /* Header Styling */
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #f9f9f9;
        color: black;
        padding: 1rem;
    }

    /* Logo Container */
    .logo {
        display: flex;
        align-items: center;
    }

    .logo img {
        width: 50px;
        margin-right: 0.625rem;
    }

    /* Mobile: Center logo and stack items */
    @media (max-width: 768px) {
        header {
            flex-direction: column;
            text-align: center;
        }

        .logo {
            justify-content: center;
        }
    }
</style>