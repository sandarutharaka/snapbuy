import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

function AdminProductTile({ product ,setFormData,setOpenCreateProduct,setCurrentEditedId ,handleDelete}) {
  return (
    <Card className="w-full max-w-sm mx-auto pt-0 pb-6 overflow-hidden">
      <div>
        <div  className="">
          <img
            src={product?.image}
            alt={product.title}
            className="w-full h-[300px] object-cover "
          />
        </div>
        <CardContent>
          <h2 className="text-xl font-bold mb-2 mt-2">{product?.title}</h2>
          <div className="flex justify-between items-center mb-2">
            <span
              className={`${
                product?.salePrice > 0 ? "line-through " : ""
              } text-lg font-semibold text-primary`}
            >
              ${product?.price}
            </span>
            {
              product?.salePrice > 0 ? <span className="text-sm font-bold">${product?.salePrice}</span> : null
            }
            
          </div>
        </CardContent>
        <CardFooter className="mt-4 flex justify-around items-center">
          <Button onClick={()=>{
            setOpenCreateProduct(true)
            setCurrentEditedId(product?._id)
            setFormData(product)
          }} className="px-6">Edit</Button>
          <Button onClick={()=>handleDelete(product?._id)} className="px-4">Delete</Button>
        </CardFooter>
      </div>
    </Card>
  );
}

export default AdminProductTile;
