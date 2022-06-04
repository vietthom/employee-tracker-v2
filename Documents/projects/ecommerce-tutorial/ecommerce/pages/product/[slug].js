import React from 'react';
import { client, urlFor } from '../../lib/client';

const ProductDetails = ({ product, products}) => {
  return (
    <div>
        <div className='product-detail-container'>
            <div>
                <div className='image-container'>
                    <img 
                        src=
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

//static site generation from a page. Next.js will pre-render this page at build time using
//the props returned by getStaticProps
export const getStaticProps = async ({ params: {slug} }) => {
    //Get all products with similar slug
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]';
    //Get the individual product 
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
  
    return {
      props: { products, product }
    }
  }

export default ProductDetails