import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewCityForm from './components/NewCityForm';
import CityList from './components/CityList'; 
import LandingPage from './components/LandingPage';



function App() {
  return (
    <div className="App">
     <h1>Welcome, travelers!</h1>
     <NewCityForm />
     <CityList />
     <LandingPage />
    </div>
  );
}

export default App;
