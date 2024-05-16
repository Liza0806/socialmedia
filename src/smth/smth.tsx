import axios from "axios";
import { error } from "console";
import { useEffect, useState } from "react";
type PhotoType = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const Smth = () => {

const [photos, setPhotos]=useState<Array<PhotoType>>([])
const [fetching, setFetching]=useState<boolean>(true)
const [currentPageNumber, setCurrentPageNumber]=useState<number>(0)
const [totalCount, setTotalCount]=useState<number>(1)

const scrollHandler = (e:any) => {
  console.log('scroll')
// e.target.documentElement.scrollHeight
//  console.log(e.target.documentElement.scrollTop)
 // console.log(window.innerHeight)
  if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100){
setFetching(true)
  }
}

  useEffect(()=> {
document.addEventListener('scroll', scrollHandler)
return function () {
  document.removeEventListener('scroll', scrollHandler)

} 
  },[])

  useEffect(()=> {
 if(fetching){
  axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPageNumber}`)
  .then(res=> {
    setPhotos([...photos, ...res.data])
    setCurrentPageNumber(prevState=>prevState +1)  
  })
  .catch(error=>(console.log('error')))
  .finally(()=> setFetching(false))
 }

  },[fetching])
  return (
    <div>
   {photos.map(photo=>(
    <div key={photo.id}>
      <img src={photo.url} alt={photo.title} width={150} height={150}></img>
      <p>{photo.title}</p>
    </div>
   ))}
    </div>
  );
};



// colorpicker

// export const Smth = () => {
//   const changeColorF = (e: any) => {
//     e.currentTarget.style.cssText = e.target.style.cssText;
//   };
  
//   return (
//     <div>
//       <div>
//         <ul
//           className="changeColor"
//           onClick={changeColorF}
//           style={{ backgroundColor: "white" }}
//         >
//           <li>
//             <div style={{ backgroundColor: "red" }}>1</div>
//           </li>
//           <li>
//             <div style={{ backgroundColor: "yellow" }}>2</div>
//           </li>
//           <li>
//             <div style={{ backgroundColor: "green" }}>3</div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// modal window

// const [isHidden, setIsHidden] = useState(true);
// const onClickExit = (e: any) => {
// if (e.key === "Escape") {
//   setIsHidden(true)
// } else if(e.target === e.currentTarget){
//   setIsHidden(true)
// }}

// const onClickExitE = (e: any) => {
//   console.log(e.key, 'e.key')
//   if (e.key === "Escape") {
//     setIsHidden(true)
//   }}
//   return (
//     <div className="page"  onKeyUp={onClickExitE} >
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum

//       </p>
//       <button onClick={()=>{ setIsHidden(false); console.log('click open modal')}}>open modal</button>
//     {!isHidden &&  <div className="modalLayout" onClick={onClickExit}>
//       <div>
//          <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam
//         </p>
//         <button onClick={()=> setIsHidden(true)} >X</button>
//       </div>
//       </div>
//     }</div>
//   );

//cats fetch

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await fetch("https://api.thecatapi.com/v1/breeds");
//       const data = await response.json();
//       setBreeds(data);
//       console.log(breeds);
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   fetchData();
// }, []);

// accordion and select

// const [breeds, setBreeds] = useState([]);
// <label htmlFor="breed-select">Choose a pet:</label>
//     {breeds.length !== 0 && (
//       <select name="pets" id="breed-select">
//         {breeds.map((breed: any) => (
//           <option value={breed.id}>{breed.name}</option>
//         ))}
//       </select>
//     )}
//     <div>
//       <div onClick={() => setIsHidden(!isHidden)}>klc</div>
//       <div hidden={isHidden}>
//         {breeds.length !== 0 && (
//           <ul>
//             {breeds.map((breed: any) => (
//               <li key={breed.id}>{breed.name}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>

// frome code wars

// function bitMarch(n: number) {
//   let y:any = [];
//   let c:any = [];
//   for (let i = 1; i < 9; i++) {
//     if (i <= n) {
//       y.unshift(1);
//     } else {
//       y.unshift(0);
//     }
//   }
//   c = [[...y]];

//   let repeate = () => {
//     if (y[0] === 1){
//       return c
//     }
//     y.shift();
//     y.push(0);
//     c = [...c, [...y]];

//    while (y[0] !== 1) {repeate() }
//     return c;
//   }
//   repeate()
//   return c;
// }
// bitMarch(1);

// function divisors(integer) {
//   let w = []
//   for (let i = 2; i<integer; i++){  
//     if(integer % i === 0 ){
//       w.push(i)
//     }
//   }
//   if(w.length === 0){
//     w=`${integer} is prime`
//   }
//   return w
// };