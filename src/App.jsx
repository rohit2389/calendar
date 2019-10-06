import React from 'react';
import Calendar from './components/calendar/Calendar'
import moment from "moment"
export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: moment().format("DD/MM/YYYY"),
            isDisplay: false
        }
        this.handleCalendar =this.handleCalendar.bind(this);
        this.handleDate = this.handleDate.bind(this);
    }
    handleCalendar(){
        this.setState({isDisplay: !this.state.isDisplay})
    }
    handleDate(newDate){
        this.setState({ selected: newDate })
    }
    render(){
        const { selected, isDisplay } = this.state;
        return (
            <React.Fragment>
                <input 
                    type="text"
                    value={ selected }
                    onFocus={this.handleCalendar}
                    onChange={() => {}}
                />
                <Calendar
                    isDisplay ={ isDisplay }
                    selected ={ selected }
                    handleCalendar = { this.handleCalendar }
                    handleDate = { this.handleDate }
                />
            </React.Fragment>
        )
    }
}