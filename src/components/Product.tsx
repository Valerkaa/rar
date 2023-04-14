import {IProduct} from "../models";
import {useState} from "react";
import {Modal} from "./modal";

interface ProductProps{
    product: IProduct
}
export function Product({product} : ProductProps) {
    const [details,setDetails] = useState(false)
    const btnBgClassName = details ? 'bg-green-300' : 'bg-green-500'
    const btnClasses = ['py-2 px-4 border' , btnBgClassName]
    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={ product.image } className="w-1/6" alt={ product.title }/>
            <p>{ product.title }</p>
            <span className="font-bold">{ product.price }$</span>
            <button
                className={btnClasses.join(" ")}
                onClick={()=> setDetails(prev => !prev )}
            >{details ? 'Hide details' : 'Show details'}</button>
            { details && <div> <p>{ product.description }</p></div> }
            <Modal></Modal>
        </div>
    )
}
