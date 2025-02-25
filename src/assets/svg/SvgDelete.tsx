import { FC } from "react";

export const SvgDelete: FC<ISvg> = ({ onClick }) => {
  return (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.59 7L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7z"
        fill="#ca0303"
      />
    </svg>
  );
};
