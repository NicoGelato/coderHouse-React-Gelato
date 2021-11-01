import AppRoutes from "./routes/AppRoutes";

import { ProviderItemContext } from "./context/ItemContext";

const App = () => {
  return (
    <ProviderItemContext>
      <AppRoutes />
    </ProviderItemContext>
  );
};

export default App;
