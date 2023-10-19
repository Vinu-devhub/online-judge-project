import { NavLink, Outlet } from "react-router-dom";
import OutlineButton from "../ui/OutlineButton";

const Header = () => {
  return (
    <>
      <div className="flex gap-96 justify-evenly items-center bg-[#F9504C]">
        <div className=" text-4xl font-semibold px-5 py-4 text-white ">
          <NavLink to="/">Online Judge</NavLink>
        </div>
        <div className=" flex gap-4 justify-center ">
          <NavLink to="login">
            <OutlineButton title="Sign In" />
          </NavLink>
          <NavLink to="register">
            <OutlineButton title="Register" />
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
