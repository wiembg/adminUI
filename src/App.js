import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';

import { useStateContext } from './contexts/ContextProvider';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
const App = () => {
  //const activeMenu=true;
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
     
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                style={{ background: "blue", borderRadius: '50%' }}//setting colorbutton 
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>

          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
               <Sidebar/>
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
                  {/* it s not gonna be visible web:0*/}
                  <Sidebar/>
            </div>
          )}

<div  className={`dark:bg-main-dark-bg  bg-main-bg min-h-screen${activeMenu ? "w-72" : "w-0"}`}>
<div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full "> navbar  </div>    </div>    
                    
           
          
        
        </div>


       {/*  <div>
        <Routes>
          <Route path="/" element="home" />
          <Route path="/about" element="about" />
          </Routes>
          </div> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
