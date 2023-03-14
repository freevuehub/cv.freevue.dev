const EDUCATION_LIST = [
  {
    school: '고려사이버대학교',
    term: '2019.01 - 2021.08',
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
  drx: {
    company: 'DRX',
    term: '2021.01.15 -',
    position: '파트장',
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
      key: 'drx',
      title: 'WASD',
      skill: [
        'Next.js', 'Typescript', 'Emotion', 'GraphQL', 'Deno'
      ],
      date: '2022-10',
      content: [
        '유저의 전적 정보 제공',
        '최근 게임의 트렌드 정보 제공',
        '빅데이터를 이용한 게임 데이터 분석',
      ],
      description: [
        `
          게임을 하면서 쌓이는 데이터들을 빅데이터로 저장하고 있습니다. 이제 이 데이터들을 활용하기 위한 서비스 개발에 참여했습니다.
          게임단과 이스포츠 캠프에 활용을 해보고 있으며, 데이터를 대시보드 형태로 보여주는 개발을 했습니다.
        `
      ]
    },
    {
      key: 'drx',
      title: 'DRX 사이트 개발',
      date: '2022-01',
      skill: ['Next.js', 'Typescript', 'Emotion'],
      content: ['프로게임단 정보 제공', '경기 일정 정보 제공', '선수단 정보 제공'],
      description: [
        `
          기존 정적인 파일로 개발된 사이트를 Next를 이용하여 DB와 연동하여 리뉴얼했습니다.
          최근 세계대회에 우승하면서 기념하는 페이지를 개발하여 배포했습니다.
          해당 페이지는 애플의 인터렉티브한 효과를 모티브로 하여 사용자에게 재미있는 경험을 주고자 했습니다.
        `
      ]
    },
    {
      key: 'drx',
      title: 'LoL 챔피언 교차 선택 사이트 개발',
      date: '2021-05',
      skill: ['Next.js', 'Typescript', 'Emotion', 'Socket.io'],
      content: ['LoL Draft 기능 제공', '실시간 채팅 제공'],
      description: [
        `
          선수들이 연습 경기전 챔피언 선택을 바꾸기 위해 게임을 다시 시작하는 경우가 많았습니다.
          그렇게 낭비되는 시간을 아끼기 위해 사이트에서 먼저 챔피언을 선택할 수 있는 기능을 제공했습니다.
        `
      ]
    }
  ],
  [
    {
      key: 'rsupport',
      title: 'Remote Meeting 개발 및 솔루션 납품',
      skill: [
        'React.js', 'Gulp'
      ],
      date: '2020-08',
      content: [
        '화상 회의 솔루션 설정 기능 개발',
        'Toss 비대면 솔루션 납품',
      ],
      description: [
        `
          화상 회의 플랫폼에 추가적인 기능 추가 개발에 참여했습니다.
          화상 회의실을 설정하는 기능들이었습니다.
          그리고 해당 플랫폼을 솔루션화 하여 Toss에 납품하는 개발에 참여했습니다.
        `,
        `
          해당 서비스가 개발된 지 오래되어 개발이 매우 어려웠습니다.
          Java 서버 위에 React로 된 페이지와 jQuery, Gulp로 개발된 각각의 페이지를 JSP로 바꾸어 주는 작업이 필요했습니다.
          페이지마다 Style과 상태가 있어 하나씩 개발하면서 통일시키는 것이 어려웠습니다.
        `
      ]
    },
    {
      key: 'petFriends',
      title: '펫프렌즈 리뉴얼 개발',
      date: '2019-12',
      skill: ['Vue.js'],
      content: ['펫프렌즈 1.5 리뉴얼 개발'],
      description: [
        `
          펫프렌즈 런칭 후 앱 리뉴얼에 초기 멤버로 참여했습니다. 메인페이지, 상품 리스트, 앱 내에 메뉴 개발이 1.5 업데이트 내용이었습니다.
          그 중 메인페이지와 앱 내에 메뉴 개발을 메인으로 개발했습니다.
        `
      ]
    },
    {
      key: 'jjsoft',
      title: 'Dr.Law 개발',
      date: '2019-09',
      skill: ['Nuxt.js', 'Typescript', 'composition-api'],
      content: [
        '법률 검색 기능 개발',
        '소송 비용 계산기 개발',
        '즐겨찾기 기능 개발',
        '메인 페이지 대시 보드 개발',
      ],
      description: [
        `
          변호사들이 업무에 사용하는 서류들을 사이트에 구현하는 서비스였습니다.
          그 중 메인페이지, 법률 정보 검색 페이지를 개발했습니다. 베타 버전 업데이트 후 즐겨찾기 페이지 개발했습니다.
          하지만 회사가 힘들어져 서비스를 런칭하지 못했습니다.
        `
      ]
    }
  ],
  [
    {
      key: 'bemycar',
      title: '뿅카 개발',
      date: '2019-01',
      skill: ['Vue.js', 'Vuetify'],
      content: ['렌트카 관리 및 차량 예약 관리 툴 개발', '비대면 계약서 작성 페이지 개발'],
      description: [
        `
          뿅카 서비스의 렌터카와 예약정보, 회원, 쿠폰을 관리하는 관리자 도구 개발에 참여했습니다.
          이후 비대면 서비스를 위해 앱 내에 들어갈 서류 작성 페이지를 개발했습니다.
        `
      ]
    },
    {
      key: 'bemycar',
      title: 'IMS 렌트카 관리 플랫폼 개발',
      date: '2018-08',
      skill: ['Vue.js', 'Vuetify'],
      content: ['렌트카 통합 관리툴 서비스 제공'],
      description: [
        `
          렌터카를 관리하기 위한 관리자 도구 개발에 참여했습니다.
          전국의 렌터카 업체가 이용하기 위해 지점관리 페이지, 렌터카 관리 페이지, 회원 관리 페이지 등등 비즈니스를 위한 서비스를 제공했습니다.
        `
      ]
    },
    {
      key: 'doa',
      title: '노스페이스 기획전 담당',
      date: '2018-01',
      skill: ['jQuery'],
      content: ['기획전의 내용 퍼블리싱'],
      description: [
        `
          일주일마다 진행되는 노스페이스의 기획전을 퍼블리싱하여 올리는 업무를 담당했습니다.
        `
      ]
    },
  ]
]