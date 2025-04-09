import ProductImageUpload from "@/components/admin-view-c/image-upload";
import AdminProductTile from "@/components/admin-view-c/product-tile";
import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { addProductFormElements } from "@/config";
import { addNewProduct, fetchAllProducts } from "@/store/admin/product-slice";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";


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
  const [formData, setFormdata] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const { productList } = useSelector((state) => state.adminProducts);
  const [currentEditedId,setCurrentEditedId] = useState(null)
  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(
      addNewProduct({
        ...formData,
        image: uploadedImageUrl,
      })
    ).then((data) => {
      console.log(data);
      if(data?.payload?.success){
        setImageFile(null);
        setFormdata(initialFormData)
        setOpenCreateProduct(false)
        dispatch(fetchAllProducts())
        toast.success('Product Added Successfully')
      }
    });
  }

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  console.log(productList, "productList", uploadedImageUrl);

  return (
    <Fragment>
      <div className="mb-5 flex w-full justify-end ">
        <Button onClick={() => setOpenCreateProduct(true)} className="py-6">
          Add New Product
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 ">
        {
          productList && productList.length > 0 ? productList.map(productItem=><AdminProductTile setFormData={setFormdata} setOpenCreateProduct={setOpenCreateProduct} setCurrentEditedId={setCurrentEditedId} product={productItem}/>) : null
        }
      </div>
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
              imageLoadingState={imageLoadingState}
            />
            <div className="px-6">
              <CommonForm
                onSubmit={onSubmit}
                formData={formData}
                setFormData={setFormdata}
                buttonText="Add"
                formControls={addProductFormElements}
              />
            </div>
          </SheetContent>
        </Sheet>
    </Fragment>
  );
};

export default AdminProducts;
