import { Col, Row } from 'reactstrap';
import { EmptyRowCol } from '../common';

import { Style } from '../common/Style';

import companyLogo from '../../asset/companyLogo.png';

export const Footer = {
  Component,
};

function Component() {
  return (
    <Row>
      <Col style={Style.footerCover}>
        <div style={Style.footer} className="text-center mt-4">
          <EmptyRowCol>
            <small>
              <img
                src={companyLogo}
                alt="인생교수의 AI 연구소"
                style={{ width: '250px', height: 'auto' }}
              />
            </small>
          </EmptyRowCol>
        </div>
      </Col>
    </Row>
  );
}
