import React from 'react';
import ScrollToTheTop from './Components/ScrollToTheTop/ScrollToTheTop';
import StudentPopup from './Components/StudentPopup/StudentPopup';
import PopupSection from './Components/PopupSection/PopupSection';
import Container from './Components/Container/Container';
import GithubLink from './Components/GithubLink/GithubLink';
import AddFormOpen from './Components/AddFormOpen/AddFormOpen';
import ColorMenu from './Components/ColorMenu/ColorMenu';
import RightSetting from './Components/RightSetting/RightSetting';

function App() {
  return (
    <div className="App">
                     
      <ColorMenu />
                
      <RightSetting />
                      
      <AddFormOpen />
                 
      <GithubLink />
               
      <Container />

      <PopupSection />

      <StudentPopup /> 

      <ScrollToTheTop />
            
    </div>
  );
}

export default App;
