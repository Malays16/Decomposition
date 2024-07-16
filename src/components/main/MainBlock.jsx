import SearchCategories from './SearchCategories';
import SearchInput from './SearchInput';
import SearchRandomQuery from './SearchRandomQuery';
import Logo from './Logo';

const MainBlock = () => {
  return (
    <div className="main-block">
      <SearchCategories />
      <div className="input-block">
        <Logo />
        <SearchInput />
      </div>
      <SearchRandomQuery />
    </div>
  );
};

export default MainBlock;