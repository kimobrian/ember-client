import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.Promise.resolve([{
      id: '1',
      assessor: 'Williams Adu',
      fellow: 'Brian Kimokoti',
      score: 90,
      status: 'Pass'
    },
    {
      id: '2',
      assessor: 'Williams Adu',
      fellow: 'Brian Kimokoti',
      score: 90,
      status: 'Pass'
    },
    {
      id: '3',
      assessor: 'Williams Adu',
      fellow: 'Brian Kimokoti',
      score: 90,
      status: 'Pass'
    }
  ])

  }
});
