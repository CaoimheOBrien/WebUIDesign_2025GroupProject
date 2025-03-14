<script>
    export let title = "This is button";
</script>

<div class="button">

    <div class="content">
        <h2>{title}</h2>
    </div>
</div>

<style>
    /* Card container with smooth hover effects */
    .button {
        background: #a9eba6  ;
        border-radius: 5rem; /* Rounded corners */
        border: 0.5rem solid #5a9975;
        overflow: hidden;
        width: 25rem;
        height: 10rem;
        text-align: center;
        transition: transform 0.5s ease, box-shadow 0.3s ease; /* Smooth transitions */
    }

   
    /* Content Styling: Padding for better spacing */
    .content {
        padding: 1.0rem;
        text-align: center;
        text-shadow: 0.2rem 0.2rem #477a5d; 
        margin-top: 2rem;
        font-size: 1.5rem;

    }


    /* Pseudo-Class: Hover Effect
       Adds a subtle lift when hovering over the card */
    .button:hover {
        transform: translateY(-0.5rem);
        box-shadow:  0rem 1rem #5a9975
    }


    /* When .card is hovered, expand the decorative effect to 80% */
    .button:hover .content h2:before {
        width: 80%; /* Expanded width on hover */
    }
</style>
