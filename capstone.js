(function () {
  console.log("--- Initializing Inventory System ---");

  
  const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
  ];

 
  let added = false;
  for (let attempt = 1; attempt <= 3; attempt++) {
    const name = prompt("Enter new product name:", "Monitor");
    if (name === null) break;                        
    const price = Number(prompt("Enter product price:", "150"));

    
    if (!name.trim() || isNaN(price) || price <= 0) {
      console.log("Invalid input (attempt " + attempt + " of 3). Try again.");
      continue;                                       
    }
    inventory.push({ name: name.trim(), price: price });
    console.log('[Prompt executed: User adds "' + name.trim() + '" at "$' + price + '"]');
    added = true;
    break;                                           
  }
  if (!added) console.log("No new product was added.");

 
  function getCategory(price) {
    switch (true) {
      case price < 50:   return "Budget";
      case price <= 500: return "Standard";
      default:           return "Premium";
    }
  }

  
  function getTotalValue(items) {
    let total = 0;
    for (const item of items) total += item.price;
    return total;
  }

  
  const finalPrice = (price, tax = 0, discount = 0) =>
    price + (price * tax) / 100 - (price * discount) / 100;

 
  console.log("\n--- Processing Inventory Roster (forEach) ---");
  inventory.forEach(item => {
    console.log("* Item: " + item.name + " ($" + item.price + ") -> Category: " + getCategory(item.price));
  });

 
  const affordable = inventory.filter(item => item.price < 200).map(item => item.name);
  const report = inventory.map(item => item.name.toUpperCase() + ": $" + item.price);

  console.log("\n--- Financial Analytics ---");
  console.log("Total Inventory Value: $" + getTotalValue(inventory));
  console.log("Filtered Affordable Items (Under $200): " + JSON.stringify(affordable));
  console.log("Formatted Report List: " + JSON.stringify(report));

  
  console.log("Example: Laptop with 18% tax and 10% discount = $" + finalPrice(800, 18, 10));
})();