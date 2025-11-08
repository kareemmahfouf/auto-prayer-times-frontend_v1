document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const button = e.target.querySelector("button");
  button.disabled = true;
  button.textContent = "Subscribing...";

  try {
    const res = await fetch("http://127.0.0.1:8080/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.text();
    alert(data);
  } catch (err) {
    alert("Could not connect to backend. Make sure Flask is running.");
  }

  button.disabled = false;
  button.textContent = "Subscribe";
  document.getElementById("email").value = "";
});
