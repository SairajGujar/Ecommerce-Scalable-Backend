import Order from "../models/Order.js";
import axios from 'axios'
import OrderHistory from "../models/OrderHistory.js";


export async function placeOrder(req, res) {
  try {
    const { products } = req.body;

    if (!products || products.length === 0) {
      return res.status(405).json({ error: "Minimum one product required" });
    }

    let totalAmount = 0;
    const productDetails = await Promise.all(
      products.map(async (product) => {
        const response = await axios.get(`http://localhost:3000/products/${product.productId}`, {
          headers: {
            authorization: req.headers['authorization'],
          },
        });
        const fullProduct = response.data;
        return {
          price: fullProduct.price,
          quantity: product.quantity,
        };
      })
    );

    totalAmount = productDetails.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const user = req.user.user; 
    const order = new Order({
      products,
      user: user._id,
      totalAmount,
    });
    await order.save();

    return res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    console.error("Error placing order:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}


export async function trackOrder(req, res) {
  try {
    const {id} = req.params;
    const order = await Order.findOne({_id: id});
    if(!order) return res.status(404).json("order not found");
    return res.status(200).json({
      status: order.status,
    })
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
}


export async function changeOrderStatus(req, res) {
  try {
    const {id} = req.params;
    const {status} = req.body;
    const order = await Order.findOne({_id: id})
    if(!order) return res.status(404).json("order not found");
    order.status = status.toLowerCase();
    if (order.status === "delivered") {
      const orders = await OrderHistory.findOne({ user: order.user });
    
      if (!orders) {
        const newOrderHistory = new OrderHistory({
          user: order.user,
          orders: [order._id],
        });
        await newOrderHistory.save();
      } else {
        if (!orders.orders.includes(order._id)) {
          orders.orders.push(order._id);
          await orders.save();
        }
      }
    }
    
    return res.status(200).json({
      message: "Order status updated successfully",
      order
    })
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
}

export async function orderHistory(req, res){
  try {
    const user = req.user.user;
    const orders = await OrderHistory.findOne({user:user._id});
    return res.status(200).json(orders);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
}
