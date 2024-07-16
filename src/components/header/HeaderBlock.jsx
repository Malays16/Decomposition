import HeaderNews from './HeaderNews';
import HeaderService from './HeaderService';
import HeaderCurrency from './HeaderCurrency';

const HeaderBlock = () => {
  return (
    <div className="header-block">
      <div className="header-info">
        <HeaderNews />
        <HeaderCurrency />
      </div>
      <HeaderService />
    </div>
  );
};

export default HeaderBlock;
