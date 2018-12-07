import React from 'react';
import Aux from '../../hoc/Auxiliary';
import DirectionMap from '../../components/DirectionMap/DirectionMap';
import Schedule from '../../components/Schedule/Schedule';
import { withFirebase } from '../../Firebase';
import { withAuthorization } from '../../hoc/Session';

const INITIAL_STATE = { schedule: [], day: '', loading: false, error: null };

class ScheduleMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    componentDidMount() {
        const uid = this.props.firebase.auth.O;
        const schedule = this.props.firebase.user(uid).child(`schedule`);
        let day = new Date().getDay();
        if (day === 0 || day === 6 || day === 7) day = 'WK';
        //Fri-Sun are weekends
        else if (day === 1 || day === 3) day = 'MW';
        else day = 'TR';

        this.setState({ loading: true });

        schedule.once('value', snapshot => {
            this.setState({ schedule: snapshot.val(), day, loading: false });
        });
    }

    getHour = time => {
        let temp = time.split(':');
        let hour = temp[0];
        return hour;
    };

    compareTimes = (a, b) => {
        const pm = 'pm';
        let aHour = this.getHour(a.startTime);
        let bHour = this.getHour(b.startTime);

        if (a.startTime.includes(pm) && aHour !== 12) {
            bHour += 12;
        }

        if (b.startTime.includes(pm) && bHour !== 12) {
            bHour += 12;
        }
        if (aHour < bHour) return -1;
        if (aHour > bHour) return 1;
        return 0;
    };

    getTodaysClasses = (sched, day) => {
        let todaysClasses = [];
        if (sched !== null) {
            for (let i = 0; i < sched.length; i++) {
                if (sched[i].days === day) todaysClasses.push(sched[i]);
            }
        }
        return todaysClasses;
    };

    render() {
        const sortedSchedule = this.getTodaysClasses(this.state.schedule, this.state.day).sort(this.compareTimes);
        let buildings = [];
        for (let i = 0; i < sortedSchedule.length; i++) {
            buildings.push(sortedSchedule[i].building);
        }

        return (
            <Aux>
                <Schedule schedule={sortedSchedule} day={this.state.day} />
                {this.state.loading && <p>Loading Schedule...</p>}
                {!this.state.loading && <DirectionMap buildings={buildings} />}
            </Aux>
        );
    }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(withFirebase(ScheduleMap));
