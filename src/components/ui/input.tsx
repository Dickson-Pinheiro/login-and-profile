import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '../../utils/utils';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  label?: string
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(({ errorMessage, label, ...props }, ref) => {
  

  return (
    <div className="flex flex-col gap-2 tracking-wide">
      {label && <label className='text-black2 font-bold text-lg leading-6'>{label}</label>}
      <input
        {...props}
        ref={ref}
        className={cn('h-[54px] px-[18px] pt-[18px] pb-[20.25px] rounded-[9px] bg-white3 placeholder:text-gray6', props.className)}
      />
      {errorMessage && <span className="text-red1 text-xs mt-1">{errorMessage}</span>}
    </div>
  );
});

export default CustomInput;
