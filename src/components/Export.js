import React from "react";
import ReactExport from "react-data-export";
import { connect } from "react-redux";
import moment from "moment";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

class Export extends React.Component {
  all = () => {
    if (this.props.sections.length > 0) {
      const sections = this.props.sections;
      const start = sections[0].start;
      const end = sections[sections.length - 1].end;
      let elapsed = moment(0);
      const res = sections.map(el => {
        elapsed = elapsed.add(el.elapsed, "milliseconds");
        return {
          start: el.start.format("MMM DD,YYYY-HH:mm:ss.SS"),
          end: el.end.format("MMM DD,YYYY-HH:mm:ss.SS"),
          elapsed: moment.utc(el.elapsed).format("HH:mm:ss.SS"),
          works: el.works
        };
      });
      const final = {
        elapsed: moment.utc(elapsed).format("HH:mm:ss.SS"),
        start: start.format("MMM DD,YYYY-HH:mm:ss.SS"),
        end: end.format("MMM DD,YYYY-HH:mm:ss.SS"),
        works: moment
          .utc(moment.duration(end.diff(start)).asMilliseconds())
          .format("HH:mm:ss.SS")
      };
      res.push(final);
      return res;
    }
  };
  render() {
    return (
      <ExcelFile element={<button className="btn">Sum it!</button>}>
        <ExcelSheet data={this.all} name="times">
          <ExcelColumn label="elapsed" value="elapsed" />
          <ExcelColumn label="start" value="start" />
          <ExcelColumn label="end" value="end" />
          <ExcelColumn label="works" value="works" />
        </ExcelSheet>
      </ExcelFile>
    );
  }
}

const mapStateToProps = state => ({
  sections: state.sections
});

export default connect(mapStateToProps)(Export);
