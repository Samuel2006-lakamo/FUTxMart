import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Header />
      <main className="bg-slate-100" style={{ fontFamily: "var(--font-poppins)" }}>
        <Outlet />
      </main>
      <Footer style={{ fontFamily: "var(--font-poppins)" }} />
    </>
  );
}

export default AppLayout;
