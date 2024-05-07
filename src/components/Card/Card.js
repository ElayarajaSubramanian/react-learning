import React,{useState} from 'react'

const Card = ({title, img, desc, children}) => {
  const [btntext, setBtntext] = useState("Before Clicked");
  console.log(btntext);
  return (
    <div className='flex flex-col gap-8'>
        <h1>{title}</h1>
        <img src={img}/>
        <p>{desc}</p>
        <button className='p-4 bg-lime-600 text-white' onClick={()=>{
          setBtntext("After Clicked");
          console.log(btntext);
        }}>{btntext}</button>
    </div>
  )
}

export default Card