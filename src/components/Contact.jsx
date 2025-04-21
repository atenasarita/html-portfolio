import emailIcon from '../assets/email.png';
import linkedinIcon from '../assets/linkedin.png';

export default function Contact() {
    return (
        <section id="contact">
            <p className="section__text__p1">get in touch</p>
            <h1 className="title">contact me!</h1>
            <div className="contact-outer-section">
                <div className="contact-info-container">
                    <img 
                        src={emailIcon}
                        alt="Email Icon"
                        className="icon"
                    />
                    <p onClick={() => window.location.href = 'mailto:atenaslucia23@gmail.com'}> 
                        atenaslucia23@gmail.com
                    </p>
                        
                </div>
                <div className="contact-info-container">
                    <img 
                        src={linkedinIcon}
                        alt="LinkedIn Icon"
                        className="icon"
                    />
                    <p 
                        className="contact-link"
                        onClick={() => window.open('https://linkedin.com/in/atenas-lucía-arita-garcía-430331294', '_blank')}
                        style={{ cursor: 'pointer' }}
                    >
                        My LinkedIn
                    </p> 
                </div>
            </div>
        </section>
    );
}
