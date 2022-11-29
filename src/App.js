import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <MainContainer>
        <Header />
      </MainContainer>
    </div>
  );
}

export default App;

const MainContainer = styled.div`
  padding: 32px 32px 0 32px;
`;
