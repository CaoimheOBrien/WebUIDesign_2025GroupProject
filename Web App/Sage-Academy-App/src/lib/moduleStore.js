import { base } from '$app/paths';

import { writable } from 'svelte/store';

const designModule = {
    name: "Design Psych.",
    image: `${base}/brain.png`,
    alt: "brain",

    topics: [
        {
            name: "Colour Theory",
            content: "Colour theory is the study of how colours work together, how they affect our emotions and perceptions, and how they can be combined to create visually pleasing designs. It can be a valuable tool to not only help us understand more about the world around us but also to create harmonious designs (or decorate your home). colour theory is the art and science of using colour. At its core, colour is perception. Our eyes see something and the data sent from our eyes to our brains interprets it as a particular colour. Objects reflect light in different combinations of wavelengths (radio, gamma rays, and more). Our brains pick up on these wavelength combinations, interpreting them as a phenomenon known as colour."
        },
        {
            name: "Gamification",
            content: "Gamification is the application of game mechanics — like point scoring, timing or competition — to motivate engagement with a product or service. Injecting everyday tasks with a sense of play incentivizes people to not only complete them but to keep coming back for more. Gamification is all about making non-game activities feel like they’re games. While the term “gamification” was coined in 2002, the concept dates back to the 20th century, when retail stores introduced rewards programs to strengthen customer loyalty and industrial managers encouraged factory workers to see themselves in competition with each other."
        },
        {
            name: "Gestalt Principles",
            content: "Gestalt Principles are principles/laws of human perception that describe how humans group similar elements, recognize patterns and simplify complex images when we perceive objects. Designers use the principles to organize content on websites and other interfaces so it is aesthetically pleasing and easy to understand. Gestalt is German for unified whole. German psychologists Max Wertheimer, Kurt Koffka, and Wolfgang Kohler created the Gestalt Principles in the 1920s. They wanted to understand how people make sense of the confusing things they see and hear. They identified a set of laws that address the natural compulsion to find order in disorder."
        },
        {
            name: "Dark Patterns",
            content: "Dark patterns in UX are a design feature that subtly encourages users to perform a specific action. But unlike good UX, dark patterns benefit the company. In some cases, UX designers can take advantage of how users habitually interact with websites and apps to subtly manipulate them into performing certain actions. This is known as dark patterns. Just like good UX, most dark patterns are invisible to users. But unlike good UX, dark patterns benefit the company (rather than the user) by using deception as a tool for conversion. UK–based UX designer Harry Brignull first coined the term in 2010, defining dark patterns as “a user interface that has been carefully crafted to trick users into doing things, such as buying insurance with their purchase or signing up for recurring bills."
        }
    ],

    quizzes: [
        {
            name: "Colour Theory Quiz",
            content: "", /*DO NOT PUT ANYTHING HERE UNDER ANY CIRCUMSTANCES*/ 
            question1: "Question 1: What colour means angry?",
            answer1_1: "Red",
            answer1_2: "Blue",
            answer1_3: "Orange",

            question2: "Question 2: What colour means sad?",
            answer2_1: "Pink",
            answer2_2: "Purple",
            answer2_3: "Blue",

            question3: "Question 3: What colour is associated with the sun?",
            answer3_1: "Yellow",
            answer3_2: "Purple",
            answer3_3: "Orange",

            
            question4: "Question 4: What colour is associated with earth?",
            answer4_1: "Red",
            answer4_2: "Brown", /*correct*/
            answer4_3: "Yellow",
        },

        {
            name: "Gamification Quiz",
            content: "", /*DO NOT PUT ANYTHING HERE UNDER ANY CIRCUMSTANCES*/ 
            question1: "Question 1: What is Gamification?",
            answer1_1: "The use of game-like graphics and animations in non-game websites and apps.", /*correct*/ 
            answer1_2: "The application of game mechanics to motivate engagement.",
            answer1_3: "The practice of using physical games to teach important life skills and lessons.",

            question2: "Question 2: What is the primary goal of gamification?",
            answer2_1: "To create fully functional video games for educational purposes", 
            answer2_2: "To make everyday tasks more competitive",
            answer2_3: "To apply game design elements to non-game contexts to increase engagement and motivation", /*correct*/

            question3: "Question 3: Which of the following is NOT a typical element of gamification?",
            answer3_1: "High-end graphics for video games", /*correct*/
            answer3_2: "Rewrds and badges",
            answer3_3: "Leaderboards",

            
            question4: "Question 4:  Gamification is most commonly used in which of the following areas?",
            answer4_1: "Only in video game development ",
            answer4_2: "In education, marketing and employee engagement", /*correct*/
            answer4_3: "In competitive sports leagues",
        }, 

        {
            name: "Gestalt Quiz",
            content: "", /*DO NOT PUT ANYTHING HERE UNDER ANY CIRCUMSTANCES*/ 
            question1: "Question 1: How many Gestalt Principles are there?",
            answer1_1: "6", /*correct*/ 
            answer1_2: "3",
            answer1_3: "10",

            question2: "Question 2: Where were the gestalt princples created?",
            answer2_1: "Ireland and Wales",
            answer2_2: "Norway and Sweden",
            answer2_3: "Germany and Austria", /*correct*/ 

            question3: "Question 3: Which Gestalt Principle talks about optical illusions?",
            answer3_1: "Closure", /*correct*/ 
            answer3_2: "Proximity",
            answer3_3: "Symetry",

            question4: "Question 4: Which Gestalt Principle talks about having related items in one area?",
            answer4_1: "Closure",
            answer4_2: "Proximity", /*correct*/
            answer4_3: "Symetry",
        },

        {
            name: "Dark Patterns Quiz",
            content: "", /*DO NOT PUT ANYTHING HERE UNDER ANY CIRCUMSTANCES*/ 
            question1: "Question 1: What is a 'dark pattern' in user interface design?",
            answer1_1: "A deceptive design that manipulates users into making unintended choices", /*correct*/ 
            answer1_2: "A user-friendly feature that enhances website navigation",
            answer1_3: "A tool that makes websites visually appealing and easy to use",

            question2: "Question 2: Which of the following is an example of a 'bait and switch' dark pattern?",
            answer2_1: "Using bright colours to highlight popular products on an online store",
            answer2_2: "Showing users a pop-up with helpful tips about the website",
            answer2_3: "Offering a free trial, then automatically enrolling users in a paid subscription after the trial ends", /*correct*/ 

            question3: "Question 3: What does the 'confirmshaming; dark pattern involve?",
            answer3_1: "Making users feel guilty for opting out of a service or offer", /*correct*/ 
            answer3_2: "Offering a free trial with no expiration date",
            answer3_3: "Providing clear and easy-to-read privacy policies",

            question4: "Question 4: What is the 'hidden costs' dark pattern?",
            answer4_1: "Offering users an unexpected bonus at checkout",
            answer4_2: "Adding extra charges to a purchase only revealed at the final step of checkout", /*correct*/ 
            answer4_3: "Providing discounts on shipping costs after users have made a purchase",
        },
    ],

};

