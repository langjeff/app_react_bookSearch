import React, { useState } from "react";
import { FormInput } from "shards-react";
import { Button } from "shards-react";
import API from "../utils/API";
import BookCard from "../components/card";
import NavBar from "../components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function Search() {
  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState("");

  // function for add book passed to cards element

  const handleInputChange = (event) => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setBookSearch(value);
  };

  function loadBooks() {
    console.log(bookSearch);
    API.searchGoogleBooks(bookSearch)
      .then((res) => {
        console.log(res.data.items);
        setBooks(res.data.items);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <NavBar />
      <div>
        <FormInput
          placeholder="Search Google Books"
          onChange={handleInputChange}
        />
        ;
      </div>
      <div>
        <Button pill onClick={loadBooks} type="submit">
          Search
        </Button>
      </div>
      <div>
        {!books.length ? (
          <h1 className="text-center">No Books to Display</h1>
        ) : (
          <>
            {books.map((book) => {
              return (
                <BookCard
                  key={book.id}
                  title={book.volumeInfo.title}
                  authors={book.volumeInfo.authors}
                  href={book.volumeInfo.infoLink}
                  image={book.volumeInfo.imageLinks.smallThumbnail}
                  description={book.volumeInfo.description}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
