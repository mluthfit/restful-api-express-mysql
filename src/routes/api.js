const router = require('express').Router();
const Contact = require('../controllers/contacts');

router.get('/contacts', Contact.getAll);
router.get('/contacts/:id', Contact.getById);
router.post('/contacts', Contact.validator(), Contact.add);
router.put('/contacts/:id', Contact.validator(), Contact.update);
router.delete('/contacts/:id', Contact.delete);

module.exports = router;
