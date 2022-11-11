import React from 'react'

function ChildDiv(props) {
    return <div className={props.className}>
      <div className='whole-div'>
      <div className='lin-div2'>
      <img src={props.img2} alt='card'></img>
      </div>
      <nav className='text-div'>
       <div className='text-div2'>
            <h3>{props.text}</h3>
            <p>{props.text2}</p>
      </div>
      <div className='text-div2'>
            <h3>Verify your identiy</h3>
            <p>To start the Identity minting process, 
              your wallet will have to be connected 
              first to the system</p>
      </div>
      <div className='text-div2'>
            <h3>Signing of transactions</h3>
            <p>To start the Identity minting process, 
              your wallet will have to be connected 
              first to the system</p>
      </div>
      <div className='text-div2'>
            <h3>Gas fee</h3>
            <p>To start the Identity minting process, 
              your wallet will have to be connected
               first to the system</p>
      </div>
      <div className='text-div2'>
            <h3>Mint your Identity</h3>
            <p>To start the Identity minting process, 
              your wallet will have to be connected
               first to the system</p>
      </div>
      </nav>
      </div>
      <div className='img-div2'>
        <img src={props.img} alt='card'></img>
      </div>
    </div>
}

export default ChildDiv