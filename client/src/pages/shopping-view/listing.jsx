import ProductFilter from "@/components/shopping-view-c/filter";
import ProductDetailsDialog from "@/components/shopping-view-c/product-details";
import ShoppingProductTile from "@/components/shopping-view-c/product-tile";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuRadioGroup,DropdownMenuContent, DropdownMenuRadioItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import { sortOptions } from "@/config";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { fetchAllFilteredProducts, fetchProductDetails } from "@/store/shop/products-slice";
import { ArrowUpDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSearchParams, useSearchParams } from "react-router-dom";
import { toast } from "sonner";


function createSearchParamsHelper(filterParams){
  const queryParms =[]
  for(const [key,value] of Object.entries(filterParams)){
    if(Array.isArray(value) && value.length > 0){
      const paramValue =value.join(',')
      queryParms.push(`${key}=${encodeURIComponent(paramValue)}`)
    }
  }
  console.log(queryParms,"queryParms");

  return queryParms.join('&')

}





const ShoppingListing = () => {
  const dispatch= useDispatch()
  const { productList,productDetails } = useSelector((state) => state.shopProducts);
  const [filters,setFilters]=useState({})
  const[sort,setSort]=useState(null)
  const [searchParams , setSearchParams]=useSearchParams()
  const [openDetailsDialog,setOpenDetailsDialog]=useState(false)
  const {user} =useSelector(state=>state.auth)


  function handleSort(value){ 
    setSort(value)
    

  }

  function handleFilter(getSectionId,getCurrentOption){

    let cpyFilters= {...filters};
    const indexOfCurrentSection =Object.keys(cpyFilters).indexOf(getSectionId);

    if(indexOfCurrentSection === -1){
      cpyFilters ={
        ...cpyFilters,
        [getSectionId] : [getCurrentOption]
      }
    }else
    {
      const indexOfCurrentSection = cpyFilters[getSectionId].indexOf(getCurrentOption);
      if(indexOfCurrentSection === -1) cpyFilters[getSectionId].push(getCurrentOption)
        else cpyFilters[getSectionId].splice(indexOfCurrentSection , 1)
    }
    
    setFilters(cpyFilters)
    sessionStorage.setItem('filters' , JSON.stringify(cpyFilters));
    
    
  }

  function handleGetProductDetails(getCurrentProductId){
      console.log(getCurrentProductId);
      dispatch(fetchProductDetails(getCurrentProductId))
      
  }

  function handleAddtoCart(getCurrentProductId){
    console.log(getCurrentProductId);
    dispatch(addToCart({userId :user?.id,productId:getCurrentProductId,quantity :1})).then((data)=>{
      if(data?.payload?.success){
        
        dispatch(fetchCartItems(user?.id))
        toast.success("Product is Added to Cart")
      }
    }
    )
    
  }

  useEffect(
    ()=>{if(filters&& Object.keys(filters).length > 0){
      const createQueryString = createSearchParamsHelper(filters)
      setSearchParams(new URLSearchParams(createQueryString))
    }},[filters]
  )

  useEffect(()=>{
    setSort("price-lowtohigh");
    setFilters(JSON.parse(sessionStorage.getItem('filters')) || {})
  },[])


   useEffect(() => {
    if(filters !== null && sort !== null)
      dispatch(fetchAllFilteredProducts({filterParams:filters ,sortParams :sort}));
    },[dispatch,sort,filters]);

  

    useEffect(()=>{
      if(productDetails!== null) setOpenDetailsDialog(true)
    },[productDetails])

    

    
  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 p-4 md:p-6">
      <ProductFilter filters={filters} handleFilter={handleFilter}/>
      <div className="bg-background w-full rounded-lg shadow-sm">
        <div className="p-4 border-b flex  items-center justify-between">
          <h2 className="text-lg font-extrabold ">All Products</h2>
          <div className="flex items-center gap-3 ">
            <span className="text-muted-foreground ">{productList?.length} Products</span>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                <ArrowUpDown className="h-4 w-4 min-h-[1rem] min-w-[1rem]" />
                <span>
                Sort by
              </span>
              </Button>
              
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuRadioGroup value={sort} onValueChange={handleSort}>
                {
                  sortOptions.map(sortItem=><DropdownMenuRadioItem value={sortItem.id} key={sortItem.id}>{sortItem.label}</DropdownMenuRadioItem>)
                }
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>  
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
            {
              productList && productList.length > 0 ?
              productList.map((productItem)=>(
                <ShoppingProductTile handleAddtoCart={handleAddtoCart} handleGetProductDetails={handleGetProductDetails} key={productItem?.id} product={productItem}/>
              )) : null
            }
        </div>

      </div>
      <ProductDetailsDialog open={openDetailsDialog} setOpen={setOpenDetailsDialog} productDetails={productDetails}/>
    </div>
  );
};

export default ShoppingListing;
