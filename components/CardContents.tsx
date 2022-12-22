import styled from '@emotion/styled';
import CustomCard from './CustomCard';
import { media } from '@/styles';
import CustomPagination from './CustomPagination';

export default function Contents() {
  return (
    <ContentsContainer>
      <CardsContainer>
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </CardsContainer>
      <CustomPagination />
    </ContentsContainer>
  );
}

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 0 1rem;
  margin-bottom: 2rem;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;
  gap: 2rem;
  max-width: 1330px;
  ${media.desktop_xlg} {
    max-width: 1330px;
  }
  ${media.desktop_mlg} {
    max-width: 1000px;
  }
  ${media.desktop_slg} {
    max-width: 665px;
  }
  ${media.tablet} {
    width: 100%;
  }
  padding: 0 1rem;
`;
