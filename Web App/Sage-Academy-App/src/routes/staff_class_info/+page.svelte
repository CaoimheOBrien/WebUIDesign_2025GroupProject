<script>
    import { onMount } from 'svelte';
    import { modules, addModule } from '$lib/moduleStore.js';


    onMount(() => {
        console.log("Staff Class Info Loaded");
    });

    let searchQuery = ""; // Search bar input
    let searchResult = ""; // number of students text
    let searchResult2 = ""; // no results text
    let searchResult3 = ""; // list of names bold
    let searchResult4 = ["1. Olivia Green", "2. Ethan Walker", "3. Isabella Carter", "4. Liam O'Neill", 
    "5. Sophia Davis", "6. Noah Scott", "7. Emma Clark", "8. Eric Johnson", "9. Ava Wilson", "10. Lucas Evans"]; // student names
    
    /**
	 * @type {{ name: string; image: string; alt: string; topics: { name: string; content: string; }[]; quizzes: { name: string; content: string; }[]; } | null}
	 */
    let selectedModule = null;

    let newModuleName = '';
    let showAddModuleForm = false; // Toggle the form visibility
    
    /**
	 * @param {{ name: string; image: string; alt: string; topics: { name: string; content: string; }[]; quizzes: { name: string; content: string; }[]; }} module
	 */
    function selectModule(module) {
    selectedModule = module;

    // Reset search-related variables when selecting a new module
    searchQuery = "";
    searchResult = "";
    searchResult2 = "";
    searchResult3 = "";
    searchResult4;

    }

    function goBack() {
        selectedModule = null;
    }

    function goBackPage() {
        window.history.back();
    }

    function handleAddModule() {
        showAddModuleForm = true;
    }
function handleSubmitModule() {
        if (newModuleName.trim()) {
            const newModule = {
                name: newModuleName,
                image: "new.png",  // Placeholder image
                alt: "new icon",
                topics: [],
                quizzes: []
            };

            // @ts-ignore
            addModule(newModule);
            showAddModuleForm = false;
            newModuleName = "";
        } else {
            alert("Please enter a module name!");
        }
    }

    // Handle the Enter key press in the search bar
    /**
	 * @param {{ key: string; }} event
	 */
    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            // If the search is empty, hide the "No results found" message
            if (searchQuery.trim().toLowerCase() === "number of students") {
                searchResult = "Number of Students = 10";
                searchResult3 = "List of names:";
                searchResult4;
            } else {
                // If there's any query entered, show "No results found"
                searchResult2 = "No Results Found";
            }
          
        }
    }

    // Reset the "No results found" message when the user starts typing
    function handleInputChange() {
        searchResult = "";
        searchResult3 = "";
        searchResult4;
    }

     // Reset the "No results found" message when the user starts typing
    function handleInputChange2() {
        searchResult2 = "";
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
    <button on:click={handleAddModule} class="add-module-btn">
      <img src="add.png" alt="add symbol"/>Add Module</button>
  </nav>

  {#if showAddModuleForm}
    <div class="add-module-form">
      <h3>Create a New Module</h3>
      <input type="text" bind:value={newModuleName} placeholder="Module Name" />
      <button on:click={handleSubmitModule} class="submit-btn">Submit Module</button>
      <button on:click={() => showAddModuleForm = false} class="cancel-btn">Cancel</button>
    </div>
  {/if}

  {#if selectedModule}
  <div class="box">
    <button on:click={goBack} class="back-btn">← Back</button>

    <!-- Search bar -->
  <input
    type="text"
    bind:value={searchQuery}
    placeholder="Search..."
    on:keypress={handleKeyPress}
    on:input={handleInputChange}
    on:input={handleInputChange2}
  />

    {#if searchResult}
    <p class = "search-result">{searchResult}</p>
    {/if}

    {#if searchResult2}
    <p class = "search-result2">{searchResult2}</p>
    {/if}

    {#if searchResult3}
    <p class = "search-result3">{searchResult3}</p>
    {/if}

    {#if searchResult3}
    <ul class="search-result4">
        {#each searchResult4 as name}
          <li>{name}</li>
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
  display: flex;
  flex-direction: column;
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

    .no-results-popup {
    color: red;
    font-size: 18px;
    margin-top: 10px;
  }
  
  input {
    padding: 10px;  
    height: 50px;   
    font-size: 16px; 
    border: 2px solid #ccc; 
    border-radius: 5px; 
    margin-bottom: 10px; 
  }

  .search-result {
    color: black;
    font-size: 20px;
    margin-top: 25px;
    padding-right: 375px;
}

.search-result2 {
    color: rgb(255, 0, 0);
    font-size: 15px;
    margin-top: 10px;
}

.search-result3 {
    color: black;
    font-size: 20px;
    margin-top: 15px;
    padding-right: 460px;
    font-weight: bold;
}

.search-result4 {
    color: black;
    font-size: 18px;
    margin-top: 10px;
    padding-right: 470px;
    
}

li{
  list-style: none;
  align-items: start;
  text-align: left;
  padding-left: 8px;
}

/* Form container */
.add-module-form {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid black;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* Form title */
.add-module-form h3 {
  font-size: 24px;
  color: black;
  margin-bottom: 15px;
  font-weight: bold;
}

/* Input fields for module name and topics */
.add-module-form input {
  padding: 12px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: white;
}

.add-module-form input:focus {
  border-color: #016618;
  outline: none;
}

/* Submit and Cancel buttons */
.submit-btn, .cancel-btn {
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.submit-btn {
  background-color: #016618;
  color: white;
}

.submit-btn:hover {
  background-color: #024d13;
}

.cancel-btn {
  background-color: #ccc;
  color: black;
}

.cancel-btn:hover {
  background-color: #aaa;
}

/* Button container */
.add-module-form button {
  width: 100%;
  margin-top: 10px;
}

/* Responsive styles for mobile */
@media (max-width: 768px) {
  .add-module-form {
    width: 100%;
    padding: 15px;
  }

  .add-module-form input {
    padding: 10px;
  }

  .submit-btn, .cancel-btn {
    font-size: 14px;
    padding: 10px;
  }
}


/* Media query for mobile devices */
@media (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 15px;
      padding: 10px;
    }

    nav {
      width: 100%;
    }

    input {
      height: 45px;  /* Adjust for smaller screens */
      padding: 8px;
    }

    .back-btn {
        font-size: 14px;
      }

      .box {
        width: 100%;
        padding: 15px;
        min-height: 150px;
      }

      .add-module-btn {
    width: 100%;
    padding: 12px;
    font-size: 14px;
  }

  .page-back-btn {
        padding: 8px 12px;
        font-size: 14px;
        width: 100%;
        margin-bottom: 8px;
      }

      img {
      width: 32px;
      height: 32px;
    }
  }

  nav li {
      padding: 12px;
      margin: 8px 0;
      font-size: 0.95em;
    }

</style>
