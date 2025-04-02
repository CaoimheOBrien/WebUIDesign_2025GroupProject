<script>
    import { onMount } from 'svelte';
    import { modules } from '$lib/moduleStore.js';
    import { addModule } from '$lib/moduleStore.js';


    onMount(() => {
        console.log("Staff Class Info Home Page Loaded");
    });

    /**
	 * @type {{ name: string; image: string; alt: string; topics: { name: string; content: string; }[]; quizzes: { name: string; content: string; }[]; } | null}
	 */
    let selectedModule = null;
    
    /**
	 * @param {{ name: string; image: string; alt: string; topics: { name: string; content: string; }[]; quizzes: { name: string; content: string; }[]; }} module
	 */
    function selectModule(module) {
    selectedModule = module;
    }

    function goBack() {
        selectedModule = null;
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
      <!-- svelte-ignore a11y_missing_attribute -->
      <button on:click={addModule} class="add-module-btn"><img src="new.png"/>Add Module</button>
  </nav>

  {#if selectedModule}
  <div class="box">
    <button on:click={goBack} class="back-btn">← Back</button>
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

  /* Media query for mobile devices */
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 15px;
      padding: 10px;
    }
  }
  
  nav {
    width: 250px;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    nav {
      width: 100%;
    }
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

  @media (max-width: 768px) {
    nav li {
      padding: 12px;
      margin: 8px 0;
      font-size: 0.95em;
    }
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

    @media (max-width: 768px) {
    img {
      width: 32px;
      height: 32px;
    }
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

    @media (max-width: 768px) {
      .page-back-btn {
        padding: 8px 12px;
        font-size: 14px;
        width: 100%;
        margin-bottom: 8px;
      }
    }
  
    .page-back-btn:hover {
      background-color: #024d13;
    }

    .add-module-btn {
  width: 250px;
  display: flex;  
  align-items: center; 
  
  gap: 15px;
  font-weight: bold;
  font-size: 15px;
  padding: 15px;
  margin: 10px 0;
  background-color: rgba(129, 193, 34, 0.3);
  border: solid black 2px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

@media (max-width: 768px) {
  .add-module-btn {
    width: 100%;
    padding: 12px;
    font-size: 14px;
  }
}

.add-module-btn:hover {
  background-color: rgba(129, 193, 34, 0.6);
  transform: scale(1.05);
}

.box {
  flex-grow: 1;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid black;
  min-height: 400px;
}

@media (max-width: 768px) {
  .box {
    width: 100%;
    padding: 15px;
    min-height: 150px;
  }
}

.back-btn {
      background: none;
      border: none;
      color: blue;
      cursor: pointer;
      font-size: 16px;
      margin-bottom: 10px;
      padding: 5px 10px;
    }
    
    @media (max-width: 768px) {
      .back-btn {
        font-size: 14px;
      }
    }
  
    .back-btn:hover {
      text-decoration: underline;
    }
</style>
