let dataAPIbookBS = [
    {
        id: "001",
        name: "The Creative Act: A Way of Being",
        img_URL: "https://m.media-amazon.com/images/I/41SqvkwaHXL.jpg",
        publisher: "Rick Rubin",
        publisherYear: "2023",
        firstPrice: "$20.31",
        price: "$20.31"
    },
    {
        id: "002",
        name: "Demon Copperhead",
        img_URL: "https://www.bookoff.pl/pol_pl_Demon-Copperhead-122684_1.jpg",
        publisher: "Leigh Bardugo",
        publisherYear: "2022",
        price: "$32.50"
    },
    {
        id: "003",
        name: "Chain of Thorns",
        img_URL: "https://s.lubimyczytac.pl/upload/books/218000/218099/998104-352x500.jpg",
        publisher: "Cassandra Clare",
        publisherYear: "2023",
        price: "$25.19"
    },
    

]



export const getBook_API = () => {
    return dataAPIbookBS;
}