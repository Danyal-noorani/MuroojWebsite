export const Choose = () => {
  const items = [
    "Flexible and wide product assortment.",
    "High quality Lubricants, Grease & Base Oil",
    "Extended service and support",
    "Technical know-how and reliability",
    "Technical know-how and reliability",
    "Transparency",
  ];

  return (
    <div id="choose">
      <div className=" inline-flex my-12 ">
        <div className="w-[99vw] mx-[5%] my-[5%] ">
          <h1 className="text-[2.5vw] max-md:text-[7vw]  px-[2%] py-[2%] font-serif">
            WHY CHOOSE MUROOJ LUBRICANTS?
          </h1>
          <p className="px-[2%] py-[2%]">
            <ul className="list-disc px-20 max-md:px-8 text-[1.2vw] max-md:text-[4vw] font-medium">
              {items.map((item, index) => (
                <li className="py-2" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </p>
        </div>
        <div className="w-[90%] inline-flex items-center justify-center max-md:hidden">
          <div
            className={`h-[95%] w-[100%] bg-[url('assets/Service5.png')] bg-cover bg-no-repeat rounded-3xl bg-center`}
          ></div>
        </div>
      </div>
    </div>
  );
};
