import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App.jsx';
import ItemDetails from "./ItemDetails";
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.eu-north-1.amazonaws.com/eu-north-1_zr5qt0n25",
  client_id: "2v7u7gb6pkleh7o4qvfjf5m9h5",
  redirect_uri: "https://duxey9dk226dr.cloudfront.net",
  response_type: "code",
  scope: "email openid phone",
};

const root = createRoot(document.getElementById('root'));

root.render(
  <AuthProvider {...cognitoAuthConfig}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details/:id" element={<ItemDetails />} />
      </Routes>
    </Router>
  </AuthProvider>
);
