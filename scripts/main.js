import { getDocks } from "./database.js";
import { DockList } from "./docklist.js";
import { HaulerShipList } from "./haulershiplist.js";
import { ShippingShipList } from "./shippingshiplist.js";

const docksContainer = document.querySelector(".docks-container")
docksContainer.innerHTML = DockList()

const haulersContainer = document.querySelector(".haulers-container")
haulersContainer.innerHTML = HaulerShipList()

const shippingShipsContainer = document.querySelector(".shippingShips-container")
shippingShipsContainer.innerHTML = ShippingShipList()
