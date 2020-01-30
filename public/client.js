var url = document.URL.split('//')[1];
const connection = new WebSocket(`wss://${url}`);

connection.onopen = () => {
  console.log('connected');
};

connection.onclose = () => {
  console.error('disconnected');
};

connection.onerror = (error) => {
  console.error('failed to connect', error);
};

connection.onmessage = (event) => {
  console.log('received', event.data);
  let li = document.createElement('li');
  var msg = JSON.parse(event.data);
  li.innerText = `${msg.name}: ${msg.message}`;
  document.querySelector('#chat').append(li);
};

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  let name = document.querySelector('#name').value;
  let message = document.querySelector('#message').value;
  connection.send(JSON.stringify({message: message, name: name}));
  document.querySelector('#message').value = '';
});
