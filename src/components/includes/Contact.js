import React from "react"

const Contact = () => {
  return (
    <div id="scrollContact" className="-mx-12 rounded-none md:mx-0 p-12 mt-12  bg-gray-200 border border-gray-300 md:rounded-lg text-gray-700">
      <h1 className="mb-4 text-center  font-semibold">Contact and Availability</h1>


      <div className="mt-4 space-x-4 flex justify-center">
        
       
        <div
        className="  py-2 px-4 flex items-center border bg-white border-gray-400 rounded-full"
        style={{
        width: "max-content",
        }}
        >
          <div className="mr-2 w-4 h-4 rounded-full bg-green-600 "> </div>
          <div className="font-bold text-gray-700"> Avalaible Now! </div>
        </div>
      </div>

        <hr className="mt-8 border-gray-600"/>

        <div className="my-6 text-center text-base">If you don't want to use the form, feel free to <a href="mailto:&#107;&#111;&#114;&#104;&#097;&#110;&#101;&#115;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;" className="underline font-semibold">drop me a line</a>  </div>

        <hr className="mb-2 border-gray-600"/>


      <form
        method="post"
        action="https://getform.io/f/2bad3305-a168-40c9-bcd1-9c3097c97a45"
        className=" pt-12"
      >
        <label className="formName">

          <div>
              Your Name
          </div>

          <input type="text" name="name" id="name" className="formField"/>

        </label>

        <div className="formName">
        <label>
        
        Your Email Address <span className="opacity-50">(so I can get back to you)</span>
        
        
        <input type="email" name="email" id="email" className="formField" />
        
        </label>
        </div>

        <label>

        <div className="formName">
              Subject
          </div>

          <input type="text" name="subject" id="subject" className="formField"/>

        </label>

        <label>

          <div className="formName">
              Your Message
          </div>

          <textarea name="message" id="message" rows="5" className="formField"/>

        </label>

        <button 
            type="submit"
            className="mt-6 py-2 px-4 bg-white rounded-lg font-semibold">
                Send
        </button>

      </form>

    </div>
  )
}

export default Contact
