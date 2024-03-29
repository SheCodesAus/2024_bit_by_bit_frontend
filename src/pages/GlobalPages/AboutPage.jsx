import React from "react";
import { useNavbarContext } from "../../components/NavBarContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin, faSlack } from "@fortawesome/free-brands-svg-icons";
import "../../index.css";


function AboutPage() {

  const { isNavbarOpen } = useNavbarContext();

  return (
    <main className={`flex flex-col items-center justify-center min-h-screen ${isNavbarOpen ? "ml-60" : "ml-20"}`}>

      <section className="border-b p-4 border-gray-300 flex flex-col items-center pt-16">
        <img id="SCimage9" src="src/assets/SCimage6.png" className="w-2/3" />
        <div className="flex justify-center border-b p-4 border-gray-300 mb-4">
          <h1 className="font-bold text-5xl">ABOUT</h1>
        </div>
        <div className="flex flex-col justify-center w-4/5 space-x-2">
          <h3 className="text-center border-y border-gray-300 px-4 py-1 font-bold">WHO WE ARE</h3>
          <p className="flex justify-center py-4">At She Codes, our mission is to empower and inspire 100,000 women by the year 2025.
            We achieve this by providing women with the essential technical skills they need,
            guiding them towards rewarding career opportunities, and fostering valuable partnerships
            within our community. Together, we're dedicated to creating a supportive
            environment where women can thrive in the tech industry and beyond.</p>
        </div>
      </section>

      <section className="items-center">

        <section id="mentoring-section" className="flex flex-col items-center py-8 border-dashed border-b border-purple-200">
          <h2 className="text-center font-bold text-2xl">MENTORING WITH US</h2>
          <figure>
            <div className="px-4 py-4 flex text-center">
              <div className="w-1/3 h-32 border border-orange-300">
                <h1>Mentor fact/stats 1</h1>
              </div>
              <div className="w-1/3 border border-orange-300">
                <h1>Mentor fact/stats 2</h1>
              </div>
              <div className="w-1/3 border border-orange-300">
                <h1>Mentor fact/stats 3</h1>
              </div>
            </div>
          </figure>

          <article className="flex flex-col text-center w-11/12 border-solid border border-gray-300">
            <div className="py-4">
              <h1 className="text-center font-bold text-xl">MENTORING INFO</h1>
              <p>enter details here</p>
              <p>enter details here</p>
              <p>enter details here</p>
            </div>
            <div className="py-4 border-solid border-t border-orange-300">
              <h1 className="text-center font-bold text-xl pt-4">RESOURCES & LINKS</h1>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                {/* Add more features as needed */}
              </ul>
            </div>
          </article>
        </section>

        <section id="program-details" className="w-full max-w-4xl mx-auto px-4 py-4 border-dashed border-b border-purple-w=200">
          <h2 className="text-center font-bold text-2xl pt-4">PROGRAM DETAILS</h2>

          <article className="flex flex-row items-center py-8">
            <div className="w-1/2">
              <h1 className="font-bold text-l pt-4">PLUS PROGRAM</h1>
              <p>The Plus program caters to those aspiring for a tech career but feeling uncertain about their starting point.
                If you crave the flexibility of remote work, wish to delve into website design, and want to grasp the intricacies of
                tech terminology, then Plus is tailor-made for you! Spanning six months on a part-time basis across various states in Australia,
                this program is designed to turbocharge your tech journey, linking you with industry experts and offering valuable post-program job prospects.
              </p>
            </div>
            <div className="size-1/2 px-4">
              <img id="SCimageA" src="src/assets/SCimageA.jpeg" />
            </div>
          </article>

          <article className="flex flex-row items-center py-8">
            <div className="size-1/2 px-4">
              <img id="SCimage1" src="src/assets/SCimage1.jpeg" />
            </div>
            <div className="w-1/2">
              <h1 className="font-bold text-l pt-4">ONE DAY WORKSHOP</h1>
              <p>Join us for our free one-day workshops held across Australia, welcoming women of all ages and backgrounds.
                Our workshops aim to ignite your interest in coding, offering self-paced tutorials tailored to guide you in creating
                your own website or game within a day. Plus, enjoy complimentary lunch and cupcakes courtesy of our generous sponsors
                and partners. Come discover the joy of coding with us!
              </p>
            </div>
          </article>

          <article className="flex flex-row items-center py-8">
            <div className="w-1/2">
              <h1 className="font-bold text-l pt-4">FLASH</h1>
              <p>Flash is a concise one-week program designed to introduce the fundamental concepts of emerging tech fields. Led by industry
                experts, we offer beginner-friendly learning approaches. Moreover, participants have the chance to pursue further learning
                after the program, should they discover a passion for tech! Flash offers women an accessible pathway to explore the tech
                industry's suitability for them, offering clarity before committing to long-term programs or career transitions.
              </p>
            </div>
            <div className="size-1/2 px-4">
              <img id="SCimageD" src="src/assets/SCimageD.jpeg" />
            </div>
          </article>
        </section>

        <section id="contact-section" className="flex flex-col justify-center px-4 py-4">
          <h1 className="text-center font-bold text-3xl pt-4">CONTACT US</h1>
          <p className="flex flex-col text-center py-4">For any mentoring questions or further information,<br /> you can reach out to us on our social platforms by clicking the icons below:</p>
          <div id="social" className="text-center space-x-4">
            <a href="https://www.facebook.com/shecodesaustralia/"> <FontAwesomeIcon icon={faFacebook} size="3x" /></a>
            <a href="https://www.linkedin.com/company/shecodesaustralia/"> <FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
            <a href="https://shecodesaus.slack.com/ssb/redirect"> <FontAwesomeIcon icon={faSlack} size="3x" /></a>
            {/* <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fshecodesaus"><FontAwesomeIcon icon={faTwitter} size="3x" /></a> */}
            <a href="https://www.instagram.com/shecodesaus/?hl=en"><FontAwesomeIcon icon={faInstagram} size="3x" /></a>
          </div>
        </section>

      </section>

    </main>
  );
}

export default AboutPage;