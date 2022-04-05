const fs = require("fs");

// let path = null;

const getJSON = (path) => {
  if (fs.existsSync(`${path ? path : "store.json"}`)) {
    const json = fs.readFileSync(
      `${path ? `${path}/store.json` : "./store.json"}`,
      "utf8",
      (err) => {
        if (err) console.log(err);
      }
    );
    // console.log(json);
    return JSON.parse(json);
  } else {
    return {};
  }
};

// getJSON();

const setJSON = (json) => {
  // console.log(JSON.stringify(json))
  fs.writeFileSync(
    "./store.json",
    JSON.stringify(json, null, 4),
    "utf8",
    (err) => {
      if (err) console.log(err);
    }
  );
};

// setJSON((json = { name: "test" }));

module.exports = {
  getJSON,
  setJSON,
};
