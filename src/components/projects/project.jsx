import "./project.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import projectone from "../../img/project1.webp"
import projecttwo from "../../img/project2.webp"
import projectthree from "../../img/projectthree.avif"
import projectfour from "../../img/projectfour.avif"
import projectfive from "../../img/projectfive.avif"
import projectsix from "../../img/projectsix.avif"
import projectseven from "../../img/projectseven.avif"


function Project(){
    return(
        <>
        <div className="project">
           <div className="continer">
                <h4>Our Projects</h4>
            </div>
            <div className="content">
               <div className="row g-2">
  <div className="col-md-4">
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={projectone} />
      <Card.Body>
        <Card.Title>Public Park Project</Card.Title>
        <Card.Text>
          Landscaping a public park in Makkah...
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

  <div className="col-md-4">
    <Card style={{ width: '100%' }}>
      <Card.Img  src={projecttwo} className="w-100" />
      <Card.Body>
        <Card.Title>Home Garden Project</Card.Title>
        <Card.Text>
          Designing a small home garden with an automatic .
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  <div className="col-md-4">
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={projectthree} />
      <Card.Body>
        <Card.Title>Public Park Project</Card.Title>
        <Card.Text>
          Landscaping a public park in Makkah...
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
<div className="col-md-4">
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={projectfour} />
      <Card.Body>
        <Card.Title>Roof Garden Project</Card.Title>
        <Card.Text>
          Creating a modern rooftop garden with seating areas
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  <div className="col-md-4">
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={projectfive} />
      <Card.Body>
        <Card.Title>School Yard Project</Card.Title>
        <Card.Text>
          Designing a green school yard with play zones
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
 <div className="col-md-4">
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={projectfive} />
      <Card.Body>
        <Card.Title>Hotel Landscape Project</Card.Title>
        <Card.Text>
          Elegant landscaping for hotel entrances and outdoor 
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
   <div className="col-md-4">
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={projectsix} />
      <Card.Body>
        <Card.Title>Hotel Landscape Project</Card.Title>
        <Card.Text>
          Elegant landscaping for hotel entrances and outdoor areas
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
<div className="col-md-4">
    <Card style={{ width: '100%' }}>
    <Card.Img variant="top" src={projectseven} />
      <Card.Body>
        <Card.Title>Farm Garden Project</Card.Title>
        <Card.Text>
          Designing a farm-style garden with fruit trees and pathways
        </Card.Text>
      </Card.Body>
    </Card>
  </div>



</div>
    
            </div>
               <div className="end  text-center mt-4">
      <Button variant="success">See More Services</Button>
            </div>
        </div>
        </>
    )
}
export default Project