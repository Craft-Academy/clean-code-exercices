import { Color } from './color';
import { RabbitGroup } from './rabbit-group';

const action = ({ number, metGroup }) => {
  if (number === 1) {
    return `Rencontre 1 autre ${metGroup}`;
  }
  return `Rencontrent 1 autre ${metGroup}`;
};

const conclusion = (group) => {
  const newGroup = group.addRabbit();

  if (newGroup.count === 8) {
    return `8 doigts avec mes mains, pour compter les ${newGroup}.`;
  }
  return `${newGroup.count} ${newGroup} sont devenus copains.`;
};

const create = ({ number = 1, color = Color.White } = {}) => {
  const group = RabbitGroup.create({ number, color });
  const metGroup = RabbitGroup.create({ number: 1, color });
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
      return create({ number, color: Color.Green });
    case 5:
      return create({ number, color: Color.Brown });
    default:
      return create({ number, color: Color.White });
  }
};

export const RabbitsMeeting = {
  of,
};
