import React, { useState } from 'react';
import './Header.css';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";

// es7 code snippets as an extension for using rfce shortcuts
function Header() {
    const[ inputSearch, setInputSearch ]  = useState("");

    return (
        <div className="header">
            <div className="header__left" >
                <MenuSharpIcon />
                    <Link to="/">
                    <img
                    className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                    alt=""
                    />
                    </Link>
                    
            </div>
            <div className="header__input" >
                <input 
                onChange={(e) => setInputSearch(e.target.value)} 
                value={inputSearch} 
                type="text" 
                placeholder="Search"
                 />
                <Link to={`/search/${inputSearch}`}>
                <SearchSharpIcon className="header__inputButton" />
                </Link>

               
                
            </div>
            
            <div className="header__icons">
                <VideoCallSharpIcon className="header__icon" />
                <AppsSharpIcon className="header__icon" />
                <NotificationsSharpIcon className="header__icon" />
                <Avatar 
                    alt="Sruthi Parvatha"
                    src="./images/my_face_website.jpeg" className="header__icon"
                />
            </div>
          
        </div>
    );
}

export default Header
