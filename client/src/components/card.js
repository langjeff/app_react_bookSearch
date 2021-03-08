import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
} from "shards-react";

export default function BookCard({
  key,
  title,
  authors,
  href,
  image,
  description,
}) {
  return (
    <Card key={key} style={{ maxWidth: "300px" }}>
      <CardHeader>
        <h3>{title}</h3>
      </CardHeader>
      <CardImg src={image} />
      <CardBody>
        <CardTitle>{authors}</CardTitle>
        <p>{description}</p>
        <Button>
          <a href={href}>Read more &rarr;</a>
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
