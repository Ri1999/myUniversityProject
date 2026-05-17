import { useState } from 'react'
import TeacherCard from './TeacherCard';
import Data from "../Database/Data"

import "./Explore.css";


const ListArea = ({searchText,
  selectedExperience,
  selectedEmployment
}) => {


  // testing props 
  console.log(searchText)

  const filteredTeachers = Data.filter((teacher) => {

    return (

      // .lowercase in for case sensitive, -> teacher.fullname.includes(searchText) this is the default pattern
      (

        teacher.fullname
          .toLowerCase()
          .includes(searchText.toLowerCase())

        ||

        teacher.city
          .toLowerCase()
          .includes(searchText.toLowerCase())

        ||

        teacher.expertise
          .toLowerCase()
          .includes(searchText.toLowerCase())

      )

      // employment filter
      &&

      (

        selectedEmployment === ""

        ||

        teacher.employment === selectedEmployment

      )
      &&

(

  selectedExperience === ""

  ||

  (
    selectedExperience === "0-2" &&
    teacher.experience >= 0 &&
    teacher.experience <= 2
  )

  ||

  (
    selectedExperience === "3-5" &&
    teacher.experience >= 3 &&
    teacher.experience <= 5
  )

  ||

  (
    selectedExperience === "5+" &&
    teacher.experience >= 5
  )

  ||

  (
    selectedExperience === "10+" &&
    teacher.experience >= 10
  )

)






    )

  })



  
  const [currentPage, setCurrentPage] = useState(1);

  // only 4 cards
  const cardsPerPage = 4;

  // index
  const lastIndex = currentPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;

  // slicing
  const currentTeachers =
    filteredTeachers.slice(firstIndex, lastIndex);

  // totalpage count
  const totalPages =
    Math.ceil(filteredTeachers.length / cardsPerPage);


  return (

    <div className='listArea'>

      

      

      {/* this is main grid stut. */}
      <div className='cardsGrid'>

        {/*  add this when doing all filter integrations */}


        {filteredTeachers.length === 0 && (
        <h2 style={{textAlign:"right", width:"600px" , color:"gold"}} >No teachers found 😔</h2>

        )}

        {currentTeachers.map((t) => (

          <TeacherCard
            key={t.id}
            teacher={t}
          />

        ))}
        

      </div>

      {/* pagination for button */}
      <div className='paginationControls'>

        <button

          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage(currentPage - 1)
         }

        >
          Prev
        </button>

        <p>
          Page {currentPage} of {totalPages}
        </p>

        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage(currentPage + 1)
          }
        >
          Next
        </button>

      </div>
      

    </div>
  )
}

export default ListArea