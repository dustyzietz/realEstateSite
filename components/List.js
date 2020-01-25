import React from "react";
import Card from "./Card";
import { listingResults } from "../store";

export default function List() {
  return (
    <div id="s__listings">
      {/* BEGIN: Listings */}
      {/* listing 1 */}
      {listingResults.map(listing => (
        <Card key={listing.id} listing={listing} />
      ))}
      {/* END: Listings */}
    </div>
  );
}
