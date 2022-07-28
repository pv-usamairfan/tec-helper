import "./App.css";
import Header from "./Components/Header/Header";
import LandingPage from "./Components/Landing-Page/LandingPage";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import PastAppointments from "./Components/Appointments/Past-Appointments/PastAppointments";
import UpcomingAppointments from "./Components/Appointments/Upcoming-Appointments/UpcomingAppointments";
import BookAppointment from "./Components/Appointments/Book-Appointment/BookAppointment";
import BookAppointmentP1 from "./Components/Appointments/Book-Appointment/p1/BookAppointmentP1";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registration />} />
          <Route path="pastAppointments" element={<PastAppointments />} />
          <Route
            path="upcomingAppointments"
            element={<UpcomingAppointments />}
          />
          <Route path="bookAppointment" element={<BookAppointment />} />
          <Route path="bookAppointment/p1" element={<BookAppointmentP1 />} />
          <Route path="" element={<LandingPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
