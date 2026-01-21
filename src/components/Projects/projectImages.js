// Dynamically load images from a folder
const loadImages = (folder, totalImages) => {
  return Array.from({ length: totalImages }, (_, i) =>
    new URL(`../../Assets/Projects/${folder}/${folder}${i + 1}.png`, import.meta.url).href
  );
};

// Generate arrays
const collabHubImages = loadImages("collabHub", 12);
const EMMSImages = loadImages("EMMS", 12);
const busTrackingAppImages = loadImages("busTrackingApp", 8);
const quizAppImages = loadImages("quizApp", 8);
const blogAppImages = loadImages("blogApp", 5);
const weatherAppImages = loadImages("weatherApp", 4);

// Export
export const projectImages = {
  collabHub: collabHubImages,
  EMMS: EMMSImages,
  busTrackingApp: busTrackingAppImages,
  quizApp: quizAppImages,
  blogApp: blogAppImages,
  weatherApp: weatherAppImages,
};
