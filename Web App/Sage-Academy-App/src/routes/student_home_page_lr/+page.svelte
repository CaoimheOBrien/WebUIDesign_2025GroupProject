<script>
    import { onMount } from 'svelte';
    import { modules } from '$lib/moduleStore.js';

    onMount(() => {
        console.log("Student Learning Resources Home Page Loaded");
    });

    let selectedModule = null;

    function selectModule(module) {
    selectedModule = module;
  }

</script>

<div class="container">
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
  <div class="topics">
    <h1>{selectedModule.name}</h1>
    <ul>
      {#each selectedModule.topics as topic}
        <li>
          {topic.name}
        </li>
      {/each}
    </ul>
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

</style>
