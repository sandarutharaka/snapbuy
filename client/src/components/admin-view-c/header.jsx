import React from "react";
import { Button } from "../ui/button";
import { AlignJustify, LogOut } from "lucide-react";
import { logoutUser } from "@/store/auth-slice";
import { useDispatch } from "react-redux";

const AdminHeader = ({setOpen}) => {
  const dispatch = useDispatch()

  function handleLogout(){
    dispatch(logoutUser())
  }

  return (
    <header className="flex items-center bg-background border-b justify-between px-4 py-3">
      <Button onClick={()=>setOpen(true)} className = "lg:hidden sm:block ">
        <AlignJustify />
        <span className="sr-only">Toggle Menu</span>
      </Button>

      <div className="flex flex-1 justify-end">
        <Button onClick={handleLogout} className="flex items-center rounded-md gap-2 px-4 text-sm font-medium shadow">
          <LogOut />
          Logout
        </Button>
    
      </div>
    </header>
  );
};
export default AdminHeader;
