import React, { useState } from 'react'

const Tabset = () => {
    const [services, setServices] = useState(true);
    const [careers, setCareers] = useState(false);
    const [aboutus, setAboutus] = useState(false);
  return (
    <div className='flex flex-col'>
        <div className='flex px-10 bg-gray-400 gap-6'>
            <h2 onClick={()=> {
                setCareers(false);
                setServices(true);
                setAboutus(false);
            }} className={services ? "bg-lime-500 text-white h-[100%]":""}>Services</h2>
            <h2 onClick={()=> {
                setCareers(true);
                setServices(false);
                setAboutus(false);
            }} className={careers ? "bg-lime-500 text-white h-[100%]":""}>Careers</h2>
            <h2 onClick={()=> {
                setCareers(false);
                setServices(false);
                setAboutus(true);
            }} className={aboutus ? "bg-lime-500 text-white h-[100%]":""}>About us</h2>
        </div>
        <div>
            {services ? <p>This is services content</p>:""}
            {careers ? <p>This is careers content</p> : ""}
            {aboutus && <p>This is about us content</p>}
        </div>
    </div>
  )
}

export default Tabset