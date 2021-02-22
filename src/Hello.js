const Hello = (props) => {
  return <h1>Hello {props.name}</h1>;
};

Hello.defaultProps = {
  name: "anonim",
};

export default Hello;
