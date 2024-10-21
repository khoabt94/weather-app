import * as React from 'react';
import { cn } from '@/helpers/tailwind';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string | JSX.Element
  classNameWrapper?: string
  classNameInput?: string
  classNameLabel?: string
}

const FloatingLabelInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, classNameWrapper, classNameInput, classNameLabel, value, ...props }, ref) => (
    <div className={cn("relative flex-1 h-full", classNameWrapper)}>
      <input
        type="text"
        className={cn(`block h-full rounded-[20px]  px-4 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white/20  shadow
            dark:bg-gray-700  appearance-none dark:text-white 
            dark:border-gray-600 focus:outline-none peer`, classNameInput)}
        ref={ref}
        value={value}
        {...props}
      />
      <label
        htmlFor="floating_filled"
        className={cn(`absolute duration-300 transform -translate-y-1/2 left-4 top-1/2 origin-[0]   dark:text-white
          peer-placeholder-shown:-translate-y-1/2 peer-focus:text-xs peer-focus:translate-y-0 peer-focus:top-[10%] text-sm`,
          value ? 'text-xs translate-y-0 top-[10%]' : '',
          classNameLabel)}
      >
        {label}
      </label>
    </div>
  ),
);
FloatingLabelInput.displayName = 'Input';

export { FloatingLabelInput };
