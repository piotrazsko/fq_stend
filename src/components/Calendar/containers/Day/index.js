import React, {
    Component
} from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class Day extends Component {

    render() {
        const props = { ...this.props
        };
        return (
            <DayPicker {...props} />
        );
    }

}

export default Day;
