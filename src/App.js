import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingScreen from "./Components/LandingScreen"
import LoginScreen from "./Components/LoginScreen"
import SignupScreen from "./Components/SignupScreen"
import ProfileScreen from "./Components/ProfileScreen"
function App() {

  return (
     <>
      <Router>
        <Routes>
        <Route 
          path='/'
          element = {<LandingScreen />}/>
          <Route 
          path='LandingScreen'
          element = {<LandingScreen />}/>
          <Route 
          path='LoginScreen'
          element = {<LoginScreen />}/>
          <Route 
          path='SignupScreen'
          element = {<SignupScreen />}/>
           <Route 
          path='ProfileScreen'
          element = {<ProfileScreen />}/>
          
        </Routes>
      </Router>
      </>
  );
}

export default App;