async function getData() {
  const url = "https://testbackend-cql1.onrender.com/anotherpage";
  const response = await fetch(url);
  const jsonResponse = await response.text();
  const time = new Date();
  console.log(jsonResponse + " " + time.toLocaleTimeString("en-US"));
}

function sendRequestInterval() {
  getData();
  setInterval(getData, 5 * 60 * 1000);
}

sendRequestInterval();
