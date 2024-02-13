import products from '@/constants/constants'
import Header from '@/components/Nav/Header/Header';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function ProductDetailsPage({productDetails}) {

    return (
        <>
                <Header/>
            <ProductDetails productDetails={productDetails} />
        </>
    )

}

export async function getServerSideProps(context) {
    const { productId } = context.query;

    // Find the product with matching productId from the local products data
    const productDetails = products.find(product => product._id === productId);

    return {
        props: {
            productDetails,
        },
    };
}
export default ProductDetailsPage;