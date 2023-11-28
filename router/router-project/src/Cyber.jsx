import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import './Header.css'
function Cyber() {
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
            <img src="https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Cybersecurity Vs Ethical Hacking: Top 10 Differences</h5>
              <p className="card-text">Cybersecurity & Ethical hacking and have been key in making sure that your data online is secure, users are authenticated & your data and privacy concerns are all kept safe.Is there a difference between cybersecurity and ethical hacking, if yes what is the difference? Let’s find out!</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
          <div className="card">
            <img src="https://www.guvi.in/blog/wp-content/uploads/2022/06/Types-of-Cyber-Security-Attacks-and-How-to-Minimize-the-Impact.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Top 7 Cyber Security Attacks in Real Life</h5>
              <p className="card-text">Cyber security attacks are the type of actions that are designed to destroy, steal, modify, or disable information through unauthorized access to computer systems.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
          <div className="card">
            <img src="https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?</h5>
              <p className="card-text">Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well, it depends on many facets. Because just starting off, many roles don’t really require you to code and based on how advanced you want to get, programming may or may not be all that important for you.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
          <div className="card">
            <img src="https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">What is Cybersecurity? Importance and its uses & the growing challenges in 2023!</h5>
              <p className="card-text">Look around today, you will witness that we are more reliant on technology and devices than ever before. Benefits of this trend range from getting rid of Yellowbook, and having near-instant access to information on the internet o the modern conveniences provided by smart home automation technology and concepts like IoT devices. </p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
          </div>
            </div>
        </>
  )
}

export default Cyber