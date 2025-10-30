const { createServer } = require("node:http");
const { bodyData } = require("./collectBody");
const { postData } = require("./post.data");
const { getData } = require("./getData");
let success = false;
let parts = { part1: "", part2: "" };


const server = createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  if (req.method === "POST" && req.url === "/webhook") {
    // body ma'lumotni yig'ish
    const body = await bodyData(req);
    try {
      parts.part2 = (await JSON.parse(body)).part2;
      success = true;
      console.log('part2 olindi',parts.part2);
      
      res.end(JSON.stringify({ success: true }));
    } catch (error) {
      console.log("error post Method", error);
    }
  } else {
  console.log('Not found');
  }
});
(async function () {
  try {
    parts.part1 = (await postData()).part1;
    console.log("part1 olindi", parts.part1);
  } catch (error) {
    console.log("part1ni olishda xatolik", error);
  }
})();
const timer = setInterval(() => {
  if (success) {
    if(!parts.part1||!parts.part2){
      console.log('Iltimos qaytadan urinib kuring');
    }
    clearInterval(timer);
    const method = parts.part1 + parts.part2;
    console.log(method);
    (async function () {
      try {
        const data = await getData(method);
        console.log(data);
      } catch (error) {
        console.log('get qilishda xatolik',error);
        
      }
    })();
  }
}, 1000);
server.listen(4000, () => console.log("Server running on port 4000"));
