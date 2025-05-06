

export interface ExperienceData {
    title:string, 
    company:string,
    date:string, 
    about:string[]
}

export let experience: ExperienceData[] = [
    {
        title:"Software Engineering Intern",
        company:"CACI",
        date:"May 2022 - August 2022",
        about: ["I implemented several honeypots using custom vms on proxmox"]
    },
    {
        title: "Senior Developer",
        company: "Epic Gamer",
        date: "March - Present",
        about: []
    }
]

