import { useState } from 'react'
import TeacherCard from './TeacherCard';
import Data from "../Database/Data"

import "./Explore.css";


const ListArea = () => {

  
  const [currentPage, setCurrentPage] = useState(1);

  // only 4 cards
  const cardsPerPage = 4;

  // index
  const lastIndex = currentPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;

  // slicing
  const currentTeachers =
    Data.slice(firstIndex, lastIndex);

  // totalpage count
  const totalPages =
    Math.ceil(Data.length / cardsPerPage);


  return (

    <div className='listArea'>

      {/* this is main grid stut. */}
      <div className='cardsGrid'>

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