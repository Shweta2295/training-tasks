import { ITasks } from "../components/tasks";
import { IOrder } from "../context/orderSundae";

export const tasks: ITasks[] = [
  {
    id: 1,
    title: "Counter App",
    description:
      "Create a simple counter with increment,decrement and reset buttons using useState.",
  },
  {
    id: 2,
    title: "Greeting Component",
    description:
      "Create a greeting component that takes a name as a prop and display personalized massage.",
  },
  {
    id: 3,
    title: "Form and Handling",
    description:
      "Create a form with validation that stores and displays data on submission.",
  },
  {
    id: 4,
    title: "Todo List",
    description:
      "Build a simple todo list where users can add and remove tasks using state and list rendering.",
  },
  {
    id: 5,
    title: "E-commerce",
    description:
      "creating mouth watering ice cream sundae's, scoops and serves with adding extra toppings.",
  },
  {
    id: 6,
    title: "User To-Do List",
    description:
      "create a dynamic user todo list using use reducer hook and also make responsive UI",
  },
];

export const scoops: IOrder[] | [] = [
  {
    id: 1,
    img: "/images/Chocolate.png",
    name: "Chocolate",
    quantity: 0,
    price: 40,
  },
  {
    id: 2,
    img: "/images/Vanilla.png",
    name: "Vanilla",
    quantity: 0,
    price: 30,
  },
  {
    id: 3,
    img: "/images/Mint Chip.png",
    name: "Mint Chip",
    quantity: 0,
    price: 45,
  },
];

export const toppings: IOrder[] = [
  {
    id: 1,
    img: "/images/Gummi bears.png",
    name: "Gummi bears",
    quantity: 0,
    price: 20,
  },
  {
    id: 2,
    img: "/images/Coldcherrie.png",
    name: "Coldcherrie",
    quantity: 0,
    price: 30,
  },
  {
    id: 3,
    img: "/images/Hot Fudge.png",
    name: "Hot Fudge",
    quantity: 0,
    price: 20,
  },
  {
    id: 4,
    img: "/images/Caramel.png",
    name: "Caramel",
    quantity: 0,
    price: 20,
  },
  {
    id: 5,
    img: "/images/Cherrie.png",
    name: "Cherrie",
    quantity: 0,
    price: 20,
  },
  {
    id: 6,
    img: "/images/Strawberry.png",
    name: "Strawberry",
    quantity: 0,
    price: 15,
  },
];
