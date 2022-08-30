
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import './css/sb-admin-2.css'
import Dashboard from './Dashboard';
import Portal from './Portal';
import StudentEdit from './StudentEdit';
import Students from './Students';
import StudentView from './StudentView';
import TeacherEdit from './TeacherEdit';
import Teachers from './Teachers';
import ViewTeach from './ViewTeach';

function App() {
  return (
  <BrowserRouter>
<Routes>

  <Route path="/" element={<Portal/>}>
    <Route index element={<Dashboard/>}/>
    <Route path="students" element={<Students/>}/>
    <Route path="student-edit/:id" element={<StudentEdit/>}/>
    <Route path="student-view/:id" element={<StudentView/>}/>
<Route path="teachers" element={<Teachers/>}/>
<Route path="teacher-edit/:id" element={<TeacherEdit/>}/>
<Route path="view-teach/:id" element={<ViewTeach/>}/>
  </Route>


</Routes>
  </BrowserRouter>
     
    

 
  );
}

export default App;
