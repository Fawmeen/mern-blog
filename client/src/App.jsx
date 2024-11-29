import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Dashboard from './components/dashboard'
import Projects from './components/projects'
import Signin from './components/signin'
import Signup from './components/signup'


export default function App() {
  return (
   <BrowserRouter>
           <Routes>   <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/signin" element={<Signin/>} />
                      <Route path="/signup" element={<Signup />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/projects" element={<Projects/>} />  
           </Routes>
   </BrowserRouter>
  )
}
