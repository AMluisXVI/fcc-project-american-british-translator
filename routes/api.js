'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const text = req.body.text;
      const locale = req.body.locale;

      if (text === undefined || text === null || locale === undefined || locale === null) {
        return res.json({ error: 'Required field(s) missing' });
      }

      if (typeof text !== 'string' || text.trim() === '') {
        return res.json({ error: 'No text to translate' });
      }

      if (locale !== 'american-to-british' && locale !== 'british-to-american') {
        return res.json({ error: 'Invalid value for locale field' });
      }

      const translation = translator.translate(text, locale);
      const result = translation === text ? 'Everything looks good to me!' : translation;

      res.json({ text: text, translation: result });
    });

};