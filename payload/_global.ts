import favicon from '../asset/lifeprof16.ico';
import previewImage from '../asset/profile_preview.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = 'LifeProfessor Profile';
const description = '누군가의 인생길에 빛이 되어 주고 싶었다.';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'OpenGraph Image Sample.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'SeonMin',
        lastName: 'Lim',
        username: 'LifeProfessor',
        gender: 'male',
      },
    },
  },
};
