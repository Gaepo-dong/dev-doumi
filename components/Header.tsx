import styled from '@emotion/styled';

export default function Header({ title }: { title: string | undefined }) {
  return (
    <HeaderContainer>
      <h1>{title}</h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 0;
  }
`;
