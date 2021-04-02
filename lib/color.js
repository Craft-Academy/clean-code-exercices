const create = ({ singular = '', plural = '' } = {}) =>
  Object.freeze({
    toString(number = 1) {
      if (number === 1) {
        return singular;
      }
      return plural;
    },
  });

export const Color = {
  create,
  White: create({ singular: 'blanc', plural: 'blancs' }),
  Grey: create({ singular: 'gris', plural: 'gris' }),
  Green: create({ singular: 'vert', plural: 'verts' }),
  Brown: create({ singular: 'marron', plural: 'marrons' }),
};
