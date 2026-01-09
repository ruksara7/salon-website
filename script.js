/* =========================
   DATA CONFIGURATION
========================= */

const services = [
  { id: 1, name: 'Hair Cutting', price: '₹500', icon: '✂️', desc: 'Professional haircut tailored to your style' },
  { id: 2, name: 'Hair Coloring', price: '₹1500', icon: '🎨', desc: 'Premium color treatment for vibrant look' },
  { id: 3, name: 'Hair Treatment', price: '₹800', icon: '💆', desc: 'Nourishing treatments for healthy hair' },
  { id: 4, name: 'Makeup', price: '₹1000', icon: '💄', desc: 'Professional makeup for all occasions' },
  { id: 5, name: 'Threading', price: '₹200', icon: '🪡', desc: 'Precise threading for perfect brows' },
  { id: 6, name: 'Facial', price: '₹600', icon: '✨', desc: 'Rejuvenating facials for glowing skin' }
];

const stylists = [
  { id: 1, name: 'Senior Hair Stylist', specialty: 'Color & Cuts', bio: 'Experienced professional stylist', rating: 4.9, reviews: 120, image: '💇‍♀️' },
  { id: 2, name: 'Makeup Specialist', specialty: 'Bridal & Party', bio: 'Certified professional makeup artist', rating: 4.8, reviews: 98, image: '💄' },
  { id: 3, name: 'Styling Expert', specialty: 'Modern Styles', bio: 'Trendy cuts & styles expert', rating: 4.7, reviews: 110, image: '💁‍♀️' },
  { id: 4, name: 'Treatment Professional', specialty: 'Hair & Scalp Care', bio: 'Specialist in treatments & spa', rating: 4.9, reviews: 105, image: '💆‍♀️' }
];

const testimonials = [
  { name: 'Happy Client', rating: 5, text: 'Amazing service and friendly staff.' },
  { name: 'Regular Customer', rating: 4, text: 'Loved the ambiance and professionalism.' },
  { name: 'Salon Visitor', rating: 5, text: 'Best salon experience I’ve had.' }
];

const gallery = [
  { src: 'salon1.png', title: 'Salon Interior' },
  { src: 'salon2.png', title: 'Hair Styling' },
  { src: 'salon3.png', title: 'Makeup' },
  { src: 'salon4.png', title: 'Nail Art' },
  { src: 'salon5.png', title: 'Skin Care' },
  { src: 'salon6.png', title: 'Spa Therapy' }
];

/* =========================
   RENDER FUNCTIONS
========================= */

function renderServices() {
  const grid = document.getElementById('servicesGrid');
  grid.innerHTML = services.map(s => `
    <div class="service-card">
      <div class="service-icon">${s.icon}</div>
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
      <div class="service-price">${s.price}</div>
    </div>
  `).join('');

  const serviceOptions = services.map(s =>
    `<option value="${s.name}">${s.name}</option>`
  ).join('');

  document.getElementById('serviceSelect').innerHTML =
    '<option value="">Select Service</option>' + serviceOptions;

  document.getElementById('quickService').innerHTML =
    '<option value="">Select Service</option>' + serviceOptions;
}

function renderStylists() {
  const grid = document.getElementById('stylistsGrid');
  grid.innerHTML = stylists.map(s => `
    <div class="stylist-card">
      <div class="stylist-image">${s.image}</div>
      <div class="stylist-info">
        <div class="stylist-name">${s.name}</div>
        <div class="stylist-specialty">${s.specialty}</div>
        <div class="stylist-bio">${s.bio}</div>
        <div class="stylist-rating">
          ⭐ ${s.rating} (${s.reviews} reviews)
        </div>
        <button class="btn btn-primary" onclick="openBookingModal()">Book</button>
      </div>
    </div>
  `).join('');

  document.getElementById('stylistSelect').innerHTML =
    '<option value="">Any Stylist</option>' +
    stylists.map(s => `<option>${s.name}</option>`).join('');
}

function renderTestimonials() {
  const grid = document.getElementById('testimonialsGrid');
  grid.innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <div class="rating-stars">${'★'.repeat(t.rating)}</div>
      <p class="testimonial-text">"${t.text}"</p>
      <strong>— ${t.name}</strong>
    </div>
  `).join('');
}

function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = gallery.map(img => `
    <div class="gallery-item">
      <img src="${img.src}" alt="${img.title}">
    </div>
  `).join('');
}

/* =========================
   BOOKING & MODAL
========================= */

function openBookingModal() {
  document.getElementById('bookingModal').classList.add('active');
}

function closeBookingModal() {
  document.getElementById('bookingModal').classList.remove('active');
}

function submitBooking(e) {
  e.preventDefault();

  const data = {
    name: clientName.value,
    phone: clientPhone.value,
    service: serviceSelect.value,
    stylist: stylistSelect.value,
    date: bookingDate.value,
    time: bookingTime.value
  };

  sendToWhatsApp(data);
  e.target.reset();
}

function submitQuickBooking(e) {
  e.preventDefault();

  const data = {
    name: quickName.value,
    phone: quickPhone.value,
    service: quickService.value,
    date: quickDate.value
  };

  sendToWhatsApp(data);
  closeBookingModal();
}

function sendToWhatsApp(data) {
  const number = '919999999999'; // CHANGE TO REAL NUMBER

  const message = `
Booking Request
Name: ${data.name}
Phone: ${data.phone}
Service: ${data.service}
Stylist: ${data.stylist || 'Any'}
Date: ${data.date}
Time: ${data.time || 'Flexible'}
  `;

  window.open(
    `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
    '_blank'
  );
}

function contactViaWhatsApp() {
  window.open(
    'https://wa.me/919999999999?text=Hello! I’d like to know about your services.',
    '_blank'
  );
}

/* =========================
   INIT
========================= */

document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderStylists();
  renderTestimonials();
  renderGallery();

  const today = new Date().toISOString().split('T')[0];
  document.getElementById('bookingDate').min = today;
  document.getElementById('quickDate').min = today;

  document.getElementById('bookingModal').addEventListener('click', e => {
    if (e.target.id === 'bookingModal') closeBookingModal();
  });
});
