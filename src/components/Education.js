import React from "react"
import Title from "./Title"
import {FaAngleDoubleRight} from "react-icons/fa"
import education from "../constants/education";
import {Link} from "react-router-dom";

const Education = () => {
    const [value, setValue] = React.useState(0)
    education.sort((a , b) => (b.id - a.id)); // sort by reverse chronological
    const {mainCompany, location, position, duration, bullets} = education[value]
    return (
        <section className="section education">
            <Title title="Education"/>
            <div className="jobs-center">
                <div className="btn-container">
                    {education.map((item, index) => {
                        return (
                            <button
                                key={index}
                                className={index === value ? "job-btn active-btn" : "job-btn"}
                                onClick={() => setValue(index)}>
                                {item.company}
                            </button>
                        )
                    })}
                </div>
                <article className="job-info">
                    <h3>{position}</h3>
                    <a href={clgUrl} target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit;"><h4>{mainCompany + ' - ' + location}</h4></a>
                    <p className="job-date">{duration}</p>
                    <div className="project-stack">
                {bullets.map((tag, idx) => {
                    return <span key={'tag-' + idx}>{tag}</span>;
                })}
            </div>
                    {/* {bullets.map((item, idx) => {
                        return (
                            <div key={'bull' + idx} className="job-desc">
                                <FaAngleDoubleRight className="job-icon"/>
                                <p>{item}</p>
                            </div>
                        )
                    })} */}
                </article>
            </div>
            <Link to='/about' className='btn center-btn'>more info</Link>
        </section>
    )
}

export default Education
