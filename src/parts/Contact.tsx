export const Contact = () => {
  return (
    <>
      <div className="bg-[#3e8cc82a]" id="contact">
        <h1 className="text-[2.5vw] max-md:text-[8vw] max-md:text-center font-sans font-bold text-[#161e43] px-14 py-14  ">
          DROP-BY TO GRAB A COFFEE WITH US
        </h1>
        <div className=" px-[1rem] py-[1rem] grid grid-cols-2">
          <div className="px-10 py-14 text-[1.5vw]  max-md:text-[5vw] font-bold text-[#161e43] font-sans grid text-center col-span-2">
            <div className="flex justify-around">
              <h2>Location</h2>
              {/* <div className=" max-md: max-md:h-[10vh] border-l-[1.5px] border-[#3e8dc8] lg:hidden"></div> */}

              <h2>Reach Out</h2>
            </div>
          </div>
          <div className="grid-cols-1  justify-center flex">
            <iframe
              className="rounded-lg max-md:w-[45vw] max-md:h-[45vw]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.649830575609!2d55.63291637591741!3d25.315966426878777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f36471c995d3%3A0x11c8398da2f1785b!2sMurooj%20Lubricants%20Tr.%20LLC!5e0!3m2!1sen!2sae!4v1717602390253!5m2!1sen!2sae"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
          <div className="">
            <p className=" font-semibold text-center text-[1.5vw] max-md:text-[4vw] h-full px-[1vw] py-[15%]">
              1433, Al Sajja Industrial Area, Sharjah. United Arab Emirates
              (U.A.E.)
              <br />
              <br />
              <a
                href="mailto:info@muroojlubricants.com"
                className="hover:text-[2vw] text-[1.5vw] max-md:text-[4vw]  max-md:hover:text-[5vw] transition-all duration-500"
              >
                Drop Us An Email : info@sbadme.com
              </a>
              <br />
              <br />
              <div className="text-[1.5vw] max-md:text-[4vw]">
                Talk To Us :
                <a
                  href="tel:+97165244899"
                  className="hover:text-[2vw] text-[1.5vw] max-md:text-[4vw]  max-md:hover:text-[5vw] transition-all duration-500 px-2"
                >
                  +971-6-524-4899
                </a>
                /
                <a
                  href="tel:+971502033795"
                  className="hover:text-[2vw] text-[1.5vw]  max-md:text-[4vw] max-md:hover:text-[5vw] transition-all duration-500 px-2"
                >
                  +971-50-203-3795
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
