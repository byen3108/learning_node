module.exports = {
    index: (req, res) => {
        res.send("Hello this is the Home Page");
    },
    users: (req, res) => {
        res.send("This is the users route");
    }
}