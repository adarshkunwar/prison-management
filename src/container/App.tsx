import Layout from '@src/HOC/Layout/Layout';
import AddBlock from '@src/Pages/Block/AddBlock';
import ViewBlock from '@src/Pages/Block/ViewBlock';
import AddCell from '@src/Pages/Cell/AddCell';
import ViewCell from '@src/Pages/Cell/ViewCell';
import Dashboard from '@src/Pages/Dashboard';
import AddIncidents from '@src/Pages/Incident/AddIncidents';
import ViewIncidents from '@src/Pages/Incident/ViewIncidents';
import Login from '@src/Pages/Login';
import AdddMedicalReports from '@src/Pages/MedicalRecords/AddMedicalRecords';
import ViewMedicalReports from '@src/Pages/MedicalRecords/VIewMedicalRecords';
import AddPrison from '@src/Pages/Prison/AddPrison';
import ViewPrison from '@src/Pages/Prison/ViewPrison';
import AddPrisoners from '@src/Pages/Prisoners/AddPrisoners';
import ViewPrisoners from '@src/Pages/Prisoners/ViewPrisoners';
import AddStaff from '@src/Pages/Staff/AddStaff';
import ViewStaff from '@src/Pages/Staff/ViewStaff';
import AddVisitor from '@src/Pages/Visitors/AddVisitors';
import ViewVisitor from '@src/Pages/Visitors/ViewVisitors';

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
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
