import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 12px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const SidebarWrapper = styled.div`
  width: 20%;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const Content = styled.div`
  width: 78%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;