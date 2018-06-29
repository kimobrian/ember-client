import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.Promise.resolve([{
      id: '1',
      assessor: 'Williams Adu',
      fellow: 'Brian Kimokoti',
      score: 95,
      status: 'Pass'
    },
    {
      id: '2',
      assessor: 'Kiura Alex',
      fellow: 'Kimani Ndegwa',
      score: 93,
      status: 'Pass'
    },
    {
      id: '3',
      assessor: 'Sam Gaamuwa',
      fellow: 'Godfrey Semwezi',
      score: 95,
      status: 'Pass'
    }
  ])

  }
});
