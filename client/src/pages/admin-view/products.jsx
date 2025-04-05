import ProductImageUpload from "@/components/admin-view-c/image-upload";
import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { addProductFormElements } from "@/config";
import { fetchAllProducts } from "@/store/admin/product-slice";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
};

const AdminProducts = () => {
  const [openCreateProduct, setOpenCreateProduct] = useState(false);
  const [formdata, setFormdata] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState,setImageLoadingState]=useState(false)

  const {productList} =useSelector(state=>state.adminProducts)
const dispatch =useDispatch();

  function onSubmit(event) {
    event.preventDefault();
    
  }

  useEffect(()=>{
    dispatch(fetchAllProducts())
  },[dispatch])


  console.log(productList,"productList");
  

  return (
    <Fragment>
      <div className="mb-5 flex w-full justify-end ">
        <Button onClick={() => setOpenCreateProduct(true)} className="py-6">
          Add New Product
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 ">
        <Sheet
          open={openCreateProduct}
          onOpenChange={() => setOpenCreateProduct(false)}
        >
          <SheetContent className="overflow-auto" side="right">
            <SheetHeader>
              <SheetTitle>Add New Products</SheetTitle>
            </SheetHeader>
            <ProductImageUpload
              imageFile={imageFile}
              setImageFile={setImageFile}
              uploadedImageUrl={uploadedImageUrl}
              setUploadedImageUrl={setUploadedImageUrl}
              setImageLoadingState={setImageLoadingState}
              imageLoadingState ={imageLoadingState}
              
            />
            <div className="px-6">
              <CommonForm
                onsubmit={onSubmit}
                formData={formdata}
                setFormData={setFormdata}
                buttonText="Add"
                formControls={addProductFormElements}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Fragment>
  );
};

export default AdminProducts;
