import { FC } from "react";
import { Layout } from "antd";
import styled from "@emotion/styled";

const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  text-align: center;
  background:#5C4033;

  color: white;
  padding: 10px;
`;

const AppFooter: FC = () => {
  return <StyledFooter>© 2024 Lina's Café. All Rights Reserved.</StyledFooter>;
};

export default AppFooter;
