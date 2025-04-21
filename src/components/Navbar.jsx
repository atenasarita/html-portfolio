export default function Navbar () {
    const toggleMenu = () => {
        document.querySelector(".menu-links")?.classList.toggle("open");
        document.querySelector(".menu-icon")?.classList.toggle("open");
    };

    return (
        <>
            <nav id="desktop-nav">
            <div class="logo">Atenas Arita</div>
            <div>
                <ul class="navigation-links">
                    <li><a href="#about">about</a></li>
                    <li><a href="#projects">my projects</a></li>
                    <li><a href="#contact">contact info</a></li>
                </ul>
            </div>
            </nav>

            <nav id="menu-nav">
                <div class="logo">Atenas Arita</div>
                <div class="select-menu">
                    <div class="menu-icon" onclick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="menu-links">
                        <li><a href="#about" onclick={toggleMenu}>about</a></li>
                        <li><a href="#projects" onclick={toggleMenu}>my projects</a></li>
                        <li><a href="#contact" onclick={toggleMenu}>contact info</a></li>
                    </div>
                </div>
            </nav>
        </>
    );
}