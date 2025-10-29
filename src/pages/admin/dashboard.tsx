import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";
import Layout from "@/components/layout";
import { isAuthenticated, logout, getAuthState } from "../../utils/auth";

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  total_item_price: number;
  type?: string;
  capacity?: string;
  wattage?: string;
  battery_type?: string;
}

interface Order {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  location: string;
  total_price: number;
  status: string;
  created_at: string;
  items: OrderItem[];
  order_summary: {
    item_count: number;
    total_quantity: number;
  };
}

const ORDER_STATUSES = ["successful", "processing", "failed"];

const AdminDashboard = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [updatingStatus, setUpdatingStatus] = useState<number | null>(null);
  const [deletingOrder, setDeletingOrder] = useState<number | null>(null);

  useEffect(() => {
    // Check authentication
    if (!isAuthenticated()) {
      navigate("/admin/login");
      return;
    }

    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://3tqny22gvd.execute-api.us-east-1.amazonaws.com/production/api/getOrders"
        // "http://localhost:3000/dev/api/getOrders"
        // "https://antonaxel-server.onrender.com/api/getOrders"
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: Failed to fetch orders`);
      }

      const data = await response.json();
      //   console.log(data);
      setOrders(data?.data);
    } catch (err) {
      console.error("Error fetching orders:", err);
      setError("Failed to load orders. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId: number, newStatus: string) => {
    try {
      setUpdatingStatus(orderId);

      const response = await fetch(
        `https://ctcmoq233d.execute-api.us-east-1.amazonaws.com/production/api/updateOrder/${orderId}`,
        // `http://localhost:3000/dev/api/updateOrder/${orderId}`,
        // `https://antonaxel-server.onrender.com/api/updateOrder/${orderId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: Failed to update order`);
      }

      // Update local state
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? { ...order, status: newStatus } : order
        )
      );

      // Show success message
      setError("");
    } catch (err) {
      console.error("Error updating order status:", err);
      setError("Failed to update order status. Please try again.");
    } finally {
      setUpdatingStatus(null);
    }
  };

  const deleteOrder = async (orderId: number) => {
    if (
      !confirm(
        "Are you sure you want to delete this order? This action cannot be undone."
      )
    ) {
      return;
    }

    try {
      setDeletingOrder(orderId);

      const response = await fetch(
        // `http://localhost:5000/api/deleteOrder/${orderId}`,
        ` https://ctcmoq233d.execute-api.us-east-1.amazonaws.com/production/api/deleteOrder/${orderId}`,
        //  `https://antonaxel-server.onrender.com/api/deleteOrder/${orderId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: Failed to delete order`);
      }

      // Remove from local state
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order.id !== orderId)
      );

      // Close modal if this order was selected
      if (selectedOrder?.id === orderId) {
        setSelectedOrder(null);
      }

      setError("");
    } catch (err) {
      console.error("Error deleting order:", err);
      setError("Failed to delete order. Please try again.");
    } finally {
      setDeletingOrder(null);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const openOrderDetails = (order: Order) => {
    setSelectedOrder(order);
    (
      document.getElementById("order_details_modal") as HTMLDialogElement
    )?.showModal();
  };

  const getStatusBadgeClass = (status: string) => {
    const statusClasses = {
      processing: "badge-primary",
      successful: "badge-success",
      failed: "badge-error",
    };
    return (
      statusClasses[status as keyof typeof statusClasses] || "badge-neutral"
    );
  };

  const authState = getAuthState();

  if (loading) {
    return (
      <Layout pageTitle="Admin Dashboard">
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </Layout>
    );
  }

  //   console.log(orders);

  return (
    <Layout pageTitle="Admin Dashboard">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-600">Welcome back, {authState?.username}</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={fetchOrders}
              className="btn btn-outline"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Refresh"
              )}
            </button>
            <button onClick={handleLogout} className="btn btn-error">
              Logout
            </button>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="alert alert-error mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
          </div>
        )}

        {/* Stats */}
        <div className="stats shadow mb-8 w-full">
          <div className="stat">
            <div className="stat-title">Total Orders</div>
            <div className="stat-value">{orders.length}</div>
          </div>
          <div className="stat">
            <div className="stat-title">Processing Orders</div>
            <div className="stat-value text-warning">
              {orders.filter((order) => order.status === "processing").length}
            </div>
          </div>
          <div className="stat">
            <div className="stat-title">Successful Orders</div>
            <div className="stat-value text-success">
              {orders.filter((order) => order.status === "successful").length}
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title mb-4">Orders Management</h2>

            {orders.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">No orders found.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Items</th>
                      <th>Total</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td className="font-mono">#{order.id}</td>
                        <td>
                          <div>
                            <div className="font-bold">{order.name}</div>
                            <div className="text-sm opacity-50">
                              {order.email}
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-outline">
                            {order.order_summary?.item_count ||
                              order.items?.length ||
                              0}
                          </span>
                        </td>
                        <td className="font-semibold">
                          ₦{Number(order.total_price).toLocaleString()}
                        </td>
                        <td>
                          <select
                            className={`select select-sm w-24 ${getStatusBadgeClass(
                              order.status
                            )}`}
                            value={order.status}
                            onChange={(e) =>
                              updateOrderStatus(order.id, e.target.value)
                            }
                            disabled={updatingStatus === order.id}
                          >
                            {ORDER_STATUSES.map((status) => (
                              <option key={status} value={status}>
                                {status.charAt(0).toUpperCase() +
                                  status.slice(1)}
                              </option>
                            ))}
                          </select>
                          {updatingStatus === order.id && (
                            <span className="loading loading-spinner loading-xs ml-2"></span>
                          )}
                        </td>
                        <td>
                          {order.created_at
                            ? new Date(order.created_at).toLocaleDateString()
                            : "N/A"}
                        </td>
                        <td>
                          <div className="flex gap-2">
                            <button
                              className="btn btn-sm btn-info"
                              onClick={() => openOrderDetails(order)}
                            >
                              View
                            </button>
                            <button
                              className="btn btn-sm btn-error"
                              onClick={() => deleteOrder(order.id)}
                              disabled={deletingOrder === order.id}
                            >
                              {deletingOrder === order.id ? (
                                <span className="loading loading-spinner loading-xs"></span>
                              ) : (
                                "Delete"
                              )}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Order Details Modal */}
        <dialog id="order_details_modal" className="modal">
          <div className="modal-box max-w-4xl">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>

            {selectedOrder && (
              <div>
                <h3 className="font-bold text-lg mb-4">
                  Order Details - #{selectedOrder.id}
                </h3>

                {/* Customer Information */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="card bg-base-200">
                    <div className="card-body">
                      <h4 className="card-title text-base">
                        Customer Information
                      </h4>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Name:</strong> {selectedOrder.name}
                        </p>
                        <p>
                          <strong>Email:</strong> {selectedOrder.email}
                        </p>
                        <p>
                          <strong>Phone:</strong> {selectedOrder.phone}
                        </p>
                        <p>
                          <strong>Location:</strong> {selectedOrder.location}
                        </p>
                        <p>
                          <strong>Address:</strong> {selectedOrder.address}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card bg-base-200">
                    <div className="card-body">
                      <h4 className="card-title text-base">Order Summary</h4>
                      <div className="space-y-2 text-sm">
                        <p>
                          <strong>Status:</strong>
                          <span
                            className={`badge ${getStatusBadgeClass(
                              selectedOrder.status
                            )} ml-2`}
                          >
                            {selectedOrder.status}
                          </span>
                        </p>
                        <p>
                          <strong>Total:</strong> ₦
                          {Number(selectedOrder.total_price).toLocaleString()}
                        </p>
                        <p>
                          <strong>Items:</strong>{" "}
                          {selectedOrder.order_summary?.item_count ||
                            selectedOrder.items?.length ||
                            0}
                        </p>
                        <p>
                          <strong>Date:</strong>{" "}
                          {selectedOrder.created_at
                            ? new Date(
                                selectedOrder.created_at
                              ).toLocaleString()
                            : "N/A"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="card bg-base-200">
                  <div className="card-body">
                    <h4 className="card-title text-base mb-4">Order Items</h4>
                    {selectedOrder.items && selectedOrder.items.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="table table-sm">
                          <thead>
                            <tr>
                              <th>Item</th>
                              <th>Type</th>
                              <th>Specifications</th>
                              <th>Quantity</th>
                              <th>Unit Price</th>
                              <th>Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            {selectedOrder.items.map((item, index) => (
                              <tr key={index}>
                                <td className="font-medium">{item.name}</td>
                                <td>{item.type || "N/A"}</td>
                                <td>
                                  <div className="text-xs">
                                    {item.capacity && (
                                      <div>Capacity: {item.capacity}</div>
                                    )}
                                    {item.wattage && (
                                      <div>Wattage: {item.wattage}</div>
                                    )}
                                    {item.battery_type && (
                                      <div>Battery: {item.battery_type}</div>
                                    )}
                                  </div>
                                </td>
                                <td>{item.quantity}</td>
                                <td>₦{Number(item.price).toLocaleString()}</td>
                                <td className="font-semibold">
                                  ₦
                                  {Number(
                                    item.total_item_price ||
                                      item.price * item.quantity
                                  ).toLocaleString()}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p className="text-gray-500">
                        No items found for this order.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </dialog>
      </div>
    </Layout>
  );
};

export default AdminDashboard;

export const Head = () => (
  <>
    <title>Admin Dashboard | AntonAxel Solar Management</title>
    <meta
      name="description"
      content="AntonAxel admin dashboard for managing solar product orders, customer information, and order status updates. Secure administrative access."
    />
    <meta name="robots" content="noindex, nofollow" />
    <meta name="author" content="AntonAxel Nigeria Company Limited" />
    <link rel="canonical" href="https://antonaxel.com" />
  </>
);
