import { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { RiArrowDownSLine } from 'react-icons/ri';
import { rgba } from 'polished';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { Text, Flex } from '@components/common';
import Variable from '@styles/Variable';

const AnswerAccordion = ({ data, ...props }) => {
  const [accordionExpandedIndex, setAccordionExpandedIndex] = useState(0);

  const onChangeAccordion = useCallback((index) => (e, newExpanded) => {
    setAccordionExpandedIndex(newExpanded ? index : null);
  }, []);

  // data 바뀔 때마다 초기화
  useEffect(() => {
    return () => {
      setAccordionExpandedIndex(0);
    }
  }, [data]);

  return (
    <AnswerAccordionStyle {...props}>
      <section className="accordion">
        {data?.map((v, i) => (
          <Accordion key={i} className="accordion-item" expanded={i === accordionExpandedIndex} onChange={onChangeAccordion(i)} disableGutters square>
            <AccordionSummary className="accordion-summary">
              <Flex alignItems="center" gap="25px" pd="20px 30px">
                <Text className="number" size="middle" color="grey500">Answer {i + 1}.</Text>
                <Text className="text" color="grey700">{v.answer}</Text>
                <RiArrowDownSLine className="icon" />
              </Flex>
            </AccordionSummary>
            <AccordionDetails className="accordion-detail">
              <Text className="text" size="small" color="grey600">{v.text}</Text>
              <Link className="link" href={v.url} target="_blank" title={v.title}>
                <Text size="small" color="grey800" bold inline>{v.title}</Text>
              </Link>
            </AccordionDetails>
          </Accordion>
        ))}
      </section>
    </AnswerAccordionStyle>
  );
};

AnswerAccordion.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    answer: PropTypes.string,
    origin: PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.node,
      url: PropTypes.string,
    }),
  })),
};

const AnswerAccordionStyle = styled.section`
  .accordion-item {
    box-shadow: none;
    border-top: 1px solid var(--grey300);

    &::before {
      display: none;
    }

    .MuiAccordionSummary-root {
      padding: 0;
    }

    .MuiAccordionSummary-content {
      width: 100%;
      margin: 0;
    }
  }

  .accordion-summary {
    .summary-wrap {
      width: 100%;
    }

    .number {
      flex-shrink: 0;
      transition: all 0.2s;
    }

    .text {
      flex-grow: 1;
      width: 100%;
      transition: all 0.2s;
    }

    .icon {
      flex-shrink: 0;
      color: var(--grey700);
      width: 24px;
      height: 24px;
      transition: transform 0.2s;
    }

    &:hover {
      .number {
        color: var(--primary);
        // font-weight: 700;
      }

      /* .text {
        font-weight: 700;
      } */
    }
  }

  .accordion-detail {
    padding: 30px 29.5px 20px;
    border-top: 1px solid var(--grey200);

    .text {
      em {
        color: var(--primary);
        font-weight: 700;
      }
    }

    .link {
      display: inline-block;
      margin-top: 20px;
      text-decoration: underline;
    }
  }

  // expanded
  .accordion-item.Mui-expanded {
    margin-bottom: 20px;
    border: 0;
    border-radius: var(--radius2);
    box-shadow: 0px 10px 40px ${rgba(Variable.grey300, 0.5)};

    .accordion-summary {
      .number {
        color: var(--primary);
        font-weight: 700;
      }

      .text {
        font-weight: 700;
      }

      .icon {
        transform: rotate(-180deg);
      }
    }
  }
`;

export default AnswerAccordion;