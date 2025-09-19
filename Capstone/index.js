const menuItems = [
    { name: "Meat Lovers Pizza", description: "A hearty pizza loaded with pepperoni, sausage, ham, and bacon on a classic crust.", price: 14.99, image: "images/meatlover.jpeg" },
    { name: "Pepperoni Pizza", description: "A classic favorite topped with mozzarella cheese and spicy pepperoni slices.", price: 12.99, image: "images/pepperoni.jpeg" },
    { name: "Meatball Sub", description: "Italian-style meatballs smothered in marinara and mozzarella cheese on a toasted sub roll.", price: 9.99, image: "images/meatball.jpeg" },
    { name: "Calzone", description: "A folded pizza pocket stuffed with ricotta, mozzarella, and your choice of fillings.", price: 10.99, image: "images/calzone.jpeg" },
    { name: "Classic Pizza", description: "Thin crust topped with tomato sauce, mozzarella, and fresh herbs.", price: 11.99, image: "images/cheese.jpeg" }
];

let currentIndex = 0;

function menuTable(index) {
    const item = menuItems[index];
    document.getElementById("menu-image").src = item.image;
    document.getElementById("menu-image").alt = item.name;
    document.getElementById("menu-name").textContent = item.name;
    document.getElementById("menu-description").textContent = item.description;
    document.getElementById("menu-price").textContent = dollarSign(item.price);
}
const dollarSign = (price) => Intl.NumberFormat("en-US", {style: "currency", currency:"USD"}).format(price);
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    menuTable(currentIndex)
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % menuItems.length;
    menuTable(currentIndex);
    });
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
    menuTable(currentIndex);
    });
