import aboutPic from '../assets/atenas-about-pic.png';
import educationIcon from '../assets/graduacion.png';

export default function About() {
    return (
        <section id="about">
            <p className="section__text__p1">dive deeper!</p>
            <h1 className="title">About me</h1>

            <div className="section-container">
                <div className="section-pic_container">
                    <img 
                        src={aboutPic} 
                        alt="Profile Picture Atenas Arita"
                        className="about-pic"
                    />
                </div>

                <div className="about-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                            <img 
                                src={educationIcon} 
                                alt="Education Icon"
                                className="icon"
                            />
                            <h3>Education</h3>
                            <p>
                                Currently attending Tecnológico de Monterrey <br /> 
                                B.S. in Computer Science and Technology Engineering
                            </p>
                        </div>
                    </div>

                    <div className="text-container">
                        <p>
                            I graduated from high school in Tegucigalpa, Honduras, earning a Diploma in Sciences and Humanities. 
                            Currently, I am pursuing my bachelor’s degree in Monterrey, Mexico, in a program designed to drive 
                            technological innovation through software development. This program aims to advance society by creating 
                            systems that enhance quality of life, improve organizational competitiveness, and promote sustainable 
                            development in Latin America.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
