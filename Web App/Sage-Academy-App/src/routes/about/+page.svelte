<script>
    import { onMount } from 'svelte';
    
    onMount(() => {
        console.log("About Page Loaded");
    });
</script>

<h1>About Our Team</h1>
<p>This educational website was created by four students: Caoimhe, Natalia, Aoife and Lee.</p>
<p>We are Second Year students currently studying Interactive Digital Art and Design in SETU Carlow.</p>

<h2>Introduction</h2>

<div class="team-container">
    <div class="OurPics">
        <img src="/caoimhe.jpg" id="caoimhe" alt="Caoimhe Profile">
        <h3>Caoimhe O'Brien</h3>
        <p>Hi I'm Caoimhe!</p>
        <p>I'm an enthusiastic studnet with an interest in UX/UI, web development and animation.</p>
        <p>I focus on creating interesting, user-centered and innovative designs. I also want to create eye-catching pieces and websites. </p>
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
        <p>I'm passionate about animation, UI/UX Design and concept art. I love designing and bringing new characters to life.</p>
        <p>I'm always looking for new ways to improve, and refine my skills.</p>
    </div>

    <div class="OurPics">
        <img src="/lee.jpg" id="lee" alt="Lee Profile">
        <h3>Lee Lindsay</h3>
        <p>Hi I'm Lee.</p> 
        <p>I love mixing technology with creativity. Whether it's making interactive designs or experimenting with digital art, I'm always excited to learn new ways to bring ideas to life. I enjoy staying inspired by the digital world around me.</p>
    </div>
</div>

<style>
    h1 { 
        color: #016618; 
        margin-bottom: 20px;
        font-size: clamp(1.8rem, 4vw, 2.5rem);
    }

    p { 
        font-size: clamp(16px, 2vw, 18px);
        line-height: 1.5;
     }

    h2 {
        color: #016618;
        padding: clamp(25px, 5vw, 50px);
        font-size: clamp(1.5rem, 3vw, 2rem);
    }
    
    h3 {
        color: #016618;
        font-size: clamp(1.2rem, 2.5vw, 1.5rem);
        margin: 10px 0;
    }

    img {
        height: auto; /* Maintain aspect ratio */
        width: 100%; /* Make images fill their container */
        object-fit: cover; /* Ensures the image covers the area without stretching */
        display: block; /* Prevents inline spacing issues */
        margin: 0 auto 0.625rem auto; /* Center images and add bottom margin */
        border-radius: 8px; /* Add rounded corners to images */
    }

    #natalia {
        width: 18rem;
        max-width: 100%;
    }

    #caoimhe {
        width: 15.5rem;
        max-width: 100%;
    }

    #aoife {
        width: 14.5rem;
        max-width: 100%;
    }

    #lee {
        width: 13rem;
        max-width: 100%;
    }

    .OurPics {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        min-height: 400px; /* Adjust this value based on your content */
        padding: 20px;
        width: 100%;
        text-align: center;
        background-color: #f9f9f9; /* Light background for each card */
        border-radius: 10px; /* Rounded corners for each card */
        box-shadow: 0 3px 10px rgba(0,0,0,0.1); /* Subtle shadow for depth */
        transition: transform 0.3s ease;
    }

    .OurPics:hover {
        transform: translateY(-5px); /* Slight lift effect on hover */
    }

    /* Team container for all .OurPics divs */
    .team-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        justify-content: center;
        padding: 0 1rem;
    }

    .OurPics p {
        width: 100%;
        max-width: 300px;
        text-align: left;
    }

    @media (max-width: 768px) {
        #natalia {
            width: 100%;
            max-width: 18rem;
        }

        #caoimhe {
            width: 100%;
            max-width: 15.5rem;
        }

        #aoife {
            width: 100%;
            max-width: 14.5rem;
        }

        #lee {
            width: 100%;
            max-width: 13rem;
        }
    }

    /* Tablet view - 2 images per row */
    @media (max-width: 1024px) {
        .team-container {
            grid-template-columns: repeat(2, 1fr);
            max-width: 800px;
            gap: 1.5rem;
        }
    }
    
    /* Mobile view - 1 image per row */
    @media (max-width: 600px) {
        .team-container {
            grid-template-columns: 1fr;
            max-width: 400px;
            gap: 2rem;
        }
        
        .OurPics {
            min-height: 350px;
        }
    }

    @media (max-width: 1276px) {
        #natalia {
            width: 100%;
            max-width: 15rem;
        }
        
        #caoimhe {
            width: 100%;
            max-width: 13rem;
        }
        
        #aoife {
            width: 100%;
            max-width: 12rem;
        }
        
        #lee {
            width: 100%;
            max-width: 10.8rem;
        }

        h1 {
                margin-bottom: 15px;
            }

        h2 {
                padding: 25px;
            }    
    }

    .OurPics p {
        max-width: 250px;
    }

</style>