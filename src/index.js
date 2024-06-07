import app from "./app";

app.listen(app.get("port"), () => {
    console.log("Frontend http://localhost:" + app.get("port") );
})