const express = require('express');
const router = express.Router();

const UserModel = require('../models/UserModel.js');

router.post('/registration',
    function(req, res) {  
        let newDocument = {
            "firstName": req.body.firstName,
            "lastName": req.body.lastName,
            "phone": req.body.phone,
            "address": req.body.address,
            "email": req.body.email,
            "password": req.body.password
        };

        UserModel
        .create(newDocument)
        .then(
            function(dbDocument) {
                res.json(dbDocument)
            }
        )
        .catch(
            function(error) {
                console.log('/registration error', error);

                res.send('An error occured');
            }
        );
    }
);

router.post('/find',
    function(req, res) {
        UserModel
        .find(
            { "email": req.body.email }
        )
        .then(
            function(dbDocument) {
                res.json(dbDocument)
            }
        )
        .catch(
            function(error) {

                console.log('/find error', error);

                res.send('An error occured');

            }
        )
    }
);


router.put('/update',
    function(req, res) {

        let updates = {}

        if (req.body.firstName){ 
            updates['firstName'] = req.body.firstName 
        };
        if (req.body.lastName) {
            updates['lastName'] = req.body.lastName;
        };
        if (req.body.phone) {
            updates['phone'] = req.body.phone;
        };
        if (req.body.address) {
            updates['address'] = req.body.address;
        };

        UserModel
        .findOneAndUpdate(
            {
                "email": req.body.email
            },
            {
                $set: updates
            },
            {
                new: true
            }
        )
        .then(
            function(dbDocument) {
                res.json(dbDocument)
            }
        )
        .catch(
            function(error) {
                console.log('/users/update error', error);
                res.send('An error occured');
            }
        )

    }
);



module.exports = router;
