import React, { useState, useEffect } from 'react';
import logo from './img/footer-logo.png';
import flyersImage2 from './img/10818.jpg';
import flyersImage from './img/1434.jpg';
import flyersImage3 from './img/81042-OG0s3j-774.jpg';
import flyersImage4 from './img/ooad5r0.jpg';
import flyersImage5 from './img/stationery6_01.jpg';
import flyersImage6 from './img/mp5-01.jpg';
import flyersImage7 from './img/730.jpg';

import image1 from './img/1.jpg';
import image2 from './img/2.jpg';
import image3 from './img/3.jpg';
import image4 from './img/4.jpg';
import image5 from './img/5.jpg';
import { Search, Menu, X, Moon, Sun, Package, Truck, Shield, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Tag, CheckCircle, Star, ChevronRight } from 'lucide-react';

// Product data
const featuredProducts = [
  { 
    id: 1, 
    name: 'Flyers', 
    price: 15999, 
    discount: 54, 
    image: flyersImage,
    rating: 4.8, 
    reviews: 234, 
    inStock: true 
  },
  { 
    id: 1, 
    name: 'Logo Design', 
    price: 15999, 
    discount: 54, 
    image: flyersImage2,
    rating: 4.8, 
    reviews: 234, 
    inStock: true 
  },
   { 
    id: 1, 
    name: 'Branding', 
    price: 15999, 
    discount: 54, 
    image: flyersImage3,
    rating: 4.8, 
    reviews: 234, 
    inStock: true 
  },
  { 
    id: 1, 
    name: 'Stamp/Seal', 
    price: 15999, 
    discount: 54, 
    image: flyersImage4,
    rating: 4.8, 
    reviews: 234, 
    inStock: true 
  },
  { id: 5, name: 'Card', 
    price: 6999, 
     discount: 53, 
     image:flyersImage5 ,
      rating: 4.4, 
      reviews: 92,
       inStock: true },
  { id: 6,
     name: 'Package Bag Branding',
      price: 4999, 
       discount: 58, 
      image: flyersImage6, 
      rating: 4.6, 
      reviews: 145,
       inStock: true },
  { 
    id: 7,
     name: 'Dairy Branding',
      price: 4999, 
       discount: 58, 
       image: flyersImage7,
        rating: 4.6, reviews: 145,
         inStock: true },
  {
     id: 8,
     name: 'Pen Branding',
      price: 4999, 
       discount: 58,
        image: 'Pen Branding',
         rating: 4.6, 
         reviews: 145, 
         inStock: true },
];

const services = [
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Free delivery on orders above ₦50,000 within Lagos. Nationwide shipping available.'
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
      <div className="bg-blue-600 dark:bg-blue-800 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-xs md:text-sm">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                09069246577              </span>
              <span className="hidden md:flex items-center gap-1">
                <Mail className="w-3 h-3" />
                info@cyjustdeal.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden md:inline">Free delivery above ₦50,000</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <img src={logo} alt="CyJust Deal Logo"  />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">CYJUST DEAL</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Best Deals Daily</p>
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
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
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
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg font-medium transition-all duration-300 active:scale-95"
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
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button 
                className="mt-4 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 active:scale-95"
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
      {/* Image Section - FIXED */}
      <div className="relative bg-gray-50 dark:bg-gray-700 aspect-square overflow-hidden">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center relative">
            <div className="w-24 h-24 bg-blue-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <Package className="w-16 h-16 text-gray-400 dark:text-gray-600 absolute" />
          </div>
        )}
        
        {product.discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
            -{product.discount}%
          </div>
        )}
      </div>

      {/* Product Info */}
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
          <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
            ₦{product.price.toLocaleString()}
          </p>
          {product.discount > 0 && (
            <p className="text-xs text-gray-400 dark:text-gray-500 line-through">
              ₦{Math.round(product.price / (1 - product.discount/100)).toLocaleString()}
            </p>
          )}
        </div>
        
        <button 
          onClick={orderOnWhatsApp}
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg font-medium transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
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

