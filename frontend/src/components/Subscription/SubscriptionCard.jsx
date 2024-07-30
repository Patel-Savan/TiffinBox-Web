import React from "react";

function SubscriptionCard({ subscription }) {
  return (
    <section className={`shadow card md:card-side bg-base-100`}>
      <figure className="h-60">
        <img
          src={subscription.mealImage}
          alt="Album"
          className="w-full h-full object-fit md:w-80"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-3xl card-title">{subscription.companyName}</h2>
        <p className="flex flex-col gap-2">
          {/* <span className="text-2xl">${order.amount}</span> */}
          <span className="text-gray-500 text-md">
            {subscription.startDate}
          </span>
          <span className="text-gray-500 text-md">{subscription.endDate}</span>
        </p>
      </div>
    </section>
  );
}

export default SubscriptionCard;
