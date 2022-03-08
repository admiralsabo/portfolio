import React from "react";
import { Column, Container } from "./styles";
const Header = () => {
  return (
    <Container>
      <Column>
        <h1>
          Hi, I am Jason,
          <br /> Full-Stack Developer
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at
          egestas lectus. Donec tempus risus accumsan, viverra lacus non,
          pulvinar sem. Ut felis ante, facilisis vel elit sit amet, tincidunt
          rhoncus ante. Nulla sit amet mauris a enim faucibus pharetra. Nullam
          id dignissim enim. Cras feugiat blandit accumsan. Pellentesque vitae.
        </p>
        <button>Contact Me</button>
      </Column>
      <Column>
        <img src="http://placehold.it/306" width={306} height={306}></img>
      </Column>
    </Container>
  );
};

export default Header;
