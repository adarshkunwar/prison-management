type Props = {
  children: string | JSX.Element | JSX.Element[];
  heading: string[];
};

const List = ({ children, heading }: Props) => {
  return (
    <table className="w-full border-red-500 rounded-t-xl">
  <thead>
    <tr className="bg-slate-400">
      {heading.map((val, i) => {
        return (  
          <td key={i} className="py-1.5" align="center">
            {val}
          </td>
        );
      })}
    </tr>
  </thead>
  <tbody className="divide-y divide-black">{children}</tbody>
</table>
  );
};

export default List;