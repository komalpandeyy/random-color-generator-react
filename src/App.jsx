import React, { useState } from 'react'

const App = () => {

  const[typeOfColor,setTypeOfColor] = useState("hex");
  const[color,setColor] = useState("#FFFFFF");
  const randomColor = (length)=>{
    return Math.floor(Math.random()*length);
  }
  const changeHexColor = ()=>{
    const arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hex = "#";
    for(let i = 0;i<6;i++){
      hex+=arr[randomColor(arr.length)];
    }
    console.log(hex);
    setColor(hex);

  }
  const changeRGBColor = ()=>{
    const r = randomColor(256);
    const g = randomColor(256);
    const b = randomColor(256);
    console.log(r+" "+g+" "+b);
    setColor(`rgb(${r},${g},${b})`);
  }
  return (
    <div>
    <div className='flex align-center justify-center'>
      <button className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mx-7 basis-64 my-7" onClick={()=>{
        setTypeOfColor('hex')
      }}>Create HEX Color</button>
      <button className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mx-7 basis-64 my-7" onClick={()=>{
        setTypeOfColor('rgb')
      }}>Create RGB Color</button>
      <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mx-7 basis-64 my-7" onClick={typeOfColor=="hex"?changeHexColor:changeRGBColor}>Generate Random Color</button>

      </div>
      <div className='container w-full max-w-500 ' style = {
      {
        width:"100vw",
        height:"100vh",
        backgroundColor:color
      }

      
    }>

      {
        typeOfColor=="hex"||typeOfColor=="rgb"?<h1 className=" py-60 text-center items-center [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)]  text-xl md:text-4xl leading-snug font-manrope font-extrabold">Color chosen :{color}</h1>:null
      }
    </div>
    </div>
  )
}

export default App