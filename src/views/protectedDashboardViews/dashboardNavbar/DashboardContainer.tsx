import { ReactNode } from 'react';
import { DashboardSecondBox, MainDashboardContainer } from './DashboardContainer.styled';

const DashboardContainer = ({ children }: { children: ReactNode }) => (
  <MainDashboardContainer>
    <DashboardSecondBox>{children}</DashboardSecondBox>
  </MainDashboardContainer>
);

export default DashboardContainer;
