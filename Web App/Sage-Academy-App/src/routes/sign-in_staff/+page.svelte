<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Staff Quiz Home Page Loaded");
    });

    let email = '';
    let password = '';
    let isSubmitted = false;

 // Function to handle form submission
    function submittingForm(event) {
    event.preventDefault(); // Prevent default form submission
    isSubmitted = true;

    if (email && password) {
        location.href = "/staff_home_page";
    }
    else {
        alert('Please fill in all required fields.');
    }

}

</script>


<!-- Gallery Container -->
<div class="gallery">
    <form on:submit={submittingForm}>
        <fieldset>
            <legend id= "form_title">Sign-in</legend>
            <br>
            <legend id="note">Please use your student email.</legend>
            <br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" bind:value={email} required/>
            <br><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" bind:value={password} required/>
            <br><br>
        </fieldset>
        <br>
        
        <button type="submit">Submit</button>
        <button type="reset" on:click={() => { email = ''; password = ''; isSubmitted = false; }}>Reset</button>
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