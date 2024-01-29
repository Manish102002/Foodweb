import Buttons from "./Buttons"


const Navi = ( {searchFood,filterFood}) => {




  return (
    <div className="bg-[#414141] flex lg:pt-[55px] md:pt-[40px] sm:pt-[25px] gap-7 pt-[20px]  lg:px-[120px] md:px-[80px] sm:px-[40px] pb-[31px] flex-col justify-end sm:gap-[10px] px-[15px] md:gap-[20px] lg:gap-[30px]">
        <div className="flex justify-between items-center">

            <img src="./Images/FoodyZone.svg" className=" md:text-[32px] sm:text-[32px] text-[10px] lg:text-[32px] " alt="logo" />


            <input onChange={searchFood} type="text" className=" outline-none border w-28   lg:w-40 md:w-40 sm:w-40 border-white bg-[#414141] rounded p-1 md:-1 sm:1 text-white font-semibold" placeholder="Search Food" />


        </div>
        <div className="flex gap-[10px] justify-center items-center">
            <Buttons onClick={() => filterFood("all")} text="All"/>
            <Buttons onClick={() => filterFood("breakfast")} text="BreakFast"/>
            <Buttons onClick={() => filterFood("lunch")} text="Luach"/>
            <Buttons onClick={() => filterFood("dinner")} text="Dinner"/>
        </div>
    </div>
  )
}

export default Navi