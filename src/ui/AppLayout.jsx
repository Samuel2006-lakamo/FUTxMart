import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Header />
      <main style={{ fontFamily: "var(--font-poppins)" }}>
        <Outlet />
      </main>
      <Footer style={{ fontFamily: "var(--font-poppins)" }} />
    </>
  );
}

export default AppLayout;
