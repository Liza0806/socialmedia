import { useEffect, useState } from "react";

export const Smth = () => {
  const [breeds, setBreeds] = useState([]);
  const [isHidden, setIsHidden] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.thecatapi.com/v1/breeds");
        const data = await response.json();
        setBreeds(data);
        console.log(breeds);
        return data;
      } catch (error) {
        console.log(error);
      }
    
    }
   fetchData(); }, []);

  return (
    <div>
      <label htmlFor="breed-select">Choose a pet:</label>
      {breeds.length !== 0 && 
        <select name="pets" id="breed-select">
          {breeds.map((breed: any) => (
            <option value={breed.id}>{breed.name}</option>
          ))}
        </select>
      }
    <div>
<div onClick={()=> setIsHidden(!isHidden)}>klc</div>
<div hidden={isHidden}>
    {breeds.length !== 0 && (
    <ul>
      {breeds.map((breed: any) => (
        <li key={breed.id}>{breed.name}</li>
      ))}
    </ul>
  )}
</div>
 
    </div>
    </div>
  );
};
