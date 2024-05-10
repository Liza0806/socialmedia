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
    };
    fetchData();
  }, []);

  function bitMarch(n: number) {
    let y:any = [];
    let c:any = [];
    for (let i = 1; i < 9; i++) {
      if (i <= n) {
        y.unshift(1);
      } else {
        y.unshift(0);
      }
    }
    c = [[...y]];
    
    let repeate = () => {
      if (y[0] === 1){
        return c
      }
      y.shift();
      y.push(0);
      c = [...c, [...y]];
    
     while (y[0] !== 1) {repeate() } 
      return c;
    }
    repeate()
    //c = [...c, [...y]];
    console.log(c, 'c')
    return c;
  }
  bitMarch(1);
  return (
    <div>
      <label htmlFor="breed-select">Choose a pet:</label>
      {breeds.length !== 0 && (
        <select name="pets" id="breed-select">
          {breeds.map((breed: any) => (
            <option value={breed.id}>{breed.name}</option>
          ))}
        </select>
      )}
      <div>
        <div onClick={() => setIsHidden(!isHidden)}>klc</div>
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
