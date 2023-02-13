import { useEffect, useState, useMemo } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { rgba } from 'polished';
import { RiCloseLine } from 'react-icons/ri';

import { Flex, Button, Text } from '@components/common';
import { buttonColorVariable } from '@styles/Variable';

const Modal = ({ title, text, onClose, button, children, ...props }) => {
  const buttonEl = useMemo(() => {
    if (!button) return;
    const isMultipleButton = Array.isArray(button);

    if (isMultipleButton) {
      return (
        <Flex className="common-modal-button-group" mg="30px 0 0" justifyContent="center" gap="10px">
          {button?.map((v, i) => {
            if (i === 0) {
              return (
                <Button 
                  key={i} 
                  className="common-modal-button" 
                  width="170px" 
                  color={v.color ? v.color : 'grey500'}
                  fontSize="small" 
                  onClick={v.handler} 
                  loading={v.loading ? v.loading : false}
                >{v.label}</Button>
              );
            }
            if (i === 1) {
              return (
                <Button 
                  key={i} 
                  className="common-modal-button" 
                  width="170px" 
                  variant="fill" 
                  color={v.color ? v.color : 'primary'} 
                  fontSize="small" 
                  onClick={v.handler} 
                  loading={v.loading ? v.loading : false}
                >{v.label}</Button>
              );
            }
          })}
        </Flex>
      );
    } else {
      return (
        <Flex className="common-modal-button-group" mg="30px 0 0" justifyContent="center">
          <Button className="common-modal-button" width="170px" variant="fill" onClick={button.handler} loading={button.loading ? button.loading : false}>{button.label}</Button>
        </Flex>
      )
    }
  }, [button]);

  // document is undefined 에러로 넣어놓음
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return;

  return ReactDOM.createPortal(
    <ModalStyle {...props}>
      <div className="common-modal-bg" onClick={onClose}></div>
      <article className="common-modal-box">
        <button type="button" className="common-modal-close" onClick={onClose}>
          <RiCloseLine size={28} />
        </button>
        {(title || text) && (
          <div className="common-modal-basic">
            {title && <Text className="common-modal-title" color="grey700" size="middle" bold>{title}</Text>}
            {text && <Text className="common-modal-text" color="grey600" size="small">{text}</Text>}
          </div>
        )}
        {children}
        {button && buttonEl}
      </article>
    </ModalStyle>,
    document.querySelector('#modal-portal')
  );
};

Modal.propTypes = {
  /** 제목 */
  title: PropTypes.string,
  /** 텍스트 */
  text: PropTypes.node,
  /** 모달 닫는 함수 */
  onClose: PropTypes.func.isRequired,
  /** 버튼. 1개는 객체, 2개 이상은 객체의 배열로 넣는다. */
  button: PropTypes.oneOfType([
    PropTypes.shape({ // 1개일 때
      label: PropTypes.string,
      handler: PropTypes.func,
      loading: PropTypes.bool,
      color: PropTypes.oneOf(buttonColorVariable),
    }),
    PropTypes.arrayOf( // 2개일 때
      PropTypes.shape({
        label: PropTypes.string,
        handler: PropTypes.func,
        loading: PropTypes.bool,
        color: PropTypes.oneOf(buttonColorVariable),
      })
    ),
  ]),
  /** 내용. 자유롭게 컨텐츠를 넣어야할 때 작성 */
  children: PropTypes.node,
};

const modalShowAni = keyframes`
  0% {
    opacity: 0;
    margin-top: -40px;
  }
  100% {
    opacity: 1;
    margin-top: 0;
  }
`;

const ModalStyle = styled.aside`
  z-index: var(--zindex1);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  .common-modal {
    &-bg {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: ${rgba('#000', 0.25)};  
    }
  
    &-box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 400px;
      padding: 25px;
      border-radius: var(--radius2);
      background: var(--white);
      box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03);
      animation: ${modalShowAni} 0.4s forwards;
    }
  
    &-close {
      position: absolute;
      top: 12px;
      right: 12px;
      border: 0;
      background: transparent;
      color: var(--grey800);
    }
  
    &-basic {
      text-align: center;  
    }
    
    &-title {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export default Modal;