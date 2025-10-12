import React, { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { BarChartData } from "@/mycomponents/AllData";
import type { BarChartDataType } from "@/mycomponents/AllData";

const DbBarChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const data = BarChartData as BarChartDataType[];

  useLayoutEffect(() => {
    if (!chartRef.current) return;

    const root = am5.Root.new(chartRef.current);
    root.setThemes([am5themes_Animated.new(root)]);
    root._logo?.dispose();
    // Chart container
    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "none",
        wheelY: "none",
        layout: root.verticalLayout,
      })
    );

    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);
    cursor.lineX.set("visible",false)

    // X Axis — Category
    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "day",
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 5,
        }),
      })
    );
    // setting color to the labels
    xAxis.get("renderer").labels.template.setAll({fill : am5.color("#fff")})
    
    xAxis.get("renderer").grid.template.setAll({stroke : am5.color("#fff")})
   
    // Y Axis — Value
    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        min : 0,
        max : 60,
        strictMinMax : true,
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );
    // adding color to the text 
    yAxis.get("renderer").labels.template.setAll({ fill: am5.color("#fff") });
    //adding color to the grid lines
    yAxis.get("renderer").grid.template.setAll({stroke : am5.color("#fff")})
    // Series
    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Sales",
        xAxis,
        yAxis,
        fill: am5.color("#fff"),
        valueYField: "sales",
        categoryXField: "day",
        tooltip: am5.Tooltip.new(root, { }),
      })
    );
    // day in first letter

    // series.data.setAll(
    //   data.map((item) => ({
    //     day: item.day.charAt(0),
    //     sales: item.sales,
    //   }))
    // );


    // Style columns
    series.columns.template.setAll({
      cornerRadiusTL: 10,
      cornerRadiusTR: 10,
      strokeOpacity: 0,
      tooltipText: "{categoryX}, sales: {valueY}",  // tooltip hover time
      width: am5.percent(20),
    });


    // Add data to both axis and series
    xAxis.data.setAll(data);
    series.data.setAll(data);

    // Animate
    series.appear(1000);
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [data]);

  return <div ref={chartRef} className="w-full h-full" />;
};

export default DbBarChart;
