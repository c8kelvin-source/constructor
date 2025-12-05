type HelloProps = {
  name: string;
};

export default function Hello({ name }: HelloProps) {
  return <h2>Hello, {name}!</h2>;
}
