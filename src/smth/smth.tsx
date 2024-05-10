import { useEffect } from "react";

export const Smth = () => {
    let breeds: any = [];
  
  useEffect(()=> {
       fetch('https://api.thecatapi.com/v1/breeds')
    .then(response=> response.json())
    .then(data=>{
      breeds = data; 
      console.log(data)})
    
  }, [])
  return (
        <div>
           <label htmlFor="breed-select">Choose a pet:</label>
           {breeds.length !==0 && 
           <select  name="pets" id="breed-select"> 
       
           {breeds.map((breed:any) => <option value={breed.id}>{breed.name}</option>)}
           </select>}
        </div>
    )}