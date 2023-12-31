import { Outlet, useNavigate } from "react-router-dom";
import Smsidber from "./Smsidber";
import useNavlist from "../../Hooks/useNavlist";
import { useContext } from "react";
import { Authpro } from "../../Router/Authprovider";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const Layout = () => {
  const navlist = useNavlist();
  const { user, Logout } = useContext(Authpro);
  const navigate = useNavigate()

  const handlelogout = () => {
    Logout();
    navigate("/login")
  };
  return (
    <div className="grid grid-cols-12">
      <div className="bg-slate-100 relative md:col-span-2 h-full border">
        <div className="fixed px-10">
          <h1 className="text-center text-2xl font-bold py-2">Dashboard</h1>
          <ul className="hidden md:contents">{navlist}</ul>
          <button className="border w-full my-2" onClick={handlelogout}>
            Logout
          </button>
        </div>
      </div>
      <div className="col-span-12  md:col-span-10 ">
        <div className="    ">
          <div className="fixed bg-slate-100 w-full flex items-center border-b py-3">
            <div className="contents md:hidden">
              <Smsidber></Smsidber>
            </div>
            <div className="flex items-center w-[80%]
             justify-between">
              <h1 className="px-5 text-3xl font-bold">I<span className="text-red-300">Task</span></h1>
              <h1 className="px-5 font-bold">{user?.email}</h1>
            </div>
          </div>
        </div>

        <DndProvider backend={HTML5Backend}>
          <div className="min-h-screen pt-16 bg-slate-50">
            <Outlet></Outlet>
          </div>
        </DndProvider>
      </div>
    </div>
  );
};

export default Layout;
