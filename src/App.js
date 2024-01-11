import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import "bootstrap-icons/font/bootstrap-icons.css"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Logesh from './components/UseEffect/Logesh';
import Form from './Task/Form';
import Registrationform from './Task/Registrationform';
import Apps from './Task/Theme/Apps';
import UserRefHook from './components/UseRef/UserRefHook';
import UseRefTask from './components/UseRef/UseRefTask'
import UseContextTask from './Task/Theme Task/UseContextTask';
import UseCallBackHook from './components/USeCallback/UseCallBackHook';
import UseCallBackTask from './components/USeCallback/UseCallBackTask';
import UseCallBackEdit from './components/USeCallback/UseCallBackEdit';
import UseReducerHook from './components/UseReducer/UseReducerHook';
import ViewUser from './CRUDaxios/ViewUser';
import CreateUser from './CRUDaxios/CreateUser';
// import Edit from './CRUDaxios/Edit';
import Edit from './CRUDfiles/Edit';
import Create from './CRUDfiles/Create'
import View from './CRUDfiles/View'
import Signin from './Task/CRUD Task/Signin';
import GmailFront from './Task/Gmail/GmailFront';
import Dummy from './Dummy'
import GmailInbox from './Task/Gmail/GmailInbox';
import BookMy from './Task/Bookmyshow/BookMy';
import UseStateMathis from './components/UseState/UseStateMathis';

function App() {
  return (
    <div>
      {/* <Form/> */}
    {/* < Logesh /> */}
    {/* <Registrationform/> */}
    {/* <Apps/> */}
    {/* <UserRefHook/> */}
    {/* <UseStateMathis/> */}
    {/* <UseRefTask/> */}
    {/* <UseContextTask/>  */}
    {/* <UseCallBackHook/> */}
    {/* <UseCallBackTask/> */}
    {/* <UseCallBackEdit/> */}
    {/* <UseReducerHook/> */}
    {/* <GmailFront/> */}
    {/* <BookMy/> */}
    {/* <GmailInbox/> */}

    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<ViewUser/>}></Route>
        <Route path='/create' element={<CreateUser/>}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route> */}
        <Route path='/' element={<View/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route>
        {/* <Route path='/' element={<Signin/>}></Route> */}
        {/* <Route path='/front' element={<Front/>}></Route> */}
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
