const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.get('/cars', (req, res) => {
    db.select('*').from('cars')
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

server.get('/cars/:id', (req, res) => {
    const {id} = req.params
  
    db('cars').where({ id })
    .then(cars => {
      if (cars.length) {
        res.status(200).json(cars)
      } 
      else {
        res.status(404).json({ message: 'Could not find car with given id.' })
      }
     })
    .catch (err => {
      res.status(500).json({ message: 'Failed to get car' });
    });
  });
  

server.post('/cars', (req, res) => {
    db('cars').insert(req.body)
    .then(cars => {
        res.status(201).json(req.body)
    })
    .catch(err => {
        res.status(500).json({message: 'Unable to create car'})
    })

})

server.put('/cars/:id', (req, res) => {
    const {id} = req.params
    const {vin, make, model, mileage, trans, title} = req.body
  
    db('cars').where({ id })
    .update({vin, make, model, mileage, trans, title})
    .then(cars => {
        res.status(201).json(cars)
     })
    .catch (err => {
      res.status(500).json({ message: 'Failed to get car' })
    })
  })


server.delete('/cars/:id', (req, res) => {
    const {id} = req.params

    db('cars').where({id}).del()
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(err => {
        res.status(500).json({errorMessage: "Could not delete car"})
    })

})

module.exports = server;