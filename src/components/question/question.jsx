import "./question.css"
import Button from 'react-bootstrap/Button';

function Question(){
    return(
        <>
        <div className="question">
           <div className="continer">
  <h4>Popular Question</h4>
</div>
<div className="content">
   <div className="row">
 <div className="col-md-4">
  <div className="box">
    <i className="fas fa-seedling"></i>
    <h4>What Are Your Main Services?</h4>
    <p>
      We provide landscaping services, installation of irrigation systems, and agricultural pest control. In addition, we have a store that sells farming and irrigation tools.
    </p>
  </div>
</div>

<div className="col-md-4">
  <div className="box">
    <i className="fas fa-tint"></i>
    <h4>Do You Offer Service Warranty?</h4>
    <p>
      Yes, we offer a one-year warranty on all irrigation system installations and pest control services. If you face any issues.
    </p>
  </div>
</div>

<div className="col-md-4">
  <div className="box">
    <i className="fas fa-bug"></i>
    <h4>How Much Do Landscaping Services Cost?</h4>
    <p>
      The cost depends on the size of the garden and the type of design you want. You can contact us to get a free quotation.
    </p>
  </div>
</div>
    <div className="col-md-4">
    <div className="box">
      <i className="fas fa-sun"></i>
      <h4>Proper Sunlight Exposure</h4>
      <p>
        Ensure your plants receive the right amount of sunlight. Some plants thrive in full sun, while others prefer partial shade.
      </p>
    </div>
  </div>
<div className="col-md-4">
  <div className="box">
    <i className="fas fa-phone-alt"></i>
    <h4>How Can We Contact You?</h4>
    <p>
      You can reach us through phone, email, or by visiting our office. We are always ready to assist you with your gardening needs.
    </p>
  </div>
</div>



 


</div>
</div>
<div className="end">
     <div className="end  text-center">
      <Button variant="success">See More </Button>
            </div>
</div>
            
        </div>
        </>
    )
}
export default Question