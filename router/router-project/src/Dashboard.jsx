import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import './Header.css'

function Dashboard() {
  return (
    <>
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
      <div className='row'>
        <div className="card">
          <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Cloud-Computing-Jobs-without-Coding-1.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Top 10 High Paying Cloud-Computing Jobs without Coding in 2023</h5>
              <p className="card-text">Cloud computing has become an integral part of our technological landscape. Its versatility and scalability have driven a surge in cloud adoption, creating a demand for skilled cloud computing engineers. While coding skills are highly valuable in cloud computing, there is a growing demand for non-coding roles as well.</p>
              <a href="#" className="btn btn-primary">Read More </a>
            </div>
        </div>
        <div className="card">
          <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Non-Coding-Jobs-in-DevOps.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Top High-Paying Non-Coding Jobs in DevOps [2023]</h5>
              <p className="card-text">DevOps (Development and Operations) is a field that focuses on improving collaboration and automation between software development and IT operations teams to deliver software more efficiently and reliably. While many DevOps roles involve coding and scripting, there are also non-coding jobs in DevOps that play crucial roles in the DevOps pipeline.</p>
              <a href="#" className="btn btn-primary">Read More </a>
            </div>
        </div>
        <div className="card">
          <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Product-based-Companies-for-IoT-Solutions-Architects-in-India-01.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Best 15 Product-based Companies for IoT Solutions Architects in India</h5>
              <p className="card-text">The domain of the Internet of Things (IoT) has become a pivotal element in driving technological innovation across various industries. </p>
              <a href="#" className="btn btn-primary">Read More </a>
            </div>
        </div>
        <div className="card">
          <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/top_product_based_companies_that_don_t_require_coding.webp" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Top 5 Product-Based Companies That Don’t Require Coding</h5>
              <p className="card-text">Every one of us wants to work in top product-based companies, Right? But, Not everyone has great coding skills. What if I tell you, you can get into it without coding knowledge? Sounds Great, Right? Anyone can apply for these job roles irrespective of their educational background.</p>
              <a href="#" className="btn btn-primary">Read More </a>
            </div>
        </div>
        <div className="card">
          <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-1-1-2048x1072.webp" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">12 Key Elements For A Professional UI/UX Designer Resume Guide</h5>
              <p className="card-text">The field of UI/UX designing is all about innovation and creativity. People should understand the</p>
              <a href="#" className="btn btn-primary">Read More </a>
            </div>
        </div>
        <div className="card">
          <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Kanban-vs.-Scrum-Choosing-the-Right-Agile-Framework-1.webp" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Kanban vs. Scrum: Choosing the Right Agile Framework for Your Project</h5>
              <p className="card-text">Imagine you’re building a house. If you use the wrong tools, it’s going to take longer, maybe fall apart, and leave everyone pretty frustrated. The same goes for picking a project management method. If it doesn’t fit the project, things can get messy, deadlines might be missed, and nobody likes that.</p>
              <a href="#" className="btn btn-primary">Read More </a>
            </div>
        </div>
        <div className="card">
          <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-React-vs-Angular-vs-Vue-Choosing-the-Right-Framework-1.webp" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">React vs Angular vs Vue: Choosing the Right Framework [2023]</h5>
              <p className="card-text">Choosing a web development framework is a critical decision for developers. With so many options</p>
              <a href="#" className="btn btn-primary">Read More </a>
            </div>
        </div>
        <div className="card">
          <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Machine-Learning-Engineer-Resume-Guide.webp" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Machine Learning Engineer Resume Guide: 11 Important Things To Include!</h5>
              <p className="card-text">The current technological era is full of competition and those who have profound skillset are</p>
              <a href="#" className="btn btn-primary">Read More </a>
            </div>
        </div>
        <div className="card">
          <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/How-Post-Pandemic-Era-Reshaped-Tech-Recruitment-01.webp" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">How Post-Pandemic Era Reshaped Tech Recruitment</h5>
              <p className="card-text">In recent years, to be more specific, starting from the year 2020, there have been</p>
              <a href="#" className="btn btn-primary">Read More </a>
            </div>
        </div>
        <div className="card">
          <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Best-DevOps-Tools-to-Master.webp" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">10 Best DevOps Tools to Master in 2023</h5>
              <p className="card-text">A DevOps Engineer must be aware of the latest trends, the tech industry follows. You</p>
              <a href="#" className="btn btn-primary">Read More </a>
            </div>
        </div>
        <div className="card">
          <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Mechanical-Engineering-Resume-Important-Things-To-Look-Out-For.webp" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Mechanical Engineering Resume: 9 Important Things To Look Out For</h5>
              <p className="card-text">With the development of technology, most of us started forgetting about mechanical engineering which pioneered</p>
              <a href="#" className="btn btn-primary">Read More </a>
            </div>
        </div>
        <div className="card">
          <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/feature.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Continuous Integration vs Continuous Deployment in DevOps (A Comprehensive Guide)</h5>
              <p className="card-text">DevOps is a way of making software that brings together the people who create it</p>
              <a href="#" className="btn btn-primary">Read More </a>
            </div>
        </div>
        <div className="card">
          <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-2-2048x1072.webp" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Blockchain Developer Resume Guide: 11 Hot Tips to Make It Professional</h5>
              <p className="card-text">What if I say that blockchain is going to be the next big thing? And</p>
              <a href="#" className="btn btn-primary">Read More </a>
            </div>
        </div>
        <div className="card">
          <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/1-2048x1072.webp" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">A Compelling Ethical Hacker Resume: 10 Tips and Tricks to Follow</h5>
              <p className="card-text">With the growing concerns of digital security increasing day by day, organizations turn to ethical</p>
              <a href="#" className="btn btn-primary">Read More </a>
            </div>
        </div>
        <div className="card">
          <img src="https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Entry-Level-Tech-Jobs-with-No-Experience-Needed-2023-1.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Top Entry-Level Tech Jobs with No Experience Needed in 2023</h5>
              <p className="card-text">Are you a recent graduate from a non-technical background, who wants to dive into the</p>
              <a href="#" className="btn btn-primary">Read More </a>
            </div>
        </div>
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
    </>
  )
}

export default Dashboard