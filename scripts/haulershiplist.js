import { getHaulingShips, getShippingShips } from "./database.js";

export const HaulerShipList = () => {
  const ships = getHaulingShips()

  let shipsHTML = `<ul class="hauler-list-container">`

  for (const ship of ships) {
    // Convert each hauler ship object to an <li> and append to the haulers HTML string
    shipsHTML += `<li
     data-type="hauler"
     data-id="${ship.id}"
     >${ship.name}</li>`
  }

  shipsHTML += "</ul>"

  return shipsHTML
}


document.addEventListener(
  "click",
  (clickEvent) => {
    const itemClicked = clickEvent.target

    // Was a hauler list item clicked?
    if (itemClicked.dataset.type === "hauler") {
      // Get the id of the hauler clicked
      const haulerId = itemClicked.dataset.id
      // Start a counter variable at 0
      let shipCounter = 0
      // Iterate all of the shipping ships
      const shippingShips = getShippingShips()
      for (const ship of shippingShips) {
        // Does the haulerId foreign key match the id?
        if (parseInt(haulerId) === ship.haulerId) {
          // Increase the counter by 1
          shipCounter++
        }
      }
      window.alert(`This hauler is carrying ${shipCounter} shipping ships`)
    }
  }
)
