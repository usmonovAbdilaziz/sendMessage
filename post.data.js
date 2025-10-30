const url = "https://test.icorp.uz/interview.php";
const myUrl = "https://unsoftening-quadrumanous-gerald.ngrok-free.dev/webhook";

const postData = async () => {
  try {
    console.log('Loading....');
    
    const data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ msg: "Hello world", url: myUrl }),
    });
    const res =await data.json();
    return res
  } catch (error) {
    console.log('Post qilayotganda xatolik');
  }
};
module.exports = { postData };
