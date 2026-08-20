'use strict';

const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

const translator = new Translator();

const HIGHLIGHT_OPEN = '<span class="highlight">';
const HIGHLIGHT_CLOSE = '</span>';

suite('Unit Tests', () => {

  suite('American to British English', () => {
    test('Translate "Mangoes are my favorite fruit." to British English', () => {
      const translation = translator.translate('Mangoes are my favorite fruit.', 'american-to-british');
      assert.equal(translation, 'Mangoes are my ' + HIGHLIGHT_OPEN + 'favourite' + HIGHLIGHT_CLOSE + ' fruit.');
    });

    test('Translate "I ate yogurt for breakfast." to British English', () => {
      const translation = translator.translate('I ate yogurt for breakfast.', 'american-to-british');
      assert.equal(translation, 'I ate ' + HIGHLIGHT_OPEN + 'yoghurt' + HIGHLIGHT_CLOSE + ' for breakfast.');
    });

    test('Translate "We had a party at my friend\'s condo." to British English', () => {
      const translation = translator.translate("We had a party at my friend's condo.", 'american-to-british');
      assert.equal(translation, "We had a party at my friend's " + HIGHLIGHT_OPEN + 'flat' + HIGHLIGHT_CLOSE + '.');
    });

    test('Translate "Can you toss this in the trashcan for me?" to British English', () => {
      const translation = translator.translate('Can you toss this in the trashcan for me?', 'american-to-british');
      assert.equal(translation, 'Can you toss this in the ' + HIGHLIGHT_OPEN + 'bin' + HIGHLIGHT_CLOSE + ' for me?');
    });

    test('Translate "The parking lot was full." to British English', () => {
      const translation = translator.translate('The parking lot was full.', 'american-to-british');
      assert.equal(translation, 'The ' + HIGHLIGHT_OPEN + 'car park' + HIGHLIGHT_CLOSE + ' was full.');
    });

    test('Translate "Like a high tech Rube Goldberg machine." to British English', () => {
      const translation = translator.translate('Like a high tech Rube Goldberg machine.', 'american-to-british');
      assert.equal(translation, 'Like a high tech ' + HIGHLIGHT_OPEN + 'Heath Robinson device' + HIGHLIGHT_CLOSE + '.');
    });

    test('Translate "To play hooky means to skip class or work." to British English', () => {
      const translation = translator.translate('To play hooky means to skip class or work.', 'american-to-british');
      assert.equal(translation, 'To ' + HIGHLIGHT_OPEN + 'bunk off' + HIGHLIGHT_CLOSE + ' means to skip class or work.');
    });

    test('Translate "No Mr. Bond, I expect you to die." to British English', () => {
      const translation = translator.translate('No Mr. Bond, I expect you to die.', 'american-to-british');
      assert.equal(translation, 'No ' + HIGHLIGHT_OPEN + 'Mr' + HIGHLIGHT_CLOSE + ' Bond, I expect you to die.');
    });

    test('Translate "Dr. Grosh will see you now." to British English', () => {
      const translation = translator.translate('Dr. Grosh will see you now.', 'american-to-british');
      assert.equal(translation, HIGHLIGHT_OPEN + 'Dr' + HIGHLIGHT_CLOSE + ' Grosh will see you now.');
    });

    test('Translate "Lunch is at 12:15 today." to British English', () => {
      const translation = translator.translate('Lunch is at 12:15 today.', 'american-to-british');
      assert.equal(translation, 'Lunch is at ' + HIGHLIGHT_OPEN + '12.15' + HIGHLIGHT_CLOSE + ' today.');
    });
  });

  suite('British to American English', () => {
    test('Translate "We watched the footie match for a while." to American English', () => {
      const translation = translator.translate('We watched the footie match for a while.', 'british-to-american');
      assert.equal(translation, 'We watched the ' + HIGHLIGHT_OPEN + 'soccer' + HIGHLIGHT_CLOSE + ' match for a while.');
    });

    test('Translate "Paracetamol takes up to an hour to work." to American English', () => {
      const translation = translator.translate('Paracetamol takes up to an hour to work.', 'british-to-american');
      assert.equal(translation, HIGHLIGHT_OPEN + 'Tylenol' + HIGHLIGHT_CLOSE + ' takes up to an hour to work.');
    });

    test('Translate "First, caramelise the onions." to American English', () => {
      const translation = translator.translate('First, caramelise the onions.', 'british-to-american');
      assert.equal(translation, 'First, ' + HIGHLIGHT_OPEN + 'caramelize' + HIGHLIGHT_CLOSE + ' the onions.');
    });

    test('Translate "I spent the bank holiday at the funfair." to American English', () => {
      const translation = translator.translate('I spent the bank holiday at the funfair.', 'british-to-american');
      assert.equal(translation, 'I spent the ' + HIGHLIGHT_OPEN + 'public holiday' + HIGHLIGHT_CLOSE + ' at the ' + HIGHLIGHT_OPEN + 'carnival' + HIGHLIGHT_CLOSE + '.');
    });

    test('Translate "I had a bicky then went to the chippy." to American English', () => {
      const translation = translator.translate('I had a bicky then went to the chippy.', 'british-to-american');
      assert.equal(translation, 'I had a ' + HIGHLIGHT_OPEN + 'cookie' + HIGHLIGHT_CLOSE + ' then went to the ' + HIGHLIGHT_OPEN + 'fish-and-chip shop' + HIGHLIGHT_CLOSE + '.');
    });

    test('Translate "I\'ve just got bits and bobs in my bum bag." to American English', () => {
      const translation = translator.translate("I've just got bits and bobs in my bum bag.", 'british-to-american');
      assert.equal(translation, "I've just got " + HIGHLIGHT_OPEN + 'odds and ends' + HIGHLIGHT_CLOSE + ' in my ' + HIGHLIGHT_OPEN + 'fanny pack' + HIGHLIGHT_CLOSE + '.');
    });

    test('Translate "The car boot sale at Boxted Airfield was called off." to American English', () => {
      const translation = translator.translate('The car boot sale at Boxted Airfield was called off.', 'british-to-american');
      assert.equal(translation, 'The ' + HIGHLIGHT_OPEN + 'swap meet' + HIGHLIGHT_CLOSE + ' at Boxted Airfield was called off.');
    });

    test('Translate "Have you met Mrs Kalyani?" to American English', () => {
      const translation = translator.translate('Have you met Mrs Kalyani?', 'british-to-american');
      assert.equal(translation, 'Have you met ' + HIGHLIGHT_OPEN + 'Mrs.' + HIGHLIGHT_CLOSE + ' Kalyani?');
    });

    test('Translate "Prof Joyner of King\'s College, London." to American English', () => {
      const translation = translator.translate("Prof Joyner of King's College, London.", 'british-to-american');
      assert.equal(translation, HIGHLIGHT_OPEN + 'Prof.' + HIGHLIGHT_CLOSE + " Joyner of King's College, London.");
    });

    test('Translate "Tea time is usually around 4 or 4.30." to American English', () => {
      const translation = translator.translate('Tea time is usually around 4 or 4.30.', 'british-to-american');
      assert.equal(translation, 'Tea time is usually around 4 or ' + HIGHLIGHT_OPEN + '4:30' + HIGHLIGHT_CLOSE + '.');
    });
  });

  suite('Highlight translation output', () => {
    test('Highlight translation in "Mangoes are my favorite fruit."', () => {
      const translation = translator.translate('Mangoes are my favorite fruit.', 'american-to-british');
      assert.include(translation, HIGHLIGHT_OPEN + 'favourite' + HIGHLIGHT_CLOSE);
    });

    test('Highlight translation in "I ate yogurt for breakfast."', () => {
      const translation = translator.translate('I ate yogurt for breakfast.', 'american-to-british');
      assert.include(translation, HIGHLIGHT_OPEN + 'yoghurt' + HIGHLIGHT_CLOSE);
    });

    test('Highlight translation in "We watched the footie match for a while."', () => {
      const translation = translator.translate('We watched the footie match for a while.', 'british-to-american');
      assert.include(translation, HIGHLIGHT_OPEN + 'soccer' + HIGHLIGHT_CLOSE);
    });

    test('Highlight translation in "Paracetamol takes up to an hour to work."', () => {
      const translation = translator.translate('Paracetamol takes up to an hour to work.', 'british-to-american');
      assert.include(translation, HIGHLIGHT_OPEN + 'Tylenol' + HIGHLIGHT_CLOSE);
    });
  });

});