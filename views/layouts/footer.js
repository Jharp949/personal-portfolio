class Footer extends HTMLElement
{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div id="footer">
                    <p>
                        Copyright &copy; 2023 <a href="#">Harper</a>
                    </p>
                </div>
            </footer>
        `;
    }
}

customElements.define("footer-component", Footer);