"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import _ from "lodash";
import { useEffect, useRef, useState } from "react";
import { Layout, Responsive } from "react-grid-layout";
import 'react-grid-layout/css/styles.css';
import ReactApexChart from "react-apexcharts";
import { chartsData as chartData } from "./mockChartData";
import { Layouts } from "react-grid-layout"

export enum ChartTypes {
    None,
    Bar,
    Pie,
    Area,
    Line,
    Radial,
    Progress,
    Table
}


const ChartBox = ({ options, series, chartType, height, width }: { options?: any, series?: any, chartType: string, height: number, width: number }) => {
    console.log(options, series, chartType);

    switch (chartType) {
        case "Bar":
            return <ReactApexChart key={1} options={options} series={series} type="bar" height={height} width={width} />
        case "Pie":
            return <ReactApexChart key={2} options={options} series={series} type="pie" height={height} width={width} />
        case "Area":
            return <ReactApexChart key={3} options={options} series={series} type="area" height={height} width={width} />
        case "Line":
            return <ReactApexChart key={4} options={options} series={series} type="line" height={height} width={width} />
        case "Radial":
            return <ReactApexChart key={5} options={options} series={series} type="radialBar" height={height} width={width} />
        default:
            return <div>Invalid chart type</div>
    }
}


interface IGridLayoutProps {
    className?: string;
    cols?: { [key: string]: number };
    onLayoutChange?: (layout: Layout[], layouts: { [key: string]: Layout[] }) => void;
    rowHeight?: number;
}

const generateLayout = (resizeHandles: string[], dataLength: number) => {
    const itemsPerRow = 3;
    const minHeight = 3;

    return _.map(_.range(0, dataLength), (_, index) => {
        const row = Math.floor(index / itemsPerRow);
        const col = index % itemsPerRow;

        return {
            x: col * 4,
            y: row * 4,
            w: 4,
            h: Math.max(8, minHeight * 2),
            i: index.toString(),
            static: false,
            resizeHandles,
            minH: minHeight
        };
    });
};

const DraggableAndResizable = ({ rowHeight = 50, onLayoutChange, cols = { lg: 12, md: 12, sm: 6, xs: 6, xxs: 2 } }: IGridLayoutProps) => {

    const [layouts, setLayouts] = useState<any>({ lg: [] });
    const [width, setWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    console.log(chartData, chartData && chartData?.[1])

    useEffect(() => {
        if (chartData && Object.keys(chartData)?.length > 0) {
            setLayouts({ lg: generateLayout(['se'], Object.keys(chartData).length) });
        }
    }, [chartData]);

    useEffect(() => {
        updateWidth();

        const resizeObserver = new ResizeObserver(updateWidth);

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        window.addEventListener('resize', updateWidth);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('resize', updateWidth);
        };
    }, []);

    const updateWidth = () => {
        if (containerRef.current) {
            setWidth(containerRef.current.offsetWidth);
        }
    };

    const handleLayoutChange = (layout: Layout[], layouts: Layouts) => {
        onLayoutChange && onLayoutChange(layout, layouts);
    };

    return (
        <div
            ref={containerRef}
            className="p-4 bg-gray-50 min-h-screen w-full"
            dir="ltr"
        >
            {width > 0 && chartData && (
                <Responsive
                    cols={cols}
                    rowHeight={rowHeight}
                    layouts={layouts as { [key: string]: Layout[] }}
                    onLayoutChange={handleLayoutChange}
                    compactType={"vertical"}
                    isDraggable={true}
                    isResizable={true}
                    width={width - 32}
                >
                    {
                        chartData && chartData.map((chart, index) => {
                            console.log(JSON.parse(JSON.stringify(chart)))
                            return <div key={index} className="bg-white rounded-md shadow-md">
                                <div className="overflow-auto w-full h-full">
                                    <div className="flex justify-between items-center p-4">
                                        <span>...</span>
                                        <h2>جدول فلان</h2>
                                    </div>
                                    <div className="p-4 flex justify-center items-center w-full">
                                        {chart?.series && <ChartBox
                                            chartType={chart?.options?.chart.type}
                                            options={chart?.options}
                                            series={chart?.series}
                                            height={chart?.options?.chart.height || 350}
                                            width={chart?.options?.chart.width || 350} />}
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </Responsive>
            )}
        </div>
    );
};

export default DraggableAndResizable;