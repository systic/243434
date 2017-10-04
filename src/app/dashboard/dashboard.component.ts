import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as d3 from 'd3';
declare var jquery:any;
declare var $ :any;

import { DataService } from '../data.service';
import { SelectComponent } from '../select/select.component';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']

})
export class DashboardComponent implements OnInit {
  db: any;
  state: any;
  searchList: any[];
  autoSuggestList: any[];
  currentChartData: any[];
  curChartLabelLt: any[];
  curChartLabelRt: any[];
  searchText: string;
  searchType: string;
  alertModalOpen: boolean;
  hasTableOpts: any;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.db = {
      dash: {},
      chartLabelLt:[],
      chartLabelRt:[]
    };
    this.alertModalOpen = false;
    this.searchText = "";
    this.searchType = "Customer Name";
    this.curChartLabelLt = [];
    this.curChartLabelRt = [];
    this.currentChartData=[];
    this.searchList = [];
    this.autoSuggestList = [];

    this.getData('./api/lookup.json', this.lookupUpdate);
    this.getData('./api/db.json', this.onDataReceived);

    this.state={};
    this.state.datepickerType="week";

    $('.datepicker-link').daterange();
  }

  // toggleChk of table options
    toggleChk(item, list) {
      if(item.isAll){
        if(item.isChecked){
          list.map(item => item.isChecked = false)
        }else{
          list.map(item => item.isChecked = true)
        }
      }else{
        item.isChecked = !!item.isChecked?false:true
      }
    }

    //toggleSortOpts
    toggleSortOpts(){
      this.hasTableOpts = !!this.hasTableOpts?false:true;
    }
    //toggleSortOpts
    closeSortOpts(){
      this.hasTableOpts = false;
    }

   // onDataReceived
   onDataReceived(data, _this) {
     _this.db = data;
     _this.db = _this.db['details'];
     _this.currentChartData = _this.db.chartDataDate;
     _this.curChartLabelLt = _this.db.chartLabelLt;
     _this.curChartLabelRt = _this.db.chartLabelRt;
     _this.drawDonutChart(_this.currentChartData);
     _this.autoSuggestList = _this.db['autoSuggestList'];
   }

   lookupUpdate(data, _this) {
     _this.searchList = data.searchList;
   }

   // getsearchList 
   getSearchList(dataList, keyword, category) {
     if(!!dataList && dataList.length>0 && category==='Customer Name'){
     let newList = [];
       keyword = keyword.toLowerCase();
       dataList.map((item,i)=>{
         if(item.clientName.toLowerCase().indexOf(keyword)>=0){
           newList.push(item);
         }
       })
       return newList;
     }
       return dataList;
   }

   /**
    * draws chart
    * @param {array} dataset datalist
    */
   drawDonutChart(dataset) {
     let width = 132;
     let height = 132;
     let radius = Math.min(width, height) / 2;

     let color = d3.scaleLinear(d3.schemeCategory20c);

     let svg = d3.select('#proposal-chart svg')
     .attr('width', width)
     .attr('height', height)
     .append('g')
     .attr('transform', 'translate(' + (width / 2) + 
     ',' + (height / 2) + ')');

     let donutWidth = 30;

     let arc = d3.arc()
     .innerRadius(radius - donutWidth)
     .outerRadius(radius);

     let pie = d3.pie()
     .value(function(d) { return d.value; })
     .sort(null);

     let legendRectSize = 18;
     let legendSpacing = 4;

     let path = svg.selectAll('path')
     .data(pie(dataset))
     .enter()
     .append('path')
     .attr('d', arc)
     .attr('fill', function(d, i) { 
       return d.data.color;

     });


   }

   //show Alert
   showAlert(){
     this.alertModalOpen = true;
   }
   hideAlert(){
     this.alertModalOpen = false;
   }

   //sets date type
   setDateType(newVal){
     this.state.datepickerType=newVal;

     if(newVal==="week"){
       this.currentChartData = this.db.chartDataWeek;
       this.curChartLabelLt = this.db.chartLabelLtWeek;
       this.curChartLabelRt = this.db.chartLabelRtWeek;
     } else if (newVal === "month"){
       this.currentChartData = this.db.chartDataMonth;
       this.curChartLabelLt = this.db.chartLabelLtMonth;
       this.curChartLabelRt = this.db.chartLabelRtMonth;
     }else{
       this.currentChartData = this.db.chartDataDate;
       this.curChartLabelLt = this.db.chartLabelLt;
       this.curChartLabelRt = this.db.chartLabelRt;
     }
     this.drawDonutChart(this.currentChartData);
   }

  /**
   * get data from service
   */
   getData(url, callback) {
     this.dataService.fetch(url)
     .subscribe(newData => {
       callback(newData, this);
     });
   }
 }
