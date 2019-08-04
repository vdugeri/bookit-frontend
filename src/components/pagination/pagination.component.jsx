import React, { useState } from "react";
import "./pagination.styles.scss";

export const Pagination = ({ pages }) => {
  const [currPage, setCurrPage] = useState(1);

  return (
    <div className="pagination">
      <span>
        <a onClick={() => setCurrPage(currPage - 1)} href={`?page=${currPage}`}>
          prev
        </a>
      </span>
      {pages.map((page, index) => (
        <span key={index}>
          <a onClick={() => setCurrPage(page)} href={`?page=${page}`}>
            {page}
          </a>
        </span>
      ))}
      <span>
        <a onClick={() => setCurrPage(currPage + 1)} href={`?page=${currPage}`}>
          next
        </a>
      </span>
    </div>
  );
};
