import I1 from "../assets/i1.png"
import C1 from "../assets/c1.png"
import CU3 from "../assets/cu3.png"
import F9 from "../assets/f9.png"
import Berry from '../assets/berry.png'
import Chicken from '../assets/chicken.png'
import Veg from '../assets/veg.png'
import Drinks from '../assets/drinks.png'


export const homeData = [
    { id: 1, name: "Ice Cream", desc: "Chocolate & Vanilla", img: I1 },
    { id: 2, name: "Manchurian", desc: "Tasty & Spicy", img: C1 },
    { id: 3, name: "Prawns", desc: "Delicious & Tasty", img: CU3 },
    { id: 4, name: "Bananas", desc: "Fresh & Healthy", img: F9 },
]

export const categories = [
    { id: 1, category: "Ice Creams", urlName: "icecream", img: I1, desc: "Chocolate & Vanilla" },
    { id: 2, category: "Curry", urlName: "curry", img: CU3, desc: "Tasty & Spicy", },
    { id: 3, category: "Snacks", urlName: "snacks", desc: "Delicious & Tasty", img: Chicken },
    { id: 4, category: "Fruits", urlName: "fruits", desc: "Fresh & Healthy", img: Berry },
    { id: 5, category: "Vegetables", urlName: "vegetables", desc: "Fresh & Organic", img: Veg },
    { id: 6, category: "Drinks", urlName: "drinks", desc: "Soft & Cool", img: Drinks }
]