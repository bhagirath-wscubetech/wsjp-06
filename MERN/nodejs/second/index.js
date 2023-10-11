const http = require('http');
const fs = require('fs');

const server = http.createServer(
    (req, res) => {
        if (req.url == "/") {
            // listing page
            const page = fs.readFileSync("public/listing.html", "utf-8");
            res.end(page);
        } else if (req.url == "/details") {
            // details page
            const page = fs.readFileSync("public/details.html", "utf-8");
            res.end(page);
        } else {
            const page = fs.readFileSync("public/notfound.html", "utf-8");
            res.end(page);
        }
    }
)
server.listen(
    "5000",
    () => {
        console.log('Server started');
    }
)