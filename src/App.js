import React, { useState, useEffect } from "react";
import { BackendCall } from "./BackendCall";
import TableColumn from "./Components/TableColumn";
import TableHeader from "./Components/TableHeader";
import { AppContainer } from "./style";

function App() {
  const [Data, setData] = useState();

  useEffect(() => {
    BackendCall(setData);
  }, []);

  const event = new Date();

  return (
    <AppContainer>
      <div className="data__table">
        <TableHeader />
        {Data &&
          React.Children.toArray(
            Data.map((data, index) => (
              <TableColumn
                data={data}
                index={index}
                event={event}
                DataObject={Data}
                setDataObject={setData}
              />
            ))
          )}
      </div>
      {!Data && (
        <div className="error">
          <p>
            Can't load the data right now. Please give it some time or reload
            the tab. Thanks for your patience.
          </p>
        </div>
      )}
    </AppContainer>
  );
}

export default App;
