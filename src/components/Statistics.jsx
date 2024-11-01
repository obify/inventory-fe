import React, { useRef, useEffect } from 'react'

const Statistics = () => {

    const options = {
        // set the labels option to true to show the labels on the X and Y axis
        xaxis: {
          show: true,
          categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
          labels: {
            show: true,
            style: {
              fontFamily: "Inter, sans-serif",
              cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
            }
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: true,
          labels: {
            show: true,
            style: {
              fontFamily: "Inter, sans-serif",
              cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
            },
            formatter: function (value) {
              return '$' + value;
            }
          }
        },
        series: [
          {
            name: "Pizza",
            data: [150, 141, 145, 152, 135, 125],
            color: "#1A56DB",
          },
          {
            name: "Burger",
            data: [43, 13, 65, 12, 42, 73],
            color: "#7E3BF2",
          },
        ],
        chart: {
          sparkline: {
            enabled: false
          },
          height: "100%",
          width: "100%",
          type: "area",
          fontFamily: "Inter, sans-serif",
          dropShadow: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2"],
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 2,
        },
        legend: {
          show: false
        },
        grid: {
          show: false,
        },
        };

        const chartRef = useRef(null);

        useEffect(() => {
          if(chartRef.current && typeof ApexCharts !== "undefined"){
            const chart = new ApexCharts(chartRef.current, options);
            chart.render();
            return () => {
                chart.destroy(); //destroy chart when component unmounts
            };
          }
        }, [options]);
        

    return (
        <div>
            <div className="w-full bg-white rounded-xl p-1 md:p-1">
                <div className="flex justify-between">
                    <div>
                        <h5 className="leading-none text-xl font-bold text-gray-900 pb-2 pl-2 pt-2">Sales Inventory</h5>
                    </div>
                    <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
                        23%
                        <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13V1m0 0L1 5m4-4 4 4" />
                        </svg>
                    </div>
                </div>
                <div ref={chartRef} id="data-series-chart" ></div>
            </div>
        </div>

    )
}

export default Statistics