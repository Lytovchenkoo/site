const cardData = {
  static: {
    title: 'Quis hendrerit dolor magna',
    subtitle: 'Pulvinar / Metus',
    price: '29.59',
    features: [
      'Ultricies integer',
      'Aenean euismod elementum',
      'Mattis pellentesque',
      'Pellentesque habitant',
      'Tellus elementum sagittis',
      'Vitae proin sagittis',
      'Aliquam nulla facilisi',
      'Ipsum nunc aliquet',
      'Vulputate dignissim',
      'Lectus proin nibh',
      'Quam pellentesque nec',
      'Velit ut tortor pretium'
    ]
  },
  standard: {
    title: 'Standard Plan',
    subtitle: 'Placerat / Ipsum',
    price: '49.99',
    features: [
      'Full Support',
      'Custom Elements',
      'Priority Access',
      'Responsive Design',
      'Basic SEO Package',
      'CMS Integration',
      'More features here'
    ]
  },
  premium: {
    title: 'Premium Experience',
    subtitle: 'Dignissim / Nulla',
    price: '79.99',
    features: [
      'Everything in Standard',
      'Unlimited Revisions',
      'Advanced Animations',
      'Full SEO Suite',
      'E-commerce Ready',
      'Analytics Setup',
      'Lifetime Updates'
    ]
  }
};

function renderCard(planKey) {
  const plan = cardData[planKey];
  const card = document.getElementById('pricing-card');
  card.innerHTML = `
    <h3 class="pricing__card-title">${plan.title}</h3>
    <p class="pricing__card-subtitle">${plan.subtitle}</p>
    <div class="pricing__price">$${plan.price}</div>
    <ul class="pricing__features-list">
      ${plan.features.map(f => `<li class="pricing__feature-item">✔ ${f}</li>`).join('')}
    </ul>
    <button class="pricing__order-button button">Order Now →</button>
    <p class="pricing__note">Unlimited Revision</p>
  `;
}

document.querySelectorAll('.pricing__tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.pricing__tab').forEach(t => t.classList.remove('pricing__tab--active'));
    tab.classList.add('pricing__tab--active');
    const selectedPlan = tab.dataset.plan;
    renderCard(selectedPlan);
  });
});

renderCard('static');
