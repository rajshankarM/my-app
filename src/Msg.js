function Msg({ name, pic }) {
  return (
    <div>
      <img className="user-pic" src={pic} alt={name} />
      <h1 className="user-name"> {name} !!!</h1>
    </div>
  );
}
