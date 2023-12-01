import React from 'react'
import './coin.css'

const Coinitem = (props) => {
  return (
    <div className='coin_row'>
        <p>{props.coin.market_cap_rank}</p>
        <div className='img_symbol'>
            <img src={props.coin.image} alt={props.coin.name}/>
            <p>{props.coin.symbol.toUpperCase()}</p>
        </div>
        <p>${props.coin.current_price.toLocaleString()}</p>
        <p>{props.coin.price_change_percentage_24h.toFixed(2)}</p>
        <p className='hide_mobile'>${props.coin.total_volume.toLocaleString()}</p>
        <p className='hide_mobile'>${props.coin.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default Coinitem