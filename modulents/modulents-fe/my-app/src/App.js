import { styled } from "styled-components";
import { MainLayout } from "./styles/Layouts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import image from "./Penguins.jpeg"
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
// import Projects from "./components/Projects/Projects";

function App() {
  // const [active, setActive] = useState(1);

  // react-router-redirect

  return (
    <div class="container" style={{
      backgroundImage: `url(${image})`
    }} className="App">
      <header className="App-header">
        <Header />
      </header>

      {/* <div className="projects">
        <h1>Open Projects</h1>
        <Projects />
      </div> */}
      <div className="portfolio">
        <h2>Portfolio - Completed</h2>
        <Portfolio />
      </div>
    </div>
  );
}
// const displayData = () => {
//   switch (active) {
//     case 1:
//       return <Dashboard />;

//     case 2:
//       return <Expenses />;

//     case 3:
//       return <Incomes />;

//     case 4:
//       return <Travel />;

//     default:
//       return <Header />;
//   }
// };

//   return (
//     // TODO: add bg
//     <AppStyled className="App">
//       <MainLayout>
//         <main>{displayData()}</main>
//       </MainLayout>
//     </AppStyled>
//   );
// }

// const AppStyled = styled.div`
// height: 100vh;
// background-image: url(${(props) => props.bg});
// position: relative;
// main {
//   flex: 1;
//   background: rgba(252, 246, 249, 0.78);
//   border: 3px solid #ffffff;
//   backdrop-filter: blur(4.5px);
//   border-radius: 32px;
//   overflow: auto;
//   overflow-x: hidden;
//   &::-webkit-scrollbar {
//     width: 0;
//   }
// }


export default App;