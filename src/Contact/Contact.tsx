import email from '../images/contact/email.png'
import linkedin from '../images/contact/linkedin.png'
import phone from '../images/contact/phone.png'
import website from '../images/contact/website.png'
import github from '../images/contact/github.png'

export default function Contact() {
    return (

        
        <div className="contact-info">
            <div className="contact-info-row">
            <div className="contact-item">
                <img src={email} alt="Email" className="contact-img"/>
                <a href="mailto:ryanfheise@gmail.com">ryanfheise@gmail.com</a>
            </div>
            
            <div className="contact-item">
                <img src={linkedin} alt="LinkedIn" className="contact-img"/>
                <a href="https://linkedin.com/in/ryanfheise" target="_blank">linkedin.com/in/ryanfheise</a>
            </div>
            
            <div className="contact-item">
                <img src={github} alt="GitHub" className="contact-img"/>
                <a href="https://github.com/rfheise" target="_blank">github.com/rfheise</a>
            </div>
            </div>
            <div className="contact-info-row">
                <div className="contact-item">
                    <img src={phone} alt="Phone" className="contact-img"/>
                    <a href="tel:+15742073299" target="_blank">574-207-3299</a>
                </div>
                
                <div className="contact-item">
                    <img src={website} alt="website" className="contact-img"/>
                    <a href="https://ryanfheise.com" target="_blank">ryanfheise.com</a>
                </div>
            </div>
        </div>
            
    )
}