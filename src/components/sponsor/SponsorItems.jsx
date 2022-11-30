import React from 'react'

function SponsorItems({item}) {
        return (
            <div className="bg-birumud">
                <img src={item.img} alt="sponsor"/>
            </div>
        )
  
}

export default SponsorItems