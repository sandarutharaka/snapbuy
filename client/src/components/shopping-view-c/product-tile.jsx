import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

function ShoppingProductTile({ product, handleGetProductDetails ,handleAddtoCart }) {
  return (
    <Card className="w-full max-w-sm mx-auto p-0">
      <div onClick={()=>handleGetProductDetails(product?._id)}>
      <div className="relative ">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[250px] object-cover rounded-t-lg"
        />
        {product?.salePrice > 0 ? (
          <Badge className="absolute py-1 px-2 top-2 left-2 bg-teal-500 hover:bg-teal-600">
            Sale
          </Badge>
        ) : null}
      </div>
      <CardContent className="px-3">
        <h2 className="text-xl font-bold mb-2 capitalize">{product?.title}</h2>
        <div className="flex  justify-between items-center mb-2">
          <span className="capitalize text-[16px] text-muted-foreground">
            {product?.category}
          </span>
          <span className="capitalize text-[16px] text-muted-foreground">
            {product?.brand}
          </span>
        </div>
        <div className="flex  justify-between items-center mb-2">
          <span
            className={`${
              product?.salePrice > 0 ? "line-through" : ""
            } text-lg font-semibold text-primary`}
          >
            ${product?.price}
          </span>
          {product?.salePrice > 0 ? (
            <span className="text-lg font-semibold tex                                                                                                                                                                                                                                                                                                                                                                                                                                                            t-primary">
              ${product?.salePrice}
            </span>
          ) : null}
        </div>
      </CardContent>
     
      </div>
      <CardFooter className="mb-5 ">
        <Button onClick={
          ()=>handleAddtoCart(product?._id)
        } className="w-full">Add to cart</Button>
      </CardFooter>
    </Card>
  );
}

export default ShoppingProductTile;
