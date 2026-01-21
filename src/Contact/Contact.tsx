import email from '../images/contact/email.png'
import linkedin from '../images/contact/linkedin.png'
import phone from '../images/contact/phone.png'
import website from '../images/contact/website.png'
import github from '../images/contact/github.png'
import DecoIcon from '../DecoIcon'

export default function Contact() {
    return (

        
        <div className="contact-info">
            <div className="contact-info-row">
            <div className="contact-item">
                <DecoIcon src={email} className="contact-img" />
                <a href="mailto:ryanfheise@gmail.com">ryanfheise@gmail.com</a>
            </div>
            
            <div className="contact-item">
                <DecoIcon src={linkedin} className="contact-img" />
                <a href="https://linkedin.com/in/ryanfheise" target="_blank" rel="noreferrer noopener">linkedin.com/in/ryanfheise</a>
            </div>
            
            <div className="contact-item">
                <DecoIcon src={github} className="contact-img" />
                <a href="https://github.com/rfheise" target="_blank" rel="noreferrer noopener">github.com/rfheise</a>
            </div>
            </div>
            <div className="contact-info-row">
                <div className="contact-item">
                    <DecoIcon src={phone} className="contact-img" />
                    <a href="tel:+15742073299" target="_blank" rel="noreferrer noopener">574-207-3299</a>
                </div>
                
                <div className="contact-item">
                    <DecoIcon src={website} className="contact-img" />
                    <a href="https://ryanfheise.com" target="_blank" rel="noreferrer noopener">ryanfheise.com</a>
                </div>
            </div>
        </div>
            
    )
}
