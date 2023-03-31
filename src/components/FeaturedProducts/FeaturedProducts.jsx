import React from 'react';
import './featuredProducts.scss';
import Card from '../Card/Card';

const FeaturedProducts = ({type}) => {
    const data = [
        {
            id: 1,
            img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ffa%2F02%2Ffa0278237ca6d149ff2fb2e3a904c584d3c2c6a4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
            img2: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0a%2Fe3%2F0ae3b69ac985c937044f72897973cf36f3dfbdd5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
            title: "Denim Jumpsuit",
            isNew: true,
            oldPrice: 25,
            price: 20,
        },
        {
            id: 2,
            img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F02%2Fab%2F02ab37c74d971d06c73dd7f88ad308e00d5cd03c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_coats%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
            title: "Coat",
            isNew: true,
            oldPrice: 25,
            price: 20,
        },
        {
            id: 3,
            img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F17%2F5d%2F175d7acb4b8f8bd3df84f6fb0573867c86c041be.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
            title: "Skirt",
            oldPrice: 25,
            price: 20, 
        },
        {
            id: 4,
            img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ffc%2F2e%2Ffc2e64033b03c6f8d00877ebc60ddcb3764a18b5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_accessories_hats_sunhats%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
            title: "Hat",
            oldPrice: 25,
            price: 20,
        }
    ]
  return (
    <div className='featuredProducts'>
        <div className='top'>
            <h1>{type} products</h1>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        <div className='bottom'>
            {data.map(item => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts