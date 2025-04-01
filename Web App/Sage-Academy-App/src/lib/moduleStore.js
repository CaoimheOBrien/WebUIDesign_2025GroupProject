const designModule = {
    name: "Design Psych.",
    image: "brain.png",
    alt: "brain",

    topics: [
        {
            name: "Colour Theory",
            content: "content"
        },
        {
            name: "topic1.2",
            content: "content"
        },
        {
            name: "topic1.3",
            content: "content"
        },
        {
            name: "topic1.4",
            content: "content"
        }
    ],

    quizzes: [
        {
            name: "Colour Theory Quiz",
            content: "", /*DO NOT PUT ANYTHING HERE UNDER ANY CIRCUMSTANCES*/ 
            question1: "Question 1: What colour means angry?",
            answer1: "Red",
            answer2: "Blue",
            answer3: "Orange",
        }
    ]
};

const webUIModule = {
    name: "Web UI Design",
    image: "computer.png",
    alt: "computer",

    topics: [
        {
            name: "topic2.1",
            content: "content"
        },
        {
            name: "topic2.2",
            content: "content"
        },
        {
            name: "topic2.3",
            content: "content"
        },
        {
            name: "topic2.4",
            content: "content"
        }
    ],

    quizzes: [
        {
            name: "Colour Theory Quiz",
            content: "Question.",
        }
    ]
};

const UIProtoModule = {
    name: "UI Prototyping",
    image: "prototype.png",
    alt: "prototype",

    topics: [
        {
            name: "topic3.1",
            content: "content"
        },
        {
            name: "topic3.2",
            content: "content"
        },
        {
            name: "topic3.3",
            content: "content"
        },
        {
            name: "topic3.4",
            content: "content"
        }
    ],

    quizzes: [
        {
            name: "Colour Theory Quiz",
            content: "Question.",
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
    ],

    quizzes: [
        {
            name: "Colour Theory Quiz",
            content: "Question.",
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

export function addModule() {
    let topics = modules[0].topics;

    const newTopic = {
        name: "topic4.5",
        content: "content"
    }
    topics = [...topics, newTopic]; // Adds a new topic
}