import {faker} from '@faker-js/faker';
import { getAvailableImages } from './getAvailabelImages';

const availableImages = getAvailableImages();
//const randomImage = faker.helpers.arrayElement(availableImages);

const createBody = () => ({
    title: faker.word.words(3),
    category: {name: faker.helpers.arrayElement(category)},
    recipeIngredients: [...Array(faker.number.int({min: 5, max: 25}))].map(() => ({
        quantity: '1',
        ingredient: {name: faker.word.words({count:{min:1, max: 3}})}
    })),
    tags: [...Array(faker.number.int({min: 4, max: 35}))].map(() => ({
        name: faker.helpers.arrayElement(recipeTags)
    })),
    rate: 1,
    mdFilePath: '/var/resources/recipes/lemon_bars.md',
    imagePath: `/var/resources/images/${faker.helpers.arrayElement(availableImages)}`,
    calories: faker.number.int({min: 100, max: 1000})
});

const category = [
    'CAKES_AND_PIES',
	'COOKIES',
	'DESSERTS',
	'CUPCAKES_AND_MUFFINS',
	'DONUTS_AND_BAGELS',
	'CHEESECAKES',
	'PANCAKES_AND_FLAPJACKS',
	'BREADS_AND_ROLLS',
	'MEAT_DISHES',
	'MEATLESS_DISHES',
	'FISH_DISHES',
	'SWEET_DISHES',
	'SOUPS',
	'SALADS_AND_SLAWS',
	'SAUCES_AND_PASTES',
	'SNACKS',
	'PRESERVES',
	'DRINKS_AND_COCKTAILS',
	'SPIRITS_AND_LIQUEURS',
	'HOMEMADE_ICE_CREAM'
];

