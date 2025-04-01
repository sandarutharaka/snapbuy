import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminLayout from "./components/admin-view-c/layout"
import AdminDashboard from "./pages/admin-view/dashboard"
import AdminProducts from "./pages/admin-view/products"
import AdminFeatures from "./pages/admin-view/features"
import AdminOrders from "./pages/admin-view/orders"
import ShoppingLayout from "./components/shopping-view-c/layout"
import NotFound from "./pages/not-found"
import ShoppingHeader from "./components/shopping-view-c/header"
import ShoppingAccount from "./pages/shopping-view/account"
import ShoppingListing from "./pages/shopping-view/listing"
import ShoppingCheckout from "./pages/shopping-view/checkout"
import ShoppingHome from "./pages/shopping-view/home"
import CheckAuth from "./components/common/check-auth"
import UnauthPage from "./pages/unauth-page"
import { Toaster } from "sonner";

function App() {

  const isAuthenticated = false;
  const user = null;


  return (
    <>
      <div className=" flex flex-col overflow-hidden  bg-white"> 
        <Routes>
          <Route path ="/auth" element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout/>
            </CheckAuth>
          }>
             <Route path ="login" element={<AuthLogin/>} />
             <Route path ="register" element={<AuthRegister/>} />
          </Route>
          <Route path="/admin" element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout/>
            </CheckAuth>
          }>
            <Route path="dashboard" element={<AdminDashboard/>}/>
            <Route path="products" element={<AdminProducts/>}/>
            <Route path="features" element={<AdminFeatures/>}/>
            <Route path="orders" element={<AdminOrders/>}/>
          </Route>
          <Route path="/shop" element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout/>
            </CheckAuth>
          }>
            <Route path="home" element={<ShoppingHome/>}/>
            <Route path="account" element={<ShoppingAccount/>}/>
            <Route path="listing" element={<ShoppingListing/>}/>
            <Route path="checkout" element={<ShoppingCheckout/>}/>
          </Route>
          <Route path="*" element={<NotFound/>}></Route>
          <Route path="/unauth-page" element={<UnauthPage/>}></Route>
        </Routes>
        <Toaster/>
      </div>
    </>
  )
}

export default App
