import logo from './logo.svg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';


function App() {
  return (
    <>
      <Header />

      <main className="mt-4">
        <div className="container">

          {/* Lastst Product */}
          <h3 className="mb-4">
            Latest Products <a href="#" className="float-end btn btn-dark">
              View All Products <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </h3>
          <div className="row mb-4">
            {/* Product Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
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
            {/* Product Box End */}

            {/* Product Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
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
            {/* Product Box End */}

            {/* Product Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
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
            {/* Product Box End */}

            {/* Product Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
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
            {/* Product Box End */}

            {/* Product Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
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
            {/* Product Box End */}

          </div>
          {/* End Lastst Product */}


          {/* Popular Category */}
          <h3 className="mb-4">
            Popular Category <a href="#" className="float-end btn btn-dark">
              View All Categories <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </h3>
          <div className="row mb-4">
            {/* Category Product Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Category title</h4>
                </div>
                <div className="card-footer">
                  Product download: 2356
                </div>
              </div>
            </div>
            {/* Category Product Box End */}
            {/* Category Product Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Category title</h4>
                </div>
                <div className="card-footer">
                  Product download: 2356
                </div>
              </div>
            </div>
            {/* Category Product Box End */}
            {/* Category Product Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Category title</h4>
                </div>
                <div className="card-footer">
                  Product download: 2356
                </div>
              </div>
            </div>
            {/* Category Product Box End */}
            {/* Category Product Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Category title</h4>
                </div>
                <div className="card-footer">
                  Product download: 2356
                </div>
              </div>
            </div>
            {/* Category Product Box End */}

          </div>
          {/* End Popular Category */}


          {/* Popular Product */}
          <h3 className="mb-4">
            Popular Products <a href="#" className="float-end btn btn-dark">
              View All Products <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </h3>
          <div className="row mb-4">
            {/* Product Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
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
            {/* Product Box End */}

            {/* Product Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
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
            {/* Product Box End */}

            {/* Product Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
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
            {/* Product Box End */}

            {/* Product Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
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
            {/* Product Box End */}
          </div>
          {/* End Popular Product */}


          {/* Popular Seller */}
          <h3 className="mb-4">
            Popular Seller <a href="#" className="float-end btn btn-dark">
              View All Seller <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </h3>
          <div className="row mb-4">
            {/* Seller Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Seller Name</h4>
                </div>
                <div className="card-footer">
                  Categories: <a href="#">Javascript</a>, <a href="#">Python</a>
                </div>
              </div>
            </div>
            {/* Seller Box End */}
            {/* Seller Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Seller Name</h4>
                </div>
                <div className="card-footer">
                  Categories: <a href="#">Javascript</a>, <a href="#">Python</a>
                </div>
              </div>
            </div>
            {/* Seller Box End */}
            {/* Seller Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Seller Name</h4>
                </div>
                <div className="card-footer">
                  Categories: <a href="#">Javascript</a>, <a href="#">Python</a>
                </div>
              </div>
            </div>
            {/* Seller Box End */}
            {/* Seller Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Seller Name</h4>
                </div>
                <div className="card-footer">
                  Categories: <a href="#">Javascript</a>, <a href="#">Python</a>
                </div>
              </div>
            </div>
            {/* Seller Box End */}


          </div>
          {/* End Popular Seller */}


        </div>

      </main>


    </>
  );
}

export default App;
