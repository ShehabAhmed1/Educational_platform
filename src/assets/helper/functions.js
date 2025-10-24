// toggle theme function
function toggleTheme() {
  const theme = document.documentElement.getAttribute("data-theme");
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    return "light";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    return "dark";
  }
}

//check on phone number
function isPhoneNumber(num) {
  num = num.trim();
  const phoneRegex = /^01[0-9]{9}$/;
  return phoneRegex.test(num);
}

//check on name
function isHumanName(name) {
  name = name.trim();
  const nameRegex =
    /^[\u0621-\u064A\u064B-\u0652]+(?: [\u0621-\u064A\u064B-\u0652]+){2}$/;
  return nameRegex.test(name);
}

/******* animations *****/

function fromLeft({ duration = 0.5, delay = 0 }) {
  return {
    initial: { x: "-100%" },
    animate: { x: "0%", transition: { duration, delay, ease: "easeInOut" } },
    exit: { x: "-100%", transition: { duration, delay, ease: "easeInOut" } },
  };
}
function fromRight({ duration = 0.5, delay = 0 }) {
  return {
    initial: { x: "100%", opacity: 0 },
    animate: {
      x: "0%",
      opacity: 1,
      transition: { duration, delay, ease: "easeInOut" },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration, delay, ease: "easeInOut" },
    },
  };
}
function fromTop({ duration = 0.5, delay = 0 }) {
  return {
    initial: { y: "-70px", opacity: 0, scale: 0.9 },
    animate: {
      y: "0px",
      opacity: 1,
      scale: 1,
      transition: { duration, delay, ease: "easeInOut" },
    },
    exit: {
      y: "-70px",
      opacity: 0,
      scale: 0.9,
      transition: { duration, delay, ease: "easeInOut" },
    },
  };
}
function zoomout({ duration = 0.5, delay = 0 }) {
  return {
    initial: { scale: 0.2, opacity: 0.2 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration, delay, ease: "easeInOut" },
    },
  };
}
function toleft({ duration = 0.5, delay = 0 }) {
  return {
    initial: { x: "100%", opacity: 0 },
    animate: {
      x: "0%",
      opacity: 1,
      transition: { duration, delay, ease: "easeInOut" },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: { duration, delay, ease: "easeInOut" },
    },
  };
}

export {
  toggleTheme,
  fromLeft,
  fromRight,
  fromTop,
  zoomout,
  toleft,
  isHumanName,
  isPhoneNumber,
};
