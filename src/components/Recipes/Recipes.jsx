import Recipe from "../Recipe/Recipe";


const Recipes = () => {
    return (
        <div className="">
            <div className=" my-12 text-center ">
                <h1 className="text-5xl font-bold">Our Recipes</h1>
                <p className="mt-2 font-medium text-wrap">Our recipes Heading & short description at the beginning of
                this section. <br /> Don’t use lorem ipsum text.</p>
            </div>
            <div className="flex">
            <div className=" bg-yellow-200  mr-4 w-3/5"> 
            
            <Recipe>

            </Recipe>
            </div>
            
            <div className=" bg-stone-600 w-2/5"></div>
            </div>
            
        </div>
    );
};

export default Recipes;