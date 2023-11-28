import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import './Header.css'

function Post() {
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
          <div className="card">
            <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Top Ways to Assess Soft Skills in Full Stack Developers in 2023</h5>
              <p className="card-text">When you’re hiring a full-stack developer, what are the most important things you look for? Most probably excellent technical and development skills. Sure, they might be great at their work, but would they be a great employee or someone who fits well within your organization?</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
          
          <div className="card">
            <img src="https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Ultimate-Guide-to-Real-World-Full-Stack-Development-Applications-2048x1072.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">The Ultimate Guide to Real-World Full-Stack Development Applications</h5>
              <p className="card-text">Full-stack development has become increasingly popular in recent years, with companies seeking professionals who can handle both front-end and back-end tasks.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
          <div className="card">
            <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Top Differences: Full Stack Developer vs Software Engineer 2023</h5>
              <p className="card-text">A Full Stack Developer is a tech all-rounder. They work on both the front and back parts of websites or apps. A Software Engineer focuses on building software. They work on specific bits of the software and make sure everything fits together well. They know a lot about programming, how to make things work, and design software.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
          <div className="card">
            <img src="https://www.guvi.in/blog/wp-content/uploads/2023/07/html-css-collage-concept-with-person.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Top 10 Full-Stack Developer Frameworks in 2023</h5>
              <p className="card-text">In the ever-evolving world of technology, the demand for full stack developers is at an all-time high. As businesses continue to embrace online platforms and advanced technologies, they require professionals who can handle every aspect of web development, from design and front-end development to back-end coding and database management.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
          <div className="card">
            <img src="https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Top-10-Tools-Every-Full-Stack-Developer-Should-Master-in-2023-2048x1072.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">The Top 10 Tools Every Full-Stack Developer Should Master in 2023</h5>
              <p className="card-text">As a full-stack developer, having the right set of tools is crucial for your success. In the ever-evolving world of web development, staying updated with the latest tools can significantly enhance your productivity and make you a more competent developer.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
          <div className="card">
            <img src="https://www.guvi.in/blog/wp-content/uploads/2023/02/1_6rDcIgFJQldloIERiUSmzw.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">How does Apache work? A detailed introduction to Apache</h5>
              <p className="card-text">Apache is the most widely used web server in the world, powering over 40% of all websites on the internet. It is an open-source, cross-platform web server that is maintained by the Apache Software Foundation. Apache is a cross-platform server, which means it can run on various operating systems such as Windows, Linux, and macOS.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post