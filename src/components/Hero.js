import React from "react"
import heroImg from "../assets/images/hero-img.svg";
import links from "../constants/links";
import {Link} from "react-router-dom";
import SocialDetails from "./SocialDetails";

const Hero = () => {

    const getContactPage = () => {
        return links.find(link => link.id === 'contact-page')
    }

    return (
        <header className="hero">
            <div className="section-center hero-center">
                <article className="hero-info">
                    <div className="underline"/>
                    <h1>i'm rajvi</h1>
                    <h4>Software Alchemist ‍♀️ (a.k.a. Developer)</h4>
                    <Link to={getContactPage()?.url} className="btn hero-btn">
                        contact me
                    </Link>
                    <SocialDetails className="social-icons hero-icons"/>
                </article>
                <article className="hero-img">
                    <img alt="Person riding skate board while coding!" className="hero-photo"
                         src={heroImg} placeholder="blurred"/>
                </article>
            </div>
        </header>
    )
}

export default Hero
