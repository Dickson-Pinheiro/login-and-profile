import { forwardRef } from 'react';

const DisplayInfo = forwardRef<HTMLDivElement, { name: string; content: string, ['data-cy']: string }>(
  ({ name, content, ...props }, ref) => {
    return (
      <div className="text-black2" ref={ref} data-cy={props['data-cy']}>
        <span className="text-[14px]">
          Your <strong className="font-bold">{name}</strong>
        </span>
        <div className="w-full h-11 rounded-lg bg-white4 p-4">
          <p className="text-xs">{content}</p>
        </div>
      </div>
    );
  }
);

export default DisplayInfo;