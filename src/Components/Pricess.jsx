import React from "react";

const plans = [
  {
    capital: "$5,000",
    price: "$25",
    target: "5% / 6% / 5% / 5%",
    drawdown: "10%",
    dailyDrawdown: "5%",
  },
  {
    capital: "$10,000",
    price: "$25",
    target: "5% / 6% / 5% / 5%",
    drawdown: "10%",
    dailyDrawdown: "5%",
  },
  {
    capital: "$20,000",
    price: "$25",
    target: "5% / 6% / 5% / 5%",
    drawdown: "10%",
    dailyDrawdown: "5%",
  },
  {
    capital: "$40,000",
    price: "$25",
    target: "5% / 6% / 5% / 5%",
    drawdown: "10%",
    dailyDrawdown: "5%",
    highlight: true,
  },
];

const Prices = () => {
  return (
    <section id="categories" className="min-h-screen bg-black text-white py-12 px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">Best prices in prop industry!</h2>
        <p className="text-gray-400">Choose your training program and account size.</p>

        <div className="flex justify-center gap-2 mt-4">
          {["Copper", "Bronze", "Silver", "Gold", "Diamond"].map((tier) => (
            <button
              key={tier}
              className="bg-white text-black text-sm rounded-full px-4 py-1 hover:bg-gray-200"
            >
              {tier}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border rounded-xl p-6 backdrop-blur bg-white/5 text-white shadow-xl transition transform hover:scale-105 ${
              plan.highlight ? "border-green-400 ring-2 ring-green-500" : ""
            }`}
          >
            <h3 className="text-xl font-semibold mb-4">Virtual capital size</h3>
            <p className="text-3xl font-bold mb-4">{plan.capital}</p>

            <button className="bg-white text-black font-medium px-4 py-2 rounded-lg w-full mb-6">
              Buy for {plan.price}
            </button>

            <ul className="text-sm space-y-2">
              <li>Profit target: {plan.target}</li>
              <li>Max drawdown: {plan.drawdown}</li>
              <li>Daily drawdown: {plan.dailyDrawdown}</li>
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full">
          See more details
        </button>
      </div>
    </section>
  );
};

export default Prices;

