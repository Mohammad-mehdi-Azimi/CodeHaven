import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gradient-to-r from-[#252525] to-[#121212] w-full h-30 flex items-center justify-center fixed top-0">
      <div className="w-7/8 h-20 flex flex-col">
        <div className="h-3/5 w-full flex items-center">
          <img
            src="/images/profile.jpg"
            alt="profile"
            className="w-13 h-13 rounded-full"
          />
          <div className="w-full flex items-center justify-between relative right-5">
            <h3 className="text-[#B0B0B0] text-[12px] md:text-[15px] font-semibold font-mono ml-7 hover:text-[#ff4f4f]">
              Mohammad-mehdi Azimi
            </h3>
            <h3 className="text-[#B0B0B0] text-[12px] md:text-[15px] font-semibold font-mono ml-5 hover:text-[#ff4f4f]">
              Front-End Devoper
            </h3>
            <h3 className="text-[#B0B0B0] text-[12px] md:text-[15px] font-semibold font-mono ml-5 hover:text-[#ff4f4f]">
              23/july/2005
            </h3>
            <Link to="https://github.com/Mohammad-mehdi-Azimi">
              <h3 className="text-[#B0B0B0] text-[12px] md:text-[15px] font-semibold font-mono ml-5 cursor-pointer hover:text-[#ff4f4f]">
                Github
              </h3>
            </Link>
          </div>
        </div>
        <div className=" h-2/5 w-full flex items-center mt-5">
          <h3 className="bg-[#4c4c4c] hover:bg-[#ff4f4f] w-17 rounded-full flex items-center justify-center mr-5 hover:cursor-pointer ">
            ALL
          </h3>
          <h3 className="bg-[#4c4c4c] hover:bg-[#ff4f4f] w-17 rounded-full flex items-center justify-center mr-5 hover:cursor-pointer ">
            NextJs
          </h3>
          <h3 className="bg-[#4c4c4c] hover:bg-[#ff4f4f] w-17 rounded-full flex items-center justify-center mr-5 hover:cursor-pointer ">
            ReactJs
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
