<template>
    <div>
        <div ref="Chart" style="width: 100%; height: 300px;"></div>
        <!-- <sec-chart></sec-chart>  -->
    </div>
</template>

<script>
import * as echarts from 'echarts';
// import SecChart from './SecChart.vue'
export default {
    // components: {SecChart},
    data() {
        return {
            chartInstance: null,
            option: {}
        }
    },
    mounted() {
        this.initChart()
        this.updateChart()
        window.addEventListener('resize', this.handleResize)
    },
    methods: {
        initChart () {
            this.chartInstance = echarts.init(this.$refs.Chart)
        },
        updateChart () {
            this.option = {
                xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [120, {
                        value: 200,
                        itemStyle: {
                        color: '#a90000'
                    }
                    }, 150, 80, 70, 110, 130],
                    type: 'bar' 
                }]
        };
            this.chartInstance.setOption(this.option)
        },
        // 当浏览器大小发生变化会调用该方法，完成屏幕适配
        handleResize () {
            this.chartInstance && this.chartInstance.resize()
        }
    },
    beforeDestroy() {
        this.chartInstance && this.chartInstance.dispose()
        this.chartInstance = null
        window.removeEventListener('resize', this.handleResize)
    }
}
</script>
