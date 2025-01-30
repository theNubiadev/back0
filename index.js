const express = require('express');
const cors = require('cors');
const { log } = require('console');

const app = express();
app.use(cors());

app.get("/", (req, res) => {
        res.json({
            email: "ajaiyeobajibola@gmail.com",
            current_datetime: new Date().toISOString(),
            github_url: "https://github.com/"
        });
    });
    
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

    
});