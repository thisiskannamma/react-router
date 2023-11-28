import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import './Header.css'
function Career() {
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
            <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/top_product_based_companies_that_don_t_require_coding.webp" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Top 5 Product-Based Companies That Don’t Require Coding</h5>
              <p className="card-text">Every one of us wants to work in top product-based companies, Right? But, Not everyone has great coding skills. What if I tell you, you can get into it without coding knowledge? Sounds Great, Right? Anyone can apply for these job roles irrespective of their educational background.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
          <div className="card" >
            <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-2-2048x1072.webp" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Blockchain Developer Resume Guide: 11 Hot Tips to Make It Professional</h5>
              <p className="card-text">What if I say that blockchain is going to be the next big thing? And why do I say so? Because of its decentralized and secure approach to data management. It is high time for you to catch up with others as the competition is growing day by day. In order to do that, all you need to have is a compelling blockchain developer resume.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
          </div>
            </div>
        </>
  )
}

export default Career