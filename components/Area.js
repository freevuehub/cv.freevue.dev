class Area extends WC {
  props() {
    return ['title']
  }

  render(props) {
    return `
      <h2 class="title">${props.title || ''}</h2>
      ${this.innerHTML}
    `
  }
}

define('cv-area', Area)