import React, { useState, useEffect } from 'react';
import logo from './img/footer-logo.png';
import image1 from './img/1.jpg';
import image2 from './img/2.jpg';
import image3 from './img/3.jpg';
import image4 from './img/4.jpg';
import image5 from './img/5.jpg';
import { Search, Menu, X, Moon, Sun, Package, Truck, Shield, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Tag, CheckCircle, Star, ChevronRight } from 'lucide-react';

// Product data
const featuredProducts = [
  { id: 1, name: 'Flyers', price: 15999,  discount: 54, image: 'Flyers', rating: 4.8, reviews: 234, inStock: true },
  { id: 2, name: 'Logo Design', price: 25999,  discount: 42, image: 'Logo Design', rating: 4.6, reviews: 189, inStock: true },
  { id: 3, name: 'Branding', price: 8999,  discount: 50, image: 'Branding', rating: 4.7, reviews: 456, inStock: true },
  { id: 4, name: 'Stamp/Seal', price: 12499, discount: 50, image: 'Stamp/Seal', rating: 4.5, reviews: 178, inStock: true },
  { id: 5, name: 'Card', price: 6999,  discount: 53, image: 'Card', rating: 4.4, reviews: 92, inStock: true },
  { id: 6, name: 'Package Bag Branding', price: 4999,  discount: 58, image: 'Package Bag Branding', rating: 4.6, reviews: 145, inStock: true },
  { id: 6, name: 'Dairy Branding', price: 4999,  discount: 58, image: 'Dairy Branding', rating: 4.6, reviews: 145, inStock: true },
  { id: 6, name: 'Pen Branding', price: 4999,  discount: 58, image: 'Pen Branding', rating: 4.6, reviews: 145, inStock: true },

];

const services = [
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Free delivery on orders above ₦10,000 within Lagos. Nationwide shipping available.'
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: 'Safe and secure payment options. Your financial information is protected.'
  },
  {
    icon: Package,
    title: 'Quality Products',
    description: 'All products are verified and sourced from trusted suppliers.'
  },
  {
    icon: Phone,
    title: '24/7 Support',
    description: 'Our customer service team is always ready to assist you.'
  }
];

