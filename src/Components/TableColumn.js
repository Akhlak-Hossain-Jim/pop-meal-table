import React from "react";

export default function TableColumn({
  data,
  index,
  event,
  DataObject,
  setDataObject,
}) {
  const handleIncrement = () => {
    console.log(`incrementing ${index}`);
  };
  return (
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
          : `${new Date(data.arrives_at_utc).toLocaleDateString("en-EN", {
              weekday: "long",
            })}, ${new Date(data.arrives_at_utc).toLocaleDateString("en-EN")}`}
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <div className="data__table_column__row time">
        {data.arrives_at_utc === "" ||
        data.arrives_at_utc === null ||
        data.arrives_at_utc === undefined
          ? "-"
          : new Date(data.arrives_at_utc).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
      </div>
      <div className="data__table_column__row id">#{data.order_id}</div>
      <div className="data__table_column__row">RM {data.total_paid}</div>
    </div>
  );
}
