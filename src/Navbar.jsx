

import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
    return (
        <div className='flex items-stretch font-bold text-center'>
            <div  className=' w-1/4   text-4xl'>Recipe Calories</div>
            <div className=' w-2/4 mx-10  -center grid grid-cols-4 items-center  '>
                <a className='hover:text-[#0BE58A] active:text-[#0BE58A] focus:outline-none  mx-1 ' href="*">Home</a>
                <a className='hover:text-[#0BE58A] active:text-[#0BE58A] focus:outline-none  mx-1 ' href="*">Recipes</a>
                <a className='hover:text-[#0BE58A] active:text-[#0BE58A] focus:outline-none  mx-1 ' href="*">About</a>
                <a className='hover:text-[#0BE58A] active:text-[#0BE58A] focus:outline-none  mx-1 ' href="*">Search</a>
            </div>
            <div  className='w-1/4 flex ms-20 '>
                <input className=' w-4/5 rounded-md pl-4 placeholder:text-slate-400 block   bg-gray-100 ' type="text" placeholder='Search'  name="search" id="" />
                <a className=' ' href="*"><CgProfile className='text-xl rounded-full hover:bg-[#0BE58A]  ' /></a>

            </div>
        </div>
    );
};
// <IoMdTime /> timer icon
// <MdOutlineLocalFireDepartment /> calories icon

export default Navbar;