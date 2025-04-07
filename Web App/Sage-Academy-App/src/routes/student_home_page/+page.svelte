<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Student Home Page Loaded");
    });

</script>


<!-- Gallery Container -->
<div class="gallery">
    <button on:click={() => location.href = "/student_quiz"}>
        <h2>Quizzes</h2>
    </button>
    <button on:click={() => location.href = "/student_lr"}>
        <h2>Learning Resources</h2>
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
    button {
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

    /* Responsive Media Queries */
    
    /* Large screens (default above) */
    
    /* Medium screens (tablets) */
    @media (max-width: 992px) {
        .gallery {
            gap: 5rem;
            margin: 4rem 2rem;
        }
        
        button {
            width: 220px;
            padding: 1.2rem;
        }
    }
    
    /* Small screens (large phones) */
    @media (max-width: 768px) {
        .gallery {
            gap: 3rem;
            margin: 3rem 1rem;
        }
        
        button {
            width: 180px;
            padding: 1rem;
        }
        
        button h2 {
            font-size: 1.1rem;
        }
    }
    
    /* Extra small screens (mobile phones) */
    @media (max-width: 576px) {
        .gallery {
            flex-direction: column;
            gap: 2rem;
            margin: 2rem 0.5rem;
            align-items: center;
        }
        
        button {
            width: 80%;
            max-width: 250px;
            padding: 0.8rem;
        }
        
        button h2 {
            font-size: 1rem;
        }
        
        button h2::before {
            margin: 0 auto 6px auto;
        }
        
        button:hover {
            transform: translateY(-3px);
        }
    }
</style>