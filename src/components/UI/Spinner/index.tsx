import { CSSProperties, useState } from 'react';
import ClockLoader from 'react-spinners/ClockLoader';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

function App() {
  return (
    <div className="sweet-loading">
      <ClockLoader
        color={'#ff0000'}
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default App;
