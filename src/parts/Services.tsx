import { Service } from "../components/Service";
export const Services = () => {
  return (
    <>
      <div className="" id="services">
        <div className=" mx-[5%] py-[5%]   ">
          <div>
            <h1 className="text-[3vw] max-md:text-[9vw] max-md:text-center font-serif ">
              WHAT WE DO?
            </h1>
          </div>
          <div className="grid gap-[5%] gap-y-2 max-lg:grid-cols-2 max-sm:grid-cols-1 grid-cols-3">
            <Service
              Image="assets/money.png"
              Title="Innovation"
              description="Fresh marketing strategies will be provided"
            />
            <Service
              Image="assets/idea.png"
              Title="Get Money's worth"
              description="Our company ensures that you get what you're paying for"
            />
            <Service
              Image="assets/analytics.png"
              Title="Strong Market Presence"
              description="Trusted Market Presence"
            />
          </div>
        </div>
      </div>
    </>
  );
};
