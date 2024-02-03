const pricingPlans = document.querySelectorAll('.pricing-plan');

pricingPlans.forEach(plan => {
  const price = plan.dataset.price;
  const currency = plan.dataset.currency;

  const priceElement = plan.querySelector('button');
  priceElement.innerHTML = `${currency}${price} <i class="fas fa-chevron-right"></i>`;
});