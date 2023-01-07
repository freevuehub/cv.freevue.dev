class ExperienceItem extends WC {
  props() {
    return ['company', 'term', 'position', 'job']
  }

  render(props) {
    return `
      <div class="experience-item flex dir-column">
        <div class="flex ai-center jc-space-between">
          <h3>${props.company}</h3>
          <p class="term">${props.term}</p>
        </div>
        <div class="flex jc-space-between">
          <p>${props.job}</p>
          <p>${props.position}</p>
        </div>
      </div>
    `
  }
}

define('cv-experience-item', ExperienceItem)