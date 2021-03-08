import React from "react";
import { FormInput } from "shards-react";
import { Button } from "shards-react";

export function Search() {
  return (
    <div>
      <Nav />
      <div>
        <FormInput placeholder="Search Google Books" />;
      </div>
      <div>
        <Button pill type="submit">
          Search
        </Button>
      </div>
    </div>
  );
}
