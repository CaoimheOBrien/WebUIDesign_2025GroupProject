<script>
    export let title = "Card Title";
    export let description = "This is a brief description of the card.";
</script>

<div class="card">
    <div class="content">
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
</div>

<style>

    /* Card container with smooth hover effects */
    .card {
        background: #b9e5cc;
        border-radius: 10px; /* Rounded corners */
        border: 5px solid #5a9975;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
        overflow: hidden;
        width: 300px;
        height: 100px;
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions */
    }

   
    /* Content Styling: Padding for better spacing */
    .content {
        padding: 1.7rem;
        margin-left: 20%;
    }

    /* Title Styling */
    .content h2 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    /* Description Styling */
    .content p {
        font-size: 2rem;
        color: #213547;
        justify-content: center;
    }

    /* Pseudo-Class: Hover Effect
       Adds a subtle lift when hovering over the card */
    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    }

    /* Pseudo-Element: Adds a thin underline before the card title
       Creates a subtle decorative effect to enhance UI */


    /* When .card is hovered, expand the decorative effect to 80% */
    .card:hover .content h2:before {
        width: 80%; /* Expanded width on hover */
    }
</style>
