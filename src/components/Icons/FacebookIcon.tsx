import React from 'react';

type FacebookIconIconProps = {
  width?: string;
  height?: string;
};
export const FacebookIcon: React.FC<FacebookIconIconProps> = ({
  width = '40',
  height = '40',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='40' height='40' rx='20' fill='#F2F0F4' />
      <path
        d='M22.25 12.5H26V8H22.25C19.355 8 17 10.355 17 13.25V15.5H14V20H17V32H21.5V20H25.25L26 15.5H21.5V13.25C21.5 12.8435 21.8435 12.5 22.25 12.5Z'
        fill='#3B5998'
      />
    </svg>
  );
};
