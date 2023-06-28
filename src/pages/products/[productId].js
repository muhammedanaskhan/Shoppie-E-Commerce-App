
import Header from '@/components/Nav/Header/Header';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import { useRouter } from 'next/router';

function ProductDetailsPage(props) {

    const router = useRouter();
    const { productId } = router.query;

    return (
        <>
                <Header/>
            <ProductDetails productId={productId} />
        </>
    )

}
export default ProductDetailsPage;