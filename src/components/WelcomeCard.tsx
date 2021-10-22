import { Card} from "react-bootstrap";
import employeeGrp from '../images/welcome.jpg'; 

const WelcomeCard = () =>{
    return(
        <div className="cardDimensions">
            <Card className="card">
                <Card.Img variant="top" src={employeeGrp}  />
                <Card.Body>
                    <Card.Title>Employee Portal</Card.Title>
                    <Card.Text>
                    You can register on this portal
                    to get the latest information about your pay and leaves and much more...
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default WelcomeCard;