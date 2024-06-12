import app from "./app";

app.listen(app.get("port"), () => {
    console.log(app.get("mensajeconsola") + app.get("port") );
})