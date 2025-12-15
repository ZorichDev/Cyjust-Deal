import React, { useState, useEffect } from 'react';
import logo from './img/footer-logo.png';
import flyersImage2 from './img/10818.jpg';
import flyersImage from './img/1434.jpg';
import flyersImage3 from './img/81042-OG0s3j-774.jpg';
import flyersImage4 from './img/ooad5r0.jpg';
import flyersImage5 from './img/stationery6_01.jpg';
import flyersImage6 from './img/mp5-01.jpg';
import flyersImage7 from './img/730.jpg';
import flyersImage8 from './img/close-up-green-pens.jpg';

import image1 from './img/1.jpg';
import image2 from './img/2.jpg';
import image3 from './img/3.jpg';
import image4 from './img/4.jpg';
import image5 from './img/5.jpg';
import { Search, Menu, X, Moon, Sun, Package, Truck, Shield, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Tag, CheckCircle, Star, ChevronRight, Globe, Code, Zap, Users, Award, TrendingUp, Headphones, CreditCard, ShoppingBag, Smartphone, Palette } from 'lucide-react';

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
    id: 2, 
    name: 'Logo Design', 
    price: 15999, 
    discount: 54, 
    image: flyersImage2,
    rating: 4.8, 
    reviews: 234, 
    inStock: true 
  },
   { 
    id: 3, 
    name: 'Branding', 
    price: 15999, 
    discount: 54, 
    image: flyersImage3,
    rating: 4.8, 
    reviews: 234, 
    inStock: true 
  },
  { 
    id: 4, 
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
        image: flyersImage8,
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
    { name: 'WEBSITE PACKAGES', page: 'website-packages' },
    { name: 'CONTACT', page: 'contact' }
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-white dark:bg-gray-900 shadow-md'}`}>
      {/* Top Bar */}
      <div className="bg-linear-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-xs md:text-sm">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 hover:text-blue-100 transition-colors">
                <Phone className="w-3 h-3" />
                09069246577
              </span>
              <span className="hidden md:flex items-center gap-1 hover:text-blue-100 transition-colors">
                <Mail className="w-3 h-3" />
                info@cyjustdeal.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden md:inline animate-pulse">🎁 Free delivery above ₦50,000</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => {
              setCurrentPage('home');
              window.history.pushState({ page: 'home' }, '', '/');
            }} 
            className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
          >
            <div className="w-10 h-10 bg-linear-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center">
              <img src={logo} alt="CyJust Deal Logo" className="w-8 h-8" />
            </div>
            <div className="text-left">
              <h1 className="text-xl md:text-2xl font-bold bg-linear-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">CYJUST DEAL</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Best Deals Daily</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  setCurrentPage(item.page);
                  window.history.pushState({ page: item.page }, '', `/#${item.page}`);
                }}
                className={`relative text-sm font-medium transition-all duration-300 group ${
                  currentPage === item.page
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full ${
                  currentPage === item.page ? 'w-full' : ''
                }`}></span>
              </button>
            ))}
          </div>

          {/* Right Icons */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 active:scale-95 hover:shadow-md"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400 transition-transform duration-300 hover:rotate-90" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700 transition-transform duration-300 hover:rotate-12" />
              )}
            </button>
            <button 
              className="px-4 py-2 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm rounded-lg font-medium transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg flex items-center gap-2"
              onClick={() => window.open(`https://wa.me/2349069246577?text=Hello%20CyJust%20Deal!%20I%20want%20to%20make%20an%20inquiry`, '_blank')}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
              </svg>
              Order Now
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
          <div className="lg:hidden mt-4 pb-4 border-t dark:border-gray-700 pt-4 animate-slideDown">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    setCurrentPage(item.page);
                    setMobileMenuOpen(false);
                    window.history.pushState({ page: item.page }, '', `/#${item.page}`);
                  }}
                  className={`text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                    currentPage === item.page
                      ? 'bg-linear-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button 
                className="mt-4 px-4 py-3 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-medium transition-all duration-300 active:scale-95 shadow-md"
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
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative bg-gray-50 dark:bg-gray-700 aspect-square overflow-hidden">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center relative">
            <div className="w-24 h-24 bg-blue-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <Package className="w-16 h-16 text-gray-400 dark:text-gray-600 absolute" />
          </div>
        )}
        
        {product.discount > 0 && (
          <div className="absolute top-3 left-3 bg-linear-to-r from-red-500 to-red-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
            -{product.discount}%
          </div>
        )}
        
        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

     {/* Product Info */}
<div className="p-5">
  <h3 className="font-bold text-gray-800 dark:text-white mb-2 line-clamp-2 min-h-12 text-sm">
    {product.name}
  </h3>

  <div className="flex items-center gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
    ))}
    <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
      ({product.reviews})
    </span>
  </div>

  <div className="flex items-center justify-between mb-4">
    <div className="flex flex-col">
      <span className="text-lg font-bold text-gray-800 dark:text-white">₦{product.price.toLocaleString()}</span>
      {product.discount > 0 && (
        <span className="text-xs text-gray-500 dark:text-gray-400 line-through">
          ₦{(product.price / (1 - product.discount/100)).toLocaleString()}
        </span>
      )}
    </div>
  </div>

  <button
    onClick={orderOnWhatsApp}
    className="w-full py-2.5 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm rounded-lg font-medium transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
  >
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967..." />
    </svg>
    Order Now
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
      title: 'Premium Branding',
      subtitle: 'Professional branding solutions for your business',
      buttonText: 'Explore Services',
      buttonColor: 'bg-white text-blue-600 hover:bg-gray-50'
    }
  ];

  // Create an array of customer images for the avatars
  const customerImages = [
    flyersImage5,
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
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
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
              className={`h-1.5 transition-all duration-300 rounded-full ${
                index === currentHeroSlide
                  ? 'w-8 bg-white shadow-lg'
                  : 'w-4 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-2xl ml-auto animate-fadeIn">
              <div className="overflow-hidden relative h-72">
                {heroSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-1000 ${
                      index === currentHeroSlide
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10 absolute'
                    }`}
                  >
                    <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-2xl md:text-4xl text-white/90 mb-10 leading-relaxed">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-6">
                      <button 
                        onClick={() => window.open(`https://wa.me/2349069246577?text=Hello%20CyJust%20Deal!%20I%20want%20to%20shop%20today`, '_blank')}
                        className={`px-10 py-5 rounded-xl font-bold transition-all duration-300 active:scale-95 shadow-xl hover:shadow-2xl text-lg ${slide.buttonColor}`}
                      >
                        {slide.buttonText}
                      </button>
                      <button 
                        onClick={() => {
                          const element = document.querySelector('#featured-products');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl text-lg"
                      >
                        View Products
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Reviews with Images */}
              <div className="mt-16 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {customerImages.map((img, i) => (
                    <div 
                      key={i} 
                      className="w-14 h-14 rounded-full border-3 border-white overflow-hidden relative z-10 hover:scale-110 transition-transform duration-300 shadow-lg"
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
                  <div className="flex items-center gap-2">
                    <p className="text-white text-2xl font-bold">4.8/5</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-white/80 text-sm mt-1">Based on 500+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-linear-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Package, value: '10K+', label: 'Products' },
              { icon: Users, value: '50K+', label: 'Customers' },
              { icon: Award, value: '4.8★', label: 'Rating' },
              { icon: Truck, value: '24/7', label: 'Delivery' }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-4xl font-bold text-gray-800 dark:text-white mb-2">{stat.value}</div>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured-products" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">Featured Products</h2>
              <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-blue-800 rounded-full"></div>
              <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl">
                Discover our premium collection of branding and marketing materials
              </p>
            </div>
            <button 
              onClick={() => {
                const element = document.querySelector('#featured-products');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="mt-6 md:mt-0 px-8 py-3 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-medium transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              Explore All <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-linear-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">Why Choose Us</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-blue-800 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
              We deliver excellence through our comprehensive range of services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="w-20 h-20 bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-10 h-10 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Brand?</h2>
            <p className="text-xl text-white/90 mb-10">
              Join thousands of satisfied customers who trust us with their branding needs
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => window.open(`https://wa.me/2349069246577?text=Hello%20CyJust%20Deal!%20I%20want%20to%20discuss%20a%20project`, '_blank')}
                className="px-12 py-5 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 active:scale-95 shadow-2xl hover:shadow-3xl text-lg"
              >
                Start a Project
              </button>
              <button 
                onClick={() => {
                  const element = document.querySelector('#featured-products');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-12 py-5 bg-transparent border-3 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300 active:scale-95 shadow-xl hover:shadow-2xl text-lg"
              >
                Browse Products
              </button>
            </div>
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
      <section className="relative py-32 md:py-48 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image2})` }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/70 to-black/60"></div>
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-center animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">Our Premium Products</h1>
          <p className="text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
            Discover our exclusive collection of branding and marketing solutions
          </p>
          <button 
            onClick={() => window.open(`https://wa.me/2349069246577?text=Hello%20CyJust%20Deal!%20I%20want%20to%20browse%20your%20products`, '_blank')}
            className="px-12 py-5 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 active:scale-95 shadow-2xl hover:shadow-3xl text-lg"
          >
            Browse Catalog
          </button>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-linear-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">Product Categories</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-blue-800 rounded-full mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Print Materials',
                icon: Package,
                items: ['Flyers', 'Business Cards', 'Brochures', 'Catalogs'],
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Branding',
                icon: Palette,
                items: ['Logo Design', 'Brand Identity', 'Stationery', 'Packaging'],
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: 'Promotional Items',
                icon: ShoppingBag,
                items: ['Pens', 'Mugs', 'T-shirts', 'Corporate Gifts'],
                color: 'from-green-500 to-green-600'
              }
            ].map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
      <section className="relative py-32 md:py-48 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 via-blue-800/80 to-blue-700/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-center animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">About CyJust Deal</h1>
          <p className="text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Your trusted partner for digital branding and development solutions
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-8">Who We Are</h2>
              <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-blue-800 rounded-full mb-8"></div>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  At Cyjust Deal, we are your dedicated partners in digital branding and development, committed to crafting powerful 
                  digital experiences that elevate your brand. Our mission is to empower brands through creative digital solutions, 
                  leveraging our expertise in graphic design and branding to turn your ideas into impactful digital realities.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Whether you're looking to establish a strong online presence or refresh your brand identity, our team of 
                  professionals is here to guide you every step of the way. We help you stand out in the digital world with 
                  custom-tailored services that resonate with your target audience, ensuring your brand not only meets but exceeds 
                  its digital potential.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Choose us for our proven expertise in branding, web development, and design, and let us 
                  transform your vision into a compelling digital experience.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-8">Our Values</h2>
              <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-blue-800 rounded-full mb-8"></div>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { 
                    title: 'Quality First', 
                    desc: 'We never compromise on quality or authenticity. Every project is delivered with precision and excellence.',
                    icon: Award
                  },
                  { 
                    title: 'Customer Focus', 
                    desc: 'Your satisfaction is our top priority. We listen, understand, and create solutions that truly meet your needs.',
                    icon: Users
                  },
                  { 
                    title: 'Transparency', 
                    desc: 'We believe in honest pricing, clear communication, and complete openness throughout every stage of your project.',
                    icon: Shield
                  },
                  { 
                    title: 'Innovation', 
                    desc: 'We continuously improve our services, embracing new ideas and technologies to enhance your digital experience.',
                    icon: Zap
                  }
                ].map((value, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl flex items-center justify-center mb-6">
                      <value.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-8">Why Choose Us?</h2>
              <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-blue-800 rounded-full mb-8"></div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="text-5xl font-bold bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">10K+</div>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">Products Available</p>
                </div>
                <div className="text-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="text-5xl font-bold bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">50K+</div>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">Happy Customers</p>
                </div>
                <div className="text-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="text-5xl font-bold bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">4.8★</div>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">Average Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-linear-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">Our Expertise</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-blue-800 rounded-full mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Graphic Design', desc: 'Creative visuals that communicate your brand message', icon: Palette },
              { title: 'Web Development', desc: 'Modern, responsive websites that convert visitors', icon: Code },
              { title: 'Digital Marketing', desc: 'Strategies to grow your online presence', icon: TrendingUp }
            ].map((expertise, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <expertise.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{expertise.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{expertise.desc}</p>
              </div>
            ))}
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
      description: 'We offer same-day delivery within Lagos and 2-5 business days nationwide. Free delivery on orders above ₦50,000 within Lagos.',
      features: ['Same-day delivery in Lagos', 'Nationwide coverage', 'Order tracking', 'Secure packaging'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Secure Payment Options',
      description: 'Shop with confidence using our secure payment gateway. We accept all major payment methods.',
      features: ['Payment gateway integration', 'Multiple payment options', 'Secure transactions', 'Payment confirmation'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Package,
      title: 'Product Sourcing',
      description: 'We help businesses source quality products from verified suppliers at competitive prices.',
      features: ['Supplier verification', 'Quality inspection', 'Bulk pricing', 'Custom sourcing'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Phone,
      title: 'Customer Support',
      description: 'Our dedicated support team is available 24/7 to assist you with any questions or concerns.',
      features: ['24/7 availability', 'Multiple contact channels', 'Quick response time', 'Post-purchase support'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Tag,
      title: 'Best Price Guarantee',
      description: 'We guarantee the best prices on all our products. Found a better price? We\'ll match it!',
      features: ['Price matching', 'Regular price audits', 'Discount alerts', 'Seasonal offers'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Star,
      title: 'Quality Assurance',
      description: 'Every product undergoes rigorous quality checks before being listed on our platform.',
      features: ['Quality inspection', 'Authenticity verification', 'Warranty coverage', 'Return policy'],
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero with Background Image */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image3})` }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-green-900/90 via-green-800/80 to-green-700/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-center animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">Our Premium Services</h1>
          <p className="text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
            Comprehensive solutions tailored to meet all your branding and business needs
          </p>
          <button 
            onClick={() => window.open(`https://wa.me/2349069246577?text=Hello%20CyJust%20Deal!%20I%20need%20information%20about%20your%20services`, '_blank')}
            className="px-12 py-5 bg-white text-green-600 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 active:scale-95 shadow-2xl hover:shadow-3xl text-lg"
          >
            Get Service Consultation
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 group">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-center leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-linear-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">How We Work</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-blue-800 rounded-full mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'We understand your requirements' },
              { step: '02', title: 'Planning', desc: 'Create customized strategy' },
              { step: '03', title: 'Execution', desc: 'Implement with precision' },
              { step: '04', title: 'Delivery', desc: 'Deliver exceptional results' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl font-bold text-blue-600 dark:text-blue-300">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{process.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto bg-linear-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Need Custom Solutions?</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
              We offer tailored solutions for businesses and individuals. Contact us to discuss your specific requirements.
            </p>
            <button 
              onClick={() => window.open(`https://wa.me/2349069246577?text=Hello%20CyJust%20Deal!%20I%20need%20custom%20solutions%20for%20my%20business`, '_blank')}
              className="px-12 py-5 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 active:scale-95 shadow-2xl hover:shadow-3xl text-lg"
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const WebsitePackagesPage = () => {
  const packages = [
    {
      name: "R-Pro Lite",
      price: "₦70,000",
      originalPrice: "₦100,000",
      description: "Perfect for small businesses starting their online journey",
      features: [
        "5 Pages Website",
        "Responsive Design",
        "Basic SEO Setup",
        "Contact Form",
        "Social Media Integration",
        "6 Months Support",
        "Mobile Friendly",
        "Free Domain (1 Year)",
        "Hosting (6 Months)",
        "Basic Analytics"
      ],
      recommended: false,
      whatsappMessage: "Hi CyJust Deal! I'm interested in the R-Pro Lite Website Package (₦70,000). Can you provide more details?"
    },
    {
      name: "R-Pro Start",
      price: "₦160,000",
      originalPrice: "₦220,000",
      description: "Ideal for growing businesses with advanced features",
      features: [
        "10 Pages Website",
        "Custom Design",
        "Advanced SEO",
        "Blog Setup",
        "E-commerce Ready",
        "1 Year Support",
        "Google Analytics",
        "Speed Optimization",
        "SSL Certificate",
        "Content Management System",
        "Free Domain (1 Year)",
        "Hosting (1 Year)",
        "Social Media Integration"
      ],
      recommended: true,
      whatsappMessage: "Hi CyJust Deal! I'm interested in the R-Pro Start Website Package (₦160,000). Can you provide more details?"
    },
    {
      name: "R-Pro Plus",
      price: "₦350,000",
      originalPrice: "₦480,000",
      description: "Premium solution for established businesses",
      features: [
        "15 Pages Website",
        "Premium Custom Design",
        "Full E-commerce Solution",
        "Advanced SEO Package",
        "Priority Support",
        "2 Years Maintenance",
        "Payment Gateway Integration",
        "Multi-language Support",
        "Performance Optimization",
        "Regular Backups",
        "Security Monitoring",
        "Dedicated Account Manager",
        "Free Domain (2 Years)",
        "Hosting (2 Years)"
      ],
      recommended: false,
      whatsappMessage: "Hi CyJust Deal! I'm interested in the R-Pro Plus Website Package (₦350,000). Please schedule a consultation."
    }
  ];

  const processSteps = [
    { step: "01", title: "Discovery", desc: "We understand your requirements and goals", icon: Headphones },
    { step: "02", title: "Design", desc: "Create wireframes and design mockups", icon: Palette },
    { step: "03", title: "Development", desc: "Build your website with modern technologies", icon: Code },
    { step: "04", title: "Launch", desc: "Deploy, test, and launch your website", icon: Zap }
  ];

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "R-Pro Lite takes 1-2 weeks, R-Pro Start takes 2-3 weeks, and R-Pro Plus takes 3-4 weeks depending on complexity."
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes, all packages include maintenance for the specified period. After that, we offer affordable monthly maintenance plans starting from ₦10,000/month."
    },
    {
      question: "Can I update the website content myself?",
      answer: "Yes, all our websites come with a user-friendly content management system (WordPress) that allows you to update content easily without technical knowledge."
    },
    {
      question: "Is hosting included in the package?",
      answer: "Yes, all packages include premium hosting with 99.9% uptime guarantee, SSL certificate, and daily backups."
    },
    {
      question: "Do you provide training?",
      answer: "Yes, we provide comprehensive training on how to use and manage your website after launch."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, credit cards, and payment plans are available for larger projects."
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero with Background Image */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image5})` }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 via-blue-800/80 to-blue-700/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-center animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">Professional Website Packages</h1>
          <p className="text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
            Premium website solutions designed to accelerate your business growth
          </p>
          <button 
            onClick={() => window.open(`https://wa.me/2349069246577?text=Hello%20CyJust%20Deal!%20I%20want%20to%20discuss%20website%20packages`, '_blank')}
            className="px-12 py-5 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 active:scale-95 shadow-2xl hover:shadow-3xl text-lg"
          >
            Get Free Consultation
          </button>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">Choose Your Package</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-blue-800 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
              All packages include professional design, development, hosting, security, and ongoing support
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`rounded-3xl overflow-hidden border-2 transition-all duration-500 hover:-translate-y-3 ${
                  pkg.recommended 
                    ? 'border-blue-500 dark:border-blue-400 relative z-10 shadow-2xl' 
                    : 'border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl'
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute top-0 left-0 right-0 bg-linear-to-r from-blue-600 to-blue-800 text-white text-center py-3 text-sm font-bold uppercase tracking-wider">
                    ⭐ MOST POPULAR
                  </div>
                )}
                
                <div className={`p-10 ${pkg.recommended ? 'pt-16' : ''}`}>
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                      {pkg.name}
                    </h3>
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-5xl font-bold bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                        {pkg.price}
                      </span>
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 line-through mb-4">
                      {pkg.originalPrice}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="mb-10">
                    <ul className="space-y-4">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      const message = encodeURIComponent(pkg.whatsappMessage);
                      const whatsappUrl = `https://wa.me/2349069246577?text=${message}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                    className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl text-lg ${
                      pkg.recommended
                        ? 'bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
                        : 'bg-linear-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 hover:from-gray-900 hover:to-gray-950 text-white'
                    }`}
                  >
                    Get This Package
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Package Section */}
          <div className="bg-linear-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-12 mb-20 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                Need a Custom Solution?
              </h2>
              <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-blue-800 rounded-full mx-auto mb-6"></div>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
                Our custom packages are tailored to your specific requirements. Get exactly what you need with no compromises.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
                  Custom Package Includes:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Custom Web Application Development",
                    "API Integration",
                    "Database Design",
                    "Advanced Security Features",
                    "Custom Animations & Interactions",
                    "Third-party Service Integration",
                    "Advanced Analytics Dashboard",
                    "Multi-user Systems",
                    "Custom Payment Solutions",
                    "Ongoing Development & Updates",
                    "Custom Mobile App Development",
                    "Enterprise Solutions"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-10 shadow-2xl">
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                    Get a Custom Quote
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                    Contact us to discuss your project requirements and get a personalized quote with a detailed proposal.
                  </p>
                  <button
                    onClick={() => {
                      const message = encodeURIComponent("Hi CyJust Deal! I'm interested in a custom website package. Can we discuss my requirements?");
                      const whatsappUrl = `https://wa.me/2349069246577?text=${message}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                    className="w-full py-4 px-6 bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-bold transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl text-lg"
                  >
                    Request Custom Quote
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">Our Website Building Process</h2>
              <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-blue-800 rounded-full mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((process, idx) => (
                <div key={idx} className="text-center group">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <div className="relative">
                      <process.icon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                      <span className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-sm font-bold text-blue-600 dark:text-blue-400">
                        {process.step}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{process.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-linear-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-12 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-blue-800 rounded-full mx-auto mb-6"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-start gap-4">
                    <span className="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">Q</span>
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 pl-12">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto bg-linear-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 rounded-3xl p-16 shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to Start Your Project?</h2>
            <p className="text-2xl text-white/90 max-w-3xl mx-auto mb-12">
              Contact us today for a free consultation and let's build something amazing together.
            </p>
            <button 
              onClick={() => window.open(`https://wa.me/2349069246577?text=Hello%20CyJust%20Deal!%20I'm%20ready%20to%20start%20my%20website%20project`, '_blank')}
              className="px-16 py-6 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 active:scale-95 shadow-2xl hover:shadow-3xl text-xl"
            >
              Start Your Project Now
            </button>
          </div>
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
      action: 'tel:+2349069246577',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Address',
      info: 'info@cyjustdeal.com',
      action: 'mailto:info@cyjustdeal.com',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Location',
      info: 'Lagos, Nigeria',
      action: 'https://maps.google.com/?q=Lagos,Nigeria',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      info: '24/7 Customer Support',
      action: null,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero with Background Image */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image4})` }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-purple-900/90 via-purple-800/80 to-purple-700/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 text-center animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">Get in Touch</h1>
          <p className="text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            We're here to help! Reach out to us for any inquiries or collaborations
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-10">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-3 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-3 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-3 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                      placeholder="+234 906 924 6577"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-3 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-3 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                    placeholder="Your message here..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-5 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-bold transition-all duration-300 active:scale-95 shadow-xl hover:shadow-2xl text-lg"
                >
                  Send Message via WhatsApp
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-10">Contact Information</h2>
              <div className="space-y-8 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-6 p-8 bg-linear-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center shrink-0`}>
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">{info.title}</h3>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="text-xl text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                        >
                          {info.info}
                        </a>
                      ) : (
                        <p className="text-xl text-gray-600 dark:text-gray-400">{info.info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Quick Contact */}
              <div className="bg-linear-to-r from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-10 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Quick Contact via WhatsApp</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                  Click below to chat with us instantly on WhatsApp. Our team typically responds within minutes during business hours.
                </p>
                <button 
                  onClick={() => window.open(`https://wa.me/2349069246577?text=Hello%20CyJust%20Deal!%20I%20need%20assistance`, '_blank')}
                  className="w-full px-8 py-5 bg-linear-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-xl font-medium transition-all duration-300 active:scale-95 shadow-xl hover:shadow-2xl text-lg flex items-center justify-center gap-4"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                  </svg>
                  Chat on WhatsApp Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-linear-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">Visit Our Office</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-blue-800 rounded-full mx-auto mb-6"></div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl">
            <div className="h-96 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-700">
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-20 h-20 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
                  <p className="text-2xl text-gray-800 dark:text-white mb-4">Lagos, Nigeria</p>
                  <p className="text-gray-600 dark:text-gray-400">Available for appointments and consultations</p>
                </div>
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
    { name: 'Website Packages', page: 'website-packages' },
    { name: 'Contact', page: 'contact' }
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', url: 'https://facebook.com/cyjustdeal', color: 'hover:bg-blue-600' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/cyjustdeal', color: 'hover:bg-blue-400' },
    { icon: Instagram, label: 'Instagram', url: 'https://instagram.com/cyjustdeal', color: 'hover:bg-pink-600' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/company/cyjustdeal', color: 'hover:bg-blue-700' }
  ];

  return (
    <footer className="bg-linear-to-r from-gray-900 to-gray-950 text-white pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                <img src={logo} alt="CyJust Deal Logo" className="w-10 h-10" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">CyJust Deal</h2>
                <p className="text-sm text-gray-400">Best Deals Daily</p>
              </div>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Your trusted partner for quality products and digital solutions. We deliver excellence and innovation to help your business thrive.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-gray-800 ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl`}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-8 pb-4 border-b border-gray-800">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.page}`}
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-3 group"
                  >
                    <ChevronRight className="w-4 h-4 text-blue-400 group-hover:translate-x-2 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-8 pb-4 border-b border-gray-800">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-3">
                  <ChevronRight className="w-4 h-4 text-blue-400" />
                  {service.title}
                </li>
              ))}
              <li className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-3">
                <ChevronRight className="w-4 h-4 text-blue-400" />
                Website Development
              </li>
              <li className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-3">
                <ChevronRight className="w-4 h-4 text-blue-400" />
                Digital Marketing
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-8 pb-4 border-b border-gray-800">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone Number</p>
                  <a href="tel:+2349069246577" className="text-white hover:text-blue-300 transition-colors">+2349069246577</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-900 to-green-800 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-green-300" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email Address</p>
                  <a href="mailto:info@cyjustdeal.com" className="text-white hover:text-green-300 transition-colors">info@cyjustdeal.com</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Lagos, Nigeria</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-900 to-orange-800 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-300" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Business Hours</p>
                  <p className="text-white">24/7 Customer Support</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* WhatsApp Button - Fixed on Mobile */}
        <div className="fixed bottom-8 right-8 z-50 lg:hidden">
          <button 
            onClick={() => window.open(`https://wa.me/2349069246577?text=Hello%20CyJust%20Deal!%20I%20need%20assistance`, '_blank')}
            className="w-16 h-16 bg-linear-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300 active:scale-95 animate-bounce-slow"
            aria-label="Chat on WhatsApp"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
            </svg>
          </button>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-16 pt-12 text-center">
          <p className="text-gray-400 text-lg">
            &copy; {new Date().getFullYear()} CyJust Deal. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-4">
            Designed with ❤️ for Nigerian businesses and entrepreneurs
          </p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Load current page from URL hash on initial load
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash && ['home', 'products', 'about', 'services', 'website-packages', 'contact'].includes(hash)) {
      setCurrentPage(hash);
    }
  }, []);

  // Update URL hash when page changes
  useEffect(() => {
    window.history.replaceState({ page: currentPage }, '', `/#${currentPage}`);
  }, [currentPage]);

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
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
      case 'website-packages':
        return <WebsitePackagesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />
      <main className="scrollbar-hide">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;