const yamljs = require("yamljs");
const fs = require("fs");

const CWD = process.cwd();
const TEMPLATE_ROUTE = `${CWD}/template`;
const JSON_ROUTE = `${CWD}/src/json`;

const resolveBio = () => {
  if (fs.existsSync(`${TEMPLATE_ROUTE}/Bio.yaml`)) {
    const bio = fs.readFileSync(`${TEMPLATE_ROUTE}/Bio.yaml`, "utf8");
    const result = yamljs.parse(bio);
    fs.writeFileSync(`${JSON_ROUTE}/Bio/index.json`, JSON.stringify(result));
  } else {
    throw new Error("Bio file not found");
  }
};

const resolveBooks = () => {
  if (fs.existsSync(`${TEMPLATE_ROUTE}/Books.yaml`)) {
    const bookList = yamljs.parse(
      fs.readFileSync(`${TEMPLATE_ROUTE}/Books.yaml`, "utf8")
    );
    fs.writeFileSync(
      `${JSON_ROUTE}/Books/index.json`,
      JSON.stringify(bookList)
    );
  } else {
    throw new Error(`"${TEMPLATE_ROUTE}/Books.yaml" file not found`);
  }
};

const resolveCollaborations = () => {
  if (fs.existsSync(`${TEMPLATE_ROUTE}/Collaborations`)) {
    const collaborations = fs
      .readdirSync(`${TEMPLATE_ROUTE}/Collaborations`, { withFileTypes: true })
      .filter((dirent) => !dirent.name.startsWith("index"))
      .map((dirent) =>
        yamljs.parse(
          fs.readFileSync(
            `${TEMPLATE_ROUTE}/Collaborations/${dirent.name}`,
            "utf8"
          )
        )
      );
    fs.writeFileSync(
      `${JSON_ROUTE}/Collaborations/index.json`,
      JSON.stringify(collaborations)
    );
  } else {
    throw new Error(`"${TEMPLATE_ROUTE}/Collaborations.yaml" file not found`);
  }
};

const createJSONRouteStructure = () => {
  if (fs.existsSync(JSON_ROUTE))
    fs.rmSync(JSON_ROUTE, { recursive: true, force: true });
  fs.mkdirSync(JSON_ROUTE);
  const menuList = fs
    .readdirSync(TEMPLATE_ROUTE, { withFileTypes: true })
    .filter((dirent) => !dirent.name.startsWith("index"))
    .map((dirent) => dirent.name.replace(/\.[^/.]+$/, ""));
  const indexResult = yamljs.parse(
    fs.readFileSync(`${TEMPLATE_ROUTE}/index.yaml`, "utf8")
  );
  fs.writeFileSync(
    `${JSON_ROUTE}/index.json`,
    JSON.stringify({
      ...indexResult,
      menuList: menuList,
    })
  );
  menuList.forEach((dir) => {
    fs.existsSync(`${JSON_ROUTE}/${dir}`) ||
      fs.mkdirSync(`${JSON_ROUTE}/${dir}`);
  });
};

createJSONRouteStructure();
resolveBio();
resolveBooks();
resolveCollaborations();
