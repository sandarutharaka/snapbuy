const cloudinary = require('cloudinary').v2;
const multer = require('multer');

cloudinary.config({
    cloud_name: 'daiyxtq1x',
    api_key : '979126679234514',
    api_secret : 'gnuWNG0jtG7bzBo6ivt6hRJN4Us'


})

const storage = new multer.memoryStorage();
async function imageUploadUtil(file){
    const result = await cloudinary.uploader.upload(file, {
        resource_type : 'auto'
    })

    return result ;
}


const upload = multer({storage});

module.exports = {upload, imageUploadUtil}