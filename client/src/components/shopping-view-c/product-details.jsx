import { StarIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";

function ProductDetailsDialog({ open, setOpen, productDetails }) {
  return (
    <Dialog  open={open} onOpenChange={setOpen} >
      <DialogContent className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:p-12 max-w-[90vw] sm:max-w-[80vw lg:max-w-[70vw]">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={productDetails?.image}
            alt={productDetails?.title}
            width={600}
            height={600}
            className="aspect-square w-full object-cover"
          />
        </div>
        <div className=" grid ">
          <div>
            <h1 className="text-3xl font-extrabold capitalize mb-4">
              {productDetails?.title}
            </h1>
            <p className="text-muted-foreground capitalize mb-5">
              {productDetails?.description}
            </p>
          </div>
          <div className="flex  items-center justify-between">
            <p
              className={`${
                productDetails?.salePrice > 0 ? "line-through" : " "
              } font-bold text-primary text-3xl`}
            >
              ${productDetails?.price}
            </p>
            {productDetails?.salePrice > 0 ? (
              <p className="font-bold text-primary text-3xl">
                ${productDetails?.salePrice}
              </p>
            ) : null}
          </div>
          <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                  </div>
                  <span className="text-muted-foreground">(4.5)</span>
          </div>
          <div className="flex-col flex gap-3 mt-5">
            <Separator />
            <Button className="p-5">Add to Cart</Button>
            <Button className="p-5">Buy</Button>
          </div>
          <div className="max-h-[300px] overflow-auto">
            <h2 className="text-xl font-bold mb-4">Reviews</h2>
            <div className="grid gap-6">
              <div className="flex gap-4 items-center">
                <Avatar className="w-10 h-10 border">
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">sandaru</h3>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                  </div>
                  <p className="text-muted-foreground">This IS As Awesome Product</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <Avatar className="w-10 h-10 border">
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">sandaru</h3>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                  </div>
                  <p className="text-muted-foreground">This IS As Awesome Product</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <Avatar className="w-10 h-10 border">
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">sandaru</h3>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                  </div>
                  <p className="text-muted-foreground">This IS As Awesome Product</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <Input placeholder="Write Review"/>
              <Button>Submit</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProductDetailsDialog;
