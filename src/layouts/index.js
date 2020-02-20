import React from "react"
import GlobalStyle from '../assets/styles/globalStyles';
import Navigation from "../components/navigation/navigation"
import Footer from "../components/footer/footer"


const MainLayout = ({children}) => (
  <>
    <GlobalStyle/>
    <Navigation/>
    {children}
    <Footer/>
  </>
);

export default MainLayout;
