import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요. 누군가의 인생길에 빛이 되고자 IT 전문 튜터링을 시작한 인생교수입니다.',
    '저는 AI, 정보처리기사, 컴퓨터활용능력, 엑셀 실무, 프로그래밍 등 IT 분야의 전문 튜터링과 강연, 강의를 진행하고 있습니다. 대학 강의와 기업 강연을 통해 이론과 실습 중심의 교육을 제공하며, 대학생 멘토링을 통해 미래의 인재들이 성장할 수 있도록 돕고 있습니다.',
    '다수의 사람을 가르치는 교육자로서, 진정한 교육을 실천하여 타인의 삶에 긍정적인 영향을 끼치는 것이 저의 목표입니다. 교육의 힘을 통해 더 많은 사람들의 가능성을 이끌어내고, 그들이 꿈꾸는 미래를 실현할 수 있도록 돕고 싶습니다.',
  ],
  sign: 'Life Professor',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
