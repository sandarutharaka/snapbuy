import { LogOut, Menu, ShoppingCart, UserRoundCog } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { shoppingViewHeaderMenuItems } from "@/config";

import { Avatar, AvatarFallback } from "../ui/avatar";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { logoutUser } from "@/store/auth-slice";
import UserCartWrapper from "./cart-wrapper";
import { fetchCartItems } from "@/store/shop/cart-slice";

function MenuItems() {
  return (
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
      {shoppingViewHeaderMenuItems.map((menuItem) => (
        <Link
          className="text-sm font-medium"
          key={menuItem.id}
          to={menuItem.path}
        >
          {menuItem.label}
        </Link>
      ))}
    </nav>
  );
}

function HeaderRightContent() {
  const {  user } = useSelector((state) => state.auth);
    const {cartItems}=useSelector(state=>state.shopCart)
  const [openCartSheet,setOpenCartSheet] =useState(false);
  const navigate =useNavigate()
  const dispatch =useDispatch()

  function handleLogout(){
      dispatch(logoutUser())
    }

    useEffect(()=>{
      dispatch(fetchCartItems(user?.id))
    },[dispatch])
  

  return (
    <div className="flex lg:items-center flex-col lg:flex-row gap-4">

      <Sheet open={openCartSheet} onOpenChange={()=>setOpenCartSheet(false)}>
      <Button onClick={()=>setOpenCartSheet(true)} variant="outline">
        <ShoppingCart className="w-6 h-6" />
        <span className="sr-only">User Cart</span>
      </Button>

      <UserCartWrapper cartItems={cartItems && cartItems.items && cartItems.items.length >0 ?cartItems.items: []}/>

      </Sheet>

      

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="bg-black p-2">
            <AvatarFallback className="bg-black text-white font-extrabold p-2">
              {user?.userName[0].toUpperCase()}

            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" className="w-56">
          <DropdownMenuLabel>
            Log in As {user?.userName}
          </DropdownMenuLabel>
          <DropdownMenuSeparator/>
          <DropdownMenuItem onClick={()=>navigate('/shop/account')} >
          <UserRoundCog className="mr-5 h-1 w-4" />
          Account


          </DropdownMenuItem>

          <DropdownMenuSeparator/>
          <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-5 h-1 w-4" />
          LogOut


          </DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

const ShoppingHeader = () => {
  const { isAuthenticated} = useSelector((state) => state.auth);

  

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background ">
      <div className="flex h-20 items-center justify-between px-4 md:px-6">
        <Link to="/shop/home" className="flex gap-2 items-center">
          <img className="w-[50px]" src={logo} alt="" />
          <span className="text-2xl font-bold">
            <span className="">Snap</span>Buy
          </span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden ">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle header menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-xs p-10 ">
            <MenuItems />
            <HeaderRightContent/>
          </SheetContent>
        </Sheet>
        <div className="hidden lg:block ">
          <MenuItems />
        </div>
        <div className="hidden lg:block"><HeaderRightContent/></div>
      </div>
      
    </header>
  );
};

export default ShoppingHeader;
