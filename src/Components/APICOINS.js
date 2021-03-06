import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Coin from './Coin';
const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';


function APPCOINS(){
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
  
    useEffect(() => {
      axios.get(url)
        .then(res => {
          setCoins(res.data);
          console.log(res.data)
        })
        .catch(error => console.log(error));
    }, []);
  
    const handleChange = e => {
      setSearch(e.target.value)
    }
  
    const filteredCoins = coins.filter(coin =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
  
  
    return (
      <div className="coin-app">
        <div className="coin-search">
          <h1 className="coin-text">Search a Currency</h1>
          <form>
            <input type="text"
              placeholder="Search"
              className="coin-input"
              onChange={handleChange} />
          </form>
  
        </div>
        <div className="coin-container">
        <div className="coin-row">
              <div className="coin-data">
                <th>Id</th>
                <th>Name</th>
                <th>Sym</th>
                <th>Price</th>
                <th>Volume</th>
                <th>24Hr</th>
                <th>MarketCap</th>
              </div>
            </div>
  
        </div>
        {filteredCoins.map(coin => {
          return (
      
  
  
            <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            rank={coin.market_cap_rank}
            priceChange={coin.price_change_percentage_24h}
            
            />
  
            )
          })}
  
      </div>
    )
}

export default APPCOINS;