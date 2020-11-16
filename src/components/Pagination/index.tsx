import React from 'react';

import * as S from './styled';

type PaginationProps = {
  isFirst: boolean;
  isLast: boolean;
  currentPage: number;
  numPages: number;
  prevPage: string;
  nextPage: string;
};

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}: PaginationProps) => (
  <S.PaginationWrapper>
    {!isFirst && (
      <S.PaginationLink to={prevPage} cover direction="left" duration={0.6}>
        ← página anterior
      </S.PaginationLink>
    )}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && (
      <S.PaginationLink to={nextPage} cover direction="right" duration={0.6}>
        proxima página →
      </S.PaginationLink>
    )}
  </S.PaginationWrapper>
);

export default Pagination;
