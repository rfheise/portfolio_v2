import clipy from '../images/projects/clipy.jpeg'
import java from '../images/projects/java.png'
import football from '../images/projects/football.jpg'
import democracy from '../images/projects/democracy.gif'
import active from '../images/projects/loop.webp'
import web from '../images/projects/gigachad.jpg'
import dashit from '../images/projects/dashit.jpg'


export interface ProjectData {
    img:string, 
    img_alt:string,
    name:string,
    tech:string,
    about:string, 
    github?:string,
    demo?:string,
}

export let projects: ProjectData[] = [
    {
        img:clipy,
        img_alt:"Clipy",
        name:"AI Longform to Shortform Video Editor",
        tech:"Python, PyTorch, OpenAI API",
        about: "I developed an automated deep-learning video editing pipeline that generated over 100,000 YouTube views by combining Whisper for transcription, ChatGPT for highlight selection, S3FD for face tracking, TalkNet for active-speaker detection, and FFmpeg for rendering.",
        demo:"https://www.youtube.com/@MegaMoistClips",
        github:"https://github.com/rfheise/clipy"
    },
    {
        img:java,
        img_alt:"Java",
        tech:"C++, Lex, Yacc",
        name:"Mini Java Compiler",
        about: "I built a compiler that translates a subset of Java into optimized 32-bit ARM assembly using Lex and Yacc for abstract syntax tree construction, and I abstracted parsing operations into modular abstract classes to ensure efficient, maintainable code generation."
    },
    {
        img:football,
        img_alt:"grandfather",
        tech: "Python, React, Django, Nginx",
        name: "Heise Powless Pickem'",
        demo: "https://powless.heise.ai",
        github:'https://github.com/rfheise/Heise-Powless-Pickem',
        about:"I built a full-stack web application using Django, Django REST Framework, and React to manage my family’s annual football league. I deployed it on a Raspberry Pi with Gunicorn behind Nginx and set up custom network configurations to provide secure, reliable access."
    },
    {
        img:democracy, 
        img_alt: "democracy", 
        about: "I designed a modular election system that leverages homomorphic encryption for secure, local vote tallying and incorporates digital IDs alongside asymmetric cryptography to ensure end-to-end verifiability, protect voter privacy, and scale efficiently to large electorates.",
        github: "https://github.com/rfheise/voting",
        name: "Secure Voting System",
        tech: "Python, Digital IDs, Asymmetric Cryptography",
    },
    {
        img:active, 
        img_alt: "active learning",
        about: "I developed an active learning framework that evaluates various sampling and querying strategies across a wide range of models and datasets, and I then compiled the results into a survey-style report comparing performance metrics and recommending the most effective approaches.",
        tech: "PyTorch, Numpy, Pandas",
        name:"Active Learning Research Project",
        github:"https://github.com/rfheise/active_learning"
    },
    {
        img:web, 
        img_alt:"webserver",
        about:"I engineered a high-performance HTTP server in C++ using raw system calls and socket programming to serve HTML and image files. To maximize concurrency and throughput, I implemented both multiprocessing and multithreading architectures, allowing the server to handle multiple requests efficiently.",
        tech:"C++",
        name: "Webserver with only Syscalls",
    },
    {
        img:dashit, 
        img_alt: "dash it",
        about:"I created a web app with a small team that uses Bluetooth data to estimate restaurant wait times. It was really scuffed since I built it as a freshman, but somehow it won first place out of 55 teams at the Purdue Hello World hackathon.",
        tech: "Django, Raspberry Pi",
        name: "Dash It",
        github:"https://github.com/rfheise/helloWrld-2020"
    }
]

