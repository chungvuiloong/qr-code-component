# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### Screenshot

![Screenshot](https://github.com/jeresulovuo/qr-code-component/blob/main/src/assets/design/Screenshot.png)

### Links

- Solution URL: [Github](https://github.com/jeresulovuo/qr-code-component)
- Live Site URL: [Vercel](https://mrjays-qrcode-component.vercel.app/)

## My process

- First I studied the given desktop and mobile screenshot.
- After understanding the front-end, I planned to used React.js library (to be recycled into future projects), TailwindWind CSS (To style the components and projects), Material Tailwind (CSS components to better customise the components.)
- At the same time, I also structured it into three components. 
  - App page for the whole page layout
  - QR card component
  - Footer component
- Starting with App page, it will provide a structure for to import QR component and footer component in desktop and mobile view.
  - App will be full height view and relative. (so that footer can be at the bottom).
  - App will be a flexbox to center the contents of QR code component in the center like the given screenshot design.
- Next QR Code component. I break it down into three parts: The Image, h5 typography and paragraph typography.
  - Using flex, it organised the content into column view.
  - Only view flex, the gap class can be utilise to give even spaces between each tag.
  - Other css are added to make it look like Figma design, rounded radius, padding, font-bold.
- Lastly footer, since the app is relative. Footer is absolute and bottom-0 placing it at the bottom of a relative parent.
  - Instead of following the default footer, this footer has a dark-grey background with padding of py-10.



### Built with

- HTML
- CSS
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/)
- [Material Tailwind](https://www.material-tailwind.com/)

### Continued development

The card used to create this qr code component can be further upgraded and repurposed for another project. This can be further improved for different designs such as qr code on the left side and the text on the right side.

## Author

- Website - [MrJay's Simple Portfolio](https://mrjays-simple-portfolio.vercel.app/)
- Github - [Jere / Chung Vui Loong)](https://github.com/chungvuiloong)