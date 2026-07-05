import React from "react";

interface SkeletonBoxProps {
  width: number | string;
  height: number | string;
  borderRadius?: number | string;
  className?: string;
}

const SkeletonBox: React.FC<SkeletonBoxProps> = ({
  width,
  height,
  borderRadius = 4,
  className = "",
}) => {
  return (
    <div
      className={`animate-pulse bg-gray-300 dark:bg-gray-700 ${className}`}
      style={{
        width,
        height,
        borderRadius,
      }}
    />
  );
};

export default SkeletonBox;
