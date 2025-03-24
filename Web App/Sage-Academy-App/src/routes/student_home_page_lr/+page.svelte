<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Student Learning Resources Home Page Loaded");
    });

</script>

<nav>
    <ul>
        <li>
            <img src="brain.png" alt=""/>
            Design Psych.

        </li>
        <li>
            <img src="computer.png" alt=""/>
            Web UI Design
        </li>
        <li>
            <img src="prototype.png" alt=""/>
            UI Prototyping
            
        </li>
        <li>
            <img src="art.webp" alt=""/>
            3D Digital Art
        </li>
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
  color: white;
  font-weight: bold; 
<<<<<<< HEAD
  padding: 15px;
  margin: 20px 0;
  background-color:rgba(129,193,34,255);
  border: solid black 1.5px;
=======
  padding: 20px;
  margin: 30px;
  background-color:rgba(129,193,34,0.7);
  border: solid #016618 2px;
>>>>>>> 7eae00ce403f7a2b4c30cf6bdbf1d465ea8a7bbf
  border-radius: 10px;
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
