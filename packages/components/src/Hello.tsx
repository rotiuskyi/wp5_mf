interface HelloProps {
  name?: string;
}

const Hello = ({ name }: HelloProps) => {
  return (
    <h1>Hello {name ?? 'World'}</h1>
  );
};

export default Hello;
