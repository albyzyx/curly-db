const fs = require("fs").promises;

const getJSON = (path) => {
  const json = fs.readFile(
    `${path ? `${path}/store.json` : "./store.json"}`,
    "utf8",
    (err) => {
      console.log("Error in while getting json");
      console.err(err);
    }
  );
  // console.log(json);
  return json;
};

// getJSON();

const setJSON = async (json) => {
  const path = ".";
  await fs.writeFile(
    `${path ? `${path}/store.json` : "./store.json"}`,
    JSON.stringify(json),
    (err) => {
      console.log("Error in while fetching json");
      console.err(err);
    }
  );
};

// setJSON((json = { name: "test" }));

module.exports = {
  getJSON,
  setJSON,
};
