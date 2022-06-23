module.exports = [
  {
  name: '项目信息',
  id: 'basic',
  icon: 'th-large',
  sub: [{
    name: '项目列表',
    componentName: 'BasicLayout',
    meta: {
      title: '首页'
    }
  }, {
    name: 'Container 布局容器',
    componentName: 'BasicContainer'
  }],
  meta: {
    title: '首页'
  }
}, {
  name: '测试数据',
  id: 'form',
  icon: 'chart-line',
  sub: [{
    name: '覆盖率趋势',
    componentName: 'CoverChartLine'
  }, {
    name: '未接入项目',
    componentName: 'FormCheckbox'
  }]
}]
