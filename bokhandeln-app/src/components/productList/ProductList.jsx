import './productList.css';
import books from '../../assets/books.json';
import BookItem from '../bookItem/BookItem';

function ProductList() {

  return (
    <ul className="product-list">
        {
            books.map((book, index) => {
                return <BookItem
                          book={ book }
                          key={ index } 
                       />
            })
        }
    </ul>
  )
}

export default ProductList;
