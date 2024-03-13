const form = document.querySelector(".login-form");
const btn = document.querySelector("button")

form.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const elements = event.target.elements;

    if (elements.email.value.trim() === "" || elements.password.value.trim() === "") {return alert('All form fields must be filled in')}

    const info = {
        email: elements.email.value.trim(),
        password: elements.password.value.trim()
    }
    console.log (info)

    event.target.reset();
}
form.style.display = "block";
btn.style.backgroundColor = "#4E75FF"; 
btn.style.color = "#fff";
btn.style.borderRadius = "8px";
btn.style.padding = "8px", "16px";