import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: any) {
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
