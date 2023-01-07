class ExperienceList extends WC {
  render() {
    return `
      <ul class="experience flex dir-column">
        ${
          Object.entries(EXPERIENCE_LIST)
            .map(([_, item]) => `
              <li>
                <cv-experience-item
                  company="${item.company}"
                  term="${item.term}"
                  position="${item.position}"
                  job="${item.job}"
                ></cv-experience-item>
              </li>
            `)
            .join('')
        }
      </ul>
    `
  }
}

define('cv-experience-list', ExperienceList)