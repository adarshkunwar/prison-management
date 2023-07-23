type Props = {
  children: string | JSX.Element | JSX.Element[];
  heading: string[];
  title: string;
};

const List = ({ children, heading, title }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-xl">{title}</div>
      <table className="w-full border-red-500 rounded-t-xl">
        <thead>
          <tr className="bg-slate-400 ">
            {heading.map((val, i) => {
              return (
                <td key={i} className="py-1.5 border pr-5 pl-2" align="left">
                  {val.toString().slice(0, 1).toUpperCase() + val.slice(1)}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody className="divide-y divide-black">{children}</tbody>
      </table>
    </div>
  );
};

export default List;
