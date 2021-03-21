import React from 'react';
import "./Coin.css"


const Coin = (props) => {



    return (

        <div className='coin-container'>
           
            <div className='coin-row'>
                <div className='coin'>
                    <h1>{props.rank}</h1>
                    <img src={props.image} alt='crypto' />
                    <h1>{props.name}</h1>
                    <p className='coin-symbol'>{props.symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>${props.price}</p>
                    <p className='coin-volume'>${props.volume.toLocaleString()}</p>

                    {props.priceChange < 0 ? (
                        <p className='coin-percent red'>{props.priceChange.toFixed(2)}%</p>
                    ) : (
                            <p className='coin-percent green'>{props.priceChange.toFixed(2)}%</p>
                        )}



                    <p className='coin-marketcap'>
                       ${props.marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Coin;