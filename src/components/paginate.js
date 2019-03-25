import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PageItem = ({ onClick, children }) => {
  return (
    <div className="page-item">
      <PaginationItem>
        <PaginationLink onClick={onClick}>
          {children}
        </PaginationLink>
      </PaginationItem>
    </div>
  );
};

const Paginate = ({ onPageChange }) => {
    return (
      <div className="page-list">
        <Pagination>
          <PageItem onClick={onPageChange}> prev </PageItem>
          <PageItem onClick={onPageChange}> 1 </PageItem>
          <PageItem onClick={onPageChange}> 2 </PageItem>
          <PageItem onClick={onPageChange}> 3 </PageItem>
          <PageItem onClick={onPageChange}> 4 </PageItem>
          <PageItem onClick={onPageChange}> 5 </PageItem>
          <PageItem onClick={onPageChange}> next </PageItem>
        </Pagination>
      </div>
    );
};

export default Paginate;
