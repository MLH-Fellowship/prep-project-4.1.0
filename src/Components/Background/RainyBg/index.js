import "./rainy.css";

const RainyBg = ({ children }) => {
  return (
    <div class="background" id="rainy">
      <div class="rain">{children}</div>
    </div>
  );
};

export default RainyBg;
