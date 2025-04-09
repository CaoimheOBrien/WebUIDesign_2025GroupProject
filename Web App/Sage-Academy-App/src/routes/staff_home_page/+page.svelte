<script>
    import { onMount } from 'svelte';
    import { base } from '$app/paths';

    onMount(() => {
        console.log("Staff Home Page Loaded");
    });

</script>


<!-- Gallery Container -->
<div class="gallery">
    <button on:click={() => location.href = `${base}/staff_quiz`}>
        <h2>Quizzes</h2>
    </button>
    <button on:click={() => location.href = `${base}/staff_lr`}>
        <h2>Learning Resources</h2>
    </button>
    <button on:click={() => location.href = `${base}/staff_lr`}>
        <h2>Class Information</h2>
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

    
    /* Add media queries for different screen sizes */
    @media (max-width: 1024px) {
        .gallery {
            gap: 4rem;
            margin: 3rem;
        }
    }

    @media (max-width: 768px) {
        .gallery {
            gap: 2rem;
            margin: 2rem;
            flex-direction: column;
            align-items: center;
        }

        button h2 {
            font-size: 1.1rem;
        }

        button {
            width: 90%;
            max-width: 250px;
            padding: 1.2rem;
            border-width: 3px;
        }
    }

    @media (max-width: 480px) {
        button h2 {
            font-size: 1rem;
        }

        button {
            width: 95%;
            padding: 1rem;
        }
    }
</style>