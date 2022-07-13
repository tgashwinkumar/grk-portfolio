const md2json = require("md-2-json");
const fs = require("fs");

const CWD = process.cwd();
const MARKDOWN_ROUTE = `${CWD}/markdown`;
const JSON_ROUTE = `${CWD}/json`;

const getDirectories = (source) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const resolveBio = () => {
    if(fs.existsSync(`${MARKDOWN_ROUTE}/Bio/index.md`)){
        const bio = fs.readFileSync(`${MARKDOWN_ROUTE}/Bio/index.md`, "utf8");
        const result = md2json.parse(bio);
        const head2 = Object.keys(result['Bio']);
        fs.writeFileSync(`${JSON_ROUTE}/Bio/index.json`, JSON.stringify({
            title: head2,
            body: result['Bio'][head2]['raw']
        }));

    }else{
        throw new Error("Bio file not found");
    }
}

const createJSONRouteStructure = () => {
  fs.existsSync(JSON_ROUTE) || fs.mkdirSync(JSON_ROUTE);
  const menuList = getDirectories(MARKDOWN_ROUTE);
  fs.writeFileSync(
    `${JSON_ROUTE}/index.json`,
    JSON.stringify({
      name: "Dr. G R Karpagam",
      tagline: "Professor - CSE, Head - Library",
      linkedin: "https://www.linkedin.com/in/g-r-karpagam-rangaraju-68ab8353/",
      mail: "grk.cse@psgtech.ac.in",
      phone: "+91 98948 64081",
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
