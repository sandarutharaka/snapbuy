import ProductImageUpload from '@/components/admin-view-c/image-upload';
import CommonForm from '@/components/common/form';
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { addProductFormElements } from '@/config';
import React, { Fragment, useState } from 'react'


const initialFormData ={
  image :null,
  title : '',
  description : '',
  category : '',
  brand : '',
  price: '',
  salePrice:'',
  totalStock:''
}



const AdminProducts = () => {

  const [openCreateProduct, setOpenCreateProduct] = useState(false);
  const [formdata,setFormdata] = useState(initialFormData)
  const [imageFile,setImageFile] = useState(null)
  const [uplaodImageUrl,setUploadImageUrl] =useState('')

  function onSubmit()
  {

  }

  return (
    <Fragment>
      <div className='mb-5 flex w-full justify-end'>
        <Button onClick={()=>setOpenCreateProduct(true)} className="py-6">Add New Product</Button>

      </div>
      <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4'>
        <Sheet open ={openCreateProduct} onOpenChange={()=>setOpenCreateProduct(false)}>
          <SheetContent className="overflow-auto" side='right'>
            <SheetHeader>
              <SheetTitle>Add New Products</SheetTitle>
            </SheetHeader>
          <ProductImageUpload file={imageFile} setFile={setImageFile} uplaodImageUrl={uplaodImageUrl} setUploadImageUrl={setUploadImageUrl}/>
          <div className='p-6'>
            <CommonForm
              onsubmit={onSubmit}
              formData={formdata}
              setFormData={setFormdata}
              buttonText='Add'
              formControls={addProductFormElements}
            />
          </div>
          </SheetContent>

        </Sheet>
      </div>
    </Fragment>
  )
}

export default AdminProducts