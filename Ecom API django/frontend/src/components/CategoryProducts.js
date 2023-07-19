import logo from '../logo.svg'
import SingleProduct from './SingleProduct';

function CategoryProducts() {
 return (
  <section className='container mt-4'>
   <h3 className="mb-4">
    <span className='text-danger'>Python </span> Products
   </h3>
   <div className="row mb-4">
    {/* Product Box */}
    <SingleProduct title="Django Project 1" />
    <SingleProduct title="Django Project 2" />
    <SingleProduct title="Django Project 3" />
    <SingleProduct title="Django Project 4" />
    <SingleProduct title="Django Project 5" />
    <SingleProduct title="Django Project 6" />
    <SingleProduct title="Django Project 7" />
    <SingleProduct title="Django Project 8" />
    <SingleProduct title="Django Project 9" />
    {/* Product Box End */}


    <nav aria-label="Page navigation example">
     <ul class="pagination">
      <li class="page-item">
       <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
       </a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
       <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
       </a>
      </li>
     </ul>
    </nav>

   </div>
  </section>


 );
}
export default CategoryProducts;