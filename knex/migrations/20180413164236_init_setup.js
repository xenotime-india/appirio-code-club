
exports.up = function(knex, Promise) {
  return knex.schema.hasTable('pullrequest').then(function(exists) {
    if (!exists) {
      knex.schema.createTable('pullrequest', (table) => {
        table.increments('id')
        table.integer('number')
        table.integer('issue_id')
        table.string('title')
        table.string('body')
        table.string('state')
        table.string('url')
        table.string('user')
        table.string('user')
        table.dateTime('created_at')
        table.dateTime('merged_at')
        table.dateTime('closed_at')
      })
    }
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('pullrequest')
};
