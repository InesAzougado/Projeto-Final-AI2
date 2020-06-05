const controller = {}
controller.test = (req,res) => {
    const data = {
        name: "Nuno Costa",
        age: "42",
        city: "Viseu"
    }

    console.log("Envio de dados do Controller EMPLOYEE.");
    res.json(data);
};

module.exports = controller;