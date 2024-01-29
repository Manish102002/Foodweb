import { BASE_API } from "../App"
import Buttons from "./Buttons"

const ResultNew = ({data})=> {
  return (
   
    <div className=" bg-[url('/public/Images/bg.png')] lg:bg-no-repeat md:bg-no-repeat w-[100vw] h-auto  flex overflow-y-auto overflow-x-hidden   md:bg-repeat ">
        <div className=" bg-black w-[100vw] pb-16  bg-opacity-40 ">
          <div className="flex flex-col-1 gap-5 pt-14 lg:px-14 md:px-12 sm:px-10 justify-center flex-wrap px-14 " >
            {
             data?.map(({name, image,text, price})=>(
              <div className=" flex gap-2 backdrop-filter backdrop-blur-[13.184196472167969px]  border lg:w-[370px] md:w-[300px] sm:w-[250px] rounded-xl p-3  border-white" key={name}>

              <div>
                <img width="250px" className=" w-[250px]" src={image} alt="img" />
              </div>

              <div>
                <div  className="flex flex-col gap-2 ">
                  <h3 className="text-white font-bold ">{name}</h3>
                  <p  className=" text-white font-semibold text-sm">{text}</p>
                  <div className=" text-right mr-9">
                  <Buttons text={price.toFixed(2)}/>
                  </div>
                </div>
              </div>

              </div>
                
            
             ))
            }
            </div>
        </div>
    </div>
  )
}

export default ResultNew