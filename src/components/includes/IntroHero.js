import React from "react"
import Pdf from "../KorhanEser-CV-2020.pdf";
import scrollTo from 'gatsby-plugin-smoothscroll';

const IntroHero = () => {
  return (
    <div className="mt-20 max-w-screen-md ">
      <div className="text-3xl font-semibold leading-tight">
        Korhan Eser
      </div>
      <div className="text-2xl leading-tight">
        Digital Product Designer
      </div>

      <div className="font-semibold tracking-tight text-2xl"> </div>
      <div className="pt-8 text-xl ">
        I am a digital product designer with development in mind and users at his focus. I always create feasable products where it's easy to sustain for the future releases. I have worked for several different industries such as automative, telecommunications, e-commerce, fintech and many more. 
      </div>
      <div className="flex mt-8 space-x-4">
        <a href={Pdf} target="blank">
        
        <div className="inline-block py-2 px-4 border border-gray-400 text-gray-800 rounded-lg text-base font-semibold">
        Download CV
        </div>
        </a>
        <button onClick={() => scrollTo('#scrollContact')} className="inline-block py-2 px-4 border border-gray-400 text-gray-800 rounded-lg text-base font-semibold">
        Contact Me
        </button>
      </div>
    </div>
  )
}

export default IntroHero
