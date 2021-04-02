import { Color } from './color';
import { Animal } from './animal';
import { AnimalGroup } from './animal-group';

const action = ({ number, metGroup }) => {
  if (number === 1) {
    return `Rencontre 1 autre ${metGroup}`;
  }
  return `Rencontrent 1 autre ${metGroup}`;
};

const conclusion = (group) => {
  const newGroup = group.addAnimal();

  if (newGroup.count === 8) {
    return `8 doigts avec mes mains, pour compter les ${newGroup}.`;
  }
  return `${newGroup.count} ${newGroup} sont devenus copains.`;
};

const create = ({ number = 1, color = Color.White, animal = Animal.Rabbit } = {}) => {
  const group = AnimalGroup.create({ number, color, animal });
  const metGroup = AnimalGroup.create({ number: 1, color, animal });
  const theAction = action({ number, metGroup });
  const theConclusion = conclusion(group);

  return Object.freeze({
    toString() {
      return `${number} ${group} sautant sur le chemin
${theAction}
${theConclusion}
`;
    },
  });
};

const of = (number) => {
  switch (number) {
    case 2:
      return create({ number, color: Color.Grey });
    case 3:
      return create({ number, color: Color.Green, animal: Animal.Toad });
    case 5:
      return create({ number, color: Color.Brown });
    default:
      return create({ number, color: Color.White });
  }
};

export const AnimalsMeeting = {
  of,
};
