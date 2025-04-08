<script>
  import { onMount } from 'svelte';
  import { modules } from '$lib/moduleStore.js';
	

  onMount(() => {
      console.log("Student Quizzes Loaded");
  });

  /**
	 * @type {{ name: any; quizzes: any; } | null}
	 */
  let selectedModule = null;

  /**
	 * @type {{ name: any; content: any; } | null}
	 */
  let selectedQuiz = null;

  /*Each question gets their own isWrong and isRight variables*/
  let isWrong1 = false; 
  let isWrong2 = false; 
  let isWrong3 = false; 
  let isWrong4 = false; 

  let isRight1 = false; 
  let isRight2 = false; 
  let isRight3 = false; 
  let isRight4 = false; 

  
  /**
	 * @param {{ name: any; quizzes: any; } | null} module
	 */
  function selectModule(module) {
  selectedModule = module;
  selectedQuiz = null;
  resetAnswers();
}

	/**
	 * @param {{ name: any; content: any; } | null} quizzes
	 */
function selectQuiz(quizzes) {
      selectedQuiz = quizzes;
  }
  
  function resetAnswers(){
    isWrong1 = false; 
    isWrong2 = false; 
    isWrong3 = false; 
    isWrong4 = false; 
    isRight1 = false; 
    isRight2 = false; 
    isRight3 = false; 
    isRight4 = false; 
  }

  function goBack() {
    selectedQuiz = null;
    resetAnswers();
  }


  function goBackPage() {
      window.history.back();
  }

  function showAnswer1(){
    isWrong1 = true; 
    isRight1 = true; 
  }
  function showAnswer2(){
    isWrong2 = true; 
    isRight2 = true; 

  }
  function showAnswer3(){
    isWrong3 = true;
    isRight3 = true; 
  }
  function showAnswer4(){
    isWrong4 = true; 
    isRight4 = true; 
  }

</script>

