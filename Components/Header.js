import ThemeSelector from "./ThemeSelector";
import HeaderStyle from './styles/HeaderStyle';

const Header = () => {
  return (
    <HeaderStyle>
      <div className="title">
        calc
      </div>
      <ThemeSelector />
    </HeaderStyle>
  );
};

export default Header;
