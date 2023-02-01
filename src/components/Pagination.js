import React, { useEffect, useState } from "react";

const Pagination = ({ limit, offset, length, setOffset }) => {

  const [ allPages, setAllPages ] = useState(0)
  const [ currentPage, setCurrentPage ] = useState(1)

  const handleNext = () => {
    if (currentPage === allPages) {
      return
    }
    setOffset(prev => prev + limit)
    setCurrentPage(prev => prev + 1)
  }
  const handlePrev = () => {
    if (currentPage === 1) {
      return
    }
    setOffset(prev => prev - limit)
    setCurrentPage(prev => prev - 1)
  }

  useEffect(() => {
    const allPages = Math.ceil(length / limit)
    setAllPages(allPages)
  }, [ length ])


  return ( 
    <>
    <button onClick={handlePrev}>
      prev
    </button>
    <h1>{currentPage}/{allPages}</h1>
    <button onClick={handleNext}>
      next
    </button>
    </>
  );
}
 
export default React.memo(Pagination);