const home = () => {
  const heroSlides = [
    {
      image:  image1,
      title: 'Quality Products',
      subtitle: 'Shipped to Your Doorstep',
      buttonText: 'Shop Now',
      buttonColor: 'bg-white text-blue-600 hover:bg-gray-50'
    },
    {
      image:  image3,
      title: 'Best Deals Daily',
      subtitle: 'Up to 70% Off on Selected Items',
      buttonText: 'View Discounts',
      buttonColor: 'bg-blue-600 text-white hover:bg-blue-700'
    },
    {
      image:  image2,
      title: 'Free Delivery',
      subtitle: 'On orders above ₦50,000 within Lagos',
      buttonText: 'Start Shopping',
      buttonColor: 'bg-white text-blue-600 hover:bg-gray-50'
    },
    {
      image:  image5,
      title: '24/7 Support',
      subtitle: 'We\'re always here to help you',
      buttonText: 'Contact Us',
      buttonColor: 'bg-blue-600 text-white hover:bg-blue-700'
    },
     {
      image:  image4,
      title: 'Free Delivery',
      subtitle: 'On orders above ₦50,000 within Lagos',
      buttonText: 'Start Shopping',
      buttonColor: 'bg-white text-blue-600 hover:bg-gray-50'
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
              <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
            </div>
            <button 
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center gap-2 transition-all duration-300 active:scale-95"
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
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
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
      {/* Hero with Background Image */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image2})` }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40"></div>
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Products</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10">
            Browse our collection of quality products with the best deals
          </p>
          <button 
            onClick={() => window.open(`https://wa.me/2349069246577?text=Hello%20CyJust%20Deal!%20I%20want%20to%20browse%20products`, '_blank')}
            className="px-10 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-50 transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl text-lg"
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
      {/* Hero with Background Image */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 via-blue-800/70 to-blue-700/50"></div>
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About CyJust Deal</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Your trusted partner for quality products at unbeatable prices
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Who We Are</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                At Cyjust Deal, we are your dedicated partners in digital branding and development, committed to crafting powerful 
                digital experiences that elevate your brand. Our mission is to empower brands through creative digital solutions, 
                leveraging our expertise in graphic design, and branding to turn your ideas into impactful digital realities.
                 Whether you're looking to establish a strong online presence or refresh your brand identity, our team of 
                 professionals is here to guide you every step of the way. We help you stand out in the digital world with 
                 custom-tailored services that resonate with your target audience, ensuring your brand not only meets but exceeds 
                 its digital potential. Choose us for our proven expertise in branding, web development, and design, and let us 
                 transform your vision into a compelling digital experience..
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                our team of professionals is here to guide you every step of the way. Our mission is to help you stand out in the 
                digital world with creative, custom-tailored services that resonate with your target audience.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Quality First', desc: 'We never compromise on quality or authenticity. Every project is delivered with precision and excellence.' },
                  { title: 'Customer Focus', desc: 'Your satisfaction is our top priority. We listen, understand, and create solutions that truly meet your needs.' },
                  { title: 'Transparency', desc: 'We believe in honest pricing, clear communication, and complete openness throughout every stage of your project.' },
                  { title: 'Innovation', desc: 'We continuously improve our services, embracing new ideas and technologies to enhance your digital experience.' }
                ].map((value, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
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
                  <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
                  <p className="text-gray-600 dark:text-gray-400">Products Available</p>
                </div>
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
                  <p className="text-gray-600 dark:text-gray-400">Happy Customers</p>
                </div>
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-4xl font-bold text-blue-600 mb-2">4.8★</div>
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

const HomePage = () => {
  const heroSlides = [
    {
      image:  image1,
      title: 'Quality Products',
      subtitle: 'Shipped to Your Doorstep',
      buttonText: 'Shop Now',
      buttonColor: 'bg-white text-blue-600 hover:bg-gray-50'
    },
    {
      image:  image3,
      title: 'Best Deals Daily',
      subtitle: 'Up to 70% Off on Selected Items',
      buttonText: 'View Discounts',
      buttonColor: 'bg-blue-600 text-white hover:bg-blue-700'
    },
    {
      image:  image2,
      title: 'Free Delivery',
      subtitle: 'On orders above ₦50,000 within Lagos',
      buttonText: 'Start Shopping',
      buttonColor: 'bg-white text-blue-600 hover:bg-gray-50'
    },
    {
      image:  image5,
      title: '24/7 Support',
      subtitle: 'We\'re always here to help you',
      buttonText: 'Contact Us',
      buttonColor: 'bg-blue-600 text-white hover:bg-blue-700'
    },
     {
      image:  image4,
      title: 'Free Delivery',
      subtitle: 'On orders above ₦50,000 within Lagos',
      buttonText: 'Start Shopping',
      buttonColor: 'bg-white text-blue-600 hover:bg-gray-50'
    }
  ];

  // Create an array of customer images for the avatars
  // You can replace these with actual customer images or use the product images
  const customerImages = [
    flyersImage5,  // Using existing images for demo
    flyersImage2,
    flyersImage3,
    flyersImage
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
              
              {/* Reviews with Images */}
              <div className="mt-12 flex items-center gap-3">
                <div className="flex -space-x-3">
                  {customerImages.map((img, i) => (
                    <div 
                      key={i} 
                      className="w-12 h-12 rounded-full border-2 border-white overflow-hidden relative z-10 hover:scale-110 transition-transform duration-300"
                      style={{ zIndex: 10 - i }}
                    >
                      <img 
                        src={img} 
                        alt={`Happy customer ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
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
              <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
            </div>
            <button 
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center gap-2 transition-all duration-300 active:scale-95"
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
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
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

const ServicesPage = () => {
  const allServices = [
    {
      icon: Truck,
      title: 'Fast & Reliable Delivery',
      description: 'We offer same-day delivery within Lagos and 2-5 business days nationwide. Free delivery on orders above ₦50,000 within Lagos.',
      features: ['Same-day delivery in Lagos', 'Nationwide coverage', 'Order tracking', 'Secure packaging']
    },
    {
      icon: Shield,
      title: 'Secure Payment Options',
      description: 'Shop with confidence using our secure payment gateway. We accept all major payment methods.',
      features: ['Payment gateway integration', 'Multiple payment options', 'Secure transactions', 'Payment confirmation']
    },
    {
      icon: Package,
      title: 'Product Sourcing',
      description: 'We help businesses source quality products from verified suppliers at competitive prices.',
      features: ['Supplier verification', 'Quality inspection', 'Bulk pricing', 'Custom sourcing']
    },
    {
      icon: Phone,
      title: 'Customer Support',
      description: 'Our dedicated support team is available 24/7 to assist you with any questions or concerns.',
      features: ['24/7 availability', 'Multiple contact channels', 'Quick response time', 'Post-purchase support']
    },
    {
      icon: Tag,
      title: 'Best Price Guarantee',
      description: 'We guarantee the best prices on all our products. Found a better price? We\'ll match it!',
      features: ['Price matching', 'Regular price audits', 'Discount alerts', 'Seasonal offers']
    },
    {
      icon: Star,
      title: 'Quality Assurance',
      description: 'Every product undergoes rigorous quality checks before being listed on our platform.',
      features: ['Quality inspection', 'Authenticity verification', 'Warranty coverage', 'Return policy']
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero with Background Image */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image3})` }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-green-900/90 via-green-800/70 to-green-700/50"></div>
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10">
            Comprehensive solutions to meet all your shopping needs
          </p>
          <button 
            onClick={() => window.open(`https://wa.me/2349069246577?text=Hello%20CyJust%20Deal!%20I%20need%20information%20about%20your%20services`, '_blank')}
            className="px-10 py-4 bg-white text-green-600 rounded-lg font-bold hover:bg-gray-50 transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl text-lg"
          >
            Inquire About Services
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Need Custom Solutions?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            We offer tailored solutions for businesses and individuals. Contact us to discuss your specific requirements.
          </p>
          <button 
            onClick={() => window.open(`https://wa.me/2349069246577?text=Hello%20CyJust%20Deal!%20I%20need%20custom%20solutions%20for%20my%20business`, '_blank')}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all duration-300 active:scale-95"
          >
            Get Custom Quote
          </button>
        </div>
      </section>
    </div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `New Contact Form Submission:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/2349069246577?text=${message}`, '_blank');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Number',
      info: '+2349069246577',
      action: 'tel:+2349069246577'
    },
    {
      icon: Mail,
      title: 'Email Address',
      info: 'info@cyjustdeal.com',
      action: 'mailto:info@cyjustdeal.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      info: 'Lagos, Nigeria',
      action: 'https://maps.google.com/?q=Lagos,Nigeria'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      info: '24/7 Customer Support',
      action: null
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero with Background Image */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image4})` }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-purple-900/90 via-purple-800/70 to-purple-700/50"></div>
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Get in touch with our team. We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="+234 906 924 6577"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Your message here..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all duration-300 active:scale-95"
                >
                  Send Message via WhatsApp
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 dark:text-white mb-1">{info.title}</h3>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {info.info}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">{info.info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Quick Contact */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h3 className="font-bold text-gray-800 dark:text-white mb-4">Quick Contact via WhatsApp</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Click below to chat with us instantly on WhatsApp. Our team typically responds within minutes.
                </p>
                <button 
                  onClick={() => window.open(`https://wa.me/2349069246577?text=Hello%20CyJust%20Deal!%20I%20need%20assistance`, '_blank')}
                  className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 active:scale-95"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                  </svg>
                  Chat on WhatsApp Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Footer = () => {
  const quickLinks = [
    { name: 'Home', page: 'home' },
    { name: 'Products', page: 'products' },
    { name: 'About Us', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Contact', page: 'contact' }
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', url: 'https://facebook.com/cyjustdeal' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/cyjustdeal' },
    { icon: Instagram, label: 'Instagram', url: 'https://instagram.com/cyjustdeal' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/company/cyjustdeal' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <img src={logo} alt="CyJust Deal Logo"  />
              </div>
              <div>
                <h2 className="text-xl font-bold">CyJust Deal</h2>
                <p className="text-sm text-gray-400">Best Deals Daily</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner for quality products at unbeatable prices. We deliver happiness to your doorstep.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 active:scale-95"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.page}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-100" />
                <span className="text-gray-400">+2349069246577</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-100" />
                <span className="text-gray-400">info@cyjustdeal.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-100" />
                <span className="text-gray-400">Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-100" />
                <span className="text-gray-400">24/7 Customer Support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* WhatsApp Button - Fixed on Mobile */}
        <div className="fixed bottom-6 right-6 z-40 lg:hidden">
          <button 
            onClick={() => window.open(`https://wa.me/2349069246577?text=Hello%20CyJust%20Deal!%20I%20need%20assistance`, '_blank')}
            className="w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 active:scale-95"
            aria-label="Chat on WhatsApp"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
            </svg>
          </button>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} CyJust Deal. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed with ❤️ for Nigerian customers
          </p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

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
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
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
  );
};

export default App;