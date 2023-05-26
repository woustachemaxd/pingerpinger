async function getData() {
  const url = "https://testbackend-cql1.onrender.com/anotherpage";
  const response = await fetch(url);
  const jsonResponse = await response.text();
  console.log(jsonResponse);
}

function sendRequestInterval() {
  getData();
  setInterval(getData, 10 * 60 * 1000);
}

sendRequestInterval();
