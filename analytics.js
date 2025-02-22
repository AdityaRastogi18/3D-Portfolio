import ReactGA from "react-ga4";

const TRACKING_ID = "G-P6RKTTDTZ1"; // Replace with your Google Analytics tracking ID

export const initializeAnalytics = () => {
  ReactGA.initialize(TRACKING_ID);
};

export const logPageView = () => {
  ReactGA.send("pageview");
};

export const logEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};
