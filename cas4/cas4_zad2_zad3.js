/* 
   2. Kreirajte objekt koj ke sodrzi vrednosti koi se od tip string, broj, niza i objekt
   3. ispechatete gi vrednostite na objektot koi sto se vrednosti na objektot od prethodnata zadacha 
*/

let bookStoreInventory = {
    genre:{
        genre1: "Science fiction",
        genre2: "Fantasy",
        genre3: "Dystopian",
        genre4: "Mystery",
        genre5: "Action",
        genre6: "Horror",
        genre7: "Historical",
        genre8: "Graphic Novel",
        genre9: "Short story",
        genre10: "Biography",
        genre11: "Art"
    },
    language:{
        language1: "English",
        language2: "Macedonian",
        language3: "German",
        language4: "Russian",
        language5: "Vietnamese",
        language6: "Japanese",
        language7: "French"
    },
    publisher:{
        publisher1: "Makedonska Kniga",
        publisher2: "Ace",
        publisher3: "Penguin"
    },
    yearPublication: {
        year1: 1988,
        year2: 1989,
        year3: 1990,
        year4: 2000,
        year5: 2001
    },
    hasAudio: true,
    bookTotalNumber: 5789,
    1000000: "pages",
    inventoryName: "1st shift"

}

console.log(Object.values(bookStoreInventory))


