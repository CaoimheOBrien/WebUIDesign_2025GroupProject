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
<img src="/natalia.jpg" alt="Natalia Profile">
<h3>Natalia Ryl</h3>
<p>Hi!</p>
</div>

<div class="OurPics">
    <img src="/caoimhe.jpg" alt="Caoimhe Profile">
    <h3>Caoimhe O'Brien</h3>
    <p>Hi!</p>
</div>

<div class="OurPics">
    <img src="/aoife.jpg" id="smaller" alt="Aoife Profile">
    <h3>Aoife Leahy</h3>
    <p>Hi!</p>
    </div>

<div class="OurPics">
    <img src="/lee.jpg" id="smaller" alt="Lee Profile">
    <h3>Lee Lindsay</h3>
    <p>Hi!</p>
</div>

<style>
    h1 { color: #5a9975; }

    p { font-size: 18px; }

    h2 {
    color: #5a9975;
    }

    img {
        width: 300px;
        margin-right: 0.625rem;
    }

    #smaller {
        width: 250px;
    }

    .OurPics{
        display: inline-block;
    }
</style>