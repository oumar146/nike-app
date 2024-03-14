import "../styles/Button.css";
function Button({ value, buttonClass}) {
  return (
    <div>
      <a className={`button ${buttonClass}`} href="">
        {value}
      </a>
    </div>
  );
}

export default Button;
