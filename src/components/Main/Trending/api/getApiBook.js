let dataAPIbook = [
    {
        id: "001",
        name: "The Last Tale of the Flower Bride",
        img_URL: "https://s.lubimyczytac.pl/upload/books/5046000/5046311/1030497-352x500.jpg",
        publisher: "Roshani Chokshi",
        publisherYear: "2023",
        firstPrice: "$30.99",
        price: "$24.99"
    },
    {
        id: "002",
        name: "Hell Bent: A Novel",
        img_URL: "https://s.lubimyczytac.pl/upload/books/5015000/5015313/980612-352x500.jpg",
        publisher: "Leigh Bardugo",
        publisherYear: "2023",
        price: "$26.99"
    },
    {
        id: "003",
        name: "All the Dangerous Things",
        img_URL: "https://npr.brightspotcdn.com/53/cf/a747569c493b96b8bb948668a5d1/all-the-dangerous-things.jpg",
        publisher: "Stacy Willingham",
        publisherYear: "2023",
        price: "$26.99"
    },
    

]



export const getBook_API = () => {
    return dataAPIbook;
}