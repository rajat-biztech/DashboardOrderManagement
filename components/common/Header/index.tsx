import { FC, PropsWithChildren } from "react";
import { HeaderWrapper } from "./styles";

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div>
    <HeaderWrapper>
      <h1>Proofed</h1>
    </HeaderWrapper>
    {children}
  </div>
);

export default Layout;
