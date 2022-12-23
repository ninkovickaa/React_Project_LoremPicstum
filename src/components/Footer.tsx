import { useContext } from "react";
import "../styles/footer.scss";
import { darkLightContext } from "../App";

export interface Student {
  firstName: string;
  lastName: string;
}
export interface IntershipDate {
  dateStart: string;
  dateEnd: string;
}

interface Props {
  student: Student;
  intershipDate: IntershipDate;
}

const Footer: React.FC<Props> = ({ student, intershipDate }) => {
  const darkMode = useContext(darkLightContext);

  return (
    <div className={`footer ${darkMode.darkMode ? "darkTheme" : ""}`}>
      <p>
        {intershipDate.dateStart}-{intershipDate.dateEnd}
      </p>
      <p>
        {student.firstName} {student.lastName}
      </p>
    </div>
  );
};

export default Footer;
