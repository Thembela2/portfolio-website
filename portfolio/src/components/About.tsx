import { useState } from "react";

function About() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section className="about" id="about">
      <h1 className="about-heading">About Me</h1>

      <p className="about-intro">
        I'm a curious and motivated aspiring software developer who enjoys solving
        problems and building systems that actually work. With a background in web
        development and systems design, I focus on creating clean, usable, and
        meaningful solutions. Im constantly learning and exploring new areas in
        tech while valuing growth, collaboration, and real-world impact.
      </p>

      {/* Tabs */}
      <div className="tab-titles">
        {["education", "experience", "career"].map((tab) => (
          <button
            key={tab}
            className={`tab-link ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "education" && "Education"}
            {tab === "experience" && "Community Engagement"}
            {tab === "career" && "Career Interests"}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "education" && (
          <ul>
            <li>
              <span>National Senior Certificate | Completed</span>
              <br />
              <strong>Subjects:</strong>
              <ul>
                <li>English Home Language</li>
                <li>IsiXhosa First Additional Language</li>
                <li>Mathematics</li>
                <li>Accounting</li>
                <li>Business Studies</li>
                <li>Life Sciences</li>
                <li>Life Orientation</li>
              </ul>
            </li>

            <li>
              <span>
                Bachelor of Commerce (Information Systems and Economics) | Completed
              </span>
              <br />
              <strong>Key coursework:</strong>
              <ul>
                <li>Microeconomics, Macroeconomics, Public Finance, Econometrics</li>
                <li>
                  Money, Banking and International Finance, Environmental Economics
                </li>
                <li>
                  Information Systems Analysis, User Interface Design, Database
                  Theory, SQL
                </li>
                <li>
                  HTML, CSS, JavaScript, Project Communications, IT Project
                  Management, Big Data & NoSQL
                </li>
                <li>
                  Digital Transformation, Software Quality, Data Analytics, PHP
                </li>
              </ul>
            </li>
          </ul>
        )}

        {activeTab === "experience" && (
          <ul>
            <li>
              <span>Peer Mentor</span>
              <br />
              <strong>Responsibilities:</strong>
              <ul>
                <li>
                  Offered comprehensive support to first-year students at Rhodes
                  University, assisting with their transition into university life.
                </li>
                <li>
                  Provided guidance on academic coursework, study strategies, and
                  campus resources.
                </li>
                <li>
                  Fostered a supportive environment to promote student well-being.
                </li>
              </ul>
            </li>

            <li>
              <span>Education Mentor</span>
              <br />
              <strong>Responsibilities:</strong>
              <ul>
                <li>
                  Supported matric students in their final year of high school by
                  offering academic guidance, emotional support, and practical
                  strategies.
                </li>
                <li>
                  Contributed to student success by fostering a structured and
                  encouraging learning environment.
                </li>
              </ul>
            </li>

            <li>
              <span>Academic Tutor</span>
              <br />
              <strong>Responsibilities:</strong>
              <ul>
                <li>
                  Provided personalized instruction and academic support to matric
                  students at GADRA Matric School.
                </li>
                <li>
                  Facilitated one-on-one and group tutoring sessions to improve
                  understanding of economic principles.
                </li>
                <li>Helped students prepare for exams.</li>
              </ul>
            </li>

            <li>
              <span>Literacy Advocate / Mentor</span>
              <br />
              <strong>Responsibilities:</strong>
              <ul>
                <li>
                  Engaged with children in a play-based program focused on critical
                  thinking, motor skills, and school readiness.
                </li>
                <li>
                  Facilitated interactive activities to support cognitive and
                  physical development.
                </li>
              </ul>
            </li>
          </ul>
        )}

        {activeTab === "career" && (
          <ul className="career-list">
             <li>
              <span>Software Engineer</span>
              <p className="why">
                My interest in software development grew during system development
                coursework, where I worked across the full project lifecycle and
                learned the impact of good structure and design. Working on real systems 
                taught me the value of collaboration, creativity, and user-focused design. 
                I enjoy turning ideas into functional solutions.
              </p>
            </li>
            
            <li>
              <span>Cybersecurity Analyst</span>
              <p className="why">
                Through my undergraduate system development projects, I realised
                that even with our best efforts in securing systems using PHP,
                vulnerabilities remained. This highlighted the importance of
                cybersecurity and motivated me to help build safer digital spaces.
              </p>
            </li>

            <li>
              <span>Data Analyst</span>
              <p className="why">
                Studying economics sparked my interest in trends and
                decision-making. I enjoy using data to uncover insights and
                support informed choices.
              </p>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
}

export default About;
