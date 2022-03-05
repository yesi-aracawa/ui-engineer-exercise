import React from 'react';
import dateFormat from "dateformat";

function ItemDate ({date}) {
    return (
        <div className='Date'>
          <label>{dateFormat(date, 'mmm dS, yyyy')}</label>
          <br/>
          <label>{dateFormat(date, 'HH:mm:ss')}</label>
        </div>
      );
}
export const ItemTime = (time) => dateFormat(time, 'HH:mm:ss');
export default ItemDate;
