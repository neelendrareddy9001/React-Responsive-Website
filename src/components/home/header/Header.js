import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import WorkIcon from '@mui/icons-material/Work';
import GridViewIcon from '@mui/icons-material/GridView';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const [sidebar , setSidebar] = useState(false);
  return (
    <>
       <header className='header'>
            <div className='container flex'>
                <div className='logo'>
                    <img src="assets/logo.png" alt=""/>
                </div>
                <div className='nav'>
                    <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSidebar(false)}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/pages'>Pages</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/portfolio'>Portfolio</Link></li>
                        <li><Link to='/shop'>Shop</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li className='icon'>
                            <SearchIcon className='HeaderIcon'/>
                            <WorkIcon className='HeaderIcon'/>
                            <GridViewIcon className='HeaderIcon'/>
                        </li>
                    </ul>
                </div>
                <button className='navbar-items-icon' onClick={() => setSidebar(!sidebar)}>
                    {sidebar ? <CloseIcon/> : <MenuIcon/>}
                </button>
            </div>
       </header>
    </>
  )
}

export default Header