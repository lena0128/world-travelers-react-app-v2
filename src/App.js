import './App.css';
import CityForm from './components/CityForm';
import CityList from './components/CityList'; 
import LandingPage from './components/LandingPage';



function App() {
  return (
    <div className="App">
     <h1>Welcome, travelers!</h1>
     <CityForm />
     <CityList />
     <LandingPage />
    </div>
  );
}

export default App;
