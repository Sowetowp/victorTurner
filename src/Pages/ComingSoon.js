import React from 'react'
import '../Styles/preloader.css'
import coms from "../Assets/Images/icons8-crossed-fingers-light-skin-tone-48.png"
const cs = () => {
	return (
		<div id='preloader-active'>
			<div className='preloader2 d-flex align-items-center justify-content-center'>
				<div className='blur'></div>
				<div className='preloader-inner position-relative'>
					{/* <div className='preloader-circle'></div> */}
					{/* <div className='preloader-img pere-text'> */}
						{/* <img
							className='logo'
							alt='Logo'
							src={Logo}
							width='70px'
							height='30px'
						/> */}
					{/* </div> */}
                    <p className='comingp'>Coming soon....
                        <img src={coms}/>
                    </p>
				</div>
			</div>
		</div>
	)
}

export default cs
