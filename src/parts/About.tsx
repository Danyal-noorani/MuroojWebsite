export const About = () => {
  return (
    <div className="bg-[#3e8cc82a]" id="about">
      <div className=" inline-flex my-12 ">
        <div className="w-[50%] mx-[5%] my-[5%]  ">
          <h1 className="text-[3vw] max-md:text-[8vw]  px-[2%] py-[2%] font-serif">
            WHO ARE WE?
          </h1>
          <p className="px-[2%] py-[2%] max-md:text-[3vw]">
            Murooj Lubricants Tr. LLC established in the year 2018 with its
            Terminal & Office at SHARJAH (United Arab Emirates). Within a short
            span Murooj Lubricants has made its presence as one of the trusted
            traders of premium Lubricants, Grease, Base Oil & many more. We are
            committed to providing the most technologically advanced Lubricants
            and Oils that are suitable for varied applications and industries.
            We leverage our wealth of experience to help our customers succeed
            in the marketplace by providing bespoke product solutions supported
            by excellent customer satisfaction. Allowing you to experience the
            highest quality and best service at your home country.
          </p>
        </div>
        <div className="w-[50%] inline-flex items-center justify-center">
          <div
            className={`h-[95%] w-[90%] bg-[url('assets/Oil_Bubble.jpg')] bg-cover bg-no-repeat rounded-3xl bg-center`}
          ></div>
        </div>
      </div>
    </div>
  );
};
