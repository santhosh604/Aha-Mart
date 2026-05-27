import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    try {
        await prisma.product.createMany({
            data: [
                /* Vegetables 10*/
                {
                    name: "Tomato",
                    price: 20,
                    image: "https://images.pexels.com/photos/3938343/pexels-photo-3938343.jpeg?w-500&h-500&fit=crop",
                    category: "Vegetables",
                },
                {
                    name: "Potato",
                    price: 30,
                    image: "https://images.pexels.com/photos/35595249/pexels-photo-35595249.jpeg?w-500&h-500&fit=crop",
                    category: "Vegetables",
                },
                {
                    name: "Onion",
                    price: 25,
                    image: "https://images.pexels.com/photos/15421637/pexels-photo-15421637.jpeg?w-500&h-500&fit=crop",
                    category: "Vegetables",
                },
                {
                    name: "Carrot",
                    price: 40,
                    image: "https://images.pexels.com/photos/24031498/pexels-photo-24031498.jpeg?w-500&h-500&fit=crop",
                    category: "Vegetables",
                },
                {
                    name: "Cabbage",
                    price: 35,
                    image: "https://images.pexels.com/photos/13796758/pexels-photo-13796758.jpeg?w-500&h-500&fit=crop",
                    category: "Vegetables",
                },
                {
                    name: "Spinach",
                    price: 30,
                    image: "https://images.pexels.com/photos/28797268/pexels-photo-28797268.jpeg?w-500&h-500&fit=crop",
                    category: "Vegetables",
                },
                {
                    name: "Broccoli",
                    price: 45,
                    image: "https://images.pexels.com/photos/8895927/pexels-photo-8895927.jpeg?w-500&h-500&fit=crop",
                    category: "Vegetables",
                },
                {
                    name: "Cauliflower",
                    price: 50,
                    image: "https://images.pexels.com/photos/33027967/pexels-photo-33027967.jpeg?w-500&h-500&fit=crop",
                    category: "Vegetables",
                },
                {
                    name: "Bell Pepper",
                    price: 35,
                    image: "https://images.pexels.com/photos/36804213/pexels-photo-36804213.jpeg?w-500&h-500&fit=crop",
                    category: "Vegetables",
                },
                {
                    name: "Eggplant",
                    price: 40,
                    image: "https://images.pexels.com/photos/19543593/pexels-photo-19543593.jpeg?w-500&h-500&fit=crop",
                    category: "Vegetables",
                }, 

                /* Fruits 10 */
                {
                    name: "Apple",
                    price: 100,
                    image: "https://images.pexels.com/photos/33017242/pexels-photo-33017242.jpeg?w-500&h-500&fit=crop",
                    category: "Fruits",
                },
                {
                    name: "Banana",
                    price: 50,
                    image: "https://images.pexels.com/photos/16214622/pexels-photo-16214622.jpeg?w-500&h-500&fit=crop",
                    category: "Fruits",
                }, 
                {
                    name: "Orange",
                    price: 80,
                    image: "https://images.pexels.com/photos/30236628/pexels-photo-30236628.jpeg?w-500&h-500&fit=crop",
                    category: "Fruits",
                }, 
                {
                    name: "Grapes",
                    price: 120,
                    image: "https://images.pexels.com/photos/36468255/pexels-photo-36468255.jpeg?w-500&h-500&fit=crop",
                    category: "Fruits",
                },
                {
                    name: "Mango",
                    price: 150,
                    image: "https://images.pexels.com/photos/17672881/pexels-photo-17672881.jpeg?w-500&h-500&fit=crop",
                    category: "Fruits",
                }, 
                {
                    name: "Pineapple",
                    price: 90,
                    image: "https://images.pexels.com/photos/36828670/pexels-photo-36828670.jpeg?w-500&h-500&fit=crop",
                    category: "Fruits",
                },
                {
                    name: "Strawberry",
                    price: 200,
                    image: "https://images.pexels.com/photos/21913807/pexels-photo-21913807.jpeg?w-500&h-500&fit=crop",
                    category: "Fruits",
                },
                {
                    name: "Watermelon",
                    price: 70,
                    image: "https://images.pexels.com/photos/35068607/pexels-photo-35068607.jpeg?w-500&h-500&fit=crop",
                    category: "Fruits",
                },
                {
                    name: "Papaya",
                    price: 60,
                    image: "https://images.pexels.com/photos/30701175/pexels-photo-30701175.jpeg?w-500&h-500&fit=crop",
                    category: "Fruits",
                },
                {
                    name: "Kiwi",
                    price: 110,
                    image: "https://images.pexels.com/photos/7255620/pexels-photo-7255620.jpeg?w-500&h-500&fit=crop",
                    category: "Fruits",
                },

                /* Snacks 10 */

                {
                    name: "Lays Chips",
                    price: 20,
                    image: "https://images.pexels.com/photos/7196451/pexels-photo-7196451.jpeg?w-500&h-500&fit=crop",
                    category: "Snacks",
                },
                {
                    name: "Chocolate Cookies",
                    price: 50,
                    image: "https://images.pexels.com/photos/13988422/pexels-photo-13988422.jpeg?w-500&h-500&fit=crop",
                    category: "Snacks",
                },
                {
                    name: "Cookies",
                    price: 30,
                    image: "https://images.pexels.com/photos/9620137/pexels-photo-9620137.jpeg?w-500&h-500&fit=crop",
                    category: "Snacks",
                },
                {
                    name: "Popcorn",
                    price: 40,
                    image: "https://images.pexels.com/photos/5112444/pexels-photo-5112444.jpeg?w-500&h-500&fit=crop",
                    category: "Snacks",
                },
                {
                    name: "Nuts",
                    price: 60,
                    image: "https://images.pexels.com/photos/1013420/pexels-photo-1013420.jpeg?w-500&h-500&fit=crop",
                    category: "Snacks",
                },
                {
                    name: "Candy",
                    price: 25,
                    image: "https://images.pexels.com/photos/6440811/pexels-photo-6440811.jpeg?w-500&h-500&fit=crop",
                    category: "Snacks",
                },
                {
                    name: "Granola Bars",
                    price: 35,
                    image: "https://images.pexels.com/photos/6208145/pexels-photo-6208145.jpeg?w-500&h-500&fit=crop",
                    category: "Snacks",
                },
                {
                    name: "Pretzels",
                    price: 30,
                    image: "https://images.pexels.com/photos/1894325/pexels-photo-1894325.jpeg?w-500&h-500&fit=crop",
                    category: "Snacks",
                },
                {
                    name: "Trail Mix",
                    price: 45,
                    image: "https://images.pexels.com/photos/7717492/pexels-photo-7717492.jpeg?w-500&h-500&fit=crop",
                    category: "Snacks",
                }, 
                {
                    name: "Ice Cream",
                    price: 80,
                    image: "https://images.pexels.com/photos/29851689/pexels-photo-29851689.jpeg?w-500&h-500&fit=crop",
                    category: "Snacks",
                },

                /* Rice, Grains and Oils 10 */

                {
                    name: "Basmati Rice",
                    price: 100,
                    image: "https://images.pexels.com/photos/8108170/pexels-photo-8108170.jpeg?w-500&h-500&fit=crop",
                    category: "Rice, Grains and Oils",
                },
                {
                    name: "Wheat Flour",
                    price: 50,
                    image: "https://images.pexels.com/photos/7236402/pexels-photo-7236402.jpeg?w-500&h-500&fit=crop",
                    category: "Rice, Grains and Oils",
                },
                {
                    name: "Cooking Oil",
                    price: 120,
                    image: "https://images.pexels.com/photos/12284682/pexels-photo-12284682.jpeg?w-500&h-500&fit=crop",
                    category: "Rice, Grains and Oils",
                }, 
                {
                    name: "Olive Oil",
                    price: 200,
                    image: "https://images.pexels.com/photos/25745497/pexels-photo-25745497.jpeg?w=500&h=500&fit=crop",
                    category: "Rice, Grains and Oils",
                }, 
                {
                    name: "Sunflower Oil",
                    price: 90,
                    image: "https://images.pexels.com/photos/5056853/pexels-photo-5056853.jpeg?w=500&h=500&fit=crop",
                    category: "Rice, Grains and Oils",
                },
                {
                    name: "Corn Oil",
                    price: 80,
                    image: "https://images.pexels.com/photos/25049355/pexels-photo-25049355.jpeg?w=500&h=500&fit=crop",
                    category: "Rice, Grains and Oils",
                },
                {
                    name: "Rice Bran Oil",
                    price: 110,
                    image: "https://images.pexels.com/photos/12408950/pexels-photo-12408950.jpeg?w=500&h=500&fit=crop",
                    category: "Rice, Grains and Oils",
                },
                {
                    name: "Mustard Oil",
                    price: 70,
                    image: "https://images.pexels.com/photos/8978879/pexels-photo-8978879.jpeg?w=500&h=500&fit=crop",
                    category: "Rice, Grains and Oils",
                },
                {
                    name: "Coconut Oil",
                    price: 150,
                    image: "https://images.pexels.com/photos/11921158/pexels-photo-11921158.jpeg?w=500&h=500&fit=crop",
                    category: "Rice, Grains and Oils",
                },
                {
                    name: "Dal (Lentils)",
                    price: 250,
                    image: "https://images.pexels.com/photos/34940647/pexels-photo-34940647.jpeg?w=500&h=500&fit=crop",
                    category: "Rice, Grains and Oils",
                },


          ], skipDuplicates: true

          
        });
    }
    catch (e) {
        console.error(e);
    }

}

main()