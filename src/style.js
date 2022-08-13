//icones pour login logout et help
import { FiLogOut, FiLogIn } from 'react-icons/fi';
import { GiRayGun } from 'react-icons/gi';
import { IoMdHelpBuoy } from 'react-icons/io';
//=================================================

export const AccountSectionSelectorStyle = (selected, setSelected, cas) => {
  return {
    fontSize: selected === cas ? 18 : 15,
    onClick: () => setSelected(cas),
    borderBottomWidth: 2,
    borderBottomColor:
      selected === cas
        ? colorForAccountSectionSelectedStyle.selected
        : colorForAccountSectionSelectedStyle.notSelected,
    transition: 'all ease 300ms',
    cursor: 'pointer',
  };
};

const colorForAccountSectionSelectedStyle = {
  selected: 'blue',
  notSelected: 'transparent',
};

export const c = {
  align: 'center',
  justify: 'center',
};

export const logOutHelpIconStyle = type => {
  let style = {};
  switch (type.toLowerCase()) {
    case 'login':
      style = {
        color: 'blue.400',
        as: FiLogIn,
      };
      break;
    case 'logout':
      style = {
        color: 'red.400',
        as: FiLogOut,
      };
      break;
    case 'help':
      style = {
        color: 'blue.400',
        as: IoMdHelpBuoy,
      };
      break;
    default:
      break;
  }
  return {
    ...style,
    fontSize: 30,
  };
};

export const mainBoxesStyle = full => {
  return full
    ? full === 'full' && {
        p: 0,
        m: 0,
        pt: '75px',
        w: '100vw',
      }
    : { p: 0, m: 0, pt: '65px', w: full };
};

//top navBar Style
export const navStyle = scrolled => {
  return {
    id: 'nav',
    position: 'fixed',
    top: '0',
    w: 'full',
    zIndex: 2,
    spacing: 20,
    justify: 'end',
    p: 5,
    pr: 100,
    bgColor: scrolled ? 'rgba(0,0,0)' : 'black',
    color: 'white',
  };
};

export const SlideBoxContainerStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  zIndex: -1,
  letterSpacing: 25,
  paddingLeft: 20,
  paddingBottom: 0,
  align:'center',
  justify : 'center',
  w:'full'
};
//for bottom navbar container should be a flex chakra component
export const bottomNavBarContainer = {
  position: 'fixed',
  w: '100vw',
  align: 'center',
  justify: 'center',
  bottom: 6,
  left: 0,
};

export const iconeStyleFooter = {
  fontSize: 60,
  p: 3,
  bgColor: 'transparent',
  borderRadius: '50%',
  color: 'white',
  borderWidth: 2,
  borderColor: 'gray',
  _hover: {
    bgColor: 'gray',
  },
};
