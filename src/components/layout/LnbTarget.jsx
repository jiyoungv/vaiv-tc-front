import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';

import { lnbListState } from '@states/index';
import useWindowScroll from '@hooks/useWindowScroll';

const LnbTarget = ({ id, text, fontSize, children, ...props }) => {
  const positionRef = useRef(null);
  const windowScroll = useWindowScroll();

  const setLnbList = useSetRecoilState(lnbListState);

  useEffect(() => {
    setLnbList((prev) => {
      const newList = new Map(prev);
      const scrollY = Math.floor(windowScroll?.y + positionRef?.current?.getBoundingClientRect()?.top - 50);

      newList.set(id, { id, text, scrollY, fontSize });

      return newList;
    });

    return () => {
      setLnbList((prev) => {
        const newList = new Map(prev);

        newList.delete(id);
        
        return newList;
      });
    }
  }, [windowScroll]);

  return (
    <LnbTargetStyle {...props}>
      <div ref={positionRef} id={id} className="lnb-target-position" title={text}></div>
      {children}
    </LnbTargetStyle>
  );
};

LnbTarget.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.oneOf(['small']),
  children: PropTypes.node,
};

const LnbTargetStyle = styled.div`
  position: relative;

  .lnb-target-position {
    position: absolute;
    top: calc(0px - var(--header-height) - 20px);
    left: 0;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
  }
`;

export default LnbTarget;