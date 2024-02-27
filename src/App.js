// import logo from './logo.svg';
// import './App.css';
// import Login from './componenets/Login';
import Navbar from './componenets/Navbar';
// import StateBasics from './componenets/StateBasics';
// import Counter from './componenets/Counter';
// import Signup from './componenets/Signup';
// // import Mapping from './componenets/Mapping';
// import Tables from './componenets/Tables';
// import Carda from './componenets/Carda';
// import Texts from './componenets/Texts';
// import Grida from './componenets/Grida';
// import Api from './componenets/Api';
import Useeffect from './componenets/UseEffect';
import { Routes,Route } from 'react-router-dom';
function Blog() {
  return (
    <div className="Blog">
      <Navbar/>
      <Routes>
        <Route path='/' element={<AddBlog/>}></Route>
        <Route path='/sign' element={<DashBoard/>}></Route>
        // <Route path='/count' element={<Counter/>}></Route>
        // <Route path='/a' element={<Tables/>}></Route>
        // <Route path='/b' element={<Texts/>}></Route>
        // <Route path='/c' element={<Api/>}></Route>
        // <Route path='/d' element={<Grida/>}></Route>
        // <Route path='/e' element={<Carda/>}></Route>



      </Routes>

      {/* <Login/> 
      <StateBasics/> */}
      {/* <Counter/> */}
      {/* <Signup/> */}
      {/* <Useeffect/> */}
      
    </div>
  );
}

export default App;
