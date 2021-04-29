import styled from "styled-components";
import QuestionList from "../components/QuestionList";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Container = styled.main`
  display: flex;
  height: 100vh;
  background: white;
`;

const InnerContainer = styled.div`
  width: clamp(500px, 80%, 1000px);
`;

export default function Home() {
  return (
    <Container>
      <InnerContainer>
        <Title>#DSAMA</Title>
        <h3>Ask anything to the ds investor group..</h3>
        <QuestionList />
      </InnerContainer>
    </Container>
  );
}
