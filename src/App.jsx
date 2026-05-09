import Header from "./layouts/Header";
import Nav from "./layouts/Nav";
import Container from "./layouts/Container";
import Footer from "./layouts/Footer";
import Benifit from "./layouts/Benifit";

import Explore from "./pages/Explore";

import "./layouts/layout.css";
import TeacherSignup from "./pages/TeacherSignup"
import StudentSignup from "./pages/StudentSignup"

import { Routes, Route } from "react-router-dom";

function App() {
  return (

    <Routes>
      <Route path="/" element={
        <>
        <Header>
          <Nav/>
        </Header>
        <Container/>
        <Benifit/>
        <Footer/>
        </>
      } />

      <Route path="/ExploreTeacherList" element={
        <>
        <Explore/>
        </>        
      }/>
      <Route path="/studentSignUp" element={
        <>
        <StudentSignup/>
        </>
      } />

      <Route path="/teacherSignUp" element={
        <>
        <TeacherSignup/>
        </>
      } />
      
    </Routes>
  );
}

export default App;