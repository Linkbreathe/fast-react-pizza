import React from 'react';
import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';
export default function UpdateOrder() {
  const fecther = useFetcher();
  return (
    <fecther.Form method="PATCH" className="text-right">
      <Button type="primary">MAKE PRIORITY</Button>
    </fecther.Form>
  );
}
export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null; // No data to return
}
