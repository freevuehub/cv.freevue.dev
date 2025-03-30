const EDUCATION_LIST = [
  {
    school: '고려사이버대학교',
    term: '2019.08 - 2021.08',
    major: '소프트웨어공학과',
    credit: '3.71 / 4.5',
  },
  {
    school: '명지전문대학',
    term: '2012.03 - 2016.02',
    major: '전기과',
    credit: '3.38 / 4.5',
  },
  {
    school: '고양일고등학교',
    term: '2009.03 - 2012.02',
    major: '인문계열',
    credit: '-',
  }
]

const EXPERIENCE_LIST = {
  millie: {
    company: '밀리의 서재',
    term: '2024.01.22 - ',
    position: '사원',
    job: '프론트엔드 개발자',
  },
  drx: {
    company: 'DRX',
    term: '2021.01.15 - 2023.09.22',
    position: '셀장',
    job: '프론트엔드 개발자',
  },
  rsupport: {
    company: '알서포트',
    term: '2020.05.25 - 2020.12.04',
    position: '사원',
    job: '프론트엔드 개발자',
  },
  petFriends: {
    company: '펫프렌즈',
    term: '2019.12.19 - 2020.03.19',
    position: '프리랜서',
    job: '프론트엔드 개발자',
  },
  jjsoft: {
    company: '제이제이소프트',
    term: '2019.09.01 - 2020.04.30',
    position: '사원',
    job: '프론트엔드 개발자',
  },
  bemycar: {
    company: '비마이카(뿅카)',
    term: '2018.08.20 - 2019.08.31',
    position: '대리',
    job: '프론트엔드 개발자',
  },
  doa: {
    company: '도아',
    term: '2017.03.15 - 2018.08.10',
    position: '사원',
    job: '웹퍼블리셔',
  }
}

