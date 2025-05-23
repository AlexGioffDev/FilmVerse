type PropsPage = {
  title: string;
  children: JSX.Element | JSX.Element[];
};

export const DataValue = ({ title, children }: PropsPage) => {
  return (
    <>
      <li className="flex items-center justify-between text-secondary">
        <p>{title}:</p>
        {children}
      </li>
    </>
  );
};
