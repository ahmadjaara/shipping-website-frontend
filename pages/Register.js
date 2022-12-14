import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import Router from 'next/router'

export default function Home() {
  
  const signuphandler = async (e) => {
    e.preventDefault();  
    const formData = {
      first_name:  document.querySelector('#firstname').value,
      last_name:  document.querySelector('#lastname').value,
      username:  document.querySelector('#Username').value,
      email:  document.querySelector('#Email').value,
      password:  document.querySelector('#Password').value,
      
    };

    await axios.post("http://127.0.0.1:8000/api/customer/", formData)
      .then(res => {
        alert("succesfully added")
        Router.push('/Login')

      })
      .catch(e => {
        // console.log("login error", e)
        alert('oops somtheng happen wrong???')

      })
  };
  return (
    <>
  <Head>
  <title>Registration page</title>
  <meta name='Keywords' content='companies'/>
  </Head>
 
  <div className="container col-4">
      <form className='mb-5' onSubmit={signuphandler}>
      <h1 className="h3 mb-4 fw-normal">Welcome to sign up page</h1>
  
      <div className="mb-4 form-floating">
        <input type="text" className="form-control" id="Username" placeholder="username"/>
        <label for="floatingInput">Username</label>
      </div>
      <div className="mb-4 form-floating">
        <input type="text" className="form-control" id="firstname" placeholder="username"/>
        <label for="floatingInput">firstname</label>
      </div>
      <div className="mb-4 form-floating">
        <input type="text" className="form-control" id="lastname" placeholder="username"/>
        <label for="floatingInput">lastname</label>
      </div>
      <div className="mb-4 form-floating">
        <input type="email" className="form-control" id="Email" placeholder="name@example.com"/>
        <label for="floatingInput">Email address</label>
      </div>
      <div className="mb-4 form-floating">
        <input type="password" className="form-control" id="Password" placeholder="Password"/>
        <label for="floatingPassword">Password</label>
      </div>
      {/* <div className="mb-4 form-floating">
        <input type="password" className="form-control" id="confirm_Password" placeholder="confirm Password" />
        <label for="floatingPassword_1">confirm Password</label>
      </div>
   */}
      <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
      
    </form>
    </div>
  <div>
    {/* <h1>Shipping Registration page</h1>
    <form>
      <label>Username</label>
      <input type="text" id='Username'></input>
      <br/>
      <label>password</label>
      <input type="text" id='text'></input>
      <br/>
      <label>Email</label>
      <input type="text" id='Email'></input>
      <br/>
      <label>Phone Number</label>
      <input type="text" id='PhoneNumber'></input>
      <br/>
      <input type="submit" value="Submit"/>
    </form> */}
  
  </div>
  </>
  )
}

// <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{' '}
    //       <code className={styles.code}>pages/index.js</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h2>Documentation &rarr;</h2>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h2>Learn &rarr;</h2>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/canary/examples"
    //         className={styles.card}
    //       >
    //         <h2>Examples &rarr;</h2>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //       >
    //         <h2>Deploy &rarr;</h2>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>