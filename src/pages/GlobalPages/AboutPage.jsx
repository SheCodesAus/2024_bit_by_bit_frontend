import React from "react";
import { useNavbarContext } from "../../components/NavBarContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faSlack
} from "@fortawesome/free-brands-svg-icons";
import "../../index.css";


function AboutPage()  {

  const { isNavbarOpen } = useNavbarContext();
  return (
    <main className={`min-h-screen ${isNavbarOpen ? "ml-60" : "ml-20"}`}>
    <div className="px-10 flex flex-col items-center">
      <div className="w-full bg-white border-t border-b p-4 shadow-sm" style={{ borderColor: '#00bcd4' }}>
          <h1 className="text-4xl font-bold text-slate-800 underline text-center mb-5">WHO WE ARE</h1>
      </div>

      <div className="flex flex-col items-center w-full">
        <br/>
        {/* <div className="md:w-1/3 px-4 mb-4 md:mb-0">  */}
        {/* Left Side */}
          <div className="about-image">
              <img id="SCimage9" src="src/assets/SCimage6.png" />
          </div>
        {/* </div>  */}
          
        {/* <div className="md:w-2/3 px-4">  */}
        {/* Right Side */}
          <section className="intro-section">
            <h2>ABOUT</h2>
            <div className="container">
              <p>At She Codes, our mission is to empower and inspire 100,000 women by the year 2025. 
              We achieve this by providing women with the essential technical skills they need,
              guiding them towards rewarding career opportunities, and fostering valuable partnerships 
              within our community. Together, we're dedicated to creating a supportive 
              environment where women can thrive in the tech industry and beyond.</p>
            </div>
          </section>
          <section className="mentoring-section">
            <h2>MENTORING WITH US</h2>
            <div>
             <div>
              <h1>Mentor fact/stats</h1>
              </div>
              <div>
              <h1>Mentor fact/stats</h1>
              </div>
              <div>
              <h1>Mentor fact/stats</h1>
              </div>
            </div>
            <div>
            <div>
              <h1>Mentoring info</h1>
              </div>
              <div>
              <h1>Resources and links</h1>
              <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              {/* Add more features as needed */}
            </ul>
              </div>
            </div>
            </section>
          <section className="program-details">
            <h2>PROGRAM DETAILS</h2>
            <div>
              <div>
              <h1>PLUS PROGRAM: SIX MONTH, TECH IMMERSION PROGRAM</h1>
              <p>The Plus program caters to those aspiring for a tech career but feeling uncertain about their starting point. 
                If you crave the flexibility of remote work, wish to delve into website design, and want to grasp the intricacies of
                tech terminology, then Plus is tailor-made for you! Spanning six months on a part-time basis across various states in Australia,
                this program is designed to turbocharge your tech journey, linking you with industry experts and offering valuable post-program job prospects.
              </p>
              </div>
              <div><img id="SCimageA" src="src/assets/SCimageA.jpeg" /></div>
            </div>
            <div>
            <div><img id="SCimage1" src="src/assets/SCimage1.jpeg" /></div>
              <div>
              <h1>ONE DAY WORKSHOP</h1>
              <p>Join us for our free one-day workshops held across Australia, welcoming women of all ages and backgrounds. 
                Our workshops aim to ignite your interest in coding, offering self-paced tutorials tailored to guide you in creating 
                your own website or game within a day. Plus, enjoy complimentary lunch and cupcakes courtesy of our generous sponsors 
                and partners. Come discover the joy of coding with us!
              </p>
              </div>
            </div>
            <div>
              <div>
              <h1>FEMALE FOUNDERS: five week, entrepreneurial program</h1>
              <p>The Female Founders program spans five weeks and is tailored for ambitious women entrepreneurs seeking to enhance their
                 skills as founders. Designed for those with aspirations of building thriving businesses, this program provides essential 
                 knowledge and skills necessary for success. Participants will gain a deep understanding of vital business concepts and
                 forge connections with influential mentors, experienced investors, and top-tier advisors within the industry.
              </p>
              </div>
              <div><img id="SCimage2" src="src/assets/SCimage2.jpeg" /></div>
            </div>
            <div>
            <div><img id="SCimageD" src="src/assets/SCimageD.jpeg" /></div>
              <div>
              <h1>Fash: ONE WEEK TECH TASTER</h1>
              <p>Flash is a concise one-week program designed to introduce the fundamental concepts of emerging tech fields. Led by industry
                 experts, we offer beginner-friendly learning approaches. Moreover, participants have the chance to pursue further learning 
                 after the program, should they discover a passion for tech! Flash offers women an accessible pathway to explore the tech
                 industry's suitability for them, offering clarity before committing to long-term programs or career transitions.
              </p>
              </div>
            </div>

          </section>
          <section className="contact-section">
            <h2>Contact Us</h2>
            <div class="contact" id = "social">
                <h1>Have mentoring inquiries or need any information, you can find us on </h1>
                <a href="https://www.facebook.com/shecodesaustralia/"> <FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                <a href="https://www.linkedin.com/company/shecodesaustralia/"> <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                <a href="https://shecodesaus.slack.com/ssb/redirect"> <FontAwesomeIcon icon={faSlack} size="2x" /></a>
                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fshecodesaus"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                <a href="https://www.instagram.com/shecodesaus/?hl=en"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
            </div>
          </section>
        </div>
      </div>
     {/* </div> */}
    </main>
    );
}

export default AboutPage;