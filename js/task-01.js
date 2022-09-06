const menuList = document.querySelectorAll('.item');
console.log(`Number of categories: ${menuList.length}`)

 menuList.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
    
});


// Порахує і виведе в консоль кількість категорій в ul#categories,
//     тобто елементів li.item.

// Для кожного элемента li.item у спику ul#categories, знайде і виведе в
//  консоль текст заголовку елемента(тегу < h2 >) і кількість елементів в
// категорії(усіх < li >, вкладених в нього).


// for (let i = 0; i < menuList; i += 1)
//     (item => {
//    console.log(`Category: ${item.firstElementChild.textContent}`); 
// console.log(`Elements: ${item.lastElementChild.children.length}`)
    
// });