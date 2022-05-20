import React from "react";

export default function TableHeader() {
  return (
    <div className="data__table_column ">
      <div className="data__table_column__row title">Status</div>
      <div className="data__table_column__row title">Date</div>
      <div className="data__table_column__row title">Time</div>
      <div className="data__table_column__row title">Order Number</div>
      <div className="data__table_column__row title">Total</div>
    </div>
  );
}
