import profilePic from '../assets/atenas-profile-pic.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';
import cvFile from '../assets/CV-Atenas Arita ENG (3).pdf';

export default function Profile() {
    return (
        <section id="profile">
            <div className="section_profile-pic">
                <img src={profilePic} alt="Profile Picture Atenas Arita" />
            </div>
            <div className="section_text">
                <p className="section__text__p1">Hello! I'm</p>
                <h1 className="title">Atenas Arita</h1>
                <p className="section__text__p2">Engineering Student</p>

                <div className="btn-container">
                    <a href={cvFile} download>
                        <button className="btn btn-color">Download CV</button>
                    </a>
                </div>

                <div className="contact-container">
                    <a href="https://linkedin.com/in/atenas-lucía-arita-garcía-430331294" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="My LinkedIn profile" className="icon" />
                    </a>
                    <a href="https://github.com/atenasarita" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="My GitHub profile" className="icon" />
                    </a>
                </div>
            </div>
        </section>
    );
}
