import Typewriter from "typewriter-effect";
import SocialMedia from "components/sections/social.media";
import { useTranslation } from "react-i18next";
import './hero.scss';
import ResizeButton from "components/sections/resize.button";
import { APP_DATA } from 'helpers/data';
import { MdFileDownload } from "react-icons/md";
import { AiFillFire } from "react-icons/ai";

interface Iprops {
    scrollToExperienceSection: () => void;
}
const HeroLeft = (props : Iprops) => {

    const { t } = useTranslation();

    const openInNewTab = (url: string): void => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    const handleDownloadCV = () => {
        openInNewTab("https://drive.google.com/file/d/1K2CyXnRZnf1h6WFJz8-pfHP5dnX_-WmR/view?usp=sharing")
    }
    return (
        <div className='hero-left'>
            <h3 className="text-uppercase small text-muted mb-1">{t("heroSection.greeting")}</h3>
            <h3 style={{ paddingTop: 4, paddingBottom: 5 }}>
                <strong className="brand-red">{t("appHeader.brand")}</strong>
            </h3>
            <Typewriter
                options={{
                    strings: [
                        "AI/ML & Full-Stack Engineer",
                        "Cloud-Native Specialist",
                        "React, Django & TypeScript",
                        "LLM & RAG Systems",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    wrapperClassName: "brand-green"
                }}
            />
            <div
                className="mt-md-6 mt-3 mb-md-5 mb-2"
            >
                <SocialMedia
                    gmail={APP_DATA.GMAIL_URL}
                    linkedin={APP_DATA.LINKEDIN_URL}
                    medium={APP_DATA.MEDIUM_URL}
                    github={APP_DATA.GITHUB_URL}
                    leetcode={APP_DATA.LEETCODE_URL}
                />
            </div>
            <div className="d-md-flex d-none gap-4">
                <ResizeButton
                    onClick ={props.scrollToExperienceSection}
                    btnText={t("heroSection.exp")}
                    btnIcons={<AiFillFire style={{ color: "orange" }} />}
                    btnStyle={{
                        background: "unset",
                        border: "1px solid var(--border-hero-right)",
                        color: "var(--text-white-1)"
                    }}
                />
                <ResizeButton
                    btnText={t("heroSection.cv")}
                    btnIcons={<MdFileDownload />}
                    onClick={handleDownloadCV}
                />

            </div>

        </div>
    )
}

export default HeroLeft;