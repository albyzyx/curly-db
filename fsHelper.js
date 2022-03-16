const fs = require("fs");

// let path = null;

const getJSON = (path) => {
  if (fs.existsSync(`${path ? path : "store.json"}`)) {
    const json = fs.readFileSync(
      `${path ? `${path}/store.json` : "./store.json"}`,
      "utf8",
      (err) => {
        console.log("Error in while getting json");
        console.log(err);
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
  fs.writeFile("store.json", JSON.stringify(json), (err) => {
    console.log("Error in while fetching json");
    console.log(err);
  });
};

// setJSON((json = { name: "test" }));

module.exports = {
  getJSON,
  setJSON,
};
