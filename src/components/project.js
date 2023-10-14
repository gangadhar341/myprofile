export default function Project() {
  return (
    <>
      <div className='row'>
        <div className='col-lg-6'>
          <h1 className='ms-4 mt-4'> Projects</h1>
          <dl>
            <dt className='ms-4 mt-4'>
              1. Drowsiness Detection using DCCNN Algorithm,Machine Learning—
            </dt>
            <dd className='ms-4 mt-4'>June 2022-May 2023</dd>
            <dd className='ms-4 mt-4'>
              The Project was to detect whether the driver was drowsy or not. If
              he is drowsy an alarm will ring. It consists of an offline
              training module and an online monitoring module. <br />
              In this Project we use{" "}
              <abbr title='Deep Cascade Convolutional Neural Network'>
                DCCNN
              </abbr>{" "}
              Algorithm ,<abbr title='Support Vector Machine'>SVM</abbr>{" "}
              Algorithm for processing images and Dlib toolkit for obatining
              land marks on face.
            </dd>
          </dl>
          <dl>
            <dt className='ms-4 mt-4'>
              2. E-commerce website using Angular 14 —
            </dt>
            <dd className='ms-4 mt-4'>Feb 2023-Mar 2023</dd>
            <dd className='ms-4 mt-4'>
              The project was made by using angular framework. In this project
              some products were displayed. For this Project I used Angular 14.
              <br />
              It will display different products like bags,mobiles etc,. and
              shows buttons like "AddtoCart" and "Wishlist". And I added a link
              "see all", when we click, it will show all products and again it
              will show a link "less" when we click, it will hide some products.
            </dd>
          </dl>
          <dl>
            <dt className='ms-4 mt-4'>
              3. My Profile using React Js and Bootstrap5 —
            </dt>
            <dd className='ms-4 mt-4'>July 2023</dd>
            <dd className='ms-4 mt-4'>
              I created a responsive website by using React Js and Bootstrap
              5.The site name is{" "}
              <a href='http://gangadhar-profile.netlify.com' target='blank'>
                myprofile
              </a>{" "}
              .
            </dd>
          </dl>
        </div>
        <div className='col-lg-4'>
          <video
            width='320'
            height='240'
            autoPlay
            muted
            loop
            className='ms-4 my-4'
            style={{ border: "1px solid black", borderRadius: "10px" }}
          >
            <source src='/images/drowsyness_detection.mp4' type='video/mp4' />
          </video>
          <video
            width='320'
            height='240'
            autoPlay
            muted
            loop
            className='ms-4 my-4'
            style={{ border: "1px solid black", borderRadius: "10px" }}
          >
            <source src='/images/ECommerce.mp4' type='video/mp4' />
          </video>
        </div>
      </div>
    </>
  );
}
