import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Review from "./pages/Review";
import Test from "./pages/Test";

function App() {

  return (
    <div>
      
      <BrowserRouter>
      
        <Routes> 

          <Route path='/' exact Component={Home}/>
          <Route path='/test' exact Component={Test}/>
          <Route path='/review' exact Component={Review}/>

        </Routes>
        
      </BrowserRouter>
    </div>
    
  );
}

export default App;