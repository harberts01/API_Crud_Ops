import './App.css';
import { Create } from './components/Create/Create';
import { Read } from './components/Read/Read';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Update } from './components/Update/Update';



function App() {
  return (
    <Router>
      <div className='main'>
        <div>
          <h3>React CRUD Operations</h3>
        </div>

          <div>
            <Routes>
              <Route exact path = '/' element = {<Create/>}/>
            </Routes>
          </div>
          <div style={{marginTop: 20}}>
            <Routes>
              <Route exact path = '/' element = {<Read/>}/>
            </Routes>
            <Routes>
              <Route  path='/Update' element={<Update/>}/>
            </Routes>
      
            
          </div>
      </div>
      
      
    </Router>
  );
}

export default App;
