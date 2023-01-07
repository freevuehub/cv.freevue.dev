class EducationItem extends WC {
  props() {
    return ['school', 'term', 'major', 'credit']
  }

  render(props) {
    return `
      <div class="education-item flex dir-column">
        <div class="flex ai-center jc-space-between">
          <h3>${props.school}</h3>
          <p class="term">${props.term}</p>
        </div>
        <div class="flex jc-space-between">
          <p>전공: ${props.major}</p>
          ${
            props.credit ? `
              <p>학점: ${props.credit}</p>
            ` : `-`
          }
        </div>
      </div>
    `
  }
}

define('cv-education-item', EducationItem)