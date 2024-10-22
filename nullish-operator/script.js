// "??" null veya undefined ise 2. değeri null  veya undefined değilse ilk değeri döndürür.
'use strict';
const restaurant = {
  name: 'La Piazza',
  openingHours: {
    mon: { open: 12, close: 22 },
    tue: { open: 11, close: 23 },
    wed: { open: 10, close: 21 },
    thu: { open: 9, close: 20 },
    fri: { open: 8, close: 19 },
    sat: { open: 7, close: 18 },
    sun: { open: 6, close: 17 },
  },
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};


const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // "?" bir değer var mı yok mu diye kontrol edip yoksa hata vermeden undefined döndürür
  console.log(`On ${day}, we open at ${open}`);// "??" bir değer undefined veya nullsa bu durumda altarnetif bir değer döndürür. Diğer falsy değerlere etki etmez.
                                               // bu iki değer genelde birlikte kullanılır çünkü biri eksik değeri güvenli bir şekilde kontrol edilirken
                                               //diğeri bu eksik durumu varsayılan bir değere dönüştürür. 
}


console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');


const users = [{ name: 'melike', email: 'hello@melike.io' }];
// const users = [];

console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('User array empty');


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}



//notlar:
//diğer kısa devre oparatörlerinden farkı(||) şudur:"??" yalnızca null ve undefined değerlere tepki verir. false,0,boş string giib falsy değerleri
//kabul eder ve onları varsayılan değerlerle değiştirmez.



//2.örnek
// Kullanıcı profilinden gelen veriler
const userProfile = {
    username: null, 
    age: undefined, 
  };
  
  const displayName = userProfile.username ?? "Misafir";
  const displayAge = userProfile.age ?? "Bilinmiyor";
  
  console.log(`Kullanıcı adı: ${displayName}`);
  console.log(`Yaş: ${displayAge}`);           
  