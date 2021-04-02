import { AnimalsMeeting } from './animals-meeting';

export const AnimalsSong = () => {
  return {
    verse(number) {
      const animalsMeeting = AnimalsMeeting.of(number);

      return `${animalsMeeting}`;
    },
    song() {
      let song = '';
      for (let i = 1; i < 8; i += 1) {
        song += `${this.verse(i)}${i < 7 ? '\n' : ''}`;
      }

      return song;
    },
  };
};
