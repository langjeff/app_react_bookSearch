import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  Button,
} from "shards-react";
import API from "../utils/API";

// take in function for posting book and pass to a card button
const onAdd = (e) => {
  e.preventDefault();
  API.saveBook({
    title: e.currentTarget.title,
    authors: e.currentTarget.authors,
    description: e.currentTarget.description,
    image: e.currentTarget.image,
    link: e.currentTarget.href,
  }).then((res) => console.log("book added"));
};

export default function BookCard({ title, authors, href, image, description }) {
  return (
    <Card id={title} style={{ maxWidth: "300px" }}>
      <CardHeader>
        <h3>{title}</h3>
      </CardHeader>
      {image && <CardImg src={image} />}
      <CardBody>
        <CardTitle>{authors}</CardTitle>
        <p>{description}</p>
        <Button theme="success">
          <a href={href} style={{ color: "white" }}>
            Buy
          </a>
        </Button>
        <Button
          onClick={onAdd}
          title={title}
          description={description}
          href={href}
          image={image}
          authors={authors}
        >
          Add To My Books
        </Button>
      </CardBody>
    </Card>
  );
}

// card values from books prop
//   key={books.items.id}
//   title={books.items.volumeInfo.title}
//   authors={books.items.volumeInfo.authors[0]}
//   href={books.items.volumeInfo.infoLink}
//   image={books.items.volumeInfo.imageLinks.smallThumbnail}
