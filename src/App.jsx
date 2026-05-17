import Header from "./layouts/Header";
import Nav from "./layouts/Nav";
import Container from "./layouts/Container";
import Footer from "./layouts/Footer";
import Benifit from "./layouts/Benifit";

import Explore from "./pages/Explore";

import "./layouts/layout.css";
import TeacherSignup from "./pages/TeacherSignup"
import StudentSignup from "./pages/StudentSignup"
import SearchBar from "./pages/SearchBar";
import ExploreFooter from "./pages/ExploreFooter";
import FilterArea from "./pages/FilterArea";
import ListArea from "./pages/ListArea";

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

      <Route path="/explore-teacher-list" element={
        
        <Explore/>
                
      }/>
      
      <Route path="/student-sign-up" element={
        <StudentSignup/>
      } />

      <Route path="/teacher-sign-up" element={
        <TeacherSignup/>
      } />
      
    </Routes>
  );
}

export default App;