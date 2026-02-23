import './ContactPage.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FAQList from '../components/FAQList';
import rentalMotorcycleFAQ from '../../public/rentalMotorcycleFAQ'

function ContactPage(){
  
  return (
    <>
      <Header/>

      <main className="contact">
        <div className="text-box">
          <h1>Contact Us</h1>

          <p>
            Have any questions? Our team is available 24/7 to assist you. Feel free to reach out to us through any of our available channels.
          </p>
        </div>

        <div className="sosmed-card-box">
          <a className="sosmed-card wa" href='https://wa.me/+6285858909657' target='_blank'>
            <div className="icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.99022 21.7893C4.18628 22.2838 4.22992 22.8257 4.11556 23.3453L2.69556 27.7319C2.6498 27.9544 2.66163 28.1848 2.72992 28.4014C2.79822 28.6181 2.92071 28.8136 3.08578 28.9696C3.25085 29.1256 3.45304 29.2368 3.67316 29.2928C3.89328 29.3487 4.12404 29.3475 4.34356 29.2893L8.89422 27.9586C9.38451 27.8613 9.89226 27.9038 10.3596 28.0813C13.2067 29.4109 16.432 29.6922 19.4664 28.8755C22.5008 28.0589 25.1493 26.1968 26.9445 23.6177C28.7397 21.0387 29.5664 17.9085 29.2786 14.7793C28.9909 11.6502 27.6072 8.72321 25.3716 6.51485C23.1361 4.30648 20.1925 2.95864 17.0601 2.70911C13.9276 2.45959 10.8077 3.32443 8.25081 5.15104C5.69389 6.97764 3.86427 9.64864 3.08475 12.6928C2.30523 15.7369 2.62592 18.9585 3.99022 21.7893Z"
                  stroke="white"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 translate='no'>WhatsApp</h1>

            <p>Chat directly with our customer service team</p>

            <h2 translate='no'>+62 858-5890-9657</h2>

            <h3>Click to Chat</h3>
          </a>
          <a className="sosmed-card gmail" href='mailto:krisnawidiatmika17@gmail.com'>
            <div className="icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.3327 9.33325L17.3447 16.9693C16.9379 17.2055 16.4758 17.33 16.0053 17.33C15.5349 17.33 15.0728 17.2055 14.666 16.9693L2.66602 9.33325"
                  stroke="white"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.666 5.33325H5.33268C3.85992 5.33325 2.66602 6.52716 2.66602 7.99992V23.9999C2.66602 25.4727 3.85992 26.6666 5.33268 26.6666H26.666C28.1388 26.6666 29.3327 25.4727 29.3327 23.9999V7.99992C29.3327 6.52716 28.1388 5.33325 26.666 5.33325Z"
                  stroke="white"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 translate='no'>Email</h1>

            <p>Send detailed inquiries via email</p>

            <h2 translate='no'>krisnawidiatmika17@gmail.com</h2>

            <h3>Click to Email</h3>
          </a>
          <a className="sosmed-card ig" href='https://www.instagram.com/biku.rent/' target='_blank'>
            <div className="icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.666 2.66675H9.33268C5.65078 2.66675 2.66602 5.65152 2.66602 9.33342V22.6667C2.66602 26.3486 5.65078 29.3334 9.33268 29.3334H22.666C26.3479 29.3334 29.3327 26.3486 29.3327 22.6667V9.33342C29.3327 5.65152 26.3479 2.66675 22.666 2.66675Z"
                  stroke="white"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.3336 15.1599C21.4981 16.2696 21.3086 17.4029 20.7919 18.3986C20.2753 19.3943 19.4578 20.2018 18.4558 20.7061C17.4537 21.2105 16.3182 21.386 15.2106 21.2078C14.1031 21.0296 13.0799 20.5067 12.2867 19.7135C11.4935 18.9202 10.9706 17.8971 10.7924 16.7895C10.6141 15.682 10.7897 14.5464 11.294 13.5444C11.7984 12.5424 12.6058 11.7249 13.6016 11.2082C14.5973 10.6916 15.7306 10.502 16.8403 10.6666C17.9722 10.8344 19.0201 11.3619 19.8292 12.171C20.6383 12.9801 21.1657 14.028 21.3336 15.1599Z"
                  stroke="white"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.334 8.66675H23.3473"
                  stroke="white"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 translate='no'>Instagram</h1>

            <p>Follow us for the latest updates and promotions</p>

            <h2 translate='no'>@biku.rent</h2>

            <h3>Click to Follow</h3>
          </a>
        </div>

        <div className="more-info-box">
          <h1>More Information</h1>
          <div className="more-info-card-box">
            <div>
              <div className="icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                    stroke="#F54900"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                    stroke="#F54900"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="more-info">
                <h1>Address</h1>
                <p>Jl. Canggu No. 88 Badung, Bali 80361 Indonesia</p>
              </div>
            </div>
            <div>
              <div className="icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.832 16.568C14.0385 16.6628 14.2712 16.6845 14.4917 16.6294C14.7122 16.5744 14.9073 16.4458 15.045 16.265L15.4 15.8C15.5863 15.5516 15.8279 15.35 16.1056 15.2111C16.3833 15.0723 16.6895 15 17 15H20C20.5304 15 21.0391 15.2107 21.4142 15.5858C21.7893 15.9609 22 16.4696 22 17V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22C15.2261 22 10.6477 20.1036 7.27208 16.7279C3.89642 13.3523 2 8.7739 2 4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H7C7.53043 2 8.03914 2.21071 8.41421 2.58579C8.78929 2.96086 9 3.46957 9 4V7C9 7.31049 8.92771 7.61672 8.78885 7.89443C8.65 8.17214 8.44839 8.41371 8.2 8.6L7.732 8.951C7.54842 9.09118 7.41902 9.29059 7.36579 9.51535C7.31256 9.74012 7.33878 9.97638 7.44 10.184C8.80668 12.9599 11.0544 15.2048 13.832 16.568Z"
                    stroke="#F54900"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="more-info">
                <h1>Phone</h1>
                <p>+62 858-5890-9657</p>
              </div>
            </div>
            <div>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F54900"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-clock w-6 h-6 text-orange-600"
                  aria-hidden="true"
                  data-fg-bdoq80=":57.11004:/components/ContactsPage.tsx:171:15:7705:45:e:Clock::::::EGEm"
                >
                  <path d="M12 6v6l4 2"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <div className="more-info">
                <h1>Operating Hours</h1>
                <p>07:00 - 22:00 (WITA)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="faq-box">
          <div className="text">
            <h1>Frequently Asked Questions</h1>
            <p>Find answers to common questions about our services</p>
          </div>

          <div className="faq-list-box">
            { rentalMotorcycleFAQ.map((faq, index) => {
              return(
                <FAQList
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              )
            }) }
          </div>

          <div className="any-question-box">
            <h1>Have any questions?</h1>
            <p>
              Feel free to reach out to our team. We’re here to help!
            </p>

            <div className='any-question'>
              <a href="https://wa.me/+6285858909657" target='_blank'>
                <button className="wa">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-message-circle w-5 h-5"
                    aria-hidden="true"
                    data-fg-bdoq117=":57.11004:/components/ContactsPage.tsx:243:15:10527:37:e:MessageCircle::::::DDY7"
                  >
                    <path
                      d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
                    ></path>
                  </svg>
                  Contact us via WhatsApp
                </button>
              </a>
              <a href="mailto:krisnawidiatmika17@gmail.com" target='_blank'>
                <button className="email">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail w-5 h-5"
                    aria-hidden="true"
                    data-fg-bdoq120=":57.11004:/components/ContactsPage.tsx:250:15:10870:28:e:Mail::::::D4VR"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg>
                  Contact Us by Email
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer/>
    </>
  )
}

export default ContactPage;