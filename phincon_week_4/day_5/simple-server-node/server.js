const http = require("http");
const url = require("url");
const fs = require("fs");
const port = 3000;

const calculate = (a, b, pathname, res) => {
    const endpoints = ["/sum", "/substract", "/multiplication", "/divided-by"];
    if (!endpoints.includes(pathname)) {
        return res.end("Phincon Academy");
    }
    if (!isNaN(a) && !isNaN(b)) {
        let result = 0;
        if (pathname === endpoints[0]) {
            result = a + b;
        } else if (pathname === endpoints[1]) {
            result = a - b;
        } else if (pathname === endpoints[2]) {
            result = a * b;
        } else if (pathname === endpoints[3]) {
            result = a / b;
        }
        return res.end(String(result));
    } else {
        return res.end("Invalid numbers provided");
    }
};

const readFile = () => {
    const data = fs.readFileSync("data/phincon.txt", "utf-8");
    return data;
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    const parsedUrl = url.parse(req.url, true);
    const a = Number(parsedUrl.query.a);
    const b = Number(parsedUrl.query.b);
    if (parsedUrl.pathname === "/") {
        res.write(String(readFile()));
        res.end();
    } else {
        res.end("Phincon Academy");
    }
    //     return calculate(a, b, parsedUrl.pathname, res);
});

console.log(`Server running at http://localhost:${port}`);
server.listen(port);
