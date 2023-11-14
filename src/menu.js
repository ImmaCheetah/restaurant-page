export default function menuPage() {
    const header = document.createElement('h1');
    const mainInfoDiv = document.createElement('div');
    const itemOneDiv = document.createElement('div');
    const itemTwoDiv = document.createElement('div');
    const itemThreeDiv = document.createElement('div');
    const itemOneTitle = document.createElement('h2');
    const itemTwoTitle = document.createElement('h2');
    const itemThreeTitle = document.createElement('h2');
    const itemOneDesc = document.createElement('p');
    const itemTwoDesc = document.createElement('p');
    const itemThreeDesc = document.createElement('p');
    const content = document.getElementById('content');

    header.textContent = 'Our Menu';
    // headerDiv.classList.add('header');

    itemOneDiv.classList.add('item');
    itemTwoDiv.classList.add('item');
    itemThreeDiv.classList.add('item');

    itemOneTitle.textContent = 'Southwest Sunrise Burrito';
    itemOneDesc.textContent = 'Scrambled eggs, savory chorizo, diced tomatoes, black beans, and melted pepper jack cheese, all wrapped in a warm flour tortilla. Topped with zesty avocado salsa and a drizzle of cilantro lime cream. Perfect for starting your day with a flavorful kick.';
    itemOneDiv.appendChild(itemOneTitle);
    itemOneDiv.appendChild(itemOneDesc);

    itemTwoTitle.textContent = 'Mango Tango Chicken Burrito';
    itemTwoDesc.textContent = 'Grilled chicken marinated in a sweet and tangy mango salsa, paired with cilantro-lime rice, black beans, crisp lettuce, and a sprinkle of queso fresco. Wrapped in a sun-dried tomato tortilla, this burrito is a dance of tropical flavors that will transport your taste buds.';
    itemTwoDiv.appendChild(itemTwoTitle);
    itemTwoDiv.appendChild(itemTwoDesc);

    itemThreeTitle.textContent = 'Spicy BBQ Pulled Pork Fiesta';
    itemThreeDesc.textContent = 'Slow-cooked pulled pork smothered in a smoky chipotle BBQ sauce, combined with caramelized onions, roasted corn, and black beans. Encased in a jalapeño-cheddar tortilla and finished with a drizzle of chipotle aioli. This burrito is a bold and flavorful celebration that brings the heat and the sweet.';
    itemThreeDiv.appendChild(itemThreeTitle);
    itemThreeDiv.appendChild(itemThreeDesc);

    mainInfoDiv.classList.add('main-info-div');

    mainInfoDiv.appendChild(header);
    mainInfoDiv.appendChild(itemOneDiv);
    mainInfoDiv.appendChild(itemTwoDiv);
    mainInfoDiv.appendChild(itemThreeDiv);

    content.appendChild(mainInfoDiv);

    console.log("menu page console log");
}