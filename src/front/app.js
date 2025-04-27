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
    await loadNames();
  });
  const loadNames = async() => {
    const response = await fetch('http://localhost:3000/message/names')
    const data = await response.json();
    data.savedNames.forEach(element => {
      let li = document.createElement('li')
      li.innerText = element
      nameList.appendChild(li)
    });
  }


  loadNames()