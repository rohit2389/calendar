import React from "react";
import moment from "moment"
import './Calendar.scss';
import Weeks from './Weeks';
import SelectedDay from './SelectedDay';
import CalendarHeader from './CalendarHeader';
class Calendar extends React.Component {
    constructor(props) {
        super(props);
        const selected = this.props.selected;
        this.state = {
            month: moment(),
            selected: moment(selected, 'DD/MM/YYYY', true).format()
        };

        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        this.select = this.select.bind(this);
        this.handleDate =this.handleDate.bind(this)
    }

    previous() {
        const {
            month,
        } = this.state;

        this.setState({
            month: month.subtract(1, 'month'),
        });
    }

    next() {
        const {
            month,
        } = this.state;

        this.setState({
            month: month.add(1, 'month'),
        });
    }

    select(day) {
        this.setState({
            selected: day.date,
            month: day.date.clone(),
        });
    }

    handleDate(){
        const date = moment(this.state.selected).format("DD/MM/YYYY");
        console.log(date)
        this.props.handleDate(date);
        this.props.handleCalendar();
    }

    render() {
        const { month, selected } = this.state;
        const { isDisplay } = this.props;

        return (
            <main className={"calendar-wrapper " + (isDisplay ? "show" : "hide")}>
                <section className="calendar">
                    <aside className="calendar-left-panel">
                        <SelectedDay month={month} />
                    </aside>

                    <aside className="calendar-right-panel">
                        <CalendarHeader 
                            month={ month }
                            previous={ this.previous }
                            next={ this.next }
                        />
                        <Weeks
                            select={ this.select }
                            month= { month }
                            selected= { selected }
                        />
                    </aside>
                </section>
            </main>
        );
    }
}
Calendar.defaultProps  = {
    isDisplay: true,
    selected: moment().format("DD/MM/YYYY")
}

export default Calendar;