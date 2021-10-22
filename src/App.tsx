// bootstrap css imports here
import 'bootstrap/dist/css/bootstrap.min.css';

//bootstrap components 
import { Col, Container, Row } from 'react-bootstrap';

//all custom components here
import EmployeeHeader from './components/EmployeeHeader';
import RegisterEmployee from './components/RegisterEmployee';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';
import EmployeeAbout from './components/EmployeeAbout';
import WelcomeCard from './components/WelcomeCard';
//context import
import StoreProvider from '../src/store/Context';

//custom css
import './components/style.css';

//react router imports
import {Switch,Route,BrowserRouter} from 'react-router-dom';


function App() {
  return (  
  <StoreProvider>
    <BrowserRouter>
      <div className="App">
        <Container>
          <Row>
            <Col><EmployeeHeader/></Col>
          </Row>
          <Row>
            <Switch>
              <Route path="/employee-list">
                <Col lg={5}> 
                  <EmployeeList />
                </Col>
              </Route>
              <Route path="/details/:id">
                <EmployeeDetails />
              </Route>
              <Route path="/about">
                <EmployeeAbout />
              </Route>
              <Route path="/" exact>
                <Col lg={5}> 
                  <WelcomeCard/>
                </Col>
                <Col lg={7}> 
                  <RegisterEmployee />
                </Col>
              </Route>
            </Switch>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  </StoreProvider>
  );

}

export default App;
