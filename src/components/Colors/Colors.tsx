import { list, listItem } from './Colors.css';
import { foreColor, nameColor } from '@app/styles/colors';

export default function Colors({ colors }: { colors: string[] }) {
  return (
    <ul className={list}>
      {colors.map((color) => (
        <li
          key={color}
          className={listItem}
          style={{
            backgroundColor: color,
            color: foreColor(color),
          }}
        >
          {nameColor(color)}
        </li>
      ))}
    </ul>
  );
}
