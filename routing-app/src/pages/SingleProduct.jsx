import { useParams } from 'react-router-dom';

function SingleProduct() {
    const { id } = useParams();

    return (
        <>
            <h1>Single Product</h1>
            <p>Du har hämtat produkten med ID: { id }</p>
        </>
    )
}

export default SingleProduct
