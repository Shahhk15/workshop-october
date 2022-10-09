import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

const books = [
    {
        img: 'https://m.media-amazon.com/images/I/81m1s4wIPML._AC_UY327_FMwebp_QL65_.jpg',
        title: 'Harry Potter and the Philosophers Stone',
        author: 'J K Rowling',
        series: 'Part 1',
        price: 'Rs 400',

    },
    {
        img: 'https://m.media-amazon.com/images/I/91HHqVTAJQL._AC_UY327_FMwebp_QL65_.jpg',
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J K Rowling',
        series: 'Part 2',
        price: 'Rs 300',

    },
    {
        img: 'https://m.media-amazon.com/images/I/81f7bXC-tTL._AC_UY327_FMwebp_QL65_.jpg',
        title: 'Harry Potter and the Prisoner of Azkaban',
        author: 'J K Rowling',
        series: 'Part 3',
        price: 'Rs 500',

    },
    {
        img: 'https://m.media-amazon.com/images/I/810jKiNChxL._AC_UY327_FMwebp_QL65_.jpg',
        title: 'Harry Potter and the Goblet of Fire',
        author: 'J K Rowling',
        series: 'Part 3',
        price: 'Rs 600',

    },
    {
        img: 'https://m.media-amazon.com/images/I/81p2+4nYtkL._AC_UY327_FMwebp_QL65_.jpg',
        title: 'Harry Potter and the Half Blood Prince',
        author: 'J K Rowling',
        series: 'Part 4',
        price: 'Rs 400',

    },
    {
        img: 'https://m.media-amazon.com/images/I/51cWQIhRUTL._AC_UY327_FMwebp_QL65_.jpg',
        title: 'Harry Potter and the Deathly Hallows',
        author: 'J K Rowling',
        series: 'Part 6',
        price: 'Rs 200',

    },
    {
        img: 'https://m.media-amazon.com/images/I/81a4yXpXjnL._AC_UY327_FMwebp_QL65_.jpg',
        title: 'Harry Potter and the Order of the Phoenix',
        author: 'J K Rowling',
        series: 'Part 7',
        price: 'Rs 600',

    },
]

function BookList (){
    return(
        <section className="booklist">
           {books.map((book) =>{
               return <Book book={book}/>;
           })}
        </section>
    );
}

const ClickHere = (series) => {
    console.log(series);
}
const BuyBook = (price) => {
    console.log(price);
}

const Book = (props) => {
    const {img, title, author, series, price} = props.book;
    return (
    <article className="book" onMouseOver={() => console.log(title)}>
        <img src={img} alt=""/>
        <h1>{title}</h1>
        <h4>{author}</h4>
        <button onClick={() => ClickHere(series)}>Click Here to know Series</button>
        <div>
            <button id="buy" onClick={() => BuyBook(price)}>Buy</button>
            </div>
    </article>
    );
};
ReactDOM.createRoot(document.getElementById("root")).render(<BookList/>);