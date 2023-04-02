import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: 1,
        title: "Chicken Tikka Masala",
        imageUrl: "https://img.freepik.com/premium-photo/indian-chicken-tikka-masala-bowl_466689-896.jpg?w=1060",
        price: 160,
        discount: 0.1,
        description: "Grilled chicken cooked in a creamy tomato sauce with aromatic spices.",
    },
    {
        id: 2,
        title: "Butter Chicken",
        imageUrl: "https://img.freepik.com/free-photo/curry-with-chicken-onions-indian-food-asian-cuisine_2829-4415.jpg?w=996&t=st=1677414544~exp=1677415144~hmac=8561ca1273c929ba49449b27ebfe7dc4166d8faa32b99144757f55599b14887a",
        price: 220,
        discount: 0.0,
        description: "Tender chicken cooked in a rich and creamy tomato sauce with butter and aromatic spices.",
    },
    {
        id: 3,
        title: "Chicken Biryani",
        imageUrl: "https://img.freepik.com/premium-photo/dum-handi-chicken-biryani-is-prepared-earthen-clay-pot-called-haandi-popular-indian-non-vegetarian-food_466689-52341.jpg?w=1060",
        price: 320,
        discount: 0.0,
        description: "Basmati rice cooked with chicken, spices, and herbs, served with raita and papadum.",

    },
    {
        id: 4,
        title: "Lamb Rogan Josh",
        imageUrl: "https://img.freepik.com/premium-photo/indian-style-meat-dish-mutton-gosht-masala-lamb-rogan-josh-served-bowl-selective-focus_466689-53454.jpg?w=2000",
        price: 180,
        discount: 0.05,
        description: "Tender lamb cooked in a rich and aromatic tomato-based sauce with Kashmiri spices.",

    },
    {
        id: 5,
        title: "Beef Kebab",
        imageUrl: "https://img.freepik.com/free-photo/side-view-beef-kebabs-grilled-beef-with-tomato-red-yellow-peppers-sauce-plate_141793-4769.jpg?w=2000",
        price: 210,
        discount: 0.0,
        description: "Juicy and flavorful beef kebabs made with minced meat, spices, and herbs.",

    },
    {
        id: 6,
        title: "Prawn Curry",
        imageUrl: "https://img.freepik.com/free-photo/chicken-fried-hot-pot-with-spicy-sauce-korean-style_1150-42868.jpg?w=1060&t=st=1677414867~exp=1677415467~hmac=34d8d90f87c2f31c20236a0609ced9f4fda9b838876eb045e3c91a5a7fabf698",
        price: 160,
        discount: 0.0,
        description: "Juicy prawns cooked in a tangy and flavorful curry sauce with coconut milk and spices.",

    },
    {
        id: 7,
        title: "Mutton Curry",
        imageUrl: "https://img.freepik.com/premium-photo/mutton-curry-lamb-curry-spicy-indian-cuisine_527904-4006.jpg?w=1060",
        price: 280,
        discount: 0.0,
        description: "Tender and juicy mutton pieces cooked in a spicy and flavorful curry sauce with aromatic spices.",

    },
    {
        id: 8,
        title: "Fish Curry",
        imageUrl: "https://img.freepik.com/premium-photo/fish-curry-seer-fish-curry-traditional-indian-fish-curry-kerala-special-dish-using-coconut-arranged-white-bowl-garnished-with-curry-leaves-malabar-tamarind-white-textured-background_527904-2022.jpg?w=1060",
        price: 210,
        discount: 0.15,
        description: "Flaky and succulent fish cooked in a tangy and flavorful curry sauce with coconut milk and spices.",

    },
    {
        id: 9,
        title: "Tandoori Chicken",
        imageUrl: "https://img.freepik.com/premium-photo/tandoori-chicken-is-chicken-dish-prepared-by-roasting-chicken-marinated-yogurt-spices-tandoor-clay-oven-served-with-onion-green-chutney_466689-77665.jpg?w=1060",
        price: 250,
        discount: 0.0,
        description: "Marinated chicken cooked in a traditional clay oven, served with"
    },
    {
        id: 10,
        title: "Chicken Tikka Masala",
        imageUrl: "https://img.freepik.com/premium-photo/indian-chicken-tikka-masala-bowl_466689-896.jpg?w=1060",
        price: 160,
        discount: 0.1,
        description: "Grilled chicken cooked in a creamy tomato sauce with aromatic spices.",
    },
    {
        id: 11,
        title: "Beef Kebab",
        imageUrl: "https://img.freepik.com/free-photo/side-view-beef-kebabs-grilled-beef-with-tomato-red-yellow-peppers-sauce-plate_141793-4769.jpg?w=2000",
        price: 210,
        discount: 0.0,
        description: "Juicy and flavorful beef kebabs made with minced meat, spices, and herbs.",
    },
    {
        id: 12,
        title: "Butter Chicken",
        imageUrl: "https://img.freepik.com/free-photo/curry-with-chicken-onions-indian-food-asian-cuisine_2829-4415.jpg?w=996&t=st=1677414544~exp=1677415144~hmac=8561ca1273c929ba49449b27ebfe7dc4166d8faa32b99144757f55599b14887a",
        price: 220,
        discount: 0.0,
        description: "Tender chicken cooked in a rich and creamy tomato sauce with butter and aromatic spices.",
    },
    {
        id: 13,
        title: "Chicken Biryani",
        imageUrl: "https://img.freepik.com/premium-photo/dum-handi-chicken-biryani-is-prepared-earthen-clay-pot-called-haandi-popular-indian-non-vegetarian-food_466689-52341.jpg?w=1060",
        price: 320,
        discount: 0.0,
        description: "Basmati rice cooked with chicken, spices, and herbs, served with raita and papadum.",

    },
    {
        id: 14,
        title: "Mutton Curry",
        imageUrl: "https://img.freepik.com/premium-photo/mutton-curry-lamb-curry-spicy-indian-cuisine_527904-4006.jpg?w=1060",
        price: 280,
        discount: 0.0,
        description: "Tender and juicy mutton pieces cooked in a spicy and flavorful curry sauce with aromatic spices.",

    },
    {
        id: 15,
        title: "Prawn Curry",
        imageUrl: "https://img.freepik.com/free-photo/chicken-fried-hot-pot-with-spicy-sauce-korean-style_1150-42868.jpg?w=1060&t=st=1677414867~exp=1677415467~hmac=34d8d90f87c2f31c20236a0609ced9f4fda9b838876eb045e3c91a5a7fabf698",
        price: 160,
        discount: 0.0,
        description: "Juicy prawns cooked in a tangy and flavorful curry sauce with coconut milk and spices.",

    },
    {
        id: 16,
        title: "Chicken Tikka Masala",
        imageUrl: "https://img.freepik.com/premium-photo/indian-chicken-tikka-masala-bowl_466689-896.jpg?w=1060",
        price: 160,
        discount: 0.1,
        description: "Grilled chicken cooked in a creamy tomato sauce with aromatic spices.",
    },
    {
        id: 17,
        title: "Butter Chicken",
        imageUrl: "https://img.freepik.com/free-photo/curry-with-chicken-onions-indian-food-asian-cuisine_2829-4415.jpg?w=996&t=st=1677414544~exp=1677415144~hmac=8561ca1273c929ba49449b27ebfe7dc4166d8faa32b99144757f55599b14887a",
        price: 220,
        discount: 0.0,
        description: "Tender chicken cooked in a rich and creamy tomato sauce with butter and aromatic spices.",
    },
    {
        id: 18,
        title: "Chicken Tikka Masala",
        imageUrl: "https://img.freepik.com/premium-photo/indian-chicken-tikka-masala-bowl_466689-896.jpg?w=1060",
        price: 160,
        discount: 0.1,
        description: "Grilled chicken cooked in a creamy tomato sauce with aromatic spices.",
    },
]

const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {

    }
})


export default itemSlice.reducer
