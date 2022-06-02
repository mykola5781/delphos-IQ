import DefaultLayout from "./default-layout";

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <DefaultLayout>{children}</DefaultLayout>;
};

export default Layout;
