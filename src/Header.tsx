import propic from './images/header/propic_v3.jpg'
import linkedin from './images/header/linkedin.svg'
import github from './images/header/github.svg'
import mail from './images/header/mail.png'
import photos from './images/header/camera.png'
import DecoIcon from './DecoIcon'
import ResumeIcon from './images/header/resume.svg'

export default function Header() {
  return (
    <header className="header-flex deco-hero">
        {/* <div className="hero-ornament" aria-hidden="true" /> */}
        <h1 className="hero-name">Ryan Heise</h1>
        <img src={propic} className="profile-pic" alt="Profile" />
        <p className="hero-loc">Austin, TX</p>
        <p className="title">My life goal is to organically get the best SEO for "Ryan Heise"</p>
        <a className = "resume" href = "https://ryanfheise.com/files/resume" target="_blank" rel="noreferrer noopener">
        <DecoIcon src={ResumeIcon} className="deco-icon--header" />
        <span className="resume-title">View Resume</span>
        </a>
        
        <div className="contact-flex">
        <a href="mailto:ryanfheise@gmail.com" aria-label="Email"><DecoIcon src={mail} className="deco-icon--header" /></a>
        <a href="https://github.com/rfheise" aria-label="GitHub"><DecoIcon src={github} className="deco-icon--header" /></a>
        <a href="https://linkedin.com/in/ryanfheise" aria-label="LinkedIn"><DecoIcon src={linkedin} className="deco-icon--header" /></a>
        <a href="https://meter.heise.ai" aria-label="Photos"><DecoIcon src={photos} className="deco-icon--header" /></a>
        </div>
    </header>
  )
}
