import Layout from "../HOC/Layout/Layout";
import AddBlock from "../Pages/Block/AddBlock";
import ViewBlock from "../Pages/Block/ViewBlock";
import AddCell from "../Pages/Cell/AddCell";
import ViewCell from "../Pages/Cell/ViewCell";
import AddIncidents from '../Pages/Incident/AddIncidents';
import ViewIncidents from '../Pages/Incident/ViewIncidents';
import AdddMedicalReports from '../Pages/MedicalRecords/AddMedicalRecords';
import ViewMedicalReports from '../Pages/MedicalRecords/VIewMedicalRecords';
import AddPrison from '../Pages/Prison/AddPrison';
import ViewPrison from '../Pages/Prison/ViewPrison';
import AddPrisoners from '../Pages/Prisoners/AddPrisoners';
import ViewPrisoners from '../Pages/Prisoners/ViewPrisoners';
import AddStaff from '../Pages/Staff/AddStaff';
import ViewStaff from '../Pages/Staff/ViewStaff';
import AddVisitor from '../Pages/Visitors/AddVisitors';
import ViewVisitor from '../Pages/Visitors/ViewVisitors';

import Dashboard from '../Pages/Dashboard';
// import NewPrisoners from "../Pages/Prisoners/NewPrisoners";

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/block" element={<ViewBlock />} />
            <Route path="/new-block" element={<AddBlock />} />
            <Route path="/cell" element={<ViewCell />} />
            <Route path="/new-cell" element={<AddCell />} />
            <Route path="/prisoner" element={<ViewPrisoners />} />
            <Route path="/new-prisoner" element={<AddPrisoners />} />
            <Route path="/incidents" element={<ViewIncidents />} />
            <Route path="/new-incidents" element={<AddIncidents />} />
            <Route path="/medicalReports" element={<ViewMedicalReports />} />
            <Route
              path="/new-medicalReports"
              element={<AdddMedicalReports />}
            />
            <Route path="/prison" element={<ViewPrison />} />
            <Route path="/new-prison" element={<AddPrison />} />
            <Route path="/staff" element={<ViewStaff />} />
            <Route path="/new-staff" element={<AddStaff />} />
            <Route path="/visitors" element={<ViewVisitor />} />
            <Route path="/new-visitors" element={<AddVisitor />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
