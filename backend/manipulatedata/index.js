const express = require('express');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const resources = JSON.parse(fs.readFileSync(`${__dirname}/data/resource.json`))


const app = express();

app.use(express.json());

// api - /resources GET
app.get('/resources', (req, res) => {
    try {
        res.status(200).json(resources);
    } catch (error) {
        return res.status(500).json({
            status: "failure",
            error: error.message
        })
    }
});

// /resources Endpoint (With category Query Parameter)
app.get('/resources/category', (req, res) => {
    const {category} = req.query;

    try {
        const books = resources.filter((item) => item.category === category)
        console.log(books);
        res.status(200).json(books);
    } catch (error) {
        return res.status(500).json({
            status: "failure",
            error: error.message
        })
    }
})

// resources/sort Endpoint
app.get('/resources/sort', (req, res) => {
    try {
        res.status(200).json(resources);
    } catch (error) {
        return res.status(500).json({
            status: "failure",
            error: error.message
        })
    }
})


// /resources/sort Endpoint (With sortBy Query Parameter)
app.get('/resources/sort', (req, res) => {
    const {sortBy} = req.query;
    try {
        let srotedItems = [...resources];

      if(sortBy){
        srotedItems.sort((a,b) => {
            return (a[sortBy] > b[sortBy]) ? 1 : -1; 
        })
      }

      res.status(200).json(srotedItems);
    } catch (error) {
        return res.status(500).json({
            status: "failure",
            error: error.message
        })
    }
})


// resources/group Endpoint
app.get('/resources/group', (req, res) => {
    

    try {
        const groupedResources = resources.reduce((acc, resource) => {
            const { category } = resource;
            acc[category] = acc[category] || [];
            acc[category].push(resource);
            return acc;
        }, {});

        res.status(200).json(groupedResources);
    } catch (error) {
        return res.status(500).json({
            status: "failure",
            error: error.message
        })
    }
})




app.listen(port, () => {
    console.log("server is running at port 8080");
})