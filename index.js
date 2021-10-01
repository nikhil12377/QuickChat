const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const { access } = require("fs");

const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("server is running");
});

io.on('connection', (socket) => {
    socket.emmit('me', socket.id);

    socket.on('disconnect', () => {
        socket.broadcast.emmit("call ended");
    });

    socket.on('calluser', ({ userToCall, signalData, from, name }) => {
        io.to(userToCall).emmit("calluser", { signal: signalData, from, name })
    });

    socket.on("answercall", (data) => {
        io.on(data.to).emmit("call accepted", data.signal);
    });
});

server.listen(PORT, () => console.log(`listening on port ${PORT}`));