//https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-12
//Given a 2D array representing the inventory of your store, and another 2D array representing a shipment you have received, return your updated inventory.
//     Each element in the arrays will have the format: [quantity, "item"], where quantity is an integer and "item" is a string.
//     Update items in the inventory by adding the quantity of any matching items from the shipment.
//     If a received item does not exist in the current inventory, add it as a new entry to the end of the inventory.
//     Return inventory in the order it was given with new items at the end in the order they appear in the shipment.
// For example, given an inventory of [[2, "apples"], [5, "bananas"]] and a shipment of [[1, "apples"], [3, "bananas"]], return [[3, "apples"], [8, "bananas"]].

function updateInventory(inventory, shipment) {
  let newInventory;
  if(inventory.length === 0) {
    newInventory = [...inventory, ...shipment];
  } else {
    for(let i = 0; i < inventory.length; i++) {
      let indexOf = -1;
      for (let j = 0; j < shipment.length; j++) {
        if(shipment[j][1] === inventory[i][1]) {
          indexOf = j;
          break;
        }
      }
      if(indexOf !== -1){
        inventory[i][0] = shipment[indexOf][0] + inventory[i][0];
        console.log(inventory);
        shipment.splice(indexOf, 1);
        console.log("shipment: " + shipment);
      }
    }
    newInventory = [...inventory, ...shipment];
  }

  return newInventory;
}

module.exports = updateInventory;