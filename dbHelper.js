function buildInterface(db) {
  db.get = (key) => {
    if (db.hasOwnProperty(key)) {
      // db = removeInterface(db);

      if (typeof (db[key] === "object")) {
        return buildInterface(db[key]);
      } else {
        return db[key];
      }
    } else {
      return undefined;
    }
  };

  db.set = (key, value) => {
    db[key] = value;
  };

  db.has = (key) => {
    return db.hasOwnProperty(key);
  };

  db.delete = (key) => {
    delete db[key];
  };
  return db;
}

function removeInterface(db) {
  delete db.get;
  delete db.set;
  delete db.has;
  delete db.delete;
  return db;
}

const store = (json) => buildInterface(json);

module.exports = store;
