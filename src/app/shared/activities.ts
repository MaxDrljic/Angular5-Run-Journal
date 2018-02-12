import { IActivity } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
  {
    'id': 1,
    'name': 'Main Bike Trails',
    'date': new Date('12/02/2018'),
    'distance': 6.2,
    'comments': 'Nice day, good temperature',
    'gpxData': '../../assets/gpx/1.gpx',
  },
  {
    'id': 2,
    'name': 'Večernja Šetnja',
    'date': new Date('11/02/2018'),
    'distance': 6.0,
    'comments': 'Evening walk',
    'gpxData': '../../assets/gpx/2.gpx',
  },
  {
    'id': 3,
    'name': 'Rude',
    'date': new Date('1/01/2018'),
    'distance': 32.2,
    'comments': 'Long, slow walk',
    'gpxData': '../../assets/gpx/3.gpx',
  },
  {
    'id': 4,
    'name': 'Mirogoj Miroševac',
    'date': new Date('3/01/2018'),
    'distance': 24.0,
    'comments': 'Beautiful landscape',
    'gpxData': '../../assets/gpx/4.gpx',
  }
];
