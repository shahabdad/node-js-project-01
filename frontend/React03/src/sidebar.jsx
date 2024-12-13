

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// // Styled components__________
// const SidebarWrapper = styled.div`
//   width: 250px;
//   background-color: #343a40;
//   color: #ffff;
//   padding: 15px;
//   height: 100vh;
//   position: fixed;
//   transition: transform 0.3s ease;

//   @media (max-width: 760px) {
//     width: ${props => (props.isOpen ? '250px' : '0')};
//   }
// `;

// const Button = styled.button`
//   display: none;
//   padding: 10px;
//   background-color: #ffcc00;
//   color: #343a40;
//   border: none;
//   cursor: pointer;
//   margin-bottom: 10px;

//   @media (max-width: 760px) {
//     display: block;
//   }
// `;

// const Heading = styled.h2`
//   font-size: 1.5rem;
//   margin-bottom: 15px;
//   color: #ffcc00;
// `;

// const List = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// const ListItem = styled.li`
//   padding: 10px 0;
// `;

// const LinkItem = styled(Link)`
//   text-decoration: none;
//   color: #ffffff;
//   transition: color 0.3s;
// `;

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <SidebarWrapper isOpen={isOpen}>
//       <Button onClick={toggleSidebar}>
//         {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
//       </Button>
//       <Heading>GROCERY </Heading>
//       <List>
//         <ListItem>
//           <LinkItem to="/electronics">Electronics</LinkItem>
//         </ListItem>
//         <ListItem>
//           <LinkItem to="/clothing">Clothing</LinkItem>
//         </ListItem>
//         <ListItem>
//           <LinkItem to="/home-kitchen">Home & Kitchen</LinkItem>
//         </ListItem>
//         <ListItem>
//           <LinkItem to="/books">Books</LinkItem>
//         </ListItem>
//         <ListItem>
//           <LinkItem to="/sports">Sports</LinkItem>
//         </ListItem>
//       </List>
//     </SidebarWrapper>
//   );
// };

// export default Sidebar;




import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaLaptop, FaTshirt, FaBook, FaUtensils, FaFootballBall, FaBars } from "react-icons/fa";

const SidebarWrapper = styled.div`
  width: ${(props) => (props.isCollapsed ? "80px" : "150px")};
  background-color: #1c1c1c; /* Light black */
  color: #fff;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  overflow-x: hidden;
  transition: width 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: ${(props) =>
    props.isCollapsed ? "none" : "5px 0px 15px rgba(0, 0, 0, 0.5)"};
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 10px;
  right: -25px;
  width: 20px;
  height: 25px;
  border: none;
  background-color: #ffcc00; /* Yellow */
  color: #343a40; /* Dark text */
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 12px 20px;
  display: flex;
  align-items: center;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #343a40;
    color: #ffd700; /* Golden hover */
  }
`;

const IconWrapper = styled.span`
  font-size: 1.5rem;
  color: #ffcc00; /* Yellow */
  margin-right: ${(props) => (props.isCollapsed ? "0" : "15px")};
  transition: margin-right 0.3s ease;
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: #ffffff; /* White */
  font-size: 1rem;
  display: ${(props) => (props.isCollapsed ? "none" : "block")};
  transition: display 0.3s ease;
`;

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <SidebarWrapper isCollapsed={isCollapsed}>
      <ToggleButton onClick={toggleSidebar}>
        <FaBars />
      </ToggleButton>
      <List>
        <ListItem>
          <IconWrapper isCollapsed={isCollapsed}>
            <FaLaptop />
          </IconWrapper>
          <LinkItem to="/electronics" isCollapsed={isCollapsed}>
            Electronics
          </LinkItem>
        </ListItem>
        <ListItem>
          <IconWrapper isCollapsed={isCollapsed}>
            <FaTshirt />
          </IconWrapper>
          <LinkItem to="/clothing" isCollapsed={isCollapsed}>
            Clothes
          </LinkItem>
        </ListItem>
        <ListItem>
          <IconWrapper isCollapsed={isCollapsed}>
            <FaUtensils />
          </IconWrapper>
          <LinkItem to="/home-kitchen" isCollapsed={isCollapsed}>
            Home & Kitchen
          </LinkItem>
        </ListItem>
        <ListItem>
          <IconWrapper isCollapsed={isCollapsed}>
            <FaBook />
          </IconWrapper>
          <LinkItem to="/books" isCollapsed={isCollapsed}>
            Books
          </LinkItem>
        </ListItem>
        <ListItem>
          <IconWrapper isCollapsed={isCollapsed}>
            <FaFootballBall />
          </IconWrapper>
          <LinkItem to="/sports" isCollapsed={isCollapsed}>
            Store
          </LinkItem>
        </ListItem>
      </List>
    </SidebarWrapper>
  );
};

export default Sidebar;