const recipeTags = [
    "Appetizer", "Main Course", "Dessert", "Breakfast", "Lunch", "Dinner",
    "Snack", "Vegan", "Vegetarian", "Gluten-Free", "Dairy-Free", "Nut-Free",
    "Low Carb", "High Protein", "Paleo", "Keto", "Mediterranean", "Italian",
    "Mexican", "Chinese", "Indian", "Thai", "Japanese", "Greek", "French",
    "Spanish", "Middle Eastern", "American", "BBQ", "Grill", "Slow Cooker",
    "Instant Pot", "One-Pot", "Sheet Pan", "Stir-Fry", "Soup", "Stew", "Salad",
    "Pasta", "Pizza", "Burger", "Sandwich", "Wrap", "Taco", "Rice", "Quinoa",
    "Couscous", "Seafood", "Chicken", "Beef", "Pork", "Lamb", "Turkey", "Fish",
    "Shrimp", "Crab", "Lobster", "Scallops", "Tofu", "Tempeh", "Beans", "Lentils",
    "Chickpeas", "Mushroom", "Avocado", "Tomato", "Potato", "Sweet Potato",
    "Pumpkin", "Squash", "Zucchini", "Eggplant", "Spinach", "Kale", "Broccoli",
    "Cauliflower", "Carrot", "Bell Pepper", "Onion", "Garlic", "Ginger",
    "Turmeric", "Basil", "Cilantro", "Parsley", "Dill", "Rosemary", "Thyme",
    "Oregano", "Mint", "Sage", "Chili", "Chocolate", "Vanilla", "Cinnamon",
    "Honey", "Maple Syrup", "Coconut", "Almond", "Cashew", "Peanut", "Pecan",
    "Walnut", "Hazelnut", "Pistachio", "Sunflower Seed", "Pumpkin Seed",
    "Chia Seed", "Flaxseed", "Hemp Seed", "Sesame Seed", "Olive Oil", "Butter",
    "Ghee", "Yogurt", "Cheese", "Milk", "Cream", "Sour Cream", "Ice Cream",
    "Gelato", "Sorbet", "Frozen Yogurt", "Smoothie", "Juice", "Cocktail",
    "Mocktail", "Tea", "Coffee", "Latte", "Espresso", "Matcha", "Cider",
    "Wine", "Beer", "Champagne", "Sangria", "Margarita", "Martini",
    "Bloody Mary", "Mimosa", "Bellini", "Punch", "Lemonade", "Soda",
    "Water", "Sparkling Water", "Broth", "Stock", "Bouillon", "Brine",
    "Marinade", "Dressing", "Dip", "Spread", "Jam", "Jelly", "Preserves",
    "Pickles", "Sauerkraut", "Kimchi", "Chutney", "Relish", "Pesto",
    "Hummus", "Guacamole", "Salsa", "Ranch", "Vinaigrette", "Mayo",
    "Mustard", "Ketchup", "Hot Sauce", "BBQ Sauce", "Soy Sauce",
    "Tamari", "Miso", "Fish Sauce", "Oyster Sauce", "Teriyaki Sauce",
    "Sriracha", "Chili Oil", "Chili Paste", "Harissa", "Gochujang",
    "Sambal", "Chimichurri", "Tapenade", "Aioli", "Béarnaise", "Hollandaise",
    "Bechamel", "Velouté", "Espagnole", "Tomato Sauce", "Alfredo",
    "Marinara", "Puttanesca", "Arrabbiata", "Bolognese", "Carbonara",
    "Cacciatore", "Piccata", "Scampi", "Parmigiana", "Stroganoff",
    "Curry", "Tikka Masala", "Vindaloo", "Korma", "Rogan Josh",
    "Saag", "Butter Chicken", "Dal", "Paneer", "Tandoori",
    "Naan", "Chapati", "Roti", "Paratha", "Puri", "Samosa",
    "Pakora", "Bhaji", "Chaat", "Biryani", "Pulao", "Kebab",
    "Shawarma", "Falafel", "Hummus", "Tabbouleh", "Baba Ganoush",
    "Dolma", "Moussaka", "Spanakopita", "Baklava", "Tzatziki",
    "Gyro", "Souvlaki", "Calamari", "Bruschetta", "Caprese",
    "Risotto", "Gnocchi", "Lasagna", "Ravioli", "Tortellini",
    "Fettuccine", "Spaghetti", "Linguine", "Penne", "Rigatoni",
    "Macaroni", "Cannelloni", "Manicotti", "Polenta", "Frittata",
    "Omelette", "Quiche", "Crepes", "Waffles", "Pancakes",
    "French Toast", "Bagels", "Croissant", "Muffin", "Scone",
    "Donut", "Biscuit", "Cookie", "Brownie", "Cupcake",
    "Pie", "Tart", "Cake", "Cheesecake", "Bread",
    "Baguette", "Brioche", "Focaccia", "Ciabatta", "Pita",
    "Tortilla", "Noodles", "Ramen", "Udon", "Soba",
    "Rice Paper", "Spring Roll", "Dumpling", "Gyoza", "Wonton",
    "Bao", "Siomai", "Sushi", "Sashimi", "Nigiri",
    "Maki", "Temaki", "Onigiri", "Bento", "Tempura",
    "Katsu", "Teriyaki", "Yakitori", "Yakiniku", "Shabu-shabu",
    "Hot Pot", "Fondue", "Tapas", "Meze", "Antipasto",
    "Charcuterie", "Pate", "Terrine", "Rillette", "Caviar",
    "Truffle", "Foie Gras", "Escargot", "Sushi", "Sashimi",
    "Nigiri", "Maki", "Temaki", "Onigiri", "Bento",
    "Tempura", "Katsu", "Teriyaki", "Yakitori", "Yakiniku",
    "Shabu-shabu", "Hot Pot", "Fondue", "Tapas", "Meze",
    "Antipasto", "Charcuterie", "Pate", "Terrine", "Rillette",
    "Caviar", "Truffle", "Foie Gras", "Escargot", "Sushi",
    "Sashimi", "Nigiri", "Maki", "Temaki", "Onigiri",
    "Bento", "Tempura", "Katsu", "Teriyaki", "Yakitori",
    "Yakiniku", "Shabu-shabu", "Hot Pot", "Fondue", "Tapas",
    "Meze", "Antipasto", "Charcuterie", "Pate", "Terrine",
    "Rillette", "Caviar", "Truffle", "Foie Gras", "Escargot"
];

if (!process.argv[2]) {
    throw new Error('Please provide an number of requests');
}

console.log(`Processing ${process.argv[2]} requests`);

(async () => {
    for (let i = 0; i < parseInt(process.argv[2]); i++) {
        const body = JSON.stringify(createBody());
        const res = await fetch('http://localhost:8080/api/v0/recipes', {
            headers: {'Content-Type': 'application/json'},
            body: body,
            method: 'POST'
        });
        console.log(`Recipe ${i + 1} created with status ${res.status}`);
    }
})();