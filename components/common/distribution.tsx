import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highmaps';
import { useEffect, useState } from 'react';
import { CommonChartComponentProps } from '../../lib/model/statistics';
import apiService from '../../lib/services/api-service';

export default function Distribution({ data }: CommonChartComponentProps) {
  const [options, setOptions] = useState<any>({
    title: {
      text: null,
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        align: 'right',
        verticalAlign: 'top',
      },
    },
    colorAxis: {
      min: 0,
      stops: [
        [0, '#fff'],
        [0.5, Highcharts.getOptions().colors[0]],
        [1, '#1890ff'],
      ],
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'bottom',
    },
  });
  const [world, setWorld] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const res = await apiService.getWorld();

      setWorld(res.data);
      setOptions({
        series: [{ mapData: res.data }],
      });
    })();
  }, []);

  useEffect(() => {
    if (!data || !world) {
      return;
    }

    const mapSource = data.map((item) => {
      const target = world.features.find(
        (feature) => item.name.toLowerCase() === feature.properties.name.toLowerCase()
      );

      return !!target
        ? {
            'hc-key': target.properties['hc-key'],
            value: item.amount,
          }
        : {};
    });
    const options = {
      series: [
        {
          data: mapSource,
          mapData: world,
          name: 'Total',
          states: {
            hover: {
              color: '#a4edba',
            },
          },
        },
      ],
    };

    setOptions(options);
  }, [data]);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={'mapChart'}
      options={options}
    ></HighchartsReact>
  );
}
