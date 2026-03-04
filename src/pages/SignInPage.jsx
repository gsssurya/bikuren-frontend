import './SignInPage.css';
import { useEffect, useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import api from '../utils/api.util';
import BikurenIcon from '../components/icons/BikurenIcon';

function SignInPage ({ user }) {
  
  const [signed, setSigned] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (user?.id) {
      setSigned(true);
      navigate('/');
    } else {
      setSigned(false);
    }
  }, [user]);

  async function handleSubmit (e) {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
      remember: remember
    };

    try {
      const response = await api.post('/auth/signin', payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        window.scroll(0, 0);
        localStorage.setItem('user', JSON.stringify(response.data.data.user));
        setSigned(true);

        setTimeout(() => {
          navigate('/');
        }, 1500)
      }

    } catch (err) {
      if (err.response?.data?.error?.type === "VALIDATION_ERROR"){
        const errors = {};
        
        err.response.data.error.details.forEach(e => {
          errors[e.field] = e.message;
        });

        setFormErrors(errors);

        setTimeout(() => {
          setFormErrors({});
        }, 2000)
      } else {
        navigate('/');
      }
    }
  };

  return (
    <div className="container-signin">
      <div className="logo">
        <BikurenIcon/>
      </div>

      <div className="header">
        <h1>Welcome!</h1>
        <p>Sign in to your account to proceed</p>
      </div>

      <div className="card">
        <form>
          <div className="form-group">
            <label>Email</label>
            <div className="input-wrapper email">
              <Mail className='icon' size={18} />
              <input
                className={formErrors.email && 'error'} 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {formErrors.email && <p className='error-message'>{formErrors.email}</p>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="input-wrapper">
              <Lock className='icon' size={18} />
              <input
                className={formErrors.password && 'error'} 
                type={!showPw? 'password' : 'text'} 
                placeholder="Enter your password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {
                showPw? <EyeOff size={18} className="password-toggle" onClick={() => {
                  setShowPw(!showPw);
                }}
                /> : <Eye size={18} className="password-toggle" onClick={() => {
                  setShowPw(!showPw);
                }}/>
              }
            </div>
            {formErrors.password && <p className='error-message'>{formErrors.password}</p>}
          </div>

          <div className="form-options">
            <div className="checkbox-group">
              <input onClick={() => {
                setRemember(!remember);
              }} type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <button 
            type={!signed? "submit" : 'button'} 
            className={signed? 'btn-login signed' : "btn-login"}
            onClick={!signed? handleSubmit : null}
          >
            Sign In
          </button>
        </form>

        <div className="divider">
          <span>Or sign in with</span>
        </div>

        <div className="social-login">
          <button className="social-btn">
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18" alt="Google" />
            Google
          </button>
        </div>
      </div>

      <p className="footer-text">
        Don’t have an account? <a href="/signup">Sign up</a>
      </p>

      {signed? <div className='pop-up-container'>
          <div className='pop-up-signin'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_261_292)">
              <path d="M18.3327 9.2333V9.99997C18.3317 11.797 17.7498 13.5455 16.6738 14.9848C15.5978 16.4241 14.0854 17.477 12.3621 17.9866C10.6389 18.4961 8.79707 18.4349 7.11141 17.8121C5.42575 17.1894 3.98656 16.0384 3.00848 14.5309C2.0304 13.0233 1.56584 11.24 1.68408 9.4469C1.80232 7.65377 2.49702 5.94691 3.66458 4.58086C4.83214 3.21482 6.41 2.26279 8.16284 1.86676C9.91568 1.47073 11.7496 1.65192 13.391 2.3833" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.3333 3.33325L10 11.6749L7.5 9.17492" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_261_292">
              <rect width="20" height="20" fill="white"/>
              </clipPath>
              </defs>
              </svg>
              <p>
                Sign in success!
              </p>
          </div>
      </div> : '' }
      
    </div>
  );
};

export default SignInPage;