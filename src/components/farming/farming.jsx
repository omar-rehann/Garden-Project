import "./farming.css"
import Button from 'react-bootstrap/Button';

function Farming(){
    return(
        <>
        <div className="farming">
           <div className="continer">
  <h4>Best Agricultural Practices</h4>
</div>
<div className="content">
   <div className="row">
  <div className="col-md-4">
    <div className="box">
      <i className="fas fa-seedling"></i>
      <h4>Selecting the Right Plants</h4>
      <p>
        Choosing plants suitable for the climate and soil is the first step toward a successful garden design. Make sure to select drought-resistant plants if you live all the world.
      </p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="box">
      <i className="fas fa-tint"></i>
      <h4>Using Smart Irrigation Systems</h4>
      <p>
        Modern irrigation systems save water and distribute it evenly across plants. Use automatic irrigation systems to reduce waste and improve efficiency.
      </p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="box">
      <i className="fas fa-bug"></i>
      <h4>Safe Pest Control</h4>
      <p>
        Use eco-friendly pesticides to control pests without harming plants or the environment. Always follow instructions carefully to achieve the best results.
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
      <i className="fas fa-leaf"></i>
      <h4>Soil Enrichment</h4>
      <p>
        Improve soil quality with organic compost and fertilizers to boost plant health and growth naturally.
      </p>
    </div>
  </div>
   <div className="col-md-4">
    <div className="box">
      <i className="fas fa-water"></i>
      <h4>Efficient Water Management</h4>
      <p>
        Avoid overwatering by monitoring soil moisture. Balanced watering keeps plants healthy and prevents root rot.
      </p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="box">
      <i className="fas fa-tree"></i>
      <h4>Seasonal Planting</h4>
      <p>
        Plant according to the season to maximize growth and ensure your garden remains vibrant year-round.
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
export default Farming