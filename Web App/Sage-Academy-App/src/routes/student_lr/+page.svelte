<script>
    import { onMount } from 'svelte';
    import { modules } from '$lib/moduleStore.js';

    onMount(() => {
        console.log("Student Learning Resources Home Page Loaded");
    });

    /**
	 * @type {{ name: any; topics: any; } | null}
	 */
    let selectedModule = null;
    /**
	 * @type {{ name: any; content: any; } | null}
	 */
    let selectedTopic = null;

    /**
	 * @param {{ name: any; topics: any; } | null} module
	 */
    function selectModule(module) {
    selectedModule = module;
    selectedTopic = null;
  }

  /**
	 * @param {{ name: any; content: any; } | null} topic
	 */
  function selectTopic(topic) {
        selectedTopic = topic;
    }

    function goBack() {
        selectedTopic = null;
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
        <li on:click={() => selectModule(module)}
          class:selected={selectedModule === module}>
            <img src={module.image} alt={module.alt}/>
            {module.name}
          </li>
        {/each}
      </ul>
  </nav>


{#if selectedModule}
  <div class="topics">
    {#if selectedTopic}
      <button on:click={goBack} class="back-btn">← Back</button>
      <h1>{selectedTopic.name}</h1>
      <p>{selectedTopic.content}</p>
    {:else}
      <h1>{selectedModule.name}</h1>
      <ul>
        {#each selectedModule.topics as topic}
          <li on:click={() => selectTopic(topic)}>{topic.name}</li>
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
    max-width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;
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

  nav li.selected {
    background-color: rgba(129, 193, 34, 0.6);
    transform: scale(1.02);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  nav li.selected:hover {
    transform: scale(1.02);
  }
  
  img {
    width: 40px; 
    height: 40px;
  }
  
  .topics {
    flex-grow: 1; /* Expands to fill space */
    background-color: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    border: 2px solid black;
    min-height: 200px;
  }
  
  .topics h1 {
    margin-bottom: 15px;
    font-size: 1.8rem;
  }
  
  .topics ul {
    list-style: none;
    padding: 0;
  }
  
  .topics li {
    padding: 15px;
    margin: 10px 0;
    background-color: rgba(129, 193, 34, 0.3);
    border: solid black 2px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  
  .topics li:hover {
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
  
  /* Responsive styles */
  @media (max-width: 1024px) {
    .container {
      padding: 15px;
      gap: 20px;
    }
    
    nav {
      width: 220px;
    }
    
    .topics h1 {
      font-size: 1.6rem;
    }
  }
  
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 15px;
      padding: 12px;
    }
    
    nav {
      width: 100%;
    }
    
    nav ul {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    
    nav li {
      flex: 1 1 calc(50% - 10px);
      min-width: 150px;
      margin: 5px 0;
      padding: 12px;
    }
    
    .topics {
      width: 100%;
      padding: 15px;
    }
    
    .topics h1 {
      font-size: 1.4rem;
    }
    
    .topics li {
      padding: 12px;
    }
  }
  
  @media (max-width: 480px) {
    .container {
      padding: 10px;
      gap: 12px;
    }
    
    nav li {
      flex: 1 1 100%;
      padding: 10px;
    }
    
    img {
      width: 30px;
      height: 30px;
    }
    
    .topics {
      padding: 12px;
    }
    
    .topics h1 {
      font-size: 1.2rem;
    }
    
    .topics p {
      font-size: 0.95rem;
      line-height: 1.4;
    }
    
    .back-btn, .page-back-btn {
      font-size: 14px;
      padding: 8px 12px;
    }
  }
  </style>
  