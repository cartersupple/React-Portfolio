import React from 'react';
import coverImage from '../../assets/profilephoto.jpg';
function About() {
  return (
    <section className="my-5 col">
      <h1 class ="row" id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover" />
      <div className="my-2">
        <p>
       My name is Carter Supple, I am a 23 year old software engineer. Welcome to my Portfolio!
        </p>
      </div>
    </section>
  );
}

export default About;
