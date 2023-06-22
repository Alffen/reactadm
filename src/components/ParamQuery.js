/* eslint-disable no-undef */
import React from "react";

class ParamQuery extends React.Component {
    componentDidMount() {
      this.options = this.props.options;
      this.grid = pq.grid(this.refs.grid, this.options);
    }
    componentDidUpdate(prevProps) {
      var src = this.props.options, dest = this.options;
      for(var key in src){
        if(src[key] !== dest[key])
          dest[key] = src[key]
      }
      Object.assign(this.options, this.props.options);
    }
    render() {
      return <div ref='grid'></div>
    }
    // export(){    
    //   var blob = this.grid.exportData({           
    //           format: "xlsx",                    
    //           render: true
    //       });
    //   if(typeof blob === "string"){                            
    //       blob = new Blob([blob]);
    //   }
    //   saveAs(blob, "ParamQuery.xlsx" );
    // }
  }
  
  class GridTable extends React.Component {
    constructor(props) {
      super(props)
      this.onExport = this.onExport.bind(this);
      this.columns1 = [
        { title: "Company", width: 150, dataType: "string", dataIndx: "company" },
        { title: "Revenues", width: 100, dataType: "float", dataIndx: "revenues", format: '#.0' },
        { title: "Profits", width: 100, dataType: "float", dataIndx: "profits", format: '#.0' }
      ]
      this.data1 = [
        { company: 'Exxon Mobil', revenues: 339938.0, profits: 36130.0 },
      { company: 'Wal-Mart Stores', revenues: 315654.0, profits: 11231.0 },
      { company: 'Royal Dutch Shell', revenues: 306731.0, profits: 25311.0 },
      { company: 'BP', revenues: 267600.0, profits: 22341.0 },
      { company: 'General Motors', revenues: 192604.0, profits: -10567.0 },
      { company: 'Chevron', revenues: 189481.0, profits: 14099.0 },
      { company: 'DaimlerChrysler', revenues: 186106.3, profits: 3536.3 },
      { company: 'Toyota Motor', revenues: 185805.0, profits: 12119.6 },
      { company: 'Ford Motor', revenues: 177210.0, profits: 2024.0 },
      { company: 'ConocoPhillips', revenues: 166683.0, profits: 13529.0 },
      { company: 'General Electric', revenues: 157153.0, profits: 16353.0 },
      { company: 'Total', revenues: 152360.7, profits: 15250.0 },
      { company: 'ING Group', revenues: 138235.3, profits: 8958.9 },
      { company: 'Citigroup', revenues: 131045.0, profits: 24589.0 },
      { company: 'AXA', revenues: 129839.2, profits: 5186.5 },
      { company: 'Allianz', revenues: 121406.0, profits: 5442.4 },
      { company: 'Volkswagen', revenues: 118376.6, profits: 1391.7 },
      { company: 'Fortis', revenues: 112351.4, profits: 4896.3 },
      { company: 'Crédit Agricole', revenues: 110764.6, profits: 7434.3 },
      { company: 'American Intl. Group', revenues: 108905.0, profits: 10477.0 }
      ]
      this.state = {
        showTitle: false,
        locale: 'tr',
        height: "flex",
        numberCell: {
          show: true
        },
        columnTemplate: { width: 200 },
        // pageModel: {
        //   type: 'local',
        //   rPP: 1000,
        //   rPPOptions: [3, 5, 10],
        //   layout: ["strDisplay", "|", "prev", "next"]
        // },
        colModel: this.columns1,
        animModel: {
          on: true
        },
        scrollModel: { autoFit: true },
        dataModel: {
          data: this.data1
        },
  
      }
    }
    onExport(event) {    
      this.refs.grid.export();
    }
    render() {
      return <div>
        <div style={{ margin: 20 }}>
  
          {/* <input type="button" value="Export" onClick={this.onExport} /> */}
  
        </div>
  
        <ParamQuery options={this.state} ref="grid"/>
      </div>
    }
  }

  export default GridTable