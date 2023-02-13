import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { rgba } from 'polished';

import { Flex, Text, Title } from '@components/common';
import Variable from '@styles/Variable';

const VennDiagramList = ({ list, label, ...props }) => {
  return (
    <VennDiagramListStyle label={label} className={list?.length > 4 ? 'type2' : ''} {...props}>
      {list && (
        <div className={`common-vdl-list-wrap ${list?.length > 4 ? 'type2' : ''}`}>
          <Flex className={`common-vdl-list ${list?.length > 4 ? 'type2' : ''}`} as="ul" justifyContent="center" wrap="wrap" inline>
            {list?.map((v, i) => (
              <li key={i} className="common-vdl-item">
                {v.icon && (
                  <figure className="common-vdl-icon">
                    <Image className="common-vdl-icon-image" src={v.icon} alt="icon" width={90} height={90} />
                  </figure>
                )}
                {v.title && (
                  <Text className="commmon-vdl-title" size="large" color="primary" mg="0 0 10px" bold>{v.title}</Text>
                )}
                {v.text && (
                  <Text className="commmon-vdl-text" size="small" color="grey600">{v.text}</Text>
                )}
              </li>
            ))}
          </Flex>
        </div>
      )}
      {label && (
        <div className="common-vdl-label">
          <div className="common-vdl-label-box">
            <Title className="common-vdl-label-text" level={6} color="white" bold>{label}</Title>
          </div>
        </div>
      )}
    </VennDiagramListStyle>
  );
};

VennDiagramList.propTypes = {
  /** 리스트 */
  list: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.node,
      text: PropTypes.node,
    }),
  ),
  /** 라벨 */
  label: PropTypes.string,
};

const localVariable = {
  circleSize: '270px',
  labelHeight: '66px',
  labelMargin: '50px',
};

const VennDiagramListStyle = styled.article`
  .common-vdl {
    &-list-wrap {
      text-align: center;
    }
  
    &-list {
      position: relative;
    
      ${({ label }) => label && `
        &::before {
          content: '';
          z-index: -2;
          display: block;
          position: absolute;
          left: 0;
          bottom: calc(-${localVariable.labelMargin} - ${localVariable.labelHeight} / 2);
          width: 100%;
          height: calc(${localVariable.circleSize} / 2 + ${localVariable.labelMargin} + ${localVariable.labelHeight} / 2);
          border: 3px dashed var(--primary);
          border-top: 0;
          border-radius: 0 0 232px 232px;
          box-sizing: border-box;
        }
      `}
    }
  
    &-item {
      flex-shrink: 0;
      position: relative;
      width: ${localVariable.circleSize};
      height: ${localVariable.circleSize};
      margin-left: -32px;
      padding-top: 20px;
      border: 3px solid var(--primary);
      border-radius: 50%;
      background: ${rgba(Variable.primary, 0.05)};
      text-align: center;
  
      &:first-child {
        margin-left: 0;
      }
    }

    &-icon {
      position: relative;
      width: 90px;
      height: 90px;
      margin: 0 auto;
    }

    &-icon-image {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
    }
  
    &-label {
      position: relative;
      margin-top: ${localVariable.labelMargin};
      text-align: center;
    }

    &-label-box {
      display: inline-block;
      padding: 14px 48px 13px;
      border-radius: 100px;
      background: var(--primary);
    }
  }

  // 5개 이상
  &.type2 {
    .common-vdl {
      &-list-wrap {
        max-width: 770px;
        margin: 0 auto;
      }

      &-item {
        margin-left: -20px;
        margin-top: -20px;

        &:nth-child(3n+1) {
          margin-left: 0;
        }

        &:nth-child(-n+3) {
          margin-top: 0;
        }
      }
    }
  }
`;

export default VennDiagramList;