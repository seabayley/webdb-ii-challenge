
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: 'XK318238127PL4', make: 'Ford', model: 'Mustang', mileage: 10000, transmission: 'auto', title: 'clean'},
        {id: 2, VIN: 'PM313248125P92', make: 'Chevrolet', model: 'Volt', mileage: 10000, transmission: 'auto', title: 'clean'},
        {id: 3, VIN: 'Y7312342327PL7', make: 'Buick', model: 'Lacrosse', mileage: 10000, transmission: 'manual', title: 'clean'},
        {id: 4, VIN: '9M318238127PL9', make: 'Lincoln', model: 'Navigator', mileage: 10000, transmission: 'auto', title: 'clean'},
        {id: 5, VIN: 'X7318223127PL2', make: 'GMC', model: '1500', mileage: 10000, transmission: 'manual', title: 'clean'},
        {id: 6, VIN: 'DR318238127PL1', make: 'Jeep', model: 'Wrangler', mileage: 10000, transmission: 'auto', title: 'salvage'},
        {id: 7, VIN: 'CF31824D127PL1', make: 'Jeep', model: 'Compass', mileage: 10000, transmission: 'auto', title: 'clean'},
        {id: 8, VIN: 'GF3188HD127PL3', make: 'Toyota', model: 'Tundra', mileage: 10000, transmission: 'auto', title: 'clean'},
        {id: 9, VIN: 'LM319MD2127PL7', make: 'Chevrolet', model: 'Cruze', mileage: 10000, transmission: 'auto', title: 'clean'},
        {id: 10, VIN: 'IK318238127PL8', make: 'GMC', model: 'Suburban', mileage: 10000, transmission: 'manual', title: 'clean'},
        {id: 11, VIN: 'PO318238127PL4', make: 'Nissan', model: 'Evo', mileage: 10000, transmission: 'auto', title: 'clean'},
        {id: 12, VIN: 'IO318238127PL6', make: 'Honda', model: 'Pilot', mileage: 10000, transmission: 'manual', title: 'clean'},
        {id: 13, VIN: 'GR318238127PL5', make: 'Ford', model: 'Explorer', mileage: 10000, transmission: 'auto', title: 'clean'},
        {id: 14, VIN: '76318238127PL6', make: 'Ford', model: 'Taurus', mileage: 10000, transmission: 'auto', title: 'clean'},
        {id: 15, VIN: 'MS318238127PL3', make: 'Jeep', model: 'Cherokee', mileage: 10000, transmission: 'auto', title: 'clean'},
        {id: 16, VIN: 'HY318238127PL0', make: 'Toyota', model: 'Corolla', mileage: 10000, transmission: 'auto', title: 'clean'},
        {id: 17, VIN: 'LP318238127PL2', make: 'Ford', model: 'F-150', mileage: 10000, transmission: 'manual', title: 'salvage'},
      ]);
    });
};
