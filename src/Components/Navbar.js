import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.css';

export const Navbar = () => {
    return (
        <nav className="nav">
        <a className="logo" href="/">CoinEmbark</a>
        <div className="nav-items">
            <Link to="/">Learn</Link>
            <a href="/">News</a>
            <a href="/">Research</a>
            <a href="/">Trading</a>
            <Link to="/100">Top 100</Link>
        </div>
        <div>
            <input/>
             {/* <a href="/login">login</a>
          <Link to="/signup">
          <button>Create on Anime.Fund</button>
          
          </Link>  */}
        </div>
    </nav>
    )
}
