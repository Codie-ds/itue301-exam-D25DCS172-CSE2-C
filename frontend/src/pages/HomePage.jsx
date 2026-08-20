import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Reveal from '../components/Reveal';
import DoctorCard from '../components/DoctorCard';
import './HomePage.css';

const HomePage = () => {
  const heroRef = useRef(null);
  const heroImageRef = useRef(null);
  const faqRef = useRef(null);
  
  const [activeFaq, setActiveFaq] = useState(null);

  useGSAP(() => {
    // Hero Text Animation
    const heroLines = gsap.utils.toArray('.hero-line-inner');
    gsap.fromTo(heroLines, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power4.out', delay: 0.5 }
    );

    // Hero Image Parallax
    gsap.to(heroImageRef.current, {
      yPercent: 20,
      scale: 1.05,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    // How It Works Steps Animation
    const steps = gsap.utils.toArray('.step-item');
    steps.forEach((step, i) => {
      gsap.fromTo(step, 
        { opacity: 0.2, x: -50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 70%',
            end: 'bottom 50%',
            scrub: true
          }
        }
      );
    });

  }, { scope: heroRef });

  const faqs = [
    { q: "How do I book an appointment?", a: "You can book an appointment directly through our Booking page. Simply select a doctor, choose an available date, and pick a time slot that works for you." },
    { q: "How can I find an available doctor?", a: "Visit our Doctors page to view a list of our specialists. Their current availability is clearly marked on their profile." },
    { q: "Can I cancel an appointment?", a: "Yes, you can cancel or reschedule appointments up to 24 hours in advance by contacting our support team." },
    { q: "How do I choose a time slot?", a: "During the booking process, our system will display all available time slots for your selected doctor on your chosen date." }
  ];

  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero" ref={heroRef}>
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-heading">
              <div className="hero-line"><span className="hero-line-inner">HEALTHCARE</span></div>
              <div className="hero-line"><span className="hero-line-inner">SHOULD FEEL</span></div>
              <div className="hero-line"><span className="hero-line-inner">HUMAN.</span></div>
            </h1>
            
            <Reveal delay={1}>
              <div className="hero-actions">
                <Link to="/booking" className="btn-primary">
                  BOOK AN APPOINTMENT <ArrowRight size={18} />
                </Link>
                <a href="#specialists" className="btn-secondary">
                  EXPLORE DOCTORS
                </a>
              </div>
            </Reveal>
          </div>
          
          <div className="hero-image-wrapper">
            <Reveal delay={0.8} y={40}>
              <div className="hero-image" ref={heroImageRef}></div>
              <div className="hero-meta">
                <div className="meta-item">
                  <span className="micro-label">AVAILABILITY</span>
                  <p>24/7 CARE</p>
                </div>
                <div className="meta-item">
                  <span className="micro-label">TEAM</span>
                  <p>QUALIFIED SPECIALISTS</p>
                </div>
                <div className="meta-item">
                  <span className="micro-label">EXPERIENCE</span>
                  <p>SEAMLESS BOOKING</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section introduction">
        <div className="container intro-container">
          <Reveal>
            <h2 className="section-heading intro-heading">
              BETTER CARE<br />
              STARTS WITH<br />
              THE RIGHT<br />
              CONNECTION.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="body-text intro-text">
              We believe that finding the right doctor and managing your health should be as seamless and modern as the care you receive. Our platform connects you with top specialists effortlessly.
            </p>
          </Reveal>
          <Reveal delay={0.4} y={120}>
            <div className="intro-image"></div>
          </Reveal>
        </div>
      </section>

      {/* SPECIALISTS */}
      <section id="specialists" className="section specialists">
        <div className="container">
          <Reveal>
            <h2 className="section-heading">MEET YOUR<br />SPECIALISTS.</h2>
          </Reveal>
          
          <div className="specialists-grid">
            <Reveal delay={0.1} stagger={0.15}>
              <DoctorCard index={1} doctor={{ name: "DR. RAHUL SHAH", specialization: "CARDIOLOGIST", availability: true }} />
            </Reveal>
            <Reveal delay={0.2} stagger={0.15}>
              <DoctorCard index={2} doctor={{ name: "DR. ANITA DESAI", specialization: "NEUROLOGIST", availability: true }} />
            </Reveal>
            <Reveal delay={0.3} stagger={0.15}>
              <DoctorCard index={3} doctor={{ name: "DR. SAMIR PATEL", specialization: "ORTHOPEDIC", availability: false }} />
            </Reveal>
          </div>
          
          <Reveal>
            <div className="view-all-container">
              <Link to="/doctors" className="btn-secondary view-all-btn">VIEW ALL SPECIALISTS</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section how-it-works">
        <div className="container hiw-container">
          <Reveal>
            <div className="hiw-title-area">
              <span className="micro-label">PROCESS</span>
              <h2 className="section-heading">YOUR JOURNEY<br />TO BETTER HEALTH</h2>
            </div>
          </Reveal>
          
          <div className="hiw-steps">
            <div className="step-item">
              <span className="step-number">01</span>
              <h3 className="step-title">FIND A DOCTOR</h3>
              <p className="body-text">Browse our network of qualified specialists to find the right match for your health needs.</p>
            </div>
            <div className="step-item">
              <span className="step-number">02</span>
              <h3 className="step-title">CHOOSE A TIME</h3>
              <p className="body-text">Select a convenient time slot that fits your schedule perfectly.</p>
            </div>
            <div className="step-item">
              <span className="step-number">03</span>
              <h3 className="step-title">BOOK YOUR VISIT</h3>
              <p className="body-text">Confirm your appointment in one click and receive immediate confirmation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / TESTIMONIALS */}
      <section className="section trust">
        <div className="container trust-container">
          <Reveal>
            <h2 className="trust-quote">
              "GOOD HEALTHCARE<br />
              STARTS WITH<br />
              BEING HEARD."
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="trust-author">— SARAH JENKINS, PATIENT</p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq" ref={faqRef}>
        <div className="container faq-container">
          <Reveal>
            <h2 className="section-heading faq-title">FREQUENTLY<br />ASKED QUESTIONS</h2>
          </Reveal>
          
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <Reveal key={idx} delay={0.1 * idx}>
                <div 
                  className={`faq-item ${activeFaq === idx ? 'active' : ''}`}
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <div className="faq-question">
                    <h3>{faq.q}</h3>
                    <ChevronDown className="faq-icon" size={20} />
                  </div>
                  <div className="faq-answer">
                    <p className="body-text">{faq.a}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section final-cta">
        <div className="ecg-bg"></div>
        <div className="container final-cta-container">
          <Reveal>
            <h2 className="final-cta-heading">READY WHEN<br />YOU ARE.</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="final-cta-text">Find your doctor. Choose your time. Take the next step.</p>
          </Reveal>
          <Reveal delay={0.4}>
            <Link to="/booking" className="btn-primary final-btn">
              BOOK APPOINTMENT <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
