import React, {useState} from "react";
import style from "./products.module.css"
import Plane from "../../assets/plane.png"
import {ProductsData} from "../../data/products";
import {useAutoAnimate} from "@formkit/auto-animate/react";


const Products =()=>{
    const [parent] = useAutoAnimate()
    console.log(parent)
    const [MenuProduct, setMenuProducts] = useState(ProductsData)

    const filter = (type)=>{
        setMenuProducts(ProductsData.filter((product => product.type=== type)))
    }
    return(
        <div className={style.container}>
            <img src={Plane} alt=""/>
            <h1>Our Fearching products </h1>
            <div className={style.products}>
                <ul className={style.menu}>
                    <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
                    <li onClick={()=>filter("skin care")}>Skin Care</li>
                    <li onClick={()=>filter("conditioner")}>Conditions</li>
                    <li onClick={()=>filter("foundation")}>Foundaraions</li>
                </ul>
                <div className={style.list} ref={parent}>
                    {
                        MenuProduct.map((item, i)=>(
                            <div className={style.product}>
                                <div className="left-s">
                                    <div className='name'>
                                        <span>{item.name}</span>
                                        <span>{item.detail}</span>
                                    </div>

                                </div>
                                <span>{item.price}$</span>
                                <div>Show More</div>
                                <img src={item.img} alt="" className="img-p"/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Products