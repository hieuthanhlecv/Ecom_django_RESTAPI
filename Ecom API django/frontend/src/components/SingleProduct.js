import { Link } from 'react-router-dom';
import logo from '../logo.svg'


function SingleProduct(props) {
    return (
        <div className="col-12 col-md-3 mb-4">
            <div className="card">
                <Link to='/product/python-timer/123'>
                    <img src={logo} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <h5 className="card-title text-muted">Price: $500</h5>
                </div>
                <div className="card-footer">
                    <button title="Add to Cart" className="btn btn-success btn-sm">
                        <i className="fa-solid fa-cart-plus"></i>
                    </button>
                    <button title="Add to Wishlist" className="btn btn-danger btn-sm ms-1">
                        <i className="fa fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default SingleProduct;