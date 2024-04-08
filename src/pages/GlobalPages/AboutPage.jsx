import React from "react";
import { useNavbarContext } from "../../components/NavBarContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";
import "../../index.css";
import { Link } from "react-router-dom";

// COMPONENTS
import ButtonElement from "../../components/GlobalElements/Button";

function AboutPage() {
  const { isNavbarOpen } = useNavbarContext();

  return (

    <main className={`flex flex-col items-center justify-center min-h-screen ${isNavbarOpen ? "ml-60" : "ml-20"}`}>

      <style>
        {`::-webkit-scrollbar {width: 8px;} ::-webkit-scrollbar-track {background: #ffffff;} ::-webkit-scrollbar-thumb {background-color: orange; border-radius: 10px; border: 2px solid #ffffff;}`}
      </style>

      <section className="flex flex-col items-center pt-16">
        <img
          id="SCimage9"
          src="/imgs/SCbanner19.jpg"
          className="w-full px-4 h-auto object-cover "
        />
        <div className="flex justify-center p-4 border-gray-300 mb-4">
          <h1 className="font-bold text-5xl">ABOUT</h1>
        </div>
        <div className="flex flex-col justify-center w-3/4 space-x-2">
          <h3 className="text-center border-y border-gray-300 px-4 py-1 font-bold text-2xl">
            WHO WE ARE
          </h3>
          <p className="flex justify-center py-4">
            At She Codes, our mission is to empower and inspire 100,000 women by
            the year 2025. We achieve this by providing women with the essential
            technical skills they need, guiding them towards rewarding career
            opportunities, and fostering valuable partnerships within our
            community. Together, we're dedicated to creating a supportive
            environment where women can thrive in the tech industry and beyond.
          </p>
        </div>
      </section>

      <section className="items-center">
        <section
          id="mentoring-section"
          className="flex flex-col items-center py-8 w-full"
        >
          <h2 className="text-center border-y border-gray-300 px-4 py-1 font-bold text-2xl w-full">
            MENTORING WITH US
          </h2>
          <figure className="w-full">
            <div className="flex flex-col sm:flex-row justify-center text-center p-4 w-full">
              <div className="w-full sm:w-1/3 h-auto border-dotted border-2 border-orange-300 flex flex-col justify-center p-4 sm:mb-0">
                <span className="font-extrabold text-3xl block">329</span>
                <span className="font-semibold text-lg">
                  MENTORS IN THE SHE CODES COMMUNITY
                </span>
              </div>
              <div className="w-full sm:w-1/3 h-auto border-dotted border-2 border-orange-300 flex flex-col justify-center p-4 sm:mb-0">
                <span className="font-extrabold text-3xl block">72</span>
                <span className="font-semibold text-lg">
                  PAID MENTORS LAST YEAR
                </span>
              </div>
              <div className="w-full sm:w-1/3 h-auto border-dotted border-2 border-orange-300 flex flex-col justify-center p-4 mb-4 sm:mb-0">
                <span className="font-extrabold text-3xl block">11,922</span>
                <span className="font-semibold text-lg">
                  HOURS SPENT MENTORING IN 2022/23
                </span>
              </div>
            </div>
          </figure>

          <article className="flex flex-col text-center w-11/12 border-solid border border-gray-300">
            <div className="p-4">
              <h1 className="text-center font-bold text-xl">
                OUR MENTORS ARE...
              </h1>
              <p>Willing to share their story.</p>
              <p>Approachable and patient.</p>
              <p>Contribute to improving the diversity in our industry</p>
            </div>
            <div className="p-4 border-solid border-t border-orange-300">
              <h1 className="text-center font-bold text-xl pt-4">
                BENEFITS OF MENTORING
              </h1>
              <ul>
                <li>Contribute to improving the diversity in our industry</li>
                <li>Grow your own network by meeting other developers</li>
                <li>Develop your communication skills</li>
                <li>Improve your own technical skills</li>
                {/* Add more features as needed */}
              </ul>
            </div>
          </article>
        </section>

        <section
          id="program-details"
          className="w-full max-w-4xl mx-auto px-4 py-4 "
        >
          <h2 className="text-center border-y border-gray-300 px-4 py-1 font-bold text-2xl">
            DOWNLOADS
          </h2>
          <div className="flex flex-col sm:flex-row items-center py-8 justify-center">
            <a
              className="inline-flex w-full justify-center rounded-md mt-2  px-3 py-2 bg-orange-500 px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-purple-500 sm:ml-3 sm:w-auto"
              href="./../public/downloads/She Code - Code of Conduct.pdf"
              target="_blank"
            >
              Code of Conduct
            </a>
            <a
              className="inline-flex w-full justify-center rounded-md mt-2 px-3 py-2 bg-orange-500 px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-purple-500 sm:ml-3 sm:w-auto"
              href="./../public/downloads/She Codes - Mentor Guidelines.pdf"
              target="_blank"
            >
              Mentor Guidlines
            </a>
          </div>
        </section>

        <section
          id="program-details"
          className="w-full max-w-4xl mx-auto px-4 py-4"
        >
          <h2 className="text-center border-y border-gray-300 px-4 py-1 font-bold text-2xl">
            PROGRAM DETAILS
          </h2>

          {/* PLUS PROGRAM */}
          <article className="flex flex-col sm:flex-row items-center py-8">
            <div id="PLUS PROGRAM" className="w-full sm:w-1/2 px-4 mb-4 sm:mb-0">
              <h1 className="font-bold text-l pt-4">PLUS PROGRAM</h1>
              <p>
                The Plus program caters to those aspiring for a tech career but
                feeling uncertain about their starting point. If you crave the
                flexibility of remote work, wish to delve into website design,
                and want to grasp the intricacies of tech terminology, then Plus
                is tailor-made for you! Spanning six months on a part-time basis
                across various states in Australia, this program is designed to
                turbocharge your tech journey, linking you with industry experts
                and offering valuable post-program job prospects.
              </p>
            </div>
            <div className="size-auto sm:size-1/2 px-4">
              <img
                id="SCimageA"
                src="https://github.com/SheCodesAus/2024_bit_by_bit_frontend/blob/frontydevelopment/src/assets/SCimageA.jpeg?raw=true"
              />
            </div>
          </article>

          {/* ONE DAY WORKSHOP */}
          <article className="flex flex-col sm:flex-row items-center py-8 px-4 shadow-md">
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0 order-2 sm:order-1">
              <img id="SCbanner1" src="/imgs/SCbanner1.jpg" />
            </div>
            <div id="ONE DAY WORKSHOP" className="w-full sm:w-1/2 order-1 sm:order-2 mb-4 sm:mb-0 px-0 sm:px-4">
              <h1 className="font-bold text-l pt-4">ONE DAY WORKSHOP</h1>
              <p>
                Join us for our free one-day workshops held across Australia,
                welcoming women of all ages and backgrounds. Our workshops aim
                to ignite your interest in coding, offering self-paced tutorials
                tailored to guide you in creating your own website or game
                within a day. Plus, enjoy complimentary lunch and cupcakes
                courtesy of our generous sponsors and partners. Come discover
                the joy of coding with us!
              </p>
            </div>
          </article>

          {/* FLASH */}
          <article className="flex flex-col sm:flex-row items-center py-8">
            <div id="FLASH" className="w-full sm:w-1/2 px-4 mb-4 sm:mb-0">
              <h1 className="font-bold text-l pt-4">FLASH</h1>
              <p>
                Flash is a concise one-week program designed to introduce the
                fundamental concepts of emerging tech fields. Led by industry
                experts, we offer beginner-friendly learning approaches.
                Moreover, participants have the chance to pursue further
                learning after the program, should they discover a passion for
                tech! Flash offers women an accessible pathway to explore the
                tech industry's suitability for them, offering clarity before
                committing to long-term programs or career transitions.
              </p>
            </div>
            <div className="size-auto sm:size-1/2 px-4">
              <img
                id="SCimage1"
                src="https://github.com/SheCodesAus/2024_bit_by_bit_frontend/blob/frontydevelopment/src/assets/SCimage1.jpeg?raw=true"
              />
            </div>
          </article>
        </section>

        <section
          id="contact-section"
          className="flex flex-col justify-center px-4 py-4 border-double border-2 border-orange-300 mb-8"
        >
          <h1 className="text-center font-bold text-3xl pt-4">CONTACT US</h1>
          <p className="flex flex-col text-center py-4">
            For any mentoring questions or further information,
            <br /> you can reach out to us on our social platforms by clicking
            the icons below:
          </p>
          <div id="social" className="text-center space-x-4">
            <a href="https://www.facebook.com/shecodesaustralia/">
              {" "}
              <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
            <a href="https://www.linkedin.com/company/shecodesaustralia/">
              {" "}
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
            <a href="https://shecodesaus.slack.com/ssb/redirect">
              {" "}
              <FontAwesomeIcon icon={faSlack} size="3x" />
            </a>
            {/* <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fshecodesaus"><FontAwesomeIcon icon={faTwitter} size="3x" /></a> */}
            <a href="https://www.instagram.com/shecodesaus/?hl=en">
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}

export default AboutPage;
