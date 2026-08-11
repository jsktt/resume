// All resume content lives here. Edit this file to update the page.

export const profile = {
  name: '김준성',
  title: 'Software Engineer',
  scope: '풀스택 · ML',
  email: 'j_skt@naver.com',
  github: 'https://github.com/jsktt',
  linkedin: 'https://www.linkedin.com/in/junsung-kim99/',
}

// description: one or two sentences summarizing what the project is.
// bullets: what you personally did on it, one point per line.
// tags: the stack, shown as chips. `bullets` on a tag lists the indexes of the
//   bullets above that use it — hovering the tag dims the others. Omit it and
//   the tag is inert (nothing to isolate).
export type Tag = { label: string; bullets?: number[] }

export const projects: {
  name: string
  description: string
  link: string
  period: string
  bullets: string[]
  tags: Tag[]
}[] = [
  {
    name: '대규모 ERP 프로젝트',
    description: '본사, 지점, 현장이 같은 부품 데이터를 실시간으로 공유하는 MSA 기반 ERP 프로젝트',
    link: 'https://github.com/BBD-AES',
    period: '2026.05 — 2026.06',
    bullets: [
      'Event-Driven Architecture를 사용해 여러 서비스간 재고 상태를 비동기 처리하여 재고 불일치를 줄이고 서비스간 통신을 더 빠르게 향상.',
      '자주 요청되는 재고, 상품 조회에 Redis 캐싱 레이어를 도입해 중복 데이터 조회를 제거하고 API 응답 성능 향상.',
      'JPA 사용시 발생하던 쿼리 N+1 문제를 Fetch Join 같은 Hibernate 기능을 사용해 반복 쿼리를 단일 쿼리로 통합하여 조회 성능과 DB 부하를 개선.',
    ],
    tags: [
      { label: 'Java 17', bullets: [0, 1, 2] },
      { label: 'SpringBoot', bullets: [0, 1, 2] },
      { label: 'Kafka', bullets: [0] },
      { label: 'Redis', bullets: [1] },
      { label: 'JPA · Hibernate', bullets: [2] },
      { label: 'Docker' },
    ],
  },
  {
    name: '이미지 공유 플랫폼 핀트',
    description: '핀트(Pint)는 사진 촬영 시 피사체를 선명하게 맞추는 초점(Focus)을 의미하는 사진계의 오랜 은어에서 착안했습니다. 우리는 "이 사진 어디서 찍었지?", "어떻게 보정했지?"라는 사용자의 근본적인 궁금증을 해결하고자 합니다.',
    link: 'https://github.com/Team-Pint',
    period: '2026.03',
    bullets: [
      'thumbnailator 라이브러리 를 통해 이미지 압축 로직 도입, 이미지 용량 3MB에서 150KB 로 95% 절감. ',
      '홈 피드에서 반복 요청되는 이미지의 S3 Presigned URL 생성 비용을 줄이기 위해 Redis 캐싱 레이어 (TTL 55분) 도입, 결과적으로 중복 S3 호출을 제거하고 API 응답 성능 4배 향샹.',
      '라이브러리를 활용해 게시글에 필터 프리셋 XMP 파일 업로드 시 프리셋 정보가 자동으로 등록되도록 구현.',
      'AWS EC2 환경을 docker-compose를 사용해서 서버 운영.',
      'Github Actions로 CI/CD 파이프라인 구축해 main 브랜치 머지 시 자동 배포되도록 구성.',
      'Nginx를 사용해서 http → https 인크립션화 해서 서비스 플랫폼 보안성 강화.',
      'IAM 사용자 권한과 AWS SDK를 활용해 .env 파일에 공존하던 S3 bucker 엑세스 키를 자동 로드 방식으로 전환하여 보안성 강화.',
    ],
    tags: [
      { label: 'Python' },
      { label: 'PostgreSQL' },
      { label: 'thumbnailator', bullets: [0] },
      { label: 'Redis', bullets: [1] },
      { label: 'S3', bullets: [1, 6] },
      { label: 'XMP', bullets: [2] },
      { label: 'Docker', bullets: [3] },
      { label: 'Github Actions', bullets: [4] },
      { label: 'Nginx', bullets: [5] },
      { label: 'AWS IAM', bullets: [6] },
    ],
  },
  {
    name: 'LLM을 사용한 프롬프트 분류화',
    description: '80억 개 이하의 파라미터를 가진 경량 LLM을 활용해 프롬프트 분류 시스템을 개발하고, 이를 통해 분류된 프롬프트를 텍스트 생성 모델이나 이미지 생성 모델 등 적합한 모델로 자동 라우팅하는 기능을 설계합니다. 또한 비윤리적이거나 유해하거나 제한된 프롬프트를 걸러낼 수 있는 커스터마이징 가능한 가드레일 기능을 통합하여, 시스템 전반의 안전성과 신뢰성을 확보합니다.',
    link: 'https://github.com/jsktt/prompt-classification',
    period: '2026.05 — 2026.06',
    bullets: [
      '양방향 self-attention 구조의 RoBERTa-Large 선택 하여 텍스트/이미지 플롬프트 분류 모델 설계 정확도 개선.',
      'CrossEntropyLosss + AdamW + linear war-up 파이튜닝 조합으로 초반 사전학습 가중치 장애 방지 및 학습 안정성 확보. ',
      'gradient normalization이 1.0을 초과할 경우를 대비하여 gradient clipping 적용해 학습 발산 방지.',
      '학교 HPC 클러스터를 활용해 추론 지연을 73% 단축.',
      'Bash 스크립트로 노드별 독립 Python 환경 자동 구성하여 팀원들과 라이브러리 버전 충돌 방지 및 실험 재현성을 확보해 협업 환경을 원활하게 개선.',
    ],
    tags: [
      { label: 'Python' },
      { label: 'Pytorch', bullets: [0, 1, 2] },
      { label: 'RoBERTa-Large', bullets: [0] },
      { label: 'AdamW', bullets: [1] },
      { label: 'gradient clipping', bullets: [2] },
      { label: 'HPC', bullets: [3] },
      { label: 'Bash', bullets: [4] },
      { label: 'Tensorflow' },
    ],
  },
]

