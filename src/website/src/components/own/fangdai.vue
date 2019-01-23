<template>
    <el-table
      :data="tableData"
      height="100%"
      :row-class-name="tableRowClassName"
      style="width: 100%">
        <el-table-column
            prop="date"
            label="日期"
            width="150">
        </el-table-column>
        <el-table-column
            prop="count"
            label="本期还款"
            width="150">
        </el-table-column>
        <el-table-column
            prop="benJin"
            label="本期本金">
        </el-table-column>
        <el-table-column
            prop="benXi"
            label="本期本息">
        </el-table-column>
        <el-table-column
            prop="moneyCount"
            label="本期剩余">
        </el-table-column>
        <el-table-column
            prop="dateNumber"
            label="还款月数">
        </el-table-column>
    </el-table>
</template>
<script>
export default {
    mounted() {
        this.init()
    },
    data() {
        return {
          tableData: []
        }
    },
    methods : {
        init() {
            this.tableData = []
            let startDate = { year:2015, month:4}   //起始年月
            let moneyCount = 39000000               //贷款总额
            let rate = 0.049                        //年利率
            let time = 360                          //贷款总月数
            let benJin = Math.floor(moneyCount / time)
            for (let i = 0 ; i < time; ++i) {
                let data = {}
                data.year = startDate.year
                data.month = startDate.month
                data.date = `${data.year}年 ${data.month}月`
                data.benJin = this.getNumber(benJin / 100)
                data.benXi = this.getNumber(moneyCount * rate / 12 / 100)
                data.count = (data.benJin + data.benXi).toFixed(2)
                moneyCount = moneyCount - benJin
                data.moneyCount = this.getNumber(moneyCount / 100).toLocaleString()
                data.dateNumber = `${i + 1} / ${time - i - 1}`
                startDate = this.nextMonth(startDate)
                this.tableData.push(data)
            }
        },
        getNumber(num) {
            return Math.floor(num * 100) / 100
        },
        nextMonth(date) {
            if (date.month == 12) {
                return { year : date.year + 1, month : 1}
            } else {
                return { year : date.year, month : date.month + 1}
            }
        },
        tableRowClassName({row, rowIndex}) {
            let date = new Date()
            if (date.getFullYear() == row.year && date.getMonth() == row.month - 1) {
                return 'warning-row';
            }
            return '';
        }
    }
}
</script>
<style>
.el-table .warning-row {
    background: #00ff00;
  }
</style>
