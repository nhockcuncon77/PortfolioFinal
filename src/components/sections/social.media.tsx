import { SiGmail, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

interface Iprops{
    gmail: string
    linkedin: string
    medium: string
    github: string
    leetcode?: string
}
const SocialMedia = (props : Iprops) => {
    const { gmail, linkedin, medium, github, leetcode } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={gmail} target='_blank' rel="noreferrer" className="highlight" title="Gmail">
                <SiGmail size={30} />
            </a>
            <a href={linkedin} target='_blank' rel="noreferrer" className="highlight" title="LinkedIn">
                <FaLinkedin size={30} />
            </a>
            <a href={medium} target='_blank' rel="noreferrer" className="highlight" title="Medium">
                <FaMedium size={30} />
            </a>
            <a href={github} target='_blank' rel="noreferrer" className="highlight" title="Github">
                <FaGithub size={30} />
            </a>
            {leetcode && (
                <a href={leetcode} target='_blank' rel="noreferrer" className="highlight" title="LeetCode">
                    <SiLeetcode size={30} />
                </a>
            )}
        </div>
    )
}

export default SocialMedia;