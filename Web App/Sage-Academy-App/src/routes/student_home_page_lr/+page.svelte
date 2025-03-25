<script>
    import { onMount } from 'svelte';
    import { modules } from '$lib/moduleStore.js';

    onMount(() => {
        console.log("Student Learning Resources Home Page Loaded");
    });

    

</script>

<nav>
    <ul>
      {#each modules as module}
        <li>
          <img src={module.image} alt={module.alt}/>
          {module.name}
        </li>
      {/each}
    </ul>
</nav>

<style>
ul {
  width: 220px;
  padding: 0;
  list-style: none;
}

li  {
  display: flex;  
  align-items: center; 
  gap: 15px;
<<<<<<< HEAD

  color: white;
  font-weight: bold; 
  padding: 15px;
  margin: 20px 0;
  background-color:rgba(129,193,34,255);
  border: solid #016618 3px;

=======
>>>>>>> 2fa5bafb19cb14ce374686eca99a55936cea6611
  color: black;
  padding: 15px;
  margin: 20px 0;
  background-color:rgba(129,193,34,0.3);
  border: solid black 2px;
<<<<<<< HEAD

=======
>>>>>>> 2fa5bafb19cb14ce374686eca99a55936cea6611
  border-radius: 10px;
}

li:hover {
  background-color: rgba(129, 193, 34, 0.6); 
  cursor: pointer; 
  transform: scale(1.05); 
}

nav ul {
  justify-content: center;
  gap: 10px;
}

img {
    width: 40px; 
    height: 40px;

  }

</style>
