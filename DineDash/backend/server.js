// import express from "express";
// import cors from "cors";


// //app configuration

// const app = express()
// const port = 4000

// //middleware

// app.use(express.json())
// app.use(cors())

// app.get("/",(req,res)=>{
//     res.send("It is working")
// })

// app.listen(port,()=>{
//     console.log(`server started on http://localhost:${port}`)
// })

import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
