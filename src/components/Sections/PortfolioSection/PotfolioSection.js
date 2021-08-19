import React,  {useState } from 'react'
import Images from '../../Sections/PortfolioSection/Images'
import './PortfolioSection.css'

const PotfolioSection = () => {
    const [selectedImg, setSelectedImg] = useState(Images[0])
    return (
        <div className='container-portfolio-section'>
            <img src={selectedImg} alt='Selected' className='selected'/>
            <div className='imgContainer-PortfolioSection'>
                {Images.map((img, index) => (
                     <img //style={{ border: selectedImg ? '4px solid black' : ''}}
                        key={index}
                        src={img}
                        alt='metal'
                        onClick= {() => setSelectedImg(img)}
                    />
                ))}
            </div> 
        </div>
    )
}

export default PotfolioSection
