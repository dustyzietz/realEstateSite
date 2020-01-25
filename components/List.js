import React, {Fragment} from "react";

export default function List() {
  return (
    <Fragment>
    <div id="s__listings">
  {/* BEGIN: Listings */}
  {/* listing 1 */}
  <article id="listing-1">
    <a className="listing listing-re" title="">
      {/* listing thumbnail */}
      <div>
        <img src="https://placekitten.com/300/200" alt=""/>
      </div>
      {/* listing line 1 */}
      <div className="flex">
        <div>$1,000,000</div>
        <div>
          {/* if assessed greater than price */}
          <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.161 22.414l5.776-5.11 1.762 1.992-8.73 7.725-9.005-7.692 1.727-2.023 5.81 4.963V5.863h2.66v16.55z" fill="#869099"></path></svg>
          {/* if assessed less than price */}
          {/* <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M14.742 9.373l-5.775 5.11-1.763-1.992 8.73-7.725 9.006 7.692-1.728 2.023-5.81-4.964v17.03h-2.66V9.373z" fill="#869099"></path></svg> */}
        </div>
        <div>{`$99,000 < assessed`}</div>
      </div>
      {/* listing line 2 */}
      <div className="flex">
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M9.196 14.603h15.523v.027h1.995v10.64h-3.99v-4.017H9.196v4.017h-3.99V6.65h3.99v7.953zm2.109-1.968v-2.66h4.655v2.66h-4.655z" fill="#869099"></path></svg>
          </div>
          <div>4bd</div>
        </div>
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M23.981 15.947H26.6v1.33a9.31 9.31 0 0 1-9.31 9.31h-2.66a9.31 9.31 0 0 1-9.31-9.31v-1.33h16.001V9.995a2.015 2.015 0 0 0-2.016-2.015h-.67c-.61 0-1.126.407-1.29.965a2.698 2.698 0 0 1 1.356 2.342H13.3a2.7 2.7 0 0 1 1.347-2.337 4.006 4.006 0 0 1 3.989-3.63h.67a4.675 4.675 0 0 1 4.675 4.675v5.952z" fill="#869099"></path></svg>
          </div>
          <div>2ba</div>
        </div>
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M13.748 21.276l-3.093-3.097v3.097h3.093zm12.852 5.32H10.655v.004h-5.32v-.004H5.32v-5.32h.015V5.32L26.6 26.596z" fill="#869099"></path></svg>
          </div>
          <div>1,230sf</div>
        </div>
      </div>
      {/* listing line 3 */}
      <address>
        <div>1234 Kuliana Pl, #300</div>
        <div>Kipo, HI</div>
      </address>
    </a>
  </article>
  {/* listing 2 */}
  <article id="listing-2">
    <a className="listing listing-re" title="">
      {/* listing thumbnail */}
      <div>
        <img src="https://placekitten.com/300/200" alt=""/>
      </div>
      {/* listing line 1 */}
      <div className="flex">
        <div>$1,000,000</div>
        <div>
          {/* if assessed greater than price */}
          {/* <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.161 22.414l5.776-5.11 1.762 1.992-8.73 7.725-9.005-7.692 1.727-2.023 5.81 4.963V5.863h2.66v16.55z" fill="#869099"></path></svg> */}
          {/* if assessed less than price */}
          <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M14.742 9.373l-5.775 5.11-1.763-1.992 8.73-7.725 9.006 7.692-1.728 2.023-5.81-4.964v17.03h-2.66V9.373z" fill="#869099"></path></svg>
        </div>
        <div>$99,000 > assessed</div>
      </div>
      {/* listing line 2 */}
      <div className="flex">
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M9.196 14.603h15.523v.027h1.995v10.64h-3.99v-4.017H9.196v4.017h-3.99V6.65h3.99v7.953zm2.109-1.968v-2.66h4.655v2.66h-4.655z" fill="#869099"></path></svg>
          </div>
          <div>4bd</div>
        </div>
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M23.981 15.947H26.6v1.33a9.31 9.31 0 0 1-9.31 9.31h-2.66a9.31 9.31 0 0 1-9.31-9.31v-1.33h16.001V9.995a2.015 2.015 0 0 0-2.016-2.015h-.67c-.61 0-1.126.407-1.29.965a2.698 2.698 0 0 1 1.356 2.342H13.3a2.7 2.7 0 0 1 1.347-2.337 4.006 4.006 0 0 1 3.989-3.63h.67a4.675 4.675 0 0 1 4.675 4.675v5.952z" fill="#869099"></path></svg>
          </div>
          <div>2ba</div>
        </div>
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M13.748 21.276l-3.093-3.097v3.097h3.093zm12.852 5.32H10.655v.004h-5.32v-.004H5.32v-5.32h.015V5.32L26.6 26.596z" fill="#869099"></path></svg>
          </div>
          <div>1,230sf</div>
        </div>
      </div>
      {/* listing line 3 */}
      <address>
        <div>1234 Kuliana Pl, #300</div>
        <div>Kipo, HI</div>
      </address>
    </a>
  </article>
  {/* listing 3 */}
  <article id="listing-3">
    <a className="listing listing-re" title="">
      {/* listing thumbnail */}
      <div>
        <img src="https://placekitten.com/300/200" alt=""/>
      </div>
      {/* listing line 1 */}
      <div className="flex">
        <div>$1,000,000</div>
        <div>
          {/* if assessed greater than price */}
          {/* <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.161 22.414l5.776-5.11 1.762 1.992-8.73 7.725-9.005-7.692 1.727-2.023 5.81 4.963V5.863h2.66v16.55z" fill="#869099"></path></svg> */}
          {/* if assessed less than price */}
          <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M14.742 9.373l-5.775 5.11-1.763-1.992 8.73-7.725 9.006 7.692-1.728 2.023-5.81-4.964v17.03h-2.66V9.373z" fill="#869099"></path></svg>
        </div>
        <div>$99,000 > assessed</div>
      </div>
      {/* listing line 2 */}
      <div className="flex">
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M9.196 14.603h15.523v.027h1.995v10.64h-3.99v-4.017H9.196v4.017h-3.99V6.65h3.99v7.953zm2.109-1.968v-2.66h4.655v2.66h-4.655z" fill="#869099"></path></svg>
          </div>
          <div>4bd</div>
        </div>
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M23.981 15.947H26.6v1.33a9.31 9.31 0 0 1-9.31 9.31h-2.66a9.31 9.31 0 0 1-9.31-9.31v-1.33h16.001V9.995a2.015 2.015 0 0 0-2.016-2.015h-.67c-.61 0-1.126.407-1.29.965a2.698 2.698 0 0 1 1.356 2.342H13.3a2.7 2.7 0 0 1 1.347-2.337 4.006 4.006 0 0 1 3.989-3.63h.67a4.675 4.675 0 0 1 4.675 4.675v5.952z" fill="#869099"></path></svg>
          </div>
          <div>2ba</div>
        </div>
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M13.748 21.276l-3.093-3.097v3.097h3.093zm12.852 5.32H10.655v.004h-5.32v-.004H5.32v-5.32h.015V5.32L26.6 26.596z" fill="#869099"></path></svg>
          </div>
          <div>1,230sf</div>
        </div>
      </div>
      {/* listing line 3 */}
      <address>
        <div>1234 Kuliana Pl, #300</div>
        <div>Kipo, HI</div>
      </address>
    </a>
  </article>
  {/* listing 4 */}
  <article id="listing-4">
    <a className="listing listing-re" title="">
      {/* listing thumbnail */}
      <div>
        <img src="https://placekitten.com/300/200" alt=""/>
      </div>
      {/* listing line 1 */}
      <div className="flex">
        <div>$1,000,000</div>
        <div>
          {/* if assessed greater than price */}
          {/* <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.161 22.414l5.776-5.11 1.762 1.992-8.73 7.725-9.005-7.692 1.727-2.023 5.81 4.963V5.863h2.66v16.55z" fill="#869099"></path></svg> */}
          {/* if assessed less than price */}
          <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M14.742 9.373l-5.775 5.11-1.763-1.992 8.73-7.725 9.006 7.692-1.728 2.023-5.81-4.964v17.03h-2.66V9.373z" fill="#869099"></path></svg>
        </div>
        <div>$99,000 > assessed</div>
      </div>
      {/* listing line 2 */}
      <div className="flex">
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M9.196 14.603h15.523v.027h1.995v10.64h-3.99v-4.017H9.196v4.017h-3.99V6.65h3.99v7.953zm2.109-1.968v-2.66h4.655v2.66h-4.655z" fill="#869099"></path></svg>
          </div>
          <div>4bd</div>
        </div>
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M23.981 15.947H26.6v1.33a9.31 9.31 0 0 1-9.31 9.31h-2.66a9.31 9.31 0 0 1-9.31-9.31v-1.33h16.001V9.995a2.015 2.015 0 0 0-2.016-2.015h-.67c-.61 0-1.126.407-1.29.965a2.698 2.698 0 0 1 1.356 2.342H13.3a2.7 2.7 0 0 1 1.347-2.337 4.006 4.006 0 0 1 3.989-3.63h.67a4.675 4.675 0 0 1 4.675 4.675v5.952z" fill="#869099"></path></svg>
          </div>
          <div>2ba</div>
        </div>
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M13.748 21.276l-3.093-3.097v3.097h3.093zm12.852 5.32H10.655v.004h-5.32v-.004H5.32v-5.32h.015V5.32L26.6 26.596z" fill="#869099"></path></svg>
          </div>
          <div>1,230sf</div>
        </div>
      </div>
      {/* listing line 3 */}
      <address>
        <div>1234 Kuliana Pl, #300</div>
        <div>Kipo, HI</div>
      </address>
    </a>
  </article>
  {/* listing 5 */}
  <article id="listing-5">
    <a className="listing listing-re" title="">
      {/* listing thumbnail */}
      <div>
        <img src="https://placekitten.com/300/200" alt=""/>
      </div>
      {/* listing line 1 */}
      <div className="flex">
        <div>$1,000,000</div>
        <div>
          {/* if assessed greater than price */}
          {/* <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.161 22.414l5.776-5.11 1.762 1.992-8.73 7.725-9.005-7.692 1.727-2.023 5.81 4.963V5.863h2.66v16.55z" fill="#869099"></path></svg> */}
          {/* if assessed less than price */}
          <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M14.742 9.373l-5.775 5.11-1.763-1.992 8.73-7.725 9.006 7.692-1.728 2.023-5.81-4.964v17.03h-2.66V9.373z" fill="#869099"></path></svg>
        </div>
        <div>$99,000 > assessed</div>
      </div>
      {/* listing line 2 */}
      <div className="flex">
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M9.196 14.603h15.523v.027h1.995v10.64h-3.99v-4.017H9.196v4.017h-3.99V6.65h3.99v7.953zm2.109-1.968v-2.66h4.655v2.66h-4.655z" fill="#869099"></path></svg>
          </div>
          <div>4bd</div>
        </div>
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M23.981 15.947H26.6v1.33a9.31 9.31 0 0 1-9.31 9.31h-2.66a9.31 9.31 0 0 1-9.31-9.31v-1.33h16.001V9.995a2.015 2.015 0 0 0-2.016-2.015h-.67c-.61 0-1.126.407-1.29.965a2.698 2.698 0 0 1 1.356 2.342H13.3a2.7 2.7 0 0 1 1.347-2.337 4.006 4.006 0 0 1 3.989-3.63h.67a4.675 4.675 0 0 1 4.675 4.675v5.952z" fill="#869099"></path></svg>
          </div>
          <div>2ba</div>
        </div>
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M13.748 21.276l-3.093-3.097v3.097h3.093zm12.852 5.32H10.655v.004h-5.32v-.004H5.32v-5.32h.015V5.32L26.6 26.596z" fill="#869099"></path></svg>
          </div>
          <div>1,230sf</div>
        </div>
      </div>
      {/* listing line 3 */}
      <address>
        <div>1234 Kuliana Pl, #300</div>
        <div>Kipo, HI</div>
      </address>
    </a>
  </article>
  {/* listing 6 */}
  <article id="listing-6">
    <a className="listing listing-re" title="">
      {/* listing thumbnail */}
      <div>
        <img src="https://placekitten.com/300/200" alt=""/>
      </div>
      {/* listing line 1 */}
      <div className="flex">
        <div>$1,000,000</div>
        <div>
          {/* if assessed greater than price */}
          {/* <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.161 22.414l5.776-5.11 1.762 1.992-8.73 7.725-9.005-7.692 1.727-2.023 5.81 4.963V5.863h2.66v16.55z" fill="#869099"></path></svg> */}
          {/* if assessed less than price */}
          <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M14.742 9.373l-5.775 5.11-1.763-1.992 8.73-7.725 9.006 7.692-1.728 2.023-5.81-4.964v17.03h-2.66V9.373z" fill="#869099"></path></svg>
        </div>
        <div>$99,000 > assessed</div>
      </div>
      {/* listing line 2 */}
      <div className="flex">
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M9.196 14.603h15.523v.027h1.995v10.64h-3.99v-4.017H9.196v4.017h-3.99V6.65h3.99v7.953zm2.109-1.968v-2.66h4.655v2.66h-4.655z" fill="#869099"></path></svg>
          </div>
          <div>4bd</div>
        </div>
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M23.981 15.947H26.6v1.33a9.31 9.31 0 0 1-9.31 9.31h-2.66a9.31 9.31 0 0 1-9.31-9.31v-1.33h16.001V9.995a2.015 2.015 0 0 0-2.016-2.015h-.67c-.61 0-1.126.407-1.29.965a2.698 2.698 0 0 1 1.356 2.342H13.3a2.7 2.7 0 0 1 1.347-2.337 4.006 4.006 0 0 1 3.989-3.63h.67a4.675 4.675 0 0 1 4.675 4.675v5.952z" fill="#869099"></path></svg>
          </div>
          <div>2ba</div>
        </div>
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M13.748 21.276l-3.093-3.097v3.097h3.093zm12.852 5.32H10.655v.004h-5.32v-.004H5.32v-5.32h.015V5.32L26.6 26.596z" fill="#869099"></path></svg>
          </div>
          <div>1,230sf</div>
        </div>
      </div>
      {/* listing line 3 */}
      <address>
        <div>1234 Kuliana Pl, #300</div>
        <div>Kipo, HI</div>
      </address>
    </a>
  </article>
  {/* listing 7 */}
  <article id="listing-7">
    <a className="listing listing-re" title="">
      {/* listing thumbnail */}
      <div>
        <img src="https://placekitten.com/300/200" alt=""/>
      </div>
      {/* listing line 1 */}
      <div className="flex">
        <div>$1,000,000</div>
        <div>
          {/* if assessed greater than price */}
          {/* <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.161 22.414l5.776-5.11 1.762 1.992-8.73 7.725-9.005-7.692 1.727-2.023 5.81 4.963V5.863h2.66v16.55z" fill="#869099"></path></svg> */}
          {/* if assessed less than price */}
          <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M14.742 9.373l-5.775 5.11-1.763-1.992 8.73-7.725 9.006 7.692-1.728 2.023-5.81-4.964v17.03h-2.66V9.373z" fill="#869099"></path></svg>
        </div>
        <div>$99,000 > assessed</div>
      </div>
      {/* listing line 2 */}
      <div className="flex">
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M9.196 14.603h15.523v.027h1.995v10.64h-3.99v-4.017H9.196v4.017h-3.99V6.65h3.99v7.953zm2.109-1.968v-2.66h4.655v2.66h-4.655z" fill="#869099"></path></svg>
          </div>
          <div>4bd</div>
        </div>
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M23.981 15.947H26.6v1.33a9.31 9.31 0 0 1-9.31 9.31h-2.66a9.31 9.31 0 0 1-9.31-9.31v-1.33h16.001V9.995a2.015 2.015 0 0 0-2.016-2.015h-.67c-.61 0-1.126.407-1.29.965a2.698 2.698 0 0 1 1.356 2.342H13.3a2.7 2.7 0 0 1 1.347-2.337 4.006 4.006 0 0 1 3.989-3.63h.67a4.675 4.675 0 0 1 4.675 4.675v5.952z" fill="#869099"></path></svg>
          </div>
          <div>2ba</div>
        </div>
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M13.748 21.276l-3.093-3.097v3.097h3.093zm12.852 5.32H10.655v.004h-5.32v-.004H5.32v-5.32h.015V5.32L26.6 26.596z" fill="#869099"></path></svg>
          </div>
          <div>1,230sf</div>
        </div>
      </div>
      {/* listing line 3 */}
      <address>
        <div>1234 Kuliana Pl, #300</div>
        <div>Kipo, HI</div>
      </address>
    </a>
  </article>
  {/* listing 8 */}
  <article id="listing-8">
    <a className="listing listing-re" title="">
      {/* listing thumbnail */}
      <div>
        <img src="https://placekitten.com/300/200" alt=""/>
      </div>
      {/* listing line 1 */}
      <div className="flex">
        <div>$1,000,000</div>
        <div>
          {/* if assessed greater than price */}
          {/* <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.161 22.414l5.776-5.11 1.762 1.992-8.73 7.725-9.005-7.692 1.727-2.023 5.81 4.963V5.863h2.66v16.55z" fill="#869099"></path></svg> */}
          {/* if assessed less than price */}
          <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M14.742 9.373l-5.775 5.11-1.763-1.992 8.73-7.725 9.006 7.692-1.728 2.023-5.81-4.964v17.03h-2.66V9.373z" fill="#869099"></path></svg>
        </div>
        <div>$99,000 > assessed</div>
      </div>
      {/* listing line 2 */}
      <div className="flex">
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M9.196 14.603h15.523v.027h1.995v10.64h-3.99v-4.017H9.196v4.017h-3.99V6.65h3.99v7.953zm2.109-1.968v-2.66h4.655v2.66h-4.655z" fill="#869099"></path></svg>
          </div>
          <div>4bd</div>
        </div>
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M23.981 15.947H26.6v1.33a9.31 9.31 0 0 1-9.31 9.31h-2.66a9.31 9.31 0 0 1-9.31-9.31v-1.33h16.001V9.995a2.015 2.015 0 0 0-2.016-2.015h-.67c-.61 0-1.126.407-1.29.965a2.698 2.698 0 0 1 1.356 2.342H13.3a2.7 2.7 0 0 1 1.347-2.337 4.006 4.006 0 0 1 3.989-3.63h.67a4.675 4.675 0 0 1 4.675 4.675v5.952z" fill="#869099"></path></svg>
          </div>
          <div>2ba</div>
        </div>
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M13.748 21.276l-3.093-3.097v3.097h3.093zm12.852 5.32H10.655v.004h-5.32v-.004H5.32v-5.32h.015V5.32L26.6 26.596z" fill="#869099"></path></svg>
          </div>
          <div>1,230sf</div>
        </div>
      </div>
      {/* listing line 3 */}
      <address>
        <div>1234 Kuliana Pl, #300</div>
        <div>Kipo, HI</div>
      </address>
    </a>
  </article>
  {/* listing 9 */}
  <article id="listing-9">
    <a className="listing listing-re" title="">
      {/* listing thumbnail */}
      <div>
        <img src="https://placekitten.com/300/200" alt=""/>
      </div>
      {/* listing line 1 */}
      <div className="flex">
        <div>$1,000,000</div>
        <div>
          {/* if assessed greater than price */}
          {/* <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.161 22.414l5.776-5.11 1.762 1.992-8.73 7.725-9.005-7.692 1.727-2.023 5.81 4.963V5.863h2.66v16.55z" fill="#869099"></path></svg> */}
          {/* if assessed less than price */}
          <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M14.742 9.373l-5.775 5.11-1.763-1.992 8.73-7.725 9.006 7.692-1.728 2.023-5.81-4.964v17.03h-2.66V9.373z" fill="#869099"></path></svg>
        </div>
        <div>$99,000 > assessed</div>
      </div>
      {/* listing line 2 */}
      <div className="flex">
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M9.196 14.603h15.523v.027h1.995v10.64h-3.99v-4.017H9.196v4.017h-3.99V6.65h3.99v7.953zm2.109-1.968v-2.66h4.655v2.66h-4.655z" fill="#869099"></path></svg>
          </div>
          <div>4bd</div>
        </div>
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M23.981 15.947H26.6v1.33a9.31 9.31 0 0 1-9.31 9.31h-2.66a9.31 9.31 0 0 1-9.31-9.31v-1.33h16.001V9.995a2.015 2.015 0 0 0-2.016-2.015h-.67c-.61 0-1.126.407-1.29.965a2.698 2.698 0 0 1 1.356 2.342H13.3a2.7 2.7 0 0 1 1.347-2.337 4.006 4.006 0 0 1 3.989-3.63h.67a4.675 4.675 0 0 1 4.675 4.675v5.952z" fill="#869099"></path></svg>
          </div>
          <div>2ba</div>
        </div>
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M13.748 21.276l-3.093-3.097v3.097h3.093zm12.852 5.32H10.655v.004h-5.32v-.004H5.32v-5.32h.015V5.32L26.6 26.596z" fill="#869099"></path></svg>
          </div>
          <div>1,230sf</div>
        </div>
      </div>
      {/* listing line 3 */}
      <address>
        <div>1234 Kuliana Pl, #300</div>
        <div>Kipo, HI</div>
      </address>
    </a>
  </article>
  {/* listing 10 */}
  <article id="listing-10">
    <a className="listing listing-re" title="">
      {/* listing thumbnail */}
      <div>
        <img src="https://placekitten.com/300/200" alt=""/>
      </div>
      {/* listing line 1 */}
      <div className="flex">
        <div>$1,000,000</div>
        <div>
          {/* if assessed greater than price */}
          {/* <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.161 22.414l5.776-5.11 1.762 1.992-8.73 7.725-9.005-7.692 1.727-2.023 5.81 4.963V5.863h2.66v16.55z" fill="#869099"></path></svg> */}
          {/* if assessed less than price */}
          <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M14.742 9.373l-5.775 5.11-1.763-1.992 8.73-7.725 9.006 7.692-1.728 2.023-5.81-4.964v17.03h-2.66V9.373z" fill="#869099"></path></svg>
        </div>
        <div>$99,000 > assessed</div>
      </div>
      {/* listing line 2 */}
      <div className="flex">
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M9.196 14.603h15.523v.027h1.995v10.64h-3.99v-4.017H9.196v4.017h-3.99V6.65h3.99v7.953zm2.109-1.968v-2.66h4.655v2.66h-4.655z" fill="#869099"></path></svg>
          </div>
          <div>4bd</div>
        </div>
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M23.981 15.947H26.6v1.33a9.31 9.31 0 0 1-9.31 9.31h-2.66a9.31 9.31 0 0 1-9.31-9.31v-1.33h16.001V9.995a2.015 2.015 0 0 0-2.016-2.015h-.67c-.61 0-1.126.407-1.29.965a2.698 2.698 0 0 1 1.356 2.342H13.3a2.7 2.7 0 0 1 1.347-2.337 4.006 4.006 0 0 1 3.989-3.63h.67a4.675 4.675 0 0 1 4.675 4.675v5.952z" fill="#869099"></path></svg>
          </div>
          <div>2ba</div>
        </div>
        <div>
          <div>
            <svg className="icon icon-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M13.748 21.276l-3.093-3.097v3.097h3.093zm12.852 5.32H10.655v.004h-5.32v-.004H5.32v-5.32h.015V5.32L26.6 26.596z" fill="#869099"></path></svg>
          </div>
          <div>1,230sf</div>
        </div>
      </div>
      {/* listing line 3 */}
      <address>
        <div>1234 Kuliana Pl, #300</div>
        <div>Kipo, HI</div>
      </address>
    </a>
  </article>
  {/* END: Listings */}
</div>
</Fragment>
)
}
