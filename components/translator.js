const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require('./american-to-british-titles.js');
const britishOnly = require('./british-only.js');

class Translator {

  constructor() {
    const britishToAmericanSpelling = {};
    for (const word in americanToBritishSpelling) {
      britishToAmericanSpelling[americanToBritishSpelling[word]] = word;
    }

    const britishToAmericanTitles = {};
    for (const title in americanToBritishTitles) {
      const britishTitle = americanToBritishTitles[title];
      if (britishToAmericanTitles[britishTitle] === undefined || title.length > britishToAmericanTitles[britishTitle].length) {
        britishToAmericanTitles[britishTitle] = title;
      }
    }

    this.americanToBritishTerms = this._buildTerms(Object.assign({}, americanOnly, americanToBritishSpelling, americanToBritishTitles));
    this.britishToAmericanTerms = this._buildTerms(Object.assign({}, britishOnly, britishToAmericanSpelling, britishToAmericanTitles));
  }

  _buildTerms(dict) {
    return Object.keys(dict)
      .map(function (key) {
        return { key: key, value: dict[key] };
      })
      .sort(function (a, b) {
        return b.key.length - a.key.length;
      });
  }

  _replaceTerm(text, term) {
    const escaped = term.key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp('(?<![A-Za-z0-9])' + escaped + '(?![A-Za-z0-9])', 'gi');
    return text.replace(regex, function (match) {
      const first = match[0];
      const isUpper = first === first.toUpperCase();
      return '<span class="highlight">' + (isUpper ? term.value[0].toUpperCase() : term.value[0]) + term.value.slice(1) + '</span>';
    });
  }

  _replaceTerms(text, terms) {
    let result = text;
    for (const term of terms) {
      result = this._replaceTerm(result, term);
    }
    return result;
  }

  _replaceTime(text, fromSeparator, toSeparator) {
    const regex = new RegExp('\\b(\\d{1,2})' + fromSeparator + '(\\d{2})\\b', 'g');
    return text.replace(regex, '<span class="highlight">$1' + toSeparator + '$2</span>');
  }

  americanToBritish(text) {
    let translation = this._replaceTerms(text, this.americanToBritishTerms);
    translation = this._replaceTime(translation, ':', '.');
    return translation;
  }

  britishToAmerican(text) {
    let translation = this._replaceTerms(text, this.britishToAmericanTerms);
    translation = this._replaceTime(translation, '\\.', ':');
    return translation;
  }

  translate(text, locale) {
    if (locale === 'american-to-british') {
      return this.americanToBritish(text);
    }
    if (locale === 'british-to-american') {
      return this.britishToAmerican(text);
    }
    return null;
  }

}

module.exports = Translator;