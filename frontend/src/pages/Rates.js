import React from 'react'
import ApiClient from 'helpers/apiClient';
import echarts from 'echarts';
import _ from 'lodash';


// const lendbookApi = new ApiClient('https://api.bitfinex.com/v1/lendbook/btc');
const lendbookApi = new ApiClient('http://localhost:3333/rate/btc');


export default class Rates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trades: [],
      isDataLoading: true,
    }
  }

  fetchTradeData = () => {
    return lendbookApi.get()
      .then((res) => {
        const data = res.results;

        const refinedData = _.groupBy(data, (datum) => datum.timestamp)
        console.log(refinedData);

        const dates = Object.keys(refinedData);

        const tradedPrices = _.map(refinedData, (datumForTimeStamp, keyForTimeStamp) => {
          const mergedValue = _.reduce(datumForTimeStamp, (result, value, key) => ({
            price: (Number(result.price) + Number(value.price)),
          }))

          mergedValue.price = mergedValue.price / datumForTimeStamp.length;

          return mergedValue;
        })

        this.setState({
          trades: [ ...res.results ],
        });


        // specify chart configuration item and data
        var option = {
          title: {
            text: 'BTC/USD Trads'
          },
          tooltip: {},
          legend: {
            data:['거래가']
          },
          xAxis: {
            type: 'category',
            data: dates,
            axisLine: { lineStyle: { color: '#8392A5'  }  }
          },
          yAxis: {
            scale: true,
            axisLine: { lineStyle: { color: '#8392A5'  }  },
            splitLine: { show: false  }
          },
          series: [
            {
              name: '거래 가격',
              type: 'line',
              data: tradedPrices.map((trade) => Number(trade.price)),
              smooth: false,
              showSymbol: false,
              lineStyle: {
                normal: {
                  width: 1
                }
              }
            },
          ]
        };
        // use configuration item and data specified to show chart
        this.myChart.setOption(option);
      })
  }

  componentDidMount() {
    this.myChart = echarts.init(this.echarts);
    // this.fetchTradeData();
    
    setInterval(this.fetchTradeData, 5000)
  }

  componentDidUpdate = (prevProps) => {
    if (_.isEqual(prevProps.trades, this.props.trades)) {
      console.log('got new data');
    }
  }

  updateData = () => {
    this.fetchTradeData();
  }

  render() {
    return (
      <div>
        Rates
        <div>
          <div
            ref={(el) => this.echarts = el}
            style={{ width: '100%', height: '400px' }}
          />
        </div>
        <div>
          <button onClick={this.updateData}>
            새로운 데이터 가져오기
          </button>
        </div>
      </div>
    );
  }
}
