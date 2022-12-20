const form = document.getElementById('transfer-form');
const responseDiv = document.getElementById('response');

form.addEventListener('submit'), (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const amount = document.getElementById('amount').value;

  if (!name || !email || !amount) {
    responseDiv.textContent = 'Please fill out all fields';
    return;
  }

  const data = {
    name,
    email,
    amount,
  };

  fetch('https://www.billplz.com/api/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.error) {
        responseDiv.textContent = result.error;
      } else {
        responseDiv.textContent = 'Money transferred successfully!';
      }
    })
    .catch((error) => {
      console.error(error);
    })
}
