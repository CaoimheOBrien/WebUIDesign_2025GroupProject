<script>
    let isOpen = false; // Menu state (open/closed)
</script>

<nav class="nav">
    <button class="burger" on:click={() => isOpen = !isOpen} aria-label="Toggle navigation">
        ☰
    </button>

    <ul class:open={isOpen}>
        <li><a href="/">Login</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>

        <!-- delete later -->
 
    </ul>
</nav>

<style>
    /* Base Navigation Styling */
    .nav {
        padding: 1rem;
        text-align: center;
    }

    nav a {
        margin-right: 15px;
        text-decoration: none;
        padding: 10px 15px;
        border-radius: 8px;
        transition: background 0.3s ease-in-out;
    }

    nav a:hover {
        background-color: rgba(129,193,34,0.8);
        cursor: pointer;
    }

    .nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
    }

    .nav ul li {
        display: inline-block;
    }


    .nav ul li a {
        color: black;
        text-decoration: none;
        font-size: 18px;
    }

    .nav ul li a:hover {
        color: white;
    }

    /* 🍔 Burger Menu (Hidden on Large Screens) */
    .burger {
        display: none;
        font-size: 2rem;
        background: none;
        border: none;
        cursor: pointer;
        color: rgb(0, 0, 0);
        position: absolute;
        top: 1rem;
        left: 1rem;
    }

    /* Mobile Navigation: Show Burger Menu */
    @media (max-width: 768px) {
        .burger {
            display: block; /* Show burger icon */
            left: 90%;
        }

        .nav ul {
            display: none; /* Hide menu by default */
            flex-direction: column;
            position: absolute;
            top: 90px;
            left: 0;
            width: 100%;
            background: #007bff;
            text-align: left;
            padding: 1rem 0;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .nav ul.open {
            display: flex; /* Show menu when isOpen is true */
        }

        .nav ul li {
            padding: 10px 20px;
        }
    }
</style>