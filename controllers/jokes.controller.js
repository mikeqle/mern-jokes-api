const Joke = require("../models/jokes.model");

module.exports = {
    getAllJokes: (req, res) => {
        Joke.find({})
            .then( allJokes => res.json( allJokes ) )
            .catch( err => res.json({ message: "Soemthing went wrong", error: err }));
    },
    getOneJoke: (req, res) => {
        Joke.findOne({ _id: req.params.id })
            .then( oneJoke => res.json(oneJoke) )
            .catch( err => res.json({ message: "Soemthing went wrong", error: err }))
    },
    createJoke: (req, res) => {
        Joke.create(req.body)
            .then( newJoke => res.json(newJoke))
            .catch( err => res.json({ message: "Something went wrong", error: err }));
    },
    updateJoke: (req, res) => {
        Joke.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true, useFindAndModify: false}
        )
            .then(updatedJoke => res.json(updatedJoke))
            .catch( err => res.json({ message: "Something went wrong", error: err }));
    },
    deleteJoke: (req, res) => {
        Joke.deleteOne({ _id: req.params.id })
            .then(result => res.json(result))
            .catch( err => res.json({ message: "Something went wrong", error: err }));
    }
};

