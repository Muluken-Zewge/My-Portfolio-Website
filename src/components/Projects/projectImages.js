// Utility to dynamically load images
const loadImages = (folder, totalImages) =>
    Array.from({ length: totalImages }, (_, i) =>
      require(`../../Assets/Projects/${folder}/${folder}${i + 1}.png`)
    );
  
  // Dynamically generate image arrays for each project
  const collabHubImages = loadImages("collabHub", 12);
  const EMMSImages = loadImages("EMMS", 12);
  const busTrackingAppImages = loadImages("busTrackingApp", 8);
  const quizAppImages = loadImages("quizApp", 8);
  const blogAppImages = loadImages("blogApp", 5);
  const weatherAppImages = loadImages("weatherApp", 4);
  
  // Export all image sets as an object
  export const projectImages = {
    collabHub: collabHubImages,
    EMMS: EMMSImages,
    busTrackingApp: busTrackingAppImages,
    quizApp: quizAppImages,
    blogApp: blogAppImages,
    weatherApp: weatherAppImages,
  };
  