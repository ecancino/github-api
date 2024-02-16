import { ChangeEvent, SelectHTMLAttributes } from 'react';
import { variants, palette } from './Select.css';

export type Option = {
  id: number;
  label: string;
  value: string;
};

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  variant?: keyof typeof palette;
  name: string;
  items: Option[];
  defaultValue?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
};

export default function Select({
  name,
  items,
  defaultValue,
  onChange,
  variant = 'light',
  placeholder,
  ...extra
}: SelectProps) {
  return (
    <select
      id={name}
      name={name}
      onChange={onChange}
      defaultValue={defaultValue}
      className={variants[variant]}
      {...extra}
    >
      <option value={undefined}>{placeholder}</option>
      {items.map((item) => (
        <option key={item.id} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}