const CAREER_LIST = [
  [
    {
      key: 'millie',
      title: 'PCV 개발',
      skill: [
        'Typescript', 'monorepo', 'Vite'
      ],
      date: '2024-01',
      content: [
        '데스크탑용 뷰어 개발',
      ],
      description: [
        `데스크탑에서 밀리의 서재 서비스를 이용할 수 있는 App입니다.`,
        `
          기존 Electron 기반에서 Flutter 기반으로 전환하며 환경에 맞추어 도서를 읽는 부분을 새롭게 개발했습니다.
          Vite 기반으로 작업을 하였고, 빌드한 결과물을 Flutter에서 webview를 이용해 서비스를 하는 방식으로 진행되었습니다.
        `,
        `
         PDF의 경우 PDF.js에서 PSPDF라는 유료 라이브러리로 전환하였습니다.
         해당 라이브러리를 번들화하여 도서를 서빙하는 부분과 도서를 읽기 위한 UI 부분을 나누었습니다.
        `,
        `
         각각의 파일들은 App의 버전업과 별개로 고유의 서버를 통해 최신화된 파일을 받는 형식으로 개발하였습니다.
        `
      ]
    },
    {
      key: 'millie',
      title: '전자책 뷰어 관리',
      skill: [
        'Typescript', 'monorepo'
      ],
      date: '2024-01',
      content: [
        '영문 TTS 개발',
        '버그 수정 및 유지보수',
      ],
      description: [
        `밀리의 서재의 메인 서비스인 전자책을 서빙하는 툴입니다.`,
        `
          단순히 전자책을 열어 데이터화하는 것이 아니라 사용자의 경험과 App의 인터페이스에 따라 전자책을 렌더링해줍니다.
          그 밖에 다른 서비스와 전자책간 연동하는 여러 메소드들을 관리하고 있습니다.
        `
      ]
    },
  ],
  [ 
    {
      key: 'Waktaverse Games',
      title: 'Waktaverse Games',
      skill: [
        'Next.js', 'Typescript', 'Tailwind', 'Electron'
      ],
      date: '2023-08',
      content: [
        'Desktop App 개발'
      ],
      description: [
        `Waktaverse의 게임을 모아 제공 및 소개하는 서비스입니다.`,
        `
          매출을 기대하며 만든 서비스가 아니기에 서버 비용의 부담을 줄이고, 사용자에게 쾌적한 환경을 제공하기 위해 고민을 했습니다.
          서버의 부하를 줄이기 위해 SSR 사용을 줄였습니다.
          그로 인해 데이터를 불러오는 과정에서 사이트가 깜빡이는 문제를 React Suspense를 활용하면서, 스켈레톤 로딩을 적용했습니다.
        `,
        `
          Desktop 위해 Electron을 도입했습니다. Steam과 비슷한 게임 설치, 삭제, 업데이트 기능을 제공하고자 했습니다.
          화면의 경우 웹으로 배포하여, 설치된 앱과 버전을 분리했습니다. 이로 인하여 화면 렌더링 속도가 길어졌지만,
          사용자들에게 동일한 사용 경험을 제공할 수 있게 되었습니다.
        `
      ]
    },
    {
      key: 'drx',
      title: 'WASD',
      skill: [
        'Next.js', 'Typescript', 'Emotion', 'GraphQL', 'Deno'
      ],
      date: '2023-03',
      content: [
        '게임 전적 검색',
        '게임 데이터 분석'
      ],
      description: [
        '발로란트 유저들을 위한 전적 검색 서비스입니다.',
        `
          규모를 꽤 키운 프로젝트였습니다. 프로젝트 관리를 위해 Git 컨벤션을 정립했습니다.
          PR 및 Issue 등록 방법을 정리했고, 진행상황을 보고자 Git 프로젝트를 활용했습니다.
        `,
        `
          해당 프로젝트에서 사용하는 공통적인 코드들이 많았습니다.
          이를 모듈로 만들었고, 프로젝트를 분리하여 각각 설치해서 사용하고자 했습니다.
        `
      ]
    },
  ],
  [
    {
      key: 'drx',
      title: 'AI Chatbot',
      skill: [
        'OpenAI', 'Node'
      ],
      date: '2023-03',
      content: [
        'Chatbot'
      ],
      description: [
        `사내에서 사용하는 Slack에 AI Chat을 추가했습니다.`,
        `
          답변의 정확도를 올리기 위해 노력했습니다. 프롬프트들을 사전에 엑셀에 정리하여 입력했습니다.
          쓰레드를 이용한 대화의 경우 이전에 대화들을 추가로 담아 답변의 정확도를 올리고자 했습니다. 
        `
      ]
    },
    {
      key: 'drx',
      title: 'DRX 사이트',
      date: '2022-01',
      skill: ['Next.js', 'Typescript', 'Emotion'],
      content: ['회사 소개', '경기 일정 소개'],
      description: [
        'DRX 공식 사이트입니다.',
        `
          Next의 SSR을 적극 활용했습니다. SEO를 위해 최대한 정보들을 서버에서 작성되게 하고자 했습니다.
        `
      ]
    },
    {
      key: 'drx',
      title: 'BnP',
      date: '2021-05',
      skill: ['Next.js', 'Typescript', 'Emotion', 'Socket.io'],
      content: ['실시간 Draft 기능', '참여자간 채팅'],
      description: [
        'League of Legends 교차 선택 서비스입니다.',
        `
          소켓을 이용해 실시간 데이터를 공유하며 반영되게 했습니다.
          그런데 선택할 수 있는 사용자를 특정하기가 쉽지 않았습니다.
          이를 특정하기 위해 RTC도입, 캔버스를 이용한 브라우저 특정등 방법을 고민했습니다.
        `
      ]
    },
  ],
  [
    {
      key: 'rsupport',
      title: 'Remote Meeting',
      skill: [
        'React.js', 'Gulp'
      ],
      date: '2020-08',
      content: [
        '설정 기능 개발',
        '비대면 솔루션 개발',
      ],
      description: [
        '화상 회의 서비스입니다.',
        `
          React로 구성된 페이지와 Static으로 구성된 페이지, Gulp로 구성된 페이지를 JSP로 만들어 JAVA로 서비스를 올리는 방법이었습니다.
          각각의 Style을 따로 구성해야 했습니다. 
        `
      ]
    },
    {
      key: 'rsupport',
      title: 'RVS',
      skill: [
        'React.js',
        'WebRTC'
      ],
      date: '2020-08',
      content: [
        ''
      ],
      description: [
        '비대면 상담 및 서비스 툴입니다.',
        `
          해당 프로젝트에는 MSA 프론트엔드가 적용되어 있었습니다.
          각 페이지를 MSA로 묶인 상태라 유지 보수 및 개발이 매우 어려웠습니다.
          페이지간 상태를 공유하기 위해 Window를 사용하였고, 컴포넌트끼리 소통도 RTC 통신과 엉키면서 매우 힘든 상황이었습니다.
          최대한 컴포넌트간 소통을 우선적으로 풀면서, 함수 컴포넌트 도입 및 Hooks를 활용하면서 개발을 진행했습니다.
        `
      ]
    },
    {
      key: 'petFriends',
      title: '펫프렌즈',
      date: '2019-12',
      skill: ['Vue.js'],
      content: ['1.5 리뉴얼 진행'],
      description: [
        '반려동물 제품 전문 쇼핑몰입니다.',
        `
          웹사이트를 웹뷰로 띄우는 하이브리드앱이었습니다. 모든 페이지와 기능들이 웹으로 구현되어 있어서 웹을 앱처럼 보여주기 위해 노력했습니다.
        `
      ]
    },
  ],
  [
    {
      key: 'jjsoft',
      title: 'Dr.Law',
      date: '2019-09',
      skill: ['Nuxt.js', 'Typescript', 'composition-api'],
      content: [
        '대시 보드',
        '법률 및 판례 검색',
        '즐겨찾기',
        '소가 계산기',
      ],
      description: [
        '변호사들의 협업을 도와주는 서비스입니다.',
        `
          Nuxt와 Typescript를 사용하고 있었습니다. 당시 Vue가 Typescript에 대한 지원이 미흡한 부분이 있었는데,
          그 문제를 Vue3에 도입된 Composition-API로 극복했습니다.
        `
      ]
    },
    {
      key: 'bemycar',
      title: '뿅카',
      date: '2019-01',
      skill: ['Vue.js', 'Vuetify'],
      content: ['관리자 툴', '비대면 계약서'],
      description: [
        '광고를 랩핑한 차량을 무료로 렌트해주는 서비스입니다.',
        `
          어플리케이션 내에 웹뷰를 이용한 하이브리드앱 개발에 참여했습니다. Window를 활용하여 앱의 네이티브단과 통신했습니다.
        `
      ]
    },
    {
      key: 'doa',
      title: '노스페이스',
      date: '2018-01',
      skill: ['jQuery'],
      content: ['퍼블리싱'],
      description: [
        '노스페이스 기획전 내용 퍼블리싱을 담당했습니다.'
      ]
    },
  ]
]
