import React, { useRef } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { UploadCloudIcon } from "lucide-react";

const ProductImageUpload = (
  imageFile,
  setImageFile,
  uplaodImageUrl,
  setUploadImageUrl
) => {
  const inputRef = useRef(null);
  function handleImageFileChange(event) {
    console.log(event.target.files);
    const selectedFile = event.target.files?.[0]
    if(selectedFile) setImageFile(selectedFile  )
  }

  return (
    <div className="w-full max-w-md mx-5">
      <Label className="text-lg font-semibold mb-2 block">Upload Image</Label>
      <div>
        <Input
          id="image-upload"
          type="file"
          className=""
          ref={inputRef}
          onChange={handleImageFileChange}
        />
        {!imageFile ? (
          <Label
            htmlfor="image-upload"
            className="flex flex-col items-center justify-center h-32 cursor-pointer"
          >
            <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2" />
            <span>Drag & Drop or click to upload </span>
          </Label>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ProductImageUpload;
