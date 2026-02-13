import { Col, Row } from 'react-bootstrap';
import Tilt from "react-parallax-tilt";
import avatarImg from "assets/avatar.svg";
import './introduction.scss';
import { useTranslation } from 'react-i18next';

const Introduction = () => {
    const { t, i18n } = useTranslation();

    return (
        <section className='introduction-section my-5 my-md-7' style={{ position: "relative" }}>
            <Row>
                <Col xs={12} md={9}>
                    <h2 className='text-center text-md-start'>
                        {i18n.resolvedLanguage === "en" ? (
                            <>AI/ML & <span className='text-pink-100'>FULL-STACK</span> ENGINEERING</>
                        ) : (
                            <>AI/ML & <span className='text-pink-100'>FULL-STACK</span> ENGINEERING</>
                        )}
                    </h2>
                    <br />
                    <p>
                        {t("introSection.heading1")}
                        <br /><br />
                        {t("introSection.heading2")}
                        <br /><br />
                        {t("introSection.heading3")}
                    </p>
                </Col>
                <Col md={3} className='d-md-block d-none'>
                    <Tilt>
                        <img src={avatarImg} className="img-fluid" alt="Minh Huynh" />
                    </Tilt>
                </Col>
            </Row>
            <div className="about-container d-none d-md-flex">
                <span className="about-label">{t("introSection.about")}</span>
                <span className="vertical-line"></span>
            </div>
        </section>
    );
};

export default Introduction;
