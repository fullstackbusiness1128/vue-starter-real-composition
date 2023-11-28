<template>
  <Layout>
    <!--    <PageHeader :title="title" :items="items"/>-->
    <div class="row">
      <div class="col-12">
        <div class="page-title-box d-sm-flex align-items-center justify-content-between">
          <div class="page-title-right">
            <ol class="breadcrumb m-0">
              <li>
                <label for="start" class="form-label">Start</label>
                <input type="date" class="form-control" id="start">
              </li>
              <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
              <li>
                <label for="end" class="form-label">End</label>
                <input type="date" class="form-control" id="end">
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title mb-0">Revenue</h4>
          </div>
          <!-- end card header -->
          <div class="card-body">
            <apexchart
                class="apex-charts"
                height="350"
                dir="ltr"
                :series="splineAreaChart.series"
                :options="splineAreaChart.chartOptions"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../../layouts/main.vue";
// import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

export default {
  page: {
    title: "Starter",
    meta: [{name: "description", content: appConfig.description}],
  },
  data() {
    return {
      title: "Starter",
      items: [
        {
          text: "Pages",
          href: "/",
        },
        {
          text: "Starter",
          active: true,
        },
      ],

      splineAreaChart: {
        series: [
          {
            name: "series1",
            data: [31, 40, 28, 51, 42, 109, 100],
          },
          {
            name: "series2",
            data: [11, 32, 45, 32, 34, 52, 41],
          },
        ],
        chartOptions: {
          chart: {
            height: 350,
            type: "area",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
          },
          colors: ['#405189', '#0ab39c'],
          xaxis: {
            title: {
              text: "Daily Interval",
              style: {
                fontColor: '#fefefe',
                fontSize: 16,
                fontWeight: 500,
              }
            },
            type: "datetime",
            categories: [
              "2018-09-19T00:00:00.000Z",
              "2018-09-19T01:30:00.000Z",
              "2018-09-19T02:30:00.000Z",
              "2018-09-19T03:30:00.000Z",
              "2018-09-19T04:30:00.000Z",
              "2018-09-19T05:30:00.000Z",
              "2018-09-19T06:30:00.000Z",
            ],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
          title: {
            text: "Partner Name",
            align: "center",
            style: {
              fontWeight: 500,
              fontSize: 16,
              fontColors: '#FF0000'
            },
          },
          yaxis: {
            title: {
              text: "BASEREVENUE RANGES",
              style: {
                fontSize: 16,
                fontWeight: 500,
              }
            },
          },
          legend: {
            position: "top",
            horizontalAlign: "center",
          },
        },
      },
    };
  },
  methods: {},
  components: {
    Layout,
    // PageHeader,
  },
};
</script>

<style lang="scss">
.apexcharts-text.apexcharts-yaxis-title-text,
.apexcharts-text.apexcharts-xaxis-title-text,
.apexcharts-title-text {
  fill: #FF0000; /* Set the y-axis label color to red */
}
</style>