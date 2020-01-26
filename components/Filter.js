import React from "react";
import Button from "./Button";

export default function Filter() {
  return (
    <nav>
      <div id="s__filter">
        <Button
          iconPathD="M26.755 11.883a3.327 3.327 0 0 1 0 6.1v8.034h-2.66v-8.035a3.327 3.327 0 0 1 0-6.1V5.997h2.66v5.887zm-9.31 5.36a3.327 3.327 0 0 1 0 6.1v2.674h-2.66v-2.674a3.327 3.327 0 0 1 0-6.1V5.996h2.66v11.247zm-9.31-7.98a3.327 3.327 0 0 1 0 6.1v10.654h-2.66V15.363a3.327 3.327 0 0 1 0-6.1V5.996h2.66v3.267z"
          text="Filter"
          iconFirst="true"
        />

        <ul>
          <li>
            <Button
              iconPathD="M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z"
              text="Any Price"
            />
          </li>
          <li>
            <Button
              iconPathD="M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z"
              text="All Beds"
            />
          </li>
          <li>
            <Button
              iconPathD="M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z"
              text="All Home Types"
            />
          </li>
          <li>
            <Button
              iconPathD="M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z"
              text="More"
            />
          </li>
          <li>
            <Button
              iconPathD="M22.083 17.453a2.66 2.66 0 0 1-.304-1.235V12.92c0-3.281-2.668-5.605-5.82-5.605-3.15 0-5.813 2.322-5.813 5.606l-.002 3.3c0 .43-.104.853-.304 1.234l-.785 1.496 13.813.001-.785-1.5zm2.356-4.533v3.298l2.826 5.395-22.61-.003 2.83-5.39v-3.3c0-5.278 4.434-8.265 8.474-8.265 4.042 0 8.48 2.988 8.48 8.265zm-8.5 14.345a3.768 3.768 0 0 1-3.769-3.768h7.537a3.768 3.768 0 0 1-3.768 3.768z"
              text="Save Search"
              iconFirst
            />
          </li>
        </ul>
      </div>

      <div id="s__sort" className="flex">
        <div>
          <svg
            className="icon icon-svg"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.97 22.654l3.221-2.518 1.638 2.096-6.188 4.837-6.19-4.837 1.637-2.096 3.222 2.518V5.985h2.66v16.669zm4.655-12.729v-2.66h11.257v2.66H16.625zm2.66 7.032v-2.66h8.597v2.66h-8.597zm2.66 7.7v-2.66h5.937v2.66h-5.937z"
              fill="#869099"
            ></path>
          </svg>
        </div>
        <select name="sort-list" id="sort-list">
          <option value="0">Assessed Ratio</option>
        </select>
        <div>
          <svg
            className="icon icon-svg"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z"
              fill="#869099"
            ></path>
          </svg>
        </div>
      </div>
    </nav>
  );
}
