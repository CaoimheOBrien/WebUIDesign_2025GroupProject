<script>
    import { onMount } from 'svelte';
    import { base } from '$app/paths';
    
    onMount(() => {
        console.log("Home Page Loaded");
    });


</script>

<!-- Gallery Container -->
<div class="gallery">
    <button on:click={() => location.href =`${base}/sign-in_staff`}>
        <h2>I'm a Staff Member</h2>
    </button>
    <button on:click={() => location.href = `${base}/sign-in_student`}>
        <h2>I'm a Student</h2>
    </button>
</div>

<style>
    .gallery {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        margin-top: auto;
        gap: 7rem;
        margin: 5rem;
        justify-content: center;
    }

    /* Style the button directly to act like a card */
    button{
        background: rgba(129, 193, 34, 0.1);
        border-radius: 10px;
        border: 4px solid #016618;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        width: 250px;
        text-align: center;
        padding: 1.5rem;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
    }

    /* Style the button content (h2) */
    button h2 {
        font-size: 1.2rem;
        margin: 0;  /* Remove any margin */
        color: inherit;  /* Inherit color from parent */
    }

    /* Hover effect for the button */
    button:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    }

    /* Pseudo-element for underline on hover */
    button h2::before {
        content: "";
        display: block;
        width: 40%;
        height: 2px;
        background: rgba(129, 193, 34, 255);
        margin: 0 auto 10px auto;
        transition: width 0.3s ease-in-out;
    }

    button:hover h2::before {
        width: 80%;  /* Expand the underline on hover */
    }

    /* Media Queries for Responsive Design */
    /* Small screens and mobile devices */
    @media (max-width: 600px) {
        .gallery {
            gap: 2rem;
            margin: 2rem 1rem;
        }
        
        button {
            width: 200px;
            padding: 1rem;
        }
        
        button h2 {
            font-size: 1rem;
        }
    }

    /* Medium screens and tablets */
    @media (min-width: 601px) and (max-width: 900px) {
        .gallery {
            gap: 4rem;
            margin: 3rem 2rem;
        }
        
        button {
            width: 220px;
            padding: 1.2rem;
        }
    }

    /* Large screens */
    @media (min-width: 901px) and (max-width: 1200px) {
        .gallery {
            gap: 5rem;
            margin: 4rem;
        }
    }

    /* Extra large screens */
    @media (min-width: 1201px) {
        .gallery {
            gap: 7rem;
            margin: 5rem;
        }
    }
</style>