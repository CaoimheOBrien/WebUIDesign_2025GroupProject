<!-- used warp to assist with the burger menu -->
 
<script>
    let isOpen = false; // Menu state (open/closed)
    import { base } from '$app/paths';
</script>

<nav class="nav">
    <button class="burger" on:click={() => isOpen = !isOpen} aria-label="Toggle navigation">
        ☰
    </button>

    <ul class:open={isOpen}>
        <li><a href="{base}/">Login</a></li>
        <li><a href="{base}/about">About</a></li>
        <li><a href="{base}/contact">Contact</a></li>
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
            transition: transform 0.3s ease;
        }
        
        .burger:hover {
            transform: scale(1.1);
        }

        .nav ul {
            display: flex; /* Always in the layout for animation */
            flex-direction: column;
            position: absolute;
            top: 70px; /* Slightly higher position */
            left: 0;
            width: 100%;
            background: rgba(129, 193, 34, 0.9); /* Slightly more opaque */
            text-align: center; /* Center align items */
            padding: 0; /* Start with no padding for animation */
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15); /* Enhanced shadow */
            border-radius: 0 0 10px 10px; /* Rounded bottom corners */
            max-height: 0; /* Start with no height */
            overflow: hidden; /* Hide overflow when closed */
            opacity: 0; /* Start transparent */
            transform: translateY(-20px); /* Start slightly above */
            transition: all 0.4s ease-in-out; /* Smooth transition for all properties */
            z-index: 100; /* Ensure it appears above other content */
        }

        .nav ul.open {
            max-height: 300px; /* Enough height for all items */
            opacity: 1; /* Fully visible */
            transform: translateY(0); /* Move to normal position */
            padding: 1rem 0; /* Add padding when open */
        }

        .nav ul li {
            padding: 0; /* Reset padding */
            opacity: 0; /* Start invisible */
            transform: translateX(-10px); /* Start slightly to the left */
            transition: all 0.3s ease; /* Smooth transition */
        }

        .nav ul.open li {
            opacity: 1; /* Visible when menu is open */
            transform: translateX(0); /* Move to normal position */
            /* Stagger the animation for each item */
            transition-delay: calc(0.1s * var(--item-index, 1));
        }

        /* Assign delay indices to items */
        .nav ul li:nth-child(1) { --item-index: 1; }
        .nav ul li:nth-child(2) { --item-index: 2; }
        .nav ul li:nth-child(3) { --item-index: 3; }
        .nav ul li:nth-child(4) { --item-index: 4; }
        .nav ul li:nth-child(5) { --item-index: 5; }

        .nav ul li a {
            display: block;
            padding: 12px 25px;
            margin: 8px 15px;
            border-radius: 6px;
            font-weight: 500;
            color: white; /* White text for better contrast */
            transition: all 0.3s ease;
            background-color: rgba(255, 255, 255, 0.1); /* Slight background */
        }

        .nav ul li a:hover {
            background-color: rgba(255, 255, 255, 0.25); /* Lighter on hover */
            transform: translateY(-2px); /* Slight lift effect */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow on hover */
        }
    }
</style>