const webUIModule = {
    name: "Web UI Design",
    image: `${base}/computer.png`,
    alt: "computer",

    topics: [
        {
            name: "Typography",
            content: "Typography is an important part of our everyday life. We see it almost everywhere we look. To put it simply, typography is the appearance of text. It’s one of the most important features of every composition, both in the digital and physical worlds. The type choice can make or break every design. It helps to set the mood and emotion of any text and has a huge impact on how the reader perceives it. Typography has been around since the 11th century, however, it existed even before that – as the unique art of creating words in books and magazines without much technology around. Every detail was well-thought, crafted, and carefully carried out. "
        },
        {
            name: "CSS",
            content: "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. CSS is among the core languages of the open web and is standardized across Web browsers according to W3C specifications. Inline CSS involves applying styles directly to individual HTML elements using the style attribute. Internal or Embedded CSS is defined within the HTML document’s <style> element. It applies styles to specified HTML elements. External CSS contains separate CSS files that contain only style properties with the help of tag attributes (For example class, id, heading, … etc). CSS property is written in a separate file with a .css extension and should be linked to the HTML document using a link tag."
        },
        {
            name: "Grids and Layout",
            content: "Grids are the backbone of UI design, providing a systematic framework that helps organize and align elements within a layout. By understanding the structure of grids, you can achieve harmonious compositions that enhance visual hierarchy, improve readability, and create a cohesive user experience. Grids consist of intersecting horizontal and vertical lines that form columns and rows, acting as a guide for placing and aligning elements. The number of columns, gutter sizes, and margins can be customized based on the project’s requirements, offering flexibility and creativity in design. The 8-Point Grid system is one of the essential topics when discussing grids and layouts in UI Design. The 8-point grid system is a powerful tool for consistency and alignment in UI design. This system uses multiples of 8 (e.g., 8px, 16px, 24px) for spacing, sizes, and alignments."
        },
        {
            name: "HTML",
            content: "Html is an abbreviation. It stands for HyperText Markup Language. HTML determines the structure of web pages. This structure alone is not enough to make a web page look good and interactive. So you'll use assisted technologies such as CSS and JavaScript to make your HTML beautiful and add interactivity, respectively. You can also look at HTML, CSS, and JavaScript this way: HTML is the structure of a house, CSS is the interior and exterior decor, and JavaScript is the electricity, water system, and many other functional features that make the house livable. Since HTML defines the markup for a particular web page, you'll want the text, images, or other embeds to appear in certain ways. For example, you might want some text to be big, other text to be small, and some to be bold, italic, or in bullet point form. HTML has tags that let you get this done. So, there are tags to create headings, paragraphs, bolded words, italicized words, and more."
        }
    ],

    quizzes: [
        {
            name: "Typography Quiz",
            content: "", /*DO NOT PUT ANYTHING HERE UNDER ANY CIRCUMSTANCES*/ 
            question1: "Question 1: What is the primary purpose of leading in typography?",
            answer1_1: "To control the vertical space between lines of text", /*correct*/
            answer1_2: "To adjust the space between individual letters", 
            answer1_3: "To choose the font for the text",

            question2: "Question 2: Which of the following is an example of a serif font?",
            answer2_1: "Helvetica",
            answer2_2: "Times New Roman",
            answer2_3: "Arial",/* correct*/

            question3: "Question 3: What is the term for the space between two characters in a word?",
            answer3_1: "Kerning",/* correct*/
            answer3_2: "Tracking",
            answer3_3: "Leading",

            
            question4: "Question 4: Which of the following is a key characteristic of a sans-serif font?",
            answer4_1: "It has small lines or decorations at the ends of characters",
            answer4_2: "It has no strokes or decorations at the ends of characters", /* correct*/
            answer4_3: "It is typically used for body text in printed books",
        },

        {
            name: "CSS Quiz",
            content: "", /*DO NOT PUT ANYTHING HERE UNDER ANY CIRCUMSTANCES*/ 
            question1: "Question 1: What does CSS stand for?",
            answer1_1: "Cascading Style Sheets", /* correct*/
            answer1_2: "Cascading Style System",
            answer1_3: "Computer Style Sheets",

            question2: "Question 2: What does the z-index property in CSS control?",
            answer2_1: "The visibility of an element",
            answer2_2: "The margin space around an element", 
            answer2_3: "The stacking order of elements",/* correct*/

            question3: "Question 3: How can you select an element with a class of 'button' in CSS?",
            answer3_1: "#button",
            answer3_2: ".button",/* correct*/
            answer3_3: "button", 

            
            question4: "Question 4:  Which CSS property is used to create space between an element's content and its border?",
            answer4_1: "Border",
            answer4_2: "Padding", /* correct*/
            answer4_3: "Margin",
        }, 

        {
            name: "Grids and Layout Quiz",
            content: "", /*DO NOT PUT ANYTHING HERE UNDER ANY CIRCUMSTANCES*/ 
            question1: "Question 1: Which CSS property is used to create a grid layout in HTML?",
            answer1_1: "display: grid",  /*correct*/
            answer1_2: "grid-template-columns",
            answer1_3: "flexbox",

            question2: "Question 2: Which property controls the number of rows in a CSS Grid layout?",
            answer2_1: "grid-gap", 
            answer2_2: "grid-template-columns",
            answer2_3: "grid-template-rows",/*correct*/

            question3: "Question 3: How do you make an element span across multiple columns in a CSS Grid layout?",
            answer3_1: "grid-column: span 2", /*correct*/
            answer3_2: "grid-column: 2 / span",
            answer3_3: "column-span: 2",

            
            question4: "Question 4: What does the grid-auto-rows property in CSS control?",
            answer4_1: "The width of each row",
            answer4_2: "The height of rows that are created automatically",/*correct*/ 
            answer4_3: "The number of columns in a grid", 
        },

        {
            name: "HTML Quiz",
            content: "", /*DO NOT PUT ANYTHING HERE UNDER ANY CIRCUMSTANCES*/ 
            question1: "Question 1: What does the <img> tag in HTML define?",
            answer1_1: "An image", /*correct*/ 
            answer1_2: "A link",
            answer1_3: "A table",

            question2: "Question 2: Which HTML element is used to define the head section of a document?",
            answer2_1: "<head>", 
            answer2_2: "<body>",
            answer2_3: "<header>",/*correct*/ 

            question3: "Question 3: Which HTML attribute is used to specify an image's alternative text?",
            answer3_1: "<alt>",/*correct*/ 
            answer3_2: "<title>",
            answer3_3: "<src>",

            question4: "Question 4: Which tag is used to define a form in HTML?",
            answer4_1: "<input>",
            answer4_2: "<form>", /*correct*/ 
            answer4_3: "<button>",
        },
    ]
};

