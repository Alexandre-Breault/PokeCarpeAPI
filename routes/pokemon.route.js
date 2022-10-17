const express = require('express');
const app = express();
// Express route
const PokemonExpressRoute = express.Router();
// User schema
let PokemonSchema = require('../model/Pokemon.model');
// Get users
PokemonExpressRoute.route('/').get((req, res) => {
    PokemonSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
// Create user
PokemonExpressRoute.route('/create-Pokemon').post((req, res, next) => {
    PokemonSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get single user
PokemonExpressRoute.route('/get-Pokemon/:id').get((req, res) => {
    PokemonSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update user
PokemonExpressRoute.route('/update-Pokemon/:id').put((req, res, next) => {
    PokemonSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            console.log('Pokemon successfully updated!')
        }
    })
})
// Delete Pokemon
PokemonExpressRoute.route('/remove-Pokemon/:id').delete((req, res, next) => {
    PokemonSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})
module.exports = PokemonExpressRoute;