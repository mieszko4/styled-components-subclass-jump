import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  position: relative;
  width: 400px;
  height: 400px;
`;

const Item = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: ${(p) => p.$color}; /* not relevant */
  /*
    The following causes entire class swap which causes layout jump
    This is the point where I would like to control it and create a subclass based on p.$active  
  */
  z-index: ${(p) => p.$active ? 'auto': -1}; 
`;

export const CarouselDemo = ({
  items,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIdx((activeIdx + 1) % items.length );
    }, 2000);

    return () => {
      timer && clearTimeout(timer);
    };
  }, [activeIdx, items.length]);

  return (
    <Container>
      {items.map((item, idx) => {
        return (
          <Item
            key={idx}

            $color={item.color}
            $active={idx === activeIdx}
          />
        );
      })}
    </Container>
  );
};