// projects와 같은 구조. description은 한두 문장 요약, bullets는 본인이 직접 한 일,
// tags는 사용한 스택 — 태그의 `bullets`에 적은 인덱스가 그 태그를 쓴 항목이고,
// 태그에 hover하면 나머지 항목이 흐려진다. bullets와 tags는 선택 사항이라,
// 둘 다 없으면 역할 + 설명만 있는 compact 형태로 렌더링된다.
export const experience: {
  role: string
  company: string
  period: string
  description: string
  bullets?: string[]
  tags?: Tag[]
}[] = [
  {
    role: '학교 보조 연구원',
    company: 'Bio-Inspired Science and Technology',
    period: '2023.05 ~ 2023.07',
    description: '임베디드 팀에서 학부 연구원으로 Tendon-driven actuator system 개발에 참여했습니다.',
    bullets: [
      '박쥐 모양 로봇의 귀·코·발 구조에 힘줄 구동 방식(tendon-driven actuation) 시스템을 프로토타이핑해 음향 연구에 필요한 실감 있는 구조 변형을 구현.',
      'Teensy 마이크로컨트롤러용 임베디드 C++ 펌웨어를 개발하고 ADC · DAC · UART · SPI를 레지스터 직접 조작으로 제어해 주변장치 응답 시간을 2ms 이하로 단축.',
      'NVIDIA Jetson 보드와 마이크로컨트롤러 간 멀티 디바이스 시리얼 통신 프로토콜을 설계하고 검증해 실험실 환경 기준 패킷 손실률을 7%에서 0%로 감소.',
      '트레이스 라우팅을 최적화한 커스텀 PCB 레이아웃을 설계해 초기 설계 대비 액추에이터 신호 무결성을 약 15% 개선.',
    ],
    tags: [
      { label: 'Embedded C++', bullets: [1, 2] },
      { label: 'Teensy', bullets: [1, 2] },
      { label: 'NVIDIA Jetson', bullets: [2] },
      { label: 'UART · SPI', bullets: [1, 2] },
      { label: 'ADC · DAC', bullets: [1] },
      { label: 'Tendon-driven Actuation', bullets: [0] },
      { label: 'PCB 레이아웃', bullets: [3] },
    ],
  },
]

export const education = [
  {
    school: '현대오토에버 모빌리티 SW 스쿨 3기',
    degree: '웹앱반',
    period: '2025 — 2026',
    detail: '대규모 프로젝트 최우수상',
  },
  {
    school: 'Virginia Polytechnic Institute and State University',
    degree: 'B.S. in Computer Engineering',
    period: '2018 — 2025',
    detail: '머신러닝 수업 최우수 프로젝트 수상',
  },
]
