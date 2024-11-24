class HeaderComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="header">
          <h1>Website Title</h1>
          <nav>
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
          </nav>
        </div>
      `;
    }
  }
  
  customElements.define('header-component', HeaderComponent);
  