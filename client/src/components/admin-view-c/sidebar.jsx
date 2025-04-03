import {
  ChartNoAxesCombined,
  Feather,
  LayoutDashboard,
  ShoppingBasket,
  Truck,
} from "lucide-react";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";

const AdminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    id: "products",
    label: "Products",
    path: "/admin/products",
    icon: <ShoppingBasket />,
  },
  {
    id: "features",
    label: "Features",
    path: "/admin/features",
    icon: <Feather />,
  },
  {
    id: "orders",
    label: "Orders",
    path: "/admin/orders",
    icon: <Truck />,
  },
];

function MenuItems() {
  const navigate = useNavigate();
  return (
    <nav className="mt-8 flex-col flex gap-2 ">
      {AdminSidebarMenuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          onClick={() => navigate(menuItem.path)}
          className="flex text-2xl curor-pointer items items-center text-muted-foreground hover:bg-muted hover:text-foreground  gap-2 rounded-md px-3 py-2"
        >
          {menuItem.icon}
          <span>{menuItem.label}</span>
        </div>
      ))}
    </nav>
  );
}

const AdminSidebar = ({ open, setOpen }) => {
  const navigate = useNavigate();
  return (
    <Fragment>
      
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64">
          <div className="flex flex-col h-full">
            <SheetHeader className="border-b">
              <SheetTitle className="flex gap-2 items-center mt-4 mb-5 justify-center text-2xl font-bold">
                <ChartNoAxesCombined size={25} />
                <span>Admin Panel</span>
              </SheetTitle>
            </SheetHeader>
            <SheetClose>
                <MenuItems />
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
      <aside className="border-r hidden w-64 flex-col  bg-background p-6 lg:flex ">
        <div className="">
          <div
            onClick={() => navigate("/admin/dashboard")}
            className="flex items-center gap-2 justify-center cursor-pointer"
          >
            <ChartNoAxesCombined size={25} />
            <h1 className="text-xl font-extrabold ">Admin Panel</h1>
          </div>
        </div>
        <MenuItems />
      </aside>
    </Fragment>
  );
};

export default AdminSidebar;
