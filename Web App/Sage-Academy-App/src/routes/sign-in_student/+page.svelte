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
            <legend>Sign-in</legend>
            <br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <br><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <br><br>
        </fieldset>
        <br>
        
        <button type="submit" on:click={() => location.href = "/student_home_page"}>Submit</button>
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

    form button{
        background: rgba(129, 193, 34, 0.1);
        border-radius: 0.9rem;
        border: 0.4rem solid #016618;
        box-shadow: 0 3rem 2rem rgba(0, 0, 0, 0.1);
        overflow: hidden;
        font-size: 2rem;
        text-align: center;
        padding: 0.8rem;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
        margin: 1.2rem;
    }


</style>