import { styled } from "styled-components";
import { MainLayout } from "./components/styles/Layouts";
import { useState } from "react";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Projects from "./components/Projects/Projects";

function App() {
  const [active, setActive] = useState(1);


  return (
    <div style={{
      backgroundImage: `url(${image})`
    }} className="App">
      <header className="App-header">
        <Header />
      </header>

      <Routes>
        <Route path="/teamdata" element={<TeamsStats />} />
        <Route path="/playerdata" element={<PlayerStats />} />
      </Routes>
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