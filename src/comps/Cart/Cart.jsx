import React from 'react';
import './Cart.scss';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';

const Cart = () => {

    const items = useSelector(state=>state.cart.items);

    const dispatch = useDispatch();

    const totalPrice = () =>{
        let total = 0;
        items.forEach((item)=>(total+=item.price));
        return total.toFixed(2);

        
    }

    if(items.length===0){

        return(

            <div className='cart'>
                Nothing in the cart yet.
            </div>

        )

    }

    else{

        return (
            <div className='cart'>
                <h1>Cart Items</h1>
                {items?.map(item => (
                    <div className="item" key={item.id}>
    
                        <div className='row-1'>
    
                            <div className="">
                                <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
                            </div>
                            <div className="">
                            <div className='details'>
                                <h4>{item.title}</h4>
                                <p>{item.desc?.substring(0, 100)}</p>
                                <div className="price">
                                    ${item.price}
                                </div>
                            </div>
                            </div>
                            <div className="col-md-2"><RemoveCircleIcon className='delete' onClick={()=>dispatch(removeItem(item.id))} /></div>
                            
                            
    
                        </div>
    
                        
    
    
                    </div>
    
                ))}
    
                <div className='total'>
                    <span>SUBTOTAL</span>
                    <span>${totalPrice()}</span>
                </div>
    
                <button>Checkout</button>
                <div className='resetDiv'><span className="reset" onClick={()=>dispatch(resetCart())}>Reset Cart</span></div>
    
    
    
            </div>
        )

    }

   
}

export default Cart