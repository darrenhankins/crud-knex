
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('beers').del()
    .then(function () {
      const balloons = [{
        name: 'Beer 1',
        volume: 8.3,
        type: 'Amber',
        brewery: 'Denver Beer Co'
      }, {
        name: 'Beer 2',
        volume: 6.3,
        type: 'wheat',
        brewery: 'Denver Beer Co'
      }, {
        name: 'Beer 3',
        volume: 4.3,
        type: 'Amber',
        brewery: 'Denver Beer Co'
      }, {
        name: 'Beer 4',
        volume: 5.3,
        type: 'Wheat',
        brewery: 'Denver Beer Co'
      }];
      // Inserts seed entries
      return knex('beers').insert(balloons);
    });
};
