export default function homePage() {
    const headerDiv = document.createElement('div');
    const header = document.createElement('h1');
    const infoDiv = document.createElement('div');
    const info = document.createElement('p');
    const content = document.getElementById('content');

    header.textContent = 'Welcome to this restaurant';
    headerDiv.appendChild(header);

    info.textContent = 'Stuff about this restaurant';
    infoDiv.appendChild(info);

    content.appendChild(headerDiv);
    content.appendChild(infoDiv);
    console.log("home page console log");
}