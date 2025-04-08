<script>
    // import Navigation.svelte from lib folder
    import Navigation from '$lib/components/Navigation.svelte';
    import { base } from '$app/paths'; 
</script>


<header>
    <!-- Logo -->
    <div class="logo">
        <img src="{base}/logo.jpg" alt="Website Logo">
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
        padding: 1.25rem;
        transition: all 0.3s ease-in-out;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    /* Logo Container */
    .logo {
        display: flex;
        align-items: center;
        transition: all 0.3s ease;
    }

    .logo img {
        width: clamp(40px, 5vw, 60px);
        height: auto;
        margin-right: 0.75rem;
        transition: width 0.3s ease, margin 0.3s ease;
    }

    .logo h1 {
        font-size: clamp(1.25rem, 3vw, 1.75rem);
        font-weight: 600;
        margin: 0;
        transition: font-size 0.3s ease;
    }

    /* Larger screens */
    @media (min-width: 1200px) {
        header {
            padding: 1.5rem 2rem;
        }
        
        .logo img {
            width: 60px;
        }
    }

    /* Medium screens */
    @media (max-width: 992px) {
        header {
            padding: 1rem 1.5rem;
        }
    }

    /* Mobile: Center logo and stack items */
    @media (max-width: 768px) {
        header {
            flex-direction: column;
            text-align: center;
            padding: 1rem 0.75rem;
            gap: 1rem;
        }

        .logo {
            justify-content: center;
            margin-bottom: 0.5rem;
        }
        
        .logo img {
            width: 45px;
            margin-right: 0.5rem;
        }
    }

    /* Extra small screens */
    @media (max-width: 480px) {
        header {
            padding: 0.75rem 0.5rem;
        }
        
        .logo img {
            width: 40px;
            margin-right: 0.375rem;
        }
    }
</style>
