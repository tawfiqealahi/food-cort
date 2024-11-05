import cover from '../assets/image/cover.jpg'

const Header = () => {
    return (
      (<div  className=" relative overflow-hidden  rounded-3xl w-full h-screen bg-cover bg-center "  style={{ backgroundImage: `url(${cover})` }}  >
        <div className="absolute  bg-black opacity-50    "></div>
        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Discover an exceptional cooking <br /> class tailored for you</h1>
          <p className="mt-4 text-lg">Learn and Master Basic Programming Data structures,Algoriyhm,OOP,Database and solve 500+ coding <br /> problems to become an exceptionallyw well world-class Programmer.   </p>
        <div className='flex '>
        <button className="mt-6 mr-5 px-6 py-3  bg-transparent border  bg-blue-600 text-xl rounded-lg text-white font-semibold hover:bg-[#0BE58A]  active:text-[#0BE58A]  ">
        Explore Now
          </button>
          <button className="mt-6 px-6 py-3 bg-transparent border rounded-lg text-white font-semibold text-xl hover:bg-[#0BE58A]">
            Our Feedback
          </button>
        </div>
        </div>
      </div>)
    );
};

export default Header;