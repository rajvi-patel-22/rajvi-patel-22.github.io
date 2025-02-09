"use client"

import { useState, useEffect, useRef } from "react"
import Title from "./Title"
import { FaAngleDoubleRight, FaChevronRight, FaChevronLeft } from "react-icons/fa"
import jobs from "../constants/jobs"
import { Link } from "react-router-dom"
import "./Jobs.css"

const Jobs = () => {
  jobs.sort((a, b) => b.id - a.id) // sort by reverse chronological order
  const [expandedJob, setExpandedJob] = useState(null)
  const timelineRef = useRef(null)

  const toggleJobDetails = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.1 },
    )

    const timelineItems = timelineRef.current.querySelectorAll(".timeline-item")
    timelineItems.forEach((item) => observer.observe(item))

    return () => timelineItems.forEach((item) => observer.unobserve(item))
  }, [])

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="timeline-container" ref={timelineRef}>
        {jobs.map((job, index) => (
          <div key={job.id} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="timeline-content">
              <h3>{job.position}</h3>
              <h4>
              <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>{job.mainCompany} - {job.location}</a>
              </h4>
              <p className="job-date">{job.duration}</p>
              {expandedJob === job.id ? (
                <>
                  {job.bullets.map((bullet, idx) => (
                    <div key={`bull${idx}`} className="job-desc">
                      <FaAngleDoubleRight className="job-icon" />
                      <p>{bullet}</p>
                    </div>
                  ))}
                  <a className="view-more-link expanded" onClick={() => toggleJobDetails(job.id)}>
                    View Less <FaChevronLeft />
                  </a>
                </>
              ) : (
                <>
                  <div className="job-desc">
                    <FaAngleDoubleRight className="job-icon" />
                    <p>{job.bullets[0]}</p>
                  </div>
                  <a className="view-more-link" onClick={() => toggleJobDetails(job.id)}>
                    View More <FaChevronRight />
                  </a>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Jobs

