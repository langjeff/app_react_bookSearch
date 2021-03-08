import React from "react";
import { Nav, NavItem, NavLink } from "shards-react";

export default function NavExample() {
  return (
    <Nav>
      <NavItem>
        <NavLink href="/search">Search</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/books">Books</NavLink>
      </NavItem>
    </Nav>
  );
}
