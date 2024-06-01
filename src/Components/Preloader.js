import React, { useEffect, useState } from 'react'
import '../Styles/preloader.css'

const Preloader = () => {
	const linearGradient = 'linear-gradient(to right, #ff7e5f, #feb47b)';
  const [hcolor, hsetColor] = useState("")
  const [hcolor2, hsetColor2] = useState("")
  
  useEffect(() => {
    const handleStorageChange = () => {
      const savedState = JSON.parse(localStorage.getItem('myColorState'));
      const savedState2 = JSON.parse(localStorage.getItem('myColorState2'));
      if(typeof savedState === "string"){
          hsetColor(savedState)
      }
      if(typeof savedState2 === "string"){
          hsetColor2(savedState2)
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  useEffect(()=>{
    const savedState = JSON.parse(localStorage.getItem('myColorState'));
    const savedState2 = JSON.parse(localStorage.getItem('myColorState2'));
    if(typeof savedState === "string"){
        hsetColor(savedState)
    }
    if(typeof savedState2 === "string"){
        hsetColor2(savedState2)
    }
  },[])
  const [col1, setCol1] = useState("")
  const [col2, setCol2] = useState("")
  const colsetter = (e, f)=>{
    setCol1(e)
    setCol2(f)
  }

	return (
		<div id='preloader-active'>
			<div className='preloader d-flex align-items-center justify-content-center'>
				{/* <div className='blur'></div> */}
				<div className='preloader-inner position-relative'>
					{/* <div className='preloader-circle'></div>
					<div className='preloader-img pere-text'> */}
						{/* <img
							className='logo'
							alt='Logo'
							src={Logo}
							width='70px'
							height='30px'
						/> */}
					{/* </div> */}
					
					<div className="loaderr"></div>
				</div>
			</div>
		</div>
	)
}

export default Preloader
