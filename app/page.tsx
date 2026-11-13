import React from 'react';
import { Metadata } from 'next';
import { Star, Phone, MessageCircle, MapPin, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Remhala Guesthouse | Authentic Mountain Retreat in the Chouf',
  description: 'Experience the charm of Remhala Guesthouse in the heart of the Chouf mountains. A rustic escape featuring authentic Lebanese hospitality.',
  keywords: 'Remhala Guesthouse, Guesthouse in Chouf, Boutique hotel Lebanon, Mountain retreat Lebanon, Authentic Lebanese guesthouse',
};

const reviews = [
  { name: "Charbel Rehban", stars: 5, text: "This place exudes a unique and captivating charm with its intricately designed interior featuring natural elements like wood and stone. The ambiance is both rustic and cozy, creating a welcoming atmosphere for guests. The attention to detail in decor, from the eclectic wall hangings to the warm lighting, adds to the overall appeal. The owner makes visitors feel at home. Their passion for the plac" },
  { name: "Dr mohammad", stars: 5, text: "Arrive like a guest and leave as a family member. A great place to stay, extremely friendly owner and beautiful place. The breakfast is really authentic Lebanese food . Just EXCELLENT. I really recommend this place." },
  { name: "Discovery Beyond Borders", stars: 4, text: "A true hidden gem. A collector's museum, guesthouse, that the owner constructed himself in the heart of nature, 20 mins from Alay." },
  { name: "Souad Bou Abboud", stars: 5, text: "We had a great time. The place is wonderful and full of art. I recommend everyone to visit it 😍" },
  { name: "Rgvf Fydrf", stars: 1, text: "The man who work there embarrassed me beside the costumer , he Interfering with my personal affairs , im one of the customers in this hotel but after what happened it will be the last time going to there" },
  { name: "Marwan Wehbeh", stars: 5, text: "Very lovely place and friendly staff" }
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <img 
          src="/images/stock-1.jpg" 
          alt="Rustic stone architecture of Remhala Guesthouse" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Experience the Heart of the Chouf
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light">
            A hidden gem in the mountains of Lebanon, where every guest becomes family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/9613377098" 
              className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <MessageCircle size={22} />
              Book Your Stay
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section id="social-proof" className="bg-secondary py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 text-white">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill={i < 4 ? "currentColor" : "none"} className={i < 4 ? "text-accent" : "text-white/50"} />
            ))}
          </div>
          <p className="text-lg font-medium">4.4 stars from 69 Google reviews</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src="/images/stock-2.jpg" 
                  alt="Interior detail of the guesthouse" 
                  className="rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent p-8 rounded-2xl hidden md:block">
                  <p className="text-white font-serif text-2xl italic">"A true hidden gem"</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8">
                A Collector's Museum in Nature
              </h2>
              <div className="space-y-6 text-ink text-lg leading-relaxed">
                <p>
                  Remhala Guesthouse is a labor of love, constructed with natural stone and wood to create a rustic, cozy atmosphere. 
                </p>
                <p>
                  We invite you to disconnect from the city and enjoy authentic Lebanese breakfast and warm hospitality just 20 minutes from Aley.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="border-l-4 border-secondary pl-4">
                  <p className="font-bold text-primary">Authentic</p>
                  <p className="text-muted text-sm">Lebanese Breakfast</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p className="font-bold text-primary">20 Mins</p>
                  <p className="text-muted text-sm">From Aley</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">A Glimpse of Remhala</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="/images/stock-1.jpg" 
                alt="Rustic stone architecture" 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="group overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="/images/stock-2.jpg" 
                alt="Interior detail" 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">What Our Guests Say</h2>
            <p className="text-muted">Real experiences from our visitors</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < review.stars ? "#D4A373" : "none"} 
                      className={i < review.stars ? "text-accent" : "text-gray-200"} 
                    />
                  ))}
                </div>
                <p className="text-ink italic mb-6 flex-grow leading-relaxed">"{review.text}"</p>
                <div className="pt-6 border-t border-gray-50">
                  <p className="font-bold text-primary">{review.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Visit Us in Remhala</h2>
              <p className="text-lg text-ink mb-8 leading-relaxed">
                Find your way to our mountain sanctuary in the Chouf region. We are located in the heart of nature, offering a peaceful escape from the hustle and bustle.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-full text-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Address</p>
                    <p className="text-muted">PHR7+J3F, Remhala, Lebanon</p>
                  </div>
                </div>
              </div>
              <a 
                href="https://www.google.com/maps/place/?q=place_id:ChIJMeXC_FgfHxUR3XU-WnkZfcQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all"
              >
                Open in Google Maps
                <ExternalLink size={18} />
              </a>
            </div>
            <div className="h-[450px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <iframe 
                src="https://www.google.com/maps?q=33.7415648,35.5626841&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                title="Remhala Guesthouse Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to book your escape? We are here to help. Reach out to us directly via phone or WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:+9613377098" 
              className="bg-white text-primary px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
            >
              <Phone size={22} />
              Call Us
            </a>
            <a 
              href="https://wa.me/9613377098" 
              className="bg-secondary text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={22} />
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
