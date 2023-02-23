import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, NavLink } from "react-router-dom";
import Cart from '../Cart/Cart';
import './NavigationBar.scss';
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useSelector } from "react-redux";





export default function NavigationBar() {


    const items = useSelector(state => state.cart.items);

    const [open, setOpen] = useState(false);

    const clickHandler = () => {

        if (open) {
            setOpen(false)
        }



    }



    return (
        // <div className="navbar-1">
        //   <div className="wrapper-1">
        //     <div className="left">

        //     <Link className='link' to="/">PLAY STORE</Link>

        //     </div>
        //     <div className="center">

        //     <div className="item">
        //         <Link className='link' to="/apps/1">Apps</Link>
        //       </div>
        //       <div className="item">
        //         <Link className='link' to="/apps/2">Games</Link>
        //       </div>
        //       <div className="item">
        //         <Link className='link' to="/apps/3">Accessories</Link>
        //       </div>

        //     </div>
        //     <div className="right">
        //       <div className="icons">
        //         <SearchIcon />
        //         <PersonOutlineIcon />
        //         <div className='cartIcon' onClick={()=>setOpen(!open)} >
        //           <ShoppingCartOutlinedIcon />
        //           <span>(0)</span>
        //         </div>
        //       </div>
        //     </div>
        //   </div>

        //   {open && <Cart/>}
        // </div>


        <div className='navbar-header'>

            <Navbar bg="light" variant="light" expand="lg" className="wrapper">

                <Container className="container-item" onClick={clickHandler}>

                    <Link className="link logo" to='/'>

                        <h2 className='logo'>PLAY STORE</h2>

                    </Link>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='nav-toggle-button' />

                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="navbar-container">

                            <div className="item">

                                <Link className="link" to='/apps/1'>Apps</Link>

                            </div>

                            <div className="item">

                                <Link className="link" to='/apps/2'>Games</Link>

                            </div>

                            <div className="item">

                                <Link className="link" to='/apps/3'>Movies</Link>

                            </div>

                        </Nav>

                        {/* <div className='cartItem profileIconDiv'>

                        <PersonOutlineIcon className='profileIcon'/>

                        </div> */}





                    </Navbar.Collapse>

                </Container> <div className="cartItem" onClick={() => setOpen(!open)}>
                    <div className='cartDiv'>
                        <ShoppingCartOutlinedIcon className='cart-icon' />

                        <span>{items.length}</span>

                    </div>



                </div>

            </Navbar>

            {open && <Cart />}

        </div>

    )

}

