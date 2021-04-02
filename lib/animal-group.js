import { Color } from './color';
import { Animal } from './animal';

const size = (number) => {
  if (number === 1) {
    return 'petit';
  }
  return 'petits';
};

const addAnimal = ({ number, color, animal }) => create({ number: number + 1, color, animal });

const create = ({ number = 1, color = Color.create(), animal = Animal.create() } = {}) =>
  Object.freeze({
    count: number,
    addAnimal() {
      return addAnimal({ number, color, animal });
    },
    toString() {
      return `${size(number)} ${animal.toString(number)} ${color.toString(number)}`;
    },
  });

export const AnimalGroup = {
  create,
};
