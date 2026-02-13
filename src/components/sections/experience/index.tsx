import { Col, Row } from "react-bootstrap";
import AnimationLottie from 'components/share/animation-lottie';
import experienceJSON from 'assets/lottie/code.json';
import { EXPERIENCES } from '../../../helpers/data';
import GlowCard from "components/share/glow-card";
import { BsPersonWorkspace } from "react-icons/bs";
import blurImg from 'assets/blur-23.svg';
import { useCurrentApp } from "components/context/app.context";
import { useTranslation } from "react-i18next";

type TLanguage = "vi" | "en";

interface ExperienceItem {
    id: number;
    title: { vi: string; en: string };
    company: { vi: string; en: string };
    duration: { vi: string; en: string };
    highlights?: { en: string[]; vi: string[] };
}

const Experience = () => {
    const { theme } = useCurrentApp();
    const { t, i18n } = useTranslation();
    const currentLanguage = (i18n.resolvedLanguage ?? 'en') as TLanguage;

    return (
        <Row className="mb-5">
            <Col xs={12} className="my-3 my-md-5">
                <div className="text-center">
                    <h3>{t("experience.title")}</h3>
                    <p className="text-muted small mt-1">{t("experience.subtitle")}</p>
                </div>
            </Col>
            <Col md={6} xs={12} className="d-flex align-items-center justify-content-center">
                <AnimationLottie animationPath={experienceJSON} />
            </Col>
            <Col md={6} xs={12}>
                <div className="d-flex flex-column gap-4">
                    {(EXPERIENCES as ExperienceItem[]).map((exp) => (
                        <GlowCard key={exp.id} identifier={`experience-${exp.id}`}>
                            <div className="p-3 position-relative">
                                {theme === "dark" && (
                                    <img
                                        style={{ position: "absolute", bottom: 0, opacity: 0.8 }}
                                        src={blurImg}
                                        alt=""
                                        width="100%"
                                        height={200}
                                    />
                                )}
                                <div className="experience-container">
                                    <div className="duration-text">
                                        <p>{exp.duration[currentLanguage]}</p>
                                    </div>
                                    <div className="details">
                                        <div className="icon">
                                            <BsPersonWorkspace size={36} />
                                        </div>
                                        <div className="info">
                                            <p className="title">{exp.title[currentLanguage]}</p>
                                            <p className="company">{exp.company[currentLanguage]}</p>
                                        </div>
                                    </div>
                                    {exp.highlights && exp.highlights[currentLanguage]?.length > 0 && (
                                        <ul className="experience-highlights">
                                            {exp.highlights[currentLanguage].map((bullet, idx) => (
                                                <li key={idx}>{bullet}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </Col>
        </Row>
    );
};

export default Experience;
