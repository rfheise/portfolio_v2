import clipy from '../images/projects/clipy.jpeg'
import java from '../images/projects/java.png'
import football from '../images/projects/football.png'
import democracy from '../images/projects/democracy.gif'
import active from '../images/projects/loop.webp'
import web from '../images/projects/gigachad.jpg'
import dashit from '../images/projects/dashit.jpg'
import shrek from '../images/projects/shrek.jpg'
import nellie from '../images/projects/darth.jpg'
import bytes from '../images/projects/daddydaniel.png'
import co2view from '../images/projects/co2view.png'
import artwork from '../images/projects/kramer.jpg'
import terminal from '../images/projects/terminal.png'
import memory from '../images/projects/memory.jpeg'
import habits from '../images/projects/habits.jpg'
import bank from '../images/projects/bank.png'

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
    },
    {
        img:shrek, 
        img_alt: "picasso",
        about:"I built a neural style transfer model from scratch using PyTorch that applies the artistic style of one image to the content of another. I implemented the algorithm by optimizing a loss function that combines content and style representations extracted from a pre-trained convolutional neural network.",
        tech: "PyTorch, Python",
        name: "Neural Style Transfer",
    },
    {
        img:bank,
        img_alt: "bank",
        about:"I trained a gradient boosted decision tree to predict whether or not an individual was likely to default on a loan. This was for a Purdue competition and I placed 2nd out of 93 teams.",
        tech: "Python, Scikit-Learn, Pandas",
        name: "Bank Loan Default Prediction",
    },
    {
        img: artwork,
        img_alt: "artwork",
        about:"I built a convolutional neural network from scratch using PyTorch to classify images from the CIFAR-10 dataset. I implemented data augmentation techniques and experimented with different architectures to improve accuracy.",
        tech: "PyTorch, Python",
        name: "Image Classification CNN",
    },
    {
        img: terminal, 
        img_alt: "terminal",
        about:"I implemented a Unix-like command line shell in C that supports features like piping, redirection, and job control. I used system calls to manage processes and handle user input, creating a functional and interactive shell environment.",
        tech: "C++, Lex, Yacc",
        name: "Custom Bash",
    },
    {
        img: memory,
        img_alt: "malloc",
        about:"I implemented a custom memory allocator in C that mimics the behavior of malloc and free. I used techniques like segregated free lists and boundary tags to manage memory efficiently and reduce fragmentation.",
        tech: "C",
        name: "Custom Malloc",
    },
    {
        img: habits,
        img_alt: "habits",
        about:"I constructed a full stack web application that allows me to track my progress on various goals using a video game like interface. I built the backend with Django, and the frontend with ReactJS.",
        tech: "Python, TypeScript, Django, ReactJS",
        name: "Heise Habits",
        demo:"https://habits.heise.ai",
    },
    {
        img:bytes,
        img_alt: "Boiler Bytes",
        about: "I built a decentralized web application that lets users mint nfts of various purdue professors on the etherum blockchain. I built the smart contract with solidity and the frontend with react.",
        tech: "Solidity, ReactJS, Ethereum",
        name: "Boiler Bytes",
    },
    {
        img: co2view,
        img_alt: "co2view",
        about: "I built a web application that identifies the license plate of a vehicle and then uses that information to determine vehicle's the carbon emissions.",
        tech: "Python, CV2, ReactJS, Django",
        name: "CO2View",
    },
    {
        img: nellie,
        img_alt: "Australian Cattle Dog",
        about: "I built a light weight stenography program that would hide data inside the lsb of each pixel. I then integrated this into a small python website using the CPython api. The image above contains the Darth Plagueis the wise quote.",
        tech: "C, CPython, Flask",
        name: "Steganographic Image Generator",
    }


]

