import "./services.css"
import Button from 'react-bootstrap/Button';

function Services(){
    return(
        <>
        <div className="services">
            <div className="continer">
                <h4>Our Services</h4>
            </div>
            <div className="content">
                <div className="row">
  <div className="col-md-4">
    <div className="box">
      <i className="fas fa-tree fa-2x mb-3"></i>
      <h5>Landscaping</h5>
      <p>
        Creative residential and public garden designs using modern techniques
        and tools to transform any space beautifully.
      </p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="box">
      <i className="fas fa-tint fa-2x mb-3"></i>
      <h5>Irrigation Systems</h5>
      <p>
        Smart irrigation systems to save water and keep plants healthy, fully
        automated for convenience of the achivements.
      </p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="box">
      <i className="fas fa-spray-can fa-2x mb-3"></i>
      <h5>Pest Control</h5>
      <p>
        Professional spraying services to protect your garden from harmful
        insects and maintain a safe environment.
      </p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="box">
      <i className="fas fa-seedling fa-2x mb-3"></i>
      <h5>Plant Supply</h5>
      <p>
        Wide variety of decorative and fruit plants to enrich your garden with
        greenery and beauty.
      </p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="box">
      <i className="fas fa-lightbulb fa-2x mb-3"></i>
      <h5>Garden Lighting</h5>
      <p>
        Modern outdoor lighting solutions to highlight your garden’s beauty .
      </p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="box">
      <i className="fas fa-water fa-2x mb-3"></i>
      <h5>Water Features</h5>
      <p>
        Elegant fountains and water features to add tranquility and luxury to
        your outdoor space.
      </p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="box">
      <i className="fas fa-tools fa-2x mb-3"></i>
      <h5>Garden Maintenance</h5>
      <p>
        Regular care and maintenance services to keep your garden fresh, clean,
        and flourishing all year round.
      </p>
    </div>
  </div>
   <div className="col-md-4">
    <div className="box">
      <i className="fas fa-tree fa-2x mb-3"></i>
      <h5>Landscaping</h5>
      <p>
        Creative residential and public garden designs using modern techniques
        and tools to transform any space beautifully.
      </p>
    </div>
  </div>
  

</div>
            </div>
            <div className="end  text-center">
      <Button variant="success">See More Services</Button>
            </div>
        </div>
        </>
    )
}
export default Services