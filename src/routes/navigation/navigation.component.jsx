import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { useSelector } from "react-redux/es/exports";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../component/cart-icon/cart-icon.component";
import CartDropdown from "../../component/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";
import styled from "styled-components";

const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;
const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;
const NavLinkContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>

        <NavLinkContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
      {/* <div className="navigation"></div> */}
    </Fragment>
  );
};

export default Navigation;
