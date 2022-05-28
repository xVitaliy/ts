import React from 'react';

type LinkedInIconProps = {
  width?: string;
  height?: string;
};
export const LinkedInIcon: React.FC<LinkedInIconProps> = ({
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
        d='M12.7055 8.006C10.1203 8.006 8.00449 10.1218 8.00449 12.707V27.2952C8.00449 29.8804 10.1203 31.9955 12.7055 31.9955H27.2938C29.879 31.9955 31.994 29.8805 31.994 27.2952V12.707C31.994 10.1218 29.879 8.006 27.2938 8.006H12.7055ZM13.8879 11.9647C15.1275 11.9647 15.891 12.7785 15.9146 13.8481C15.9146 14.8942 15.1274 15.7308 13.864 15.7308H13.8407C12.6247 15.7308 11.8388 14.8942 11.8388 13.8481C11.8388 12.7785 12.6485 11.9647 13.8879 11.9647H13.8879ZM24.5699 16.9642C26.9538 16.9642 28.7408 18.5223 28.7408 21.8707V28.1214H25.118V22.2897C25.118 20.8243 24.5936 19.8245 23.2825 19.8245C22.2816 19.8245 21.685 20.4984 21.4231 21.1494C21.3274 21.3823 21.3039 21.7075 21.3039 22.0333V28.1214H17.681C17.681 28.1214 17.7286 18.2427 17.681 17.2198H21.3046V18.7636C21.7861 18.0208 22.6473 16.9642 24.5699 16.9642V16.9642ZM12.0525 17.2206H15.6754V28.1215H12.0525V17.2206V17.2206Z'
        fill='#2E5DA8'
      />
    </svg>
  );
};