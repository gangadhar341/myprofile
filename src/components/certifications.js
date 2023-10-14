import "./styles/certification.css";
export default function Certification() {
  return (
    <>
      <h1 className='ms-4 my-4'>Certifications :-</h1>
      <ul className='list-group ms-4 my-4'>
        <li className='ms-4 '>
          I have passed the HackerRank Skills Certification Exam in{" "}
          <a
            href='https://www.hackerrank.com/certificates/ea811ac3e778'
            target='blank'
          >
            Python
          </a>
          .
        </li>
        <li className='ms-4 '>
          I have passed the HackerRank Skills Certification Exam in{" "}
          <a
            href='https://www.hackerrank.com/certificates/132f7b6cfbc3'
            target='blank'
          >
            Javascript
          </a>
          .
        </li>
        <li className='ms-4 '>
          I have passed the HackerRank Skills Certification Exam in{" "}
          <a
            href='https://www.hackerrank.com/certificates/bd181aab7377'
            target='blank'
          >
            Java
          </a>
          .
        </li>
        <li className='ms-4 '>
          I have successfully completed my Udemy course on{" "}
          <a
            href='https://www.udemy.com/certificate/UC-c1e61019-5e97-4334-a417-cb6939212bd9/'
            target='blank'
          >
            Python
          </a>{" "}
          with 92%.
        </li>
        <li className='ms-4 '>
          I have successfully completed my Udemy course on{" "}
          <a
            href='https://www.udemy.com/certificate/UC-85cdd9e6-8b4e-4759-9830-1037308c1f40/'
            target='blank'
          >
            HTML & CSS
          </a>
          .
        </li>
      </ul>
      <div
        id='carouselExampleCaptions'
        className='carousel slide ms-4 my-4'
        data-bs-ride='carousel'
      >
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='3'
            aria-label='Slide 4'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='4'
            aria-label='Slide 5'
          ></button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <a
              href='https://www.hackerrank.com/certificates/ea811ac3e778'
              target='blank'
            >
              <img
                src='/images/HackerRankCertificate.png'
                className='d-block w-50 mx-auto'
                alt='Python'
              />
            </a>
            <div className='carousel-caption d-none d-md-block'>
              {/* <h5 className='paint'>Python</h5>
              <p className='paint'>
                I have passed the HackerRank Skills Certification Exam in Python
              </p> */}
            </div>
          </div>
          <div className='carousel-item'>
            <a
              href='https://www.hackerrank.com/certificates/132f7b6cfbc3'
              target='blank'
            >
              <img
                src='/images/JavaScript.png'
                className='d-block w-50 mx-auto'
                alt='JavaScript'
              />
            </a>
            <div className='carousel-caption d-none d-md-block'>
              {/* <h5 className='paint'>JavaScript</h5>
              <p className='paint'>
                I have passed the HackerRank Skills Certification Exam in
                Javascript.
              </p> */}
            </div>
          </div>
          <div className='carousel-item'>
            <a
              href='https://www.hackerrank.com/certificates/bd181aab7377'
              target='blank'
            >
              <img
                src='/images/Java.png'
                className='d-block w-50 mx-auto'
                alt='Java'
              />
            </a>

            <div className='carousel-caption d-none d-md-block'>
              {/*  <h5 className='paint'>Java</h5>
              <p className='paint'>
                I have passed the HackerRank Skills Certification Exam in Java.
              </p> */}
            </div>
          </div>
          <div className='carousel-item '>
            <a
              href='https://www.udemy.com/certificate/UC-85cdd9e6-8b4e-4759-9830-1037308c1f40/'
              target='blank'
            >
              <img
                src='/images/certificate_html.jpg'
                className='d-block w-50 mx-auto'
                alt='HTML'
              />
            </a>
            <div className='carousel-caption d-none d-md-block'>
              {/* <h5 className='paint'>HTML5&CSS3</h5>
              <p className='paint'>
                I have successfully completed my Udemy course on HTML & CSS.
              </p> */}
            </div>
          </div>
          <div className='carousel-item'>
            <a
              href='https://www.udemy.com/certificate/UC-c1e61019-5e97-4334-a417-cb6939212bd9/'
              target='blank'
            >
              <img
                src='/images/certificate_image.jpg'
                className='d-block w-50 mx-auto'
                alt='Python'
              />
            </a>
            <div className='carousel-caption d-none d-md-block'>
              {/* <h5 className='paint'>Python</h5>
              <p className='paint'>
                I have successfully completed my Udemy course on Python with
                92%.
              </p> */}
            </div>
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </>
  );
}
