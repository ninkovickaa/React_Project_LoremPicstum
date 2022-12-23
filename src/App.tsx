import { BrowserRouter as Router } from "react-router-dom";
import React, { useEffect, useCallback, createContext, useState } from "react";
import Header from "./components/Header";
import Routes from "./components/Routes";
import Footer, { Student, IntershipDate } from "./components/Footer";
import "./App.scss";

interface Props {
  darkMode: boolean;
  callBack: (change: boolean) => void;
}

const student: Student = {
  firstName: "Tijana",
  lastName: "Ninkovic",
};

const intershipDate: IntershipDate = {
  dateStart: "13.09.2021",
  dateEnd: "08.10.2021",
};

const prefLight =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: light)").matches;

export const defaultValue = {
  darkMode: prefLight ? false : true,
  callBack: () => {},
};

export const darkLightContext = createContext<Props>(defaultValue);

const getInitialState = () => {
  const localTheme = localStorage.getItem("darkMode");
  if (localTheme) {
    return localTheme === "true" ? true : false;
  } else {
    return defaultValue.darkMode;
  }
};
export const useMode = (): Props => {
  const [darkMode, setDarkMode] = useState(getInitialState());

  useEffect(() => {
    localStorage.setItem("darkMode", "" + darkMode);
  }, [darkMode]);

  const callBack = useCallback((change: boolean): void => {
    setDarkMode(change);
  }, []);

  return {
    darkMode,
    callBack,
  };
};

const VLAUES_FROM_LOCAL_PICTURES = localStorage.getItem("likedPictures");

if (!VLAUES_FROM_LOCAL_PICTURES) {
  localStorage.setItem("likedPictures", JSON.stringify([]));
}

export const likedPicturesContext = createContext([
  JSON.parse(localStorage.getItem("likedPictures")!),
  () => {},
]);

function App() {
  const [likedPicturesState, setLikedPicturesState] = useState<string[]>(
    JSON.parse(localStorage.getItem("likedPictures")!)
  );

  useEffect(() => {
    localStorage.setItem("likedPictures", JSON.stringify(likedPicturesState));
  }, [likedPicturesState]);

  return (
    <Router>
      <darkLightContext.Provider value={useMode()}>
        <likedPicturesContext.Provider
          value={[likedPicturesState, setLikedPicturesState]}
        >
          <div className="App">
            <Header />

            <Routes />

            <Footer student={student} intershipDate={intershipDate} />
          </div>
        </likedPicturesContext.Provider>
      </darkLightContext.Provider>
    </Router>
  );
}

export default App;
