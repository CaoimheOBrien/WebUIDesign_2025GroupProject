<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Staff Quiz Home Page Loaded");
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
  color: black;
  padding: 15px;
  margin: 20px 0;
  background-color:rgba(129,193,34,255);
  border: solid #016618 3px;
  background-color:rgba(129,193,34,0.3);
  border: solid black 2px;
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
