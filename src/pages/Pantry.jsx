import React from 'react'
import Navbar from '../components/Navbar'
import PantryList from '../components/Pantry/PantryList'

function Pantry() {
  React.useEffect(() => {
    //scroll to top
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pantry">
      <Navbar />
      <PantryList />
    </div>
  )
}

export default Pantry