import styled from '@emotion/styled';
import { GithubOutlined } from '@ant-design/icons';

export default function Footer() {
  const onGithub = () => {
    window.open('https://github.com/Gaepo-dong/dev-doumi', '_blank');
  };

  return (
    <FooterContainer>
      <div>
        <p>개발 도우미</p>
        &copy; {new Date().getFullYear()} All rights reserved
      </div>
      <div>
        <GithubOutlined style={{ fontSize: '32px' }} onClick={onGithub} />
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-size: 1rem;
    font-weight: 700;
    line-height: 0;
  }
`;
