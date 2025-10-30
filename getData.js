
const getData=async(method)=>{
  try {
      const url = `https://test.icorp.uz/interview.php?code=${method}`;
      const data = await fetch(url);
      const res = data.json();
      return res;
  } catch (error) {
    console.log('Get qilishda xatolilk',error);
    
  }

}
module.exports={getData}