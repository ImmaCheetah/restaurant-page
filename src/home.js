export default function homePage() {
    const content = document.getElementById('content');
    const test = document.createElement('p');

    test.textContent = 'testing';
    content.appendChild(test);
    console.log("home page console log again");
}