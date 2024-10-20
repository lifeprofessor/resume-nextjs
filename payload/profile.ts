import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/profile.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '임성민',
    small: '(인생교수)',
  },
  contact: [
    {
      title: 'lifeprof@naver.com',
      link: 'mailto:lifeprof@naver.com',
      icon: faEnvelope,
    },
    {
      title: '010-9550-9807',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/lifeprofessor/',
      icon: faGithub,
    },
    {
      link: 'https://bit.ly/인생교수',
      icon: faHome,
    },
  ],
  notice: {
    title: '이 이력서는 사실에 기반해 작성되었습니다.',
    icon: faBell,
  },
};

export default profile;
