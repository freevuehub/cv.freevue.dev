class EducationList extends WC {
  render() {
    return `
      <ul class="education flex dir-column">
        ${
          EDUCATION_LIST
            .map((item) => `
              <li>
                <cv-education-item
                  school="${item.school}"
                  term="${item.term}"
                  major="${item.major}"
                  credit="${item.credit}"
                ></cv-education-item>
              </li>
            `)
            .join('')
        }
      </ul>
    `
  }
}

define('cv-education-list', EducationList)