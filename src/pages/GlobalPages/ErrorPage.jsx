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



function ErrorPage(){
    const { isNavbarOpen } = useNavbarContext();
    const bannerPath = "/imgs/SCbanner4.jpg";

    return(
        <main className={`flex flex-col items-center justify-center min-h-screen ${isNavbarOpen ? "ml-60" : "ml-20"}`}>

        <style>
          {`::-webkit-scrollbar {width: 8px;} ::-webkit-scrollbar-track {background: #ffffff;} ::-webkit-scrollbar-thumb {background-color: orange; border-radius: 10px; border: 2px solid #ffffff;}`}
        </style>

        <section className="border-b p-4 border-gray-300 flex flex-col items-center pt-16">
        <img src={bannerPath} className="w-full h-auto object-cover sm:h-96" />

     <div >
                <h1 className="font-bold">404</h1>
                <div className="flex justify-center pt-4">Oops, not quite finished but as a mentor you can help us shape the future tech stars to fix that..</div>
                <a className="inline-flex w-full justify-center rounded-md mt-2 px-3 py-2 bg-orange-500 px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-purple-500 sm:ml-3 sm:w-auto" href="/">You can start here!</a>
            </div>

        </section>
        </main>
    )
}

export default ErrorPage;
