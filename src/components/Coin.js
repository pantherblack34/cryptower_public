import React from 'react'
import Coinitem from './Coinitem'
import './coin.css'
import { Link } from 'react-router-dom'
import SingleCoin from '../routes/SingleCoin'


const Coin = (props) => {
  return (
    <div className='container'>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin_name'>Coin</p>
                <p >price</p>
                <p>24h</p>
                <p className='hide_mobile'>volume</p>
                <p className='hide_mobile'>mkt cap</p>
            </div>
            {
                props.coins.map(coin => {
                    return(
                        <Link to={`/coin/${coin.id}`} element={<SingleCoin />} key={coin.id} style={{textDecoration:'none'}}>
                            <Coinitem coin={coin} />
                        </Link>
                    )
                })
            }

        </div>
    </div>
  )
}

export default Coin