import React from 'react'
import "./my-profile-card.scss"

const MyProfileCard = (props) => {

const {image,Name,Adres,Shot,Followers,Following}=props;
//

  return (
    <div>

      <div className='header'>
      <img src={image} alt="Fotoğraf" />

      </div>

      <div>
        <img src="" alt="" />
        <p className='name'>{Name}</p>
        <p className='address'>{Adres}</p>
        <ul className="stats">
					<li>
						<h3>{Shot}</h3>
						<p>Shot</p>
					</li>
					<li>
						<h3>{Followers}</h3>
						<p>Followers</p>
					</li>
					<li>
						<h3>{Following}</h3>
						<p>Following</p>
					</li>
				</ul>


      </div>


    </div>
  )
}

export default MyProfileCard