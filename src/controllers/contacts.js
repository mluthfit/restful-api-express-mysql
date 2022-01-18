const { body, validationResult } = require('express-validator');
const sql = require('../database/db');

class Contact {
  static validator() {
    return [
      body('name')
        .notEmpty()
        .withMessage('The name field is required')
        .isString()
        .withMessage('The name field must be string'),
      body('email')
        .notEmpty()
        .withMessage('The email field is required')
        .isEmail()
        .withMessage('The email field must be email format'),
      body('phone')
        .notEmpty()
        .withMessage('The phone field is required')
        .isMobilePhone()
        .withMessage('The phone field must be phone format'),
    ];
  }

  static getAll(req, res) {
    sql.query('SELECT * FROM contacts', (err, result) => {
      if (err) throw err;

      res.status(200).json({
        error: false,
        message: 'Data has been retrieved successfully',
        data: result,
      });
    });
  }

  static getById(req, res) {
    sql.query('SELECT * FROM contacts WHERE `id` = ?', req.params.id, (err, result) => {
      if (err) throw err;

      if (result.length <= 0) {
        return res.status(400).json({
          error: true,
          message: 'Data not found',
        });
      }

      res.status(200).json({
        error: false,
        message: 'Data has been retrieved successfully',
        data: result,
      });
    });
  }

  static add(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: true,
        message: errors.array(),
      });
    }

    sql.query('INSERT INTO contacts SET ?', req.body, (err) => {
      if (err) throw err;

      res.status(201).json({
        error: false,
        message: 'Data has been added successfully',
        data: req.body,
      });
    });
  }

  static update(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: true,
        message: errors.array(),
      });
    }

    sql.query('UPDATE contacts SET ? WHERE `id` = ?', [req.body, req.params.id], (err, result) => {
      if (err) throw err;

      if (result.affectedRows <= 0) {
        return res.status(400).json({
          error: true,
          message: 'Data not found',
        });
      }

      res.status(200).json({
        error: false,
        message: 'Data has been updated successfully',
        data: req.body,
      });
    });
  }

  static delete(req, res) {
    sql.query('DELETE FROM contacts WHERE `id` = ?', req.params.id, (err, result) => {
      if (err) throw err;

      if (result.affectedRows <= 0) {
        return res.status(400).json({
          error: true,
          message: 'Data not found',
        });
      }

      res.status(200).json({
        error: false,
        message: 'Data has been deleted successfully',
      });
    });
  }
}

module.exports = Contact;
