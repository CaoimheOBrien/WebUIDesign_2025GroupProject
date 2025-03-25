<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Student Learning Resources Home Page Loaded");
    });

    let modules = [
      {
        "Design Psych.": [
          {"topic1": "content"},
          {"topic2": "content"},
          {"topic3": "content"},
          {"topic4": "content"}
        ]
      },
      {
        "Web UI Design": [
          {"topic1": "content"},
          {"topic2": "content"},
          {"topic3": "content"},
          {"topic4": "content"}
        ]
      },
      {
        "UI Prototyping": [
          {"topic1": "content"},
          {"topic2": "content"},
          {"topic3": "content"},
          {"topic4": "content"}
        ]
      },
      {
        "3D Digital Art": [
          {"topic1": "content"},
          {"topic2": "content"},
          {"topic3": "content"},
          {"topic4": "content"}
        ]
      }
    ]

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
<<<<<<< HEAD
  color: white;
  font-weight: bold; 
  padding: 15px;
  margin: 20px 0;
  background-color:rgba(129,193,34,255);
  border: solid #016618 3px;
=======
  color: black;
  padding: 15px;
  margin: 20px 0;
  background-color:rgba(129,193,34,0.3);
  border: solid black 2px;
>>>>>>> e17ebbbbb14f983fe4ac102ced6e58114e5776bf
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
