import project1 from '/src/assets/project-1.png';
import project2 from '../assets/food-blog.png';
import project3 from '../assets/weather-app.png';

const projects = [
    {
        title: 'Flappy Bird Clone',
        image: project1,
        github: 'https://github.com/atenasarita/FlappyBird-UnityClone',
        live: 'https://atenaslucia.itch.io/flappy-bird-clone',
    },
    {
        title: 'Food Blog Website',
        image: project2,
        github: 'https://github.com/atenasarita/food-blog',
        live: 'https://atenas-house.netlify.app/',
        note: 'Currently under development!',
    },
    {
        title: 'JavaScript Weather App',
        image: project3,
        github: 'https://github.com/atenasarita/weather-app-js',
        live: 'https://weatherbyatenas.netlify.app/',
    },
];

export default function Projects() {
    return (
        <>
        <section id="projects">
            <p className="section__text__p1">check out my recent</p>
            <h1 className="title">Projects</h1>
            <div className="section-container">
                <div className="about-details-container">
                    <div className="about-containers">
                        {projects.map((project, index) => (
                            <div className="project-details-container" key={index}>
                                <img 
                                    src={project.image} 
                                    alt={`${project.title} image`} 
                                    className="project-img" 
                                />
                                <h2 className="project-title">{project.title}</h2>
                                <button 
                                    className="btn btn-color" 
                                    onClick={() => window.open(project.github, '_blank')}
                                >
                                    GitHub
                                </button>
                                <button 
                                    className="btn btn-color" 
                                    onClick={() => window.open(project.live, '_blank')}
                                >
                                    Live Demo
                                </button>
                                {project.note && (
                                    <p style={{ marginTop: '1rem', color: 'rgb(81, 23, 48)' }}>
                                        {project.note}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
