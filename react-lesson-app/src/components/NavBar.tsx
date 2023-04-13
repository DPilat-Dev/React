interface Props {
  cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: Props) => {
  return <div>navBar: {cartItemsCount}</div>;
};
export default NavBar;
