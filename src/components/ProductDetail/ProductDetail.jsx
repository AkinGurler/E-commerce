import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getSelectedProduct } from '../../actions/products';
import "./productDetail.scss"
import { Carousel } from 'react-carousel-minimal';

const ProductDetail = () => {

    const product = useSelector((state) => state.selectedProduct)
    const { ItemId } = useParams();
    const productId = parseInt(ItemId)
    const dispatch = useDispatch();


    useEffect(() => {
        console.log("useEffect calisti")
        dispatch(getSelectedProduct(productId))
    }, [ItemId])


    /* properties[name,value] */
    /* props values->name,image */
    /* seller:{sellerId,storeTitle,storeId,storeRating,storeImage} */

    if (product.length === 0) return "Loading..."

    const { available, title, images, properties, sku: { def: { price, promotionPrice, quantity }, props } } = product

    console.log(images)
    const slider = images.map(image => (
        { image: image }
    ))

    

    return (
        <div>

        

        <div className='product-detail-container'>
            {<div className='grid-left'>
                <Carousel
                    data={slider}
                    time={0}
                    width="850px"
                    height="600px"
                    radius="10px"
                    captionPosition="bottom"
                    automatic={false}
                    dots={true}
                    pauseIconColor="darkgrey"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnails={true}
                    thumbnailWidth="100px"
                    style={{
                        maxWidth: "850px",
                        maxHeight: "600px",
                        margin: "40px auto",
                    }}
                />
            </div>}



            <div className='grid-right'>
                <h2>{title}</h2>
                <h3>{available == true && "Available"}</h3>

                <div className="prices">
                    <h4 className='price'>{price} <span>$</span></h4>
                    <h3>{promotionPrice} <span>$</span></h3>
                </div>

                <h3>Quantity:{quantity}</h3>

                <div className='add-card'>
                    <select name="colors" id="colors">
                        {props[0].values.map(color => (
                            <>
                                <option id='color' value="color">{color.name}</option>
                            </>
                        ))}
                    </select>
                    <button>
                        Add Cart
                    </button>
                </div>
            </div>
            <div className='properties' >
            <h2>Properties</h2>
            {properties.list.map(property=>(
                <div >
                    {property.name}:{property.value}
                </div>
            ))}    
        </div>
        </div>
        
        
        </div>
       
    )
}

export default ProductDetail