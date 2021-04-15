import "bootstrap/dist/css/bootstrap.min.css"
import Login from './Login';
import useAuth from "./Components/useAuth/useAuth"
import Dashboard from './Components/Dashboard/Dashboard'
const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return  code? (<Dashboard code={code}/> ):(<Login />);
}

export default App;
