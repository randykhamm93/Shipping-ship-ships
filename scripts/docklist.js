import { getDocks, getHaulingShips } from "./database.js"


export const DockList = () => {
  const docks = getDocks()
  
  let docksHTML = `<ul class="dock-list-container">`

  for (const dock of docks) {
    // Convert each dock object to an <li> and append to the docksHTML string
    docksHTML += `<li
        data-type="dock"
        data-dockid="${dock.id}"
        >${dock.location} can hold ${dock.volume} million tons of cargo</li>`
  }

  docksHTML += "</ul>"

  return docksHTML
}

document.addEventListener(
  "click",
  (clickEvent) => {
    const itemClicked = clickEvent.target;
    // Was a dock list item clicked?
    if (itemClicked.dataset.type === "dock") {
      // Get the dockId value of each hauler
      const dockId = itemClicked.dataset.dockid;
      // Define an array to store the names of ships at the dock
      const shipsAtDock = [];
      // Get the haulerShips
      const haulerShips = getHaulingShips();
      // For of loop that iterates the hauling ships
      for (const ship of haulerShips) {
        // If else statement to check if haulerDockId === dock id
        if (parseInt(dockId) === ship.dockId) {
          // Add the ship's name to the array
          shipsAtDock.push(ship.name);
        }
      }
      // Create window alert based on the number of ships at the dock
      if (shipsAtDock.length === 0) {
        window.alert(`The ${itemClicked.dataset.type} dock is currently unloading nothing`);
      } else if (shipsAtDock.length === 1) {
        window.alert(`The ${itemClicked.dataset.type} dock is currently unloading ${shipsAtDock[0]}`)
      } else {
        const shipNames = shipsAtDock.join(", ");
        window.alert(`The ${itemClicked.dataset.type} dock is currently unloading ${shipNames}`);
      }
    }
  }
)
