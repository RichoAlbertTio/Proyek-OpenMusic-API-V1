/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('songs', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    title: {
      type: 'TEXT',
      notNull: true,
    },
    year: {
      type: 'INTEGER',
      notNull: true,
    },
    genre: {
      type: 'TEXT',
      notNull: true,
    },
    performer: {
      type: 'TEXT',
      notNull: true,
    },
    duration: {
      type: 'INTEGER',
      notNull: false,
    },
    albumId: {
      type: 'VARCHAR(50)',
      notNull: false,
    },
  });

  pgm.addConstraint('songs', 'fk_albumId_albums', {
    foreignKeys: {
      columns: 'albumId',
      references: 'albums(id)',
    },
  });
};

exports.down = (pgm) => {
  pgm.dropConstraint('songs', 'fk_albumId_albums');

  pgm.dropTable('songs');
};
