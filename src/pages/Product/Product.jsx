import React from 'react';
import './product.css';

const Product = () => {
  return (
    <div className='products'>
        <div className='left'>
            <div className='filterItem'>
                <h2>product Categories</h2>
                <div className="inputItem">
                    <input type='checkbox' id='1' value={1}/>
                    <label htmlFor = "1">Shoes</label>
                </div>
                <div className="inputItem">
                    <input type='checkbox' id='2' value={2}/>
                    <label htmlFor = "1">Skirts</label>
                </div>
                <div className="inputItem">
                    <input type='checkbox' id='3' value={3}/>
                    <label htmlFor = "1">Coats</label>
                </div>

            </div>
            <div className='filterItem'>
                <h2>Filter by Price</h2>
                <div className="inputItem">
                    <span>0</span>
                    <input type='range' min={0} max={1000}/>
                </div>
            </div>
            <div className='filterItem'>
                <h2>Sort by </h2>
                <div className="inputItem">
                    <input type='radio' id = "asc" value = "asc" name = "price"/>
                    <label htmlFor='asc'>Price (Lowest First)</label>
                </div>
                <div className="inputItem">
                    <input type='radio' id = "asc" value = "asc" name = "price"/>
                    <label htmlFor='asc'>Price (Highest First)</label>
                </div>

            </div>

        </div>
        <div className='right'>
            <img className = "catImg" src='https://th.bing.com/th/id/OIP.pLCxwKCfpcDhKTbXY1zTVQHaLG?pid=ImgDet&rs=1' alt = ""/>
            
        </div>
    </div>
  )
}

export default Product