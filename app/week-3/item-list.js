import Item from "./item.js";

export default function ItemList() {
    const item1 = {
        name: 'milk, 4 L 🥛',
        quantity: 1,
        category: 'dairy',
      };
      
      const item2 = {
        name: 'bread 🍞',
        quantity: 2,
        category: 'bakery',
      };
      
      const item3 = {
        name: 'eggs, dozen 🥚',
        quantity: 2,
        category: 'dairy',
      };
      
      const item4 = {
        name: 'bananas 🍌',
        quantity: 6,
        category: 'produce',
      };
      
      const item5 = {
        name: 'broccoli 🥦',
        quantity: 3,
        category: 'produce',
      };
      const item6 = {
        name: 'chicken breasts, 1 kg 🍗',
        quantity: 1,
        category: 'meat',
      };
      
      const item7 = {
        name: 'pasta sauce 🍝',
        quantity: 3,
        category: 'canned goods',
      };
      
      const item8 = {
        name: 'spaghetti, 454 g 🍝',
        quantity: 2,
        category: 'dry goods',
      };
      
      const item9 = {
        name: 'toilet paper, 12 pack 🧻',
        quantity: 1,
        category: 'household',
      };
      
      const item10 = {
        name: 'paper towels, 6 pack',
        quantity: 1,
        category: 'household',
      };
      const item11 = {
        name: 'dish soap 🍽',
        quantity: 1,
        category: 'household',
      };
      
      const item12 = {
        name: 'hand soap 🧼',
        quantity: 4,
        category: 'household',
      };
      
      const items = [
        item1,
        item2,
        item3,
        item4,
        item5,
        item6,
        item7,
        item8,
        item9,
        item10,
        item11,
        item12,
      
      
      
      
  ];

  return (
    <main>
        <Item name={items[0].name} quantity={items[0].quantity} category={items[0].category} />
        <Item name={items[1].name} quantity={items[1].quantity} category={items[1].category} />
        <Item name={items[2].name} quantity={items[2].quantity} category={items[2].category} />
        <Item name={items[3].name} quantity={items[3].quantity} category={items[3].category} />
        <Item name={items[4].name} quantity={items[4].quantity} category={items[4].category} />
        <Item name={items[5].name} quantity={items[5].quantity} category={items[5].category} />
        <Item name={items[6].name} quantity={items[6].quantity} category={items[6].category} />
        <Item name={items[7].name} quantity={items[7].quantity} category={items[7].category} />
        <Item name={items[8].name} quantity={items[8].quantity} category={items[8].category} />
        <Item name={items[9].name} quantity={items[9].quantity} category={items[9].category} />
        <Item name={items[10].name} quantity={items[10].quantity} category={items[10].category} />
        <Item name={items[11].name} quantity={items[11].quantity} category={items[11].category} />


    </main>
  );
}
