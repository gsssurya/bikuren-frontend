import { useEffect, useState, useMemo, useRef } from "react";
import { useParams } from 'react-router-dom';

import {
  CheckCircle,
  XCircle,
  AlertCircle,
  RefreshCw,
  ArrowRight,
  Mail,
} from "lucide-react";
import BikurenIcon from "../components/icons/BikurenIcon";
import "./VerifyEmailPage.css";
import { Link } from "react-router";
import api from "../utils/api.util";

const CONFETTI_COLORS = ["#f97316", "#22c55e", "#3b82f6", "#eab308", "#ec4899", "#8b5cf6"];

function VerifyEmailPage({statusDef}) {
    const [showConfetti, setShowConfetti] = useState(false);
    const [status, setStatus] = useState( statusDef || 'loading');
    const { id, token } = useParams();
        
    const called = useRef(false);

    useEffect(() => {
        document.title = 'Verification';

        if (called.current) return;
        called.current = true;

        const verifyEmail = async () => {
            try {
                const response = await api.get(`/auth/${id}/${token}`);

                if (response.status === 200) {
                    setStatus(response?.data?.status);
                }

            } catch (error) {
                setStatus(error?.response?.data?.status);
            }
        };

        if (id && token) {
            verifyEmail();
        }
    }, []);

    useEffect(() => {
        if (status !== "success") return;

        const start = setTimeout(() => {
            setShowConfetti(true);
        }, 0);

        const stop = setTimeout(() => {
            setShowConfetti(false);
        }, 4000);

        return () => {
            clearTimeout(start);
            clearTimeout(stop);
        };

    }, [status]);

    const getSafeRandom = () => {
        const array = new Uint32Array(1); 
        window.crypto.getRandomValues(array); 
        return array[0] / (0xffffffff + 1);
    };

    const confettiData = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        left: getSafeRandom() * 100,
        delay: getSafeRandom() * 2,
        duration: 2 + getSafeRandom() * 1,
        color: CONFETTI_COLORS[Math.floor(getSafeRandom() * CONFETTI_COLORS.length)],
    }));
}, []);

    const isExpired = status === "expired";
    const isAlreadyVerified = status === 'already';

    const renderContent = () => {
        switch (status) {
        case "loading":
            return (
                <div className="content-fade-in">
                    <div className="status-icon-wrapper loading">
                        <div className="micro-spinner" aria-label="loading"></div>
                    </div>
                    <h2 style={{fontSize: '24px', fontWeight: '700', color:'var(--slate-400)',backgroundColor:'var(--slate-400)', marginBottom:'8px'}} className="title loading">{isExpired ? "Link Kadaluarsa" : "Link Tidak Valid"}</h2>
                    <p style={{fontSize: '14px', color:'var(--slate-300)', backgroundColor:'var(--slate-300)'}} className="subtitle">{isExpired ? "Batas waktu 24 jam telah berakhir." : "Link rusak atau sudah digunakan."}</p>
                </div>
            )
        case "already":
        case "success":
            return (
            <div className="content-fade-in">
                <div className="status-icon-wrapper animate-bounce-in">

                    <div className={`icon-bg-outer ${!isAlreadyVerified? 'success' : 'already'}`}>
                        <div className={`icon-bg-inner ${!isAlreadyVerified? 'success' : 'already'}`}>
                        <CheckCircle className="icon-svg" strokeWidth={2.5} />
                        </div>
                    </div>
                    {!isAlreadyVerified? <>
                        <div className="particle p1 animate-ping"></div>
                        <div className="particle p2 animate-ping"></div>
                        <div className="particle p3 animate-ping"></div>
                        <div className="sparkle s1">✨</div>
                    </>  : ''
                    }
                    {/* Decorative Particles */}
                </div>
                
                <h2 style={{fontSize: '24px', fontWeight: '700', color:'var(--font-color)', marginBottom:'8px'}} className="title">
                    {!isAlreadyVerified? 'Verification Complete!' : 'Your Email has been Verified!'}
                </h2>
                <p style={{fontSize:'14px', color:'rgb(102, 102, 102)', marginBottom:'24px'}} className="subtitle">{!isAlreadyVerified? 'Success! Your account has been activated and is ready for use.' : 'Your email has already been verified. Please sign in to your account.'}</p>

                <Link to='/signin'>
                    <button className="btn-primary">
                       Sign In
                    <ArrowRight className="btn-icon" />
                    </button>
                
                </Link>
            </div>
            );
        
        case "expired":
        case "invalid-token":
        default:
            return (
            <div className="content-fade-in">
                <div className="status-icon-wrapper">
                <div className={`icon-bg-outer ${isExpired ? 'warning' : 'danger'}`}>
                    <div className={`icon-bg-inner ${isExpired ? 'warning' : 'danger'}`}>
                    {isExpired ? <AlertCircle className="icon-svg" /> : <XCircle className="icon-svg" />}
                    </div>
                </div>
                </div>
                <h2 style={{fontSize: '24px', fontWeight: '700', color:'var(--font-color)', marginBottom:'8px'}} className="title">{isExpired ? "Link Expired" : "Invalid Verification Link"}</h2>
                <p style={{fontSize: '14px', color:'rgb(102, 102, 102)'}} className="subtitle">{isExpired ? "Your link is no longer valid as the 24-hour limit has passed. Please try again." : "This link is no longer valid. It may be broken or has already been used to verify your account."}</p>
            </div>
            );
        }
    };

    return (
        <div className="page-container-verify no-select">
        {showConfetti && (
            <div className="confetti-holder">
            {confettiData.map((data) => (
                <div key={data.id} className="confetti-piece" style={{
                left: `${data.left}%`,
                backgroundColor: data.color,
                animationDelay: `${data.delay}s`,
                animationDuration: `${data.duration}s`,
                }} />
            ))}
            </div>
        )}

        <div className="card-wrapper">
            <div className="header-section verify">
                <div className="logo">
                    <BikurenIcon/>
                </div>
            <h1 className="main-title">Email Verification</h1>
            </div>

            <div className={`main-card ${status === 'success' ? 'scale-in' : ''}`}>
            {renderContent()}
            </div>
        </div>
        </div>
    );
}

export default VerifyEmailPage;