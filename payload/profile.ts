import { faEnvelope, faHome, faPhone, faBuilding, faUser } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/profile.png';

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
      title: '인생교수의 AI 연구소 대표',
      icon: faUser,
    },
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
      title: '인생교수의 AI 연구소',
      link: 'https://map.naver.com/p/entry/place/1027158601?c=15.00,0,0,0,dh',
      icon: faBuilding,
    },
    {
      title: '인생교수의 AI 연구소 홈페이지',
      link: 'https://lifeprof-lecture.netlify.app/',
      icon: faHome,
    },
  ],
  notice: {
    title: 'IT 전문 튜터링 / 공공기관 특강 의뢰 가능',
    icon: faBell,
  },
};

export default profile;
