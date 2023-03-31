import "./list.css";
import React from 'react'
import Card from "../Card/Card"

const List = () => {
    //    fake data needed
  return (
    <div className="List">
        
        {data?.map(item=><Card item = {item} key = {item.id}/>)}
    </div>
  );
};

export default List;
