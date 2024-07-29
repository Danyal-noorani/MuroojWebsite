interface Props {
  Image: string;
  Title: string;
  description: string;
}
const list: string[] = [
  "bg-[url('assets/money.png')]",
  "bg-[url('assets/analytics.png')]",
  "bg-[url('assets/idea.png')]",
];

export const Service = (props: Props) => {
  list;
  return (
    <>
      <div className="py-[10%] h-full ">
        <div className="bg-[#a9fcff] rounded-full w-[10vw] h-[10vw] content-center">
          <div
            className={` bg-[url('${props.Image}')] bg-contain bg-center bg-no-repeat rounded-3xl h-[5vw] object-cover `}
          />
        </div>
        <div className="px-5 py-10">
          <h1 className="font-serif text-3xl italic">{props.Title}</h1>
          <div className="py-3 my-8 w-fit  font-semibold text-lg rounded-2xl hover:scale-110 transition duration-500">
            {props.description}
          </div>
        </div>
      </div>
    </>
  );
};
