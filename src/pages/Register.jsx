import React from "react";
import { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { db } from "../firebase.config";
import {
  collection,
  // setDoc,
  // getDocs,
  addDoc,
  // updateDoc,
  // deleteDoc,
  // doc,
} from "firebase/firestore";
// import { UploadTask } from "firebase/storage";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { setDoc, doc } from "firebase/firestore";

// import { auth } from "../firebase.config";
// import { storage } from "../firebase.config";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const usersCollectionRef = collection(db, "users");
  const navigate = useNavigate();

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      username: username,
      email: email,
      review: "",
    });
    // await setDoc(doc(db, "users", user.uid), {
    //   uid: user.uid,
    //   username,
    //   email,
    //   review,
    // });
  };
  const signup = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        // console.log(user.uid);
        navigate("/login");
      })
      .catch((error) => {
        // setLoading(false);
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert("Password should be at least 6 characters");
      });

    // try {
    //   const userCredential = await createUserWithEmailAndPassword(
    //     auth,
    //     email,
    //     password
    //   );

    //   const user = await userCredential.user;
    //   const storageRef = ref(storage, `images/${Date.now() + username}`);
    //   const uploadTask = uploadBytesResumable(storageRef, file);

    //     uploadTask.on(
    //       (error) => {
    //         toast.error(error.message);
    //       },
    //       () => {
    //         getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
    //           // update user frofile
    //           await updateProfile(user, {
    //             displayName: username,
    //             photoURL: downloadURL,
    //           });

    //           // store user data in firebase database
    //           await setDoc(doc(db, "users", user.uid), {
    //             uid: user.uid,
    //             displayName: username,
    //             email,
    //             photoURL: downloadURL,
    //           });
    //         });
    //       }
    //     );

    //     setLoading(false);
    //     toast.success("Account created");
    //     navigate("/login");
    //     // console.log(user);
    //   } catch (error) {
    //     setLoading(false);
    //     toast.error("invalid input, please try again");
    //   }
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={signup}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="addToCart__btn"
                  onClick={createUser}
                >
                  Sign Up
                </button>
              </form>
              <Link to="/login">Already have an account? Login</Link>
            </Col>

            {/* 
            {loading ? (
              <Col lg="12" className="text-center">
                <h5 className="fw-bold">Loading......</h5>
              </Col>
            ) : (
              <Col lg="6" md="6" sm="12" className="m-auto text-center">
                <form className="form mb-5" onSubmit={signup}>
                  <div className="form__group">
                    <input
                      type="text"
                      placeholder="Username"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form__group">
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form__group">
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                                      
                  <div className="form__group">
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                    </div>
                    

                  <button type="submit" className="addToCart__btn">
                    Sign Up
                  </button>
                </form>
                <Link to="/login">Already have an account? Login</Link>
              </Col>
            )} */}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
