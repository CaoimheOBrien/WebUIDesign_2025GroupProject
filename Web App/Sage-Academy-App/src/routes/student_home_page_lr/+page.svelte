<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Student Learning Resources Home Page Loaded");
    });

</script>

<nav>
    <ul>
        <li>Design Psych.</li>
        <li>Web UI Design</li>
        <li>UI Prototyping</li>
        <li>3D Digital Art</li>
    </ul>
</nav>

<style>
ul {

  width: 300px;
  padding-right: 70px;
  padding-top: 0px;
}

li  {
  display: block;   
  color: #000;
  text-decoration: none;
  color: white;
  font-weight: bold; 
  padding: 20px;
  margin: 30px;
  background-color:rgba(129,193,34,255);
  border: solid black 1.5px;
  border-radius: 10px;
}

nav ul {
  justify-content: center;
  gap: 10px;
  
}



</style>