const UIProtoModule = {
    name: "UI Prototyping",
    image: `${base}/prototype.png`,
    alt: "prototype",

    topics: [
        {
            name: "Wireframing",
            content: "A wireframe is a product outline that shows what interface elements will be present on important pages. Low-fidelity wireframes are basic wireframes focused on layout, navigation, and information architecture. They show what the interface will look like, illustrating user flows with key UI design elements. Physical whiteboard sketches can work at early wireframing stages. Mid-fidelity wireframes help designers iterate and shape the final design. This enables teams to settle on the final wireframe design framework before adding visual design components. High-fidelity wireframes look like early product mockups, with interactive and visual design elements—but without the functionality of low-fidelity prototypes. "
        },
        {
            name: "Copyright",
            content: "Copyright automatically arises when a literary, dramatic, musical or artistic work is created. So, the original UI/UX design elements can be protected by copyright as ‘artistic works’. However, if an alleged copyright infringer makes modifications to the copyrighted design element, he/she can avoid its liability as the protection offered by copyright is limited to copying a substantial portion of the UI/UX design element."
        },
        {
            name: "Accessibility",
            content: "Accessibility refers to how easily users can interact with products and services to achieve their goals. In simple terms, it measures how effectively users can navigate and use your app or website. While accessibility is often associated with making designs usable for people with disabilities, it actually benefits all users. By prioritizing accessibility in UX/UI design, you can enhance user satisfaction, improve usability, and ensure that your digital products are inclusive and user-friendly for all.There are many different facets of accessibility, such as digital material, physical spaces, transportation, and more."
        },
        {
            name: "Responsive Design",
            content: "Responsive design is an approach to web design in which the interface adapts to the device's layout to facilitate usability, navigation and information seeking. Responsive design has significant benefits, and it's a default for web design to support device switching. Grid systems are aids designers use to build, design, arrange information and make consistent user experiences. In interaction design, multi-column, hierarchical and modular are the most widely-used types of grids. The principle of a grid is simple: every element occupies the same percentage of space, however large or small the screen becomes, which means that the components can be scaled up and down as the user switches devices."
        }
    ],

    quizzes: [
        {
            name: "Wireframing Quiz",
            content: "",
            question1: "Question 1: What is the primary purpose of wireframing in web design?",
            answer1_1: "To structure the layout and functionality of a website", /*correct*/
            answer1_2: "To define the visual style of a website", 
            answer1_3: "To create the final design of a website",

            question2: "Question 2: Which of the following is typically included in a wireframe?",
            answer2_1: "High-resolution images", 
            answer2_2: "Final colours and fonts", 
            answer2_3: "Text content, buttons, and placeholders",/*correct*/

            question3: "Question 3: Which of these tools is commonly used for wireframing?",
            answer3_1: "Figma",/*correct*/
            answer3_2: "Photoshop", 
            answer3_3: "Google Analytics",

            question4: "Question 4:What is the difference between a wireframe and a prototype? ",
            answer4_1: "A wireframe is used for coding, while a prototype is used for visual design", 
            answer4_2: "A prototype is interactive, while a wireframe is just the layout", /*correct*/
            answer4_3: "A wireframe is fully interactive, while a prototype is not",
        },

        {
            name: "Copyright Quiz",
            content: "",
            question1: "Question 1: What does copyright protect?",
            answer1_1: "Original works of authorship, such as books, music, and artwork", /* correct*/
            answer1_2: "Ideas and concepts", 
            answer1_3: "Public domain content",

            question2: "Question 2: Which of the following is NOT protected by copyright?",
            answer2_1: "A painting created by an artist",
            answer2_2: "A novel written by an author",
            answer2_3: "A cooking recipe",/*correct*/

            question3: "Question 3: Which of the following is true about public domain works?",
            answer3_1: "They have lost copyright protection and can be freely used by anyone",/*correct*/
            answer3_2: "They are still under copyright but available for free use", 
            answer3_3: "They require permission from the original creator for use",

            question4: "Question 4: Which action can result in copyright infringement?",
            answer4_1: "Sharing a copyrighted work for educational purposes with proper citation",
            answer4_2: "Reproducing a song or movie without the creator's permission", /*correct*/ 
            answer4_3: "Using an image from the public domain", 
        },

        {
            name: "Accessibility Quiz",
            content: "",
            question1: "Question 1: What is the primary goal of web accessibility?",
            answer1_1: "To make websites usable for all users, including those with disabilities", /*correct*/ 
            answer1_2: "To ensure websites are visually appealing",
            answer1_3: "To make websites load faster",

            question2: "Question 2: Which of the following is an example of an accessibility feature for users with visual impairments?",
            answer2_1: "A simplified navigation menu", 
            answer2_2: "Large buttons for easier clicking",
            answer2_3: "High-contrast text and background",/*correct*/ 

            question3: "Question 3: Which of the following is a common issue that can affect keyboard navigation for users with disabilities?",
            answer3_1: "Missing or improper focus order", /*correct*/ 
            answer3_2: "Using semantic HTML elements ",
            answer3_3: "Proper use of colour contrast",

            question4: "Question 4: Which of the following is true about contrast in web design for accessibility?",
            answer4_1: "High contrast is always better for accessibility",
            answer4_2: "Text should have sufficient contrast against its background to ensure readability", /*correct*/
            answer4_3: "Low contrast is preferred to avoid eye strain",
        },

        {
            name: "Responsive Design Quiz",
            content: "",
            question1: "Question 1: What is the main purpose of responsive web design?",
            answer1_1: "To ensure websites adapt and provide a good user experience across all device sizes", /*correct*/
            answer1_2: "To make websites visually appealing on desktop screens only", 
            answer1_3: "To reduce the overall loading time of websites",

            question2: "Question 2: Which HTML element is typically used to include different styles for different screen sizes in a responsive design?",
            answer2_1: "<style>", 
            answer2_2: "<meta>",
            answer2_3: "<link>", /*correct*/

            question3: "Question 3: What is the purpose of the viewport meta tag in responsive design?",
            answer3_1: "To optimize images for smaller screens",/*correct*/
            answer3_2: "To control the layout and scaling on mobile devices", 
            answer3_3: "To set the font size for mobile devices",

            question4: "Question 4: Which CSS property is often used to create flexible layouts in responsive design?",
            answer4_1: "display: block",
            answer4_2: "flex", /*correct*/
            answer4_3: "margin: auto",
        }
    ]
};

