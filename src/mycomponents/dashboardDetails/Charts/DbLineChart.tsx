import { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import type { LineDatatype } from "../Dashboard";
// import type { LineChartDatatype } from "@/mycomponents/AllData";
// import { LineChartData } from "@/mycomponents/AllData";

interface LineDataTypeProp {
  data : LineDatatype[]
}

const DbLineChart = ({data} : LineDataTypeProp) => {
  const chartRef = useRef<HTMLDivElement>(null);
  // const chartData = LineChartData as LineChartDatatype[];
  // console.log('linedata',data)
  useLayoutEffect(() => {
    if (!chartRef.current) return;

    const root = am5.Root.new(chartRef.current);

    // Theme
    root.setThemes([am5themes_Animated.new(root)]);

    // Remove  logo
    root._logo?.dispose();

    // Create chart
    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "none",
        wheelY: "none",
      })
    );
    let cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "zoomX",
      })
    );
    cursor.lineY.set("visible", false);
    cursor.lineX.set("visible", false);

    //  Sample data (month & sales)

    // X Axis (CategoryAxis)
    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "Month",
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 20,
        }),
      })
    );
    // for grid line to the white color
    xAxis.get("renderer").grid.template.setAll({
      stroke: am5.color("#fff"),
      strokeOpacity: 0,
    });

    // Label white color
    xAxis.get("renderer").labels.template.setAll({
      fill: am5.color("#fff"),
      fontSize: 12,
      fontWeight: "500",
      rotation : 320
    });

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        max: 800,
        strictMinMax: true,
        renderer: am5xy.AxisRendererY.new(root, { stroke: am5.color("#fff"),minGridDistance : 50 }),
      })
    );

    yAxis.get("renderer").labels.template.setAll({
      fill: am5.color("#fff"),  // y axis number to the color
      fontSize: 12,
    
      
    });

    // for grid line to the white color

    yAxis.get("renderer").grid.template.setAll({
      stroke: am5.color("#fff"),
      strokeOpacity: 0.3, // it will transparent now(grid line)
    });

    const series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Sales",
        xAxis,
        yAxis,
        valueYField: "Sales",
        categoryXField: "Month",
        stroke: am5.color("#fff"), //white line
        tooltip: am5.Tooltip.new(root, {
          labelText: "{categoryX},sales: {valueY}",
        }),
      })
    );

    series.bullets.push(() => {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 5,
          fill: am5.color("#fff"),
          stroke: am5.color("#fff"),
          strokeWidth: 2,
        }),
      });
    });

    xAxis.data.setAll(data);
    series.data.setAll(data);

    series.appear(1000);
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [data]);

  return <div ref={chartRef} className="w-full h-full" />;
};

export default DbLineChart;
