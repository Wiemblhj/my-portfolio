import { motion , AnimationProps} from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  touch-action: none;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  z-index: 6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #010026;;
  width: 100%;

  @media (max-width: 48em) {
    svg {
      width: 20vw;
    }
  }

  svg {
    width: 10vw;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke-width: 15
    
  }
`;

const pathColor = "white";
const shapeColor = "white";

const mainPathVariant= {
  transition: {
    duration: 2,
    ease: "easeInOut",
  },
  variants: {
    visible: {
      pathLength: 1,
    },
    hidden: {
      pathLength: 0,
    },
  },
};

const shapeVariations = {
  transition: {
    delay: 4,
    duration: 2,
    ease: "easeIn",
  },
  variants: {
    visible: {
      fillOpacity: 1,
      pathLength: 1,
      transition: {
        delay: 0.5,
        duration: 3,
      },
    },
    hidden: {
      fillOpacity: 0,
      pathLength: 0,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      yoyo: Infinity,
      ease: 'easeInOut',
      
      
    },
  },
};

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  padding-top: 0.5rem;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const Loader = () => {
  return (
    <Container
    initial={{ y: 0, opacity: 1 }}
    exit={{ y: '100%' , opacity: 1 }}
    transition={{ duration: 1 }}
  >
       <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="300.000000pt"
        height="300.000000pt"
        viewBox="0 0 300.000000 300.000000"
      >
{/*<g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" fill="
white" stroke="white"> */}
<g  id="Group_1"
            data-name="Group 1"
            transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)">
    <motion.path
       {...mainPathVariant}
       animate="visible"
       initial="hidden"
       id="Path_1"
       data-name="Path 1"
       fill={shapeColor}
       {...shapeVariations}
       stroke={pathColor}
       stroke-miterlimit="10"
       stroke-width="1"
     d="M1690 2614 c-138 -29 -259 -81 -343 -147 -55 -43 -38 -45 21 -3 130 94 311 148 497 149 94 0 118 -3 163 -23 56 -24 108 -75 118 -116 32 -127 -81 -331 -324 -585 -56 -59 -102 -110 -102 -113 0 -10 108 -7 115 4 4 6 -12 10 -41 10 -26 0 -44 3 -40 8 4 4 12 7 17 7 5 0 8 3 7 7 -2 3 24 35 57 70 104 111 135 146 192 226 72 100 118 194 134 269 11 54 10 66 -5 107 -22 57 -79 108 -147 129 -63 21 -226 21 -319 1z"/>    
    <motion.path
       {...mainPathVariant}
       animate="visible"
       initial="hidden"
       id="Path_2"
       data-name="Path 2"
       fill={shapeColor}
       {...shapeVariations}
       stroke={pathColor}
       stroke-miterlimit="10"
       stroke-width="1"
      d="M1825 2564 c-176 -23 -363 -91 -419 -153 -11 -12 -14 -21 -8 -21 6 0 14 5 17 10 22 36 251 130 277 114 6 -4 8 -3 5 3 -7 10 121 33 187 33 56 0 112 -19 138 -47 49 -52 18 -190 -70 -321 -57 -83 -181 -228 -193 -224 -6 1 -8 -1 -5 -6 3 -5 -12 -25 -32 -45 l-37 -36 1 37 c0 20 -3 94 -7 164 -9 152 -23 188 -74 188 -46 0 -45 11 -49 -541 -3 -288 -7 -534 -11 -545 -4 -14 -18 -23 -38 -27 -40 -7 -91 -26 -85 -32 2 -2 33 3 69 13 l64 17 8 95 c4 52 9 299 10 547 2 481 1 473 48 458 28 -9 38 -64 46 -237 3 -87 9 -158 12 -158 21 0 226 237 291 336 113 173 121 317 21 358 -41 16 -122 25 -166 20z"    />
  <motion.path
       {...mainPathVariant}
       animate="visible"
       initial="hidden"
       id="Path_3"
       data-name="Path 3"
       fill={shapeColor}
       {...shapeVariations}
       stroke={pathColor}
       stroke-miterlimit="10"
       stroke-width="1"
        d="M1030 2426 c-323 -75 -688 -330 -876 -613 -155 -231 -168 -449 -39 -601 45 -52 152 -123 230 -152 80 -29 215 -39 234 -17 19 24 5 37 -39 37 -147 0 -318 98 -384 220 -84 155 -15 376 193 615 226 261 617 481 821 462 148 -13 208 -92 217 -290 6 -128 -3 -250 -57 -747 -55 -504 -63 -619 -57 -798 6 -177 20 -236 69 -277 83 -70 165 -29 239 117 57 113 152 407 189 583 62 300 93 440 101 455 11 22 17 -52 24 -290 6 -229 22 -364 49 -422 20 -41 60 -62 99 -52 15 3 27 4 27 2 0 -8 -153 -96 -214 -123 -32 -14 -92 -35 -134 -46 -43 -12 -81 -25 -87 -31 -24 -23 162 33 252 76 88 42 195 114 188 125 -2 5 2 15 11 22 57 47 133 304 209 714 15 77 28 153 30 170 3 16 12 68 21 115 9 47 29 164 44 260 23 145 26 177 15 189 -17 17 -60 7 -70 -16 -9 -24 -77 -371 -110 -563 -81 -469 -169 -809 -201 -777 -14 13 -34 314 -43 625 -11 366 -13 382 -62 397 -27 9 -64 -10 -78 -41 -6 -13 -33 -135 -61 -271 -91 -440 -150 -692 -196 -832 -49 -147 -108 -281 -142 -321 -18 -21 -23 -23 -32 -10 -28 41 -35 102 -34 300 0 217 1 229 66 805 35 312 42 402 42 575 1 186 -1 210 -20 256 -32 77 -70 120 -132 151 -48 23 -71 28 -152 30 -52 1 -120 -4 -150 -11z m283 -40 c60 -31 122 -90 112 -107 -4 -5 -2 -9 3 -9 33 0 46 -307 22 -549 -23 -239 -34 -331 -39 -331 -3 0 -8 -39 -9 -88 -2 -48 -7 -91 -12 -97 -4 -5 -11 -57 -14 -115 -3 -58 -10 -152 -16 -210 -6 -58 -10 -181 -9 -275 0 -93 0 -179 0 -189 0 -25 34 -99 53 -115 8 -7 23 -10 33 -7 20 6 90 114 85 129 -1 5 2 15 9 23 6 7 25 56 43 109 18 52 35 92 39 89 3 -3 3 4 0 17 -5 17 -3 20 7 14 9 -5 11 -4 6 4 -7 11 7 68 26 105 6 11 11 31 13 45 2 24 9 55 34 161 5 19 25 118 46 220 21 102 40 187 44 190 3 3 8 23 9 45 2 22 7 45 11 50 4 6 9 28 10 50 2 22 6 45 10 50 4 6 8 24 9 40 8 100 51 160 88 123 18 -17 20 -52 29 -358 9 -319 18 -487 31 -575 6 -39 28 -75 47 -75 16 0 47 41 47 62 0 11 4 16 10 13 6 -3 7 1 4 9 -3 9 -2 16 2 16 5 0 10 14 10 32 1 18 6 34 13 36 6 2 9 8 6 13 -3 4 0 21 8 36 7 15 12 36 10 45 -3 10 2 32 11 50 14 32 20 60 30 141 3 21 8 42 11 48 4 5 8 30 11 56 2 25 8 51 11 57 4 6 8 17 8 26 1 8 5 33 10 55 4 22 7 52 6 68 -1 15 1 27 6 27 4 0 9 15 10 33 2 41 17 127 23 135 2 1 4 11 5 22 1 11 4 23 5 28 1 4 2 11 1 16 -1 5 1 16 5 25 11 25 19 67 29 150 3 24 8 48 11 53 3 5 8 28 11 51 4 37 16 56 34 57 3 0 6 -13 6 -30 0 -16 -3 -30 -7 -30 -3 0 -6 -12 -7 -27 -2 -42 -12 -125 -19 -153 -7 -25 -9 -40 -18 -95 -2 -16 -5 -30 -6 -30 -1 0 -4 -19 -6 -43 -2 -23 -13 -86 -24 -140 -12 -53 -23 -119 -26 -146 -3 -28 -8 -54 -11 -59 -3 -6 -8 -26 -10 -46 -6 -48 -11 -76 -13 -76 -3 0 -10 -43 -11 -72 -1 -13 -5 -20 -9 -18 -5 3 -6 -4 -3 -15 3 -12 0 -20 -7 -20 -7 0 -10 -7 -7 -15 5 -12 -8 -74 -29 -135 -3 -8 -5 -15 -4 -15 0 0 -7 -25 -16 -55 -24 -84 -65 -173 -88 -192 -27 -23 -69 -23 -88 0 -20 24 -42 97 -35 116 4 9 1 16 -5 16 -7 0 -6 5 2 15 8 9 9 15 2 15 -6 0 -13 19 -16 43 -5 35 -15 337 -16 473 0 22 -6 49 -14 59 -13 18 -14 18 -37 -1 -14 -10 -24 -26 -24 -34 1 -16 -12 -74 -22 -100 -3 -8 -7 -26 -9 -40 -1 -14 -5 -36 -8 -50 -4 -14 -9 -38 -11 -55 -3 -16 -8 -37 -10 -45 -3 -8 -9 -47 -14 -85 -6 -39 -18 -95 -26 -125 -9 -30 -21 -73 -27 -95 -54 -208 -168 -476 -220 -520 -43 -37 -101 -35 -138 5 -15 16 -31 44 -35 62 -4 18 -10 40 -13 48 -11 30 -7 477 4 491 10 12 15 71 18 182 0 15 3 27 6 27 3 0 5 10 6 23 0 12 2 55 4 95 2 39 6 72 10 72 4 0 8 32 9 72 1 39 4 75 7 79 4 7 12 74 19 159 1 25 8 108 15 186 7 77 10 203 8 280 -4 116 -8 147 -27 190 -44 101 -118 143 -254 145 -54 1 -74 4 -57 9 14 4 61 7 105 6 67 -1 89 -6 138 -30z m-283 5 c0 -5 -24 -14 -52 -21 -93 -22 -250 -103 -372 -193 -133 -97 -231 -192 -348 -335 -30 -37 -85 -128 -93 -153 -4 -13 -14 -34 -22 -47 -8 -13 -21 -44 -29 -70 -16 -54 -19 -232 -4 -232 6 0 10 -11 10 -25 0 -14 4 -25 9 -25 4 0 21 -19 36 -42 15 -23 41 -53 58 -67 45 -39 159 -101 186 -101 13 0 22 -3 18 -6 -17 -17 -101 10 -170 55 -89 58 -134 104 -173 173 -27 49 -29 61 -29 158 0 66 6 118 14 140 29 74 95 197 125 235 17 22 38 49 46 60 32 42 178 182 235 225 33 25 62 48 63 53 2 4 10 7 18 7 8 0 14 3 14 8 0 4 17 16 38 27 20 10 48 27 62 36 61 40 203 108 240 114 23 4 54 13 68 21 31 16 52 18 52 5z"/>
         <motion.path
       {...mainPathVariant}
       animate="visible"
       initial="hidden"
       id="Path_4"
       data-name="Path 4"
       fill={shapeColor}
       {...shapeVariations}
       stroke={pathColor}
       stroke-miterlimit="10"
       stroke-width="1" d="M2020 1778 c65 -9 168 -31 205 -43 19 -6 19 -6 1 9 -26 21 -144 46 -213 45 l-58 -2 65 -9z"/> 
         <motion.path
       {...mainPathVariant}
       animate="visible"
       initial="hidden"
       id="Path_5"
       data-name="Path 5"
       fill={shapeColor}
              {...shapeVariations}
       stroke={pathColor}
       stroke-miterlimit="10"
       stroke-width="1"d="M1990 1721 c0 -4 31 -13 69 -19 38 -7 90 -21 116 -32 60 -26 71 -19 16 9 -52 27 -201 58 -201 42z"/>
          <motion.path
        {...mainPathVariant}
        animate="visible"
        initial="hidden"
        id="Path_6"
        data-name="Path 6"
        fill={shapeColor}
        {...shapeVariations}
        stroke={pathColor}
        stroke-miterlimit="10"
        stroke-width="1" d="M1710 1711 l-45 -6 -6 -140 c-3 -77 -10 -197 -14 -267 l-7 -128 31 0 c17 0 31 4 31 9 0 5 -9 7 -21 4 -21 -6 -21 -5 -14 168 4 96 10 212 14 259 l6 85 55 3 c30 2 59 8 65 13 10 10 -21 10 -95 0z"/>
           <motion.path
        {...mainPathVariant}
        animate="visible"
        initial="hidden"
        id="Path_7"
        data-name="Path 7"
        fill={shapeColor}
        {...shapeVariations}
        stroke={pathColor}
        stroke-miterlimit="10"
        stroke-width="1"d="M2360 1656 c0 -4 15 -29 34 -56 40 -58 73 -140 88 -220 6 -30 15 -60 19 -66 12 -15 87 -2 162 27 42 16 61 19 69 11 25 -25 -88 -83 -229 -118 -7 -2 -13 -13 -13 -24 0 -45 -33 -179 -62 -247 -111 -268 -415 -495 -747 -559 -82 -16 -101 -24 -54 -24 98 0 343 93 463 175 30 21 60 38 67 38 7 0 10 4 8 8 -6 8 67 65 78 61 5 -1 6 1 3 6 -7 12 78 94 89 85 4 -5 5 -3 2 4 -4 6 9 35 29 65 58 84 100 185 124 293 11 54 22 100 23 100 1 1 38 14 82 29 131 45 183 91 142 124 -9 8 -36 3 -100 -19 -122 -42 -128 -40 -144 45 -12 68 -61 186 -90 218 -8 9 -12 22 -7 30 4 7 4 10 -1 6 -4 -4 -14 -3 -22 3 -7 6 -13 9 -13 5z"/>
            <motion.path
       {...mainPathVariant}
       animate="visible"
       initial="hidden"
       id="Path_8"
       data-name="Path 8"
       fill={shapeColor}
              {...shapeVariations}
       stroke={pathColor}
       stroke-miterlimit="10"
       stroke-width="1" d="M2357 1448 c12 -44 23 -98 23 -119 0 -37 -1 -39 -32 -39 -18 0 -40 -5 -48 -10 -21 -14 40 -13 76 0 25 10 26 13 20 63 -7 56 -43 174 -55 181 -4 3 3 -31 16 -76z"/> 
         <motion.path
        {...mainPathVariant}
        animate="visible"
        initial="hidden"
        id="Path_9"
        data-name="Path 9"
        fill={shapeColor}
        {...shapeVariations}
        stroke={pathColor}
        stroke-miterlimit="10"
        stroke-width="1" d="M2053 1251 c-68 -11 -64 -24 5 -17 77 9 127 25 72 24 -19 0 -54 -4 -77 -7z"/> 
       <motion.path
        {...mainPathVariant}
        animate="visible"
        initial="hidden"
        id="Path_10"
        data-name="Path 10"
        fill={shapeColor}
              {...shapeVariations}
        stroke={pathColor}
        stroke-miterlimit="10"
        stroke-width="1" d="M1840 1210 c-12 -8 -11 -10 8 -10 12 0 22 5 22 10 0 13 -11 13 -30 0z"/>
          <motion.path
        {...mainPathVariant}
        animate="visible"
        initial="hidden"
        id="Path_11"
        data-name="Path 11"
        fill={shapeColor}
        {...shapeVariations}
        stroke={pathColor}
        stroke-miterlimit="10"
        stroke-width="1"d="M2302 1213 c-53 -7 -27 -21 29 -15 l51 5 -7 -44 c-23 -148 -83 -269 -202 -405 l-86 -99 73 70 c136 131 209 274 234 458 5 36 4 37 -27 35 -18 0 -47 -3 -65 -5z"/> 
          <motion.path
      {...mainPathVariant}
      animate="visible"
      initial="hidden"
      id="Path_12"
      data-name="Path 12"
      fill={shapeColor}
      {...shapeVariations}
      stroke={pathColor}
      stroke-miterlimit="10"
      stroke-width="1" d="M2063 1178 c-29 -5 -53 -14 -53 -20 0 -6 10 -8 23 -5 12 4 41 9 65 13 23 4 42 10 42 15 0 10 -6 10 -77 -3z"/>
          <motion.path
       {...mainPathVariant}
       animate="visible"
       initial="hidden"
       id="Path_13"
       data-name="Path 13"
       fill={shapeColor}
       {...shapeVariations}
       stroke={pathColor}
       stroke-miterlimit="10"
       stroke-width="1"d="M1825 1130 c-8 -13 25 -13 45 0 12 8 9 10 -12 10 -15 0 -30 -4 -33 -10z"/>
         <motion.path
        {...mainPathVariant}
        animate="visible"
        initial="hidden"
        id="Path_14"
        data-name="Path 14"
        fill={shapeColor}
        {...shapeVariations}
        stroke={pathColor}
        stroke-miterlimit="10"
        stroke-width="1" d="M1642 1098 c-7 -7 -12 -22 -12 -34 0 -50 -56 -58 -78 -11 -14 29 -12 29 -106 5 -56 -14 -36 -22 24 -9 66 14 70 14 70 -4 0 -8 12 -22 26 -31 24 -16 27 -16 52 3 15 11 28 32 30 46 2 15 10 27 17 27 8 0 17 5 20 10 9 14 -29 12 -43 -2z"/> 
        <motion.path
        {...mainPathVariant}
        animate="visible"
        initial="hidden"
        id="Path_15"
        data-name="Path 15"
        fill={shapeColor}
        {...shapeVariations}
        stroke={pathColor}
        stroke-miterlimit="10"
        stroke-width="1"d="M1205 1065 c-303 -104 -453 -273 -376 -423 26 -49 104 -123 169 -160 33 -18 49 -32 40 -35 -7 -3 -4 -5 7 -4 11 1 59 -11 108 -27 48 -15 95 -26 105 -23 10 2 -2 9 -28 16 -268 71 -430 210 -404 346 9 49 58 120 113 161 56 43 181 105 274 135 37 12 67 26 67 30 0 5 -1 9 -2 8 -2 0 -34 -11 -73 -24z"/>
           <motion.path
        {...mainPathVariant}
        animate="visible"
        initial="hidden"
        id="Path_16"
        data-name="Path 16"
        fill={shapeColor}
        {...shapeVariations}
        stroke={pathColor}
        stroke-miterlimit="10"
        stroke-width="1"d="M1210 986 c-152 -64 -252 -133 -286 -197 -35 -68 6 -162 98 -225 60 -41 193 -96 221 -92 14 2 -3 11 -48 26 -87 29 -171 74 -167 91 1 7 -2 10 -8 6 -14 -9 -37 11 -66 57 -25 39 -31 89 -15 131 22 56 127 128 274 187 31 12 60 26 63 31 8 14 -6 10 -66 -15z"/>
           <motion.path
       {...mainPathVariant}
       animate="visible"
       initial="hidden"
       id="Path_17"
       data-name="Path 17"
       fill={shapeColor}
       {...shapeVariations}
       stroke={pathColor}
       stroke-miterlimit="10"
       stroke-width="1" d="M1098 553 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/> 
         <motion.path
        {...mainPathVariant}
        animate="visible"
        initial="hidden"
        id="Path_18"
        data-name="Path 18"
        fill={shapeColor}
        {...shapeVariations}
        stroke={pathColor}
        stroke-miterlimit="10"
        stroke-width="1" d="M1399 449 c-9 -6 4 -9 40 -9 30 0 52 2 50 4 -11 9 -77 13 -90 5z"/> 
      <motion.path
        {...mainPathVariant}
        animate="visible"
        initial="hidden"
        id="Path_19"
        data-name="Path 19"
        fill={shapeColor}
        {...shapeVariations}
        stroke={pathColor}
        stroke-miterlimit="10"
        stroke-width="1"d="M1413 373 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z"/> 
  </g>
</svg>

<motion.div variants={textVariants} initial="hidden" animate="visible">
        <Text>
          Welcome to my portfolio
        </Text>
      </motion.div>
    </Container>
  );
};

export default Loader;
