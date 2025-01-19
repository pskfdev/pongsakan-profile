import React from "react";
import { MenuList, MenuItem, Slide, ListItemIcon } from "@mui/material";
import {
  FiHome,
  FiUser,
  FiEdit,
  FiBriefcase,
  FiPhoneCall,
} from "react-icons/fi";
import { FaFacebookSquare, FaInstagram, FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function NavbarSide({ show, setShow }) {
  return (
    <Slide direction="right" in={show}>
      <div className={`w-52 h-full bg-neutral-900 top-0 fixed z-40`}>
        <div className="relative">
          <img
            className="h-52 object-cover object-top w-full brightness-75"
            src="/img/fluk-img.jpg"
            alt="img-profile"
          />
          <div className="absolute bottom-0  w-full bg-sky-600 bg-opacity-70">
            <h3 className="text-xl text-center text-white uppercase">
              pongsakan
            </h3>
          </div>
        </div>
        <div className="border-y border-zinc-800">
          <MenuList className="text-zinc-500 divide-y divide-zinc-800 p-0 nav-active">
            <div className="py-2">
              <MenuItem
                component={NavLink}
                to="/"
                onClick={() => setShow(false)}
              >
                <ListItemIcon>
                  <FiHome className="text-zinc-500" />
                </ListItemIcon>
                <p>Home</p>
              </MenuItem>
            </div>
            <div className="py-2">
              <MenuItem
                component={NavLink}
                to="/about"
                onClick={() => setShow(false)}
              >
                <ListItemIcon>
                  <FiUser className="text-zinc-500" />
                </ListItemIcon>
                <p>About me</p>
              </MenuItem>
            </div>
            <div className="py-2">
              <MenuItem
                component={NavLink}
                to="/resume"
                onClick={() => setShow(false)}
              >
                <ListItemIcon>
                  <FiEdit className="text-zinc-500" />
                </ListItemIcon>
                <p>Resume</p>
              </MenuItem>
            </div>
            <div className="py-2">
              <MenuItem
                component={NavLink}
                to="/portfolio"
                onClick={() => setShow(false)}
              >
                <ListItemIcon>
                  <FiBriefcase className="text-zinc-500" />
                </ListItemIcon>
                <p>Portfolio</p>
              </MenuItem>
            </div>
            <div className="py-2">
              <MenuItem
                component={NavLink}
                to="/contact"
                onClick={() => setShow(false)}
              >
                <ListItemIcon>
                  <FiPhoneCall className="text-zinc-500" />
                </ListItemIcon>
                <p>Contact</p>
              </MenuItem>
            </div>
          </MenuList>
        </div>
        {/* Footer */}
        <div className="absolute w-full bottom-0 text-center text-zinc-500">
          <div className="w-full flex justify-center gap-x-3">
            <a href="https://www.facebook.com/pongsakan.fluk/" target="_blank" rel="noreferrer">
              <FaFacebookSquare />
            </a>
            <a href="https://www.instagram.com/pskfluk/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://github.com/pskfdev" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
          <p className="text-xs my-3">
            2023 © Pongsakn-Themes. All Right Reserved.
          </p>
        </div>
      </div>
    </Slide>
  );
}

export default NavbarSide;
