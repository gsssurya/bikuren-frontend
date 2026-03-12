import React, { useState, useEffect } from 'react';
import { Mail, ExternalLink, ArrowRight, Info } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import './EmailVerificationPage.css'; // Mengimpor file CSS
import BikurenIcon from '../components/icons/BikurenIcon';
import { Link } from 'react-router';
import { RefreshCcw } from 'lucide-react';
import api from '../utils/api.util';
import VerifyEmailPage from './VerifyEmailPage';

function EmailVerificationPage ({payload}) {
  const localCountdown = localStorage.getItem('countdown');
  const [countdown, setCountdown] = useState(localCountdown? JSON.parse(localCountdown) : 60);
  const emailUser = {
    email: payload.email
  };
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        localStorage.setItem('countdown', countdown - 1);
        setCountdown(countdown - 1);
      }, 1000
      );
      return () => clearTimeout(timer);
    }
    
  }, [countdown]);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {

        const response = await api.post('/auth/check', emailUser);

        console.log("Checking...");

        if (response?.data?.verified === true) {
          console.log("User verified");
          setIsVerified(true);
          localStorage.removeItem('countdown');
          localStorage.removeItem('payload');

          clearInterval(intervalId);
        }

        if(!response?.data?.status == 'error'){
            navigate('/signin');
          }

      } catch (error) {
        console.log(error);
      }

    }, 3000);

    return () => clearInterval(intervalId);

  }, []);

  async function sendEmail() {
    try {
      localStorage.setItem('countdown', 60);
      setCountdown(60);
      const response = await api.post('/auth/signup', payload);
      if(response.status == 200){
        localStorage.setItem('countdown', 60);
        setCountdown(60);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return ( 
  <>
    {isVerified? <VerifyEmailPage statusDef='success'/> : 
    
    <div className="ev-container">
      <div className="logo"><BikurenIcon/></div>
      <div className="header">
        <h1>Check Your Email</h1>
        <p>We've sent a verification link to</p>
      </div>
      <p className="ev-email-display">{payload.email}</p>

      <div className="ev-card">
        <div className="ev-icon-wrapper">
          <div className="ev-icon-bg">
            <Mail size={40} color="#2B7FFF" />
          </div>
          <div className="ev-badge">1</div>
        </div>

        <h2 style={{fontSize: '24px', fontWeight: '700', marginBottom: '8px'}}>Email Sent!</h2>
        <p style={{fontSize: '14px', color: '#666', textAlign: 'center', marginBottom: '24px'}}>
          Click the verification link in your email to activate your account
        </p>

        {/*<div className="ev-steps-box">
          <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', fontWeight: '700', fontSize: '14px'}}>
            <Mail size={18} color="#2563eb" />
            <span>Verification Steps:</span>
          </div>
          <div className="ev-step-item">
            <span className="ev-step-number">1</span>
            <span>Open the email in your inbox</span>
          </div>
          <div className="ev-step-item">
            <span className="ev-step-number">2</span>
            <span>Look for an email from <strong style={{fontWeight:'600'}}>BIKUREN</strong></span>
          </div>
          <div className="ev-step-item">
            <span className="ev-step-number">3</span>
            <span>Click the <strong style={{fontWeight:'600'}}>"Verify Email"</strong> button</span>
          </div>
        </div>*/}

        <Link className='btn-open-email' target='_blank' to={'https://mail.google.com/'}>
          <button className="ev-btn ev-btn-primary">
              Open Email
          </button>

        </Link>

        <div style={{textAlign: 'center', fontSize: '13px', color: '#94a3b8'}}>
          {/*<p style={{ fontSize:'14px'}}>Didn't receive the email?</p>*/}
          {
            countdown == 0? <p className='underline-hover' style={{display:'flex', alignItems:'center', gap:'4px', cursor:'pointer', color: '#f97316', fontWeight: '600', fontSize:'14px'}} onClick={sendEmail}><RefreshCcw size={18} color='var(--orange-color)'/> Resend Verification Email</p> :
            <p style={{fontWeight:'400', fontSize:'14px', color:'#666'}}>Resend in <span style={{color: '#f97316', fontWeight: '600'}}>{countdown}s</span></p>

          }
        </div>

        {/*<div className="ev-tips-box">
          <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontWeight: '700', fontSize: '13px', color: '#ea580c'}}>
            <Info size={16} /> <span>Tips:</span>
          </div>
          <ul style={{fontSize: '12px', color: '#64748b', paddingLeft: '1rem', lineHeight: '1.6'}}>
            <li style={{marginBottom:'4px'}}>Check your <strong style={{fontWeight:'600'}}>Spam/Junk</strong> folder if it's not in your inbox</li>
            <li style={{marginBottom:'4px'}} >The verification link is valid for <strong style={{fontWeight:'600'}}>24 hours</strong></li>
            <li style={{marginBottom:'4px'}}>Make sure the email <strong style={{fontWeight:'600'}}>{payload.email}</strong> is correct</li>
          </ul>
        </div>*/}
      </div>

      <div style={{marginTop: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', fontSize: '14px'}}>
        <p style={{color: '#666'}}>Need help? <Link className='underline-hover' target='_blank' to={'/contact'} onClick={() => {
          window.scrollTo(0,0);
        }} style={{color: 'var(--orange-color)', cursor: 'pointer', fontWeight:'600'}}>Contact Support</Link></p>
      </div>
    </div>
    }
  </>
  );
};

export default EmailVerificationPage;