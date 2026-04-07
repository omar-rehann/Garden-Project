import "./product.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Productone from "../../img/productone.webp"
import producttwo from "../../img/producttwo.webp"
import productthree from "../../img/productthree.webp"
import productfour from "../../img/productfour.avif"
import productfive from "../../img/productfive.avif"
import productsix from "../../img/productsix.webp"


function Product(){
    return(
        <>
        <div className="product">
           <div className="continer">
  <h4>Our Products</h4>
</div>
<div className="content">
<div className="row">
  <div className="col-md-4">
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={Productone} />
      <Card.Body>
        <Card.Title>Smart Insect Traps</Card.Title>
        <Card.Text>
          Innovative traps designed to effectively catch flying and crawling insects.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

  <div className="col-md-4">
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={producttwo} />
      <Card.Body>
        <Card.Title>High-Quality Insecticide</Card.Title>
        <Card.Text>
          An effective insecticide against all types of household and agricultural insects.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

  <div className="col-md-4">
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={productthree} />
      <Card.Body>
        <Card.Title>Agricultural Tools</Card.Title>
        <Card.Text>
          High-quality tools for coordination, maintenance, and garden care.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

  {/* New Cards */}
  <div className="col-md-4 mt-4">
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={productfour} />
      <Card.Body>
        <Card.Title>Organic Fertilizers</Card.Title>
        <Card.Text>
          Premium organic fertilizers that improve soil quality and plant growth.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

  <div className="col-md-4 mt-4">
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={productfive} />
      <Card.Body>
        <Card.Title>Garden Watering Tools</Card.Title>
        <Card.Text>
          Modern irrigation tools designed for efficient and easy watering.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

  <div className="col-md-4 mt-4">
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={productsix} />
      <Card.Body>
        <Card.Title>Plant Protection Spray</Card.Title>
        <Card.Text>
          A safe and effective spray to protect plants from pests and diseases.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
</div>
</div>
<div className="end mt-3">
     <div className="end  text-center">
      <Button variant="success">See More Project </Button>
            </div>
</div>
            
        </div>
        </>
    )
}
export default Product