import { AnimalsSong } from '../lib';

describe('Animals', () => {
  test('verse 1', () => {
    expect(AnimalsSong().verse(1)).toEqual(`1 petit lapin blanc sautant sur le chemin
Rencontre 1 autre petit lapin blanc
2 petits lapins blancs sont devenus copains.
`);
  });

  test('verse 2', () => {
    expect(AnimalsSong().verse(2)).toEqual(`2 petits lapins blancs sautant sur le chemin
Rencontrent 1 autre petit lapin blanc
3 petits lapins blancs sont devenus copains.
`);
  });

  test('verse 7', () => {
    expect(AnimalsSong().verse(7)).toEqual(`7 petits lapins blancs sautant sur le chemin
Rencontrent 1 autre petit lapin blanc
8 doigts avec mes mains, pour compter les petits lapins blancs.
`);
  });

  test.only('whole song', () => {
    const expected = `1 petit lapin blanc sautant sur le chemin
Rencontre 1 autre petit lapin blanc
2 petits lapins blancs sont devenus copains.

2 petits lapins gris sautant sur le chemin
Rencontrent 1 autre petit lapin gris
3 petits lapins gris sont devenus copains.

3 petits crapauds verts sautant sur le chemin
Rencontrent 1 autre petit crapaud vert
4 petits crapauds verts sont devenus copains.

4 petits lapins blancs sautant sur le chemin
Rencontrent 1 autre petit lapin blanc
5 petits lapins blancs sont devenus copains.

5 petits lapins marrons sautant sur le chemin
Rencontrent 1 autre petit lapin marron
6 petits lapins marrons sont devenus copains.

6 petits lapins blancs sautant sur le chemin
Rencontrent 1 autre petit lapin blanc
7 petits lapins blancs sont devenus copains.

7 petits lapins blancs sautant sur le chemin
Rencontrent 1 autre petit lapin blanc
8 doigts avec mes mains, pour compter les petits lapins blancs.
`;
    expect(AnimalsSong().song()).toBe(expected);
  });
});
