export const Vision = () => {
  return (
    <div className="bg-[#3e8cc82a]" id="vision">
      <div className=" inline-flex my-12 ">
        <div className="w-[50%] mx-[5%] my-[5%]  ">
          <h1 className="text-5xl  px-[2%] py-[2%] font-serif">OUR VISION</h1>
          <p className="px-[2%] py-[2%]">
            Our goal is to be recognized as an ethical trader of high-quality
            lubricants, grease, base oil, and a wide range of other products. We
            are committed to creating innovative solutions that not only enhance
            equipment performance but also deliver significant operational
            efficiencies. By focusing on these efficiencies, we aim to
            positively impact our customers' bottom lines, ensuring they receive
            value beyond just the products themselves. Through our dedication to
            ethical practices and superior product quality, we strive to build
            long-lasting relationships with our customers and partners,
            fostering trust and reliability in every interaction. Our
            comprehensive approach to service and performance underscores our
            commitment to excellence and customer satisfaction.
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
