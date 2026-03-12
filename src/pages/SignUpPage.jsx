import './SignUpPage.css';
import 'react-phone-number-input/style.css';
import { useEffect, useState, } from 'react';
import { Mail, Lock, Eye, EyeOff, User, MapPin, Globe, CreditCard, Home } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import api from '../utils/api.util';
import BikurenIcon from '../components/icons/BikurenIcon';
import PhoneInput from 'react-phone-number-input';
import { CountrySelect, GetCountries } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import scrollToElError from '../utils/scrollToError';
import EmailVerificationPage from './EmailVerificationPage';

function SignUpPage({ user, appLoad, setAppLoad }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    passport: '',
    roomVillaNumber: '',
    address: '',
    password: '',
    confirmPassword: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [showPw, setShowPw] = useState(false);
  const [showPwConfirm, setShowPwConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [isCountryFocused, setIsCountryFocused] = useState(false);
  const [country, setCountry] = useState(true);
  const [countryId, setCountryId] = useState('');
  const payload = localStorage.getItem('payload');
  const [isVerify, setIsVerify] = useState(payload? true : false);
  const [showPopUp, setShowPopUp] = useState(false);
  
  useEffect(() => {
    document.title = 'Sign Up';
    if(user && !appLoad){
      navigate('/');
    }
  }, [appLoad])
  
  useEffect(() => {
    const detectAndSetCountry = async () => {
      try {
        const allCountries = await GetCountries();
        const locale = navigator.language || navigator.userLanguage;
        
        if (locale) {
          setCountryId(locale.toUpperCase()); 
          const regionCode = locale.split('-')[1] || locale.split('_')[1] || locale;
          const detected = allCountries.find(
            (c) => c.iso2.toUpperCase() === regionCode.toUpperCase()
          );

          if (detected) {
            setCountry(detected.name);        
          }
        }
      } catch (error) {
        console.error("Gagal mendeteksi negara:", error);
      }
    };
    detectAndSetCountry();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  async function handleSubmit(e){
    if(appLoad){
      return;
    }
    e.preventDefault();
    setFormErrors({});

    if (formData.password !== formData.confirmPassword) {
      setFormErrors({ confirmPassword: "Password do not match" });
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      country: country,
      passport: formData.passport,
      room_number: formData.roomVillaNumber,
      address: formData.address,
      password: formData.password
    };

    if(country == 'Indonesia'){
      payload.passport = '000000';  
    }

    try {
      window.scrollTo(0,0);
      setAppLoad(true);
      setShowPopUp(true);
      const response = await api.post('/auth/signup', payload);
      if(response.status == 200){
        localStorage.setItem('payload', JSON.stringify(payload));
        setFormData(payload);
        window.scrollTo(0, 0);
        setIsVerify(true);
        setAppLoad(false);
        setShowPopUp(false);
      }
    } catch (error) {
      setAppLoad(false);
      setShowPopUp(false);
      if (error.response) {
        console.log("Status Code:", error.response.status);

      if (error.response.data.error?.details) {
        const newErrors = {};
        error.response.data.error.details.forEach(err => {
          let fieldName = err.field;
          newErrors[fieldName] = err.message;
        });
        setFormErrors(newErrors);

        scrollToElError(newErrors);
        setTimeout(() => {
          setFormErrors({});
        }, 3500)
      }
      }
    }
  };

  return (
  
    <>
      {
        isVerify? <EmailVerificationPage
          payload={payload? JSON.parse(payload) : formData}
        /> :
        <div className="container-signup">
          <div className="logo"><BikurenIcon/></div>
          <div className="header">
            <h1 className='no-select'>Create Account</h1>
            <p className='no-select'>Sign up to start renting a motorcycle on Bikuren</p>
          </div>

          <div className="card">
            <form onSubmit={handleSubmit}>
              
              {/* ... Input lainnya (Name, Email, Phone, Country, dll tetap sama) ... */}
              <div className="form-group">
                <label>Name*</label>
                <div className="input-wrapper">
                  <User className='icon' size={18} />
                  <input className={formErrors.name && 'error'} name="name" type="text" placeholder="Full Name" value={formData.name} onChange={handleChange} />
                </div>
                {formErrors.name && <p className='error-message'>{formErrors.name}</p>}
              </div>

              <div className="form-group">
                <label>Email*</label>
                <div className="input-wrapper">
                  <Mail className='icon' size={18} />
                  <input className={formErrors.email && 'error'} name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
                </div>
                {formErrors.email && <p className='error-message'>{formErrors.email}</p>}
              </div>

              <div className="form-group-phone">
                <label>Phone*</label>
                <div className={`input-wrapper-phone ${formErrors.phone ? 'error' : ''}`}>
                  <PhoneInput
                    international
                    defaultCountry={countryId || 'ID'}
                    placeholder="Your Phone Number"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={(value) => {
                      // Karena library ini mengembalikan value langsung (bukan event), 
                      // kita panggil setFormData secara manual
                      setFormData(prev => ({ ...prev, phone: value }));
                      if (formErrors.phone) {
                        setFormErrors(prev => ({ ...prev, phone: null }));
                      }
                    }}
                  />
                </div>
                {formErrors.phone && <p className='error-message'>{formErrors.phone}</p>}
              </div>

              <div className="form-group">
                <label>Country*</label>
                <div className={isCountryFocused? 'input-wrapper show': 'input-wrapper'}>
                  <Globe className='icon globe' size={18} />
                  <CountrySelect
                    onChange={(e) => {
                      if(e.name){
                        setCountry(e.name);
                      } else {
                        setCountry(null);
                      }
                    }}
                    onClick={(e) => {
                      if(isCountryFocused){
                        e.currentTarget.blur();
                      }
                      setIsCountryFocused(!isCountryFocused);
                    }} 
                    defaultValue={country}
                    placeHolder="Select Your Country"
                    showFlag={false}
                    name='country'
                    onBlur={(e) => {
                      if(e.name){
                        setCountry(e.name);
                      } else {
                        setCountry(e.target.value);
                      }
                    }}
                    onKeyDown={(e) => {
                      if(e.code == 'Enter'){
                        setIsCountryFocused(false);
                        e.currentTarget.blur();
                      } else {
                        setIsCountryFocused(true);
                        
                      }
                    }}
                    containerClassName={isCountryFocused? 'show': ''}
                    inputClassName={formErrors.country && 'error'}
                    autoComplete='new-password'
                  />
                </div>
                {formErrors.country && <p className='error-message'>{formErrors.country}</p>}
              </div>

              {
                country == 'Indonesia'? '' : <>
                  <div className="form-group">
                    <label>Passport Number*</label>
                    <div className="input-wrapper">
                      <CreditCard className='icon' size={18} />
                      <input className={formErrors.passport && 'error'} name="passport" type="text" placeholder="Passport Number" value={formData.passportNumber} onChange={(e) => setFormData({ ...formData, passport: e.target.value })} />
                    </div>
                    {formErrors.passport && <p className='error-message'>{formErrors.passport}</p>}
                  </div>

                  <div className="form-group">
                    <label>Room/Villa Number</label>
                    <div className="input-wrapper">
                      <Home className='icon' size={18} />
                      <input name="roomVillaNumber" type="text" placeholder="Room/Villa Number" value={formData.roomVillaNumber} onChange={handleChange} />
                    </div>
                  </div>
                </>
              }

              <div className="form-group">
                <label>{country != 'Indonesia'? 'Room/Villa Address' : 'Address'}*</label>
                <div className="input-wrapper">
                  <MapPin className='icon' size={18} />
                  <input className={formErrors.address && 'error'} name="address" type="text" placeholder={`Your ${country != 'Indonesia'? 'room/villa address' : 'address'}`} value={formData.address} onChange={handleChange} autoComplete='new-password'/>
                </div>
                {formErrors.address && <p className='error-message'>{formErrors.address}</p>}
              </div>

              {/* Password */}
              <div className="form-group">
                <label>Password*</label>
                <div className="input-wrapper">
                  <Lock className='icon' size={18} />
                  <input 
                    className={formErrors.password && 'error'}
                    name="password"
                    autoComplete='new-password'
                    type={showPw ? 'text' : 'password'} 
                    placeholder="Create password" 
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {showPw ? <EyeOff size={18} className="password-toggle" onClick={() => setShowPw(!showPw)} /> : <Eye size={18} className="password-toggle" onClick={() => setShowPw(!showPw)}/>}
                </div>
                {formErrors.password && <p className='error-message'>{formErrors.password}</p>}
              </div>

              {/* Confirm Password (Baru) */}
              <div className="form-group">
                <label>Confirm Password*</label>
                <div className="input-wrapper">
                  <Lock className='icon' size={18} />
                  <input 
                    name="confirmPassword"
                    className={formErrors.confirmPassword ? 'error' : ''}
                    type={showPwConfirm ? 'text' : 'password'} 
                    placeholder="Re-enter password" 
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    autoComplete='nope'
                  />
                  {showPwConfirm ? 
                    <EyeOff size={18} className="password-toggle" onClick={() => setShowPwConfirm(!showPwConfirm)} /> : 
                    <Eye size={18} className="password-toggle" onClick={() => setShowPwConfirm(!showPwConfirm)}/>}
                </div>
                {formErrors.confirmPassword && <p className='error-message'>{formErrors.confirmPassword}</p>}
              </div>

              <div className="form-options">
                <div className="checkbox-group">
                  <input type="checkbox" id="remember" checked={agreed} onChange={() => setAgreed(!agreed)} />
                  <label htmlFor="remember">I agree to the Terms and Conditions</label>
                </div>
              </div>

              <button type={agreed? 'submit' : 'button'} className={agreed? 'btn-login' : 'btn-login off'}>Sign Up</button>
            </form>

            <div className="divider"><span>Or sign up with</span></div>
            <div className="social-login">
              <button className="social-btn">
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18" alt="Google" /> Google
              </button>
            </div>
          </div>

          <p className="footer-text">
            Already have an account? <a href="/signin">Sign in</a>
          </p>

               {showPopUp? <div className='pop-up-container'>
          <div className='pop-up-signin'>
              {!appLoad? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_261_292)">
              <path d="M18.3327 9.2333V9.99997C18.3317 11.797 17.7498 13.5455 16.6738 14.9848C15.5978 16.4241 14.0854 17.477 12.3621 17.9866C10.6389 18.4961 8.79707 18.4349 7.11141 17.8121C5.42575 17.1894 3.98656 16.0384 3.00848 14.5309C2.0304 13.0233 1.56584 11.24 1.68408 9.4469C1.80232 7.65377 2.49702 5.94691 3.66458 4.58086C4.83214 3.21482 6.41 2.26279 8.16284 1.86676C9.91568 1.47073 11.7496 1.65192 13.391 2.3833" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.3333 3.33325L10 11.6749L7.5 9.17492" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_261_292">
              <rect width="20" height="20" fill="white"/>
              </clipPath>
              </defs>
              </svg> : <div className="micro-spinner" aria-label="loading"></div> }
              <p>
                { appLoad? 'Loading...' : 'Sign in success!'}
              </p>
          </div>
      </div> : '' }
        </div>

      }
    </>
  );
}

export default SignUpPage;