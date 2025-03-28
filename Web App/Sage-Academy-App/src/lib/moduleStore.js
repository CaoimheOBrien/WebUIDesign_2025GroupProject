const designModule = {
    name: "Design Psych.",
    image: "brain.png",
    alt: "brain",

    topics: [
        {
            name: "Colour Theory",
            content: "Color theory is the study of how colors work together, how they affect our emotions and perceptions, and how they can be combined to create visually pleasing designs. It can be a valuable tool to not only help us understand more about the world around us but also to create harmonious designs (or decorate your home). Color theory is the art and science of using color. At its core, color is perception. Our eyes see something and the data sent from our eyes to our brains interprets it as a particular color. Objects reflect light in different combinations of wavelengths (radio, gamma rays, and more). Our brains pick up on these wavelength combinations, interpreting them as a phenomenon known as color."
        },
        {
            name: "Gamification",
            content: "Gamification is the application of game mechanics — like point scoring, timing or competition — to motivate engagement with a product or service. Injecting everyday tasks with a sense of play incentivizes people to not only complete them but to keep coming back for more. Gamification is all about making non-game activities feel like they’re games. While the term “gamification” was coined in 2002, the concept dates back to the 20th century, when retail stores introduced rewards programs to strengthen customer loyalty and industrial managers encouraged factory workers to see themselves in competition with each other."
        },
        {
            name: "Gestalt Principles",
            content: "Gestalt Principles are principles/laws of human perception that describe how humans group similar elements, recognize patterns and simplify complex images when we perceive objects. Designers use the principles to organize content on websites and other interfaces so it is aesthetically pleasing and easy to understand. Gestalt is German for unified whole. German psychologists Max Wertheimer, Kurt Koffka, and Wolfgang Kohler created the Gestalt Principles in the 1920s. They wanted to understand how people make sense of the confusing things they see and hear. They identified a set of laws that address the natural compulsion to find order in disorder. "
        },
        {
            name: "Dark Patterns",
            content: "Dark patterns in UX are a design feature that subtly encourages users to perform a specific action. But unlike good UX, dark patterns benefit the company. In some cases, UX designers can take advantage of how users habitually interact with websites and apps to subtly manipulate them into performing certain actions. This is known as dark patterns. Just like good UX, most dark patterns are invisible to users. But unlike good UX, dark patterns benefit the company (rather than the user) by using deception as a tool for conversion. UK–based UX designer Harry Brignull first coined the term in 2010, defining dark patterns as “a user interface that has been carefully crafted to trick users into doing things, such as buying insurance with their purchase or signing up for recurring bills.”"
        }
    ]
};

const webUIModule = {
    name: "Web UI Design",
    image: "computer.png",
    alt: "computer",

    topics: [
        {
            name: "Typography",
            content: "Typography is an important part of our everyday life. We see it almost everywhere we look. To put it simply, typography is the appearance of text. It’s one of the most important features of every composition, both in the digital and physical worlds. The type choice can make or break every design. It helps to set the mood and emotion of any text and has a huge impact on how the reader perceives it. Typography has been around since the 11th century, however, it existed even before that – as the unique art of creating words in books and magazines without much technology around. Every detail was well-thought, crafted, and carefully carried out.  "
        },
        {
            name: "CSS",
            content: "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. CSS is among the core languages of the open web and is standardized across Web browsers according to W3C specifications. Inline CSS involves applying styles directly to individual HTML elements using the style attribute. Internal or Embedded CSS is defined within the HTML document’s <style> element. It applies styles to specified HTML elements. External CSS contains separate CSS files that contain only style properties with the help of tag attributes (For example class, id, heading, … etc). CSS property is written in a separate file with a .css extension and should be linked to the HTML document using a link tag."
        },
        {
            name: "Grids and Layout",
            content: "Grids are the backbone of UI design, providing a systematic framework that helps organize and align elements within a layout. By understanding the structure of grids, you can achieve harmonious compositions that enhance visual hierarchy, improve readability, and create a cohesive user experience. Grids consist of intersecting horizontal and vertical lines that form columns and rows, acting as a guide for placing and aligning elements. The number of columns, gutter sizes, and margins can be customized based on the project’s requirements, offering flexibility and creativity in design. The 8-Point Grid system is one of the essential topics when discussing grids and layouts in UI Design. The 8-point grid system is a powerful tool for consistency and alignment in UI design. This system uses multiples of 8 (e.g., 8px, 16px, 24px) for spacing, sizes, and alignments. "
        },
        {
            name: "HTML",
            content: "Html is an abbreviation. It stands for HyperText Markup Language. HTML determines the structure of web pages. This structure alone is not enough to make a web page look good and interactive. So you'll use assisted technologies such as CSS and JavaScript to make your HTML beautiful and add interactivity, respectively. You can also look at HTML, CSS, and JavaScript this way: HTML is the structure of a house, CSS is the interior and exterior decor, and JavaScript is the electricity, water system, and many other functional features that make the house livable. Since HTML defines the markup for a particular web page, you'll want the text, images, or other embeds to appear in certain ways. For example, you might want some text to be big, other text to be small, and some to be bold, italic, or in bullet point form. HTML has tags that let you get this done. So, there are tags to create headings, paragraphs, bolded words, italicized words, and more."
        }
    ]
};

const UIProtoModule = {
    name: "UI Prototyping",
    image: "prototype.png",
    alt: "prototype",

    topics: [
        {
            name: "Wireframing",
            content: ""
        },
        {
            name: "Copyright",
            content: ""
        },
        {
            name: "",
            content: "content"
        },
        {
            name: "topic3.4",
            content: "content"
        }
    ]
};

const digitalArtModule = {
    name: "3D Digital Art",
    image: "art.webp",
    alt: "art",

    topics: [
        {
            name: "topic4.1",
            content: "content"
        },
        {
            name: "topic4.2",
            content: "content"
        },
        {
            name: "topic4.3",
            content: "content"
        },
        {
            name: "topic4.4",
            content: "content"
        }
    ]
};

export let modules = [
    designModule,
    webUIModule,
    UIProtoModule,
    digitalArtModule,
    // rest of modules here
  ];

  
export function addTopic() {
        let topics = modules[0].topics;

        const newTopic = {
            name: "topic4.5",
            content: "content"
        }
        topics = [...topics, newTopic]; // Adds a new topic
    }