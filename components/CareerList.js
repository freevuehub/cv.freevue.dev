class CareerList extends WC {
  props() {
    return [page]
  }

  render(props) {
    return `
      <div class="content absolute fill width height flex dir-column">
        <cv-area class="cv-area relative none-point">&nbsp;</cv-area>
        ${
          CAREER_LIST[Number(props.page)]
            .map((item) => `
              <cv-area class="cv-area relative" title="${item.title}">
                <cv-career-item
                  company="${EXPERIENCE_LIST[item.key]?.company || item.key}"
                  class="career"
                  skill="${item.skill.join(',')}"
                  date="${item.date}"
                  content="${item.content.join(',')}"
                >
                </cv-career-item>
                <div class="description flex dir-column">
                  ${
                    item.description
                      .map((description) => `
                        <p>${description}</p>
                      `)
                      .join('')
                  }
                </div>
              </cv-area>
            `)
            .join('')
        }
      </div>
    `
  }
}

define('cv-career-list', CareerList)
