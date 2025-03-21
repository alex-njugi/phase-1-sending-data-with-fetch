// Add your code here
function submitData(name, email) {
    const userData = {
      name: name,
      email: email,
    };
  
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(data => {
      console.log("Success:", data);
      document.body.innerHTML = `<p>Success! User ID: ${data.id}</p>`;
    })
    .catch(error => {
      console.error("Error:", error);
      document.body.innerHTML = `<p>Something went wrong: ${error.message}</p>`;
    });
  }
  