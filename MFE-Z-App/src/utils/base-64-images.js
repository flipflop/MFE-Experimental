export class Base64Images {
  static getLargeLogo() {
    return `data:image/png;base64,`;
  }
  static getSmallLogo() {
    return `data:image/png;base64,`;
  }
  static getLogOnWhiteBg() { return `data:image/png;base64,`;}

  static getLogoOnBlackBg() {
    return `data:image/png;base64,`;
  }
}

// usage
// use: https://www.base64-image.de/
// import { Base64Images } from "../utils/base-64-images"; 
// <img src={Base64Images.getLogo()} />