import { BrowserRouter, Routes,Route} from "react-router-dom"
import Login from './components/Login'
import Home from './components/Home'
import Jokes from './components/Jokes'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" component={Home} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Jokes" component={Jokes} />
    </Routes>
    
  </BrowserRouter>
)

export default App