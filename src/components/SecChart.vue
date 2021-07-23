<template>
    <div>
        <div ref="Chart" style="width: 120%; height: 400px;"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
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
    title: {
        text: '基本雷达图'
    },
    legend: {
        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    },
    radar: {
        // shape: 'circle',
        indicator: [
            { name: '销售（Sales）', max: 6500},
            { name: '管理（Administration）', max: 16000},
            { name: '信息技术（Information Technology）', max: 30000},
            { name: '客服（Customer Support）', max: 38000},
            { name: '研发（Development）', max: 52000},
            { name: '市场（Marketing）', max: 25000}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        data: [
            {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: '预算分配（Allocated Budget）'
            },
            {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: '实际开销（Actual Spending）'
            }
        ]
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