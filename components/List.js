import React from "react";
import Card from "./Card";
import { listingResults } from "../store";

export default function List() {
  return (
    <div id="s__listings">
      {listingResults.map(listing => (
        <Card key={listing.id} listing={listing} />
      ))}
    </div>
  );
}
