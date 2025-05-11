type Props = {
  title: string;
  category: string;
  description: string;
  lastUpdate:string;
  img:string
};


function Posts({ title, category, description, lastUpdate, img }: Props) {
  return (
    <div className="h-80  w-7/8 md:w-7/20 m-7 md:m-10 md:mb-0 rounded-4xl mt-7 hover:border-4 hover:border-[#000] hover:cursor-pointer">
      <div className="h-48 rounded-t-4xl flex items-center justify-center bg-gradient-to-br from-[#434343] to-[#111111]">
        <img src={img} alt="dev" className="w-30 h-30" />
      </div>
      <div className="h-32 rounded-b-4xl bg-[#3D3D3D]">
        <div className="relative left-7">
          <h1 className="text-[#B0B0B0] w-8/10 md:w-4/10 font-semibold text-xl md:text-[15px] absolute top-5 md:top-7">
            {title}
          </h1>
          <h3 className="bg-[#4c4c4c] text-[#B0B0B0] w-15 rounded-full flex items-center justify-center absolute top-5 right-13 text-[13px]">
            {category}
          </h3>
          <h3 className="text-[#B0B0B0] w-9/10 md:w-8/10 font-medium text-[15px] md:text-[12px] opacity-80 absolute top-13 md:top-14">
            {description}
          </h3>
          <h3 className="text-[#B0B0B0] font-semibold w-8/10 text-[13px] md:text-[11px] opacity-70 absolute top-25">
            Last updated: {lastUpdate} ago
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Posts;
