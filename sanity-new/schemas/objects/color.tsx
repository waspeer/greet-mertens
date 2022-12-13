import { ChangeEvent } from 'react';
import { defineType, set } from 'sanity';
import styles from './color.module.css';

export const Color = defineType({
  name: 'color',
  title: 'Color',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'value',
      title: 'Value',
      type: 'string',
    },
  ],
  components: {
    input(props) {
      const options = (props.schemaType.options || {}) as {
        list: { title: string; value: string }[];
      };

      const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = options.list.find((item) => item.value === event.target.value);

        if (value) {
          props.onChange(Object.entries(value).map(([key, value]) => set(value, [key])));
        }
      };

      return (
        <ul className={styles['color-picker']}>
          {options.list.map((item) => (
            <li key={item.value}>
              <label
                style={{ '--color': item.value } as any}
                data-selected={item.value === props.value?.value}
              >
                <input
                  type="radio"
                  name={props.schemaType.name}
                  value={item.value}
                  checked={item.value === props.value?.value}
                  onChange={handleChange}
                />
                <span className="title">{item.title}</span>
              </label>
            </li>
          ))}
        </ul>
      );
    },
  },
});
