import Poster from "../components/poster/poster"
import Services from "../components/services/services"
import Project from "../components/projects/project"
 import Company from "../components/company/company"
 import Farming from "../components/farming/farming"
 import Question from "../components/question/question"
 import Contact from "../components/contactt/contact"
function Homepage(){
    return(
        <>
        <div className="homepage">
            <Poster/>
    <Services/>
    <Project/>
    <Company/>
    <Farming/>
    <Question/>
    <Contact/>

        </div>
        </>
    )
}
export default Homepage