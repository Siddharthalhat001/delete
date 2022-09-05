import React, { useContext } from 'react';
import PagingText from './pagingText';
import PagingItem from './paginationItem';
import CaretRight from '../../../assets/images/caret-right.svg';
import CaretLeft from '../../../assets/images/caret-left.svg';
import { TableContext } from '../../../contexts';

const Pagination: React.FC = () => {
  const { totalPages, page, onPageChange } = useContext(TableContext);

  return (
    <div className="table-pagination">
      <div className="paging-widget">
        <PagingItem node={<img src={CaretLeft} alt="Back" />} variant="primary" />
        <PagingItem node={<>&middot;&middot;&middot;</>} variant="dots" />
        <PagingItem node={4} />
        <PagingItem node={5} />
        <PagingItem node={6} variant="primary" />
        <PagingItem node={<>&middot;&middot;&middot;</>} variant="dots" />
        <PagingItem node={<img src={CaretRight} alt="Next" />} variant="primary" />
      </div>
      <PagingText />
    </div>
  );
};

export default Pagination;
