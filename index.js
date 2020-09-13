const express = require('express');
const app = express()
const http = require("http").createServer(app);
const io =  require('socket.io')(http);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

io.on("connection", (socket) => {

    socket.on("disconnect", () => {
        console.log("desconectou" + socket.id);
    });

    socket.on("msg", (data) => {
        io.emit("showmsg", data);
    });

});

http.listen(3000, () => {
    console.log("app rodando");
});