const Header = ({ currentPage, setCurrentPage, theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', page: 'home' },
    { name: 'PRODUCTS', page: 'products' },
    { name: 'ABOUT US', page: 'about' },
    { name: 'SERVICES', page: 'services' },
    { name: 'CONTACT', page: 'contact' }
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-white dark:bg-gray-900 shadow-md'}`}>
      {/* Top Bar */}
      <div className="bg-purple-600 dark:bg-purple-800 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-xs md:text-sm">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                +23490692465777
              </span>
              <span className="hidden md:flex items-center gap-1">
                <Mail className="w-3 h-3" />
                info@cyjustdeal.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden md:inline">Free delivery above ₦10,000</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-linear-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <img src={logo} alt="CyJust Deal Logo"  />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">CyJust Deal</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Best Deals Daily</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => setCurrentPage(item.page)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-purple-600 dark:text-purple-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Right Icons */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 active:scale-95"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400 transition-transform duration-300 hover:rotate-90" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700 transition-transform duration-300 hover:rotate-12" />
              )}
            </button>
            <button 
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg font-medium transition-all duration-300 active:scale-95"
              onClick={() => window.open(`https://wa.me/2349069246577?text=Hello%20CyJust%20Deal!%20I%20want%20to%20make%20an%20inquiry`, '_blank')}
            >
              Order on WhatsApp
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button 
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 active:scale-95"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 active:scale-95"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t dark:border-gray-700 pt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    setCurrentPage(item.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 rounded-lg transition ${
                    currentPage === item.page
                      ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button 
                className="mt-4 px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all duration-300 active:scale-95"
                onClick={() => {
                  window.open(`https://wa.me/2349069246577?text=Hello%20CyJust%20Deal!%20I%20want%20to%20make%20an%20inquiry`, '_blank');
                  setMobileMenuOpen(false);
                }}
              >
                Order on WhatsApp
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const ProductCard = ({ product }) => {
  const orderOnWhatsApp = () => {
    const message = `Hello CyJust Deal! I want to order:\n\n*${product.name}*\nPrice: ₦${product.price.toLocaleString()}\n\nPlease contact me regarding this order.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2349069246577?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group">
      <div className="relative bg-gray-100 dark:bg-gray-700 aspect-square flex items-center justify-center">
        <div className="w-24 h-24 bg-linear-to-br from-purple-500 to-pink-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
        <Package className="w-16 h-16 text-gray-300 dark:text-gray-600 absolute" />
        {product.discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
            -{product.discount}%
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-sm text-gray-800 dark:text-white mb-2 line-clamp-2 min-h-10">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">({product.reviews})</span>
        </div>
        <div className="mb-3">
          <p className="text-lg font-bold text-purple-600 dark:text-purple-400">₦{product.price.toLocaleString()}</p>
          {product.originalPrice && (
            <p className="text-xs text-gray-400 dark:text-gray-500 line-through">₦{product.originalPrice.toLocaleString()}</p>
          )}
        </div>
        <button 
          onClick={orderOnWhatsApp}
          className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg font-medium transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
          </svg>
          Order on WhatsApp
        </button>
      </div>
    </div>
  );
};

const HomePage = () => {
  const heroSlides = [
    {
      image:  image1,
      title: 'Quality Products',
      subtitle: 'Shipped to Your Doorstep',
      buttonText: 'Shop Now',
      buttonColor: 'bg-white text-purple-600 hover:bg-purple-50'
    },
    {
      image:  image3,
      title: 'Best Deals Daily',
      subtitle: 'Up to 70% Off on Selected Items',
      buttonText: 'View Discounts',
      buttonColor: 'bg-purple-600 text-white hover:bg-purple-700'
    },
    {
      image:  image2,
      title: 'Free Delivery',
      subtitle: 'On orders above ₦10,000 within Lagos',
      buttonText: 'Start Shopping',
      buttonColor: 'bg-white text-purple-600 hover:bg-purple-50'
    },
    {
      image:  image5,
      title: '24/7 Support',
      subtitle: 'We\'re always here to help you',
      buttonText: 'Contact Us',
      buttonColor: 'bg-purple-600 text-white hover:bg-purple-700'
    },
     {
      image:  image4,
      title: 'Free Delivery',
      subtitle: 'On orders above ₦10,000 within Lagos',
      buttonText: 'Start Shopping',
      buttonColor: 'bg-white text-purple-600 hover:bg-purple-50'
    }
  ];

  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentHeroSlide]);

  return (
    <>
      {/* Hero Section with Slider */}
      <section className="relative h-[80vh] min-h-[500px] overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentHeroSlide
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-110'
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40"></div>
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`h-1 transition-all duration-300 rounded-full ${
                index === currentHeroSlide
                  ? 'w-8 bg-white'
                  : 'w-4 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-2xl ml-auto">
              <div className="overflow-hidden relative h-64">
                {heroSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-1000 ${
                      index === currentHeroSlide
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10 absolute'
                    }`}
                  >
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-3xl text-white/90 mb-8">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button 
                        onClick={() => window.open(`https://wa.me/2349069246577?text=Hello%20CyJust%20Deal!%20I%20want%20to%20shop%20today`, '_blank')}
                        className={`px-8 py-4 rounded-lg font-bold transition-all duration-300 active:scale-95 ${slide.buttonColor}`}
                      >
                        {slide.buttonText}
                      </button>
                      <button 
                        onClick={() => window.scrollTo({ top: 650, behavior: 'smooth' })}
                        className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all duration-300 active:scale-95"
                      >
                        View Products
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Reviews */}
              <div className="mt-12 flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-white/20 border-2 border-white"></div>
                  ))}
                </div>
                <div>
                  <p className="text-white text-lg font-semibold">4.8/5 ★★★★★</p>
                  <p className="text-white/80 text-sm">Based on 500+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Featured Products</h2>
              <div className="w-20 h-1 bg-purple-600 rounded-full"></div>
            </div>
            <button 
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              className="text-purple-600 dark:text-purple-400 hover:underline font-medium flex items-center gap-2 transition-all duration-300 active:scale-95"
            >
              See all products <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const ProductsPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <section className="bg-purple-600 dark:bg-purple-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl max-w-3xl mx-auto">Browse our collection of quality products</p>
          <button 
            onClick={() => window.open(`https://wa.me/2349069246577?text=Hello%20CyJust%20Deal!%20I%20want%20to%20browse%20products`, '_blank')}
            className="mt-8 px-8 py-4 bg-white text-purple-600 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 active:scale-95"
          >
            Browse on WhatsApp
          </button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="bg-purple-600 dark:bg-purple-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About CyJust Deal</h1>
          <p className="text-xl max-w-3xl mx-auto">Your trusted partner for quality products at unbeatable prices</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Who We Are</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                CyJust Deal is Nigeria's premier online marketplace, dedicated to bringing you the best products at the most competitive prices. Founded in 2020, we have grown to become one of the most trusted e-commerce platforms in the country, serving thousands of satisfied customers.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Our mission is simple: to make quality products accessible to everyone across Nigeria. We carefully curate our product selection, working only with verified suppliers to ensure that every item meets our high standards of quality.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Quality First', desc: 'We never compromise on product quality and authenticity.' },
                  { title: 'Customer Focus', desc: 'Your satisfaction is our top priority in everything we do.' },
                  { title: 'Transparency', desc: 'Honest pricing, clear policies, and open communication.' },
                  { title: 'Innovation', desc: 'Continuously improving our service and shopping experience.' }
                ].map((value, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-purple-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-800 dark:text-white mb-2">{value.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Why Choose Us?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-4xl font-bold text-purple-600 mb-2">10K+</div>
                  <p className="text-gray-600 dark:text-gray-400">Products Available</p>
                </div>
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-4xl font-bold text-purple-600 mb-2">50K+</div>
                  <p className="text-gray-600 dark:text-gray-400">Happy Customers</p>
                </div>
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-4xl font-bold text-purple-600 mb-2">4.8★</div>
                  <p className="text-gray-600 dark:text-gray-400">Average Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = () => {
  const allServices = [
    {
      icon: Truck,
      title: 'Fast & Reliable Delivery',
      description: 'We offer same-day delivery within Lagos and 2-5 business days nationwide. Free delivery on orders above ₦10,000 within Lagos.',
      features: ['Same-day delivery in Lagos', 'Nationwide coverage', 'Order tracking', 'Secure packaging']
    },
    {
      icon: Shield,
      title: 'Secure Payment Options',
      description: 'Shop with confidence using our secure payment gateway. We accept all major payment methods.',
      features: ['Bank transfer', 'Card payments', 'Pay on delivery', 'Secure checkout']
    },
    {
      icon: Package,
      title: 'Quality Assurance',
      description: 'All our products are sourced from verified suppliers and undergo quality checks before shipping.',
      features: ['Verified suppliers', 'Quality inspection', 'Authentic products', 'Return policy']
    },
    {
      icon: Phone,
      title: '24/7 Customer Support',
      description: 'Our dedicated customer service team is always ready to assist you with any questions or concerns.',
      features: ['Live chat support', 'Phone support', 'Email support', 'WhatsApp assistance']
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="bg-purple-600 dark:bg-purple-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">Everything we do is designed to make your shopping experience seamless</p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {allServices.map((service, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Ready to Experience the Difference?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust CyJust Deal for their shopping needs
          </p>
          <button 
            onClick={() => window.open(`https://wa.me/2349069246577?text=Hello%20CyJust%20Deal!%20I%20want%20to%20start%20shopping`, '_blank')}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold transition-all duration-300 active:scale-95"
          >
            Start Shopping
          </button>
        </div>
      </section>
    </div>
  );
};

const ContactPage = () => {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=600&fit=crop&q=80',
      title: 'Contact Us',
      subtitle: 'Reach out anytime',
    },
    {
      image: 'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=1920&h=600&fit=crop&q=80',
      title: 'Get in Touch',
      subtitle: 'We are here to help',
    },
    {
      image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1920&h=600&fit=crop&q=80',
      title: 'Let\'s Connect',
      subtitle: 'Start a conversation',
    },
    {
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1920&h=600&fit=crop&q=80',
      title: 'Contact Us',
      subtitle: 'We\'d love to hear from you',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactOnWhatsApp = () => {
    const message = `Hello CyJust Deal! I want to contact you regarding:\n\nName: ${formData.name || 'Not provided'}\nEmail: ${formData.email || 'Not provided'}\nPhone: ${formData.phone || 'Not provided'}\nMessage: ${formData.message || 'No message'}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2349069246577?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Slider */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-110'
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-8 bg-white'
                  : 'w-4 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-2xl">
              <div className="overflow-hidden relative h-48">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-1000 ${
                      index === currentSlide
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10 absolute'
                    }`}
                  >
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-8">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button 
                        onClick={() => window.scrollTo({ top: document.body.scrollHeight - 400, behavior: 'smooth' })}
                        className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full font-semibold transition-all active:scale-95"
                      >
                        Contact Now
                      </button>
                      <button 
                        onClick={() => window.open(`https://wa.me/2349069246577?text=Hello%20CyJust%20Deal!%20I%20want%20to%20contact%20you`, '_blank')}
                        className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-all active:scale-95"
                      >
                        WhatsApp Us
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-1">Visit Us</h3>
                    <p className="text-gray-600 dark:text-gray-400">123 Commerce Street, Ikeja, Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-1">Call Us</h3>
                    <p className="text-gray-600 dark:text-gray-400">+23490692465777</p>
                    <p className="text-gray-600 dark:text-gray-400">+234 801 234 5678</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-1">Email Us</h3>
                    <p className="text-gray-600 dark:text-gray-400">info@cyjustdeal.com</p>
                    <p className="text-gray-600 dark:text-gray-400">support@cyjustdeal.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-1">Business Hours</h3>
                    <p className="text-gray-600 dark:text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 dark:text-gray-400">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-gray-800 dark:text-white mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300 active:scale-95">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300 active:scale-95">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300 active:scale-95">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300 active:scale-95">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all duration-300 active:scale-95"
                  >
                    Send Message
                  </button>
                  <button
                    type="button"
                    onClick={contactOnWhatsApp}
                    className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                    </svg>
                    WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-linear-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <img src={logo} alt="CyJust Deal Logo"  />
              </div>
              <span className="text-xl font-bold">CyJust Deal</span>
            </div>
            <p className="text-gray-400 mb-4">Your trusted partner for quality products at unbeatable prices.</p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300">Return Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-all duration-300">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>123 Commerce Street, Lagos</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+23490692465777</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>info@cyjustdeal.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Clock className="w-4 h-4" />
                <span>Mon-Fri: 9AM-6PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} CyJust Deal. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Best deals daily, shipped to your doorstep across Nigeria</p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'products':
        return <ProductsPage />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="dark:bg-gray-900 transition-colors duration-300">
        <Header 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <main>
          {renderPage()}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;