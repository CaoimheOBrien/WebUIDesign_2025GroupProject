<script>
  import { onMount } from 'svelte';
  import { modules } from '$lib/moduleStore.js';

  onMount(() => {
      console.log("Student Quizzes Home Page Loaded");
  });

  /**
	 * @type {{ name: any; quizzes: any; } | null}
	 */
  let selectedModule = null;

  /**
	 * @type {{ name: any; content: any; } | null}
	 */
  let selectedQuiz = null;

  /**
	 * @param {{ name: any; quizzes: any; } | null} module
	 */
  function selectModule(module) {
  selectedModule = module;
  selectedQuiz = null;
}

/**
	 * @param {{ name: any; content: any; } | null} quiz
	 */
function selectQuiz(quizzes) {
      selectedQuiz = quizzes;
  }

  function goBack() {
      selectedQuiz = null;
  }

  function goBackPage() {
      window.history.back();
  } 

</script>

<div class="container">
<button on:click={goBackPage} class="page-back-btn">← Back</button>
<nav>
    <ul>
      {#each modules as module}
        <li on:click={() => selectModule(module)}>
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

    <p>{selectedQuiz.question1}</p>
    <div class= "answers">
      <p>{selectedQuiz.answer1}</p>
      <p>{selectedQuiz.answer2}</p>
      <p>{selectedQuiz.answer3}</p>
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
.container {
display: flex;
align-items: flex-start;
gap: 30px;
padding: 20px;
}

nav {
width: 250px;
flex-shrink: 0;
}

nav ul {
padding: 0;
list-style: none;
}

nav li  {
display: flex;  
align-items: center; 
gap: 15px;

color: white;
font-weight: bold; 
padding: 15px;
margin: 20px 0;
background-color:rgba(129,193,34,255);
border: solid #016618 3px;

color: black;
padding: 15px;
margin: 10px 0;
background-color:rgba(129,193,34,0.3);
border: solid black 2px;
border-radius: 10px;
}

nav li:hover {
background-color: rgba(129, 193, 34, 0.6); 
cursor: pointer; 
transform: scale(1.05); 
}

img {
  width: 40px; 
  height: 40px;

}

.quizzes {
  flex-grow: 1; /* Expands to fill space */
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid black;
  min-height: 200px;
}

.quizzes h1 {
  margin-bottom: 15px;
}

.quizzes ul {
  list-style: none;
  padding: 0;
}

.quizzes li {
  padding: 15px;
  margin: 10px 0;
  background-color: rgba(129, 193, 34, 0.3);
  border: solid black 2px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.quizzes li:hover {
  background-color: rgba(129, 193, 34, 0.6);
}


.answers {
  display: inline-flex;
  padding: 1rem;
}

.answers p{
  margin: 1rem; 
  padding-left: 1.6rem; 
  padding-right: 1.6rem; 
  font-size: 2.5rem; 

  background-color: rgba(129, 193, 34, 0.3);
  border: solid black 2px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.answers p:hover {
  background-color: rgba(129, 193, 34, 0.6);
}

.back-btn {
  background: none;
  border: none;
  color: blue;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 10px;
}

.back-btn:hover {
  text-decoration: underline;
}

.page-back-btn {
  background-color: #016618;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 10px;
}

.page-back-btn:hover {
  background-color: #024d13;
}

</style>