const digitalArtModule = {
    name: "Digital Art",
    image: `${base}/art.webp`,
    alt: "art",

    topics: [
        {
            name: "Animation",
            content: "Animation is a filmmaking technique whereby still images are manipulated to create moving images. In traditional animation, images are drawn or painted by hand on transparent celluloid sheets to be photographed and exhibited on film. Many animations are either traditional animations or computer animations made with computer-generated imagery (CGI). Stop motion animation, in particular claymation, has continued to exist alongside these other forms. Computer animation can be very detailed 3D animation, while 2D computer animation (which may have the look of traditional animation) can be used for stylistic reasons, low bandwidth, or faster real-time renderings."
        },
        {
            name: "Character Design",
            content: "Character art can be all types of genres, from realistic to pixel art, anime styles, or 3D-rendered styles. However, there are some universal aspects to consider when creating a character design, no matter the genre. Silhouette: As well as the body shape and proportions, the type of clothing that your character wears also adds to their portrayal. Colour scheme: While a limited colour palette isn't required, giving your character a consistent colour theme that supports their personality traits can supplement other aspects of their design. Distinctive characteristics: Think about your character's backstory and how you can reflect this on their appearance. Typical expressions: Just as each character has their own distinct personality, the way they express emotions will also be different. "
        },
        {
            name: "3D modeling",
            content: "In 3D computer graphics, 3D modeling is the process of developing a mathematical coordinate-based representation of a surface of an object (inanimate or living) in three dimensions via specialized software by manipulating edges, vertices, and polygons in a simulated 3D space. Three-dimensional (3D) models represent a physical body using a collection of points in 3D space, connected by various geometric entities such as triangles, lines, curved surfaces, etc. The product is called a 3D model, while someone who works with 3D models may be referred to as a 3D artist or a 3D modeler. A 3D model can also be displayed as a two-dimensional image through a process called 3D rendering or used in a computer simulation of physical phenomena."
        },
        {
            name: "Concept Art",
            content: "Concept art is a form of visual art used to convey an idea for a final product. It is often created for films, video games, animation, and other forms of media to help visualize the overall look and feel of a project before production begins. Concept art can range from rough sketches to detailed paintings, and it is used to explore different design possibilities and establish a visual direction for a project. It serves as a blueprint for the final product and helps guide the creative process. Concept art plays a crucial role in digital art by helping artists and designers visualize their ideas and communicate them effectively to the rest of the team. It allows for experimentation and iteration, enabling artists to explore different design possibilities and refine their concepts before production begins."
        }
    ],

    quizzes: [
        {
            name: "Animation Quiz",
            content: "",
            question1: "Question 1: What is the primary purpose of 'frame-by-frame' animation?",
            answer1_1: "To create a series of still images that are played in sequence",  /*correct*/
            answer1_2: "To create a smooth, continuous motion",
            answer1_3: "To generate computer-generated effects automatically",

            question2: "Question 2: What is 'keyframing' in animation?",
            answer2_1: "A technique used to create the background of the animation", 
            answer2_2: "The process of editing audio tracks to match animation", 
            answer2_3: "A method of setting specific points in time where important movements or changes occur", /*correct*/

            question3: "Question 3: Which of the following is a key advantage of using digital animation over traditional hand-drawn animation?",
            answer3_1: "It can be easily adjusted and edited",/*correct*/
            answer3_2: "It does not require any specialized equipment",
            answer3_3: "It requires less time to produce",

            question4: "Question 4: What is 'easing' in animation?",
            answer4_1: "A technique to create an illusion of fast motion",
            answer4_2: "The process of making movements in animations feel more natural by adjusting the acceleration and deceleration of the animation", /*correct*/
            answer4_3: "A method used to sync the animation with the music",
        },

        {
            name: "Character Design Quiz",
            content: "",
            question1: "Question 1: What is the primary focus of character design in animation?",
            answer1_1: "To create the character's personality and visual appearance", /*correct*/ 
            answer1_2: "To animate the character’s movements",
            answer1_3: "To write the character's backstory",

            question2: "Question 2: What is 'exaggeration' in character animation?",
            answer2_1: "Making the character's movements more realistic", 
            answer2_2: "Emphasizing the character's features and actions for dramatic effect", /*correct*/ 
            answer2_3: "Making the character look more like a real person",

            question3: "Question 3: Which of the following is a critical part of creating a character's personality through animation?",
            answer3_1: "The character’s design and movements",/*correct*/ 
            answer3_2: "The background music",
            answer3_3: "The character's voice", 

            question4: "Question 4: Which principle of animation focuses on making the character’s movements feel fluid and continuous?",
            answer4_1: "Squash and Stretch",
            answer4_2: "Timing and Spacing", /*correct*/ 
            answer4_3: "Anticipation",
        },

        {
            name: "3D Modelling Quiz",
            content: "",
            question1: "Question 1: What is the main purpose of 3D modeling in animation and game development?",
            answer1_1: "To create the visual assets and structures used in digital environments",  /*correct*/ 
            answer1_2: "To enhance the colours and textures of 2D images",
            answer1_3: "To develop sound effects for animations",

            question2: "Question 2: Which of the following is a common 3D modeling technique used to create objects by manipulating a 3D shape's surface?",
            answer2_1: "Rigging", 
            answer2_2: "UV mapping",
            answer2_3: "Sculpting", /*correct*/ 

            question3: "Question 3: What is the purpose 'UV Mapping' in 3D modelling?",
            answer3_1: "To apply textures and images to a 3D model's surface",/*correct*/ 
            answer3_2: "To control the lighting of the 3D scene",
            answer3_3: "To define the shape and geometry of the model",

            question4: "Question 4: In 3D modeling, what is 'rigging' used for?",
            answer4_1: "Texturing the 3D model’s surfaces",
            answer4_2: " Creating a skeletal structure for models to enable animation", /*correct*/ 
            answer4_3: "Adding lighting to the scene",
        },

        {
            name: "Concept Art Quiz",
            content: "",
            question1: "Question 1: What is the primary purpose of concept art in the production of films or video games?",
            answer1_1: "To explore and communicate visual ideas and themes for a project", /*correct*/ 
            answer1_2: "To create the final textures and designs for assets", 
            answer1_3: "To animate characters and environments",

            question2: "Question 2: Which of the following is commonly depicted in concept art for video games or movies?",
            answer2_1: "The completed 3D models of characters and objects", 
            answer2_2: "The final colour palette for a scene",
            answer2_3: "Rough sketches of characters, environments, and key scenes",/*correct*/ 

            question3: "Question 3: What is the role of a 'character turnaround' in concept art?",
            answer3_1: "It shows the character in a variety of poses and angles to understand how they move",
            answer3_2: "It provides a final 3D model of the character for animation",
            answer3_3: "It shows a character’s design from various angles for better understanding of shape and structure",/*correct*/ 

            question4: "Question 4: How does concept art help in the early stages of a project?",
            answer4_1: "It serves as the final visual reference for production",
            answer4_2: "It helps visualize and communicate ideas to the team, including mood, style, and design elements", /*correct*/ 
            answer4_3: "It is used only for the marketing and promotional material",
        }
    ]
};


// Convert the modules array into a writable store
export const modules = writable([
    designModule,
    webUIModule,
    UIProtoModule,
    digitalArtModule,
    // rest of modules here
]);


/**
 * @param {string} moduleName
 * @param {any} newTopic
 */
export function addTopic(moduleName, newTopic) {
    modules.update(currentModules => {
        return currentModules.map(mod => {
            if (mod.name === moduleName) {
                return {
                    ...mod,
                    topics: [...mod.topics, newTopic]
                };
            }
            return mod;
        });
    });
}



/**
 * @param {{ name: any; image?: string; alt?: string; topics?: { name: string; content: string; }[] | never[]; quizzes?: { name: string; content: string; }[] | never[]; }} newModule
 */
export function addModule(newModule) {
    // @ts-ignore
    modules.update(currentModules => {
        // Prevent duplicate names (optional safety)
        const exists = currentModules.some(mod => mod.name === newModule.name);
        if (exists) {
            console.warn(`Module "${newModule.name}" already exists.`);
            return currentModules;
        }

        console.log(newModule);

        return [...currentModules, newModule];
    });

    console.log(modules);
}