type Props = {
  children: string;
  heading: string[];
};

const List = ({ children, heading }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          {heading.map((val, i) => {
            return <td key={i}>{val}</td>;
          })}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default List;
