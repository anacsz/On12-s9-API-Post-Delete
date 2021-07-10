const app = require("./src/app");
const port = 8080;

app.listen(port, () => {
    console.log(`Ninguém disse que seria fácil, mas também não dise que seria impossível ${port}`);
});