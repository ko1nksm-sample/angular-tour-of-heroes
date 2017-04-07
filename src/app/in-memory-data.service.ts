import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Mr. Nice', birthday: new Date('2000-01-01')},
      {id: 12, name: 'Narco', birthday: new Date('2000-01-02')},
      {id: 13, name: 'Bombasto', birthday: new Date('2000-01-03')},
      {id: 14, name: 'Celeritas', birthday: new Date('2000-01-03')},
      {id: 15, name: 'Magneta', birthday: new Date('2000-01-05')},
      {id: 16, name: 'RubberMan', birthday: new Date('2000-01-06')},
      {id: 17, name: 'Dynama', birthday: new Date('2000-01-07')},
      {id: 18, name: 'Dr IQ', birthday: new Date('2000-01-08')},
      {id: 19, name: 'Magma', birthday: new Date('2000-01-09')},
      {id: 20, name: 'Tornado', birthday: new Date('2000-01-10')}
    ];
    return {heroes};
  }
}
