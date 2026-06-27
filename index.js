const fs = require("fs");
const http = require("http");
const url = require("url");

const templateOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const templateProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);
const templateCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);
const Data = fs.readFileSync("./dev-data/data.json", "utf-8");
const dataObj = JSON.parse(Data);

const replaceTemplates = (temp, product) => {
  let outPut = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  outPut = outPut.replace(/{%FROM%}/g, product.from);
  outPut = outPut.replace(/{%ID%}/g, product.id);
  outPut = outPut.replace(/{%IMAGE%}/g, product.image);
  outPut = outPut.replace(/{%NUTRIENTS%}/g, product.nutrients);
  outPut = outPut.replace(/{%QUANTITY%}/g, product.quantity);
  outPut = outPut.replace(/{%PRICE%}/g, product.price);
  outPut = outPut.replace(/{%DESCRIPTION%}/g, product.description);

  if (!product.organic) {
    outPut = outPut.replace(/{%NOT_ORGANIC%}/g, "not-organic");
  }

  return outPut;
};

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
//   const pathName = req.url;
  if (pathname === "/overview" || pathname === "/") {
    const cardHtml = dataObj
      .map((el) => replaceTemplates(templateCard, el))
      .join("");
    const outPut = templateOverview.replace("{%PRODUCT_CARDS%}", cardHtml);
    res.end(outPut);
    // res.end("<h1>Overview page!</h1>");
  } else if (pathname === "/product") {
    const product = dataObj[query.id];
    const outPut = replaceTemplates(templateProduct,product)
    res.end(outPut);
  } else if (pathname === "/api") {
    res.end("<h1>API!</h1>");
  } else {
    res.end("<h1>Page Not Found!!");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("the port is runnig.....");
});
