type TableProps = {
  heading: string[];
  children: string | JSX.Element | JSX.Element[];
};

const index = ({ heading, children }: TableProps) => {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-secondary dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {heading.map((val, i) => {
                return (
                  <th key={i} scope="col" className="px-6 py-3">
                    {val}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  );
};

export default index;
