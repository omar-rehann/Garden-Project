import "./contact.css"
import Contact from "../contactt/contact"
import Alert from 'react-bootstrap/Alert';

function Contactus(){
    return(
        <>
        <div className="contactus">
            <div className="row align-items-center">
                <div className="col-md-7">
                    <Contact/>

                </div>
                <div className="col-md-5">
                    <div className="continer">
                        <h5>Contact Information</h5>
                    </div>
  <div className="content">
  <div className="row">
    <div className="col-md-12">
      <Alert key="success" variant="success">
        <i class="fa-solid fa-phone"></i>   +1 202-555-0147
      </Alert>
    </div>
    <div className="col-md-12">
      <Alert key="info" variant="info">
        <i class="fa-solid fa-envelope"></i>   contact@business.com
      </Alert>
    </div>
    <div className="col-md-12">
      <Alert key="warning" variant="warning">
        <i class="fa-solid fa-location-dot"></i>   500 Fifth Ave, New York
      </Alert>
    </div>
    <div className="col-md-12">
      <Alert key="danger" variant="danger">
        <i class="fa-solid fa-globe"></i>   www.businessportal.com
      </Alert>
    </div>
    <div className="col-md-12">
      <Alert key="primary" variant="primary">
        <i class="fa-solid fa-clock"></i>   Mon-Fri: 9 AM - 6 PM
      </Alert>
    </div>
    <div className="col-md-12">
      <Alert key="secondary" variant="secondary">
        <i class="fa-solid fa-user"></i>   Manager: Sarah Johnson
      </Alert>
    </div>
    <div className="col-md-12">
      <Alert key="dark" variant="dark">
        <i class="fa-solid fa-credit-card"></i>   Payment Methods: Visa, PayPal
      </Alert>
    </div>
    <div className="col-md-12">
      <Alert key="light" variant="light">
        <i class="fa-solid fa-truck"></i>   Free Delivery over $50
      </Alert>
    </div>
    <div className="col-md-12">
      <Alert key="info2" variant="info">
        <i class="fa-solid fa-star"></i>   Rated 4.8/5 by customers
      </Alert>
    </div>
    <div className="col-md-12">
      <Alert key="success2" variant="success">
        <i class="fa-solid fa-shield-halved"></i>   Secure Transactions
      </Alert>
    </div>
    <div className="col-md-12">
      <Alert key="warning2" variant="warning">
        <i class="fa-solid fa-gift"></i>   Special Offers Available
      </Alert>
    </div>
    <div className="col-md-12">
      <Alert key="danger2" variant="danger">
        <i class="fa-solid fa-circle-exclamation"></i>   Limited Stock
      </Alert>
    </div>
    <div className="col-md-12">
      <Alert key="primary2" variant="primary">
        <i class="fa-solid fa-handshake"></i>   Partnership Opportunities
      </Alert>
    </div>
    <div className="col-md-12">
      <Alert key="secondary2" variant="secondary">
        <i class="fa-solid fa-comments"></i>   Live Chat Support
      </Alert>
    </div>
  </div>
</div>

                </div>
            </div>
        </div>
        </>
    )
}
export default Contactus