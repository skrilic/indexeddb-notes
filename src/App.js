import AppRoutes from './components/AppRoutes';
import { DbContextProvider } from './DbContext';

function App() {
  return (
    <div className="text-inherit flex justify-center">
      <DbContextProvider>
        <AppRoutes />
      </DbContextProvider>
    </div>
  );
}

export default App;
