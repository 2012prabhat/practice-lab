const express = require('express');
const app = express();
const {port} = require('./lib/config');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

app.listen(port,()=>{
    console.log(`Server is Started on port ${port}`);
})

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);