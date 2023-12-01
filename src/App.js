import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import SingleCoin from './routes/SingleCoin'
import Coin from './components/Coin';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';


function App() {

  const [coins, setCoins] = useState([]);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url,{mode:'cors'}).then((res) => {
      setCoins(res.data) 
    }).catch(err => console.log(err))
  }, [])


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Coin coins={coins}/>}/>
        <Route path='/coin' element={<SingleCoin />}>
          <Route path=':coinId' element={<SingleCoin />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
