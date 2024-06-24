const safeRegex = require('safe-regex');

class InvalidRegexError extends Error {
  constructor() {
    super('Invalid regex');
    this.name= 'InvalidRegexError';
  }
}

const evaluaterRegex = (exp: string) => {
    const isSafe = safeRegex(exp);

    if (!isSafe) throw new InvalidRegexError();

    return exp;
}

export { InvalidRegexError, evaluaterRegex };