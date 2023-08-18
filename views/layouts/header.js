class Header extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
            <a href="https://jharp949.github.io/personal-portfolio/"><img class="logo" src="./public/images/logo.png" alt="logo"></a>
            <nav>
                <ul class="nav-links">
                    <li><a href="https://jharp949.github.io/personal-portfolio/">Home</a></li>
                    <li><a href="https://jharp949.github.io/personal-portfolio/views/about.html">About</a></li>
                    <li><a href="https://jharp949.github.io/personal-portfolio/views/projects.html">Projects</a></li>
                    <li><a href="https://jharp949.github.io/personal-portfolio/views/resume.html">Resume</a></li>
                    <li><a href="https://jharp949.github.io/personal-portfolio/views/diagrams.html">ORDs</a></li>
                </ul>
            </nav>
        </header>
        `;
    }
}

customElements.define("header-component", Header);