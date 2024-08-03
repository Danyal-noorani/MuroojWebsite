export const Hero = () => {
  return (
    <div
      className="bg-[url('assets/Rig.jpg')] bg-cover bg-[#00000093] bg-blend-overlay bg-center"
      id="home"
    >
      <div className="py-48 px-[6vw] ">
        <h1 className="text-[3vw] text-white font-serif max-md:text-[8vw]">
          WE UNDERSTAND YOUR <br />
          REQUIRMENTS LIKE NO ONE <br />
          DOES
          <br />
          <br />
        </h1>
        <br />
        <div className="bg-yellow-400 font-semibold text-lg px-4 py-4 w-40 flex justify-center max-md:text-sm rounded-xl hover:scale-110 transition duration-300 ">
          Discover more
        </div>
      </div>
    </div>
  );
};
