class CareerItem extends WC {
  props() {
    return ['skill', 'company', 'content', 'date']
  }

  render(props) {
    const skillList = props.skill
      .split(',')
      .map((skill) => `<li>${skill.trim()}</li>`)
      .join('')
    const contentList = props.content
      .split(',')
      .map((content) => `<li>${content.trim()}</li>`)
      .join('')

    return `
      <div class="flex jc-space-between ai-center">
        <h3 class="company">${props.company}</h3>
        <p class="date">${props.date}</p>
      </div>
      <div class="flex">
        <ul class="flex-1 skills flex dir-column">
          ${skillList}
        </ul>
        <ul class="flex-1 contents flex dir-column">
          ${contentList}
        </ul>
      </div>
    `
  }
}

define('cv-career-item', CareerItem)