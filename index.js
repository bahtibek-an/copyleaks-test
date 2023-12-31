const express = require('express');
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/webhook/completed/", function(req, res) {
    const body = req.body;
    console.log(body);
    

    return res.send("Success");
});


app.listen(PORT, () => {
    console.log(`Server has been started on http://localhost:${PORT}/`)
});

