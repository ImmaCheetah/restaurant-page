export default function contactPage() {
    const headerDiv = document.createElement('div');
    const header = document.createElement('h1');
    const mainInfoDiv = document.createElement('div');
    const infoDiv = document.createElement('div');
    const info = document.createElement('p');
    const content = document.getElementById('content');

    header.textContent = 'Want to Get In Touch?';
    headerDiv.classList.add('header');
    headerDiv.appendChild(header);

    info.textContent = `We're here and ready to connect with you! If you have any questions, feedback, or just want to share your Big D's experience, reach out through the following channels:

    Customer Support:
    For assistance with orders, menu inquiries, or any customer-related concerns, our support team is at your service.
    
    Email: support@bigdsburritos.com
    Phone: [Your Phone Number]
    We value your input and appreciate your choice to be a part of the Big D's community. Your satisfaction is important to us, so don't hesitate to get in touch. We look forward to hearing from you!`;
    infoDiv.classList.add('info');
    infoDiv.appendChild(info);

    mainInfoDiv.classList.add('main-info-div');

    mainInfoDiv.appendChild(headerDiv);
    mainInfoDiv.appendChild(infoDiv);

    content.appendChild(mainInfoDiv);
    console.log("contact page console log");
}