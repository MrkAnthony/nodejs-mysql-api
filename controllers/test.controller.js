
function test(req, res) {
    const test = "This is my test"
    res.send(test);
}

module.exports = {
    test: test
}