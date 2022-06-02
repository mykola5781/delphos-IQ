import MainFooter from "./main-footer";
import MainHeader from "./main-header";

interface DefaultLayoutProps {
  children: any;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <MainHeader />
      <div className="my-4 px-10">{children}</div>
      <MainFooter />
    </>
  );
};

export default DefaultLayout;
