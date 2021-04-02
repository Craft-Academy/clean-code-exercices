const create = ({ singular = '', plural = '' } = {}) =>
  Object.freeze({
    toString(number) {
      if (number === 1) {
        return singular;
      }
      return plural;
    },
  });

export const Animal = {
  create,
  Rabbit: create({ singular: 'lapin', plural: 'lapins' }),
  Toad: create({ singular: 'crapaud', plural: 'crapauds' }),
};
