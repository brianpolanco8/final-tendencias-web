// import * as medicines from "assets/images";

function importAll(r) {
  return r.keys().map(r);
}
export const images = importAll(
  require.context("assets/images", false, /\.(png|jpe?g|svg|webp)$/)
);

export const selectRandomImage = () => {
  return images[Math.floor(Math.random() * images.length)];
};
