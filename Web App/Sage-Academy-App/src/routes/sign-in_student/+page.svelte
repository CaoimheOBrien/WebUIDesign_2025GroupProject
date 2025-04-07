<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Student Sign-In Loaded");
    });

    let email = '';
    let password = '';
    let isSubmitted = false;

 // Function to handle form submission
    /**
	 * @param {{ preventDefault: () => void; }} event
	 */
    function submittingForm(event) {
    event.preventDefault(); // Prevent default form submission
    isSubmitted = true;

    if (email && password) {
        location.href = "/student_home_page";
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
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 80vh;
        padding: 1rem;
    }

    form {
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
    }

    fieldset {
        border-radius: 1rem;
        border: solid #016618;
        background: rgba(129, 193, 34, 0.048);
        font-size: clamp(1rem, 2vw, 1.4rem);
        padding: 1.5rem;
        width: 100%;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
    }

    input {
        width: 100%;
        padding: 0.8rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        font-size: 1rem;
    }

    form button {
        background: rgba(129, 193, 34, 0.1);
        border-radius: 10px;
        border: 4px solid #016618;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        width: auto;
        min-width: 8rem;
        text-align: center;
        padding: 1rem;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
        font-size: clamp(1rem, 1.5vw, 1.4rem);
        margin: 1rem 0.5rem 1rem 0;
    }
    
    form button:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    }

    #form_title {
        font-size: clamp(2rem, 4vw, 3rem);
    }

    #note {
        font-size: clamp(1rem, 2vw, 1.5rem);
    }

    #email, #password {
        font-size: 1rem;
    }

    /* Media Queries */
    @media (max-width: 768px) {
        .gallery {
            padding: 1rem 0.5rem;
        }
        
        fieldset {
            padding: 1rem;
        }

        form button {
            padding: 0.8rem;
            margin: 0.8rem 0.3rem 0.8rem 0;
        }
    }

    @media (max-width: 480px) {
        form {
            width: 90%;
        }
        
        fieldset {
            padding: 0.8rem;
        }

        form button {
            width: 100%;
            margin: 0.5rem 0;
        }
    }
</style>