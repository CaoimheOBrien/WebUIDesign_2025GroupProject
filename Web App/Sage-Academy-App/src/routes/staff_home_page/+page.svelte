<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Staff Home Page Loaded");
    });

    let buttons = [
        "Quizzes",
        "Learning Resources",
        "Class Information"
    ];
</script>

<div class="button-container">
    {#each buttons as button}
        <button class="button">
            <div class="line"></div>
            <span>{button}</span>
        </button>
    {/each}
</div>

<style>
  .button-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: auto;
    gap: 2rem; /* Creates spacing between items */
    margin: 5rem;
  }

  .button {
      background: rgba(129,193,34,0.1);
      border-radius: 10px; /* Rounded corners */
      border: 4px solid #016618;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
      overflow: hidden;
      width: 250px;
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions */
      padding: 1.5rem; /* Space inside the button */
      font-size: 1.2rem;
     
      color: #003300; /* Dark green text */
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px; /* Space between line and text */
  }

  .button .line {
      width: 40%; /* Initial width of the line */
      height: 2px;
      background: rgba(129,193,34,255);
      transition: width 0.3s ease-in-out; /* Smooth transition for width */
  }

  .button:hover .line {
      width: 80%; /* Expand the line to 80% of the button width on hover */
  }

  .button:hover {
      transform: translateY(-5px); /* Subtle lift on hover */
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15); /* More prominent shadow */
      cursor: pointer;
  }

  .button span {
      font-size: 18px; /* Adjusted to match your previous buttons */
      font-weight: bold;
  }
</style>
