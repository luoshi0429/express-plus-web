// Home.js
import React from 'react'
import DetailHeader from '../detail/DetailHeader'

const Home = ({children}) => {
  return (
    <div>
      <DetailHeader />
      {children}
    </div>
  )
}

export default Home
