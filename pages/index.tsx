/* eslint-disable react/jsx-props-no-spreading */
import { Container } from 'reactstrap';

import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { Education } from '../component/education';
import { Etc } from '../component/etc';
import { Experience } from '../component/experience';
import { Introduce } from '../component/introduce';
import { Profile } from '../component/profile';
import { Style } from '../component/common/Style';
import Payload from '../payload';
import { Presentation } from '../component/presentation';

function Yosume() {
  return (
    <>
      <NextSeo {...Payload._global.seo} />
      <Head>
        <title>{Payload._global.headTitle}</title>
        <link rel="shortcut icon" href={Payload._global.favicon} />
      </Head>
      <Container style={Style.global}>
        <Profile.Component payload={Payload.profile} />
        <Introduce.Component payload={Payload.introduce} />
        <Education.Component payload={Payload.education} />
        <Experience.Component payload={Payload.experience} />
        <Presentation.Component payload={Payload.presentation} />

        <Etc.Component payload={Payload.etc} />
      </Container>
    </>
  );
}

export default Yosume;
