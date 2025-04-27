const nameForm = document.getElementById('nameForm');
const nameInput = document.getElementById('nameInput');
const nameList = document.getElementById('nameList');

nameForm.addEventListener('submit', async(e) => {
  e.preventDefault();
  const name = nameInput.value;
  await fetch('http://localhost:3000/message', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: name }),
  });
    nameInput.value = '';

  const loadNames = async () => {
  await fetch('http://localhost:3000/message/names', {
  method: 'GET',
});