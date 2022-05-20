export function BackendCall(setResponse) {
  fetch("http://staging-api.dahmakan.com/test/orders")
    .then((res) => res.json())
    .then((data) =>
      setResponse(
        data.orders.sort((a, b) => b.arrives_at_utc - a.arrives_at_utc)
      )
    )
    .catch((err) => console.log(err));
}
