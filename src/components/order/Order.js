import { useEffect, useState } from "react";
import axios from 'axios'
import '../../css/order/order.css'
import Cart from "./Cart";
import { useCartContext, useCartContextUpdate } from './cartItemContext'


const Order = () => {
    const [stock, setStock] = useState([]);
    const imagePath = '../../asstes/Cocktail.jpg'


    const cartContextItem = useCartContext();
    const setCartContextItem = useCartContextUpdate();
 
    useEffect(() => {
        getStock();
    }, [])

    const getStock = async () => {
        const stockData = await axios('/order/getItems').then((data) => {
            return data.data
        }).catch((err) => {
            console.log(err);
        })
        setStock([...stockData])
    }

    const addToCart = (itemCode, itemName, unitPrice) => {

        let product = {
            itemCode,
            itemName,
            unitPrice,
            quantity: 1

        }
        let isAvailable = false

        if (cartContextItem.length !== 0) {
            cartContextItem.forEach((item) => {
                if (item.itemCode === product.itemCode) {
                    isAvailable = true
                }
            })
        }

        if (!isAvailable) {
            setCartContextItem((prev) => { return [...prev, product] })
        }

        console.log(cartContextItem)

    }

    return (
        <div className="orderContainer">
            <h1>Order Items</h1>

            <div className="rpoductContainer">
                <div className="itemContainer">
                    {
                        stock.map((item) => {
                            return (
                                <div className="item" key={item.item_code}>
                                    <div className="item_image">
                                        <img src={require('../../assets/Cocktail.jpg')} alt="asdasd" width={170} height={170} />
                                    </div>
                                    <div className="details">
                                        <div className="itemName"><h2>{item.item_name}</h2></div>
                                        <div className="price"><h4>Rs.{item.unit_price}</h4></div>
                                        <div className="quantity"><h6>Quanitiy in Stock {item.quantiy}</h6></div>
                                        <div >
                                            <button className="cartBtn"
                                                onClick={() => { addToCart(item.item_code, item.item_name, item.unit_price) }}>Add to Cart</button>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
                <Cart cartItems={cartContextItem} setCart={setCartContextItem} />
            </div>
        </div>
    );
}

export default Order;