import "./company.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Company(){
    return(
        <>
        <div className="company">
            <div className="continer">
                <h4>Our Company</h4>
            </div>
          <div className="content">
  <div className="row g-2">
    <div className="col-md-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Green Garden Company</Card.Title>
          <Card.Text>
            Green Garden is a leading company in landscaping, irrigation systems, and pest control. With over 10 years of experience.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    <div className="col-md-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Expert Agricultural Team</Card.Title>
          <Card.Text>
            We rely on a team of specialized agricultural engineers and the latest technologies to ensure services that exceed client expectations.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    <div className="col-md-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Sustainable Vision</Card.Title>
          <Card.Text>
            Our vision is to provide sustainable agricultural solutions that meet client needs while preserving the environment.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    <div className="col-md-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Modern Irrigation Systems</Card.Title>
          <Card.Text>
            We design and install advanced irrigation systems that save water and ensure healthy plant growth.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    <div className="col-md-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Landscape Design</Card.Title>
          <Card.Text>
            Creative landscape designs that transform outdoor spaces into beautiful and functional environments.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    <div className="col-md-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Pest Control Services</Card.Title>
          <Card.Text>
            Safe and effective pest control solutions to protect gardens and agricultural projects.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    <div className="col-md-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Urban Green Projects</Card.Title>
          <Card.Text>
            Developing green spaces in urban areas to enhance quality of life and community well-being.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    <div className="col-md-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Customized Home Gardens</Card.Title>
          <Card.Text>
            Tailored home garden designs with automatic irrigation systems for convenience and beauty.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    <div className="col-md-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Hotel & Resort Landscaping</Card.Title>
          <Card.Text>
            Elegant landscaping solutions for hotels and resorts, creating welcoming and luxurious outdoor spaces.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    <div className="col-md-4">
      <Card style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>Farm Garden Projects</Card.Title>
          <Card.Text>
            Designing farm-style gardens with fruit trees, pathways, and sustainable agricultural practices.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </div>
</div>
  <div className="end  text-center mt-4">
<Button variant="success">Contact Us Now</Button>            </div>
        </div>
        </>
    )
}
export default Company