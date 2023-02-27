import styled from "styled-components";
import { ClockWithTooltip } from "./components";

function App() {
  return (
    <>
      <Header>Analog Clock</Header>
      <Main>
        <ClockWithTooltip />
      </Main>
    </>
  );
}

const Header = styled.header`
  padding: 2rem 0 3rem;
  text-align: center;
  font-size: xxx-large;
  font-weight: 900;
  color: var(--light-gray);
  text-shadow: 1px 1px 2px var(--navy), -2px -2px 2px var(--white);
`;

const Main = styled.main`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export default App;
