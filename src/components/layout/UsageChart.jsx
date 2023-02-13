import { useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import Variable from '@styles/Variable';

am4core.useTheme(am4themes_animated);
am4core.options.commercialLicense = true;

const UsageChart = ({ data, activeSeries, ...props }) => {
  const chartRef = useRef(null);

  useLayoutEffect(() => {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    chart.marginRight = 400;
    
    // color
    chart.colors.list = [
      am4core.color(Variable['primary']),
      am4core.color(Variable['primary-dark1']),
    ];  

    // data
    chart.data = data;

    // x축
    let xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    xAxis.dataFields.category = "date";
    xAxis.renderer.grid.template.location = 0;
    xAxis.renderer.grid.template.disabled = true;
    xAxis.renderer.minGridDistance = 20;
    xAxis.renderer.labels.template.fontSize = Variable['font-xsmall'];
    xAxis.renderer.labels.template.fill = am4core.color(Variable['grey600']);
    xAxis.renderer.tooltip.fontSize = Variable['font-xsmall'];
    
    // y축
    let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.renderer.grid.template.stroke = Variable['grey300'];
    yAxis.renderer.grid.template.strokeOpacity = 0.7;
    yAxis.renderer.labels.template.fontSize = Variable['font-xsmall'];
    yAxis.renderer.labels.template.fill = am4core.color(Variable['grey600']);
    yAxis.renderer.tooltip.fontSize = Variable['font-xsmall'];

    // ds 시리즈
    let seriesDS = chart.series.push(new am4charts.ColumnSeries());
    seriesDS.dataFields.valueY = "ds";
    seriesDS.dataFields.categoryX = "date";
    seriesDS.name = "Contextual DS";
    seriesDS.tooltipText = "{name}: [bold]{valueY}[/]";
    seriesDS.tooltip.fontSize = Variable['font-small'];
    seriesDS.stacked = true;
    seriesDS.columns.template.width = am4core.percent(40);
    
    // qa 시리즈
    let seriesQA = chart.series.push(new am4charts.ColumnSeries());
    seriesQA.dataFields.valueY = "qa";
    seriesQA.dataFields.categoryX = "date";
    seriesQA.name = "Contextual QA";
    seriesQA.tooltipText = "{name}: [bold]{valueY}[/]";
    seriesQA.tooltip.fontSize = Variable['font-small'];
    seriesQA.stacked = true;
    seriesQA.columns.template.width = am4core.percent(40);
    
    // cursor
    chart.cursor = new am4charts.XYCursor();

    // legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = 'bottom';
    chart.legend.paddingBottom = 0;
    chart.legend.maxHeight = 150;
    chart.legend.scrollable = true;
    chart.legend.maxWidth = undefined;
    chart.legend.labels.template.fontSize = Variable['font-small'];
    chart.legend.labels.template.fontWeight = 700;
    chart.legend.labels.template.fill = am4core.color(Variable['grey700']);
    chart.legend.itemContainers.template.clickable = false; // 클릭 막기
    chart.legend.itemContainers.template.focusable = false; // 클릭 막기
    chart.legend.itemContainers.template.cursorOverStyle = am4core.MouseCursorStyle.default; // 클릭 막기
    
    // legend > marker
    chart.legend.useDefaultMarker = true;
    let marker = chart.legend.markers.template.children.getIndex(0);
    marker.align = 'center';
    marker.valign = 'middle';
    marker.width = 8;
    marker.height = 8;
    marker.marginTop = 10;
    marker.cornerRadius(4, 4, 4, 4);

    if (activeSeries === 'ds') {
      seriesQA.hidden = true;
    } else if (activeSeries === 'qa') {
      seriesDS.hidden = true;
    }

    chartRef.current = chart;

    return () => {
      chart.dispose();
    };
  }, [data, activeSeries]);

  return (
    <UsageChartStyle id="chartdiv" {...props} />
  );
};

UsageChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      ds: PropTypes.number,
      qa: PropTypes.number,
    })
  ),
  activeSeries: PropTypes.string,
};

const UsageChartStyle = styled.div`
  width: 100%;
  height: 280px;
`;

export default UsageChart;