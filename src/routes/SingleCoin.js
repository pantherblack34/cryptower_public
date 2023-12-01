import axios from 'axios';
import { useParams } from 'react-router-dom';
import React,{useState, useEffect} from 'react'
import './singlecoin.css'

const SingleCoin = () => {
  
  const params = useParams(); 
  const[coin, setCoin] = useState([]);
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

  useEffect(() => {
    axios.get(url, {mode:'cors'}).then((result) => {setCoin(result.data)}).catch(err => console.log(err))
  }, [url])


  return (
    <div>
      <div className='coin_container'>
        <div className='content'>
          <h1>{coin.name}</h1>
        </div>
        <div className='content'>
          <div className='rank'>
            <span className='rank_btn'>RANK # {coin.market_cap_rank}</span>
          </div>
          <div className='info'>
            <div className='coin_heading'>
              {coin.image ? <img src={coin.image.small} alt={coin.name}/> : <p>'no image'</p>}
              <p>{coin.name}</p>
              <p>{coin.symbol}</p>
            </div>
            <div className='coin_price'>
              {coin.market_data ? <h1>{coin.market_data.current_price.usd} $</h1> : <h1>price currently unavaiable</h1>}
            </div>
          </div>
        </div>
        <div className='content'>
          <table>
            <thead>
              <tr>
                <th>1hr</th>
                <th>24hr</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1y</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {coin.market_data ? <td>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}%</td>: <td>null</td>}
                {coin.market_data ? <td>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%</td>: <td>null</td>}
                {coin.market_data ? <td>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2)}%</td>: <td>null</td>}
                {coin.market_data ? <td>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(2)}%</td>: <td>null</td>}
                {coin.market_data ? <td>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2)}%</td>: <td>null</td>}
                {coin.market_data ? <td>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2)}%</td>: <td>null</td>}
              </tr>
            </tbody>
          </table>
        </div>
        <div className='content'>
          <div className='stats'>
            <div className='left'>
              <div className='row'>
                <h4>24hr low</h4>
                {coin.market_data ? <p>{coin.market_data.low_24h.usd}</p>:null}
              </div>
              <div className='row'>
                <h4>24hr high</h4>
                {coin.market_data ? <p>{coin.market_data.high_24h.usd}</p> : null}
              </div>
            </div>
            <div className='right'>
            <div className='row'>
                <h4>Market Capital</h4>
                {coin.market_data ? <p>{coin.market_data.market_cap.usd}</p>:null}
              </div>
              <div className='row'>
                <h4>Circulating Supplies</h4>
                {coin.market_data ? <p>{coin.market_data.circulating_supply}</p>:null}
              </div>
            </div>
          </div>
        </div>
        <div className='content'>
          <div className='about'>
            <h3>About</h3>
            {coin.description ? <p>{coin.description.en}</p> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCoin