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
  margin: 0 auto;
`;

const Header = styled.div`
  padding: 1rem;
`;

export default function Home({ data }) {
  return (
    <Container>
      <InnerContainer>
        <Header>
          <Title>#DSAMA</Title>
          <h3>Ask anything to the ds investor group..</h3>
        </Header>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <QuestionList questions={data} />
      </InnerContainer>
    </Container>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.airtable.com/v0/appR5TwS5oZ5ZUr33/Questions?filterByFormula={Status}='Published'",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_KEY}`,
      },
    }
  );

  console.log(res);
  const data = await res.json();

  const formattedData = data.records.map((question) => {
    console.log(question);
    return {
      question: question.fields["Question"],
      responded_by: question.fields["responded_by_formula"],
      responded_by_photo_url: question.fields["responded_by_photo_url"][0],
      responded_by_twitter_url: question.fields["responder_twitter"][0],
      response: question.fields["response"][0],
      id: question.id,
    };
  });

  return {
    props: { data: formattedData },
    revalidate: 1,
  };
}
