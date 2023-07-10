import 'bootstrap/dist/css/bootstrap.css'
import SideBar from './components/SideBar';
import FoodCard from './components/FoodCard'
// import { Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className = "row">
    <div className = "col sm-5">
      <SideBar />
    </div>
    <div className = "col sm-9">
      <FoodCard />
    </div>
  </div>
  );
}



export default App
