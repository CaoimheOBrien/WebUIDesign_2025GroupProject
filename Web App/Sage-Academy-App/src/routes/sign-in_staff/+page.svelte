<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Student Quiz Home Page Loaded");
    });

</script>


<!-- Gallery Container -->
<div class="gallery">
    <form>
        <fieldset>
            <legend id= "form_title">Sign-in</legend>
            <br>
            <legend id="note">Please use your staff email.</legend>
            <br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <br><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <br><br>
        </fieldset>
        <br>
        
        <button type="submit" on:click={() => location.href = "/staff_home_page"}>Submit</button>
        <button type="reset">Reset</button>
    </form>

</div>



<style>
    .gallery {
        display: flex;
        flex-direction: row;
        gap: 20rem;
        justify-content: center;
    }

    form{
        width: 70%;
        height: 60%; 
    }
    fieldset{
        border-radius: 2cap;
        border: solid #016618;
        background: rgba(129, 193, 34, 0.048);
        font-size: 1.4rem; 
    }

    form button{
        background: rgba(129, 193, 34, 0.1);
        border-radius: 10px;
        border: 4px solid #016618;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        width: 8rem;
        text-align: center;
        padding: 1.5rem;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
        font-size: 1.4rem;
        margin: 1rem; 
    }
    
    form button:hover{
        transform: translateY(-5px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    }

    #form_title{
        font-size: 3rem; 
    }

    #note{
        font-size: 1.5rem;
    }

    #email{
        font-size: 1rem;
    }

    #password{
        font-size: 1rem;
    }

</style>