import { useState } from 'react'
import TeacherCard from './TeacherCard';


import "./Explore.css";


const ListArea = ({searchText,
  selectedExperience,
  selectedEmployment,
  teachers,
  loading
}) => {


  // testing props 
  console.log(searchText)

  const safeTeachers = teachers || [];



  const filteredTeachers = safeTeachers.filter((teacher) => {

    return (

      // .lowercase in for case sensitive, -> teacher.fullname.includes(searchText) this is the default pattern
      (

        teacher.name
          .toLowerCase()
          .includes(searchText.toLowerCase())

        ||

        teacher.city
          .toLowerCase()
          .includes(searchText.toLowerCase())

        ||

        (teacher.subjects || []).join(" ")
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
    teacher.yoe >= 0 &&
    teacher.yoe <= 2
  )

  ||

  (
    selectedExperience === "3-5" &&
    teacher.yoe >= 3 &&
    teacher.yoe <= 5
  )

  ||

  (
    selectedExperience === "5+" &&
    teacher.yoe >= 5
  )

  ||

  (
    selectedExperience === "10+" &&
    teacher.yoe >= 10
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
  // const totalPages =
  //   Math.ceil(filteredTeachers.length / cardsPerPage);

  const totalPages = Math.max(
  1,
  Math.ceil(filteredTeachers.length / cardsPerPage)
);





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
            key={t._id}
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