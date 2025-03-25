<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("About Page Loaded");
    });
</script>

<h1>About Our Team</h1>
<p>This educational website was created by four students: Natalia, Caoimhe, Aoife and Lee.</p>
<p>We are Second Year students currently studying Interactive Digital Art and Design in SETU Carlow.</p>

<h2>Introduction</h2>

<div class="OurPics">
    <img src="/caoimhe.jpg" id="caoimhe" alt="Caoimhe Profile">
    <h3>Caoimhe O'Brien</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<div class="OurPics">
    <img src="/natalia.jpg" id="natalia" alt="Natalia Profile">
    <h3>Natalia Ryl</h3>
    <p>Hi I'm Natalia!</p>
    <p>I'm a creative at heart with a love for UI/UX, animation, and game development. </p>
    <p>I enjoy bringing ideas to life through design and always look for new ways to learn, experiment, and improve my skills</p>
</div>

<div class="OurPics">
    <img src="/aoife.jpg" id="aoife" alt="Aoife Profile">
    <h3>Aoife Leahy</h3>
    <p>Hi, I'm Aoife!</p>
    <p>I'm passionate about animation and concept art, and I love designing and bringing new characters to life.</p>
    <p>I'm always looking for new ways to improve, refine my skills, and push my artistic boundaries.</p>
</div>

<div class="OurPics">
    <img src="/lee.jpg" id="lee" alt="Lee Profile">
    <h3>Lee Lindsay</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<style>
    h1 { color: #016618; }

    p { 
        font-size: 18px;
     }

    h2 {
    color: #016618;
    padding: 50px;
    }

    img {
        margin-right: 0.625rem;
    }

    #natalia {
        width: 18rem;
    }

    #caoimhe {
        width: 15.5rem;
    }

    #aoife {
        width: 14.5rem;
    }

    #lee {
        width: 13rem;
    }

    .OurPics{
        display: inline-block;
    }

    .OurPics p {
        width: 300px;
        text-align: left;
    }
</style>