<div class="container">
<button on:click={goBackPage} class="page-back-btn">← Back</button>
<nav>
    <ul>
    {#each $modules as module}
        <li on:click={() => selectModule(module)} class:selected={selectedModule === module}>
          <img src={module.image} alt={module.alt}/>
          {module.name}
        </li>
      {/each}
    </ul>
</nav>


{#if selectedModule}
<div class="quizzes">
  {#if selectedQuiz}
    <button on:click={goBack} class="back-btn">← Back</button>
    <h1>{selectedQuiz.name}</h1>

    <div class = "question1">
      <p>{selectedQuiz.question1}</p>
      <div class= "answers">
        <button on:click={showAnswer1} class = "{isRight1 ? 'right': 'answer_btn'}">{selectedQuiz.answer1_1}</button>
        <button on:click={showAnswer1} class = "{isWrong1 ? 'wrong': 'answer_btn'}">{selectedQuiz.answer1_2}</button>
        <button on:click={showAnswer1} class = "{isWrong1 ? 'wrong': 'answer_btn'}">{selectedQuiz.answer1_3}</button>
      </div> 
    </div> 

    <div class = "question2">
      <p>{selectedQuiz.question2}</p>
      <div class= "answers">
        <button on:click={showAnswer2} class = "{isWrong2 ? 'wrong': 'answer_btn'}">{selectedQuiz.answer2_1}</button>
        <button on:click={showAnswer2} class = "{isWrong2 ? 'wrong': 'answer_btn'}">{selectedQuiz.answer2_2}</button>
        <button on:click={showAnswer2} class = "{isRight2 ? 'right': 'answer_btn'}">{selectedQuiz.answer2_3}</button>
      </div>
    </div>

    <div class = "question3">
      <p>{selectedQuiz.question3}</p>
      <div class= "answers">
        <button on:click={showAnswer3} class = "{isRight3 ? 'right': 'answer_btn'}">{selectedQuiz.answer3_1}</button>
        <button on:click={showAnswer3} class = "{isWrong3 ? 'wrong': 'answer_btn'}">{selectedQuiz.answer3_2}</button>
        <button on:click={showAnswer3} class = "{isWrong3 ? 'wrong': 'answer_btn'}">{selectedQuiz.answer3_3}</button>
      </div>
    </div>

    <div class = "question4">
      <p>{selectedQuiz.question4}</p>
      <div class= "answers">
        <button on:click={showAnswer4} class = "{isWrong4 ? 'wrong': 'answer_btn'}">{selectedQuiz.answer4_1}</button>
        <button on:click={showAnswer4} class = "{isRight4 ? 'right': 'answer_btn'}">{selectedQuiz.answer4_2}</button>
        <button on:click={showAnswer4} class = "{isWrong4 ? 'wrong': 'answer_btn'}">{selectedQuiz.answer4_3}</button>
      </div>
    </div>

  {:else}
    <h1>{selectedModule.name}</h1>
    <ul>
      {#each selectedModule.quizzes as quiz}
        <li on:click={() => selectQuiz(quiz)}>{quiz.name}</li>
      {/each}
  </ul>
  {/if}
</div>
{/if}
</div>

<style>
  /* Main container layout */
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 1rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  /* Navigation styles */
  nav {
    width: 100%;
  }
  
  nav ul {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  nav li {
    display: flex;  
    align-items: center; 
    gap: 0.75rem;
    color: black;
    font-weight: bold; 
    padding: 0.75rem;
    margin: 0.5rem 0;
    background-color: rgba(129,193,34,0.3);
    border: solid black 2px;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
  }
  
  nav li:hover {
    background-color: rgba(129, 193, 34, 0.6); 
    cursor: pointer; 
    transform: scale(1.02); 
  }
  
  img {
    width: 2rem; 
    height: 2rem;
    object-fit: contain;
  }
  
  /* Quiz content area */
  .quizzes {
    width: 100%;
    background-color: #f4f4f4;
    padding: 1rem;
    border-radius: 10px;
    border: 2px solid black;
    min-height: 200px;
  }
  
  .quizzes h1 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  .quizzes ul {
    list-style: none;
    padding: 0;
  }
  
  .quizzes li {
    padding: 0.75rem;
    margin: 0.5rem 0;
    background-color: rgba(129, 193, 34, 0.3);
    border: solid black 2px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  
  .quizzes li:hover {
    background-color: rgba(129, 193, 34, 0.6);
  }
  
  /* Question styles */
  .question1, .question2, .question3, .question4 {
    margin-bottom: 1.5rem;
  }
  
  .question1 p, .question2 p, .question3 p, .question4 p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  
  /* Answer styles - keeping them in a row but making them responsive */
  .answers {
    display: inline-flex;
    justify-content: space-between; 
    padding: 0.5rem;
    width: 100%;
    overflow-x: auto; /* Allow horizontal scrolling on small screens */
    gap: 0.5rem;
  }
  
  .answer_btn, .right, .wrong {
    text-align: left; 
    margin: 0.25rem; 
    padding: 1rem; 
    font-size: 1rem; 
    flex: 1 0 auto;
    min-width: 8rem; /* Minimum width to ensure content fits */
    border: solid black 2px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    min-height: 3rem;
  }
  
  .answer_btn {
    background-color: rgba(129, 193, 34, 0.33);
  }
  
  .answer_btn:hover {
    background-color: rgba(129, 193, 34, 0.6);
  }
  
  .right {
    background-color: rgb(0, 164, 22);
  }
  
  .right:hover {
    background-color: rgba(3, 194, 28, 0.5);
  }
  
  .wrong {
    background-color: rgb(207, 10, 10);
  }
  
  .wrong:hover {
    background-color: rgba(193, 34, 34, 0.6);
  }
  
  /* Button styles */
  .back-btn {
    background: none;
    border: none;
    color: blue;
    cursor: pointer;
    font-size: 1rem;
    margin-bottom: 0.75rem;
    padding: 0.5rem;
  }
  
  .back-btn:hover {
    text-decoration: underline;
  }
  
  .page-back-btn {
    background-color: #016618;
    color: white;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin-bottom: 0.75rem;
    min-width: 6rem;
  }
  
  .page-back-btn:hover {
    background-color: #024d13;
  }
  
  /* Media Queries for responsive design */
  @media (min-width: 768px) {
    /* Tablet and larger */
    .container {
      flex-direction: row;
      padding: 1.5rem;
    }
    
    nav {
      width: 30%;
      max-width: 250px;
      flex-shrink: 0;
    }
    
    .quizzes {
      flex-grow: 1;
      padding: 1.5rem;
    }
    
    .quizzes h1 {
      font-size: 1.75rem;
    }
    
    .answer_btn, .right, .wrong {
      flex: 1;
    }
  }

  /* Media query for smaller screens - 2x2 grid layout for navigation */
  @media (max-width: 767px) {
    nav ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 0.75rem;
    }
    
    nav li {
      margin: 0;
    }
  }
  
  @media (min-width: 1024px) {
    /* Desktop */
    .container {
      gap: 2rem;
      padding: 2rem;
    }
    
    nav li {
      padding: 1rem;
    }
    
    .quizzes {
      padding: 2rem;
    }
    
    .quizzes h1 {
      font-size: 2rem;
    }
    
    .answer_btn, .right, .wrong {
      padding: 1.25rem;
      font-size: 1.1rem;
    }
  }
  
  /* Touch-friendly adjustments for mobile */
  @media (hover: none) and (pointer: coarse) {
    nav li, .quizzes li, .answer_btn, .right, .wrong, .back-btn, .page-back-btn {
      padding: 0.875rem;
      min-height: 44px; /* Minimum touch target size */
    }
    
    nav li:hover, .quizzes li:hover {
      transform: none; /* Disable hover effects on touch devices */
    }
  }
  </style>