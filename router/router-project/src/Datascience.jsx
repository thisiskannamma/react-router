import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import './Header.css'
function Datascience() {
    return (
        <>
            <div>
                <div className='header'>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <Link to='/'> <a className="navbar-brand" href="#">ALL</a></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to='/full stack'><a className="navbar-brand" aria-current="page" href="#">FULL STACK DEVELOPMENT</a></Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/datascience'><a className="navbar-brand" href="#">DATA SCIENCE</a></Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/cyber security'><a className="navbar-brand" href="#">CYBER SECURITY</a></Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/career'><a className="navbar-brand" href='#'>CAREER</a></Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
                </div>
            </div>
            <div>
            <div className='row'>
          <div className="card" >
            <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-2048x1024.webp" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Impact of Certification Programs on Hiring Data Scientists</h5>
              <p className="card-text">Data scientists are the creators behind transforming the raw data into edible data insights. These data insights are supplements for the growth of modern businesses today. But in this highly competitive job market, how do companies identify the best data scientists that suit specific business needs? That’s where the impact of certification programs on hiring data scientists comes in.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
          <div className="card" >
            <img src="https://www.guvi.in/blog/wp-content/uploads/2023/07/best-data-science-frameworks.webp" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">10 Best Data Science Frameworks in 2023</h5>
              <p className="card-text">Does data scientists fascinate you? If yes, you must definitely know about data science frameworks. These frameworks are used by data scientists to ease their work pressure by using them in projects. Data science has become an integral part of many industries, driving innovation and providing valuable insights. As the field continues to evolve, data scientists rely on various frameworks and tools to organize, analyze, and interpret data efficiently.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
          <div className="card" >
            <img src="https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">What is the Difference between Data Science and Data Engineering?</h5>
              <p className="card-text">India has been making some serious waves in the world of data. Just like the rest of the world, we’re seeing a massive jump in the demand for data science and data engineering roles. And this isn’t just a passing trend. </p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
          <div className="card" >
            <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Data-Science-Tools-1-2048x1072.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Top 10 Data Science Tools in 2023</h5>
              <p className="card-text">Data Science is an in-demand profession and will continue growing in the coming years. From this, you can assume its importance, and now if you want to get into data science, you must know about the tools, skills, and frameworks required. You must begin with the skills required and for that data science tools come to the top.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
          </div>
            </div>
        </>
    )
}

export default Datascience