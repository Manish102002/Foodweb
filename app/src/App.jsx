import { useEffect, useState } from "react"
import Navi from "./Components/Navi"
import ResultNew from "./Components/ResultNew";

export const BASE_API = "https://mocki.io/v1/ff42c185-4eb5-475e-859c-f6c7b969a79f";

function App() {

  const [data , setData] = useState();
  const [filteredData, setFilteredData] = useState(null)

  const [selectedBtn, setSelectedBtn] = useState("all");
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState(null);
  

  useEffect(()=>{
    const foodData = async ()=>{
      // setLoading(true);
     try {
      const response = await fetch(BASE_API);
      const json = await response.json();
      console.log(json);
      setData(json);
      setFilteredData(json);
      setLoading(false);
     } catch (error) {
      // console.log("error in this api")
      setError(alert("error in this api"))
     }
  }
   
  foodData();
  },[])
  


  if(error)return <div>{error}</div>
   if(loading)return <div>Loading...</div>


   const filterFood = (type)=>{
    if(type == "all"){
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) => 
    food.type.toLowerCase().includes(type.toLowerCase()));

    setFilteredData(filter);
    setSelectedBtn(type);
  }



 
   const searchFood = (e)=>{
    const searchValue = e.target.value;

    console.log(searchValue);

    if(searchValue == " ") {
      setFilteredData(null);
    }

    const filter = data?.filter((food) => 
        food.name.toLowerCase().includes(searchValue.toLowerCase()));

      setFilteredData(filter);  

  };


  return (
    <>
      <Navi searchFood={searchFood} filterFood={filterFood}/>
      <ResultNew data={filteredData} />     
    </>
  )
}

export default App
