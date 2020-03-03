import React from "react"
import GlobalStyle from "../assets/styles/globalStyles"
import styled from "styled-components"
import Navigation from "../components/navigation/navigation"


const MainLayout = ({ children }) => (
  <>
    <GlobalStyle/>
    <Navigation/>
    {children}
  </>
)

export default MainLayout
