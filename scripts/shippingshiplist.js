import { getShippingShips, getHaulingShips } from './database.js'

export const ShippingShipList = () => {
  const shippingShips = getShippingShips()

  let shippersHTML = `<ul class="shipping-list-container">`

  for (const shipper of shippingShips) {
    // Convert each ship object to an <li> and append to the shippersHTML string
    shippersHTML += `<li
      data-type="shipper"
      data-haulerId="${shipper.haulerId}"
      >${shipper.name}</li>`
  }

  shippersHTML += "</ul>"

  return shippersHTML
}

document.addEventListener(
  "click",
  (clickEvent) => {
    const itemClicked = clickEvent.target

    // Was a shipping ship list item clicked?
    if (itemClicked.dataset.type === "shipper") {
      // Get the haulerId value of the shipping ship clicked
      const shipperHaulerId = itemClicked.dataset.haulerid
      // Define a default object for the found hauler
      let haulingShip = { name: "Incorrect" }
      const haulingShips = getHaulingShips()
      // Iterate the array of hauler objects
      for (let ship of haulingShips) {
        // Does the haulerId foreign key match the id of the current hauler?
        if (shipperHaulerId === String(ship.id)) {
          // Reassign the value of `haulingShip` to the current hauler
          haulingShip = ship
        }
      }
      // Show an alert to the user with this format...
      // Palais Royal is being hauled by Seawise Giant
      window.alert(`${itemClicked.textContent} is being hauled by ${haulingShip.name}`)
    }
  }
)
