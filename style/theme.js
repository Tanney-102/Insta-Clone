const size = {
    mobileS: "510px",
    mobileL: "770px",
    tabletS: "1023px",
    tabletM: "1220px",
    tabletL: "1280px",
    laptop: "1460px",
    desktop: "1700px",
};

const theme = {
    borderColorLight: "#dfdfdf",
    borderColor: "#cfcfcf",
    borderColorDark: "#bfbfbf",
    basicBackColor: "#f8f8f8",
    backColorLight: "#fafafa",
    btnColor: "#0095f6",
    unactivatedBtn:"rgba(0, 149, 250, 0.4)",
    fontGrayLight: "#9f9f9f",
    fontGray: "#8f8f8f",
    fontDarkGray: "#383838",
    fontSkyBlue: "#4ab1f7",
    heartRed: "f90a0a",
    mobileS: `(max-width: ${size.mobileS})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tabletS: `(max-width: ${size.tabletS})`,
    tabletM: `(max-width: ${size.tabletM})`,
    tabletL: `(max-width: ${size.tabletL})`,
    laptop: `(max-width: ${size.labtop})`,
    desktop: `(max-width: ${size.desktop})`,    
    size,
};

export default theme;