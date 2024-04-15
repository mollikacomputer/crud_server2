const express = require('express');
const app = express();
const cors = require('cors');
const mongodb = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;
// mongodb atlas
const { MongoClient, ServerApiVersion } = require('mongodb');


app.use(express.json());
app.use(cors());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.m4nwz1v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Crud2 server. You successfully connected to MongoDB!");

    // post data client side to server side
    app.post('/coffee', async(req, res)=>{
      const newCoffee = req.body;
      console.log(newCoffee);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res)=>{
    res.send('crud Server2 is running')
});

app.listen(port, (req, res)=>{
    console.log(`Server is running on port: ${port}`);
});


//test_1      kX4pvE0P1PqdP8um

// const express = require('express');
// const app = express();
// const cors = require('cors');
// const port = process.env.PORT ||5000;

// const dotenv = require('dotenv');
// const mongodb = require('mongodb');

// // middleware
// app.use(express.json());
// app.use(cors());

// app.get('/', (req, res)=>{
//     res.send('Server 2 is running')
// });

// app.listen(port, (req, res)=>{
//     console.log(`Server is running on port: ${port}`);
// })
// const express = require('express');
// const app = express();
// const cors = require('cors');
// const dotenv = require('dotenv');
// const mongodb = require('mongodb');

// const port = process.env.PORT || 5000;
// // middleware
// app.use(express.json());
// app.use(cors());

// app.get('/', (req, res)=>{
//     res.send('Crud 2 Server is running');
// });

// app.listen(port, (req, res)=>{
//     console.log(`Crud server is running on port: ${port}`);
// });
// const express = require('express');
// const app = express();
// const cors = require('cors');
// const dotenv = require('dotenv');
// const mongodb = require('mongodb');
// const port = process.env.PORT || 5000;

// // middleware
// app.use(express.json());
// app.use(cors());

// app.get('/', (req, res)=>{
//     res.send('Crud 2 server is running');
// });

// app.listen(port, ()=>{
//     console.log(`Crud Server is running port on : ${port}`);
// });


// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const mongodb = require('mongodb');

// const port = process.env.PORT || 5000;

// const app = express();

// // middleware
// app.use(express.json());
// app.use(cors());


// app.get('/', (req, res)=>{
//     res.send("crud server 2 is running")
// });
// app.listen(port, ()=>{
//     console.log(`crud server 2 is running on port : ${port}`);
// });

