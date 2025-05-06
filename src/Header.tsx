import propic from './images/header/propic_v2.jpeg'
import linkedin from './images/header/linkedin.svg'
import github from './images/header/github.svg'
import mail from './images/header/mail.png'
import resume from './images/header/resume.svg'

export default function Header() {
  return (
    <header className = "header-flex">
        <h1>Ryan Heise</h1>
        <img src = {propic} className="profile-pic" alt = "Profile Picture"/>
        <p className="title">My life goal is to organically get the best SEO for "Ryan Heise"</p>
        <a className = "resume" href = "/resume.pdf">
        <img src = {resume} alt = "resume" />
        <div className="resume-title">
            Resume
        </div>
        </a>
        
        <div className="contact-flex">
        <a href = "mailto:ryan@heise.ai"><img src = {mail} alt = "mail" /></a>
        <a href = "https://github.com/rfheise"><img src = {github} alt = "github" /></a>
        <a href = "https://linkedin.com/in/ryanfheise"><img src = {linkedin} alt = "linkedin" /></a>
        </div>
    </header>
  )
}