const express = require('express');
const mongoose = require('mongoose');
const cookieParser =require('cookie-parser');
const cors = require('cors');
const authRouter = require('./routes/auth/auth-routes')
const adminProductsRouter =require('./routes/admin/products-routes')
const shopProductRouter =require('./routes/shop/products-routes')
//database connection
mongoose.connect('mongodb+srv://sandarumine:eddQoJec6iGHPJpe@snap.8dvmc41.mongodb.net/'

).then(()=>console.log('MongoDB Connected')).catch((err)=>console.log(err));

const app= express();
const PORT =process.env.PORT || 5000;

app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true,
        methods:['GEt','POST','PUT','DELETE'],
        allowedHeaders : [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma',
        ]
    })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use('/api/admin/products',adminProductsRouter)
app.use('/api/shop/products',shopProductRouter)

app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT);
})