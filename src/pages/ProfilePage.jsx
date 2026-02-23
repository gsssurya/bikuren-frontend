import './ProfilePage.css'
import Header from "../components/Header"

function ProfilePage(){
  return (
    <>
      <Header/>
      <main className="profile">
      <div className="title-profile">
        <h1>Profile Saya</h1>
        <p>Kelola informasi profile Anda untuk meningkatkan keamanan akun</p>
      </div>

      <div className="information-box">
        <div className="banner-profile">
          <div className="box-img">
            <img src="/" alt="" />
          </div>
        </div>
        <div className="detail-info-box">
          <div className="name-email-box">
            <div>
              <h1>John Doe</h1>
              <p>johndfsdf@gmail.com</p>
            </div>
            <button>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.4486 3.875C13.8011 3.52262 13.9992 3.04465 13.9992 2.54624C13.9993 2.04783 13.8014 1.56981 13.449 1.21734C13.0966 0.864863 12.6186 0.666811 12.1202 0.666748C11.6218 0.666686 11.1438 0.864618 10.7913 1.217L1.89397 10.1163C1.73918 10.2707 1.62471 10.4607 1.56064 10.6697L0.679972 13.571C0.662742 13.6287 0.661441 13.6899 0.676206 13.7482C0.690971 13.8066 0.721252 13.8598 0.763836 13.9023C0.80642 13.9449 0.859719 13.975 0.918078 13.9897C0.976436 14.0044 1.03768 14.003 1.09531 13.9857L3.99731 13.1057C4.20609 13.0422 4.39609 12.9284 4.55064 12.7743L13.4486 3.875Z"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              Edit Profile
            </button>
          </div>
          <div className="responsif-box">
            <div>
              <div className="each-detail-box">
                <p>Nomor Telepon</p>
                <div className="input-box">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.526 13.8067C11.6981 13.8858 11.892 13.9038 12.0758 13.8579C12.2595 13.8121 12.4221 13.7049 12.5368 13.5542L12.8327 13.1667C12.9879 12.9598 13.1892 12.7917 13.4207 12.676C13.6521 12.5603 13.9073 12.5001 14.166 12.5001H16.666C17.108 12.5001 17.532 12.6757 17.8445 12.9882C18.1571 13.3008 18.3327 13.7247 18.3327 14.1667V16.6667C18.3327 17.1088 18.1571 17.5327 17.8445 17.8453C17.532 18.1578 17.108 18.3334 16.666 18.3334C12.6878 18.3334 8.87246 16.7531 6.05941 13.94C3.24637 11.127 1.66602 7.31166 1.66602 3.33341C1.66602 2.89139 1.84161 2.46746 2.15417 2.1549C2.46673 1.84234 2.89065 1.66675 3.33268 1.66675H5.83268C6.27471 1.66675 6.69863 1.84234 7.01119 2.1549C7.32375 2.46746 7.49935 2.89139 7.49935 3.33341V5.83341C7.49935 6.09216 7.43911 6.34734 7.32339 6.57877C7.20768 6.8102 7.03968 7.0115 6.83268 7.16675L6.44268 7.45925C6.2897 7.57606 6.18187 7.74224 6.13751 7.92954C6.09315 8.11684 6.115 8.31373 6.19935 8.48675C7.33825 10.8 9.21137 12.6707 11.526 13.8067Z"
                      stroke="#99A1AF"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <h2>+62 812-3456-7890</h2>
                </div>
              </div>
              <div className="each-detail-box">
                <p>Negara</p>
                <div className="input-box">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99935 18.3334C14.6017 18.3334 18.3327 14.6025 18.3327 10.0001C18.3327 5.39771 14.6017 1.66675 9.99935 1.66675C5.39698 1.66675 1.66602 5.39771 1.66602 10.0001C1.66602 14.6025 5.39698 18.3334 9.99935 18.3334Z"
                      stroke="#99A1AF"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.99935 1.66675C7.85954 3.91354 6.66602 6.89736 6.66602 10.0001C6.66602 13.1028 7.85954 16.0866 9.99935 18.3334C12.1392 16.0866 13.3327 13.1028 13.3327 10.0001C13.3327 6.89736 12.1392 3.91354 9.99935 1.66675Z"
                      stroke="#99A1AF"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.66602 10H18.3327"
                      stroke="#99A1AF"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <h2>Indonesia</h2>
                </div>
              </div>
            </div>

            <div>
              <div className="each-detail-box">
                <p>Nama Lengkap</p>
                <div className="input-box">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8327 17.5V15.8333C15.8327 14.9493 15.4815 14.1014 14.8564 13.4763C14.2312 12.8512 13.3834 12.5 12.4993 12.5H7.49935C6.61529 12.5 5.76745 12.8512 5.14233 13.4763C4.5172 14.1014 4.16602 14.9493 4.16602 15.8333V17.5"
                      stroke="#99A1AF"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.99935 9.16667C11.8403 9.16667 13.3327 7.67428 13.3327 5.83333C13.3327 3.99238 11.8403 2.5 9.99935 2.5C8.1584 2.5 6.66602 3.99238 6.66602 5.83333C6.66602 7.67428 8.1584 9.16667 9.99935 9.16667Z"
                      stroke="#99A1AF"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <h2>John Doe</h2>
                </div>
              </div>
              <div className="each-detail-box">
                <p>Email</p>
                <div className="input-box">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.3327 5.83325L10.8402 10.6058C10.5859 10.7534 10.2971 10.8312 10.0031 10.8312C9.70907 10.8312 9.42027 10.7534 9.16602 10.6058L1.66602 5.83325"
                      stroke="#99A1AF"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.666 3.33325H3.33268C2.41221 3.33325 1.66602 4.07944 1.66602 4.99992V14.9999C1.66602 15.9204 2.41221 16.6666 3.33268 16.6666H16.666C17.5865 16.6666 18.3327 15.9204 18.3327 14.9999V4.99992C18.3327 4.07944 17.5865 3.33325 16.666 3.33325Z"
                      stroke="#99A1AF"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <h2>johndoe@example.com</h2>
                </div>
              </div>
            </div>

            <div>
              <div className="each-detail-box">
                <p>Nomor Pasport</p>
                <div className="input-box">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.666 4.16675H3.33268C2.41221 4.16675 1.66602 4.91294 1.66602 5.83341V14.1667C1.66602 15.0872 2.41221 15.8334 3.33268 15.8334H16.666C17.5865 15.8334 18.3327 15.0872 18.3327 14.1667V5.83341C18.3327 4.91294 17.5865 4.16675 16.666 4.16675Z"
                      stroke="#99A1AF"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.66602 8.33337H18.3327"
                      stroke="#99A1AF"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <h2>A1234567</h2>
                </div>
              </div>
              <div className="each-detail-box">
                <p>Nomor Kamar/Villa</p>
                <div className="input-box">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5 17.5V10.8333C12.5 10.6123 12.4122 10.4004 12.2559 10.2441C12.0996 10.0878 11.8877 10 11.6667 10H8.33333C8.11232 10 7.90036 10.0878 7.74408 10.2441C7.5878 10.4004 7.5 10.6123 7.5 10.8333V17.5"
                      stroke="#99A1AF"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.5 8.33333C2.49994 8.09088 2.55278 7.85135 2.65482 7.63142C2.75687 7.4115 2.90566 7.21649 3.09083 7.05999L8.92417 2.05999C9.22499 1.80575 9.60613 1.66626 10 1.66626C10.3939 1.66626 10.775 1.80575 11.0758 2.05999L16.9092 7.05999C17.0943 7.21649 17.2431 7.4115 17.3452 7.63142C17.4472 7.85135 17.5001 8.09088 17.5 8.33333V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V8.33333Z"
                      stroke="#99A1AF"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <h2>Villa 205</h2>
                </div>
              </div>
            </div>
            <div className="each-detail-box address">
              <p>Alamat</p>
              <div className="input-box">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6673 8.33329C16.6673 12.4941 12.0515 16.8275 10.5015 18.1658C10.3571 18.2744 10.1813 18.3331 10.0007 18.3331C9.81999 18.3331 9.64421 18.2744 9.49982 18.1658C7.94982 16.8275 3.33398 12.4941 3.33398 8.33329C3.33398 6.56518 4.03636 4.86949 5.28661 3.61925C6.53685 2.36901 8.23254 1.66663 10.0007 1.66663C11.7688 1.66663 13.4645 2.36901 14.7147 3.61925C15.9649 4.86949 16.6673 6.56518 16.6673 8.33329Z"
                    stroke="#99A1AF"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 10.8334C11.3807 10.8334 12.5 9.71409 12.5 8.33337C12.5 6.95266 11.3807 5.83337 10 5.83337C8.61929 5.83337 7.5 6.95266 7.5 8.33337C7.5 9.71409 8.61929 10.8334 10 10.8334Z"
                    stroke="#99A1AF"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <h2>-</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="information-box change-pw">
        <div className="change-pw-box">
          <div className="password-icon">
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 6.5L16.8 8.8C16.9869 8.98323 17.2382 9.08586 17.5 9.08586C17.7618 9.08586 18.0131 8.98323 18.2 8.8L20.3 6.7C20.4832 6.51307 20.5859 6.26175 20.5859 6C20.5859 5.73825 20.4832 5.48693 20.3 5.3L18 3"
                stroke="#155DFC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.0004 1L10.4004 10.6"
                stroke="#155DFC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.5 20C9.53757 20 12 17.5376 12 14.5C12 11.4624 9.53757 9 6.5 9C3.46243 9 1 11.4624 1 14.5C1 17.5376 3.46243 20 6.5 20Z"
                stroke="#155DFC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="text-box">
            <h1>Ganti Password</h1>
            <p>Perbarui password Anda secara berkala untuk keamanan akun</p>
          </div>
        </div>
        <button>Ubah</button>
      </div>

      <button className="sign-out-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-log-out"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
        Sign Out
      </button>
    </main>
    </>
  )
}
export default ProfilePage;