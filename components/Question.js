import styled from "styled-components";

import Image from "next/image";
import Link from "next/link";

const Container = styled.div`
  border-top: solid 1px #e9e9eb;
  margin: 1rem 0rem;
  padding: 1rem;
`;

const Responder = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }

  img {
    border-radius: 15px;
  }
`;

const ResponseContainer = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background: #e9e9eb;
`;
const Question = ({ question }) => {
  return (
    <Container>
      <h3>{question.question}</h3>
      <ResponseContainer>
        <p>{question.response}</p>
        <Responder>
          <Link href={question.responded_by_twitter_url} >
          <a>{question.responded_by}</a>
          </Link>
          <Image src={question.responded_by_photo_url} height={50} width={50} />
        </Responder>
      </ResponseContainer>
    </Container>
  );
};

export default Question;
