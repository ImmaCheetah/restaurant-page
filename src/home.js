export default function homePage() {
    // const headerDiv = document.createElement('div');
    const header = document.createElement('h1');
    const mainInfoDiv = document.createElement('div');
    const leftInfoDiv = document.createElement('div');
    const rightInfoDiv = document.createElement('div');
    const text = document.createElement('p');
    const img = document.createElement('img');
    img.src = '../src/img/logo.jpg';
    const content = document.getElementById('content');

    leftInfoDiv.classList.add('left-info');
    header.textContent = 'Big D\'s Burritos';
    leftInfoDiv.appendChild(header);
    leftInfoDiv.appendChild(img);
    
    rightInfoDiv.classList.add('right-info');
    text.textContent = "At Big D's Burritos, we take the humble burrito to new heights, infusing each bite with a symphony of tastes that dance on your palate. Our chefs, inspired by culinary traditions from around the world, meticulously source the finest ingredients to create a menu that tantalizes your taste buds. From the sizzling fajita fillings to the creamy guacamole made fresh daily, every element in our burritos is a celebration of quality and taste. Dive into the Big D Classics, featuring time-tested favorites like the Spicy Carnitas Explosion and the Veggie Fiesta Wrap, or embark on a flavor adventure with our Global Fusion creations, where traditional burrito meets unexpected international twists. But Big D's Burritos is more than just a meal; it's an experience. Our vibrant and welcoming atmosphere, adorned with eclectic decor, invites you to savor every moment of your dining journey. Whether you're a burrito aficionado or a first-time explorer, Big D's Burritos promises a fiesta of flavors that will leave you craving for more. Come join us at Big D's Burritos, where every burrito tells a story, and every bite is a celebration!"
    rightInfoDiv.appendChild(text);

    mainInfoDiv.classList.add('main-info-div');

    mainInfoDiv.appendChild(leftInfoDiv);
    mainInfoDiv.appendChild(rightInfoDiv);

    content.appendChild(mainInfoDiv);
    
    console.log("home page console log");
}