<template>
  <div class="container">
    <div class="row">
      <ul
        class="nav nav-tabs"
        id="myTab"
        role="tablist"
        style="width: 100%; margin-top: 2rem"
      >
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-toggle="tab"
            data-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Other Responses
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-toggle="tab"
            data-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Opt-in Responses
          </button>
        </li>
      </ul>
      <div
        class="tab-content"
        id="myTabContent"
        style="padding: 1rem; width: 100%"
      >
        <div
          class="tab-pane fade active show in"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
          style="padding: 1rem; width: 100%"
        >
          <div class="row" style="padding: 4rem 0rem">
            <div class="col-md-6">
              <label>Select Questions</label>
              <v-select
                :clearable="false"
                name="ques"
                label="ques"
                :options="pollData"
                v-model="seletedPoll"
                class=""
                @input="getPoll(seletedPoll)"
                style="background-color: #fff"
              />
            </div>
            <div class="col-md-2">
              <img
                @click="download_report()"
                src="../../.././dashboard_resources/excel.png"
                style="width: 32px; margin-top: 2.8rem"
                alt="Excel"
              /><br />
              <h4>Excel</h4>
            </div>

            <div
              class="col-md-6"
              style="background-color: #fff; height: 300px; margin: 2rem auto"
            >
              <div
                v-if="isActive == false"
                style="height: 100%; width: 100%; text-align: center"
              >
                <h1 style="margin-top: 15rem">
                  Please select question for see result..
                </h1>
              </div>
              <div
                v-if="isOtherData == true"
                style="height: 100%; width: 100%; text-align: center"
              >
                <h1 style="margin-top: 15rem">No Response yet..</h1>
              </div>
              <div
                id="chart"
                class="bg-white mt-2"
                style="border-radius: 10px; margin: 0 auto"
                v-if="showApexChart == true"
              >
                <apexchart
                  type="pie"
                  v-if="show_data"
                  width="400"
                  height="400"
                  :options="chartOptions"
                  :series="series"
                ></apexchart>
                <!--                    <apexchart type="pie" v-if="show_data"  :options="chartOptions" :series="series"></apexchart>-->
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
          style="padding: 1rem"
        >
          <div class="row" style="padding: 4rem 0rem">
            <div class="col-md-6">
              <label>Select Questions</label>
              <v-select
                :clearable="false"
                name="ques"
                label="ques"
                :options="opt"
                v-model="seletedOpt"
                class=""
                @input="getOpt(seletedOpt)"
                style="background-color: #fff"
              />
            </div>
            <div class="col-md-2">
              <img
                @click="download_report()"
                src="../../.././dashboard_resources/excel.png"
                style="width: 32px; margin-top: 2.8rem"
                alt="Excel"
              /><br />
              <h4>Excel</h4>
            </div>

            <!-- <div class="col-md-6" style="background-color: #fff;height:300px;margin:2rem auto">
                      <div v-if="isActive==false" style="height:100%;width:100%;text-align: center;">
                          <h1 style="margin-top: 15rem">Please select question for see result..</h1>

                      </div>
                      <div  id="chart" class="bg-white mt-2" style="border-radius: 10px;margin: 0 auto;">
                          <apexchart type="pie" v-if="show_data" width="400" height="400"  :options="chartOptions" :series="series"></apexchart>
                                             <apexchart type="pie" v-if="show_data"  :options="chartOptions" :series="series"></apexchart>


                      </div>

                  </div> -->
          </div>
          <!-- 
                    <div>
                        <code>query: {{ query }}</code>
                        <datatable
                                
                                :columns="columns"
                                :data="paginatedData"
                                :total="total"
                                :query="query"
                                @page-change="onPageChange"
                            />
                    </div> -->
          <div>
            <table
              class="table"
              style="background-color: white; text-align: center"
            >
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in displayedRecords" :key="index">
                  <td scope="row">{{ index + 1 }}</td>
                  <td scope="row">{{ item.name }}</td>
                  <td scope="row" style="font-size: 15px; color: red">
                    {{ item.response }}
                  </td>
                </tr>
              </tbody>
            </table>
            <pagination
              :records="OptIn.length"
              v-model="page"
              :per-page="perPage"
              @paginate="callback"
            ></pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PollResponse",
  props: ["pollresponse", "opt", "groupRef"],
  data() {
    return {
      page: 1,
      perPage: 10,
      records: [],
      columns: [
        { title: "Name", field: "name", sortable: true },
        { title: "Response", field: "response" },
      ],
      data: [],
      total: 0,
      query: {
        page: 1,
        perPage: 10,
      },
      pollData: "",
      seletedPoll: "",
      seletedOpt: "",
      dataGet: "",
      isActive: false,
      series: [],
      chartOptions: {
        chart: {
          width: 380,
          type: "pie",
        },
        toolbar: {
          show: true,
        },
        labels: [],

        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      show_data: false,
      setFormData: "",
      OptIn: "",
      isOtherData: false,
      showApexChart: false,
      isOtherDataArray: [],
    };
  },

  computed: {
    displayedRecords() {
      const startIndex = this.perPage * (this.page - 1);
      const endIndex = startIndex + this.perPage;
      return this.OptIn.slice(startIndex, endIndex);
    },
  },
  mounted() {
    console.log("poll ");
    this.pollData = this.pollresponse;
  },
  methods: {
    download_report() {
      console.log(" report ", JSON.stringify(this.setFormData.refid));
      let form = new FormData();
      form.set("id", this.setFormData.refid);
      form.set("group_ref", this.groupRef);
      form.set("type", "poll_response_dump");
      axios
        .post("/api/webservices/fetch_group_excel_dump", form)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          if (response.data.status == true) {
            console.log(JSON.stringify(response.data.data.data));
            const file_name = "poll_response";
            this.exportToCsv(file_name + ".csv", response.data.data.data);
            this.loading2 = false;
          } else {
            this.loading2 = false;
            alert("No Data Defined");
          }
        })
        .catch((error) => {
          this.loading2 = false;
          alert("Error while fetching ");
        });
      console.log(" download report");
    },
    exportToCsv(filename, rows) {
      var processRow = function (row) {
        var finalVal = "";
        for (var j = 0; j < row.length; j++) {
          var innerValue = row[j] === null ? "" : row[j].toString();
          if (row[j] instanceof Date) {
            innerValue = row[j].toLocaleString();
          }
          var result = innerValue.replace(/"/g, '""');
          if (result.search(/("|,|\n)/g) >= 0) result = '"' + result + '"';
          if (j > 0) finalVal += ",";
          finalVal += result;
        }
        return finalVal + "\n";
      };

      var csvFile = "";
      for (var i = 0; i < rows.length; i++) {
        csvFile += processRow(rows[i]);
      }

      var blob = new Blob([csvFile], { type: "text/csv;charset=utf-8;" });
      if (navigator.msSaveBlob) {
        // IE 10+
        navigator.msSaveBlob(blob, filename);
      } else {
        var link = document.createElement("a");
        if (link.download !== undefined) {
          // feature detection
          // Browsers that support HTML5 download attribute
          var url = URL.createObjectURL(blob);
          link.setAttribute("href", url);
          link.setAttribute("download", filename);
          link.style.visibility = "hidden";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }
    },
    getPoll(select) {
      this.setFormData = select;
      this.show_data = false;
      this.isOtherData = false;
      this.showApexChart = false;
      console.log(select);
      const dataSet = new FormData();
      dataSet.set("id", select.refid);
      axios
        .post("/api/v1/getPollData", dataSet)
        .then((res) => {
          console.log("this.dataGet", JSON.stringify(res.status));
          if (res.data.status == true) {
            this.dataGet = _.cloneDeep(res.data.data.ans);
            console.log("this.dataGet", this.dataGet);
            let isResponse = this.isResponseThere(this.dataGet);
            this.isActive = true;
            this.childFunction(this.dataGet);
          }
        })
        .catch((error) => {
          console.log("Some error occurred!", error);
        });
    },
    getOpt(select) {
      console.log(" get opt");
      this.setFormData = select;
      this.showApexChart = false;
      this.isOtherData = false;
      this.isOtherDataArray = [];
      this.is;
      const dataSet = new FormData();
      this.show_data = false;
      console.log(select);
      dataSet.set("id", select.refid);
      axios
        .post("/api/v1/getOptData", dataSet)
        .then((data) => {
          if (data.data.status == true) {
            this.OptIn = data.data.data;
            this.data = data.data.data;
            this.total = data.data.data.length;
          }
          console.log("this.dataGet", JSON.stringify(this.OptIn));
        })
        .catch((error) => {
          console.log("Some error occurred!", error);
        });
    },
    isResponseThere(newData) {
      newData.forEach((data) => {
        console.log("feedback pi chart", JSON.stringify(data));
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const value = data[key];
            if (value == 0) {
              console.log(" -----value---", value);
              this.isOtherDataArray.push(value);
            }
          }
        }
      });
      console.log(
        " check there is anything",
        this.isOtherDataArray.length,
        newData.length
      );
      if (this.isOtherDataArray.length === newData.length) {
        this.isOtherData = true;
        this.isOtherDataArray = [];
        console.log(" this . is Other data array  ", this.isOtherDataArray);
      } else {
        this.showApexChart = true;
        this.isOtherDataArray = [];
      }
    },
    childFunction(ddd) {
      // console.log("feedback pi chart", ddd);
      let values = [];
      this.chartOptions.labels = [];

      ddd.forEach((data) => {
        for (const [key, value] of Object.entries(data)) {
          values.push(value);
          this.chartOptions.labels.push(key);
        }
      });

      this.series = _.cloneDeep(values);
      console.log(
        "this is chart option",
        this.chartOptions.labels,
        this.series
      );
      this.show_data = true;
    },
    onPageChange(newPage) {
      console.log("New Page:", newPage); // Add this line for debugging
      this.query.page = newPage;
      console.log("Updated Page:", this.query.page); // Add this line for debugging
    },
  },
  watch: {
    query: {
      handler(newQuery, oldQuery) {
        console.log("New Query:", newQuery);
        console.log("Old Query:", oldQuery);

        this.getOpt(this.seletedOpt); // Fetch data from the API whenever query changes
      },
      deep: true,
    },
  },

  components: { apexchart: VueApexCharts, Pagination },
};
</script>

<style scoped>
.nav {
  float: left !important;
}
</style>
