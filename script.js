
//Set(): yalnızca benzersiz değerler tutulur. tekrar eden değerleri yok sayar.
// her türlü veri tipini tutabilir. sayılar,diziler,objeler ve hatta undefined ve null değerler.
//const mySet = new Set();
//kullanım alanları: tekrarlayan değerleri temizlemek,veri kümelerini karşılaştırmak




const ordersSet = new Set([
'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
])
console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
console.log(ordersSet);

console.log(ordersSet[0]);

for(const order of ordersSet) 
  console.log(order);


const staff = ['Waiter','Chef','Waiter','Manager','Chef','Waiter'];
const staffUnique= [...new Set(staff)];
console.log(staffUnique);


console.log(new Set(['Waiter','Chef','Waiter','Manager','Chef','Waiter']).size);
console.log(new Set('melikeiremdemiralay').size);