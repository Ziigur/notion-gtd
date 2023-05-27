
interface IProps {
  header: string;
  subHeader: string; 
}

export const AppBar = (props: IProps) => {
  return (
    <div className="bg-blue-400 bg-opacity-50 p-8 py-4">
      <h1 className="text-3xl">{props.header}</h1>
      <p className="text-gray-500 text-sm">{props.subHeader}</p>
    </div>
  );
};