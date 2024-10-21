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
        '1:1 개인 맞춤 대면/비대면 IT 튜터링',
        '기초부터 시작하는 AI 강연',
        '정보처리기사 필기/실기 특강',
        '컴퓨터활용능력 특강',
        '대학생 멘토링 특강',
      ],
      skillKeywords: ['C', 'Java', 'Python', 'AI', 'Data Analysis'],
    },
  ],
};

export default experience;
