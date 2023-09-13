import { Heading } from '@chakra-ui/react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const FilterComponent = () => {
  const link_style = {
    textDecoration: "none",
    display: "flex",
    // background: 'black',
    padding: '5px 0 5px 5px',
    fontSize: '20px'
  }
  const handleLinkClick=(value)=>{
    alert(value)
  }
  return (
    <>
      <Heading textAlign={"center"} color={"grey"}>COLLECTIONS</Heading>
      <div style={{ display: "grid", gridColumn: "1fr", gap: "40px", textAlign: "justify", justifyContent: "center" }}>

        <NavLink to="" style={link_style}>All</NavLink>
        <Link to="" style={link_style} value="accessories" onClick={(e)=>handleLinkClick(e.target.value)}>Accessories</Link>
        <Link to="" style={link_style}>Skatebags</Link>
        <Link to="" style={link_style}>Skateboard completes</Link>
        <Link to="" style={link_style}>Skateboard decks</Link>
        <Link to="" style={link_style}>Skateboard wheels</Link>
      </div>
    </>
  )
}
