class Header extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
            <a href="./"><img class="logo" src="./public/images/logo.png" alt="logo"></a>
            <nav>
                <ul class="nav-links">
                    <li><a href="../../index.html">Home</a></li>
                    <li><a href="../views/about.html">About</a></li>
                    <li><a href="../views/projects.html">Projects</a></li>
                    <li><a href="../views/resume.html">Resume</a></li>
                </ul>
            </nav>
        </header>
        `;
    }
}

customElements.define("header-component", Header);