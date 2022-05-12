import React, { useState, useEffect } from "react";
import { AppContainer } from "./style";

function App() {
  const [Data, setData] = useState();

  useEffect(() => {
    fetch("http://staging-api.dahmakan.com/test/orders")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const event = new Date();

  return (
    <AppContainer>
      <div className="data__table">
        <div className="data__table_column ">
          <div className="data__table_column__row title">Status</div>
          <div className="data__table_column__row title">Date</div>
          <div className="data__table_column__row title">Time</div>
          <div className="data__table_column__row title">Order Number</div>
          <div className="data__table_column__row title">Total</div>
        </div>
        {Data &&
          React.Children.toArray(
            Data.orders.map((data) => (
              <div className="data__table_column">
                <div
                  className={`data__table_column__row ${
                    data.arrives_at_utc === "" ||
                    data.arrives_at_utc === null ||
                    data.arrives_at_utc === undefined
                      ? "canceled"
                      : event === new Date(data.arrives_at_utc)
                      ? "now"
                      : event > new Date(data.arrives_at_utc)
                      ? "delivered"
                      : event < new Date(data.arrives_at_utc)
                      ? "pending"
                      : "failed"
                  }`}
                >
                  {data.arrives_at_utc === "" ||
                  data.arrives_at_utc === null ||
                  data.arrives_at_utc === undefined
                    ? "Canceled"
                    : event === new Date(data.arrives_at_utc)
                    ? "-"
                    : event > new Date(data.arrives_at_utc)
                    ? "Delivered"
                    : event < new Date(data.arrives_at_utc)
                    ? "Pending"
                    : "failed"}
                </div>
                <div className="data__table_column__row date">
                  {data.arrives_at_utc === "" ||
                  data.arrives_at_utc === null ||
                  data.arrives_at_utc === undefined
                    ? "-"
                    : `${new Date(data.arrives_at_utc).toLocaleDateString(
                        "en-EN",
                        { weekday: "long" }
                      )}, ${new Date(data.arrives_at_utc).toLocaleDateString(
                        "en-EN"
                      )}`}
                </div>
                <div className="data__table_column__row time">
                  {data.arrives_at_utc === "" ||
                  data.arrives_at_utc === null ||
                  data.arrives_at_utc === undefined
                    ? "-"
                    : new Date(data.arrives_at_utc).toLocaleTimeString(
                        "en-US",
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                        }
                      )}
                </div>
                <div className="data__table_column__row id">
                  #{data.order_id}
                </div>
                <div className="data__table_column__row">
                  RM {data.total_paid}
                </div>
              </div>
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
