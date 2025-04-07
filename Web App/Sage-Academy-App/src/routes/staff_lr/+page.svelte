<script>
  import { onMount } from 'svelte';
  import { modules, addTopic } from '$lib/moduleStore.js';
  import { get } from 'svelte/store';

  
  onMount(() => {
      console.log("Staff Learning Resource Loaded");
  });


  /**
 * @type {{ name: string; image: string; alt: string; topics: { name: string; content: string; }[]; quizzes: { name: string; content: string; }[]; } | null | undefined}
 */
  let selectedModule = null;
  /**
 * @type {{ name: any; content: any; } | null}
 */
  let selectedTopic = null;

  let modalOpen = false;
  let newTopicName = '';
  let newTopicContent = '';

  /**
 * @param {{ name: string; image: string; alt: string; topics: { name: string; content: string; }[]; quizzes: { name: string; content: string; }[]; } | null | undefined} module
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

  function handleAddTopic() {
      const topic = {
          name: newTopicName || "New Topic",
          content: newTopicContent || "Placeholder content for new topic."
      };

      // @ts-ignore
      addTopic(selectedModule.name, topic);

      // Refresh the selectedModule from the store
      const updatedModules = get(modules);
      // @ts-ignore
      selectedModule = updatedModules.find(m => m.name === selectedModule.name);

      closeModal();
  }

  function openModal() {
    modalOpen = true;
  }

  function closeModal() {
    modalOpen = false;
    newTopicName = ''; // Reset input
    newTopicContent = ''; // Reset input
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
        <button on:click={openModal} class="add-topic-btn">➕ Add Topic</button>
      {/if}
    </div>
  {/if}
</div>

{#if modalOpen}
  <div class="modal-overlay">
    <div class="modal-content">
      <h2>Add a New Topic</h2>
      <input type="text" bind:value={newTopicName} placeholder="Topic Name" />
      <textarea bind:value={newTopicContent} placeholder="Topic Content"></textarea>
      <button on:click={handleAddTopic}>Add Topic</button>
      <button on:click={closeModal}>Cancel</button>
    </div>
  </div>
{/if}

<style>
  .container {
    display: flex;
    align-items: flex-start;
    gap: 30px;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
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
      object-fit: contain;
    }
  
    .topics {
      flex-grow: 1; /* Expands to fill space */
      background-color: #f4f4f4;
      padding: 20px;
      border-radius: 10px;
      border: 2px solid black;
      min-height: 200px;
      width: 100%;
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
      padding: 5px 10px;
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
  
    .add-topic-btn {
  background-color: rgba(129, 193, 34, 0.3);
  border: solid black 2px;
  border-radius: 10px;
  color: black;
  font-weight: bold;
  padding: 12px 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.add-topic-btn:hover {
  background-color: rgba(129, 193, 34, 0.6);
  transform: scale(1.05);
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
    width: 300px;
  }

  input, textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    margin-top: 10px;
    padding: 8px;
    border: none;
    background-color: #28a745;
    color: white;
    cursor: pointer;
    border-radius: 5px;
  }

  button[type="button"] {
    background-color: #dc3545;
  }

 /* Responsive styles for different screen sizes */
 @media (max-width: 768px) {
    .container {
      flex-direction: column;
      padding: 15px;
      gap: 20px;
    }
    
    nav {
      width: 100%;
    }

    img {
        width: 30px;
        height: 30px;
      }

    .topics {
      padding: 15px;
      min-height: 150px;
    }

    .topics h1 {
        font-size: 1.5rem;
        margin-bottom: 10px;
      }

      .topics li {
        padding: 12px;
        margin: 8px 0;
      }

      .back-btn {
        font-size: 14px;
      }

      .page-back-btn {
        padding: 8px 12px;
        font-size: 14px;
      }

    .add-topic-btn {
    padding: 10px 15px;
    font-size: 14px;
    width: 100%;
    justify-content: center;
  }
  }

/* Additional responsive styles for smaller screens */
@media (max-width: 480px) {
  .container {
    padding: 10px;
    gap: 15px;
  }
  
  nav li {
    padding: 10px;
    margin: 8px 0;
    gap: 10px;
  }
  
  img {
    width: 25px;
    height: 25px;
  }
  
  .topics {
    padding: 10px;
  }
  
  .topics h1 {
    font-size: 1.3rem;
  }
  
  .topics li, 
  .back-btn, 
  .page-back-btn, 
  .add-topic-btn {
    font-size: 13px;
  }
}
  </style>