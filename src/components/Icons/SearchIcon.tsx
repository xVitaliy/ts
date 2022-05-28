import React from 'react';

type SearchIconProps = {
  width?: string;
  height?: string;
};
export const SearchIcon: React.FC<SearchIconProps> = ({
  width = '24',
  height = '24',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.68 13.6933L23.32 21.3333L21.3333 23.32L13.6933 15.68C12.2667 16.7067 10.5467 17.3333 8.66667 17.3333C3.88 17.3333 0 13.4533 0 8.66667C0 3.88 3.88 0 8.66667 0C13.4533 0 17.3333 3.88 17.3333 8.66667C17.3333 10.5467 16.7067 12.2667 15.68 13.6933ZM8.66667 2.66667C5.34667 2.66667 2.66667 5.34667 2.66667 8.66667C2.66667 11.9867 5.34667 14.6667 8.66667 14.6667C11.9867 14.6667 14.6667 11.9867 14.6667 8.66667C14.6667 5.34667 11.9867 2.66667 8.66667 2.66667Z'
        fill='#C4C6D0'
      />
    </svg>
  );
};
