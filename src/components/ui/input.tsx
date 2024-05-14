import { forwardRef, ChangeEvent, InputHTMLAttributes } from 'react';
import { cn } from '../../utils/utils';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
}

const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(({ errorMessage,...props }, ref) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <div className="flex flex-col">
      <input
        {...props}
        ref={ref}
        onChange={handleChange}
        className={cn('border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500', props.className)}
      />
      {errorMessage && <span className="text-red-500 text-xs mt-1">{errorMessage}</span>}
    </div>
  );
});

export default CustomInput;
