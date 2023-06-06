const express = require('express');
const router = express.Router(); // creating router
const { getPeople, createPerson, updatePerson, deletePerson } = require('./people controller');

// router.get("/",getPeople );
// router.post("/", createPerson);
// router.put("/:id", updatePerson);
// router.delete("/:id", deletePerson);

router.route('/').get(getPeople).post(createPerson);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;