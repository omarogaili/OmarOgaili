import style from '../Style/header.module.css'
import image from '../assets/ChatGPT Image May 9, 2025, 03_52_23 PM.png'
import { FaLinkedinIn } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";


export default function Header() {
    return (
        <header className={style.Header}>
            <div className={style.imageContainer}>
                <img src={image} alt="GitHub" className={style.SocialIcon} />
            </div>
            <div className={style.TitleContainer}>
                <h1 className="text-2xl font-bold">Developer</h1>
            </div>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="https://se.linkedin.com/in/omar-ogaili-svensson-348616291" target='_blank' className="hover:underline" title='LinkedIn' ><FaLinkedinIn /></a></li>
                    <li><a href="#projects" className="hover:underline" title='Available for job'><MdEventAvailable /></a></li>
                </ul>
            </nav>
        </header>
    );
}


