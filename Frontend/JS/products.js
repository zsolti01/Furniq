const products = [
    {
        id: 1,
        category: "Living room",
        name: "Modern Couch",
        description: "Comfortable leather, L shaped couch.",
        price: 199990,
        stock: 24,
        img: "https://img.butor1.hu/detailed/5099/corner-sofa-cavfeni-104_5099462.jpg?w=460&h=345&p=fw"
    },
    {
        id: 2,
        category: "Living room",
        name: "TV armchair",
        description: "Adjustable armchair. Perfect for watching TV.",
        price: 59990,
        stock: 31,
        img: "https://img.butor1.hu/detailed/2615/armchair-recliner-houston-1034-grey_2615573.jpg?w=460&h=345&p=fw"
    },
    {
        id: 3,
        category: "Living room",
        name: "Storage combination",
        description: "A combination designed for several different storage needs in one solution.",
        price: 149990,
        stock: 17,
        img: "https://img.butor1.hu/detailed/2589/wardrobe-felelie-100-dark-flagstaf-oak-copper_2589578.jpg?w=460&h=345&p=fw"
    },
    {
        id: 4,
        category: "Bedroom",
        name: "Bed frame",
        description: "Transform your bedroom into the ultimate restful retreat with this elegant bed, beautifully blending robust structural support with a sleek, timeless design.",
        price: 129990,
        stock: 44,
        img: "https://img.butor1.hu/detailed/5049/continental-bed-oppidum-polo-894_5049566.jpg?w=460&h=345&p=fw"
    },
    {
        id: 5,
        category: "Bedroom",
        name: "2 drawer nightstand",
        description: "The bedside table with integrated drawer handles has room for small items, a reading lamp and other things you want close by.",
        price: 39990,
        stock: 6,
        img: "https://img.butor1.hu/detailed/3718/bedside-table-sordoro-100-graphite-artisan-oak_3718020.jpg?w=460&h=345&p=fw"
    },
    {
        id: 6,
        category: "Bedroom",
        name: "Wardrobe combination",
        description: "Now you don't have to choose between hanging or folding your clothes. In this wardrobe there is room for both.",
        price: 179990,
        stock: 12,
        img: "https://img.butor1.hu/detailed/4763/wardrobe-closico-decoron-i-black_4763979.jpg?w=460&h=345&p=fw"
    },
    {
        id: 7,
        category: "Kitchen - Dining",
        name: "Kitchen cabinet set",
        description: "Upgrade your culinary space with this modern kitchen cabinet set, beautifully combining sleek contemporary design with high-capacity storage.",
        price: 249990,
        stock: 27,
        img: "https://img.butor1.hu/detailed/3727/modular-kitchen-set-wood-grey-135_3727730.jpg?w=1600&h=1200&func=fit&org_if_sml=1"
    },
    {
        id: 8,
        category: "Kitchen - Dining",
        name: "Wooden table",
        description: "This elegant dining table serves as the perfect centerpiece for your home, blending timeless style with a robust, family-friendly construction.",
        price: 69990,
        stock: 51,
        img: "https://img.butor1.hu/detailed/3098/table-houston-939_3098052.jpg?w=1600&h=1200&func=fit&org_if_sml=1"
    },
    {
        id: 9,
        category: "Kitchen - Dining",
        name: "Dining chair",
        description: "This premium dining chair perfectly blends ergonomic comfort with a sleek, modern aesthetic to elevate any dining space.",
        price: 19990,
        stock: 68,
        img: "https://img.butor1.hu/detailed/2872/dining-set-houston-772_2872496.jpg?w=1600&h=1200&func=fit&org_if_sml=1"
    },
    {
        id: 10,
        category: "Hallway",
        name: "Shoe cabinet",
        description: "Keep your entryway clean and welcoming with this sleek shoe cabinet, designed to maximize footwear storage while taking up minimal floor space.",
        price: 29990,
        stock: 0,
        img: "https://img.butor1.hu/detailed/3007/shoe-cabinet-camtesu-107_3007183.jpg?w=1600&h=1200&func=fit&org_if_sml=1"
    },
    {
        id: 11,
        category: "Hallway",
        name: "Coat rack",
        description: "ring effortless organization to your hallway with this stylish coat rack, designed to keep your everyday essentials neatly within reach.",
        price: 54990,
        stock: 17,
        img: "https://img.butor1.hu/detailed/2760/coat-rack-norsica-sevferi-149_2760196.jpg?w=460&h=345&p=fw"
    },
    {
        id: 12,
        category: "Hallway",
        name: "Chest of drawers",
        description: "Declutter your living space with this versatile chest of drawers, offering a seamless blend of spacious storage and refined style.",
        price: 79990,
        stock: 23,
        img: "https://img.butor1.hu/detailed/5077/chest-of-drawers-comfivo-structor-iii-sonoma-oak_5077684.jpg?w=1600&h=1200&func=fit&org_if_sml=1"
    },
    {
        id: 13,
        category: "Bathroom",
        name: "Bathroom cabinet",
        description: "Maximize your bathroom storage and create a serene, clutter-free oasis with this sleek, moisture-resistant bathroom cabinet.",
        price: 63990,
        stock: 14,
        img: "https://img.butor1.hu/detailed/5137/wall-mounted-bathroom-cabinet-for-washbasin-salus-white-white-marble_5137926.jpg?w=460&h=345&p=fw"
    },
    {
        id: 14,
        category: "Bathroom",
        name: "Bathroom set",
        description: "Transform your bathroom into a cohesive, spa-like sanctuary with this elegant bathroom set, designed to combine daily functionality with a clean, coordinated aesthetic.",
        price: 169990,
        stock: 9,
        img: "https://img.butor1.hu/detailed/4687/bathroom-set-liretu-104-black_4687132.jpg?w=460&h=345&p=fw"
    },
    {
        id: 15,
        category: "Bathroom",
        name: "Bathroom mirror cabinet",
        description: "Elevate your daily routine with this sleek bathroom mirror cabinet, cleverly combining a crystal-clear reflective surface with hidden, space-saving storage.",
        price: 39990,
        stock: 37,
        img: "https://img.butor1.hu/detailed/4327/bathroom-mirror-cabinet-camelbu-102_4327148.jpg?w=460&h=345&p=fw"
    }
];

const container = document.getElementById("loadProducts");
products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.category}</p>
        <p>${product.description}</p>
        <p>${product.price} Ft</p>
        <button>Details</button>
    `;
    container.appendChild(productCard);
});