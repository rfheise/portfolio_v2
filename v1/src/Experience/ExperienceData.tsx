

export interface ExperienceData {
    title:string, 
    company:string,
    date:string, 
    about:string[],
    location:string
}

export let experience: ExperienceData[] = [
    {
        title: "Substitute Teacher",
        location: "Lafayette, IN",
        company: "Lafayette Community Schools",
        date: "January 2025 - May 2025",
        about: ["I spent a semester substitute teaching to see if a career in education was right for me. I communicated complex ideas by breaking them down into topics that each age level could understand. While I ultimately decided teaching wasn’t the best fit, I gained valuable insight into the k-12 system."]
    },
    {
        title: "Web Developer (Contract)",
        company: "Melody Drive-in Theater",
        date: "March 2025",
        location: "Knox, IN",
        about: ["I modernized the Melody Drive-In’s website by refreshing its design and making it fully mobile responsive. I then deployed the site on an Ubuntu server using Nginx and built a custom content management system that lets the theater easily update its branding and movie schedule. Today, the site attracts 10,000 users every week. I still maintain the website whenever the owners have issues."]
    },
    {
        title: "Caregiver For Close Family Member",
        company: "",
        location: "Valparaiso, IN",
        date: "January 2024 - August 2024",
        about: ["I took time off of school to provide daily care for my grandfather after he became paralyzed and unable to move after suffering a severe stroke. I operated equipment that helped mobilize him, scheduled Doctor appointments, managed his medication, and organized his finances."]
    },
    {
        title: "Teaching Assistant for Systems Programming",
        company: "Purdue University",
        location: "West Lafayette, IN",
        date: "January 2023 - May 2023",
        about: ["I led two lab sections, working closely with students on advanced C++ projects, including implementing a custom malloc allocator, building a standard shell, and creating a simple web server, helping them develop practical skills and see their projects through to completion. I also designed thoughtful assignments and exams that reinforced key concepts and boosted their confidence with the course material."]
    },
    {
        title:"Software Engineering Intern",
        company:"CACI",
        location: "Lisle, IL",  
        date:"May 2022 - August 2022",
        about: ["I spun up multiple Linux honeypots across three public IPs using Proxmox, creating a distributed trap network for real-world attacker traffic. I mirrored every packet into a high-throughput pipeline, processing over 100 million packets, to build targeted feature sets for our machine-learning models. When the honeypots caught live malware, I grabbed the samples and dove into Ghidra to reverse engineer their behavior, while I secured the whole environment with Linux routing and iptables rules that kept each analysis sandbox isolated and safe."]
    },
    {
        title: "Co-Founder",
        company: "Youndle LLC",
        location: "Valparaiso, IN",
        date: "August 2020 - August 2021", 
        about: ["I developed a React and Django application to streamline communication between small businesses and local teenage workers, then deployed it on AWS EC2 with a PostgreSQL RDS backend to ensure scalable, secure hosting and easy maintenance. Our team’s work earned us a spot in the Purdue Boiler 2021 startup accelerator, where we refined MVP features and validated market fit through rapid iteration and customer feedback."]
    },

    
]

