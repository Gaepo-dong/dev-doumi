import styled from '@emotion/styled';

export default function Content() {
  return (
    <ContentContainer>
      <ContentTitle>개발 도우미</ContentTitle>
      <ContentDescription>개발을 도와주는 도우미</ContentDescription>
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 0 1rem;
  margin-bottom: 2rem;
`;

const ContentTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #000;
`;

const ContentDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: #000;
`;
