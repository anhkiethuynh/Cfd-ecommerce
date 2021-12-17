import { React } from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { Link, Outlet } from "react-router-dom";

// function MainLayout() {
//   return (
//     <div>
//       <div>
//         <Header />
//       </div>
//       <Outlet />
//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default MainLayout;
export const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
