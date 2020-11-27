import React, { useRef, useEffect } from 'react';
import { withTheme } from 'styled-components';
import { motion } from 'framer-motion';
import {
  HeroCardWrapper,
  CodeCardWrapper,
  ColorPaletteWrapper,
  ColorBoxWrapper,
} from './HeroCard.style';

function copyToClipboard(str) {
  var el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style = { position: 'absolute', left: '-9999px' };
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

export const CodeCard = () => {
  return (
    <CodeCardWrapper>
      <pre>
        1&nbsp;&nbsp;class <b>Person</b> {'{'}
      </pre>
      <pre>2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; constructor() {'{'}</pre>
      <pre>
        3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = "
        <b>Krishna Kanth</b>";
      </pre>
      <pre>
        3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.position = "
        <b>Developer</b>";
      </pre>
      <pre>
        4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.traits = ["
        <b>DESIGN</b>", "<b>DEV</b>"];
      </pre>

      <pre>6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {'}'}</pre>
      <pre>7&nbsp;&nbsp;{'}'}</pre>
    </CodeCardWrapper>
  );
};

const ColorBox = ({ color }) => {
  const tooltipRef = useRef();
  useEffect(() => {
    return tooltipRef.current.addEventListener('animationend', () => {
      tooltipRef.current.classList.remove('tooltip-animate');
    });
  });
  const copy = () => {
    copyToClipboard(color);
    tooltipRef.current.classList.add('tooltip-animate');
  };

  return (
    <ColorBoxWrapper
      ref={tooltipRef}
      onClick={copy}
      style={{ background: color }}
    />
  );
};

export const ColorPalette = withTheme(({ theme }) => {
  return (
    <ColorPaletteWrapper>
      <ColorBox color={theme.primaryColor} />
      <ColorBox color={'#6A98F0'} />
      <ColorBox color={theme.gradient} />
      <ColorBox color={theme.primaryBlack} />
      <ColorBox color={theme.accentColor} />
    </ColorPaletteWrapper>
  );
});

export const HeroCard = () => {
  return (
    <HeroCardWrapper>
      <motion.div
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <CodeCard />
      </motion.div>
      <ColorPalette />
    </HeroCardWrapper>
  );
};
