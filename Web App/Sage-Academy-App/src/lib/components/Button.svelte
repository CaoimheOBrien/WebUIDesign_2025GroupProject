<script>
    export let title = "This is button";
    export let handleClick;
</script>

<div class="button" on:click={handleClick}>

    <div class="content">
        <h2>{title}</h2>
    </div>
</div>

<style>
    /* button container with smooth hover effects */
    .button {
        background: rgba(129,193,34,0.1);
        border-radius: 10px; /* Rounded corners */
        border: 4px solid #016618;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
        overflow: hidden;
        width: 250px;
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions */
    }

    /* Content Styling: Padding for better spacing */
    .content {
        padding: 1.5rem;
    }

    /* Title Styling */
    .content h2 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    /* Pseudo-Class: Hover Effect
       Adds a subtle lift when hovering over the button */
    .button:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
        cursor: pointer;
    }

    /* Pseudo-Element: Adds a thin underline before the button title
       Creates a subtle decorative effect to enhance UI */
    .content h2::before {
        content: "";
        display: block;
        width: 40%;
        height: 2px;
        background: rgba(129,193,34,255);
        margin: 0 auto 10px auto;
        transition: width 0.3s ease-in-out;
    }

    /* When .button is hovered, expand the decorative effect to 80% */
    .button:hover .content h2:before {
        width: 80%; /* Expanded width on hover */
    }
 
</style>
