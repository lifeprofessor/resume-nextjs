import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
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
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://bit.ly/인생교수',
      icon: faHome,
    },
  ],
  notice: {
    title: 'IT 전문 튜터링 / 공공기관 특강 의뢰 가능',
    icon: faBell,
  },
};

export default profile;
