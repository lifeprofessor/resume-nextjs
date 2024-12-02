import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'IT 전문 튜터링 교수/IT 전문 강의 및 강연',
      position: '인생교수의 AI 연구소 대표',
      startedAt: '2021-10',
      descriptions: [
        '생성형 AI의 R&D 분야 활용 방안 교육 (주최: 항공우주연구원)',
        '정보처리기사 특강 강사 (대학에서 IT 전공자 대상 필기·실기 특강 진행)',
        '차이나는 AI 클라스, 기초부터 시작하는 AI (주최: 인생교수의 AI 연구소)',
        'AI 시대 준비하라, 컴퓨터부터 인공지능까지 이해하기 (주최: 청춘스럽)',
        '신입생을 위한 컴퓨터활용능력 2급 필기/실기 LMS 강의 (주최: 세명대학교)',
        'IT전공자와 비전공자가 함께하는 Git&GiHub 활용 실무교육 (주최: 배재대학교)',
        'IT 전문 튜터링 교수 (20대~60대 대상 다수의 AI 및 IT 강의 경험 다수)',
      ],
      skillKeywords: [
        'IT 전문 튜터링',
        'AI 교육',
        '정보처리기사 특강',
        '컴퓨터활용능력 강의',
        'Git&GitHub 특강',
      ],
    },
    {
      title: '(주)시스메이트',
      position: '주임 연구원',
      startedAt: '2015-10',
      endedAt: '2017-06',
      descriptions: [
        'PCMS(packetLiner Central Management System) 개발',
        '티브로드 PoC(Probe of Concept) 자사 제품 네트워크 구성 및 시험',
        'DPI(Deep Packet Inspection) 네트워크 제품 기능 검증 및 품질 관리',
        'DPI 네트워크 제품의 공인 성능 검증(TTA 테스트 수행)',
        '네트워크 가상화기술 NFV(Network Function Virtualization) 연구',
      ],
      skillKeywords: [
        'Visual C++/MFC',
        'DPI 네트워크 제품 검증',
        '네트워크 망 구성 및 테스트',
        'NFV 연구',
      ],
    },
  ],
};

export default experience;
