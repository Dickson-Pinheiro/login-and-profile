import { forwardRef, ButtonHTMLAttributes } from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from '../../utils/utils';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  loading?: boolean;
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(({ className, loading = false, ...props }, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      className={cn('bg-blue2 w-full h-[54px] rounded-[9px] text-white2 text-lg font-bold flex justify-center items-center gap-2', className)}
    >
        {props.children}
        {loading && <span className='animate-spin'><AiOutlineLoading3Quarters/></span>}
    </button>
  );
});

export default CustomButton;