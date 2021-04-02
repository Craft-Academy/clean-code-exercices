import { Color } from './color';

const animal = (number) => {
  if (number === 1) {
    return 'lapin';
  }
  return 'lapins';
};

const size = (number) => {
  if (number === 1) {
    return 'petit';
  }
  return 'petits';
};

const addRabbit = ({ number, color }) => create({ number: number + 1, color });

const create = ({ number = 1, color = Color.create() } = {}) =>
  Object.freeze({
    count: number,
    addRabbit() {
      return addRabbit({ number, color });
    },
    toString() {
      return `${size(number)} ${animal(number)} ${color.toString(number)}`;
    },
  });

export const RabbitGroup = {
  create,
};
