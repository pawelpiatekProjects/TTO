import React from "react"
import GlobalStyle from "../assets/styles/globalStyles"
import styled from "styled-components"
import Navigation from "../components/navigation/navigation"
import SmallNav from "../components/smallNav/smallNav"
import Footer from "../components/footer/footer"

const Content = styled.div`
margin-bottom: -5rem;
`;

const MainLayout = ({ children }) => (
<>

      <Navigation/>
    <GlobalStyle/>
      {children}

</>

)

export default MainLayout
