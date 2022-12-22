import React from 'react';
import Typewriter from 'typewriter-effect';
import { Container, Content, Salutation } from './style';
import { BsSearch } from 'react-icons/bs';
import Image from 'next/image';

export const TopBanner: React.FC = () => {
  return (
    <Container>
      <Salutation>
        <h1> Welcome to Amazing trips </h1>
        <Typewriter
          options={{
            strings: [' Spreading Happiness!', ' Connecting People!'," Creating Memories!"," Creating Stories!"," Fulfilling Adventure!"],
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter.typeString('')
              .callFunction(() => {
                // console.log('String typed out!');
              })
              .pauseFor(1000)
              .deleteAll()
              .callFunction(() => {
                // console.log('All strings were deleted');
              })
              .start();
          }}
        />
        <label htmlFor="test">
          <input 
            type="text" 
            placeholder="search your next trip"  
          />
          <button onClick={() => console.log('searching...')}>
            <BsSearch />
          </button>
        </label>

        {/* <Image 
          src={"https://media.tenor.com/ogUOtLGPIYcAAAAC/viajando.gif"}
          alt={"travel"}
          height={250}
          width={550}
          priority
          quality={100}
        /> */}
      </Salutation>

      {/* <Content>
        <label htmlFor="test">
          <input 
            type="text" 
            placeholder="search your next trip"  
          />
          <button onClick={() => console.log('searching...')}>
            <BsSearch />
          </button>
        </label>
      </Content> */}
    </Container>
  );
};
