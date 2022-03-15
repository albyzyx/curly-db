const { getJSON, setJSON } = require("./fsHelper");

let memJSON = getJSON();
const store = require("./dbHelper")(memJSON);
store.save = () => {
  setJSON(store);
};
function omitKeys(obj, keys) {
  var dup = {};
  for (var key in obj) {
    if (keys.indexOf(key) == -1) {
      dup[key] = obj[key];
    }
  }
  return dup;
}
store.toJSON = function () {
  return omitKeys(store, ["get", "set", "has"]);
};
module.exports = store;
