import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {HashRouter, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import CreateStudent from './components/CreateStudent';
import StudentList from './components/StudentList';
import EditStudent from './components/EditStudent';

function App() {
  return (
    <div class="container">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<CreateStudent />} />
          <Route path="/create-student" element={<CreateStudent />} />
          <Route path="/student-list" element={<StudentList />} />
          <Route path="/edit-student/:id" element={<EditStudent />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
